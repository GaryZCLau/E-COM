import React from 'react'
import {TimelineMax, Power1} from 'gsap/all'

export default class Home extends React.Component{


    constructor(){
        super()
        this.timeline = new TimelineMax({ paused: true });
    }

    componentDidMount() {
        this.timeline
          .from(this.img1, 0.5, {
            display: "none",
            autoAlpha: 0,
            delay: 0.25,
            y: 100,
            ease: Power1.easeIn
          })
          .from(this.img2, 0.4, {
            autoAlpha: 0,
            ease: Power1.easeInOut
          })
          .from(this.img3, 0.4, {
            autoAlpha: 0,
            x: 100,
            ease: Power1.easeInOut
          });
        this.timeline.play();
      }

    render(){


        return(

            <div>
                <img ref={img => (this.img1 = img)} className="homeimg" src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80" alt="img1"/>
                <img ref={img => (this.img2 = img)} className="homeimg" src="https://images.unsplash.com/photo-1524275461690-a79bfeaf1f3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80" alt="img2"/>
                <img ref={img => (this.img3 = img)} className="homeimg" src="https://images.unsplash.com/photo-1525171254930-643fc658b64e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2770&q=80" alt="img3"/>
            </div>

        )
    }
}