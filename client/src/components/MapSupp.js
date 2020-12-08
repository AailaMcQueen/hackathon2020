import MapChart from "./MapChart"
import React from "react"
import ReactTooltip from "react-tooltip";

function MapSupp() {
  const [content, setContent] = React.useState({
      district_name: "",
      lat: "",
      lon: "",
      samples: ""
  });
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      {content.district_name.length > 0 && (
        <ReactTooltip>
            <div className="card bg-transparent border-info mb-3 justify-content-center" style={{margin: "0", padding: "0"}}>
                <div className="card-body text-info">
                    <h5 className="card-title">{content.district_name}</h5>
                    <p className="card-text"><strong>Samples:</strong> {content.samples}</p>
                </div>
                <div className="card-footer bg-info">Cords: {content.lon}, {content.lat}</div>
            </div>
        </ReactTooltip>
      )}
    </div>
  );
}

export default MapSupp;
