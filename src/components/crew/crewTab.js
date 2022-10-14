import bg from "../../images/crew/background-crew-tablet.jpg";
import NavBar from "../navbar/MainNavBar";
import { useState } from "react";
import { data } from "./data";

const CrewTab = () => {
  const [currentPage, setCurrentPage] = useState(0);
  let render = data[currentPage];

  const myStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    // minHeight: "100vh",
  };

  const handleGoTo = (dataIndex) => {
    setCurrentPage(dataIndex);
  };

  return (
    <div>
      {" "}
      <div style={myStyle}>
        <NavBar />
        <p className="p-style">
          {" "}
          <strong className="strong">01</strong>MEET YOUR CREW
        </p>
        <div
          style={{
            padding: "0 2rem",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4 style={{ textTransform: "uppercase" }}>{render.title}</h4>
          <h3 style={{ margin: ".5rem 0 1rem", textTransform: "uppercase" }}>
            {render.name}
          </h3>
          <p style={{ width: "68%" }}>{render.text}</p>
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
          <img
            src={render.img}
            style={{
              height: "35rem",
              width: "28rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CrewTab;
