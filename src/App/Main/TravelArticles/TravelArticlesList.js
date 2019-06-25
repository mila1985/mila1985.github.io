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
                        travelArticles.map(({
                        id,
                        title,
                        text,
                        date,
                        })=>(
                            <div className="col-lg-12" key={id}>
                                <TravelArticleListItem
                                    title={title}
                                    text={text}
                                    date={date}   
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
