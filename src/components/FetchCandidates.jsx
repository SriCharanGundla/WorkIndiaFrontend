import Axios from "axios";
import { useState, useEffect } from "react";
import CandidateCard from "./CandidateCard";

function FetchCandidates() {
  const url = "https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d";

  const [data, setData] = useState([]);

  useEffect(() => {
    refreshData();
  }, []);

  function refreshData() {
    Axios.get(url)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }

  const columnCSS = {
    display: "flex",
    width: "334px",
    height: "707px",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    gap: "29px",
  };

  const titleCSS = {
    color: "#000",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    alignSelf: "start",
    margin: "0px",
  };

  return (
    <div
      style={{
        display: "inline-flex",
        padding: "65px 291px 210px 117px",
        alignItems: "flex-start",
        gap: "51px",
        background: "#FFF",
      }}
    >
      <div className="Applied" style={columnCSS}>
        <h2 style={titleCSS}>Applied</h2>
        {data.map((candidate, index) => {
          if (candidate.status === "Applied") {
            return (
              <CandidateCard
                key={candidate.id}
                name={candidate.name}
                time={candidate.last_updated_at}
                location={candidate.location}
                gender={candidate.gender}
              />
            );
          }
        })}
      </div>
      <div className="Accepted" style={columnCSS}>
      <h2 style={titleCSS}>Accepted</h2>
        {data.map((candidate, index) => {
          if (candidate.status === "Accepted") {
            return (
              <CandidateCard
                key={candidate.id}
                name={candidate.name}
                time={candidate.last_updated_at}
                location={candidate.location}
                gender={candidate.gender}
              />
            );
          }
        })}
      </div>
      <div className="Rejected" style={columnCSS}>
      <h2 style={titleCSS}>Rejected</h2>
        {data.map((candidate, index) => {
          if (candidate.status === "Rejected") {
            return (
              <CandidateCard
                key={candidate.id}
                name={candidate.name}
                time={candidate.last_updated_at}
                location={candidate.location}
                gender={candidate.gender}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FetchCandidates;
