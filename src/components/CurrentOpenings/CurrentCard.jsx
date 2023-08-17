import './CurrentOpenings.scss'
import { GrLocation } from 'react-icons/gr'


export default function CurrentCard({ position, experince, location, skillset }) {

    const skills = skillset.join(', ');

    return (
        <div className="current-card">
            <h3>{position}</h3>
            <div className='info-wrapper'>
                <div className='info'>
                    <div className='location'>
                        <GrLocation size={20} />
                        <p>{location}</p>
                    </div>
                    <div className='location'>
                        <p style={{ marginLeft: 0 }}>Experience :</p>
                        <p>{experince} years</p>
                    </div>
                    <p>Skillset : {skills}</p>
                </div>
                <button onClick={() => window.open('https://docs.google.com/forms/d/1WwaIbgI0McLokj7VCgpDmgEnnJAi8bjZqnLkPdFqKwI/edit', '_blank')}>Apply</button>
            </div>
        </div>
    )
}
