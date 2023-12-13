function MainHeader(props) {
  return (
    <>
        <header>
            <div style={{ background: "var(--quaternary)", height: "5px"}}></div>
            <div style={{ background: "var(--tertiary)", height: "5px"}}></div>
            <div style={{ background: "var(--secondary)", height: "5px"}}></div>
            <div style={{ background: "var(--primary)", height: "5px"}}></div>
            {/* <div style={{ background: "var(--quinary)", height: "5px"}}></div> */}
        </header>
    </>
  );
}


export default MainHeader;