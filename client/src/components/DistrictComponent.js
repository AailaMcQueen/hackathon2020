import React from "react"

class DistrictComponent extends React.Component {
    render(){
        const {name, labAlloted, swabsAlloted, sourceType, remarks} = this.props;
        return (
            <tr>
                <th scope="row">{sourceType}</th>
                <td style={{fontSize: "0.9rem"}}>{name}</td>
                <td style={{fontSize: "0.9rem"}}>{labAlloted}</td>
                <td>{swabsAlloted}</td>
                <td>{remarks}</td>
            </tr>
        )
    }
}

export default DistrictComponent;