import React, { useEffect, useRef, useState, useCallback } from 'react';

export default function QuoteMateWalkthrough() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [activated, setActivated] = useState(false);
    const [paused, setPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const onTimeUpdate = () => {
            if (!isDragging && video.duration) {
                setProgress((video.currentTime / video.duration) * 100);
            }
        };
        video.addEventListener('timeupdate', onTimeUpdate);
        return () => video.removeEventListener('timeupdate', onTimeUpdate);
    }, [isDragging]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => {});
                        setPaused(false);
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.25 }
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    const seekTo = useCallback((clientX: number) => {
        const video = videoRef.current;
        const bar = progressRef.current;
        if (!video || !bar || !video.duration) return;
        const rect = bar.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        video.currentTime = ratio * video.duration;
        setProgress(ratio * 100);
    }, []);

    const handleProgressDown = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        seekTo(clientX);
        const onMove = (ev: MouseEvent | TouchEvent) => {
            const x = 'touches' in ev ? ev.touches[0].clientX : ev.clientX;
            seekTo(x);
        };
        const onUp = () => {
            setIsDragging(false);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onUp);
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        window.addEventListener('touchmove', onMove);
        window.addEventListener('touchend', onUp);
    };

    const handleVideoTap = () => {
        const video = videoRef.current;
        if (!video) return;
        if (!activated) {
            video.muted = false;
            video.play().catch(() => {});
            setActivated(true);
            setPaused(false);
            return;
        }
        if (video.paused) {
            video.play().catch(() => {});
            setPaused(false);
        } else {
            video.pause();
            setPaused(true);
        }
    };

    const handlePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        video.play().catch(() => {});
        setPaused(false);
    };

    const handleReset = (e: React.MouseEvent) => {
        e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = 0;
        video.play().catch(() => {});
        setPaused(false);
    };

    const handleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        video.muted = true;
        setActivated(false);
        setPaused(false);
        video.play().catch(() => {});
    };

    const handleFullscreen = (e: React.MouseEvent) => {
        e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if ((video as any).webkitEnterFullscreen) {
            (video as any).webkitEnterFullscreen();
        }
    };

    const showControls = activated && paused;

    return (
        <div className="relative w-full max-w-sm mx-auto">
            <div
                className="relative aspect-[9/16] rounded-[3rem] overflow-hidden bg-dark-card border-8 border-gray-800 shadow-2xl cursor-pointer"
                onClick={handleVideoTap}
            >
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    loop
                    preload="none"
                    poster="https://quotemateapp.au/assets/videos/walkthrough-poster.jpg"
                    aria-label="Full QuoteMate app walkthrough"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://quotemateapp.au/assets/videos/walkthrough.webm" type="video/webm" />
                    <source src="https://quotemateapp.au/assets/videos/walkthrough.mp4" type="video/mp4" />
                </video>

                {/* Paused overlay */}
                {showControls && (
                    <div className="absolute inset-0 bg-black/40" />
                )}

                {/* Controls — visible when paused */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-opacity duration-200 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <button onClick={handlePlay} className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors" aria-label="Play">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    </button>
                    <button onClick={handleReset} className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors" aria-label="Restart">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
                    </button>
                    <button onClick={handleMute} className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors" aria-label="Mute">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                    </button>
                    <button onClick={handleFullscreen} className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors" aria-label="Fullscreen">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></svg>
                    </button>
                </div>

                {/* Progress bar — visible when paused */}
                <div
                    className={`absolute bottom-4 left-4 right-4 transition-opacity duration-200 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    ref={progressRef}
                    onMouseDown={handleProgressDown}
                    onTouchStart={handleProgressDown}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative h-1.5 bg-white/30 rounded-full cursor-pointer">
                        <div className="absolute inset-y-0 left-0 bg-brand-accent rounded-full" style={{ width: `${progress}%` }} />
                        <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md" style={{ left: `${progress}%`, marginLeft: '-7px' }} />
                    </div>
                </div>

                {/* Tap for sound indicator */}
                {!activated && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-xs pointer-events-none">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                        <span>Tap for sound</span>
                    </div>
                )}
            </div>

            {/* Phone notch effect */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gray-800 rounded-b-3xl"></div>
        </div>
    );
}
