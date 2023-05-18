import '../css/about.css';
import Image from '../components/images';
import { useState, useEffect } from 'react'
import TalkUs from '../components/talkus';
import Footer from '../components/footer';
import SmoothScroll from '../components/smoothScroll';
import nmdteam from '../assets/img/nmdteam (1).jpg';
import { BsArrowRightCircle, BsFillLightbulbFill, BsGift, BsHandIndex, BsHandbag, BsLightbulb, BsLightbulbOff, BsSearch } from 'react-icons/bs';

function About() {

  const [bgcolor, setBgColor] = useState("white")

  const listenScrollEvent = e => {
    window.scrollY > 300
      ? setBgColor("#fdf5e6")
      : setBgColor("#110A06")
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <div>
      <SmoothScroll>
        <section>
          <div>

            <section className='about-content-section' style={{ background: bgcolor }}>

              <div className='about-content-text-wrapper'>
                <h4> <span className='about-content-title'>About Us</span> </h4>

                <span className='about-content-title-cur'>Hello.</span>
                <p>A stellar organization for interior designing, NMD Interiors boasts of its forte in Healthcare, residential and corporate interiors. We are a well-integrated and highly coordinated bunch of naturally gifted individuals specializing in a wide array of professional domains such as turnkey interior projects, 3D design modelling and site supervision.</p>


              </div>
              <div className='about-content-img-wrapper-right'>

                <div className='about-right-image'>
                  <img src={Image.image2} alt="" />
                </div>
                <div>
                  <div className='about-right-img-1'>
                    <img src={Image.image4} alt="" />
                  </div>
                </div>
              </div>
            </section>


            <section className='about-title-section' style={{ background: bgcolor }}>


              <div className='about-title-wrapper'>
                <h4> <span className='about-msg-title'>High-end exteriors & interiors</span> <span className='about-msg-title-cur'>Designs</span></h4>
                <p>At its fundamental core, here at NMD Interiors, we dynamically portray the new-age vision in its implementation of crucial forms of knowledge, diving into the sheer depths of a subject matter, exploring and sharing its beauty. Unlike other players functioning currently in the interior designing industry, our work principles believe in finding inspiration in various forms, spaces, relations, tangibles, and intangibles, while we try to search hidden resources within and without.</p>
              </div>


            </section>


            <section>


              <div class="container">
                <div class="text-wrapper">
                  <div class="left-to-right"><h1>NMD Interior and exterior designers</h1></div>
                </div>
                <div class="text-wrapper">
                  <div class="right-to-left"><h1>NMD Interior and exterior designers</h1></div>
                </div>
              </div>


            </section>



            <div className='mt-5 about-section1' >
              <h2><span className='about-know-title'>Know who</span></h2>
            </div>

            <section className='about-know-how-section'>

              <div className='about-know-flex-container'>

                <div className='about-know-title-flex'>
                  <div>
                    <img src={Image.image3} alt='' className='responsive-image' />
                  </div>
                </div>
                <div className='about-know-text-flex'>
                  <div>
                    <p>Mr. Niraj Mehta, the visionary Founder of our prestigious company, completed his bachelors and master’s in interior design and Technology from the globally reputed London Metropolitan University, England. He emerged victorious in a notable city and art competition in 2009.</p>
                    <p>With his academic background of extensive design process studied during his Masters gave Mr. Niraj an edge over his fellow competitors as he was able to hone his creative skills as well as testing digital technology so as to encounter several creative challenges, consequently channelizing his interests and skills to combine digital technology with designing craftsmanship through various processes such as 3 D printing, laser cutting.</p>
                    <p>Our family of extremely dedicated employees tries to celebrate the exquisite Nature in every subtlety, exhibiting respect and gratitude towards people, practices, science, services, and above all, the cradle called environment nourishes and flourishes us.</p>
                    <p>Exemplary integrity, efficient execution, down-the-line commitment to quality, and time blended with excellent human relations make NMD Interiors a successful venture to partner with on any project. We specialize in incorporating groundbreaking and technologically innovative products and concepts that are simply stunning and often outshine the industry standards. We come up with some of the best offbeat and unconventional ideas for interior spaces of our clients and use various disciplines and constituents of interior design by concentrating on practical application and implications of our concepts.</p>
                  </div>

                </div>
              </div>
            </section>


            <div className='mt-5 about-section1 text-center' >
              <h2><span className='about-know-title'>The Team</span></h2>
            </div>

            <section className='about-know-how-section'>

              <div className='about-know-flex-container'>

                <div className='about-know-title-flex'>
                  <div>
                    <img src={Image.image6} alt='' className='responsive-image' />
                  </div>
                </div>
                <div className='about-know-text-flex'>
                  <div>
                    <p>Team NMD is bunch of creative professionals who always passionate of delivering different ideas to client.</p>
                    <p>At NMD, we all sit together and think together. Our open office work culture has resulted in free interaction between employees and creating a strong team. Freedom to think and explore is evident in our work. We also invest a lot of time and energy in nurturing our talent. Management and technical training workshops are a part of the routine. Our colleagues come from diverse cultures and backgrounds, bringing in their wealth of knowledge to the organization.</p>
                    <p>NMD is a family of inspired individuals headed by young, passionate professional designers bringing in their expertise into different verticals.</p>
                  </div>

                </div>
              </div>
            </section>

            <section className='the_way_we_work'>
              <div className="responsive-div">
                <h2><span >The Way We Work</span></h2>
              </div>
              <div className="containers" >
                <div className="responsive-div">
                  <div > <BsSearch color='#fff' size={50} /></div>
                  <h2>Analysis</h2>
                  <p>
                    The aim is always to acquire a deep understanding of each project and each product. The identification of the exact needs and desires of all parties involved is key in order to define the essence of the project. In addition to this we also tries to lever our influence on clients to make decisions believed to be better for them, the product, the end user or the production process.
                  </p>
                </div>
                <div className="responsive-div">
                  <div > <BsLightbulb color='#fff' size={50} /></div>

                  <h2>Idea Generation</h2>
                  <p>For us communication is the most important tool in our studio and in our projects. Whether it is with producer, manufacturer, each other or anyone else with a relevant input, it provides inspiration and insight. Dialogues within us are, we would like to believe, of positive nature: nothing is labeled as wrong or right, in the end the goal is to always get closer to the essence. An inquisitive and open- minded process is of great value to us</p>

                </div>
                <div className="responsive-div">
                  <div > <BsHandbag color='#fff' size={50} /></div>
                  <h2>Materialization</h2>
                  <p>
                    Visualizing the ideas, by giving them a material form, is an important communicative tool. Visualization will often involve hand- drawn and digital sketches, model- making and mock- ups as well as 3D visualization and detailed technical plans.
                  </p>
                </div>
                <div className="responsive-div">
                  <div > <BsGift color='#fff' size={50} /></div>

                  <h2>Products</h2>
                  <p>
                    The pre- production phase of the project calls for great attention to details. This implies the production of technical detailing, cost – and manufacturing analysis as well as packaging and life cycle analysis.
                  </p>
                </div>
              </div>

            </section>





            <TalkUs txtcolor="#fff" />
            <Footer txtcolor="#fff" />
          </div>
        </section>
      </SmoothScroll>
    </div>
  )
}

export default About;