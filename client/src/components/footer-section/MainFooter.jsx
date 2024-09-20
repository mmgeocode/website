import emailIcon from '../assets/email-icon.png'
import gitHubIcon from '../assets/github-icon.png'
import linkedInIcon from '../assets/linkedin-logo.png'
import credlyIcon from '../assets/credly-icon.png'

function MainFooter(props) {
  return (
    <>
        <footer>
          <div style={{ background: "var(--senary)", height: "5px", width: "100%" }}></div>
          <div style={{ background: "var(--septenary)", height: "5px", width: "100%" }}></div>
          <div style={{ background: "var(--octonary)", height: "5px", width: "100%" }}></div>
          <div className="footerInfo" style={{ background: "var(--nonary", height: "40px", width: "100%", padding: "0", marginBottom: "0" }}>
                <h6>© 2024 by Mike Muncy</h6>
            <ul className="socials">
              <li>
                <a href="mailto:mike.muncy85@gmail.com">
                  <img src={emailIcon} alt="Email Mike" />
                </a>
              </li>
              <li>
                <a href="https://github.com/mmgeocode">
                  <img src={gitHubIcon} alt="Mike's GitHub Profile" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mmuncy/">
                  <img src={linkedInIcon} alt="Mike's LinkedIn Profile" />
                </a>
              </li>
              <li>
                <a href="https://www.credly.com/users/mike-muncy">
                  <img src={credlyIcon} alt="Mike's Credly Public Profile" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
    </>
  );
}


export default MainFooter;