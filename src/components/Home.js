import backgroundM from "../images/home/background-home-mobile.jpg";
import NavBar from "./NavBar";
const Home = () => {
  const styleM = {
    backgroundImage: `url(${backgroundM})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div style={styleM}>
      <NavBar />
      <div
        style={{
          color: "#FFFFFF",
          textAlign: "center",
          paddingBottom: "6rem",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          height: "90vh",
        }}
      >
        <p className="p-style">SO, YOU WANT TO TRAVEL TO</p>
        <h1
          style={{
            fontSize: "5rem",
            margin: " 2rem 0 1rem",
          }}
        >
          SPACE
        </h1>
        <p
          style={{
            color: "#D0D6F9",
            fontSize: "13px",
            lineHeight: "25px",
            fontWeight: 400,
            letterSpacing: "2.7px",
            margin: " 1rem .5rem 4rem",
          }}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            color: "#0B0D17",
            width: "7rem",
            height: "7rem",
            padding: ".5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Bellefair', serif",
              fontWeight: 400,
              fontSize: "1.25rem",
              color: "#0B0D17",
              letterSpacing: "1.25px",
              lineHeight: "23px",
            }}
          >
            EXPLORE
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
