import React from 'react'
import './TravelArticleListItem.css'

const TravelArticleListItem = (props) => {
    return (
        <div className="blog-container">
            <div className="blog-header">
                <div claclassNamess="blog-cover">
                    <img src="images/articles/11.jpg"/>
                </div>
            </div>
        
            <div className="blog-body">
                <div className="blog-title">
                    <h1><a href="">{props.title}</a></h1>
                </div>
                <div className="blog-text">
                    <p>{props.text}</p>
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
                    <li className="published-date">{props.date}</li>
                </ul>
            </div>
        </div>
    )
}

export default TravelArticleListItem
