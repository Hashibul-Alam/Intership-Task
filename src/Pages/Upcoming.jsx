import React from 'react'
import CardUpcomming from '../Common/CardUpcomming'
import UpcomingData from '../Common/UpcominData';

const Upcoming = () => {
    const dataUpcoming = [
        {
          title: "User Experience (UX) Design",
          img: "/Figma.png",
          tags: [
            { id: 1, img: "/Clock.png", title: "5:30hrs" },
            { id: 2, img: "/Form.png", title: "05 Lessons" },
            { id: 3, img: "/verified.png", title: "Assignments" },
          ],
         
        },
        {
          title: "Visual Design and Branding",
          img: "/visual.png",
          tags: [
            { id: 1, img: "/Clock.png", title: "4:00hrs" },
            { id: 2, img: "/Form.png", title: "03 Lessons" },
            { id: 3, img: "/verified.png", title: "Assignments" },
          ],
        },
      ];
      const Upcomingdatas = [
        {
          title: "UX Design Fundamentals",
          img: "/Cap.png",
          time:"9:00pm",
          button: "Join"
         
        },
        {
          title: "UX Design Fundamentals",
          img: "/Cap.png",
          time:"9:00pm",
          button: "Join"
         
        },
       
      ];
  return (
    <section className='w-full max-w-[1000px] h-[314px] mt-5'>
            <div className='flex flex-col lg:flex-row'>
            <CardUpcomming data={dataUpcoming}  heading='Recent enrolled classes' all="All"   />
            <UpcomingData heading='Upcoming Lesson' data={Upcomingdatas} />
            </div>
    </section>
  )
}

export default Upcoming