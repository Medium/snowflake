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
      zIndex:`${ props.menuOpen ? '-1' : 'auto'}`,
      fontSize:'3.5em',
      fontFamily:'serif',
      fontWeight:'bold',
      textAlign: 'center',
      transitionTimingFunction: 'ease',
			transitionDuration: '.4s',
      color: `${ props.menuOpen ? '#fff' : '#000'}`,
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

			{ props.menuOpen ?
				<style jsx>{`
					.navMenu div {
						transition-timing-funciton: ease;
						transition: color 1s;
						color: #000;
					}
				`}</style>
			:
			<style jsx>{`
				.navMenu div {
					z-index: -1;
					color: #fff;
				}
			`}</style>
			}

      <Hamburger
        isOpen={props.menuOpen}
        hamburgerClick={props.hamburgerClick}>

      </Hamburger>
      <div>
        <ul className='navMenu' style={{width: '0px', padding:'0px', margin:'0px', marginLeft:'-40px', listStyle:'none'}}>
          <div className='navMenuOveride' style={{width:'920px',
              display:'flex',
							flexDirection:'column',
              justifyContent:'space-around',
              'fontSize':'2.5em',
              fontWeight:'bold',
              marginLeft:'60px'}}>
            <li className='navOption'>Take Quiz</li>
            <li className='navOption'>Print Results</li>
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
