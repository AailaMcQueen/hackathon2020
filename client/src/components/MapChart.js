
// src/components/WorldMap.js

import React, { useState, useEffect } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import {csv} from "d3-fetch"

const projection = geoMercator()

let districtsData = []

const setData = data => {
  districtsData = data.map((dist) => dist);
}


const MapChart = () => {
  const [geographies, setGeographies] = useState([])

  useEffect(() => {
    csv("/districts_data_v0.csv").then(districts => {
      setData(districts);
    })
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
  }, [])

  return (
    <svg width={ 800 } height={ 800 } viewBox="0 0 800 800">
      <g className="districts">
        {
          geographies.map((d,i) => { 
            const cur = districtsData.find(s => s.district_id == i+1); 
            return (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(projection)(d) }
                className="district"
                fill={ `rgba(138,43,226,${ cur.samples / 1000})` }
                stroke="#000000"
                strokeWidth={ 1.0 }
              />
            )}
          )
        }
      </g>
    </svg>
  )
}

export default MapChart
