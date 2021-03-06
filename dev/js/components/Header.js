import React from 'react';
import Navbar from 'react-navbar';

const Header = () => (

	<nav className="navbar navbar-custom navbar-fixed-top">

        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a href="/profile" className="navbar-brand">ParkPoints</a>
            </div>
			<div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
					<li><a href="/profile"><i className="fa fa-smile-o" aria-hidden="true"></i>&nbsp;Profile</a></li>
					<li><a href="/myparkpoints"><i className="fa fa-trophy" aria-hidden="true"></i>&nbsp;My Park Points</a></li>
					<li><a href="/parks"><i className="fa fa-leaf" aria-hidden="true"></i>&nbsp;Tacoma Parks</a></li>
					<li><a href="/event"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>&nbsp;Upcoming Events</a></li>
					<li><a href="/settings"><i className="fa fa-cog" aria-hidden="true"></i>&nbsp;Settings</a></li>
					<li><a href="/about"><i className="fa fa-envelope-open-o" aria-hidden="true"></i>&nbsp;Contact us</a></li>

				</ul>
			</div>
		</div>
	</nav>
);

export default Header;
