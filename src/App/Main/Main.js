import React from 'react'
import {Route} from 'react-router-dom'
import './main.css'

import './TravelArticles/TravelArticlesList.js'
import TravelArticlesList from './TravelArticles/TravelArticlesList.js';
import AboutMe from './AboutMe/AboutMe';
import FoodArticles from './FoodArticles/FoodArticles';
import SouvenirsArticles from './SouvenirsArticles/SouvenirsArticles';


const Main = () => {
	return (
		<main className="main">
			<div className="lets-travel">
				<img src="images/backgrounds/background2.jpg" alt="lets-travel"/>
			</div>

			<div>
				
			    <Route exact path="/" render={()=>(
						<TravelArticlesList/>
					)}/>

				
				<Route path="/About me" component={AboutMe}/>
				<Route path="/Food articles" component={FoodArticles}/>
				<Route path="/Souvenirs articles" component={SouvenirsArticles}/>
			</div>	

			{/* <div className="container">
				<div className="row">
					<div className="col-12">
						<div className="blog-container">
							<div className="blog-header">
								<div claclassNamess="blog-cover">
									<img src="images/articles/1.jpg" className="img-article"/>
								</div>
							</div>
						
							<div className="blog-body">
								<div className="blog-title">
									<h1><a href="">Name of the article 1</a></h1>
								</div>
								<div className="blog-text">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas consequuntur aliquid quisquam architecto quos omnis, suscipit quod eveniet dolore vero. Tempora odit ut perferendis officia doloremque rerum quidem, repudiandae repellat quaerat, ullam expedita inventore sint esse ipsam, iure recusandae? Ullam!</p>
								</div>
								<div className="blog-tags">
									<ul>
										<li><a href="">Lorem</a></li>
										<li><a href="">Quas</a></li>
										<li><a href="">Tempora</a></li>
									</ul>
								</div>
							</div>

							<div className="blog-footer">
								<ul>
									<li className="published-date">2 days ago</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>




	        <div className="container">
				<div className="row">
					<div className="col-12">
						<div className="blog-container">
							<div className="blog-header">
								<div className="blog-cover">
									<img src="images/articles/2.jpg"className="img-article"/>
								</div>
							</div>
						
							<div className="blog-body">
							
							<div className="blog-title">
								<h1><a href="">Name of the article 2</a></h1>
							</div>
							<div className="blog-text">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas consequuntur aliquid quisquam architecto quos omnis, suscipit quod eveniet dolore vero. Tempora odit ut perferendis officia doloremque rerum quidem, repudiandae repellat quaerat, ullam expedita inventore sint esse ipsam, iure recusandae? Ullam!</p>
							</div>
							<div className="blog-tags">
								<ul>
									<li><a href="">Lorem</a></li>
									<li><a href="">Quas</a></li>
									<li><a href="">Tempora</a></li>
								</ul>
							</div>
							</div>

							<div className="blog-footer">
							<ul>
								<li className="published-date">2 days ago</li>
							</ul>
							</div>
						</div>
					</div>
				</div>
			</div>




			 */}
		</main>
	)
}


export default Main
