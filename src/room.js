import React from 'react'
import lighton from './lighton.jpg'
import lightoff from './lightoff.png'
import './room.css'
function Room() {

    // const state = React.useState(100);
    // console.log(state);
    const [isLit, setLit] = React.useState(true);
    // console.log(isLit);
    return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <div>
            <img src={isLit ? `${lighton}` : `${lightoff}`} height={300} width={'100%'} />
        </div>
        <div className="buttons">
            <button onClick={() => setLit(true)}>ON</button>
            <button onClick={() => setLit(false)}>OFF</button>
        </div>
        <div>
            <h1>This functionality is achieved by using the concept of states and hooks in react</h1>
        </div>
    </div>
    );
}

export default Room;