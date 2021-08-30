import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function Botao(props) {
	return (
		<div>
			<button type='submit' className='btn'>
				trailer
			</button>
		</div>
	);
}

function BotaoDelete(props) {
	return (
		<div>
			<button className='btn-delete' onClick={props.onClick}>
				Deletar
				<span>
					<FontAwesomeIcon icon={faTrashAlt} />
				</span>
			</button>
		</div>
	);
}

function BotaoEdit(props) {
	return (
		<div>
			<button className='btn-edit' onClick={props.onClick}>
				Editar
				<span>
					<FontAwesomeIcon icon={faEdit} />
				</span>
			</button>
		</div>
	);
}

export default Botao;
export { BotaoDelete, BotaoEdit };
