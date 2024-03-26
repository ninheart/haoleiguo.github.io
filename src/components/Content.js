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
    {
      company: 'Future Fintech Labs',
      location: 'New York, NY',
      title: 'HR Analyst Intern',
      startDate: '09/2023',
      endDate: '12/2023',
      jobDescriptions: [
        'Conducted regular OKR (Objectives and Key Results) checkpoints with marketing, product, engineering, and complianceteams to ensure progress tracking and alignment.',
        'Developed a standardized job titling and structuring framework for internal consulting purposes through comprehensive benchmark analysis.'
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
        {isLoggedIn && (
          <div className='edit-container'>
            <RiDeleteBin5Fill
              className='icon'
              onClick={() => deleteExperience(index)}
            />
            <RiFileEditFill className='icon' onClick={handleUpdate} />
          </div>
        )}
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

//   useEffect(()=>{
	
// 		console.log(parsedExperience);
// 		if(parsedExperience == null && parsedExperience?.length == 0){
// 			setExperiences(defaultExperiences);
// 		}else{
// 			setExperiences(JSON.parse(storedExperiences))
// 		}
//   },[])

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
              Ottawa. I'm interested in doing XXX and I'm good at:
            </p>
            <ul style={{ textAlign: 'left', color: darkMode ? 'white' : 'black' }}>
              <li>Making tasty coldbrew</li>
              <li>Making rich Espresso shots</li>
              <li>Latte Art specialist</li>
              <li>Data Science</li>
            </ul>
            <p className='bio-container'>
              Describe my hobbies and what I do in my free time
            </p>
          </div>

          <div className='image-container'>
            <img src={imageSrc} alt='hey' />
            <div className='socials-container'>
              <a href='https://www.linkedin.com/in/haolei-g-b27032222/'>
                <FaLinkedin
                  className='icon'
                  size={20}
                />
              </a>
              <a href='#' onClick={handleEmailClick}>
                <MdEmail
                  className='icon'
                  size={20}
                />
              </a>
              <a href='/resume.pdf' download>
                <FaFileAlt
                  className='icon'
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>
        <h2 className='experience-header'>
          {'Experiences'}
          <RiAddBoxFill className='icon' size={30} onClick={() => openForm(null)} />
          {isFormOpen && isLoggedIn && (
            <ExperienceForm
              onSubmit={(values) => {
                if (selectedExperienceIndex !== null) {
                  updateExperience(selectedExperienceIndex, values)
                } else {
				  console.log('there')
                  addExperience(values)
                }
              }}
              onClose={closeForm}
              initialValues={
                selectedExperienceIndex !== null
                  ? experiences[selectedExperienceIndex]
                  : null
              }
            />
          )}
        </h2>
        {experiences.map((experience, index) => (
          <div>
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
