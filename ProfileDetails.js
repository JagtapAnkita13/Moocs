// src/ProfileDetails.js
import React from 'react';

const ProfileDetails = ({ name, email, bio }) => {
    return (
        <div className="profile-details">
            <h2>{name}</h2>
            <p><h4><b>{email}</b></h4></p>
            <p><h4><b>{bio}</b></h4></p>
        </div>
    );
};

export default ProfileDetails;
