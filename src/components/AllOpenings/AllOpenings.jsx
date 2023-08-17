import { useState } from 'react'
import './AllOpenings.scss'
import { HiSearch } from 'react-icons/hi'
import SearchCards from '../SearchCards/SearchCards'


export default function AllOpenings() {

    const [keyword, setKeyword] = useState("")
    const [foundJobs, setFoundJobs] = useState([])

    const openings = [
        {
            id: 0,
            position: "SDE III - Software Development Engineer III",
            location: "On Site, Pune",
            experience: 3,
            skillset: ["Python", "API", "MongoDB", "Dockers", "Flutter", "Mobile/Web App Development"]
        },
        {
            id: 1,
            position: "SCE I - Supply Chain Engineer",
            location: "On Site, Pune",
            experience: 2,
            skillset: ["Lean Six Sigma", "Supply chain management", "Inventory", "JIT"]
        },
        {
            id: 2,
            position: "RE - I (PERCEPTION) - Robotics Engineer I - ",
            location: "On Site, Pune",
            experience: 1,
            skillset: ["C++", "ROS1/ROS2", "SLAM", "OpenCV", "CUDA", "Pytorch", "TensorFlow", "Navigation"]
        }
    ]

    const searchJob = () => {
        const filteredJobs = openings.filter(item => item.position.toLowerCase().includes(keyword.toLowerCase()))
        if (filteredJobs.length > 0) {
            setFoundJobs(filteredJobs)
        } else {
            setFoundJobs([])
        }
    }

    return (
        <div className='openings-container container'>
            <h2>Discover Your Ideal Role </h2>
            <div className='search-container'>
                <input name='keyword' value={keyword} onChange={(event) => setKeyword(event.target.value)} type="text" placeholder='Search Job Title' />
                <button onClick={searchJob}>
                    <HiSearch color='white' size={24} />
                </button>
            </div>
            {
                keyword
                    ? foundJobs.length > 0
                        ? foundJobs.map(job => {
                            return <SearchCards
                                key={job.id}
                                position={job.position}
                                location={job.location}
                            />
                        }) : <p>Nothing Matched</p>
                    : null
            }
            {!keyword && <p>{`“If you are excited about the prospect of building awesome tech and robots, we’d love to hear from you”.`}</p>}
        </div>
    )
}
