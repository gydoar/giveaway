import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './style.scss';

/**
 * Internal dependencies
 */
 import edit from "./edit";
 import save from './save';


registerBlockType('create-block/giveaway', {

	edit,
	save,
});

/**
 * Child Blocks
 */

import { metadata, name, setting } from './blocks/social-row';
registerBlockType( { name, ...metadata }, setting );