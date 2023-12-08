function About(props) {
  return (
    <>
        <div className="about-intro" style={{
          background: "white",
          borderRadius: "10px",
          width: "70vw"
        }}>
          <h1>About Mike</h1>
        </div>

        <div className="bio" style={{
          background: "white",
          borderRadius: "10px",
          width: "70vw"
        }}>
            I was born in Colorado and moved to Texas when I was four. I spent the next thirty years trying to return. Along the journey, I have lived in Midland, Houston, Fort Worth, Lubbock, Oklahoma City, and Conway. Our current home is byfar my favorite place to live. As a "native" Coloradan, I enjoy nature, skiing, hiking, craft beer, and pinball.
        </div>

        <div className="skills">Skills</div>

        <div className="experience">Experience</div>

        <div className="education">Education</div>

        <div className="pinball-collection">
          Our Current Pinball Lineup:
          Sure Shot
          Sound Stage
          Title Fight
          Black Rose
          Cactus Canyon
          Star Trek
          Iron Maiden
          The Munsters
          Jurassic Park
          Teenage Mutant Ninja Turtles
        </div>
    </>
  );
}


export default About;