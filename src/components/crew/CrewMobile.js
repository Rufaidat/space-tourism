import backgroundM from "../../images/crew/background-crew-mobile.jpg";
import NavBar from "../navbar/NavBarMobile.js";
import { useState } from "react";
import { data } from "./data";

const CrewMobile = () => {
  const [currentPage, setCurrentPage] = useState(0);
  let render = data[currentPage];

  const myStyle = {
    backgroundImage: `url(${backgroundM})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  const handleGoTo = (dataIndex) => {
    setCurrentPage(dataIndex);
  };

  return (
    <div>
      {" "}
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
          <p className="p-style" style={{ margin: "1rem 0 0.5rem" }}>
            {" "}
            <strong className="strong">01</strong>MEET YOUR CREW
          </p>
          <img
            src={render.img}
            style={{ height: "16rem", marginTop: "2rem" }}
          />
          <span style={{ margin: "0 1rem 1rem" }}></span>
          <div className="circle-box">
            {data.map((data, dataIndex) => (
              <div
                key={dataIndex}
                className={dataIndex === currentPage ? "active-box" : "box"}
                onClick={() => handleGoTo(dataIndex)}
              >
                ●
              </div>
            ))}
          </div>
          <h4 style={{ textTransform: "uppercase" }}>{render.title}</h4>
          <h3 style={{ margin: ".5rem 0 1rem", textTransform: "uppercase" }}>
            {render.name}
          </h3>
          <p style={{ width: "83%" }}>{render.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CrewMobile;
