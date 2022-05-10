/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('create-block/giveaway', {

	/**
	 * Declarate Attributes to use
	 */
	attributes:{
		title:{
			type:'string',
			source:'html',
			selector:'h2'
		},
		titleColor:{
			type:'string',
			default:'#333',
		},
		description:{
			type:'string',
			source:'html',
			selector:'p'
		},
		descriptionColor:{
			type:'string',
			default:'#333',
		},
		accounts:{
			default:{
				twitter: false,
				tweet:false,
				youtube:false,
				facebook:false
			}
		},
		twitter:{
			default:{
				text:'',
				account:''
			}
		},
		tweet:{
			default:{
				text:'',
				message:'',
				url:''
			}
		},
		youtube:{
			default:{
				text:'',
				url:''
			}
		},
		facebook:{
			default:{
				text:'',
				url:''
			}
		}
		// Immediate Reward: Download Link/Button
		// Enter Giveaway: Store the user's email and actions
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
});
