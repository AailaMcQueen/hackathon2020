
// src/components/WorldMap.js

import React, { useState, useEffect } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"

const projection = geoMercator()




const MapChart = ({ setTooltipContent, currentState, districtsData, max2 }) => {
  const [geographies, setGeographies] = useState([])
  useEffect(() => {
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
                fill={ (cur.totalCases <= max2)?`rgba(52, 58, 64, ${ cur.totalCases / max2})`:`rgba(220,60,60,1)` }
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
