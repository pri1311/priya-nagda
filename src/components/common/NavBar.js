import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/NavBarStyles.css'


export default function NavBar() {
    function closeNavBar() {
        var navIcon = document.getElementById('navIcon');
        var navIconText = document.getElementById('navIconText');
        var navList = document.getElementById('navList');
        if (navIconText.innerText === 'X') navIconText.innerText = 'Menu';
        else navIconText.innerText = 'X';
        navList.classList.toggle('hideNavBar');
    }
    return (
        <React.Fragment>
            <div className="navIcon" id="navIcon" onClick={closeNavBar}>
                <p id="navIconText">X</p>
            </div>
            <div className="navlist" id="navList">
                <NavLink to="/"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }

                >
                    Home
                </NavLink>
                <NavLink to="/"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                >
                    About
                </NavLink>
                <NavLink to="/"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                >
                    Projects
                </NavLink>
                <NavLink to="/"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                >
                    Contact
                </NavLink>
            </div>
        </React.Fragment>
    )
}