import React from "react";
import Header from "./components/Header";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import About from "./components/home/About";
import Team from "./components/home/Team";

function App() {
	return (
		<div className="min-h-screen font-sans">
			<Header />
			<main>
				<Hero />
				<Services />
				<About />
				<Team />
			</main>
		</div>
	);
}

export default App;
