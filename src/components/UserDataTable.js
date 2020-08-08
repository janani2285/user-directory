/* eslint-disable */
import React, { Component } from "react";
import API from "../utils/API";
import UserDataRow from './UserDataRow';


class UserDataTable extends Component {
    state = {
        users: []
    };


    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        API.getUser()

            .then((res) => {
                this.setState({ users: res.data.results })
            })
            .catch((err) => console.log(err));
    };

    renderPage() {
        if (this.state.users.length === 0) {
            return <h1> LOADING...</h1>
        } else {
            return (
                <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Photo</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Email</th>
                                <th scope="col">Country</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.users.map((user) => {
                                return <UserDataRow
                                    id={user.id.value}
                                    key={user.email}
                                    image={user.picture.medium}
                                    firstName={user.name.first}
                                    lastName={user.name.last}
                                    gender={user.gender}
                                    age={user.dob.age}
                                    email={user.email}
                                    country={user.location.country}
                                />
                            })}


                        </tbody>
                    </table>
                </div>
            );
        }
    }
    
    render() {
        return this.renderPage()
    }

}
export default UserDataTable;