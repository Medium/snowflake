// @flow

import React from 'react'

class HelpModal extends React.Component {
  render() {

    return (
      <div>
        <style jsx>{`
          .modalBackdrop {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left 0;
            background-color: rgba(0, 0, 0, 0.75);
          }
        `}

        </style>
        <div className="modalBackdrop" >

          <div style={{ margin: 'auto', background: 'white', border: 'purple', width:'900px'}}>
          <button onClick={() => this.props.hideModalFn()} style={{float: 'right', color: 'white', backgroundColor: 'purple'}} class="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>

            <h1>
              What is this?
            </h1>
            
            <p>Having a formal system means we can better support the growth of our engineers. </p>
            <p>We’re able to have more honest, open conversations about progress, promotions, and opportunity. </p>
            <p>While the framework is still relatively new, it is showing early promise at incentivising the kinds of behaviours we want to see in the team, and recognising the different kinds of value that people add. </p>
            <p>We already have ideas on how to improve the framework further, and plan to continue iterating on it over time. </p>

            <h1>
              Getting Started
            </h1>
            
            <p>Basically we want you the engineer to assess your skillset on different parameters. </p>
            <p>The idea is by the end of the year, you have assesed your skills and a committee (EM + Tech + Architect) have assesed it as well. </p>
            <p>Then we sit and talk about the discrepenices if there are any and we adjust. </p>
            <p>And after that we can see what are the skills you want to have, where you want to go and we see how can we help you get there. </p>


            
          </div>
        </div>
      </div>
    );
  }
}

export default HelpModal;