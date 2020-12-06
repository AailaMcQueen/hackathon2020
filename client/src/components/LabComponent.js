import React from "react"

class DistrictComponent extends React.Component {
    render(){
        const {name, capacity, allocation, backlog, id} = this.props;
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{capacity}</td>
                <td>{allocation}</td>
                <td>{backlog}</td>
            </tr>
        )
    }
}

export default DistrictComponent;