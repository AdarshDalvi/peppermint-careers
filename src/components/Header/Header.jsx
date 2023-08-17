import './Header.scss'
import { useEffect, useState } from 'react'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Change the value as needed
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const bgColor = {
        background: scrolled ? '#22292F' : 'transparent'
    }

    const navigateTo = (link) => {
        window.open(link, '_blank')
    }
    return (
        <header style={bgColor}>
            <div className='logo'>
                <img src="images/logo.png" alt="" />
                <div></div>
                <p>Careers</p>
            </div>
            <div className='social-media-wrapper'>
                <button onClick={() => navigateTo('https://twitter.com/getpeppermint')}>
                    <BsTwitter className='icons' />
                </button>
                <button onClick={() => navigateTo('https://www.linkedin.com/company/getpeppermint')}>
                    <BiLogoLinkedin className='icons' />
                </button>
                <button onClick={() => navigateTo('https://www.youtube.com/channel/UCsBgxvgDYRPHEKPp_tU-Qyw')}>
                    <BsYoutube className='icons' />
                </button>
                <button onClick={() => navigateTo('mailto:info@getpeppermint.co')}>
                    <AiOutlineMail className='icons' />
                </button>
            </div>
        </header>
    )
}
