import React from 'react';

import './header.css'
import './menu.css'
import './header-buttons.css'
import './logo.css'


const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
					    <a className="logo" href="index.html">
						Let`s travel!
					    </a>
					</div>
					<div className="col-lg-6">
						<div className="menu">
							<ul>
								<li><a href="">About me</a></li>
								<li><a href="">Travel</a></li>
								<li><a href="">Food</a></li>
								<li><a href="">Souvenirs</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="header-buttons">
						<div class="fb">FB</div>
				        <div class="insta">INST</div>
						</div>
					</div>
				</div>
			</div>
		</header>
)
}



export default Header;