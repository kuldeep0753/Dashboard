import React from 'react'
import './profileDetails.css';

const ProfileDetails = () => {
  return (
    <div className="profileDetail" style={{ flexGrow: 0 }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_j6N9HNsuZAD4d8y1V-u67Y5YU204J7aOQ&usqp=CAU" alt="not load" className='profile-image'/>
            <p>Name</p>
            <div className='bottom'><label>Username :</label>
            <span>Value</span></div>
            
            <br />
            <div className='bottom'><label>e-mail :</label>
            <span>Value</span></div>
            
            <br />
            <div className='bottom'><label>Phone :</label>
            <span>Value</span></div>
            
            <br />
            <div className='bottom'><label>Website :</label>
            <span>Value</span></div>
            <hr className='line'/>
            <p>Company</p>
            <div className='bottom'><label>Name :</label>
            <span>Value</span></div>
            <br />
            <div className='bottom'><label>Catch-phrase :</label>
            <span>Value</span></div>
            
            <br />
            <div className='bottom'><label>bs :</label>
            <span>Value</span></div>
            
            <br />
          </div>
  )
}

export default ProfileDetails