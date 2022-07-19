import React from "react";
import "./NavTab.css"

function NavTab() {
    return (
       <nav className="navtab">
          <ul className="navtab__ul">
            <li className="navtab__li">
                <a href="src/components/NavTab/NavTab#about-project" className="navtab__link">О&#160;проекте</a>
            </li>
            <li className="navtab__li">
                <a href="src/components/NavTab/NavTab#techs" className="navtab__link">Технологии</a>
            </li>
            <li className="navtab__li">
                <a href="src/components/NavTab/NavTab#about-me" className="navtab__link">Студент</a>
            </li>
          </ul>
       </nav>
    )
}

export default NavTab