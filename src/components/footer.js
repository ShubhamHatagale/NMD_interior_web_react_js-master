import '../css/main.css';
import { FaInstagram } from 'react-icons/fa';
import { ImFacebook, ImPinterest2} from 'react-icons/im';

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{background: props.bgcolor}}>
        <div className="footer-conatiner">
          <div className='footer-copyright' style={{color: props.txtcolor}}>Copyright ©{currentYear} all rights reserved to NMD </div>
          <div className='footer-credit'><p style={{color: props.txtcolor}}>Designed and Developed by Conversant</p></div>
          <div className='footer-social'>
            <ul>
              <li style={{color: props.txtcolor}}><ImFacebook/></li>
              <li style={{color: props.txtcolor}}><FaInstagram /></li>
              <li style={{color: props.txtcolor}}><ImPinterest2/></li>
            </ul>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
