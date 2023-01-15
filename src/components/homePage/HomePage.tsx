import "./HomePage.css"
import imageWebMobile from '../../assets/images/image-web-3-mobile.jpg';
import imageWebDesktop from '../../assets/images/image-web-3-desktop.jpg';
import SecondList from "./secondList/SecondList";
import FirstList from "./firstList/FirstList";

function HomePage() {
  return (
    <div className="home-page">
      <img className="md:hidden" src={imageWebMobile} alt="Web Mobile" />
      
      <div className="md:flex">
        <div className="md:w-9/12">
          <img className="hidden md:block" src={imageWebDesktop} alt="Web Desktop" />
          
          <div className="md:flex">
            <h1 className="font-inter-extrabold text-5xl mt-6 md:w-1/2 md:mr-24">
              The Bright Future of Web 3.0?
            </h1>
            
            <div className="md:w-1/2">
              <p className="font-inter font-extralight py-5">
                We dive into the next evolution of the web that claims to put the power
                of the platforms back into the hands of the people. But is it really 
                fulfilling its promise?
              </p>

              <button className="readMoreButton">read more</button>
            </div>
          </div>
        </div>

        <FirstList />
      </div>

      <SecondList />
    </div>
  );
}

export default HomePage;