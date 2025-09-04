import React from 'react'
import { useState } from 'react';
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Orders from './Orders/Orders';
import Favourites from './Favourites';
import Address from './Address';
import Payments from './Payments';
import Notifications from './Notifications';
import Events from './Events';

const Profile = () => {

    const [openSideBar, setOpenSideBar] = useState(false);

    // setOpenSideBar(true);

  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
            <ProfileNavigation open={openSideBar}/>
        </div>
        <div className='lg:w-[80%]'>
            <Routes>
                <Route path='/' element={<UserProfile />}/>
                <Route path='/orders' element={<Orders />}/>
                <Route path='/favourites' element={<Favourites />}/>
                <Route path='/address' element={<Address />}/>
                <Route path='/payments' element={<Payments />}/>
                <Route path='/notifications' element={<Notifications />}/>
                <Route path='/events' element={<Events />}/>
            </Routes>

        </div>
    </div>
  )
}

export default Profile
