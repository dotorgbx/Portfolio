import './ProjectCard.css'

function ProjectCard({ src, link, h3, p }) 
{ return ( <a href={link} target="_blank" rel="noreferrer" className="projectCardLink" aria-label={`View ${h3} project`} > 
<article className="box"> <img className="ProjectLogo" src={src} alt={`${h3} logo`} /> 
<h3 className="ProjectH"> {h3} </h3> <p className="ProjectP"> {p} </p> </article> </a> ); } 
export default ProjectCard;