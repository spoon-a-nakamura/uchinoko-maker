import { useRouter } from 'next/router';
import Head from 'next/head';
import { VFC } from 'react';

const baseUrl = '';
const siteName = '';

export type MetaProps = {
  title: string;
  description: string;
  // ogImage: string;
  ogType?: 'article' | 'website'; // default: article
};
const Meta: VFC<MetaProps> = ({
  title,
  description,
  // ogImage,
  ogType = 'article',
}) => {
  const { asPath } = useRouter();
  const canonicalUrl = `${baseUrl}${asPath}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      {/* <meta property="og:image" content={`${baseUrl}${ogImage}`} /> */}
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default Meta;
