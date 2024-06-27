import React from 'react'
import { stepsData } from '../../data/appData.ts'
import Process from './Process.tsx'
import './appStyles.css'

const InitoApp: React.FC = () => {

  return (
    <div className='inito-app'>
      <div className='text-content'>
        <p className='title-header-1'>A fertility lab at
        your fingertips</p>
        <p className='blog-content-1'>Easy-to-read fertility diagnostic results directly on your iPhone¹, in just 10 minutes.</p>
        <button className='primary-btn inito-kit'>Get the Inito Kit</button>
        <p className='content-note'>* The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.</p>
        <button className='app-store-button'>🍎 Download on the App Store</button>
      </div>
      <div className='steps-content'>
        {stepsData.map((step, index) => <Process key={step.id} step={step} />)}
      </div>
    </div>
  )
}

export default InitoApp