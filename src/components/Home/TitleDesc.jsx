import { Link } from "react-router-dom";

const TitleDesc = () => {
  const divSty = {
    alignContent: "center",
    fontFamily: "Anonymous Pro",
  };

  return (
    <div style={divSty}>
      <h1 style={{ fontSize: "50px" }}>
        {" "}
        <b>Justin Garzione </b>{" "}
      </h1>
      <h2 style={{ fontSize: "35px" }}>
        <b>
          {" "}
          Hi, I'm Justin.
          <br /> I'm a Software Engineer. <br />
          Check out
        </b>
        <i>
          {" "}
          <Link to="./likes" style={{ color: "#5271ff" }}>
            <b> some things that I like. </b>{" "}
          </Link>
        </i>
      </h2>
    </div>
  );
};

export default TitleDesc;
