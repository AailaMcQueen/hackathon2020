import React from "react"

class DistrictComponent extends React.Component {
    render(){
        const {name, labAlloted, swabsAlloted, sourceType, remarks} = this.props;
        return (
            <tr>
                <th scope="row">{sourceType}</th>
                <td>{name}</td>
                <td>{labAlloted}</td>
                <td>{swabsAlloted}</td>
                <td>{remarks}</td>
            </tr>
        )
    }
}

export default DistrictComponent;