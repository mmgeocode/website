import emailIcon from '../assets/email-icon.png'

function MainFooter(props) {
  return (
    <>
        {/* <div style={{ background: "var(--nonary)", height: "5px"}}></div> */}
        <footer>
          <div style={{ background: "var(--senary)", height: "5px"}}></div>
          <div style={{ background: "var(--septenary)", height: "5px"}}></div>
          <div style={{ background: "var(--octonary)", height: "5px"}}></div>
          <h6 style={{ background: "var(--nonary)", height: "30px", padding: "0", marginBottom: "0"}}>2023 | Created by Mike Muncy</h6>

          {/* <img src={emailIcon} alt="" /> */}

        </footer>
    </>
  );
}


export default MainFooter;