import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import ytthumb1 from "../../assets/yt-thumbnails/ytthumb1.jpg";
import ytthumb2 from "../../assets/yt-thumbnails/ytthmb2.jpg";
import ytthumb3 from "../../assets/yt-thumbnails/ytthumb3.jpg";
import ytthumb4 from "../../assets/yt-thumbnails/ytthumb4.jpg";
import ResourcesCard from "./ResourcesCard";
import Bookmark from "./Bookmark";



function FreeResources() {
    const cardData = [
        {
          image: ytthumb1,
          title: 'Strivers A2Z-DSA Course | DSA Playlist | Placements',
          description: 'This playlist is not in C++ or Java or Python, it covers DSA and we write pseudocode, only one video is in C++, for the basics, but apart from that we cover everything in depth.cmsicsmcsmcsocmsocmscosmcoscmo ',
          avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
          actions: [<Bookmark key="bookmark" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
        },
        {
          image: ytthumb2,
          title: 'Chai aur Javascript | हिन्दी',
          description: 'Chai aur Javascript is a standout online series that masterfully breaks down the fundamentals of JavaScript programming for beginners, all in accessible Hindi language.dkcmdkcmdkcmdckdmckdcmdkcmdkdmcdkcmdkcdm',
          avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
          actions: [<Bookmark key="bookmark" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
        },
        {
          image: ytthumb3,
          title: 'CSS Tutorial for Beginners | Complete CSS with Project, Notes & Code',
          description: 'Welcome to the ultimate CSS tutorial for beginners! This comprehensive course is designed to take you from a complete novice to a confident web designer.diisdmidmcimcdicmdscidmcidcdcmsdcisdmcidcmsdiccidcidcmccccccdddddddddddddd',
          avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
          actions: [<Bookmark key="bookmark" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
        },
        {
          image: ytthumb4,
          title: 'Full Stack Web Dev Roadmap 2024 [Hindi]',
          description: 'Do you want to become a successful full stack web developer? With this comprehensive roadmap, we will introduce you to all the essential technologies and skills required for full stack web development in 2024.cdddddddddddcdcdcdcdd',
          avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
          actions: [<Bookmark key="bookmark" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
        },
        {
          image: ytthumb1,
          title: 'Strivers A2Z-DSA Course | DSA Playlist | Placements',
          description: 'This playlist is not in C++ or Java or Python, it covers DSA and we write pseudocode, only one video is in C++, for the basics, but apart from that we cover everything in depth.cmsicsmcsmcsocmsocmscosmcoscmo ',
          avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
          actions: [<Bookmark key="bookmark" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
        },
        {
          image: ytthumb2,
          title: 'Chai aur Javascript | हिन्दी',
          description: 'Chai aur Javascript is a standout online series that masterfully breaks down the fundamentals of JavaScript programming for beginners, all in accessible Hindi language.dkcmdkcmdkcmdckdmckdcmdkcmdkdmcdkcmdkcdm',
          avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
          actions: [<Bookmark key="bookmark" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
        },
        {
          image: ytthumb3,
          title: 'CSS Tutorial for Beginners | Complete CSS with Project, Notes & Code',
          description: 'Welcome to the ultimate CSS tutorial for beginners! This comprehensive course is designed to take you from a complete novice to a confident web designer.diisdmidmcimcdicmdscidmcidcdcmsdcisdmcidcmsdiccidcidcmccccccdddddddddddddd',
          avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
          actions: [<Bookmark key="bookmark" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
        },
        {
          image: ytthumb4,
          title: 'Full Stack Web Dev Roadmap 2024 [Hindi]',
          description: 'Do you want to become a successful full stack web developer? With this comprehensive roadmap, we will introduce you to all the essential technologies and skills required for full stack web development in 2024.cdddddddddddcdcdcdcdd',
          avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
          actions: [<Bookmark key="bookmark" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
        },
    
    
      ];
  return (
    <div className="mx-10 pt-16">
        <h1 className="text-2xl font-bold text-gray-900 half-underline sm:text-2xl lg:leading-tight xl:text-2xl sm:text-left text-center">
          Free Resources
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2  gap-2 pt-10">
          {cardData.map((card, index) => (
            <ResourcesCard
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
  )
}

export default FreeResources