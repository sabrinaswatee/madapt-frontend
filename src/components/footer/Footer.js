import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footerEmergencyBanner">
          <a href="tel:000">In case of emergency call 000</a>
          <a href="tel:131114">Lifeline Phone Service 13 11 14</a>
        </div>

        <div className="footerCore">
          <div className="footerItem">
            <ul>
              <li><a href="#">About mAdapt</a></li>
              <li><a href="#">All Topics</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footerItem footerItemBorder">
            <ul>
              <li><a href="#">Statistics</a></li>
              <li><a href="#">Premium for Clinics</a></li>
            </ul>
          </div>

          <div className="footerItem social">
            <h4>Save our website on your phone!</h4>
            <ul className="footerIcons">
              <li><SocialIcon url="https://www.facebook.com/mAdapt-1777571399195093/" network="facebook" color="white" style={{ height:25, width:25 }}/></li>
              <li><SocialIcon url="https://twitter.com/mAdapt_app" network="twitter" color="white" style={{ height:25, width:25 }}/></li>
              <li><SocialIcon url="#" network="youtube" color="white" style={{ height:25, width:25 }}/></li>
              <li><SocialIcon url="https://www.instagram.com/mAdapt_app/" network="instagram" color="white" style={{ height:25, width:25 }}/></li>
            </ul>
          </div>

          <div className="footerCopyright footerItem">
            &copy; 2017 mAdapt. All rights reserved.
          </div>
        </div>

      
      </div>
    )
  }
}

export default Footer
