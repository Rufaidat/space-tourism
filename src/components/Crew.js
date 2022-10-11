import backgroundM from "../images/crew/background-crew-mobile.jpg";
import NavBar from "./NavBar";
import douglas from "../images/crew/image-douglas-hurley.png";

const Crew = () => {
  const myStyle = {
    backgroundImage: `url(${backgroundM})`,
    backgroundSize: "cover",
  };
  return (
    <div style={myStyle}>
      <NavBar />
      <div
        style={{
          padding: "0 2rem",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "3rem",
        }}
      >
        <p className="p-style" style={{ margin: 0 }}>
          {" "}
          <strong className="strong">01</strong>MEET YOUR CREW
        </p>
        <img src={douglas} style={{ height: "16rem", marginTop: "2rem" }} />
        <span style={{ margin: 0 }}></span>
        <div className="circle-box">
          <div className="box" style={{ opacity: 1 }}></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <h4>COMMANDER</h4>
        <h3 style={{ margin: ".5rem 0 1rem" }}>DOUGLAS HURLEY</h3>
        <p>
          {" "}
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
    </div>
  );
};

export default Crew;
