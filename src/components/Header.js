import React from 'react';

const Header = () => {

    return(
        <header id="intro">
            <article className="fullheight">
            <div className="hgroup">
                <h1>Megan's Hotel</h1>
                <h2>Hidden in the Woods</h2>
                <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow"/></a></p>
            </div>
            </article>

            <nav id="nav">
            <div className="navbar">
                <div className="brand"><a href="#welcome">Megan's <span>Hotel</span></a></div>
                <ul>
                <li><a className="icon info" href="#hotelinfo"><span>info</span></a></li>
                <li><a className="icon rooms" href="#rooms"><span>rooms</span></a></li>
                <li><a className="icon dining" href="#dining"><span>dining</span></a></li>
                <li><a className="icon events" href="#events"><span>events</span></a></li>
                <li><a className="icon attractions" href="#attractions"><span>attractions</span></a></li>
                </ul>
            </div>
            </nav>
        </header>
    );
}

export default Header;