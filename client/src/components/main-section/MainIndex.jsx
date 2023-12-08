function MainIndex(props) {
  return (
    <>
    <body>

        <div className="introduction">
            <h1>Welcome!</h1>
            <p>My name is Mike and I created this website to document my learnings, showcase projects, and provide more details as I journey into life as a programmer.</p>
            <p>Greetings to all of the Mike Muncys out there! Please email me and I will add you to guestbook. Maybe we can track down lineages and histories.</p>
        </div>

        <div className="about-main">
            <p>Select ABOUT in the navigation bar to see contact information, my LinkedIn profile, my GitHub account, my professional experience, or some more information about me.</p>
        </div>

        <div className="learning-main">
            <p>Choose LEARNING to visit coding games, useful web docs, or other fascinating things I've seen during my lifetime.</p>
        </div>

        <div className="projects-main">
            <p>Visit PROJECTS to see some of my completed professional, school, or side projects.</p>
        </div>
    </body>
    </>
  );
}


export default MainIndex;