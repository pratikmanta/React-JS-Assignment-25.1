import React from 'react';

const Users = ({name,age,onButtonClick,userGreet}) =>{
    return (
        <div>
            <h1>Hi , This is a React App</h1>
            <h4>Your name is {name} and age is {age}</h4>    
            <div>
                <h1>Skills</h1>
                <ul>
                    <li>sleeping</li>
                    <li>writing codes</li>
                </ul>
            </div>
            <hr/>
            <div>
                <button onClick={onButtonClick}>Make me older</button>  
                <button onClick={userGreet}>Greet</button>  
            </div>
        </div>
    )
}

export default Users;