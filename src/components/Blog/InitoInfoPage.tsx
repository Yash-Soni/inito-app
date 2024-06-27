import React from 'react'
import InitoCard from './InitoCard.tsx'
import ladyImg from '../../images/ladyImg.png'
import testScreen from '../../images/1- iPhone 12 Mockup - test required home screen 1.png'
import dataImg from '../../images/Background.png'

const InitoInfoPage: React.FC = () => {
  const firstCardData = {
    title: 'Adapts to your irregular cycle',
    content: 'Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.', 
    body: 'Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.',
    imgSrc: ladyImg
  }

  const secondCardData = {
    title: "Inito tracks everything so you don't have to",
    content: 'The Inito Fertility Monitor comes with a free easy-to-use App, so you can track your fertile days with ease and know exactly when you ovulate.',
    body: `Our App notifies you for everything:
          • Your fertility levels
          • When to test on the right days
          • When you've successfully ovulated
          • And when to roll into bed!`,
    imgSrc: testScreen
  }

  const thirdCardData = {
    title: 'Get charts and actual values of your hormones',
    content: 'Actual numerical values are necessary to know whether your PdG levels are sufficient enough to support a healthy pregnancy.',
    body: 'Studies show that PdG levels lower than 7.9ng/ml in serum (around 10ug/ml PdG) 6-8 days after ovulation are associated with lower pregnancy outcomes.',
    imgSrc: dataImg
  }

  return (
    <div >
      <p className='title-header-1'>
        Why Inito is the smarter<br/>
        way to get pregnant</p>
        {/* cards to display different set of data */}
      <InitoCard data={firstCardData} />
      <InitoCard data={secondCardData} reverse/>
      <InitoCard data={thirdCardData} />
    </div>
  )
}

export default InitoInfoPage