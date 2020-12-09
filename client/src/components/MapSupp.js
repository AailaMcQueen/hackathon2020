import MapChart from "./MapChart"
import React from "react"
import ReactTooltip from "react-tooltip";

function MapSupp({currentState}) {
  const [content, setContent] = React.useState({
    district_name: "",
    lat: "",
    lon: "",
    noOfLabs: "",
    casesAllocated: "",
    totalCases: ""
  });
  return (
    <div>
      <MapChart setTooltipContent={setContent} currentState={currentState} />
      {content.district_name.length > 0 && (
        <ReactTooltip>
            <div className="card bg-transparent border-info mb-3 justify-content-center" style={{margin: "0", padding: "0"}}>
                <div className="card-body text-info">
                    <h5 className="card-title">{content.district_name}</h5>
                    <p className="card-text"><strong>No. of Labs:</strong> {content.noOfLabs}</p>
                    <p className="card-text"><strong>Samples allocated from District HQ:</strong> {content.totalCases}</p>
                    <p className="card-text"><strong>Samples allocated to District HQ:</strong> {content.casesAllocated}</p>
                </div>
                <div className="card-footer bg-info">Cords: {content.lon}, {content.lat}</div>
            </div>
        </ReactTooltip>
      )}
    </div>
  );
}

export default MapSupp;
