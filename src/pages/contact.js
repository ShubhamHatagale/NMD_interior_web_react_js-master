import '../css/contact.css';
import ContentImg2 from '../assets/img/img2.jpg'
import { useState } from 'react';

function Contact() {
  const currentYear = new Date().getFullYear();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setcontact] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactError, setcontactError] = useState('');
  const [messageError, setmessageError] = useState('');
  const APIUrl = process.env.REACT_APP_Base_URL;


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'contact') {
      setcontact(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // setName('');
    // setEmail('');
    // setcontact('');
    // setMessage('');
    setNameError('');
    setEmailError('');
    setcontactError('');
    setmessageError('');

    console.log(name)
    // Validate name field
    if (!name) {
      setNameError('Name is required');
    }

    // Validate contact number field
    if (!contact) {
      setcontactError('Contact number is required');
    }

    if (!email) {
      setEmailError('Email is required');
    }

    if (!message) {
      setmessageError('Message is required');
      return false
    }

    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(contact)) {
      setcontactError('Invalid contact number');
      return;
    }

    // Validate email field
    if (!email) {
      setEmailError('Email is required');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email');
      return;
    }

    if (!message) {
      setmessageError('Message is required');
    }

    // Form submission logic
    console.log({
      name,
      email,
      contact,
      message
    });

    // {
    //   "name": "John Doe",
    //   "email": "johndoe@example.com",
    //   "contact": 1234567,
    //   "message": "Hell"
    // }

    if (name && email && contact && message) {
      // Prepare the data object to be sent in the POST request
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      // myHeaders.append("Authorization", token);
      var raw = JSON.stringify({
        name: name,
        email: email,
        contact: contact,
        message: message,
      })
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      console.log(raw);
      // fetch(APIUrl +'/NMD_php_backend/api-contact.php', requestOptions)
      fetch(`${APIUrl}/api-contact.php`, requestOptions)

        // fetch(`http://localhost/NMD_php_backend/api-contact.php`, requestOptions)
        .then((response) => response.json())
        .then((resData) => {
          console.log(resData);
          if (resData.status === 200) {
            alert("Data Added Successfully")
            setName('');
            setEmail('');
            setcontact('');
            setMessage('');
            setNameError('');
            setEmailError('');
            setcontactError('');
            setmessageError('')
          }


          // if (resData.status == 200) {
          //   setConfirmDialog({
          //     isOpen: true,
          //     title: 'Alert',
          //     subTitle: "Manager Assigned Successfully",
          //   })
          // }
          // if (resData.status == 400) {
          //   setConfirmDialog({
          //     isOpen: true,
          //     title: 'Error',
          //     subTitle: "Manager Already Exist With This E-mail,Plaese Change E-mail and try again",
          //   })
          // }
          // props.resetForm();
        })
        .catch((error) => {
          console.log("error", error)
        });
    }
  }

  const isFormValid = () => {
    return name && email && contact;
  }

  return (
    <>
      <section className='contact-container'>
        <div className='contact-bg-img'>
          <img src={ContentImg2} alt="" />
        </div>

        <div className='contact-form-container'>
          <div className='contact-title-container'>
            <p>Have big plans?</p>
            <h2>Let's talk</h2>
          </div>
          <form>
            <div className='form-container'>

              <div className='form-container-textarea'>
                <div>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name*'
                    className='input'
                    value={name}
                    onChange={handleChange}
                    required
                  />
                  <span className='underline'></span>
                  {nameError && <span className='error'>{nameError}</span>}

                </div>

              </div>

              <div className='form-container-textarea'>
                <div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email*'
                    value={email}
                    onChange={handleChange}
                    required
                  />
                  {emailError && <span className='error'>{emailError}</span>}
                </div>

              </div>


              <div className='form-container-textarea'>
                <div>
                  <input
                    type='number'
                    name='contact'
                    placeholder='Contact Number*'
                    value={contact}
                    onChange={handleChange}
                    required
                  />
                  {contactError && (
                    <span className='error'>{contactError}</span>
                  )}
                </div>

              </div>

              <div className='form-container-textarea'>
                <div>
                  <input
                    placeholder='Write your message here'
                    value={message}
                    name={`message`}
                    onChange={handleChange}
                  />
                  {messageError && (
                    <span className='error'>{messageError}</span>
                  )}
                </div>
                <div>
                  <button onClick={handleSubmit} >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className='contact-details-container'>
            <div>
              <h2>Contact</h2>
              <p>0217-2312443</p>
              <p>niraj@nmdinteriors.com</p>
            </div>

            <div>
              <h2>Address</h2>
              <p>
                Sanjeevani, 560/27, S. S Bazar, Vinayak Nagar, Solapur -
                413003. Maharashtra, India.
              </p>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.8439362118183!2d75.90523795067338!3d17.657549099544873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da7397e41949%3A0x1bfb269032af5212!2sNMD%20Interiors!5e0!3m2!1sen!2sin!4v1676439615523!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title='NMD Interiors'
            ></iframe>
          </div>

          <div className='contact-copyright-container'>
            <span>
              Copyright ©{currentYear} all rights reserved to NMD
            </span>{' '}
            | <span>Designed and Developed by Conversant</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
