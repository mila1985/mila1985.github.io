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
                    title="Beautiful sunsets"
                    text="Tempora odit ut perferendis officia doloremque rerum quidem, repudiandae repellat quaerat, ullam expedita 
                    inventore sint esse ipsam, iure recusandae? Ullam!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quas consequuntur aliquid quisquam architecto quos omnis, suscipit quod eveniet dolore vero. "
                    date="11.06.2018"
                    />
                    </div>
                    <div className="col-12">
                    <TravelArticleListItem
                    title="Discover the Ocean"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quas consequuntur aliquid quisquam architecto quos omnis, suscipit quod eveniet dolore vero. 
                    Tempora odit ut perferendis officia doloremque rerum quidem, repudiandae repellat quaerat, ullam expedita 
                    inventore sint esse ipsam, iure recusandae? Ullam!"
                    date="24.01.2018"
                    />
                    </div>
                    <div className="col-12">
                    <TravelArticleListItem
                    title="Wonderful Georgia"
                    text="Quas consequuntur aliquid quisquam architecto quos omnis, suscipit quod eveniet dolore vero. 
                    Tempora odit ut perferendis officia doloremque rerum quidem, repudiandae repellat quaerat, ullam expedita 
                    inventore sint esse ipsam, iure recusandae? Ullam!Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    date="17.11.2017"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelArticlesList
