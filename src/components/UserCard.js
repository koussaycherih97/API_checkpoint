import React from 'react'
import usercard from './usercard.css'

const UserCard = ({user}) => {
  return (
    <div>
        <div>{user.name}</div>
        <h2>USERNAME : {user.username}</h2>
        <h3>EMAIL : {user.email}</h3>
        <h4>ADDRESS (street) : {user.address.street}</h4>
        <h5>PHONE : {user.phone}</h5>
        <h6>WEBSITE : {user.website}</h6>

    </div>
  )
}

export default UserCard