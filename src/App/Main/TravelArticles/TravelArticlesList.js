import React from 'react'
import TravelArticleListItem from './TravelArticleListItem'
import travelArticles from './travelArticles';

const TravelArticlesList = () => {
    return (
        <div>
            <h1 className="page-title"> Travel articles</h1>
            <div className="container">
				<div className="row">
                    {
                        travelArticles.map((travelArticle)=>(
                            <div className="col-lg-12" key={travelArticle.id}>
                                <TravelArticleListItem
                                    title={travelArticle.title}
                                    text={travelArticle.text}
                                    date={travelArticle.date}   
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TravelArticlesList
