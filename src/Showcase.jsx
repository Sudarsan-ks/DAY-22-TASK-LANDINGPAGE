import React from 'react'
import bg1 from "./assets/img/bg-showcase-1.jpg"
import bg2 from "./assets/img/bg-showcase-2.jpg"
import bg3 from "./assets/img/bg-showcase-3.jpg"

function Showcase() {

  const sudrow2 = [{
    col1: "col-lg-6 order-lg-2 text-white showcase-img",
    col2: "col-lg-6 order-lg-1 my-auto showcase-text",
    style: { backgroundImage: `url(${bg1})` },
    content: "Fully Responsive Design",
    para: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
  },
  {
    col1: "col-lg-6 text-white showcase-img",
    col2: "col-lg-6 my-auto showcase-text",
    style: { backgroundImage: `url(${bg2})` },
    content: "Updated For Bootstrap 5",
    para: "Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
  },
  {
    col1: "col-lg-6 order-lg-2 text-white showcase-img",
    col2: "col-lg-6 order-lg-1 my-auto showcase-text",
    style: { backgroundImage: `url(${bg3})` },
    content: "Easy to Use & Customize",
    para: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
  }

  ]

  return <>
    <section className="showcase">
      <div className="container-fluid p-0">
        {
          sudrow2.map((row2data, index) => {
            return <>
              <div className="row g-0" key={index} >
                <div className={row2data.col1} style={row2data.style}></div>
                <div className={row2data.col2}>
                  <h2>{row2data.content}</h2>
                  <p className="lead mb-0">{row2data.para}</p>
                </div>
              </div>
            </>
          })
        }
      </div>
    </section>




  </>
}

export default Showcase
