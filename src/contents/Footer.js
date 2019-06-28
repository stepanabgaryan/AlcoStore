import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub);

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <AppBar
          position="static"
          color="default"
          style={{ backgroundColor: "#bdbdbd" }}
        >
          <div>
            <div>FOLLOW US ON</div>
            <div variant="h6" color="inherit">
              <a
                href="https://github.com/gev76"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{
                    fontSize: "30px",
                    padding: "15px",
                    boxSizing: "unset"
                  }}
                />
              </a>
              <a
                href="https://github.com/juliapetrosyan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{
                    fontSize: "30px",
                    padding: "15px",
                    boxSizing: "unset"
                  }}
                />
              </a>
              <a
                href="https://github.com/veronika-jaghinyan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{
                    fontSize: "30px",
                    padding: "15px",
                    boxSizing: "unset"
                  }}
                />
              </a>
              <a
                href="https://github.com/stepanabgaryan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{
                    fontSize: "30px",
                    padding: "15px",
                    boxSizing: "unset"
                  }}
                />
              </a>
            </div>
            <div variant="h6" color="inherit">
              © {new Date().getFullYear()} All Rights Reserved. Design By
              AlcoStore.
            </div>
          </div>
        </AppBar>
      </div>
    );
  }
}

export default Footer;