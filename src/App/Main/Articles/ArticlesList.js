import React from 'react'
import ArticleListItem from './ArticleListItem'

const ArticlesList = () => {
    return (
        <div>
            <h1 className="page-title"> Travel articles</h1>
            <div className="container">
				<div className="row">
					<div className="col-12">
                    <ArticleListItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlesList
