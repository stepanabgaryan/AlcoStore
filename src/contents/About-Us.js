import React from "react";
import { Link } from "react-router-dom";
import lcoLogo from '../contents/IcoLogo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaLinkedin, FaRegCalendarAlt } from 'react-icons/fa';
import Button from "@material-ui/core/Button/index";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <AppBar position="static" className="HeaderContainerAppBar">
          <Toolbar>
            <div className='LogoForAlcoStoreContainer1'>
              <Link to="/">
                <img src={lcoLogo} alt={lcoLogo} className='ImageForAlcoStoreContainer' />
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div className='AbousUsMainDiv'>
          <div className='AboutUsContentDiv AboutUsContentDivLeft'>
            <FontAwesomeIcon
              icon="user"
              className='AboutUsContentDivIcon'
            />
            <div className='AboutUsContentDivBody'>
              <div className='AboutUsContentDivBodyImage'>
                <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png' alt='person'/>
              </div>
              <div className='AboutUsContentDivContent'>
                <h4>Stepan Abgaryan</h4>
                <span> <FaRegCalendarAlt className='AboutUsContentDivDescIcons'/> 19 May 1994</span>
                <br/>
                <br/>
                <div className='AboutUsContentDivDesc'>
                  Description About Me
                  <br/>
                  <br/>
                  <a href="https://stepanabgaryan.github.io/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outlined" fullWidth className="SignUpCardGridInput">
                      View Portfolio
                    </Button>
                  </a>
                </div>
                <div className='AboutUsContentDivLinks'>
                  <span>Follow us on:</span>
                  <a href="https://github.com/stepanabgaryan" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='AboutUsContentDivDescIcons AboutUsContentDivDescIcons1'/>
                  </a>
                  <a href="https://www.linkedin.com/in/stepan-abgaryan-6b6727170/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='AboutUsContentDivDescIcons AboutUsContentDivDescIcons2'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='AboutUsContentDivRow'></div>
          <div className='AboutUsContentDiv AboutUsContentDivRight'>
            <FontAwesomeIcon
              icon="user"
              className='AboutUsContentDivIcon'
            />
            <div className='AboutUsContentDivBody'>
              <div className='AboutUsContentDivBodyImage'>
                <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png' alt='person'/>
              </div>
              <div className='AboutUsContentDivContent'>
                <h4>Veronika Jaghinyan</h4>
                <span> <FaRegCalendarAlt className='AboutUsContentDivDescIcons'/> DD MM YYYY</span>
                <br/>
                <br/>
                <div className='AboutUsContentDivDesc'>
                  Description About Me
                  <br/>
                  <br/>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outlined" fullWidth className="SignUpCardGridInput">
                      View Portfolio
                    </Button>
                  </a>
                </div>
                <div className='AboutUsContentDivLinks'>
                  <span>Follow us on:</span>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='AboutUsContentDivDescIcons AboutUsContentDivDescIcons1'/>
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='AboutUsContentDivDescIcons AboutUsContentDivDescIcons2'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='AboutUsContentDivRow'></div>
          <div className='AboutUsContentDiv AboutUsContentDivLeft'>
            <FontAwesomeIcon
              icon="user"
              className='AboutUsContentDivIcon'
            />
            <div className='AboutUsContentDivBody'>
              <div className='AboutUsContentDivBodyImage'>
                <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png' alt='person'/>
              </div>
              <div className='AboutUsContentDivContent'>
                <h4>Gevorg Mamikonyan</h4>
                <span> <FaRegCalendarAlt className='AboutUsContentDivDescIcons'/>DD MM YYYY</span>
                <br/>
                <br/>
                <div className='AboutUsContentDivDesc'>
                  Description About Me
                  <br/>
                  <br/>
                  <a href="https://www.youtube.com/</div>" target="_blank" rel="noopener noreferrer">
                    <Button variant="outlined" fullWidth className="SignUpCardGridInput">
                      View Portfolio
                    </Button>
                  </a>
                </div>
                <div className='AboutUsContentDivLinks'>
                  <span>Follow us on:</span>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='AboutUsContentDivDescIcons AboutUsContentDivDescIcons1'/>
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='AboutUsContentDivDescIcons AboutUsContentDivDescIcons2'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='AboutUsContentDivRow'></div>
          <div className='AboutUsContentDiv AboutUsContentDivRight'>
            <FontAwesomeIcon
              icon="user"
              className='AboutUsContentDivIcon'
            />
            <div className='AboutUsContentDivBody'>
              <div className='AboutUsContentDivBodyImage'>
                <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png' alt='person'/>
              </div>
              <div className='AboutUsContentDivContent'>
                <h4>Julieta Petrosyan</h4>
                <span> <FaRegCalendarAlt className='AboutUsContentDivDescIcons'/> DD MM YYYY</span>
                <br/>
                <br/>
                <div className='AboutUsContentDivDesc'>
                  Description About Me
                  <br/>
                  <br/>
                  <a href="https://www.youtube.com/</div>" target="_blank" rel="noopener noreferrer">
                    <Button variant="outlined" fullWidth className="SignUpCardGridInput">
                      View Portfolio
                    </Button>
                  </a>
                </div>
                <div className='AboutUsContentDivLinks'>
                  <span>Follow us on:</span>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='AboutUsContentDivDescIcons AboutUsContentDivDescIcons1'/>
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='AboutUsContentDivDescIcons AboutUsContentDivDescIcons2'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;