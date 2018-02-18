// @flow

import React from 'react';

function HamburgerMenu(props: Props) {
	const width = `${props.width || 40}px`
	const height = `${props.height || 32}px`
	const halfHeight = `${parseInt(height.replace('px', '')) / 2}px`
	const isOpen = props.isOpen || false
	const strokeWidth = props.strokeWidth || 3
  const halfStrokeWidth = `-${strokeWidth / 2}px`
  const animationDuration = props.animationDuration || '0.4'
  const borderRadius = `2px`
  // const color = `${ isOpen ? '#ccc' : '#000' }`
  const color = '#000'

	const getTransformValue = (isOpen, defaultPos, rotateVal) => (
		`translate3d(0,${isOpen ? halfHeight : defaultPos},0) rotate(${isOpen ? `${rotateVal}deg` : '0'})`
	);

	const styles = {
		container: {
			width,
			height,
			position: 'relative',
			transform: `rotate(${props.rotate || 0}deg)`
		},
		lineBase: {
			display: 'block',
			height: `${strokeWidth}px`,
			width: '100%',
			background: color,
			transitionTimingFunction: 'ease',
			transitionDuration : `${animationDuration}s`,
			borderRadius: borderRadius,
			transformOrigin: 'center',
			position: 'absolute'
		},
		firstLine: {
			transform: getTransformValue(isOpen, 0, 45),
			marginTop: halfStrokeWidth,
		},
		secondLine: {
      transitionTimingFunction: 'ease-out',
			transitionDuration : `${animationDuration / 4}s`,
			opacity: isOpen ? '0' : '1',
			top: halfHeight,
			marginTop: halfStrokeWidth
		},
		thirdLine: {
			transform: getTransformValue(isOpen, height, -45),
			marginTop: halfStrokeWidth
		}
	};

	return (
		<div style={styles.container} onClick={props.hamburgerClick}>
		  <span style={Object.assign({}, styles.lineBase, styles.firstLine)}></span>
		  <span style={Object.assign({}, styles.lineBase, styles.secondLine)}></span>
		  <span style={Object.assign({}, styles.lineBase, styles.thirdLine)}></span>
		</div>
	);
};

export default HamburgerMenu;
