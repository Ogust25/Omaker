import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import '../styles/global.css';
import Loader from '../components/Loader';
import Image from '../components/Image';

export default function Gallery() {
	const [textColorClass, setTextColorClass] = useState('text-black');
	const [isLoading, setIsLoading] = useState(true);
	const [oeuvres, setOeuvres] = useState([]);
	const [murs, setMurs] = useState([]);
	const [workshops, setWorkshops] = useState([]);

	useEffect(() => {
		fetch('http://localhost:1337/api/peintures?populate=categories,image', {
			method: 'GET',
			headers: {
				Accept: 'Application.json',
			},
		})
			.then(res => res.json())
			.then(response => {
				response.data.forEach(item => {
					switch (item.attributes.categories.data[0].attributes.nom) {
						case 'oeuvre':
							setOeuvres(prevOeuvres => {
								if (!prevOeuvres.some(oeuvre => oeuvre.id === item.id)) {
									return [...prevOeuvres, item];
								}
								return prevOeuvres;
							});
							break;
						case 'mur':
							setMurs(prevMurs => {
								if (!prevMurs.some(mur => mur.id === item.id)) {
									return [...prevMurs, item];
								}
								return prevMurs;
							});
							break;
						case 'workshop':
							setWorkshops(prevWorkshops => {
								if (!prevWorkshops.some(workshop => workshop.id === item.id)) {
									return [...prevWorkshops, item];
								}
								return prevWorkshops;
							});
							break;
					}
				});
				setIsLoading(false);
			});
	}, []);

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
				{isLoading ? (
					<Loader />
				) : (
					oeuvres.map((oeuvre: any) => (
						<Image content={oeuvre} key={oeuvre.id} />
					))
				)}
			</section>
			<section id="oeuvre" className="pl-44 pt-32 relative flex justify-evenly">
				{isLoading ? (
					<Loader />
				) : (
					murs.map((mur: any) => <Image content={mur} key={mur.id} />)
				)}
			</section>
			<section id="expo" className="pl-44 pt-32 relative flex justify-evenly">
				<p>text avec les expos</p>
			</section>
			<section
				id="workshop"
				className="pl-44 pt-32 relative flex justify-evenly"
			>
				{isLoading ? (
					<Loader />
				) : (
					workshops.map((workshop: any) => (
						<Image content={workshop} key={workshop.id} />
					))
				)}
			</section>
		</main>
	);
}
