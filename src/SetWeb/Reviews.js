import React, { useState } from "react"

const Reviews=()=>{
    const Reviews=[
        {
            "rating": 5,
            "review": "This shirt is incredibly breathable! It keeps me dry throughout my entire run. Highly recommend!",
            "author": "John D.",
            "country": "USA",
            "date": "2024-11-20"
          },
          {
            "rating": 4,
            "review": "Great fit and excellent moisture-wicking fabric. Would have liked more color options.",
            "author": "Sophie L.",
            "country": "Canada",
            "date": "2024-11-18"
          },
          {
            "rating": 3,
            "review": "Good shirt, but it felt a bit tight around the shoulders. Still, it does a great job at keeping me dry.",
            "author": "Chris M.",
            "country": "UK",
            "date": "2024-11-19"
          },
          {
            "rating": 5,
            "review": "Perfect for running! The material dries so fast, and I feel comfortable even during long workouts.",
            "author": "Emma R.",
            "country": "Australia",
            "date": "2024-11-21"
          }
      ]
      return(
        <div className="Reviews">
        <div className="note">45</div>
        <div>
        {Reviews.map((ele,index)=>{
            return(
                <>
                <div className="A" key={index}>
                     <div className="author">{ele.author}</div><div className="country">{ele.country}</div><div className="date">{ele.date}</div>
                     <div className="review">
                        {ele.review}
                     </div>
                </div>
                <hr className="hr"></hr>
                </>
            )
        })}
        </div>
        </div>
      )
}
export default Reviews ;