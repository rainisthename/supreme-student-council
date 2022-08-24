import React from 'react'
import './FooterStyles.css'
const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="top">
                <h3>USEFUL LINKS</h3>
            </div>
            <div className="bottom">
                    <ul>
                        <li>NWU Website</li>
                        <li>NWU Canvas</li>
                        <li>NWU Student Portal</li>
                    </ul>
            </div>
        </div>

            <p className="ar">© 2022 Supreme Student Council. All Rights Reserved</p>

    </div>
  )
}

export default Footer