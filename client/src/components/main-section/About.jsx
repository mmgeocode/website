function About(props) {
  return (
    <>
      <div className="container">

        {/* ABOUT ------------------------------------------------ */}

        <div className="item">
          <h1>About Me</h1>
          <p>I'm a geoscientist living in Colorado with a passion for technology, learning, and the great outdoors. I've been in the energy industry for over 14 years and have a diverse range of experiences in exploration, development, and operations. Recently, I completed a twelve week software development bootcamp and am looking to combine my new skillsets into a career in technology.</p>
          <p>My favorite hobbies include pinball, hiking, skiing, camping, board games, and painting. I also enjoy attending sporting events and traveling to new areas.</p>
        </div>

        {/* SKILLSETS---------------------------------------------- */}

        <div className="item">

          <h2>Skills & Projects</h2>

          <section className="skill-item">

            <div className="skill">
              <h3>React</h3>
            </div>

            <div className="skill-description">
              <p>React experience....</p>
            </div>

          </section>

          <section className="skill-item">

            <div className="skill">
              <h3>MongoDB</h3>
            </div>

            <div className="skill-description">
              <p>MongoDB experience...</p>
            </div>
            
          </section>

          <section className="skill-item">

            <div className="skill">
              <h3>Postman</h3>
            </div>

            <div className="skill-description">
              <p>Postman experience....</p>
            </div>
            
          </section>

          <section className="skill-item">

            <div className="skill">
              <h3>Node.js</h3>
            </div>

            <div className="skill-description">
              <p>Node.js experience...</p>
            </div>
            
          </section>

          <section className="skill-item">

            <div className="skill">
              <h3>HTML, CSS, and JavaScript</h3>
            </div>

            <div className="skill-description">
              <p>JavaScript experience...</p>
            </div>
            
          </section>

        </div>

        {/* EXPERIENCE ----------------------------------------- */}

        <div className="item">
          <h2>Professional Experience</h2>
          <h5>You can also see my professional experience on LinkedIn</h5>
          <section className="work-item">
            <div className="work-details">
              <h3>Tutor</h3>
              <p>Grade Potential Tutoring</p>
              <p>August 2023 - Present</p>
            </div>
            <div className="work-summary">
              <p>Teaching and mentoring elementary, secondary, and university students. Subjects taught include earth science, chemistry, biology, math, english, writting, and reading.</p>
            </div>
          </section>
          <section className="work-item">
            <div className="work-details">
              <h3>Owner</h3>
              <p>Migmatite Consulting, LLC</p>
              <p>October 2019 - April 2023</p>
            </div>
            <div className="work-summary">
              <p>Managed and divested a Geologic consulting company that provided services for the energy industry, pinball operating, and online mineral sales.</p>
              <p>Key contributions:</p>
              <ul>
                <li>Testing</li>
              </ul>
            </div>
          </section>
          <section className="work-item">
            <div className="work-details">
              <h3>Senior Geologist</h3>
              <p>Apache Corporation</p>
              <p>June 2019 - September 2019</p>
            </div>
            <div className="work-summary">
              <p>SUMMARY.</p>
              <p>Key contributions:</p>
              <ul>
                <li>Testing</li>
              </ul>
            </div>
          </section>
          <section className="work-item">
            <div className="work-details">
              <h3>Geologist III</h3>
              <p>Apache Corporation</p>
              <p>June 2016 - May 2019</p>
            </div>
            <div className="work-summary">
              <p>SUMMARY.</p>
              <p>Key contributions:</p>
              <ul>
                <li>Testing</li>
              </ul>
            </div>
          </section>
          <section className="work-item">
            <div className="work-details">
              <h3>Geologist II</h3>
              <p>Apache Corporation</p>
              <p>June 2014 - May 2016</p>
            </div>
            <div className="work-summary">
              <p>SUMMARY.</p>
              <p>Key contributions:</p>
              <ul>
                <li>Testing</li>
              </ul>
            </div>
          </section>
          <section className="work-item">
            <div className="work-details">
              <h3>Geologist I</h3>
              <p>Apache Corporation</p>
              <p>June 2012 - May 2014</p>
            </div>
            <div className="work-summary">
              <p>SUMMARY.</p>
              <p>Key contributions:</p>
              <ul>
                <li>Testing</li>
              </ul>
            </div>
          </section>
          <section className="work-item">
            <div className="work-details">
              <h3>Operations Geologist</h3>
              <p>Southwestern Energy</p>
              <p>August 2010 - June 2012</p>
            </div>
            <div className="work-summary">
              <p>SUMMARY.</p>
              <p>Key contributions:</p>
              <ul>
                <li>Testing</li>
              </ul>
            </div>
          </section>
        </div>

        {/* EDUCATION------------------------------------------- */}

        <div className="item">

          <h2>Education</h2>

          <section className="education-item">
            <h3>Front Range Community College</h3>
            <p>Software Development Bootcamp, 2023</p>
            <p>12 week full-time program covering HTML, CSS, JavaScript, MongoDB, Postman, and React.</p>
          </section>

          <section className="education-item">
            <h3>Texas Tech University</h3>
            <p>Masters of Science, 2008 - 2010</p>
            <p>Geology Thesis: Syndepositional features and evolution of an Ancenstral Rocky Mountain Basin, Sacramento Mountains, New Mexico</p>
          </section>

          <section className="education-item">
            <h3>Texas Tech University</h3>
            <p>Bachelors of Science, 2003 - 2007</p>
            <p>Geosciences with a minor in Geophysics</p>
          </section>

        </div>

        {/* PINBALL ---------------------------------------------- */}

        <div className="item">

          <h2>Current Pinball Lineup:</h2>

          <section className="pinball">

            <div className="pinball-details">
              Sure Shot
            </div>

            <div className="pinball-details">
              Sound Stage
            </div>

            <div className="pinball-details">
              Title Fight
            </div>

            <div className="pinball-details">
              Black Rose
            </div>

            <div className="pinball-details">
              Cactus Canyon
            </div>

          </section>
          
          Star Trek
          Iron Maiden
          The Munsters
          Jurassic Park
          Teenage Mutant Ninja Turtles
        </div>

      </div>
    </>
  );
}


export default About;