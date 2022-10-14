import { data } from "./data";
import { useState } from "react";
import bg from "../../images/technology/background-technology-mobile.jpg";
import NavBar from "../navbar/MainNavBar";
const TabTech = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const render = data[currentPage];
  const myStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  const handleGoTo = (dataIndex) => {
    setCurrentPage(dataIndex);
  };
  return (
    <div style={myStyle}>
      <NavBar />
      <p className="p-style" style={{ margin: "2rem 2rem 0.5rem" }}>
        {" "}
        <strong className="strong">03</strong>SPACE LAUNCH 101
      </p>
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={render.img}
          style={{ height: "19rem", marginTop: "3.5rem", width: "110%" }}
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

        <h4
          style={{
            textTransform: "uppercase",
            marginTop: "-.5rem",
            fontSize: "16px",
          }}
        >
          THE TERMINOLOGY...
        </h4>
        <h3
          style={{
            margin: ".5rem 0 1rem",
            textTransform: "uppercase",
            fontSize: "40px",
            lineHeight: "46px",
          }}
        >
          {render.terminology}
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "28px", width: "50%" }}>
          {render.text}
        </p>
      </div>
    </div>
  );
};
export default TabTech;
