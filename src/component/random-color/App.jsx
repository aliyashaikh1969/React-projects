import { useState } from "react";

function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("");
  const [disable, setDisable] = useState(true);
  const [color, setColor] = useState("black");
  const colorType = (type) => {
    setTypeOfColor(type);
  };

  const generateColor = () => {
    if (typeOfColor == "hex") {
      const randomColor = `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")}`;
      setColor(randomColor);
    } else {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let rgb = `rgb(${r},${g},${b})`;
      setColor(rgb);
    }
  };

  const hexGenarator = () => {
    let random = Math.floor(Math.random() * 0xfffff).toString(16);
    console.log(random);
  };
  return (
    <>
      <div
        className="container"
        style={{
          width: "100vw",
          backgroundColor: color ? color : "white",
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div>
          {/* <input
            type="color"
            style={{
              width: "100%",
              height: "60px",
              border: "2px solid black",
              outline: "none",
            }}
            value={color ? color : ""}
            onChange={(e) => setColor(e.target.value)}
          /> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px  0",
            }}
          >
            <button
              onClick={() => colorType("hex")}
              style={{
                background: typeOfColor == "hex" ? "#fff" : "",
                color: typeOfColor == "hex" ? "black" : "",
                flex: "1",
              }}
            >
              hex
            </button>
            <button
              onClick={() => colorType("rgb")}
              style={{
                background: typeOfColor == "rgb" ? "#fff" : "",
                color: typeOfColor == "rgb" ? "black" : "",
                flex: "1",
              }}
            >
              rgb
            </button>
          </div>
          <button
            onClick={() => generateColor()}
            disabled={typeOfColor ? false : true}
          >
            generate random color
          </button>
        </div>
      </div>
    </>
  );
}

export default RandomColorGenerator;
