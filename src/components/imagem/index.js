import React from "react";
import "./index.css";

function Imagem(props) {
	return (
		<div>
			<img src={props.src} className='imagem' alt='imagem filme' />
		</div>
	);
}

export default Imagem;
