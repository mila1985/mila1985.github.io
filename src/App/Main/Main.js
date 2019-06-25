import React from 'react'
import {Route} from 'react-router-dom'
import './main.css'

import './TravelArticles/TravelArticlesList.js'
import TravelArticlesList from './TravelArticles/TravelArticlesList.js';
import AboutMe from './AboutMe/AboutMe';
import FoodArticles from './FoodArticles/FoodArticles';
import SouvenirsArticles from './SouvenirsArticles/SouvenirsArticles';

import TravelArticlePage from './TravelArticles/TravelArticlePage'


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

				<Route path="/travelArticles/:travelArticleId" component={TravelArticlePage}/>
			</div>	

			
		</main>
	)
}


export default Main
