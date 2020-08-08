/* eslint-disable */
import React, { Component } from "react";
import API from "../utils/API";
import UserDataRow from './UserDataRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'
import { faSortAlphaDownAlt } from '@fortawesome/free-solid-svg-icons'


class UserDataTable extends Component {
    state = {
        users: [],
        order : "ascending",
        icon :  faSortAlphaDown 
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

    handleNameSort = () => {
        this.setState({
          order: this.state.order === "ascending" ? "descending" : "ascending",
          icon: this.state.icon === faSortAlphaDown ?  faSortAlphaDownAlt  :  faSortAlphaDown
        });
    };

    renderPage() {
        if (this.state.users.length === 0) {
            return <h1> LOADING...</h1>
        } else {
            const sortedUsers = this.state.users.sort((a, b) => {
                let aName=a.name.first+ " " +a.name.last
                let bName=b.name.first+ " " +b.name.last
                if (aName === bName) {
                  return 0;
                }
                if (this.state.order === "ascending") {
                  if (aName < bName) {
                    return -1;
                  }
                  return 1;
                }
                if (aName < bName) {
                  return 1;
                }
                return -1;
              });
             
            return (
                <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Photo</th>
                                <th scope="col" onClick={this.handleNameSort}> Name <FontAwesomeIcon icon={this.state.icon} /></th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Email</th>
                                <th scope="col">Country</th>
                            </tr>
                        </thead>
                        <tbody>

                            {sortedUsers.map((user) => {
                                return <UserDataRow
                                    id={user.id.value}
                                    key={user.email}
                                    image={user.picture.medium}
                                    name={user.name.first+ " " +user.name.last}
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