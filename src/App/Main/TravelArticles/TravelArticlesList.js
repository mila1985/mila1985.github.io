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
                        name,
                        text,
                        date,
                        image,
                        })=>(
                            <div className="col-lg-12" key={id}>
                                <TravelArticleListItem
                                    name={name}
                                    text={text}
                                    date={date}  
                                    image={image} 
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
