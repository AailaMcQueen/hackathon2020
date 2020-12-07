
// src/components/WorldMap.js

import React, { useState, useEffect } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"

const projection = geoMercator()

const MapChart = () => {
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
  }, [])

  return (
    <svg width={ 800 } height={ 800 } viewBox="0 0 800 800">
      <g className="districts">
        {
          geographies.map((d,i) => (
            <path
              key={ `path-${ i }` }
              d={ geoPath().projection(projection)(d) }
              className="district"
              fill={ `rgba(50,50,56,${ 1 / geographies.length * i})` }
              stroke="#000000"
              strokeWidth={ 0.5 }
            />
          ))
        }
      </g>
    </svg>
  )
}

export default MapChart
