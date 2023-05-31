import '../css/blog.css';
import TalkUs from '../components/talkus';
import Footer from '../components/footer';
import SmoothScroll from '../components/smoothScroll';
import Image from '../components/images';
import { BsArrowUpRightCircle } from "react-icons/bs";

function Blog() {

  const blogData = [
    {
      title: 'REDEFINING MRI SCANNING SPACE IN HEALTHCARE INTERIOR',
      sub_title: ``,
      description: "Most patients who experience an MRI scan, experience some degree of uneasiness and anxiety. Accordingly, some move so much that they cause movement ancient rarities, can't finish the treatment, or don't appear for the test also. These all outcomes in expanded well- being dangers and extra expenses. So we should help patients with defeating tension by transforming the MRI test into an agreeable, quick, and engaging experience that is in a state of harmony with cutting edge demands.",
      link: '',
      read_more: `According to research, the patients who go for MRI are very nervous and they are exacerbated by just looking at poor MRI scanning room conditions and waiting spaces. The Interiors of the room should accommodate an expansive scope of installations. Completely coated entrance doors and windows with common lighting cause the space to appear to be increasingly open. Fitted racks and organizers guarantee tidiness. Light plan and diversion highlights like illuminated pictures and film projections make a positive experience for the patient during MRI scanning.NMD Interiors can be trusted for creating an experience of well- being for MRI patients. Setting up a calm climate and a safe place for the patient is a must factor to ease the tension of the person going for MRI. So whatever technical and physical aspects need to be included when it comes to MRI scanning room interior design, the services should be like which gives an entirely different experience for the patients and visitors along with him.`
    },
    {
      title: 'FRESH, ENERGETIC PASTEL COLOURS FOR KIDS BEDROOM',
      sub_title: `Fresh pastel kids bedroom interior designs`,
      description: "Kids Room Interior designs are significant for the comfort of the children and furthermore their solid developing life. You have to know their taste, how to invigorate their sense, and kid's play style. Additionally, the plan of a child's room must have to associate with the rest of the house.",
      link: '',
      read_more: `NMD interiors state that parents should ask their children about their room design. at that point, they have fewer issues while redesigning the room for their kids in their teenage years. The best arrangement would consistently be to tune in to the children and consolidate their desires into a beautiful design for their rooms. As a matter of fact, it is important parents need to remember that we are serving for kids, however, they are an individual as well. Regardless of whether it's a children's room, we must know about their preferences and requirements.            
        Additionally, Fresh Pastels are current inside patterns that bring delightful room hues into kids' room adorning. Pastel tones are ideal for kids' rooms. Small children lean toward dynamic tones, and as they get more established room hues can change to quiet and refined pastels. New pastel tones blend light paint hues. Beautifying pads, window draperies, or shades are amazing designing frill that can improve kids' room shading palette. Additionally, Fresh Pastel tones are comfortable and simple for children's eyes. Talk to your kid about the most loved room hues. Utilize a couple of accents in these hues, leaving the coordinating pastels for the other interior decorating.`
    },
    {
      title: 'IMPORTANCE OF GREEN WALLS IN INTERIOR SPACES',
      sub_title: `Living green dividers purge the air, lessen the surrounding temperature, and make a feeling of prosperity.`,
      description: `We are surrounded by pollution, both outside and inside. Polluted air penetrates the air we inhale through our air frameworks and ventilation work and can cause what we ordinarily call "Wiped out Building Syndrome"  Green or living walls in the home interior can altogether clear up the air pollution.`,
      link: '',
      read_more: `Green walls offer your home insurance by going about as an atmosphere control. These green walls go about as characteristic protection, keeping the air inside the home cooler in the late spring months and hotter throughout the winter months. The way where these vertical green walls are developed permits the house to inhale, shields the home walls from polluted air, hurtful UV sun rays, and destructive downpour. Living green walls and green rooftops in your interior hem help to give a natural environment to winged creatures.
        Green walls in the home interior offer an amazing "mending condition", By just seeing something dominated by green plants or flowers decreases stress in a person. Also, as a name recommends, a green wall is truly something alive. The specific definition for this uncommon sort of urban scene is art. Green walls, like other inside plants, can bring a cut of nature inside your home, conveying ecological advantages. They likewise bring stylish intrigue, which has prompted green walls to turn into a trend in the interior design world in recent times.

Principal designer of NMD Interiors, Niraj Mehta once said, “Integrating nature, plants will enhance positive energy in the space.”

Given all that, there are a lot of reasons behind green walls getting progressively well known in inside spaces, for example, office and business structures, airports, and cafés.
        `
    },
    {
      title: 'RESTORING & BEAUTIFYING HERITAGE BUILDINGS WITH CREATIVE LIGHTING SOLUTIONS',
      sub_title: `“Temple going is for the purification of the soul.”
                    – Mahatma Gandhi`,
      description: `visualise yourself sitting inside the temple premises with the melodious chanting of the sacred hymns intermingled with the spellbinding aroma of the incense sticks and the mesmerizing sight of innumerable lamps adorning the divine place. Such a place is truly a sight to behold, but it is no longer true for a large number of temples in our country which are uncared for and overlooked by us.`,
      link: '',
      read_more: `Our numerous temples with the shattered walls with faded paints and plaster coming off depict the plight of the erstwhile magnificent ancient heritage of our rich cultural tradition. A country’s heritage is best depicted by its monumental architectural style.

        Enhancing and restoring the heritage temples of our country becomes of utmost significance; and that too, utilizing creative lighting to beautify the interior as well as the exterior of the temple premises is one of the best ways to honor and preserve our lost heritage. Creative lighting blend with various shades of pink, orange, yellow, red, and blue gives the heritage temples a vividly fascinating look and further helps in their restoration and upliftment. Perfect use of creative lighting enhances the wall paintings and sculptures adorning the walls as well as the idols of gods and goddesses placed on the altars.
        
        "Light & Shadow is the best way to re-define heritage buildings. we need to prevent and show important elements of carving to world.."thaughts by Niraj Mehta, who has special learning in the field of creative lighting from London Metropolitan University in London. Niraj won the 'Kent Ve Sanat' International competition held in London while studying in London. Niraj also stood runners up for Re-thinking the future Global awards 2020 for 100 bedded Hospital designed by his firm NMD Interiors. 
        
        It is very crucial to uplift and restores our heritage temples using creative lighting before they are lost forever in the deep abyss of oblivion; far away from the attention of the common folks, lying ruined somewhere desperate for restoration.`
    },
    {
      title: 'IMPORTANCE OF LIFE-SIZED MURAL IN RESIDENTIAL SPACES',
      sub_title: ``,
      description: `You need to accept that it feels good welcoming somebody into your home and getting overwhelmed with praises about how extraordinary your home interior is. What's more, yes I know those "stunning" murmurs are not that simple to get; it takes weeks or perhaps long periods of arranging, picking the most proper hues and structures and assembling everything. But, at this present second while hearing how overall quite refined everything looks, you certainly are beyond happy and everything you can consider is – "truly, it was justified, despite all the trouble and money spend!"`,
      link: '',
      read_more: `But, what is the way to getting a home stylistic layout that will captivate each and every individual who gets the chance to make the most of its charms? Regardless of whether it is a life-sized mural, stunning lighting arrangements, or beautiful sofas and chairs, all these embellishing pieces can totally make your residential interior perfect. Also, talking about amazing plans to make your home look like paradise from an interior designer perspective, the life-sized mural is a definitive method to zest up the dull look of your house walls.

        “Mural is just like emotions of space, the identity of people, and power of wisdom!” said by Niraj Mehta, Principal designer of NMD Interiors.
        
        In recent times the importance of life-sized mural has increased in the residential interior because why not? life-sized mural creates a special effect. It creates an Illusion among dreams and reality. Have fun with visual wall arts and make a deception of being at your preferred goals around the world. What about savoring espresso in your room while looking at the Eiffel Tower? A fantasy work out as expected, isn't that so? Dare to make it work!`
    },
    {
      title: 'BEDROOM BLUES',
      sub_title: `“Blue color is everlastingly appointed by the deity to be a source of delight.”
        – John Ruskin, An eminent Victorian English art critic`,
      description: `Visualize yourself dozing in your comfy bed under the mattress that has been chilled by the frosty waves of your air conditioner. You gradually wake up gazing at the mesmerizingly designed false ceiling that has been adorned by the fine strokes of the blue hue. You keep your bare feet onto the delicately styled fur mat which caresses them as if you are in Mother Nature’s lap, while your spouse brings a freshly brewed cup of hot coffee which you savor along with your routine readings of headlines on the newspaper.`,
      link: '',
      read_more: `This visualization is not just a sad dream-only situation which seems to be utopian in nature; we are capable enough to transform these thoughts of yours into sheer reality. Our refined wooden flooring along with our finely - crafted drawers and shelves manage to give you that arboraceous feel within the confines of your urban life setting which one otherwise looks for in a naturalistic environment. Our in-built mechanism of energy-efficient LED light bulbs placed within the false ceiling illuminates your room as well as your household life`
    },
    {
      title: 'TRENDS WHICH WILL DOMINATE 2018 FOR RESIDENTIAL INTERIOR',
      sub_title: `“Blue color is everlastingly appointed by the deity to be a source of delight.”
        – John Ruskin, An eminent Victorian English art critic`,
      description: `These days trends forecasting plays such an important role in interior design segment. Keeping in mind, NMD Interiors forecast 4 charming trends which may dominate 2018.`,
      link: '',
      read_more: `Use of neutral, soothing colors with hint of clean metallic edges and borders will enhance royal, luxurious, contemporary trends to next level.  Use of copper, rose gold, gold, silver, steel will enhance the product.`
    },

  ];

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
                <p>{blogData[0].description}</p>
              </div>
            </section>

            {/* <section className='blogs-box-wrapper'>
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
          </section> */}

            <section className='blogs-box-wrapper'>
              <div className='blogs-box-container'>
                {blogData.map((blog, index) => (
                  <>
                    <div className='blogs-content-box' key={index}>
                      {/* <div className='blogs-image-box'>
                      <img src={Image.image1} alt="" />
                    </div> */}
                      {/* <div className='blogs-image-box'>
                      <img src={Image[`image${index + 1}`]} alt="" />
                    </div> */}
                      <div className='blogs-desc-box'>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <button><BsArrowUpRightCircle color='#ccc' size={50} /></button>
                      </div>

                    </div>
                    {/* <div className='blogs-content-box' key={index}>

                    </div> */}
                                        {/* <div className='blogs-content-box' key={index}></div> */}
                  </>

                ))}
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
