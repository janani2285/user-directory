import React, { Component } from "react";


class Search extends Component {
    state = {
        searchText: "",
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
        console.log(this.state.searchText)
    };

    render() {
        return (
                <div className="text-center pb-5">
                    <input
                        className="border border-danger"
                        value={this.state.searchText}
                        name="searchText"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Search Text"
                    />
                </div>
        );
    }

}

export default Search;