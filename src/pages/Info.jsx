import React from 'react';
import { Link } from 'react-router-dom';
import { useInfoData, useSettingsData } from '../hooks/useStrapiData';
import PageLayout from '../components/layout/PageLayout';
import InfoItem from '../components/InfoItem';

const Info = () => {
  const { data: response } = useInfoData();
  const infoData = response?.data || [];
  const { data: settingResponse } = useSettingsData();
  const settingsData = settingResponse?.data || [];

  return (
    <PageLayout>
      <div className="space-y-6">
        {infoData.map((item) => (
              <InfoItem
                key={item.id}
                year={item.Year}
                title={item.Title}
                subtitle={item.SubTitle}
                className="dark:text-white"
              />
        ))}
      </div>
      
      <div className="flex flex-col space-y-2 md:space-y-4 mt-16">
        {settingsData?.Menu?.filter((menuItem) => {
          const link = String(menuItem.Link || '').toLowerCase();
          const name = String(menuItem.Name || '').toLowerCase();
          return link !== 'awards' && !name.includes('award');
        }).map((menuItem) => (
          <div key={menuItem.id} className="flex items-center text-[16px] md:text-[16pt] text-black dark:text-white">
            <Link
              to={menuItem.Link.startsWith('http') ? menuItem.Link : `/${menuItem.Link}`} 
              target={menuItem.Target}
              className="flex items-center"
            >
              <span className={`mr-2 transform ${menuItem.Link.startsWith('http') ? '-rotate-45' : ''}`}>→</span>
              {menuItem.Name}
            </Link>
          </div>
        ))}
        <div className="flex items-center text-[16px] md:text-[16pt] text-black dark:text-white">
          
          <Link to="/">
            <span className="mr-2">←</span>
            Back
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Info;