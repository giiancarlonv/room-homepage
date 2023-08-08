import logo from '../assets/images/logo.svg';
import image1 from '../assets/images/mobile-image-hero-1.jpg';
import footer1 from '../assets/images/image-about-dark.jpg';
import footer2 from '../assets/images/image-about-light.jpg';
import arrowImage from '../assets/images/icon-arrow.svg';
import leftButton from '../assets/images/icon-angle-left.svg';
import rightButton from '../assets/images/icon-angle-right.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import closeBtn from '../assets/images/icon-close.svg';

const HomePage = () => {
  return(
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

const Navbar =() =>{
  return(
    <>
      <nav>
        <img src={logo} alt="logo" /> 
        <div>
          <img src={hamburger} alt="hamburger" />
          <div className='hamburger'>
            <img src={closeBtn} alt="" />
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

const Main =() => {
  return(
    <>
      <main>
        <section>
          <img src={image1} alt="image-banner" />
          <div className='section-content'>
            <h1>Discover innovative ways to decorate</h1>
            <p>
              We provide unmatched quality, comfort, and style for property owners across the country. 
              Our experts combine form and function in bringing your vision to life. Create a room in your 
              own style with our collection and make your property a reflection of you and what you love.
            </p>
            <button><p>shop now</p> <img src={arrowImage} alt="arrow" /></button>
          </div>
        </section>
        <div className='content-button'>
          <button><img src={leftButton} alt="" /></button>
          <button><img src={rightButton} alt="" /></button>
        </div>
      </main>
    </>
  )
}

const Footer =()=>{
  return(
    <>
      <footer>
        <img src={footer1} alt="footer image 1" />
        <div className='text-container'> 
          <h3>About our furniture</h3>
          <p>
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
        <img src={footer2} alt="footer image 2" />
      </footer>
    </>
  );
}

export default HomePage;