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
			<div className="h-screen bg-red-500"></div>
		</main>
	);
}
