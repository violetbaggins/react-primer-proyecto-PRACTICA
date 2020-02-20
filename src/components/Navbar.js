import React from 'react'
let username = "pao";
let avatar ="http://placekitten.com/g/50/50";

function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="/">
                <img 
                    src={avatar} width="30" height="30" 
                    class="d-inline-block align-top rounded-circle mr-3" />
                {username}
            </a>
        </nav>
    )
}

export default Navbar