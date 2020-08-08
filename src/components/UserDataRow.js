import React from "react";

function UserDataRow(props) {
    return (

        <tr >
            <td>
                <img src={props.image} alt={props.firstName} />
            </td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.age}</td>
            <td>{props.gender}</td>
            <td>{props.email}</td>
            <td>{props.country}</td>
        </tr>

    );
}

export default UserDataRow;