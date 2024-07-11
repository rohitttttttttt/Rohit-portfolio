import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import Footer from './Footer';

const Experience = () => {
  return (
    <div className='experience bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden' id='experience'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Work Experience.</h2>
      </div>
      <VerticalTimeline className='mt-9'>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={`experience-${index}`}
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            iconStyle={{ background: '#fff' }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <span className='text-3xl'>🚀</span> {/* Placeholder icon */}
              </div>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{experience.role}</h3>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {experience.points.map((point, idx) => (
                <li
                  key={`experience-point-${idx}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Footer />
    </div>
  )
}

export default Experience;
