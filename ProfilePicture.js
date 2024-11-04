// src/ProfilePicture.js
import React from 'react';

const ProfilePicture = ({ imageUrl }) => {
    return (
        <div className="profile-picture">
            <img src="profile.jpg" alt="Profile" />
        </div>
    );
};

export default ProfilePicture;