import BarkBackground from "./components/BarkBackground";
import "./App.css";

const work = [
  {
    title: "Music",
    description: "Albums, EPs, and live performances at the edge of sound and space.",
    href: "https://soundcloud.com/graciellyelly",
  },
  {
    title: "Photography",
    description: "Landscape and portrait work — quiet frames, natural light.",
    href: "#photography",
  },
  {
    title: "Technology",
    description: "Audio engineering, programming, and creative tools for expression.",
    href: "#about",
  },
];

function App() {
  return (
    <div className="site">
      <BarkBackground overlayOpacity={0.48} />

      <header className="nav">
        <a href="#" className="nav__brand">
          Gracielly
        </a>
        <nav className="nav__links" aria-label="Main">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero" id="home">
          <p className="hero__eyebrow">Musician & Creative</p>
          <h1 className="hero__title">
            Rooted in nature,
            <br />
            <em>built for connection.</em>
          </h1>
          <p className="hero__lead">
            Using authentic expression to bridge music, technology, and
            community. Currently at Stanford University.
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              Explore work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section__header">
            <p className="section__eyebrow">Selected</p>
            <h2 className="section__title">Work</h2>
          </div>
          <div className="cards">
            {work.map((item) => (
              <a key={item.title} href={item.href} className="card">
                <h3 className="card__title">{item.title}</h3>
                <p className="card__desc">{item.description}</p>
                <span className="card__link">View →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section section--split" id="about">
          <div>
            <p className="section__eyebrow">About</p>
            <h2 className="section__title">
              Music × technology × <em>community</em>
            </h2>
          </div>
          <div className="prose">
            <p>
              I make work that sits at the intersection of sound, image, and
              code — always with an eye toward what feels honest and alive.
            </p>
            <p>
              Experienced in audio engineering, programming, and music production.
              Fellowships include the Chappell Lougee Fellowship and the Institute
              for Diversity in the Arts.
            </p>
          </div>
        </section>

        <section className="section" id="photography">
          <div className="section__header">
            <p className="section__eyebrow">Visual</p>
            <h2 className="section__title">Photography</h2>
          </div>
          <p className="section__intro">
            A growing archive of landscapes and portraits — shot on Canon, edited
            with patience.
          </p>
        </section>

        <section className="section section--contact" id="contact">
          <div>
            <p className="section__eyebrow">Contact</p>
            <h2 className="section__title">
              Let&apos;s make something <em>together.</em>
            </h2>
          </div>
          <div className="contact">
            <a href="mailto:grracielly@gmail.com" className="contact__email">
              grracielly@gmail.com
            </a>
            <a href="mailto:gabreu@stanford.edu" className="contact__email">
              gabreu@stanford.edu
            </a>
            <div className="contact__social">
              <a
                href="https://soundcloud.com/graciellyelly"
                target="_blank"
                rel="noreferrer"
              >
                SoundCloud
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Gracielly</span>
        <span className="footer__note">Made with care.</span>
      </footer>
    </div>
  );
}

export default App;
