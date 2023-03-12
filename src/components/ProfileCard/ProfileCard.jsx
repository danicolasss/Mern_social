import React from 'react'
import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"
import './ProfileCard.css'


const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className="ProfileName">
          <span>Danny-Nicolas G</span>
          <span>Alternant Dévellopeur</span>
        </div>
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
                <span>150</span>
                <span>abonnés</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>35</span>
                <span>abonnements</span>
            </div>
          </div>
          <hr />          
        </div>
        <span>Mon profile</span>
    </div>
  )
}

export default ProfileCard