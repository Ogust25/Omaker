import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import '../styles/global.css';
import ContactForm from '../modules/contactForm';
import logoOmarker from '../images/blaze.png';
import gradientBlack from '../images/gradient_black.png';
import gradientWhite from '../images/gradient_white.png';
import peinture from '../images/oeuvresOmarker/Algorithme.webp';
import peinture2 from '../images/oeuvresOmarker/Focus.webp';
import peinture3 from '../images/oeuvresOmarker/HeureBleue.webp';

export default function Index() {
	const [textColorClass, setTextColorClass] = useState('text-black');

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > window.innerHeight) {
				setTextColorClass('text-white');
			} else {
				setTextColorClass('text-black');
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<main className="bg-main">
			<header className="h-screen flex relative z-50">
				<nav className="w-5/6 fixed top-0 left-1/2 transform -translate-x-1/2 pt-5">
					<ul
						className={`flex flex-row justify-evenly text-3xl font-bebas tracking-widest ${textColorClass}`}
					>
						<Link
							to="/gallery"
							className="hover:font-bold hover:text-orange-500"
						>
							PEINTURE
						</Link>
						<Link
							to="/gallery"
							className="hover:font-bold hover:text-orange-500"
						>
							TATTOO
						</Link>
						<Link
							to="/gallery"
							className="hover:font-bold hover:text-orange-500"
						>
							GRAPHISME
						</Link>
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

			<section className="h-screen bg-wall flex pt-20">
				<img
					src={peinture2}
					alt="Peinture de Omarker"
					className="m-auto h-2/3"
				/>
				<img
					src={peinture}
					alt="Peinture de Omarker"
					className="m-auto h-2/3"
				/>
				<img
					src={peinture3}
					alt="Peinture de Omarker"
					className="m-auto h-2/3"
				/>
			</section>

			<section className="h-screen bg-invert relative overflow-hidden flex ">
				<img
					src={gradientWhite}
					alt="styling_element"
					className="absolute top-0 left-0"
				/>
				<div className="verticalTxt flex text-white font-G-Ultra text-9xl overflow-hidden absolute bottom-0 right-7 h-full scale-x-200">
					<span className="infiniteAnimation whitespace-nowrap">CONTACT</span>
					<span className="infiniteAnimation whitespace-nowrap">CONTACT</span>
					<span className="infiniteAnimation whitespace-nowrap">CONTACT</span>
				</div>

				<ContactForm />

				<footer className="flex flex-col items-center justify-center pt-4 pb-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 invert">
					<img className="w-1/5" src={logoOmarker} alt="logo Omarker" />
					<p className="font-G-Medium text-sm">OMARKER | Tout droit réservé.</p>
				</footer>
			</section>
		</main>
	);
}
