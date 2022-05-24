import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './style.scss';

/**
 * Internal dependencies
 */
 import edit from "./edit";
 import save from './save';


registerBlockType('create-block/giveaway', {
	icon:{
		src:(
			<svg width="256px" height="256px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
			<path d="M148,72V184a12,12,0,0,1-24,0V72a12,12,0,0,1,24,0Zm80-12H180a12.0006,12.0006,0,0,0-12,12V184a12,12,0,0,0,24,0V140h24a12,12,0,0,0,0-24H192V84h36a12,12,0,0,0,0-24ZM96,120H72a12,12,0,0,0,0,24H84v8a20,20,0,0,1-40,0V104a20.00476,20.00476,0,0,1,39.37109-5.00879,11.99988,11.99988,0,0,0,23.24219-5.98242A44.00462,44.00462,0,0,0,20,104v48a44,44,0,0,0,88,0V132A12.0006,12.0006,0,0,0,96,120Z"/>
			</svg>
	),
	background:'#f03',
	foreground:'#fff'
},
	edit,
	save,
});

/**
 * Child Blocks
 */

import { metadata, name, setting } from './blocks/social-row';
registerBlockType( { name, ...metadata }, setting );