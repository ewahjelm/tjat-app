import { React } from 'react';
import { Message } from '.';

export default {
	title: 'Components/Message',
	component: Message,
}

export const Default = {};
export const WithText = { 
	args: {
		text : "Något, vadsomhelst"
	}
};
