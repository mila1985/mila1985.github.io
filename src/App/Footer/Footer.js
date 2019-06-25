import React from 'react'
import './footer.css'
import FooterButtons from './FooterButtons'


const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">

					<div className="col-lg-12">
						<div className="join">Join us:</div>
						<FooterButtons/>
					</div>

					
				</div>
			</div>
		</footer>
	)
}

export default Footer
