import React from "react";
// import HeroSection from '../components/HeroSection/HeroSection'
import HeroSectionMain from "../components/HeroSection/HeroSectionMain";
import CustomCard from "../components/Card/CustomCard";

function Home() {
  const cardData = [
    {
      image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      title: 'Card title 1',
      description: 'This is the description 1',
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
      // actions: [<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
    },
    {
      image: 'https://your-new-image-url.com/new-image.png',
      title: 'Card title 2',
      description: 'This is the description 2',
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
      // actions: [<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
    },
    {
      image: 'https://another-image-url.com/another-image.png',
      title: 'Card title 3',
      description: 'This is the description 3',
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
      // actions: [<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
    },
    {
      image: 'https://another-image-url.com/another-image.png',
      title: 'Card title 3',
      description: 'This is the description 3',
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
      // actions: [<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
    },
    
    
  ];
  return (
    <>
      {/* <HeroSection/> */}
      <HeroSectionMain />

      <div className="mx-10 pt-16">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-2xl lg:leading-tight xl:text-2xl sm:text-left text-center">
          TOP CATEGORIES
        </h1>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2  gap-2 mx-10 pt-10">
        <div>
          {/* image */}
          <div className="md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md"></div>

          {/* title */}
          <div>
            <p>title lorem ipsum</p>
          </div>
        </div>
        <div>
          {/* image */}
          <div className="md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md"></div>

          {/* title */}
          <div>
            <p>title lorem ipsum</p>
          </div>
        </div>
        <div>
          {/* image */}
          <div className="md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md"></div>

          {/* title */}
          <div>
            <p>title lorem ipsum</p>
          </div>
        </div>
        <div>
          {/* image */}
          <div className="md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md"></div>

          {/* title */}
          <div>
            <p>title lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className="mx-10 pt-16">
        <h1 className="text-2xl uppercase font-bold text-gray-900 sm:text-2xl lg:leading-tight xl:text-2xl sm:text-left text-center">
          More resources
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2  gap-2 mx-10 pt-10">
        {cardData.map((card, index) => (
        <CustomCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          avatar={card.avatar}
          actions={card.actions}
        />
      ))}

        </div>
      </div>
    </>
  );
}

export default Home;
