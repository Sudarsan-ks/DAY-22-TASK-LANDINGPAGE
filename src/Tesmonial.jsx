import React from 'react'
import test1 from "./assets/img/testimonials-1.jpg"
import test2 from "./assets/img/testimonials-2.jpg"
import test3 from "./assets/img/testimonials-3.jpg"

function Tesmonial() {

    const sudrow3 = [{
        img: test1,
        name: "Margaret E.",
        content: "'This is fantastic! Thanks so much guys!'"
    },
    {
        img: test2,
        name: "Fred S.",
        content: "'Bootstrap is amazing. I've been using it to create lots of super nice landing pages.'"
    },
    {
        img: test3,
        name: "Sarah W.",
        content: "'Thanks so much for making these free resources available to us!'"
    },

    ]


    return (
        <>
            <section className="testimonials text-center bg-light">
                <div className="container">
                    <h2 className="mb-5">What people are saying...</h2>
                    <div className="row">
                        {
                            sudrow3.map((row3data, index) => {
                                return <>
                                    <div className="col-lg-4" key={index}>
                                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                            <img className="img-fluid rounded-circle mb-3" src={row3data.img} alt="" />
                                            <h5>{row3data.name}</h5>
                                            <p className="font-weight-light mb-0">{row3data.content}</p>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tesmonial
