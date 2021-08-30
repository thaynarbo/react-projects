import React, { useState } from "react";
import "./index.css";
import Imagem from "../imagem";
import TituloSubtitulo from "../titulo-subtitulo";
import Paragrafo from "../paragrafos";
import Botao from "../botao";

export default function Card(props) {
	const [filmes] = useState([
		{
			nome: "Capitão América: O primeiro vingador",
			imagemUrl:
				"https://play-lh.googleusercontent.com/9LAzip_XWe8eVWEUGCnSJ4xf706RmYtSu5bZRAfvqbs2aW6YVlLbPF7UVTfMpJKQUioKGw",
			description:
				"Steve Rogers é um jovem que participa de experiências visando a criação do supersoldado americano. Quando os oficiais militares conseguem transformá-lo em uma arma humana, eles percebem que não podem arriscar a vida do jovem nas batalhas de guerra.",
		},
		{
			nome: "Capitã Marvel",
			imagemUrl:
				"https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg",
			description:
				"Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. Ao tentar impedir uma invasão de larga escala na Terra, em 1995, ela tem memórias recorrentes de uma outra vida, como Carol Danvers, agente da Força Aérea norte-americana. ",
		},
		{
			nome: "O incrivel Hulk",
			imagemUrl:
				"https://br.web.img2.acsta.net/c_310_420/pictures/210/485/21048566_20131010182211313.jpg",
			description:
				"O cientista Bruce Banner se esconde no Brasil enquanto busca desesperadamente a cura da mutação que o transforma em um monstro incontrolável. Só assim ele poderá novamente levar uma vida normal e ficar ao lado da mulher que ama. ",
		},
		{
			nome: "Homem de Ferro",
			imagemUrl:
				"https://images-na.ssl-images-amazon.com/images/I/81vTHovrz%2BL._AC_SY606_.jpg",
			description:
				"Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores",
		},
		{
			nome: "Homem de Ferro 2",
			imagemUrl:
				"https://media.fstatic.com/SFp4c8GT3GTGYok7_526qDSHTns=/290x478/smart/media/movies/covers/2018/09/66432b37ed80464274a58239b695007f95c79155.jpg",
			description:
				"Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre pressão de todos os lados para compartilhar sua tecnologia com as forças armadas. Ele resiste para divulgar os segredos de sua inigualável armadura, com medo de que estas informações caiam nas mãos erradas.",
		},
	]);
	return (
		<>
			<ul className='container'>
				{filmes.map((f, index) => (
					<li key={index}>
						<TituloSubtitulo nome={f.nome} />
						<Imagem src={f.imagemUrl} />
						<Botao />
						<Paragrafo desc={f.description} />
						<button>Deletar</button>
					</li>
				))}
			</ul>
		</>
	);
}
