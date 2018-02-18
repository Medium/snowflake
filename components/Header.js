// @flow

import React from 'react'
import Hamburger from '../components/Hamburger'
import Link from 'next/link'



function Header(props: Props) {
	const styles = {
    headerContainer: {
      borderBottom: '2px solid #ccc',
      borderTop: '2px solid #ccc',
      margin: '20px auto',
      display: 'flex',
      alignItems: 'center'
    },
    titleContainer: {
      width: '100%',
      marginLeft: '-40px',
      display:'flex',
      justifyContent: 'center'
    },
    title: {
      zIndex:'-1',
      fontSize:'3.5em',
      fontFamily:'serif',
      fontWeight:'bold',
      textAlign: 'center',
      transitionTimingFunction: 'ease',
      transitionDuration : '.2s',
      color: `${ props.menuOpen ? '#fafafa' : '#000'}`,
    },
    openStyles: {
      width:'920px',
      marginLeft:'40px',
      display:'flex',
      justifyContent:'space-around',
      'fontSize':'2.5em',
      fontWeight:'bold'
    }
  }
  {
    // TODO: I need to get the Manager Companion line to tranition color as the other text slides right
  }

	return (
    <div style={styles.headerContainer}>
      <Hamburger
        isOpen={props.menuOpen}
        hamburgerClick={props.hamburgerClick}>
      </Hamburger>
      <div>
        <ul style={{width: '0px', padding:'0px', margin:'0px', marginLeft:'-40px', listStyle:'none'}}>
          <div style={{width:'920px',
              display:'flex',
              justifyContent:'space-around',
              'fontSize':'2.5em',
              fontWeight:'bold',
              transitionTimingFunction: 'ease',
              transitionDuration : '.4s',
              marginLeft:`${props.menuOpen ? '0px' : '-960px'}`}}>
            <li>Take Quiz</li>
            <li>Print Results</li>
          </div>
        </ul>
      </div>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>
          Manager Companion
        </h1>
      </div>
    </div>
	);
};

export default Header;
