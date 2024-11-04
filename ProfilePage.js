// src/ProfilePage.js
import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';

const ProfilePage = () => {
    const user = {
        profilePicture: 'https://via.placeholder.com/150', // Replace with your image URL
        name: 'Ankita Jagtap',
        email: 'ankitajagtap2004@gmail.com',
        bio: 'A  software  developer  with  a  passion  for  coding  and  learning  new  technologies  ReactJs.'
    };

    return (
        <div className="profile-page">
            <ProfilePicture imageUrl="profile.jpg" />
            <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
        </div>
    );
};

export default ProfilePage;