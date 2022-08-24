import React from 'react'
import CAS from '../assets/cas.png'
import COBE from '../assets/COBE.png'
import CCJE from '../assets/CCJE.png'
import COL from '../assets/COL.png'
import GC from '../assets/GC.png'
import COME from '../assets/COME.png'
import CTE from '../assets/CTE.png'
import CEAT from '../assets/CEAT.png'
import CAHS from '../assets/CAHS.png'
import './DepartmentStyles.css'

const Departments = () => {
  return (
    <div className="department-list">
      <h1 className="logo-font dep-title">Northwestern University Departments</h1>
      <div className="department-content">
          <div className="image-title">
            <img src={CAS} alt="Users" className="department-photo" /> 
            <p className="dept-name">College of Arts and Sciences</p>
          </div>
          <div className="image-title">
            <img src={COBE} alt="Users" className="department-photo" /> 
            <p className="dept-name">College of Business Engineering</p>
          </div>
          <div className="image-title">
            <img src={CCJE} alt="Users" className="department-photo" /> 
            <p className="dept-name">College of Criminal Justice Education</p>
          </div>
          <div className="image-title">
            <img src={COL} alt="Users" className="department-photo" /> 
            <p className="dept-name">College of Law</p>
          </div>
          <div className="image-title">
            <img src={GC} alt="Users" className="department-photo" /> 
            <p className="dept-name">Graduate School</p>
          </div>
          <div className="image-title">
            <img src={COME} alt="Users" className="department-photo" /> 
            <p className="dept-name">College of Marine Engineering</p>
          </div>
          <div className="image-title">
            <img src={CTE} alt="Users" className="department-photo" /> 
            <p className="dept-name">College of Teacher Education</p>
          </div>
          <div className="image-title">
            <img src={CEAT} alt="Users" className="department-photo" /> 
            <p className="dept-name">College of Engineering, Architecture and Technology</p>
          </div>
          <div className="image-title">
            <img src={CAHS} alt="Users" className="department-photo" /> 
            <p className="dept-name">College of Alliead Health Sciences</p>
          </div>
      </div>
    </div>
  )
}

export default Departments