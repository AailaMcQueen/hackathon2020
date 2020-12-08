import MapChart from "./MapChart"
import React from "react"
import ReactTooltip from "react-tooltip";

function MapSupp() {
  const [content, setContent] = React.useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default MapSupp;
