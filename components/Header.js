// @flow

import React from 'react'
import Hamburger from '../components/Hamburger'
import Link from 'next/link'



function Header(props: Props) {
  const open = false;

	const styles = {}

	return (
    <div style={{margin: '25px auto 0', textAlign: 'center', width: '100%'}}>

      <Hamburger
        isOpen={props.menuOpen}
        hamburgerClick={props.hamburgerClick}>
      </Hamburger>
      <Link href={{ pathname: '/quiz' }}>
        <h1 style={{marginTop: 0, paddingBottom: 20, borderBottom: '2px solid #ccc', fontSize:'3.5em', fontFamily:'serif', fontWeight:'bold', height:'80px'}}>
          Manager Companion
        </h1>
      </Link>
    </div>
	);
};

export default Header;
