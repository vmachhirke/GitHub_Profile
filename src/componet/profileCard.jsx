import { useState, useEffect } from "react";
import GithubNavBar from './NavBAr.jsx';

import './profileCard.css';

function GithubProfile(props){
   return(
        <div className="main2">
            <img
                src={props.value.avatar_url}
                alt="profile image"
                className="image"
            />

            <h1>{props.value.login}</h1>

            <a href={props.value.html_url} target="_blank">
                Profile URL
            </a>
        </div>
    )
}
export default GithubProfile; 