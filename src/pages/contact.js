import '../css/contact.css';
import ContentImg2 from '../assets/img/img2.jpg'


function Contact() {

  return (
    <>
      <section className='contact-container'>
        <div className='contact-bg-img'>
          <img src={ContentImg2} alt="" />
        </div>

        <div className='contact-form-container'>
          <div className='contact-title-container'>
            <p>Have a big plans?</p>
            <h2>Let`s talk</h2>
          </div>
          <form>
            <div className='form-container'>
              <div className='form-container-block'>
                <div>
                  <input placeholder='Name*' className='input' />
                  <span className='underline'></span>
                </div>
                <div>
                  <input placeholder='Email*' />
                </div>
                <div>
                  <input placeholder='Location*' />
                </div>
              </div>
              <div className='form-container-block'>
                <div>
                  <input placeholder='Contact Number*' />
                </div>
                <div>
                  <input placeholder='Type*' />
                </div>
                <div>
                  <input placeholder='Budget*' />
                </div>
              </div>
              <div className='form-container-textarea'>
                <div>
                  <input placeholder='Write your message here' />
                </div>
                <div>
                  <button>SUBMIT</button>
                </div>
              </div>
            </div>
          </form>

          <div className='contact-details-container'>
            <div>
              <h2>Contact</h2>
              <p>+911234567890</p>
              <p>contact@nmd.com</p>
            </div>

            <div>
              <h2>Address</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium</p>
            </div>
          </div>

          <div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.8439362118183!2d75.90523795067338!3d17.657549099544873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da7397e41949%3A0x1bfb269032af5212!2sNMD%20Interiors!5e0!3m2!1sen!2sin!4v1676439615523!5m2!1sen!2sin" 
              width="100%" 
              height="300" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title='NMD Interiors'
              ></iframe>
          </div>

          <div className='contact-copyright-container'>
            <span>Copyright ©2023 all rights reserved to NMD  </span> | <span>  Designed and Developed by Conversant</span>
          </div>
        </div>

      </section>

    </>
  );
}

export default Contact;
