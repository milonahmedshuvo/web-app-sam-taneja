import React, { useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CardDeals from './cardDeals';
import CardComments from './cardComments';

// Components for each tab




const CardTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1'); // Track active tab

  // Tab change handler
  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };





  // Dynamic items based on the active tab
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <>  <span className='text-[#2c65af] font-normal tracking-widest text-[16px]  '>Datails</span> </>,
      children: activeTab === '1' ? <CardDeals/> : null, // Render component for Tab 1
    },
    {
      key: '2',
      label: <> <span className='text-[#2c65af] font-normal tracking-widest text-[16px]'>Comments</span> </>,
      children: activeTab === '2' ? <CardComments /> : null, // Render component for Tab 2
    },
    
  ];

  return (
    <div className='w-full'>
      <Tabs activeKey={activeTab} onChange={handleTabChange} items={items} />
    </div>
  );
};

export default CardTab;
