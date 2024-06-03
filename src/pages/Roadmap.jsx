import React from 'react'
import RoadmapCard from '../components/Card/RoadmapCard'

function Roadmap() {
    const Roadmapcarddata = [
        {
            title:'Full Stack Roadmap',
            description:'The best way to learn full stack development with hands-on labs, practical projects, and community -...'
        },
        {
            title:'Full Stack Roadmap',
            description:'The best way to learn full stack development with hands-on labs, practical projects, and community -...'
        },
        {
            title:'Full Stack Roadmap',
            description:'The best way to learn full stack development with hands-on labs, practical projects, and community -...'
        },
        {
            title:'Full Stack Roadmap',
            description:'The best way to learn full stack development with hands-on labs, practical projects, and community -...'
        },
        {
            title:'Full Stack Roadmap',
            description:'The best way to learn full stack development with hands-on labs, practical projects, and community -...'
        },
        {
            title:'Full Stack Roadmap',
            description:'The best way to learn full stack development with hands-on labs, practical projects, and community -...'
        },
        
    ] 
  return (
    
    <div className='h-screen overflow-hidden'>
    <div className='mx-8 mt-6 '>
    <h1 className="text-2xl font-bold text-gray-900 half-underline sm:text-2xl lg:leading-tight xl:text-2xl sm:text-left text-center">
        Roadmap
        </h1>
        <p className='font-small mt-4'>Well-structured and strategically planned roadmaps, designed to guide you in your learning journey. Making consistent progress on your learning path every day will significantly enhance your chances of becoming a great developer.</p>
        </div>



        <div className='mx-8 mt-6'>
        <div className="grid grid-cols-1  lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2  gap-2 pt-10">
        {Roadmapcarddata.map((card, index) => (
        <RoadmapCard
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
        </div>
    
    </div>
    </div>
  )
}

export default Roadmap