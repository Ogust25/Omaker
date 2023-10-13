import * as React from 'react';
import '../styles/global.css';
import logoOmarker from '../images/blaze.png';
import gradientBlack from '../images/gradient_black.png';

export default function Index() {
	return (
		<main className="bg-main">
			<header className="h-screen flex">
				<nav className="w-5/6 fixed top-0 left-1/2 transform -translate-x-1/2 pt-5">
					<ul className="flex flex-row justify-evenly text-2xl font-bebas tracking-widest">
						<li className="hover:font-bold">PEINTURE</li>
						<li className="hover:font-bold">TATTOO</li>
						<li className="hover:font-bold">GRAPHISME</li>
					</ul>
				</nav>
				<img className="m-auto floatAnimation" src={logoOmarker} alt="logo" />
				<img
					src={gradientBlack}
					alt="styling_element"
					className="absolute bottom-0 right-0"
				/>
			</header>
			<section className="h-screen bg-bio relative">
				<img
					className="absolute top-10 right-0 w-1/5 invert"
					src={logoOmarker}
					alt="logo"
				/>
				<div className="verticalTxt flex text-orange-500 font-G-Ultra text-9xl overflow-hidden absolute bottom-0 left-7 h-full rotate-180 scale-x-200">
					<span className="infiniteAnimation whitespace-nowrap">
						BIOGRAPHIE
					</span>
					<span className="infiniteAnimation whitespace-nowrap">
						BIOGRAPHIE
					</span>
				</div>
				<div className="bg-white font-bebas text-2xl w-3/5 absolute right-0 -bottom-36 p-10 font-bold">
					<p className="mb-5">
						Artiste pluridisciplinaire, Omarker explore les supports et les
						médiums à travers sa pratique de la peinture, du tatouage et du
						design graphique.
					</p>
					<p className="mb-5">
						Son travail, à mi-chemin entre art urbain et design graphique
						contemporain, se caractérise par un ensemble d'éléments graphiques,
						de dynamiques et de lettres fragmentés qui s'oppose et se superpose,
						créant un rythme dans un ensemble abstrait.
					</p>
					<p>
						Omarker tente d'adapter son langage et ses codes au travers des
						supports et des techniques tout en conservant un aspect brut et un
						équilibre des éléments qui composent l'image.
					</p>
				</div>
			</section>
			<section className="h-screen bg-wall"></section>
			<section className="h-screen bg-invert"></section>
		</main>
	);
}
