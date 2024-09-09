import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Header.css";

// Import images
import profileImage from './Anshul_pic.jpg';
import ukrClubImage from './ukrClub.png';
import foreverCareImage from './foreverCare.png';
import adventureTravelsImage from './AdventureTravels.png';
import glossierImage from './glossier.png';

const Header = () => {
  const componentRef = useRef();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showHobbies, setShowHobbies] = useState(true);
  const [showReferences, setShowReferences] = useState(true);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showExperienceDetails, setShowExperienceDetails] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const skillsWithRating = [
    { skill: "HTML", rating: 5 },
    { skill: "CSS", rating: 5 },
    { skill: "JavaScript", rating: 5 },
    { skill: "React", rating: 4 },
    { skill: "Node.js", rating: 4 },
    { skill: "Express.js", rating: 4 },
    { skill: "Mongodb", rating: 4 },
  ];

  const portfolioProjects = [
    {
      title: "UKR Club- Cottage Booking Website",
      description: "User-friendly interface: Designed an intuitive interface for easy browsing and selection of travel packages. Package browsing: Enabled users to view and explore various travel packages.",
      techStacks: "Javascript, HTML, CSS",
      imageUrl: ukrClubImage,
    },
    {
      title: "Adventure Travels",
      description: "The Adventure Travels is the website name of our project and it is a website where the users can book tourism travels plans and enjoy the traveling features provided by us.",
      techStacks: "Javascript, HTML, CSS",
      imageUrl: adventureTravelsImage,
    },
    {
      title: "Forever Care",
      description: "Forever Care is a doctor consultation booking website. Experiencing the website we can book doctors in the different cities within the variety of different departments. In this way, the website can be easily navigated according to our needs. This project uses the React library, with the Javascript and CSS which includes external CSS like CharkaUI and MaterialUI. This website is fully responsive so we can have a hassle-free experience on any device.",
      techStacks: "Javascript, HTML, CSS, React.js, ChakraUi",
      imageUrl: foreverCareImage,
    },
    {
      title: "Glossier",
      description: "Glossier is a doctor consultation booking website. Experiencing the website we can book doctors in the different cities within the variety of different departments. In this way, the website can be easily navigated according to our needs. This project uses the React library, with the Javascript and CSS which includes external CSS like CharkaUI and MaterialUI. This website is fully responsive so we can have a hassle-free experience on any device.",
      techStacks: "Javascript, HTML, CSS, React.js, Redux",
      imageUrl: glossierImage,
    },
  ];

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", contactForm);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="resume-container">
      <nav className="navbar">
        <a href="#header">Home</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <a href="#references">References</a>
        <button onClick={handlePrint} className="pdf-button">
          Download PDF
        </button>
      </nav>

      <div className="resume-content" ref={componentRef}>
        {/* Header Section */}
        <header id="header">
          <h1>Anshul Dhakate</h1>
          <h2>Full Stack Web Developer</h2>
          <p>Email: anshuldhakate11@gmail.com</p>
          <p>Phone: 9156632395</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/anshul-dhakate-10b005145/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/anshul-dhakate-10b005145
            </a>
          </p>
        </header>

        {/* Profile Picture */}
        <div className="profile-picture">
          <img src={profileImage} alt="Profile" />
        </div>

        {/* Experience Section */}
        <section id="experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Jr. Project Engineer</h3>
            <p>Galaxy Solar Energy Pvt. Ltd. Nagpur | 2018- 2020</p>
            <p>Worked on Solar Projects Management.</p>
            
            {/* Toggle button to show/hide responsibilities */}
            <button 
              className="toggle-button" 
              onClick={() => setShowExperienceDetails(prev => !prev)}
            >
              {showExperienceDetails ? "Hide Responsibilities" : "Show Responsibilities"}
            </button>

            {/* Responsibilities List - Conditional Rendering */}
            {showExperienceDetails && (
              <ul>
                <li>Designed project electrical layouts in AutoCAD.</li>
                <li>Controlled project expenses and optimized budgets.</li>
                <li>Calculated precise bill of materials (BOM).</li>
                <li>Supervised installation teams and on-site work.</li>
                <li>Managed stock procurement for smooth operations.</li>
              </ul>
            )}
          </div>
        </section>

            
        {/* Education Section */}
        <section id="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Full Stack Web Development</h3>
            <p>Masai School | Graduated: 2024</p>
          </div>
          <div className="education-item">
            <h3>BE Electrical Engineering</h3>
            <p>Nagpur | Graduated: 2017</p>
          </div>
        </section>

        {/* Skills Section with Ratings */}
        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            {skillsWithRating.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setSelectedSkill(item.skill)}
                onMouseLeave={() => setSelectedSkill(null)}
                onClick={() => setSelectedSkill(item.skill)}
              >
                {item.skill}{" "}
                {selectedSkill === item.skill && (
                  <span className="skill-rating"> - Rating: {item.rating}/5</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Hobbies Section with Toggle Button */}
        <section id="hobbies">
          <h2>
            Hobbies & Interests
            <button className="toggle-button" onClick={() => setShowHobbies(prev => !prev)}>
              {showHobbies ? " ^" : " v"}
            </button>
          </h2>
          {showHobbies && (
            <ul className="hobbies-list">
              <li>Cooking</li>
              <li>Traveling</li>
              <li>Playing Badminton</li>
            </ul>
          )}
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="portfolio-item">
                <img src={project.imageUrl} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Tech Stacks:</strong> {project.techStacks}</p>
              </div>
            ))}
          </div>
        </section>

        {/* References Section */}
        {showReferences && (
          <section id="references">
            <h2>References</h2>
            <p>John Doe, Senior Developer at ABC Corp</p>
            <p>Jane Smith, Manager at XYZ Inc</p>
          </section>
        )}

        {/* Static Contact Information */}
        <section id="contact">
          <h2>Contact Information</h2>
          {/*Contact Form */} <form className="contact-form" onSubmit={handleContactFormSubmit}> 
            <div className="form-group"> 
              <label htmlFor="name">Name</label> 
              <input type="text" id="name" name="name" value={contactForm.name} 
              onChange={handleContactFormChange} required /> 
              </div> 
              <div className="form-group"> 
                <label htmlFor="email">Email</label> 
                <input type="email" id="email" name="email" 
                value={contactForm.email} onChange={handleContactFormChange} required />
                 </div>
                  <div className="form-group"> 
                    <label htmlFor="message">Message</label> <textarea id="message" name="message" value={contactForm.message} onChange={handleContactFormChange} required /> </div> <button type="submit" className="submit-button">Send Message</button> </form> </section> </div> </div> ); };
export default Header;