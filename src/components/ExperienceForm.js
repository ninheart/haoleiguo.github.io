import React, { useState } from 'react'

import { IoIosClose } from 'react-icons/io'


const ExperienceForm = ({ onSubmit, onClose, initialValues }) => {
  const [company, setCompany] = useState(initialValues?.company || '')
  const [location, setLocation] = useState(initialValues?.location || '')
  const [title, setTitle] = useState(initialValues?.title || '')
  const [startDate, setStartDate] = useState(initialValues?.startDate || '')
  const [endDate, setEndDate] = useState(initialValues?.endDate || '')
  const [jobDescriptions, setDescription] = useState(
    initialValues?.jobDescriptions || []
  )
  const [inputDescription, setInputDescription] = useState(initialValues?.jobDescriptions.join('\n') || '')



  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ company, location, title, startDate, endDate, jobDescriptions })
    onClose()
  }

  const handleDescriptionChange = (e) => {
    setInputDescription(e.target.value)
    // Split input by new lines to get individual lines of text
    const lines = e.target.value.split('\n').filter(line => line.trim() !== '');
    setDescription(lines)
  }

  return (
    <div className='overlay'>
      <div className='modal-container'>
        <IoIosClose
          size={50}
          className='cancel-btn'
          type='button'
          onClick={onClose}
        />
        <h2 className='modal-title'>
          {initialValues ? 'Edit Experience' : 'Add Experience'}
        </h2>
        <form className='form-container' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='company'>Company:</label>
            <input
              type='text'
              id='company'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="maomao's company"
            />
          </div>
          <div>
            <label htmlFor='location'>Location:</label>
            <input
              type='text'
              id='location'
              value={location}
              placeholder="maogou home"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='CEO'
            />
          </div>
          <div>
            <label htmlFor='startDate'>Start Date:</label>
            <input
              type='text'
              id='startDate'
              value={startDate}
              placeholder='mm/dd/yyyy'
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='endDate'>End Date:</label>
            <input
              type='text'
              id='endDate'
              value={endDate}
              placeholder='mm/dd/yyyy'
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='jobDescriptions'>Job Description: </label>
            <textarea
              type='text'
              id='jobDescriptions'
              rows={6} // Increase the number of rows
              cols={50}
              value={inputDescription}
              onChange={handleDescriptionChange}
              placeholder='Separate job bullet point by new line'
            />
          </div>
          <button className='submit-btn' type='submit'>
            Submit
          </button>
        </form>
        <div></div>
      </div>
    </div>
  )
}

export default ExperienceForm
