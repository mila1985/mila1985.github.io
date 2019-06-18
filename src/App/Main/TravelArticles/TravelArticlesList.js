import React from 'react'
import TravelArticleListItem from './TravelArticleListItem'

const TravelArticlesList = () => {
    return (
        <div>
            <h1 className="page-title"> Travel articles</h1>
            <div className="container">
				<div className="row">
					<div className="col-12">
                    <TravelArticleListItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelArticlesList
