import React from 'react';
import './reset.css'
import './base.css'
import './header.css'
import './menu.css'
import './header-buttons.css'


const Header = () => {
	return (
		<header className="header">
		<div className="container">

			<div className="row">
				<div className="col-3">
					<a className="logo" href="index.html">
						Let`s travel!
					</a>
				</div>
					
			    <div className="col-6">
				    <nav className="menu">
						<ul>
							<li><a href="index.html">About me</a></li>
							<li><a href="travel.html">Travel</a></li>
							<li><a href="food.html">Food</a></li>
							<li><a href="souvenirs.html">Souvenirs</a></li>
						</ul>
					</nav>
				</div>


				<div className="col-3">
					<div className="header-buttons">
					   	<div className="fb">FB</div>
				      <div className="insta">INST</div>
				  </div>
				</div>

			</div>
		</div>
	</header>
  )
  }

  const Main = () => {
    return (
      <main className="main">
			<div className="container">
				<div classNameass="row">
					<div className="col-lg-3">
						
					</div>
					<div className="col-lg-9">
						
					</div>
				</div>
			</div>
		</main>
    )
  }

  const Footer = () => {
    return (
      <footer className="footer">
        Footer
      </footer>
    )
  }
  const App = () => {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
  
  export default App;