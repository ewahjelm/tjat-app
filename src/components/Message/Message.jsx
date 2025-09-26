import React from 'react';
import styles from './Message.module.css';

const Message = ( {text = "test", sender = "NN"}) => {

	return(
		<>
			{sender !== "me" ? (
		<div className = { `${styles.bubble} ${styles.incoming}`}>
			{text}
			</div>
			) : (
				<div className = { `${styles.bubble} ${styles.outgoing}`}>
					{text}
				</div> 
			)}
		</>
	)
}

export default Message ;
