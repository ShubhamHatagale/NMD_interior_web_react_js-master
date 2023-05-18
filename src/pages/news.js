import '../css/news.css';
// import { useLayoutEffect, useRef } from 'react'
import TalkUs from '../components/talkus';
import Footer from '../components/footer';
import SmoothScroll from '../components/smoothScroll';
import Image from '../components/images';


function News() {



  return (
    <>
       <SmoothScroll>
      

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className='news-title-container'>
            <div>
              <h2><span>News & Media</span></h2>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.</p>
            </div>
          </section>

          <section className='news-box-wrapper'>
            <div className='news-box-container'>
              <div>
                <div className='img-con'>
                  <img src={Image.image2} alt="" className='img_1'/>
                  <img src={Image.image3} alt="" className='img_2'/>
                  <img src={Image.image1} alt="" className='img_3'/></div>
              
                  <div className='p-con'>
                  <div>
                <h1>Some news Title</h1>  
                <p>---------- (Business)</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor.</p>              </div>
                </div>  
                </div>  
            </div>
            <div className='news-box-container'>
              <div>
                <div className='img-con'>
                  <img src={Image.image4} alt="" className='img_1'/>
                  <img src={Image.image5} alt="" className='img_2'/>
                  <img src={Image.image1} alt="" className='img_3'/></div>
              
                  <div className='p-con'>
                  <div>
                <h1>Some news Title</h1>  
                <p>---------- (Business)</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor.</p>              </div>
                </div>  
                </div> 
            </div>
            <div className='news-box-container'>
              <div>
                <div className='img-con'>
                  <img src={Image.image2} alt="" className='img_1'/>
                  <img src={Image.image3} alt="" className='img_2'/>
                  <img src={Image.image1} alt="" className='img_3'/></div>
              
                <div className='p-con'>
                  <div>
                <h1>Some news Title</h1>  
                <p>---------- (Business)</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor.</p>              </div>
                </div>  
                </div>
            </div>
            <div className='news-box-container'>
              <div>
                <div className='img-con'>
                  <img src={Image.image5} alt="" className='img_1'/>
                  <img src={Image.image1} alt="" className='img_2'/>
                  <img src={Image.image2} alt="" className='img_3'/></div>
              
                  <div className='p-con'>
                  <div>
                <h1>Some news Title</h1>  
                <p>---------- (Business)</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor.</p>              </div>
                </div>  
                </div> 
            </div><div className='news-box-container'>
              <div>
                <div className='img-con'>
                  <img src={Image.image1} alt="" className='img_1'/>
                  <img src={Image.image4} alt="" className='img_2'/>
                  <img src={Image.image5} alt="" className='img_3'/></div>
              
                  <div className='p-con'>
                  <div>
                <h1>Some news Title</h1>  
                <p>---------- (Business)</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor.</p>              </div>
                </div>  
                </div>
            </div>
          </section>

          <TalkUs txtcolor="#fff" />
          <Footer txtcolor="#fff" />
        </div>
      </div>
      </SmoothScroll>
    </>
  );
}

export default News;
