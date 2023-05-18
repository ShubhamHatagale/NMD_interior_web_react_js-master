import '../css/main.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useMultiLayerPageReveal } from 'react-multilayer-page-reveal';
import Logo from '../assets/img/logo.png'

function Header() {

    const [show, setShow] = useState(true);

    function changeState() {
        console.log('hello')
        setShow(!show);
        
    }

    const { reveal } = useMultiLayerPageReveal();

    function handleReveal() {
        reveal(() => {
            console.log('hello')
        });
    }

    return (
        <div>
            <header>
                <div className='nav-logo'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.863 84.273">
                        <path id="Path_1" data-name="Path 1" d="M518-462.91l24.112-41.605h48.917V-491.2H548.65v59.572h11.382V-455.6h6.781l12.35,23.974h4.843V-455.6h19.857v12.108l-12.835,23.248H542.112Z" transform="translate(-518 504.515)" fill="#ffd800" />
                    </svg> */}
                    <img src={Logo} alt='none' />
                </div>
                <div className='nav-menu-section'>
                    <div>
                        <p>IN | EN</p>
                        {/* <button onClick={handleReveal} >cleick</button> */}

                    </div>
                    <div className='nav-button'>
                        {show ? (

                            <button onClick={changeState}>
                                <Link to="/projects/nmd/navigation">
                                    <svg viewBox="0 0 197 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 3H197M0 32H197" stroke-width="5" />
                                    </svg>
                                </Link>
                            </button>
                        ) : (
                            <button onClick={changeState}>
                                <Link to="/projects/nmd/">
                                    <svg viewBox="0 0 197 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 3H197M0 32H197" stroke-width="5" />
                                    </svg>
                                </Link>
                            </button>
                        )}

                    </div>
                </div>
            </header>

        </div>
    );
}

export default Header;