import React from 'react'
import './Team.css'
import CountUp from 'react-countup'

const Team = () => {

    
  return (
  <div class="counter counter">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-3">
                <div class="count-up">
                    <h1 class="counter-count"><CountUp  start={0} end={468000} duration={8} delay={0}/></h1>
                    <h5>Happy Customers</h5>
                </div>
            </div>

            <div class="col-12 col-lg-3">
                <div class="count-up">
                <h1 class="counter-count"><CountUp  start={0} end={4500} duration={6} delay={0}/></h1>
                    <h5>Trained Professionals</h5>
                </div>
            </div>

            <div class="col-12 col-lg-3">
                <div class="count-up" >
                <h1 class="counter-count"><CountUp  start={1000} end={43} duration={4} delay={0}/></h1>
                    <h5 >Cities</h5>
                </div>
            </div>

             <div class="col-12 col-lg-3">
               <div class="count-up">
               <h1 class="counter-count"><CountUp  start={800} end={9} duration={2} delay={0}/></h1>
                    <h5>Years Of Service </h5>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Team