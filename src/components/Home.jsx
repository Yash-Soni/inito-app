import './homeStyles.css'
import mobileImg from '../images/iPhone 13 Pro Mockup Vol 03 Floating iphone with inito 2.png'
import smallVec from '../images/62b21ba376b43b0ca4f2347b_Crumbs 1.png'
import bigVec from '../images/Vector 54.png'

const Home = () => {
  return (
    <div className='home-component'>
      <div id='home-content'>
        <p>{[1,2,3,4,5].map((_) => <span>&#9733;</span>)} TRUSTED BY 20,000+ COUPLES</p>
        <p>Track your fertility hormones at home, in 10 minutes</p>
        <p>Get accurate results of <b>Estrogen, LH, Progesterone metabolite PdG and FSH</b> with Inito, the all-in-one, FDA-registered fertility monitor.</p>

        <button className='primary-btn'>How does Inito work?</button>
      </div>
      <div id='home-images'>
        <img src={smallVec} alt='small-vec' />
        <img src={mobileImg} alt='mobile-img' />
        <img src={bigVec} alt='big-vec' />
      </div>
    </div>
  )
}

export default Home