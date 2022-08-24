import React from 'react'
import './MembersStyle.css'
import Box from '../assets/BOX.png'
import ScrollToTop from "react-scroll-to-top";
import {ReactComponent as MySVG } from '../../arrow.svg'
const Members = () => {
  return (
    <>
    <div className="content">
        <h1 className="logo-font sTitle">STUDENT COUNCIL MEMBERS</h1>
        <div className="member-content">
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Jezreel Larry P. Caunca</p>
            <p className='ssc-position'>President</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Lyka Jessica Miguel Ramones</p>
            <p className='ssc-position'>Vice-President</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Nuelina Sebastian</p>
            <p className='ssc-position'>Vice-President External</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Faith Gift Quemquem</p>
            <p className='ssc-position'>Secretary</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Jerden Wael Urbano</p>
            <p className='ssc-position'>Sub-Secretary</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">LadyHeart Bullanday</p>
            <p className='ssc-position'>Treasurer</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Esterlyn Marie Marcos Agcaoili</p>
            <p className='ssc-position'>Sub-Treasurer</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Ivan Santos</p>
            <p className='ssc-position'>Auditor</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Jonard Calano</p>
            <p className='ssc-position'>Business Manager</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Stephanie Jane Bonilla</p>
            <p className='ssc-position'>PIO Internal</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Antonnette Baldos Tabones</p>
            <p className='ssc-position'>PIO External</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Neriza Mariano</p>
            <p className='ssc-position'>Athletic Manager</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Jan Mark Acoba</p>
            <p className='ssc-position'>Athletic Manager</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff">Rose Tolentino</p>
            <p className='ssc-position'>Provost Marshall</p>
          </div>
          <div className="image-title">
            <img src={Box} alt="Users" className="photo" /> 
            <p className="ssc-staff"> John Morpheus Magallanes </p>
            <p className='ssc-position'>Provost Marshall</p>
          </div>
          </div>

    </div>
    <ScrollToTop smooth component={<MySVG />} />
    </>
 
  )
}

export default Members