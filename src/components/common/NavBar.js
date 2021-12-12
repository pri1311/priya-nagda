import React from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/NavBarStyles.css'


export default function NavBar() {
    function closeNavBar() {
        var navIconText = document.getElementById('navIconText');
        var navList = document.getElementById('navList');
        if (navIconText.innerText === 'X') navIconText.innerText = 'Menu';
        else navIconText.innerText = 'X';
        navList.classList.toggle('hideNavBar');
    }

    function closeNavBarMobile() {
        if (window.innerWidth <= 560) {
            closeNavBar();
        }
    }

    return (
        <React.Fragment>
            <div className="navIcon" id="navIcon" onClick={closeNavBar}>
                <p id="navIconText">Menu</p>
            </div>
            <div className="navlist hideNavBar" id="navList">
                <NavLink to="/"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                    onClick={closeNavBarMobile}
                >
                    Home
                </NavLink>
                <NavLink to="/about"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                    onClick={closeNavBarMobile}

                >
                    About
                </NavLink>
                <NavLink to="/projects"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                    onClick={closeNavBarMobile}

                >
                    Projects
                </NavLink>
                <NavLink to="/contact"
                    className={isActive =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                    onClick={closeNavBarMobile}

                >
                    Contact
                </NavLink>
                <a href="https://drive.google.com/file/d/194xmm4Dn-DlsJiWeeheiqCK3rSwpi0oq/view?usp=sharing" className="nav-link" target='_blank'>Resume</a>

            </div>
        </React.Fragment>
    )
}