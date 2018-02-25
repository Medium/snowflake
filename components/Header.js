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
      alignItems: 'center',
			height: '150px'
    },
    titleContainer: {
      width: '100%',
      marginRight: '-40px',
      display:'flex',
      justifyContent: 'center'
    },
    title: {
      fontSize:'3.5em',
      fontFamily:'serif',
      fontWeight:'bold',
      textAlign: 'center'
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
					li:hover {
						cursor: pointer;
					}
					.navMenu div {
						transition-timing-funciton: ease;
						transition: color .4s;
						color: #000;
					}
					.titleContainer h1 {
						z-index: -1;
						color: #fdfdfd;
					}
				`}</style>
			:
				<style jsx>{`
					.navMenu div {
						z-index: -1;
						color: #fff;
					}
					.titleContainer h1 {
						transition-timing-function: ease;
						transition: .4s;
						color: #000:
					}
				`}</style>
			}
			<ul className='navMenu' style={{width: '0px',
				padding:'0px',
				margin:'0px',
				listStyle:'none',
				height:'100%'}}>
				<div style={{width:'920px',
					minHeight:'100%',
					display:'flex',
					flexDirection:'column',
					justifyContent:'space-evenly',
					'fontSize':'2.5em',
					fontWeight:'bold',
					textAlign:'right',
					marginLeft:'-40px'}}>

					<Link Link href={{ pathname: '/quiz' }}><li className='navOption'>Take Quiz</li></Link>
					<li className='navOption'>Print Results</li>
				</div>
			</ul>
      <div className='titleContainer' style={styles.titleContainer}>
        <h1 style={styles.title}>
          Manager Companion
        </h1>
      </div>
			<Hamburger
        isOpen={props.menuOpen}
        hamburgerClick={props.hamburgerClick}>
      </Hamburger>
    </div>
	);
};

export default Header;
