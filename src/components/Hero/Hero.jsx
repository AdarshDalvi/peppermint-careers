import './Hero.scss'

export default function Hero({ scrollToAllOpenings }) {
    return (
        <div className='hero-container'>
            <video src="video/peppermint.mp4" autoPlay muted loop></video>
            <div className='overlay'></div>
            <div className='section-wrapper'>
                <h1>Explore Available Positions</h1>
                <button onClick={scrollToAllOpenings}>Explore</button>
            </div>
        </div>
    )
}
