import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>koko'sportfolio</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <a href="#">overview</a>
                </li>
                <li>
                    <a href="#">skills</a>
                </li>
                <li>
                    <a href="#">works</a>
                </li>
                <li>
                    <a href="#">hobby</a>
                </li>
                <li>
                    <a href="#">news</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header