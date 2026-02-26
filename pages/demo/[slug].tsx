import { GetStaticProps, GetStaticPaths } from 'next';
import { DemoBusiness } from '../../lib/demo/types';
import { demoBusinesses } from '../../lib/demo/businesses';
import { templateRegistry } from '../../lib/demo/templates';

interface DemoPageProps {
  business: DemoBusiness;
  slug: string;
}

export default function DemoPage({ business }: DemoPageProps) {
  const Template = templateRegistry[business.template];
  if (!Template) return null;
  return <Template business={business} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(demoBusinesses).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DemoPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const business = demoBusinesses[slug];
  if (!business) return { notFound: true };
  return { props: { business, slug } };
};
