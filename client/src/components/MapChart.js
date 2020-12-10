
// src/components/WorldMap.js

import React, { useState, useEffect } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"

const projection = geoMercator()
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



const MapChart = ({ setTooltipContent, currentState }) => {
  const [geographies, setGeographies] = useState([])
  useEffect(() => {
    setData(currentState);
    fetch("/District_Boundary.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(stateData => {
          setGeographies(feature(stateData, stateData.objects.Karnataka).features)
        })
      })       
  })

  return (
    <svg width={ window.innerWidth*((window.innerWidth < 800)?0.9:0.8) } height={ window.innerHeight*0.6 } viewBox="0 0 800 800">
      <g className="districts">
        {
          geographies.map((d,i) => { 
            const cur = districtsData.find(s => s.district_name.toLowerCase() === d.properties.Dist_Name.toLowerCase()); 
            return (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(projection)(d) }
                className="district"
                fill={ (cur.totalCases <= max2)?`rgba(138,43,226, ${ cur.totalCases / max2})`:`rgba(220,60,60,1)` }
                stroke="#000000"
                strokeWidth={ 1.0 }
                onMouseEnter={() => {
                  const { district_name, lat, lon, noOfLabs, casesAllocated, totalCases } = cur;
                  setTooltipContent({
                    district_name, lat,lon,noOfLabs, casesAllocated, totalCases
                  });
                }}
                onMouseLeave={() => {
                  setTooltipContent({
                    district_name: "",
                    lat: "",
                    lon: "",
                    noOfLabs: "",
                    casesAllocated: "",
                    totalCases: ""
                  });
                }}
              />
            )}
          )
        }
      </g>
    </svg>
  )
}

export default MapChart
