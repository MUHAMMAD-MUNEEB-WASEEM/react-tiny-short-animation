import React from "react";
import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import wheel from './images/wheel.png';
import key from './images/keys.png'
import car from './images/car.png'
import car2 from './images/car2.gif';
import Header from './components/Header.js'

function App() {

const pattern = useWebAnimations({
  playbackRate: 0.08,
  keyframes: [{ transform: "translate(-50%,-50%)" }],
  timing: {
      easing: "steps(3, end)",
      delay: 80,
      duration: 200,

      iterations: Infinity,
    },
});

const frame = { transform: "none", opacity: 1 };
const text = useWebAnimations({
  playbackRate: 0.3,
  keyframes: [
    { transform: "scale3d(0.3, 0.3, 0.3)", opacity: 0, offset: 0 },
    { ...frame, offset: 0.5 }, 
    { ...frame, offset: 1 },
    ],
    timing: { duration: 1000, fill: "both" },
});

  
const globe1 = useWebAnimations({
  playbackRate: 0.08,
  keyframes: [{ transform: "rotate(360deg)" }, 
            ],
   timing: {
    easing: "steps(100, end)",
    delay: 10,
    duration: 200,
    iterations: Infinity,
   },
});
const globe2 = useWebAnimations({
  playbackRate: 0.08,
  keyframes: [{ transform: "rotate(360deg)" }, 
            ],
  timing: {
     easing: "steps(100, end)",
     delay: 10,
     duration: 200,
     iterations: Infinity,
   },
});
const globe3 = useWebAnimations({
  playbackRate: 0.08,
  keyframes: [{ transform: "rotate(360deg)" }, 
            ],
  timing: {
    easing: "steps(100, end)",
    delay: 10,
    duration: 200,
    iterations: Infinity,
   },
});



return (
    <div className="App">
      <Header/>
      <div id="container">

      <div className="hero">

        <div ref={text.ref} className="container2">
            <span className="mainHeading">
              <b>Pakistan's #1 </b>{" "}
            </span>
            <span className="mainHeading">
              <b>automobile website </b>
            </span>
          </div>

          <div className="container1">
            <div ref={globe1.ref} className="wheel1" >

              <img
                    className="businessImg"
                    src={wheel}
                    alt="businessAnimation3"
                  />
                </div>

            <div ref={globe2.ref} className="wheel2">

              <img
                    className="businessImg"
                    src={wheel}
                    alt="businessAnimation2"
                  />
              </div>

              <div ref={globe3.ref} className="wheel3">
              <img
                    className="businessImg"
                    src={wheel}
                    alt="businessAnimation1"
                  />
              </div>
              
          </div>

        </div>

        <div className="lastsection">
          <div className="container2">
              <span className="mainHeading">
                <b>Our Services </b>{" "}
              </span>
              <br/>
              <span className="subHeading"> Car owners can now easily sell their cars through our secure, convenient, and hassle-free process</span>
          </div>

          <div className="container1">
            <img src={car2} alt="carbike"/>
            </div>

          </div>


        <div className="hero1">

              <div className="container2">
                  <span className="mainHeading">
                    <b>About Us</b>{" "}
                  </span>
                  <br/>
                  <span className="subHeading">Since 1999, Our company has mastered the art of modifying cars, get trustworthy work, and ranks at the top car market.</span>
              </div>

              <div className="container1">
                  <div className="detectionContainer1">
                    <div className="car">
                      <img
                        className="detectionImg"
                        src={car}
                        alt="detectionAnimation1"
                      />
                      </div>
                       <div ref={pattern.ref} className="key">
                      <img
                        className="detectionImg"
                        src={key}
                        alt="detectionAnimation2"
                      />
                    </div>
                </div>
               </div>

         </div>
       </div>
    </div>
  );
}

export default App;
