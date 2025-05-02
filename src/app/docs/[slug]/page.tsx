import React from 'react';
import { getDocContent, getAllDocs } from '@/lib/docs';
import MDXContent from '@/components/MDXContent';

interface DocsPageProps {
  params: {
    slug: string;
  };
}

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate the data every hour

export async function generateStaticParams() {
  const slugs = getAllDocs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = params;
  const content = await getDocContent(slug);
  
  return <MDXContent content={content} />;
} 