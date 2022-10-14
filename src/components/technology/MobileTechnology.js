import { data } from "./data";
import { useState } from "react";
import backgroundM from "../../images/technology/background-technology-mobile.jpg";
import NavBar from "../navbar/MainNavBar";

const TechnologyMobile = () => {
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
export default TechnologyMobile;
