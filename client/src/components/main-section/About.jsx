import htmlLogo from '../assets/html-icon.png'
import cssLogo from '../assets/css-icon.png'
import jsLogo from '../assets/js-icon.png'
import mongoLogo from '../assets/mongodb-icon.png'
import expressLogo from '../assets/express-icon.png'
import reactLogo from '../assets/react-icon.png'
import nodeLogo from '../assets/node-icon.png'

function About(props) {
  return (
    <>
      <div className="container">

        {/* ABOUT ------------------------------------------------ */}

        <div className="item">
          <h1>About Me</h1>
          <h2>Information Security | Software Developer | Geoscientist</h2>
          <p>I'm a geoscientist living in Colorado with interests in technology, learning new skills, and the great outdoors. I've been in the energy industry for over 15 years and have a diverse range of experiences in exploration, development, and operations. In 2023, I completed a twelve week software development bootcamp to improve skillsets and learn programming. To continue learning and prove my technology capabilities, I obtained a certification in Security+ from CompTIA. My ultimate goal is to use these new skills in making a career pivot into technology.</p>
          <p>My favorite hobbies include pinball, hiking, skiing, camping, board games, sailing my single-person trimaran, and painting. Future plans include a blog section of this website to write about some of these hobbies.</p>
        </div>

        {/* SKILLSETS------------------------------------- */}

        <div className="item">

          <h2>DEVELOPER TECHNOLOGIES:</h2>

          <section className="tech-container">
            <div className="tech-item">
              <img src={htmlLogo} alt="HTML logo" />
              <h3>HTML</h3>
            </div>
          </section>

          <section className="tech-container">
            <div className="tech-item">
              <img src={cssLogo} alt="CSS logo" />
              <h3>CSS</h3>
            </div>
          </section>

          <section className="tech-container">
            <div className="tech-item">
              <img src={jsLogo} alt="JavaScript logo" />
              <h3>JavaScript</h3>
            </div>
          </section>

          <section className="tech-container">
            <div className="tech-item">
              <img src={mongoLogo} alt="MongoDB logo" />
              <h3>MongoDB</h3>
            </div>
          </section>

          <section className="tech-container">
            <div className="tech-item">
              <img src={expressLogo} alt="express logo" />
              <h3>Express</h3>
            </div>
          </section>

          <section className="tech-container">
            <div className="tech-item">
              <img src={reactLogo} alt="React logo" />
              <h3>React</h3>
            </div>
          </section>

          <section className="tech-container">
            <div className="tech-item">
              <img src={nodeLogo} alt="node logo" />
              <h3>Node</h3>
            </div>
          </section>

          <h2>Skills & Technologies</h2>

          <section className="skill-item">

            <div className="skill">
              <h3>React</h3>
              {/* <img src={reactLogo} alt="" /> */}

              <div className="skill-description">
                <li>This website is built using React library.</li>
                <li>RentCraft</li>
                <li>JiM Chat</li>
              </div>

            </div>
          </section>

          <section className="skill-item">

            <div className="skill">
              <h3>MongoDB</h3>

              <div className="skill-description">
                <p>Online cluster used for RentCraft</p>
              </div>
            
            </div>
          </section>

          <section className="skill-item">

            <div className="skill">
              <h3>Postman</h3>

              <div className="skill-description">
                <p>Postman experience....</p>
              </div>
            
            </div>
          </section>

          <section className="skill-item">

            <div className="skill">
              <h3>Node.js</h3>

              <div className="skill-description">
                <p>Node.js experience...</p>
              </div>
            
            </div>
          </section>

          <section className="skill-item">

            <div className="skill">
              <h3>HTML, CSS, and JavaScript</h3>

              <div className="skill-description">
                <p>JavaScript experience...</p>
              </div>
            
            </div>
          </section>

        </div>

        {/* EXPERIENCE----------------------------------- */}

        <div className="item">
          <h2>Complete Professional Experience</h2>
          <h5>You can also see my professional experience on LinkedIn</h5>
          <section className="work-item">
            <div className="work-details">
              <h3>Tutor</h3>
              <p>Grade Potential Tutoring</p>
              <p>August 2023 - Present</p>
            </div>
            <div className="work-summary">
              <p>Teaching and mentoring elementary through university students. Subjects taught include earth science, chemistry, biology, math, english, writting, and reading.</p>
              <p>Key Contributions:</p>
              <ul>
                <li>Manage and create appointments with students and legal guardians</li>
                <li>Access students strength and weaknesses to design instruction program</li>
                <li>Assist with homework, studying for exams,and reviewing key fundamentals in subject field</li>
                <li>Students improved overall grade score and maintained clients bewteen grades</li>
              </ul>
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
                <li>Provided consultation for two companies in the Yeso Group of New Mexico that led to acquisitions and development in the Paddock and Blinebry Formations</li>
                <li>Constructed migmatiteminerals.com and filmed live sale shows to sell minerals at an average rate-of-return of approimately %110</li>
                <li>Successfully divested mineral company and sold complete inventory</li>
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
              <p>Project lead for team of seven geoscientists to build three-dimensional geologic model of the Delaware Basin.</p>
              <p>Key contributions:</p>
              <ul>
                <li>Created three-dimensional model between two states with geophysical and petrophysical integration.</li>
                <li>Evaluated acreage, new ventures exportation, non-operated proposals, and high grade areas for lease sales using model.</li>
                <li>Mentored four geologists in the career development program.</li>
                <li>Testified as an expert witness for Apache's protest as the New Mexico Oil Conservation Division.</li>
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
              <p>Lead geologist for Apache's acreage in the New Mexico Delaware Basin. Evaluated the Brushy Canyon, Avalon, Bone Spring, and Wolfcamp Formations.</p>
              <p>Key contributions:</p>
              <ul>
                <li>Generated 35 horizontal prospects in the Delaware Basin by integrating subsurface evaluation, seismic, and engineering analysis</li>
                <li>Developed four acreage positions that have produced approximately 9 MMBO to date</li>
                <li>Evaluated offset Bone Spring well data to classify optimal target zones which lead to approximately 78 MBO, a 62%, increase per well production increase when compared with adjacent wells.</li>
                <li>Provided geologic recommendation on more than thirty acreage trades and non-operated proposals.</li>
                <li>Testified several times as an expert witness at the New Mexico Oil Conservation Division.</li>
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
              <p>Created new stratigraphic framework for the Yeso Group across Apache acreage on the Northwest Shelf. Built three-dimensional geomodel in Petrel and integrated data with geophysical and petrophysical analysis.</p>
              <p>Key contributions:</p>
              <ul>
                <li>Created new statigraphic framework that increased production approximately 73%, or 67 MBO, per well and allowed faster drill times that helped generate an average rate-of-return greater than %110</li>
                <li>Generated eight prospects in the Yeso Group that lead to drilling of over 50 vertical, directional, and horizontal wells that have produced over 9 MMBO to date</li>
                <li>Presented technical work to company executives, management, and technical teams</li>
                <li>Mentored two junior geologists and supervised summer intern exploration project for a Wolfcamp/Abo prospect</li>
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
              <p>New Ventures Geologist that oversaw operations and development of the Jayhawk Prospect in Daniels County, Montana targeting the Bakken and Three Forks Formation.</p>
              <p>Key contributions:</p>
              <ul>
                <li>Planned and geosteered horizontal exploration wells and pilot hole in the Bakken and Three Forks Formation</li>
                <li>Collaborated with engineering team to develop divestiture package and presented results to numerous investors</li>
                <li>Evaluated shallow brine water formations in Schleicher County, Texas for use in Permian Region horizontal well completions</li>
                <li>Performed shallow sink-hole hazard analysis over Cedar Lake Field in New Mexico that resulted in preserving more than 50 well locations</li>
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
              <p>Wellsite and geosteering geologist in the Arkoma Basin for Southwestern's Fayetteville Shale Development</p>
              <p>Key contributions:</p>
              <ul>
                <li>Planned, geosteered, and created end-of-well reports for over 150 horizontal wells in the Fayetteville Shale</li>
                <li>Integrated with geophysics, petrophysicists, and engineering teams to evaluate spacing, completions design, and up-dip versus down-dip performance</li>
                <li>Generated geologic prognosis, horizontal well paths, active geosteering reports during drilling, and quality checked colleagues' reports</li>
              </ul>
            </div>
          </section>
        </div>

        {/* EDUCATION------------------------------------------- */}

        <div className="item">

          <h2>Education & Certifications</h2>

          <section className="education-item">
            <h3>CompTIA Security+ CE Certification</h3>
            <p>Candidate ID: COMP001022545975</p>
            <p>Certification Date: July 08, 2024</p>
          </section>

          <section className="education-item">
            <h3>Front Range Community College</h3>
            <p>Software Development Certificate, 2023</p>
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
            <p>Geosciences Major with a Minor in Geophysics</p>
          </section>

        </div>

      </div>
    </>
  );
}


export default About;