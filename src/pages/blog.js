import '../css/blog.css';
import TalkUs from '../components/talkus';
import Footer from '../components/footer';
import SmoothScroll from '../components/smoothScroll';
import Image from '../components/images';
import { BsArrowUpRightCircle } from "react-icons/bs";

function Blog() {

  return (
    <>
    

      <SmoothScroll>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className='blogs-title-container'>
            <div>
              <h2><span>Our Blog</span></h2>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.</p>
            </div>
          </section>

          <section className='blogs-box-wrapper'>
            <div className='blogs-box-container'>
              <div className='blogs-content-box'>
                <div className='blogs-image-box'>
                  <img src={Image.image1} alt=""/>
                </div>
                  <div className='blogs-desc-box'>
                    <h3>Blog Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.</p>
                    <button><BsArrowUpRightCircle color='#ccc' size={50}/></button>
                  </div>
               
              </div>
              <div className='blogs-content-box'>
              <div className='blogs-desc-box'>
                    <h3>Blog Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.</p>
                    <button><BsArrowUpRightCircle color='#ccc' size={50}/></button>
                  </div>
                <div className='blogs-image-box'>
                  <img src={Image.image2} alt=""/>
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

export default Blog;
