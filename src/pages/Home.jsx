import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// import useWindowResize from '../hooks/useWindowResize';
import { useHomeDataSupabase } from '../hooks/useHomeDataSupabase.js';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import PageLayout from '../components/layout/PageLayout';

const Home = () => {
  // const { windowSize, baseUnit } = useWindowResize();
  const { data: homeData, loading } = useHomeDataSupabase();

  return (
    <>
      <Helmet>
        <title>{homeData?.SEO?.SEO_Title || 'Ramin Tahbaz'}</title>
        <meta
          name="description"
          content={homeData?.SEO?.SEO_Description || "Welcome to Ramin's portfolio"}
        />
        <meta
          property="og:title"
          content={homeData?.SEO?.SEO_Title || 'Ramin Tahbaz'}
        />
        <meta
          property="og:description"
          content={homeData?.SEO?.SEO_Description || "Welcome to Ramin's portfolio"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${typeof window !== 'undefined' ? window.location.origin : ''}/og-image.jpg`} />
      </Helmet>

      <PageLayout>
        <div
          className="flex flex-col"
          style={{
            // '--base-unit': `${baseUnit}px`,
            // minHeight: `${windowSize.height}px`
          }}
        >
          <div className="mb-[70px] md:mb-[170px]">
            {loading ? null : homeData?.Content ? (
              <div className="prose max-w-xl dark:prose-invert">
                <BlocksRenderer content={homeData.Content} />
              </div>
            ) : (
              <p className="text-[16px] md:text-[16pt] text-gray-900 dark:text-white max-w-xl">
                No content available
              </p>
            )}
          </div>

          <nav className="mb-16">
            <div className="flex flex-col space-y-2">
              {homeData?.Menu?.filter((menuItem) => {
                const link = String(menuItem.Link || '').toLowerCase();
                const name = String(menuItem.Name || '').toLowerCase();
                return link !== 'awards' && !name.includes('award');
              }).map((menuItem) => (
                <div
                  key={menuItem.id}
                  className="flex items-center text-[16px] md:text-[16pt] text-black dark:text-white"
                >
                  <span className="mr-2">→</span>
                  <Link 
                    to={`/${menuItem.Link}`} 
                    className="rainbow-hover"
                  >
                    {menuItem.Name?.replace(/[\[\]]/g, '').trim()}
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
