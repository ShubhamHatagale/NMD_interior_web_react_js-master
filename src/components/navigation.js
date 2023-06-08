import '../css/main.css';
import { Link } from 'react-router-dom';
import { useMultiLayerPageReveal } from 'react-multilayer-page-reveal';

function Navigation() {

    const { reveal } = useMultiLayerPageReveal();

    function handleReveal() {
        // reveal(() => {
        //     console.log('hello')
        // }, 750);
    }

    return (
        <div className='main-nav-section'>
            <div className='navigation-section'>
                <div className='navigation-details'>
                    
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
                <div className='navigation-links-wrapper'>
                    <ul>
                        <li><Link to="/dev/front_end/about">About</Link></li>
                        <li><Link to="/dev/front_end/work">Work</Link></li>
                        <li><Link to="/dev/front_end/blog">Blog</Link></li>
                        <li><Link to="/dev/front_end/news">News</Link></li>
                        <li><Link to="/dev/front_end/career">Career</Link></li>
                        <li onClick={handleReveal}><Link to="/dev/front_end/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navigation;