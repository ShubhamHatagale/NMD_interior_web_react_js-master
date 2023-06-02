import '../css/news.css';
// import { useLayoutEffect, useRef } from 'react'
import TalkUs from '../components/talkus';
import Footer from '../components/footer';
import SmoothScroll from '../components/smoothScroll';
import Image from '../components/images';
import { useEffect, useState } from 'react';


function News() {
  const APIUrl = process.env.REACT_APP_Base_URL;

  const [newsData, setnewsData] = useState([])


  useEffect(() => {
    GetPackageData()
  }, [])


  const GetPackageData = () => {

    console.log("yes")
    var myHeaders = new Headers();
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }
    fetch(APIUrl + '/api-news.php', requestOptions)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setnewsData(result)
      })

  }

  const newsDatas = [
    {
      id: 0,
      img0: Image.image2,
      img1: Image.image3,
      img2: Image.image1,
      title: "Some news Title",
      subtitle: "---------- (Business)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor."
    },
    {
      id: 0,
      img0: Image.image4,
      img1: Image.image5,
      img2: Image.image1,
      title: "Some news Title",
      subtitle: "---------- (Business)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor."
    },
    {
      id: 0,
      img0: Image.image2,
      img1: Image.image3,
      img2: Image.image1,
      title: "Some news Title",
      subtitle: "---------- (Business)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor."
    },
    {
      id: 0,
      img0: Image.image5,
      img1: Image.image1,
      img2: Image.image2,
      title: "Some news Title",
      subtitle: "---------- (Business)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor."
    },
    {
      id: 0,
      img0: Image.image1,
      img1: Image.image4,
      img2: Image.image5,
      title: "Some news Title",
      subtitle: "---------- (Business)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor."
    },

  ]

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
              {newsData.map((item, key) => (
                <div className='news-box-container'>
                  <div>
                    <div className='img-con'>
                      <img src={item.img0} alt="" className='img_1' />
                      <img src={item.img1} alt="" className='img_2' />
                      <img src={item.img2} alt="" className='img_3' /></div>

                    <div className='p-con'>
                      <div>
                        <h1>{item.title}</h1>
                        <p>{item.subtitle}</p>
                        <p>{item.description}</p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}



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
