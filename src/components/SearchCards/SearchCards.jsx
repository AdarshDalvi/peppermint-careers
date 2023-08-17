import { GrLocation } from 'react-icons/gr'
import './SearchCards.scss'

export default function SearchCards({ position, location }) {
    return (
        <div className='searchCard'>
            <h3>{position}</h3>
            <div className='sinfo'>
                <div className="sleft">
                    <GrLocation size={20} />
                    <p>{location}</p>
                </div>
                <button onClick={() => window.open('https://docs.google.com/forms/d/1WwaIbgI0McLokj7VCgpDmgEnnJAi8bjZqnLkPdFqKwI/edit', '_blank')}>Apply</button>
            </div>
        </div>
    )
}
