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
            <h1>{content.district_name}</h1>
            <p>{content.lon}, {content.lat}</p>
            <p>Samples: {content.samples}</p>
        </ReactTooltip>
      )}
    </div>
  );
}

export default MapSupp;
