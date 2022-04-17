import React, { Component } from 'react';
import TestimonialItem, { TestimonialBtn } from '../../props/TestimonialItem';

class Testimonial extends Component {
  render() {
    return (
      <section className="testimonial">
        <div className="container">
          <div className="testimonial-heading">
            <div className="testimonial-heading-left">
              <h6 className="section-description">Testimonial</h6>
              <h2 className="section-title">Don’t Just Take Our Words For It</h2>
            </div>
            <div className="testimonial-heading-right">
              <TestimonialBtn
                icon="fa-solid fa-arrow-left"
              />
              <TestimonialBtn
                icon="fa-solid fa-arrow-right"
              />
            </div>
          </div>
          <ul className="testimonial-list">
            <TestimonialItem
              src="https://finestdevs.com/demos/fastland-html/image/home-3/user-circle-1.png"
              name="Charles Patterson"
              year="One year with us"
              desc="consetetur sadipscing elltr, sed dlam nonumy elrmod
              tempor
              invidunt ut labore et dolore magna allquyam erat, sed dlam voluptua."
            />
            <TestimonialItem
              src="https://finestdevs.com/demos/fastland-html/image/home-3/user-circle-1.png"
              name="John Doe"
              year="One year with us"
              desc="consetetur sadipscing elltr, sed dlam nonumy elrmod
              tempor
              invidunt ut labore et dolore magna allquyam erat, sed dlam voluptua."
            />
            <TestimonialItem
              src="https://finestdevs.com/demos/fastland-html/image/home-3/user-circle-2.png"
              name="Tiana Dokidis"
              year="One year with us"
              desc="consetetur sadipscing elltr, sed dlam nonumy elrmod
              tempor
              invidunt ut labore et dolore magna allquyam erat, sed dlam voluptua."
            />
          </ul>
        </div>
      </section>
    );
  }
}

export default Testimonial;
