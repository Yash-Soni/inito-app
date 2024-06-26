import './homeStyles.css'
import mobileImg from '../images/iPhone 13 Pro Mockup Vol 03 Floating iphone with inito 2.png'
import smallVec from '../images/62b21ba376b43b0ca4f2347b_Crumbs 1.png'
import bigVec from '../images/Vector 54.png'
import bloomberg from '../images/image 9.png'
import forbes from '../images/image 10.png'
import week from '../images/image 11.png'
import img4 from '../images/image 12.png'
import img5 from '../images/image 13.png'
import FAQ from './FAQ/index.tsx'
import Contact from './Contact/index.tsx'
import Blog from './Blog/index.tsx'
import Footer from './Footer.jsx'

const Home = () => {
  return (
    <>
      <div className='home-component'>
        <div id='home-content'>
          <p id='rating-content'>{[1,2,3,4,5].map((_) => <span className='stars'>&#9733;</span>)} TRUSTED BY 20,000+ COUPLES</p>
          <div className='display-content'>
            <p id='major-content'>Track your fertility hormones at home, in 10 minutes</p>
            <p className='para-text'>Get accurate results of <b>Estrogen, LH, Progesterone metabolite PdG and FSH</b> with Inito, the all-in-one, FDA-registered fertility monitor.</p>
          </div>

          <button className='primary-btn'>How does Inito work?</button>
        </div>
        <div id='home-images'>
          <img src={smallVec} alt='small-vec' id='small-vec' />
          <img src={mobileImg} alt='mobile-img' id='mobile-img' />
          <img src={bigVec} alt='big-vec' id='big-vec'/>
        </div>
      </div>
      <div id='brands'>
        <p>AS SEEN ON</p>
        <div className='blogs'>
          <img id='bloomberg' src={bloomberg} alt='bloomberg' />
          <img id='forbes' src={forbes} alt='forbes' />
          <img id='week' src={week} alt='week' />
          <img id='washington' src={img4} alt='washington' />
          <img id='entrepreneur' src={img5} alt='img5' />
        </div>

      </div>

      <Blog />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home