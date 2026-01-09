import bc from '../assets/bc.ico';

function AboutMe() {
	return (
		<>
			<main className="about-me">
				<section className="about-header">
					<h1>Lucas Mattos</h1>
					<p>M.A Student - Philosophy Department</p>
				</section>
				<section className="buttons flex">
					<a
						href="https://www.bc.edu/bc-web/schools/morrissey/departments/philosophy/people/ma-students/Lucas-Mattos.html"
						target="_blank"
						className="flex"
					>
						<img src={bc} />
						<span>Boston College</span>
					</a>
				</section>
				<section className="bio-main">
					<h2>Biography</h2>
					<p>
						{
							'Prior to my arrival at Boston College in 2025, I received my B.A. in Philosophy at Kennesaw State University. As an undergraduate, I developed interests in Christian existentialism (S. Kierkegaard, M. de Unamuno), phenomenology, and poststructuralism (J.F. Lyotard, J. Derrida). Broadly speaking, my research interests lie in questions of communicability and visibility: What can be said? How must we say it? In what ways will we always run up against certain limits in saying and showing? I aim to tackle these questions with reference to formal and stylistic experimentation in academic writing, especially as demonstrated by Derrida (see, for instance Clang, The Post Card, and The Truth in Painting).'
						}
					</p>
				</section>
			</main>
		</>
	);
}

export default AboutMe;
