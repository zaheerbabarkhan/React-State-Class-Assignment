import React from 'react'
import lighton from './lighton.jpg'
import lightoff from './lightoff.png'
import './room.css'
function Room() {

    // const state = React.useState(100);
    // console.log(state);
    const [isLit, setLit] = React.useState(true);
    const [temp, setTemp] = React.useState('High')
    // console.log(isLit);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div>
                <img src={isLit ? `${lighton}` : `${lightoff}`} height={300} width={'100%'} />
            </div>
            <div className="buttons">
                <button className={isLit ? 'dark' : 'lit'} onClick={() => {setLit(true); setTemp('High')}}>ON</button>
                <button className={!isLit ? 'dark' : 'lit'} onClick={() => {setLit(false); setTemp('Low')}}>OFF</button>
            </div>
            <br /><br />
            <div>
                <p style={{textAlign: 'center'}}>Temp is <strong>{temp}</strong> { isLit ? 'Off the light to Decrease' : 'On the Light To increase'}</p>
            </div>
            <br /><br /><br /><br /><br />
            <div>
                <h2 style={{ textAlign: 'center' }}>This functionality is achieved by using the concept of states in react</h2>
            </div>
        </div>
    );
}

export default Room;