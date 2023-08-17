import CurrentCard from "./CurrentCard";
import './CurrentOpenings.scss'


export default function CurrentOpenings() {

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

    return (
        <div className="current-openings-container container">
            <h2>Current Openings</h2>
            {
                openings.map(item => {
                    return <CurrentCard
                        key={item.id}
                        position={item.position}
                        experince={item.experience}
                        location={item.location}
                        skillset={item.skillset}
                    />
                })
            }
            <button className="explore">Explore All</button>
        </div>
    )
}
