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
  let max1=0, max2=0;
  let districtsData = []

  const setData = (data) => {
    const answer=data.formData, districts=data.filesCSV[0], labs=data.filesCSV[1];
    districtsData = districts.map((dist) => {
      let noOfLabs=0, totalCases = 0, casesAllocated=0;
      answer.forEach((ans)=>{
        if(ans.transfer_type === 1 && parseInt(ans.destination) === dist.district_id){
          casesAllocated+=(ans.samples_transferred)
        }
        if(parseInt(ans.source) === dist.district_id){
          totalCases+=(ans.samples_transferred)
        }
      })
      if(totalCases > max1) max1 = totalCases;
      if(totalCases > max2 && totalCases < max1) max2 = totalCases;
      labs.forEach((lab)=>{
        if(lab.district_id === dist.district_id) noOfLabs++;
      })
      return {
        district_name: dist.district_name,
        id: dist.district_id,
        noOfLabs: noOfLabs,
        totalCases: totalCases,
        casesAllocated: casesAllocated,
        lat: dist.lat,
        lon: dist.lon
      }
    })
  }
  setData(currentState);
  return (
    <div>
      <MapChart setTooltipContent={setContent} currentState={currentState} districtsData={districtsData} max2={max2}/>
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
