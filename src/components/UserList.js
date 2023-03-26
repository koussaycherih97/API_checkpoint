import React from 'react'
import UserCard from './UserCard'

const UserList = ({ListOfUser}) => {
  return (
    <div className='list'>
        {ListOfUser.map(user => <UserCard user={user}></UserCard>)}
    </div>
  )
}

export default UserList