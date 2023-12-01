import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import '../styles/global.css';
import logoOmarker from '../images/blaze.png';
import peinture from '../images/oeuvresOmarker/Algorithme.webp';
import peinture2 from '../images/oeuvresOmarker/Focus.webp';
import peinture3 from '../images/oeuvresOmarker/HeureBleue.webp';

export default function Gallery() {
	const [textColorClass, setTextColorClass] = useState('text-black');

	return (
		<main>
			<header className="flex relative z-50">
				<nav className="w-5/6 fixed top-0 left-1/2 transform -translate-x-1/2 pt-5">
					<ul
						className={`flex flex-row justify-evenly text-3xl font-bebas tracking-widest ${textColorClass}`}
					>
						<Link to="/" className="hover:font-bold hover:text-orange-500">
							HOME
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
			</header>
			<aside>
				<nav className="fixed top-1/3 left-5">
					<ul
						className={`flex flex-col justify-evenly text-3xl font-bebas tracking-widest ${textColorClass}`}
					>
						<Link to="#mur" className="hover:font-bold hover:text-orange-500">
							MUR
						</Link>
						<Link
							to="#oeuvre"
							className="hover:font-bold hover:text-orange-500"
						>
							OEUVRE
						</Link>
						<Link to="#expo" className="hover:font-bold hover:text-orange-500">
							EXPO
						</Link>
						<Link
							to="#workshop"
							className="hover:font-bold hover:text-orange-500"
						>
							WORKSHOP
						</Link>
					</ul>
				</nav>
			</aside>
			<section id="mur" className="pl-44 pt-32 relative flex justify-evenly">
				<img className="w-1/5" src={peinture} alt="peinture" />
				<img className="w-1/5" src={peinture} alt="peinture" />
				<img className="w-1/5" src={peinture} alt="peinture" />
			</section>
			<section id="oeuvre" className="pl-44 pt-32 relative flex justify-evenly">
				<img className="w-1/5" src={peinture2} alt="peinture" />
				<img className="w-1/5" src={peinture2} alt="peinture" />
				<img className="w-1/5" src={peinture2} alt="peinture" />
			</section>
			<section id="expo" className="pl-44 pt-32 relative flex justify-evenly">
				<img className="w-1/5" src={peinture3} alt="peinture" />
				<img className="w-1/5" src={peinture3} alt="peinture" />
				<img className="w-1/5" src={peinture3} alt="peinture" />
			</section>
			<section
				id="workshop"
				className="pl-44 pt-32 relative flex justify-evenly"
			>
				<img className="w-1/5" src={peinture} alt="peinture" />
				<img className="w-1/5" src={peinture} alt="peinture" />
				<img className="w-1/5" src={peinture} alt="peinture" />
			</section>
		</main>
	);
}
