import { useEffect , useState } from "react";
import './nav.css';

function GithubNavBar (props){
    return(
        <>
        <div className="main">
            <div className="logo">
                <h1>Guhub Profile</h1>
            </div>
            <div className="searchBox">
                <input type="text" placeholder="search Profile" className="input" value={props.currentInput} onChange={(e)=>props.usreInput(e.target.value)}/>
                <button className="findUser" onClick={()=>props.updateData()}>Find User</button>
            </div>
        </div>
        </>
    )
}
export default GithubNavBar;