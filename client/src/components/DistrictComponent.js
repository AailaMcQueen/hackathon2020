import React from "react"

class DistrictComponent extends React.Component {
    render(){
        const {name, labAlloted, swabsAlloted, sourceType} = this.props;
        return (
            <tr>
                <th scope="row">{sourceType}</th>
                <td>{name}</td>
                <td>{labAlloted}</td>
                <td>{swabsAlloted}</td>
            </tr>
        )
    }
}

export default DistrictComponent;