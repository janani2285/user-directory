import React from "react";

function Heading() {
    const styles = {
        jumbotronColor: {
          background: "darkgray",
        },
        textSize: {
            fontSize: 100
        }
      };
    return (
        <div className="jumbotron jumbotron-fluid" style={styles.jumbotronColor}>
            <div className="container">
                <h1 className="display-4 text-center" style={styles.textSize}>USER DIRECTORY</h1>

            </div>
        </div>
    );
}

export default Heading;