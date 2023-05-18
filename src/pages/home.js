import React from 'react';
import { useState, useEffect } from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax';
import '../css/home.css';
import HeroImg from '../assets/img/hero.png'
import ContentImg1 from '../assets/img/img1.jpg'
import ContentImg2 from '../assets/img/img2.jpg'
import ContentImg3 from '../assets/img/img3.jpg'
import main_bg from '../assets/img/main_bg.svg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SmoothScroll from '../components/smoothScroll';
import TalkUs from '../components/talkus';
import Footer from '../components/footer';
// import { gsap } from "gsap-trial";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollSmoother from "gsap/ScrollSmoother";


function Home() {

  const [bgcolor, setBgColor] = useState("white")

  const listenScrollEvent = e => {
    window.scrollY > 300
      ? setBgColor("#110A06")
      : setBgColor("white")
  }


  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  const parallax = useParallax({
    speed: -10,
  });

  // const el = useRef();
  // const q = gsap.utils.selector(el);
  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // useLayoutEffect(() => {
  //   let smoother = ScrollSmoother.create({
  //     smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //     effects: true // looks for data-speed and data-lag attributes on elements
  //   });
  //   return () => {
  //     smoother.kill();
  //   };
  // }, []);



  return (
    <>
      <SmoothScroll>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className='main-home'>
              <section className='hero-section' style={{ background: bgcolor }}>
                <div className='main_bg_img'>
                  <img src={main_bg} alt=""/>
                </div>
                <div className='hero-img-position'>
                  <div className='hero-svg-wrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1342.114 351.984">
                      <g id="Group_18" data-name="Group 18" transform="translate(1657.53 610.723)">
                        <path id="Path_5" data-name="Path 5" d="M475.716,562.133l-5.9-249.237H604.977L718.089,487.188h0l-2.383,175.751H597.792L478.768,430.393v141.45Z" transform="translate(-2127.341 -923.618)" fill="#e5dbca" />
                        <path id="Path_6" data-name="Path 6" d="M766.39,664.88,737.161,314.436H880.884l91.094,201.609,38-201.609h134.936V664.88h-126.7V413.853L927.124,664.88H861L774.068,460.094V664.88Z" transform="translate(-1988.341 -923.618)" fill="#e5dbca" />
                        <path id="Path_7" data-name="Path 7" d="M1156.941,664.88V314.436h106.816s99.01,1.294,132.513,20.845c54.087,31.564,73.258,107.024,73.258,161.343,0,38.374-18.382,109.171-62.886,138.769-56.8,37.776-142.885,29.487-142.885,29.487Z" transform="translate(-1784.944 -924.389)" fill="#e5dbca" />
                      </g>
                    </svg>
                  </div>
                  <div className='hero-img-wrapper'>

                    <img src={HeroImg} alt="" />


                  </div>
                </div>
              </section>

              <section className='hero-content-section' style={{ background: bgcolor }}>
                <div className='content-img-wrapper-left'>
                  <Parallax speed={-10}>
                    <img src={ContentImg3} alt="" />
                  </Parallax>
                </div>
                <Parallax speed={5}>
                  <div className='content-text-wrapper'>
                    <h4> <span className='content-title'>designers, artists, dreamers and  storytellers <br /> at  </span> <span className='content-title-cur'>one place</span></h4>
                    <p>NMD is a creative studio specializing in the design of interior spaces original and functional</p>
                  </div>
                </Parallax>
                <div className='content-img-wrapper-right'>
                  <div className='right-img-one'>
                    <Parallax speed={-10}>

                      <img src={ContentImg3} alt="" />
                    </Parallax>
                  </div>
                  <Parallax speed={40}>
                    <div className='right-img-two'>
                      <img src={ContentImg2} alt="" />
                    </div>
                  </Parallax>
                </div>
              </section>


              <section className='hero-purpose-section'>
                {/* <div className='purpose-svg-wrapper'>
          <Parallax speed={70}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 964.249 733.637">
              <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#d6a380" />
                  <stop offset="1" stop-color="#d1793a" />
                </linearGradient>
              </defs>
              <g id="Group_8" data-name="Group 8" transform="translate(1579.252 -3102.312)">
                <path id="Path_2" data-name="Path 2" d="M470.341,664.88V314.931H594.014L708.548,481.614V314.931h7.825l-.356,349.949H640.61L478.768,430.393V664.88Z" transform="translate(-2049.593 2787.381)" fill="url(#linear-gradient)" />
                <path id="Path_3" data-name="Path 3" d="M766.39,664.88l-.183-350.444H880.884l91.094,201.609,72.6-201.609h100.342V664.88h-126.7V413.853L927.124,664.88H861L774.068,460.094V664.88Z" transform="translate(-2084.967 2951.382)" fill="url(#linear-gradient)" />
                <path id="Path_4" data-name="Path 4" d="M1156.941,664.88V314.436h106.816s99.01,1.294,132.513,20.845c54.087,31.564,73.258,107.024,73.258,161.343,0,38.374-18.382,109.171-62.886,138.769-56.8,37.776-142.885,29.487-142.885,29.487Z" transform="translate(-2084.531 3170.298)" fill="url(#linear-gradient)" />
              </g>
            </svg>
          </Parallax>
        </div> */}

                <div className='purpose-flex-container'>
                  <div className='purpose-slider-container'>
                    <div>
                      <Carousel
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={4000}
                        stopOnHover={false}>
                        <div>
                          <img src={ContentImg1} ref={parallax.ref} alt="" />
                        </div>
                        <div>
                          <img src={ContentImg2} ref={parallax.ref} alt="" />
                        </div>
                        <div>
                          <img src={ContentImg1} ref={parallax.ref} alt="" />
                        </div>
                      </Carousel>
                    </div>
                  </div>

                  <div className='purpose-text-container'>
                    <div className='purpose-text-wrapper'>
                      <div className='purpose-title-container'>
                        <h2>Our purpose</h2>
                        <h4>To remain friends with our clients</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.</p>
                      </div>
                      <div className='purpose-links-container'>
                        <div>
                          <hr />
                          <h4>Our Team</h4>
                          <hr />
                        </div>
                        <div>
                          <hr />
                          <h4>Our Awards</h4>
                          <hr />
                        </div>
                        <div>
                          <hr />
                          <h4>Our Culture</h4>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className='project-main-container'>
                <div className='hero-projects-container'>
                  <div className='project-flex-container'>
                    <div>
                      <h2><span className='project-title'> Devotion to Quality </span><span className='project-title-cur'>Projects</span></h2>
                    </div>
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.</p>
                    </div>
                  </div>
                </div>

                <div className='project-list-container'>
                  <div className='project-image-wrapper'>
                    <Parallax speed={-10}>
                      <div className='project-image1'>
                        <h1>Project Name</h1>
                        <img src={ContentImg3} alt="" />

                        <div class="overlay">

                        </div>
                      </div>
                    </Parallax>
                    <div>
                    </div>
                    <div className='project-image3'>
                      <Parallax speed={-10}>
                      <h1>Project Name</h1>
                        <img src={ContentImg3} alt="" />
                        <div class="overlay"></div>
                      </Parallax>
                      <div className='project-image2'>
                        <Parallax speed={20}>
                        <h1>Project Name</h1>
                        <img src={ContentImg3} alt="" />
                        <div class="overlay"></div>
                        </Parallax>
                      </div>
                    </div>
                    <div className='project-image4'>
                      <Parallax speed={20}>
                      <h1>Project Name</h1>
                        <img src={ContentImg3} alt="" />
                        <div class="overlay"></div>
                      </Parallax>
                    </div>

                    <div className='project-text-container'>
                      <h2>
                        <span className='project-text'>Discover <br />our portfolio</span>
                        <br />
                        <span className='project-text-cur'>View Projects</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </section>

              <section className='know-how-section'>
                <div className='know-flex-container'>
                  <div className='know-title-flex'>
                    <h2><span className='know-title'>Know-how</span></h2>
                  </div>
                  <div className='know-text-flex'>
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.</p>
                    </div>
                    <div className='know-links-container'>
                      <div>
                        <hr />
                        <h4>Our Team</h4>
                        <hr />
                      </div>
                      <div>
                        <hr />
                        <h4>Our Awards</h4>
                        <hr />
                      </div>
                      <div>
                        <hr />
                        <h4>Our Culture</h4>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              <TalkUs bgcolor="#fff" />

              <Footer txtcolor="#000" bgcolor="#fff" />

            </div>
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}


export default Home;
