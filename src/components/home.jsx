import logo from '../assets/images/logo.svg';
import footer1 from '../assets/images/image-about-dark.jpg';
import footer2 from '../assets/images/image-about-light.jpg';
import hamburger from '../assets/images/icon-hamburger.svg';
import closeBtn from '../assets/images/icon-close.svg';
import { Data } from './data';
import { useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () =>{
    setIsOpen((open) => !open);
  }
  const screenWidth = window.innerWidth;
  return(
    <>
      <nav>
        <img src={logo} alt="logo" /> 
        <img src={hamburger} alt="hamburger" onClick={toggleMenu} className={screenWidth >= 810 ? 'hamburger-container' : ''} />
          <ul className='desktop-nav'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
      <div className={`hamburger-container${isOpen ? '-is-open':''}`}>
        <div className='wrapper'>
          <img src={closeBtn} alt="close button" onClick={toggleMenu} />
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  )
}

const Main =() => {
  return(
    <>
      <main>
        <Data />
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