import Hero from '/src/components/hero';
import AboutMe from '/src/components/AboutMe';
import '/src/App.css';

function App() {
	return (
		<>
			<div className="container">
				<Hero />
				<AboutMe />
			</div>
		</>
	);
}

export default App;
