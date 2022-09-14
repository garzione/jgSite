import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faSignature,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

const SVGchart = ({ dims }) => {
  const [circles, setCircles] = useState(null);
  const [center, setCenter] = useState(null);
  const svgz = [faScrewdriverWrench, faSignature, faPhone];
  const rout = ["projects", "writing", "contact"];

  useEffect(() => {
    const center = (dims.width * 0.75) / 2;
    setCenter(center);
    const dis = 150;
    let out = [];

    const dynamicCircleStyle = (i, r) => {
      let pos = 0;
      if (i === 1) {
        pos = center;
      } else if (i > 1) {
        pos = center + dis;
      } else {
        pos = center - dis;
      }

      return {
        x: pos,
        y: r + Math.floor(Math.random() * 100 + 25),
        r: r,
      };
    };
    [0, 1, 2].forEach((i) => {
      out.push(dynamicCircleStyle(i, 60));
    });
    setCircles(out);
  }, [dims.width]);

  const svgStyle = {
    height: "300px",
    width: "100%",
  };

  const st2 = {
    color: "#ff0063",
    width: "10px",
    height: "10px",
    borderRadius: "100%",
  };

  return (
    <>
      <head>
        <script
          src="https://kit.fontawesome.com/1569d8a45a.js"
          crossOrigin="anonymous"
        >
          {" "}
        </script>
      </head>
      <svg style={svgStyle}>
        {circles &&
          circles.map((_, i) => {
            const circ = (
              <>
                {i < 2 && (
                  <line
                    x1={circles[i].x}
                    y1={circles[i].y}
                    key={i}
                    x2={circles[i + 1].x}
                    y2={circles[i + 1].y}
                    stroke="black"
                    strokeWidth="3%"
                  ></line>
                )}
                {center && (
                  <Link to={`/${rout[i]}`}>
                    <circle
                      r={circles[i].r}
                      cx={circles[i].x}
                      cy={circles[i].y}
                    />

                    <FontAwesomeIcon
                      height="50px"
                      x={circles[i].x - center}
                      y={circles[i].y - 25}
                      style={st2}
                      key={i}
                      icon={svgz[i]}
                      title={rout[i]}
                    />
                  </Link>
                )}
              </>
            );

            return circ;
          })}
      </svg>
    </>
  );
};

export default SVGchart;
