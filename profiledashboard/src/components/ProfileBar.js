import React from 'react';
import './profileBar.css';

const ProfileBar = () => {
  return (<>
    <div className="profileHeading" >
            <p className='text'>Profile</p>
            <div className="image-name">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_j6N9HNsuZAD4d8y1V-u67Y5YU204J7aOQ&usqp=CAU"  alt='not load' className='profileImage' />
              <p>Name</p>
            </div>
           
          </div>
           <hr/>
           </>
  )
}

export default ProfileBar