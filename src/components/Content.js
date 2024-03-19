import React from 'react'
import '../styles/Content.css'
import imageSrc from '../01.jpg'
import Resume from '../resume.pdf'
import { FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Experience({
  company,
  location,
  title,
  startDate,
  endDate,
  jobDescriptions,
}) {
  return (
    <div>
      <div className='experiences-container'>
        <div className='experience-company'>
          <div style={{ textAlign: 'left' }}>{company}</div>
          <div style={{ textAlign: 'right' }}>{location}</div>
        </div>
        <div className='experience-title'>
          <div style={{ textAlign: 'left' }}>{title}</div>
          <div
            style={{ textAlign: 'right' }}
          >{`${startDate} - ${endDate}`}</div>
        </div>
        <div className='experience-description'>
          <ul style={{ textAlign: 'left' }}>
            {jobDescriptions.map((description, index) => (
              <li style={{ paddingTop: '5px' }} key={index}>
                {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const handleEmailClick = () => {
  // Function to handle the email click event
  window.location.href = 'mailto:hg2535@nyu.edu' // Replace with your email address
}

const Content = () => {

  const experiences = [
    {
      company: 'Washington Square Management Consulting',
      location: 'New York, NY',
      title: 'Management Consultant',
      startDate: '11/2022',
      endDate: 'Present',
      jobDescriptions: [
        'Contributed to the establishment of client company’s membership plan',
        'Presented a comprehensive membership proposal that precisely addressed the unique needs and requirements of clients.',
        'Developed a member engagement survey for members with over 1-year tenure.',
        // Add more job descriptions as needed
      ],
    },
    {
      company: 'Vee Ventures',
      location: 'New York, NY',
      title: 'People Scientist Intern',
      startDate: '01/2023',
      endDate: 'Present',
      jobDescriptions: [
        'Coordinated Greenhouse ATS/Microsoft Sharepoint to facilitate efficient candidate sourcing and management for a talent acquisition strategy.',
        'Conducted structured/technical interviews with dozens of candidates, covering various positions such as DevOps Engineer, Project Management, Data Scientist, Azure Support Engineer, and more.',
        'Underwent training in job analysis procedures and actively contributed to job analysis efforts for the Senior Design Recruiter role.',
        // Add more job descriptions as needed
      ],
    },
    {
      company: 'Neoworld.Cloud',
      location: 'Beijing, China',
      title: 'Organizational Development Consultant',
      startDate: '07/2023',
      endDate: '10/2023',
      jobDescriptions: [
        'Led end-to-end recruitment process and established streamlined workflows and standard operating procedures (SOPs).',
        'Designing and implementing change management strategies focused on addressing diversity, equity, and inclusion (DEI) as well as enhancing team dynamics and collaboration during the merger of Chinese and U.S. teams.',
        'Established a comprehensive buddy program to elevate the onboarding experience for employees.',
        'Developed a 360-degree feedback system to enhance the talent development process.',
        // Add more job descriptions as needed
      ],
    },
  ]

  return (
    <div className='content-container'>
      <div className='main-content'>
        <div className='intro-container'>
          <h1 className='header'>Haolei Guo</h1>
          <p className='bio-container'>
            I'm XXX graduated master student from{' '}
            <span className='highlight'>NYU College of Arts & Science</span>,
            where I majored I/O psychology.
          </p>
          <p className='bio-container'>
            My education history includes XXX's bachelor's degree at XXX. I'm
            interested in doing XXX and I'm good at:
          </p>
          <ul style={{ textAlign: 'left' }}>
            <li>Making tasty coldbrew</li>
            <li>Making rich Espresso shots</li>
            <li>Latte Art specialist</li>
          </ul>
        </div>

        <div className='image-container'>
          <img src={imageSrc} alt='hey' />
          <div className='socials-container'>
            <a href='https://www.linkedin.com/in/haolei-g-b27032222/'>
              <FaLinkedin className='icon' size={20} />
            </a>
            <a href='#' onClick={handleEmailClick}>
              <MdEmail className='icon' size={20} />
            </a>
            <a href="/resume.pdf" download>
              <FaFileAlt className='icon' size={20} />
            </a>
          </div>
        </div>
      </div>
      <h2 className='experience-header'>Experiences</h2>
      {experiences.map((experience, index) => (
        <Experience key={index} {...experience} />
      ))}
    </div>
  )
}

export default Content
