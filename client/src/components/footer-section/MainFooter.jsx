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
          <div className="footerInfo" style={{ background: "var(--nonary", height: "100px", width: "100%", padding: "0", marginBottom: "0" }}>
            <h6>2024 | Created by Mike Muncy</h6>
            <ul className="socials">
              <li>
                <img src={emailIcon} alt="" />
              </li>
              <li>
                <img src={gitHubIcon} alt="" />
              </li>
              <li>
                <img src={linkedInIcon} alt="" />
              </li>
              <li>
                <img src={credlyIcon} alt="" />
              </li>
            </ul>
          </div>
        </footer>
    </>
  );
}


export default MainFooter;