import React from "react";

function Heading() {
    const styles = {
        jumbotronColor: {
          background: "darkgray",
        },
        textSize: {
            fontSize: 60
        }
      };
    return (
        <div className="jumbotron jumbotron-fluid" style={styles.jumbotronColor}>
            <div className="container">
                <h1 className="display-4 text-center font-weight-bold font-italic" style={styles.textSize}>USER DIRECTORY</h1>
                <h4 className="text-center">Sort by name and Search by country</h4>
            </div>
        </div>
    );
}

export default Heading;