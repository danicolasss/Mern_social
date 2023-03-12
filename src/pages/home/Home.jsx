import React from 'react'
import ProfilSide from '../../components/profileSide/ProfileSide'
import'./Home.css'

const home = () => {
  return (
    <div className='Home'>
        <ProfilSide/>
        <div className="postSide">Poste</div>
        <div className="rightSide">CotéDroit</div>
    </div>
  )
}

export default home