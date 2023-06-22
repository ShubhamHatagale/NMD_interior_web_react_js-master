import '../css/career.css';
import ContentImg2 from '../assets/img/img2.jpg'
import SmoothScroll from '../components/smoothScroll';


function Career() {

   
    return (
        <>
            <SmoothScroll>
                <section className='career-container'>
                    <div className='career-flex'>
                        <div className='career-title-container'>
                            {/* <p>Career</p> */}
                            <h2>Love Interior?</h2>
                            <h2>You`ll fit right in.</h2>


                            <div className='career-position'>
                                <span>I`m interested in</span>
                                <select className='selected'>
                                    <option>Select</option>
                                    <option>3D designer</option>
                                    <option>Sketcher</option>
                                    <option>Interior design</option>
                                </select>
                            </div>

                            <div className='career-available-positions'>
    
                                <h4>WORK WITH US</h4>
                                <div>
                                    <hr />

                                    
                                    <p>Do you always receive compliments on your taste in interior decoration? Do wall paints, handcrafted furniture and decors catch your eye even in the most unlikely of places? Interior designers are constantly balancing their design decisions and their clients’ desires. It’s not a cakewalk, to say the least.If you are a design professional who can steer clients toward a favorable outcome while making them feel they are in full control of the design choices, we would certainly love to have on our team! Just drop your resume and portfolio with full details to careers@nmdinteriors.com and we will get in touch with you!</p>
                                    <br />

                                </div>

                            </div>

                            <div className='career-form-container'>
                                <h2>Join us</h2>
                                <br />
                                <form>
                                    <div className='form-container'>
                                        <div className='form-container-block'>
                                            <div>
                                                <input placeholder='First Name*' className='input' />
                                                <span className='underline'></span>
                                            </div>
                                            <div>
                                                <input placeholder='Email*' />
                                            </div>
                                            <div>
                                                <input placeholder='Phone*' />
                                            </div>
                                        </div>
                                        <div className='form-container-block1'>
                                            <div>
                                                <input placeholder='Last Name*' />
                                            </div>
                                            <div>
                                                <input placeholder='Location*' />
                                            </div>
                                            <div>
                                                <input placeholder='Position*' />
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
                            </div>

                        </div>
                        <div className='career-bg-img'>
                            <img src={ContentImg2} alt="" />
                        </div>
                    </div>


                </section>
            </SmoothScroll>

        </>
    );
}

export default Career;
