

export default function Friend({friend}){
    return(
        <div className='box'>
            <h2>Name: {friend.name}</h2>
            <p>Email: {friend.email}</p>
        </div>
    )
}