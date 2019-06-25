import React from 'react'
import {Link} from 'react-router-dom'
import './TravelArticleListItem.css'

const TravelArticleListItem = ({
    name,
    text,
    date,
    image,
}) => {
    return (
        <div className="blog-container">
            <div className="blog-header">
                <div className="blog-cover">
                    <img src={image} alt=""/>
                </div>
            </div>
        
            <div className="blog-body">
                <div className="blog-title">
                    <h1>  <Link to={'/travelArticles/${id}'}>{name}</Link></h1>
                </div>
                <div className="blog-text">
                    <p>{text}</p>
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
                    <li className="published-date">{date}</li>
                </ul>
            </div>
        </div>
    )
}

export default TravelArticleListItem
