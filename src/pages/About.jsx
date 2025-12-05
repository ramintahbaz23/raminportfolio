import React from 'react';
import { Link } from 'react-router-dom';
import { useSettingsData } from '../hooks/useStrapiData'; // keep only settings for now
import { useExperiencesSupabase } from '../hooks/useExperiencesSupabase';
import PageLayout from '../components/layout/PageLayout';
import InfoItem from '../components/InfoItem';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const { data: experiences, loading, error } = useExperiencesSupabase();
  const { data: settingResponse } = useSettingsData();
  const settingsData = settingResponse?.data || [];

  if (loading) return null; // you can add your own spinner if wanted
  if (error) return <div>Error loading about.</div>;

  // --- EXTRA LINKS TO APPEND (will not duplicate if already present)
  const extraLinks = [
    {
      id: 'external-x',
      Link: 'https://x.com/ramintahbaz',
      Name: 'X',
      Target: '_blank',
    },
    {
      id: 'external-git',
      Link: 'https://github.com/ramintahbaz23',
      Name: 'Git',
      Target: '_blank',
    },
    {
      id: 'external-linkedin',
      Link: 'https://www.linkedin.com/in/ramin-tahbaz/',
      Name: 'LinkedIn',
      Target: '_blank',
    },
    {
      id: 'external-imdb',
      Link: 'https://www.imdb.com/name/nm11702949/',
      Name: 'IMDb',
      Target: '_blank',
    },
  ];

  // Merge menu from settings with extraLinks (avoid duplicates by Link)
  const originalMenu = settingsData?.Menu || [];
  const existingLinks = new Set(originalMenu.map((m) => String(m.Link).toLowerCase()));
  const mergedMenu = [
    ...originalMenu,
    ...extraLinks.filter((e) => !existingLinks.has(String(e.Link).toLowerCase())),
  ];

  return (
    <>
      <Helmet>
        <title>{'About'}</title>
        <meta property="og:title" content={'About'} />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageLayout>
        <div className="space-y-10">
          {experiences.map((item) => (
            <InfoItem
              key={item.id}
              year={item.year}
              title={item.title}
              companyLocation={item.company_location}
              className="dark:text-white"
            />
          ))}
        </div>

        <div className="flex flex-col space-y-2 mt-16">
          {mergedMenu.filter((menuItem) => {
            const link = String(menuItem.Link || '').toLowerCase();
            const name = String(menuItem.Name || '').toLowerCase();
            return link !== 'awards' && !name.includes('award');
          }).map((menuItem) => {
            const isExternal = menuItem.Link.startsWith('http');
            const linkContent = isExternal ? `${menuItem.Name?.replace(/[\[\]]/g, '').trim()}*` : menuItem.Name?.replace(/[\[\]]/g, '').trim();
            
            return (
              <div
                key={menuItem.id}
                className="flex items-center text-[16px] md:text-[16pt] text-black dark:text-white"
              >
                <span className="mr-2">→</span>
                {isExternal ? (
                  <a
                    href={menuItem.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rainbow-hover flex items-center"
                  >
                    {linkContent}
                  </a>
                ) : (
                  <Link
                    to={`/${menuItem.Link}`}
                    className="rainbow-hover flex items-center"
                  >
                    {linkContent}
                  </Link>
                )}
              </div>
            );
          })}

          <div className="h-4"></div>

          <div className="flex items-center text-[16px] md:text-[16pt] text-black dark:text-white">
            <span className="mr-2">←</span>
            <Link to="/" className="rainbow-hover">Back</Link>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default About;
