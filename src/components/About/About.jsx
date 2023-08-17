import './About.scss'

export default function About() {
    return (
        <div className='about-container container'>
            <h2>About Peppermint</h2>
            <p>
                Peppermint is an award-winning robotics company, supported by SINE IIT-Bombay and Qualcomm.
                Peppermint develops and deploys Industrial and Enterprise robots and platforms for mobility-led services.
                The Engineering team has 50+ years of experience in building deep-tech and robotics products.
                Robots built on the Peppermint Platform are deployed across 13 cities in 4 countries!
            </p>
            <div className='approach-wrapper'>
                <div className='left'>
                    <img className='img3' src="/images/col3.jpg" alt="" />
                    <img className='img1' src="/images/col1.jpg" alt="" />
                    <img className='img2' src="/images/col2.jpg" alt="" />
                </div>
                <div className='right'>
                    <h2>Transforming Workspaces</h2>
                    <p>
                        Peppermint Robots is reimagining the very essence of workspaces.
                        With the strong backing of SINE IIT-Bombay & Qualcomm, we're pioneering the fusion of robotics and work environments.
                        Our suite of Housekeeping Robots and Material Handling Robots is engineered to elevate efficiency, taking workplaces into a new era.
                        Join us in shaping the future of workspaces through innovation and automation.
                    </p>
                </div>
            </div>
        </div>
    )
}
