import React, {useState, useEffect} from 'react'
import { useTheme } from './ThemeContext.js'
import '../styles/Content.css'
import imageSrc from '../icon.jpg'
import { FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { RiAddBoxFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { RiDeleteBin5Fill, RiFileEditFill } from 'react-icons/ri'
import ExperienceForm from "./ExperienceForm"

const defaultExperiences = [
  {
    company: 'Nordea',
    location: 'New York, NY',
    title: 'HR Coordinator',
    startDate: '01/2024',
    endDate: 'Present',
    jobDescriptions: [
      'Managed comprehensive reconciliation processes for voluntary benefit plans, including medical, STD, LTD, life & AD&D, and more.',
      'Executed cost allocation procedures for all benefit invoices, optimizing financial tracking and reporting. Maintained meticulous records and collaborated with cross-functional teams to enhance efficiency in cost management',
    ],
  },
  {
    company: 'Bank of China',
    location: 'New York, NY',
    title: 'Compensation & Benefit Intern',
    startDate: '11/2023',
    endDate: '01/2024',
    jobDescriptions: [
      'Administered benefits enrollment, termination, and changes, as well as facilitated the preparation of benefits orientation packages.',
      'Managed daily attendance administration for payroll purposes and collaborated with various departments to adjust timesheets effectively.',
      'Completed extensive training in various benefits, including 401(k), Flexible Spending Account, and Wellness programs.',
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
      'Conducted structured and technical interviews with engineers and product managers',
      // Add more job descriptions as needed
    ],
  },
  {
    company: 'Neoworld.Cloud',
    location: 'Beijing, China',
    title: 'Organizational Development Consultant',
    startDate: '07/2023',
    endDate: '12/2023',
    jobDescriptions: [
      'Led end-to-end recruitment process and established streamlined workflows and standard operating procedures (SOPs).',
      'Designing and implementing change management strategies focused on addressing diversity, equity, and inclusion (DEI) as well as enhancing team dynamics and collaboration during the merger of Chinese and U.S. teams.',
      // Add more job descriptions as needed
    ],
  },
  {
    company: 'Future Fintech Labs',
    location: 'New York, NY',
    title: 'HR Analyst Intern',
    startDate: '09/2023',
    endDate: '12/2023',
    jobDescriptions: [
      'Conducted regular OKR (Objectives and Key Results) checkpoints with marketing, product, engineering, and complianceteams to ensure progress tracking and alignment.',
      'Developed a standardized job titling and structuring framework for internal consulting purposes through comprehensive benchmark analysis.',
      // Add more job descriptions as needed
    ],
  },
]


function Experience({
  company,
  location,
  title,
  startDate,
  endDate,
  jobDescriptions,
  index,
  deleteExperience,
  updateExperience,
  isLoggedIn,
  isDarkMode
}) {
  const handleUpdate = () => {
    updateExperience(index)
  }
//   console.log(isLoggedIn)
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
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
        {/* {isLoggedIn && (
          <div className='edit-container'>
            <RiDeleteBin5Fill
              className='icon'
              onClick={() => deleteExperience(index)}
            />
            <RiFileEditFill className='icon' onClick={handleUpdate} />
          </div>
        )} */}
      </div>
    </div>
  )
}


const handleEmailClick = () => {
  // Function to handle the email click event
  window.location.href = 'mailto:hg2535@nyu.edu' 
}

const storedExperiences = localStorage.getItem('experiences')
const parsedExperience = JSON.parse(storedExperiences)

const Content = ({isLoggedIn}) => {

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [experiences, setExperiences] = useState(parsedExperience !== null ? parsedExperience : [])
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(null)
  const {darkMode} = useTheme();


  useEffect(()=>{
	localStorage.setItem('experiences', JSON.stringify(experiences))},[experiences]);


  const openForm = (index) => {
    setSelectedExperienceIndex(index);
	setIsFormOpen(true);
  }

  const closeForm = () => {
	setIsFormOpen(false);
	setSelectedExperienceIndex(null)
  }

  const addExperience = (newExperience) => {
	setExperiences([newExperience, ...experiences]);
	console.log(experiences)
  }

  const deleteExperience = (index) => {
	setExperiences(experiences.filter((_, i) => i !== index))
  } 

  const updateExperience = (index,updatedExperience) => {
	const updatedExperiences = [...experiences]
    updatedExperiences[index] = updatedExperience
    setExperiences(updatedExperiences)
	closeForm();
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='content-container'>
        <div className='main-content'>
          <div className='intro-container'>
            <h1 className='header'>Haolei Guo</h1>
            <p className='bio-container'>
              I'm graduated master student from{' '}
              <span className='highlight'>NYU College of Arts & Science</span>,
              where I majored I/O psychology.
            </p>
            <p className='bio-container'>
              I obtained my bachelor's degree in psychology at University of
              Ottawa. I enjoy good food and sleeping in my leisure time. I'm
              interested in doing:
            </p>
            <ul
              style={{ textAlign: 'left', color: darkMode ? 'white' : 'black' }}
            >
              <li className='highlight'>Cooking</li>
              <li className='highlight'>Latte Art enthusiast</li>
              <li className='highlight'>Ski</li>
              <li className='highlight'>Data Science</li>
            </ul>
            <p className='bio-container'>I have academic and industry experiences, reach out to me from my socials on right</p>
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
              <a href='/resume.pdf' download>
                <FaFileAlt className='icon' size={20} />
              </a>
            </div>
          </div>
        </div>
        {defaultExperiences.map((experience, index) => (
          <div className='experience-list'>
            <Experience
              key={index}
              {...experience}
              index={index}
              deleteExperience={deleteExperience}
              updateExperience={() => openForm(index)}
              isLoggedIn={isLoggedIn}
              isDarkMode={darkMode}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content
