"use strict";(()=>{var e={};e.id=409,e.ids=[409],e.modules={3480:(e,r,t)=>{e.exports=t(5600)},5377:(e,r,t)=>{t.r(r),t.d(r,{config:()=>c,default:()=>d,routeModule:()=>p});var s={};t.r(s),t.d(s,{default:()=>u});var o=t(3480),n=t(8667),a=t(6435);let i=require("nodemailer");var l=t.n(i);async function u(e,r){if("POST"!==e.method)return r.setHeader("Allow",["POST"]),r.status(405).json({error:`Method ${e.method} Not Allowed`});{let{name:t,email:s,message:o}=e.body;if(!t||!s||!o)return r.status(400).json({error:"Missing required fields"});let n=l().createTransport({host:process.env.EMAIL_SERVER_HOST,port:parseInt(process.env.EMAIL_SERVER_PORT||"465"),secure:465===parseInt(process.env.EMAIL_SERVER_PORT||"465"),auth:{user:process.env.EMAIL_SERVER_USER,pass:process.env.EMAIL_SERVER_PASSWORD}}),a={from:`"${t}" <${process.env.EMAIL_FROM}>`,replyTo:s,to:process.env.EMAIL_FROM,subject:`New Contact Form Submission from ${t}`,text:`You have a new message from your website contact form:

Name: ${t}
Email: ${s}
Message: ${o}`,html:`
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p>You have received a new message from your website's contact form.</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p><strong>Name:</strong> ${t}</p>
          <p><strong>Email:</strong> <a href="mailto:${s}">${s}</a></p>
          <p><strong>Message:</strong></p>
          <div style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <p style="white-space: pre-wrap;">${o.replace(/\n/g,"<br>")}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p style="font-size: 0.9em; color: #777;">This email was sent from your website contact form.</p>
        </div>
      `};try{return await n.sendMail(a),console.log("Email sent successfully"),r.status(200).json({message:"Message sent successfully!"})}catch(t){console.error("Error sending email:",t);let e=t instanceof Error?t.message:"Unknown error";return r.status(500).json({error:`Failed to send message: ${e}`})}}}let d=(0,a.M)(s,"default"),c=(0,a.M)(s,"config"),p=new o.PagesAPIRouteModule({definition:{kind:n.A.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:s})},5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6435:(e,r)=>{Object.defineProperty(r,"M",{enumerable:!0,get:function(){return function e(r,t){return t in r?r[t]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,t)):"function"==typeof r&&"default"===t?r:void 0}}})},8667:(e,r)=>{Object.defineProperty(r,"A",{enumerable:!0,get:function(){return t}});var t=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=r(r.s=5377);module.exports=t})();