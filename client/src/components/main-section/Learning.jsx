function Learning(props) {
  return (
    <>
    <div className="container">
      {/* <h1>Mike's Learning Resources</h1> */}
      <div className="title">Mike's Learning Resources</div>

      <div className="item">
        <h3>Coding Games</h3>
        <label>CSS Diner</label>
        <iframe className="embedgames" title="css-diner" src="https://flukeout.github.io/" />
        <label>Learn Git Branching</label>
        <iframe className="embedgames" title="git-branching" src="https://learngitbranching.js.org/?locale=en_US" />
      </div>

      <div className="item">Reference Links</div>
      <div className="item">Reference Videos</div>
    </div>
    </>
  );
}


export default Learning;