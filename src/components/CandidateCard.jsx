function CandidateCard(props) {
  const img_URL = "https://via.placeholder.com/18x18"

  const candidateCSS = {
    left: 15,
    top: 21,
    position: "absolute",
    color: "black",
    fontSize: 16,
    fontWeight: "700",
    wordWrap: "break-word",
  };

  const imageCSS = {
    width: 18,
    height: 18,
    left: 0,
    top: 0,
    position: "absolute",
  };

  const rectangleCSS = {
    width: 334,
    height: 138,
    left: 0,
    top: 0,
    position: "absolute",
    background: "white",
    boxShadow: "4px 4px 14px 3px rgba(0, 0, 0, 0.25)",
    borderRadius: 4,
  };

  const applied = {
    width: 124,
    height: 18,
    left: 15,
    top: 50,
    position: "absolute",
  };

  const time = {
    left: 23,
    top: 1,
    position: "absolute",
    color: "black",
    fontSize: 14,
    fontWeight: "400",
    wordWrap: "break-word",
  };

  const location = {
    width: 100,
    height: 18,
    left: 15,
    top: 73,
    position: "absolute",
  };

  const hsr = {
    left: 23,
    top: 1,
    position: "absolute",
    color: "black",
    fontSize: 14,
    fontWeight: "400",
    wordWrap: "break-word",
  };

  const gender = {
    width: 55,
    height: 18,
    left: 15,
    top: 96,
    position: "absolute",
  };

  return (
    
    <div
      className="CandidateCard"
      style={{ width: 334, height: 138, position: "relative" }}
    >
      <div
        style={rectangleCSS}
      />
      <div
        style={applied}
      >
        <div
          style={time}
        >
          {props.time}
        </div>
        <img
          style={imageCSS}
          src={img_URL}
          alt="placeholder"
        />
      </div>
      <div
        style={location}
      >
        <div
          className="HsrLayout"
          style={hsr}
        >
          {props.location}
        </div>
        <img
          style={imageCSS}
          src={img_URL}
          alt="placeholder"
        />
      </div>
      <div
        className="Gender"
        style={gender}
      >
        <div
          className="Male"
          style={{
            left: 23,
            top: 1,
            position: "absolute",
            color: "black",
            fontSize: 14,
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          {props.gender}
        </div>
        <img
          style={imageCSS}
          src={img_URL}
          alt="placeholder"
        />
      </div>
      <div
        style={candidateCSS}
      >
        {props.name}
      </div>
    </div>
  );
}

export default CandidateCard;
