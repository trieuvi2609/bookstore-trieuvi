import { SLIDE_VIEW_5 } from 'utils/slide'
import { CardAboutUs, Title } from 'components'
import React from 'react'
import Slider from 'react-slick'
import { ABOUT_US } from 'utils/static'
import './AboutUs.scss'

function AboutUs(props) {
  return (
    <section>
      <div className="aboutus">
        <div className="container">
          <div className="aboutus__header">
            <Title title="About Us" text="We are E-commerce team No. 1" />
          </div>
          <div>
            <Slider {...SLIDE_VIEW_5}>
              {ABOUT_US.map(member => {
                return (
                  <div key={member.id}>
                    <CardAboutUs info={member} />
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
