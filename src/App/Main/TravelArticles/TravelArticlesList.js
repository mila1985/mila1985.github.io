import React from 'react'
import TravelArticleListItem from './TravelArticleListItem'

const TravelArticlesList = () => {
    return (
        <div>
            <h1 className="page-title"> Travel articles</h1>
            <div className="container">
				<div className="row">
					<div className="col-12">
                    <TravelArticleListItem
                    title="Beautiful world"
                    />
                    </div>
                    <div className="col-12">
                    <TravelArticleListItem
                    title="Discover the Ocean"
                    />
                    </div>
                    <div className="col-12">
                    <TravelArticleListItem
                    title="Wonderful Asia"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelArticlesList
