import React,{useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
import { useAppSelector,useAppDispatch } from '../../app/hooks'

import {fetchUsers} from './userSlice'

const UserView = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

 
  return (
    <div>
        <h2>List of user</h2>
        {users.loading && <div>Loading...</div>}
    {!users.loading && users.error ? <div>Error: {users.error} </div>: null}
    {!users.loading && users.users.length ? (

        <ul>
          {users.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
    ) : null}

    </div>
  )
}

export default UserView