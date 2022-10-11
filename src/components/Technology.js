import NavBar from "./NavBar";
import backgroundM from "../images/technology/background-technology-mobile.jpg";
import capsule from "../images/technology/image-space-capsule-landscape.jpg";
import vehicle from "../images/technology/image-launch-vehicle-landscape.jpg";
import spaceport from "../images/technology/image-spaceport-portrait.jpg";
import { useState } from "react";
import { fontSize } from "@mui/system";

const data = [
  {
    img: `${vehicle}`,
    terminology: "Launch vehicle",
    text: " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    img: `${spaceport}`,
    terminology: "Spaceport",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    img: `${capsule}`,
    terminology: "Space capsule",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const Technology = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const render = data[currentPage];
  const myStyle = {
    backgroundImage: `url(${backgroundM})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  const handleGoTo = (dataIndex) => {
    setCurrentPage(dataIndex);
  };
  return (
    <div style={myStyle}>
      <NavBar />
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="p-style" style={{ margin: "1rem 0 0.5rem" }}>
          {" "}
          <strong className="strong">03</strong>SPACE LAUNCH 101
        </p>
        <img
          src={render.img}
          style={{ height: "11rem", marginTop: "2rem", width: "110%" }}
        />
      </div>
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
        <div className="circle-box">
          {data.map((data, dataIndex) => (
            <div
              key={dataIndex}
              className={
                dataIndex === currentPage ? "active-tech-box" : "tech-box"
              }
              onClick={() => handleGoTo(dataIndex)}
            >
              {dataIndex + 1}
            </div>
          ))}
        </div>

        <h4 style={{ textTransform: "uppercase", marginTop: "-.5rem" }}>
          THE TERMINOLOGY...
        </h4>
        <h3 style={{ margin: ".5rem 0 1rem", textTransform: "uppercase" }}>
          {render.terminology}
        </h3>
        <p style={{ fontSize: "16px", width: "88%" }}>{render.text}</p>
      </div>
    </div>
  );
};
export default Technology;
