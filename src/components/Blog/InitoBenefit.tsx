import React from 'react'
import './blogStyles.css'
import mobImg from '../../images/1- iPhone 12 Mockup-ovconfirmed 2.png'
import graphImg from '../../images/image 14 1.png'

const InitoBenefit = () => {
  return (
    <div className='benefits-content'>
      <div className='mob-text'>
        <p className='title-header-1'>Predict and confirm your ovulation with actual data</p>
        <p className='blog-content-1'>Unlike most ovulation tests that only give you "yes/no" results, Inito provides real numerical values of your fertility hormones.
        If you have irregular cycles, actual data is necessary to know exactly when you ovulate, and when is the best time to try to conceive.</p>

        <button className='primary-btn'>Get the Inito Kit</button>
      </div>
      <div className='mob-img'>
        <img src={mobImg} alt='mob image' />
      </div>
      <div className='graph-text'>
        <div>
          <p className='title-header-1'>Never miss a day again with Inito</p>
          <p className='blog-content-1'>Inito tracks up to 6 fertile days and confirms ovulation by measuring all 4 hormones in just 10 minutes:</p>
        </div>
        <div>
          <p>✔️ Estrogen, which rises 3-4 days before ovulation</p>
          <p>✔️ LH, which surges 24-36 hours before ovulation</p>
          <p>✔️ PdG, which rises after ovulation</p>
          <p>✔️ FSH, to track follicle growth</p>
        </div>
      </div>
      <div className='graph-img'>
        <img src={graphImg} alt='graph image' />
      </div>
    </div>
  )
}

export default InitoBenefit