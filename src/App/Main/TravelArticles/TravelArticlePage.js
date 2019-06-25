import React from 'react'
import travelArticles, { getTravelArticlesMap } from './travelArticles.js'


const TravelArticlePage = ({
    match,
    travelArticleMap = getTravelArticlesMap(travelArticles)
}) => {
    console.log(match)
    return (
        <div>
            <h1 className="page-title">{travelArticleMap[match.params.travelArticleId].name}</h1>
        </div>
    )
}


export default TravelArticlePage