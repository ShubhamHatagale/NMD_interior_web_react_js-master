import '../css/work.css';
import React, { useRef, useEffect, useState } from 'react';
import TalkUs from '../components/talkus';
import Footer from '../components/footer';
import SmoothScroll from '../components/smoothScroll';
import ContentImg1 from '../assets/img/img1.jpg';
import ContentImg2 from '../assets/img/img2.jpg';
import ContentImg3 from '../assets/img/img3.jpg';
import ContentImg4 from '../assets/img/img4.jpg';
import { Element, scroller } from 'react-scroll';

import image1 from '../assets/img/img1.jpg'
import image2 from '../assets/img/img2.jpg'
import image3 from '../assets/img/img3.jpg'
import image4 from '../assets/img/img4.jpg';

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));


function Work() {

  const products = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 3,
      image: image4,
    },
    // add more products here
  ];

  const ourWorkData = [
    {
      products: [
        {
          id: 1,
          image: image1,
        },
        {
          id: 2,
          image: image2,
        },
        {
          id: 3,
          image: image3,
        },
        {
          id: 3,
          image: image4,
        }
      ],
      title: "Home Interior making",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.",
    },
    {
      products: [
        {
          id: 1,
          image: image1,
        },
        {
          id: 2,
          image: image2,
        },
        {
          id: 3,
          image: image3,
        },
        {
          id: 3,
          image: image4,
        }
      ],
      title: "Home Interior making",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.",
    },
    {
      products: [
        {
          id: 1,
          image: image1,
        },
        {
          id: 2,
          image: image2,
        },
        {
          id: 3,
          image: image3,
        },
        {
          id: 3,
          image: image4,
        }
      ],
      title: "Home Interior making",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.",
    },
    {
      products: [
        {
          id: 1,
          image: image1,
        },
        {
          id: 2,
          image: image2,
        },
        {
          id: 3,
          image: image3,
        },
        {
          id: 3,
          image: image4,
        }
      ],
      title: "Home Interior making",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.",
    },

  ]


  const containerRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault();
    const container = containerRef.current;
    container.scrollBy({
      left: event.deltaY > 0 ? 500 : -500,
      behavior: 'smooth'
    });
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const imagesRef = useRef(null);

  const scrollLeft = () => {
    imagesRef.current.scrollLeft -= 100;
  };

  const scrollRight = () => {
    imagesRef.current.scrollLeft += 100;
  };

  return (
    <>

      <SmoothScroll>
        <div>
          <section className='work-title-container'>
            <div>
              <h2><span> Our Work </span></h2>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.</p>
            </div>
          </section>

          {ourWorkData.map((item, key) => (
            <section className='project-box-wrapper'>
              <div className='project-box-container' ref={containerRef} onWheel={handleWheel}>
                {item['products'].map((product) => (
                  <div key={product.id} >
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                  </div> 
                ))}
              </div>

              <div className='project-title-container'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button onClick={scrollRight}><BsArrowLeftCircle color='#fff' size={50} /></button>
                <button onClick={scrollLeft}><BsArrowRightCircle color='#fff' size={50} /></button>

              </div>
            </section>
          ))}

          <TalkUs txtcolor="#fff" />
          <Footer txtcolor="#fff" />
        </div>
      </SmoothScroll>
    </>
  );
}


export default Work;
