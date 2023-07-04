import { Link } from 'react-router-dom';
import '../css/main.css';

function TalkUs(props) {
  return (
    <>
      <section className='talk-us-section' style={{ backgroundColor: props.bgcolor }}>
        <div className='talk-title-container'>
          <h2><span className='talk-title'>Talk   to  Us</span></h2>
          {/* <p className='talk-text-cur' style={{ color: props.txtcolor }}>contact now</p> */}
          <Link to="/contact" className='talk-text-cur' style={{ color: props.txtcolor }} >
            contact now
          </Link>

        </div>
      </section>
    </>
  );
}

export default TalkUs;
