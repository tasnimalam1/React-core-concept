import { useEffect, useState } from 'react'
import Friend from './friend'
import './friends.css'

export default function Friends(){
    const [friends,setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div className='box'>
            <h1>Friends: {friends.length}</h1>
            {
                friends.map(friend => <Friend friend ={friend}></Friend>)
            }
        </div>
    )
}

/**
 * state to hold  data
 * useEffect with call back and dependency array
 * use fetch to load data
 */