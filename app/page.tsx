import { StoryHero } from '@/components/story-hero';
import { NovelPreview, GamePreview } from '@/components/project-dialogs';
import { LearningShowcase } from '@/components/learning-showcase';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          className="wordmark"
          href="#main"
          aria-label="Clayton Boen, back to top"
        >
          CLAYTON
          <span className="wordmark-last">
            BOEN
            <span className="brand-dot" aria-hidden="true">
              ✳
            </span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#learning">Learning</a>
          <a href="#television">Television</a>
          <a href="#writing">Fiction</a>
          <a href="#space-force">Space Force</a>
          <a href="#contact">Let’s talk ↗</a>
        </nav>
      </header>
      <main id="main">
        <StoryHero />
        <div className="credit-strip" aria-label="Selected experience">
          <p>WHERE I’VE WORKED</p>
          <span className="credit-university">University of Phoenix</span>
          <span className="credit-nick">Nickelodeon</span>
          <span className="credit-cruise">Cruise</span>
          <a href="https://www.imdb.com/name/nm2143401/">View film credits ↗</a>
        </div>
        <section
          className="selected section-pad"
          id="selected-work"
          aria-labelledby="selected-title"
        >
          <div className="section-intro">
            <div>
              <p className="eyebrow">SELECTED WORK / 01-04</p>
              <h2 id="selected-title">
                SELECTED
                <br />
                <span className="muted-heading">WORK.</span>
              </h2>
            </div>
            <p className="intro-copy">
              My work includes Nickelodeon television shows, university
              training, a novel, and an independent game. Each calls for a
              different approach, but I always start with the story.
            </p>
          </div>
          <div className="work-mosaic">
            <a href="#chaos-to-calm" className="work-panel work-learning">
              <div className="panel-top">
                <span>01 / LEARNING DESIGN</span>
                <span className="panel-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p className="learning-poster-type">
                CHAOS
                <br />
                <span>
                  TO
                  <br />
                  CALM.
                </span>
              </p>
              <div className="panel-bottom">
                <h3>Chaos to Calm</h3>
                <p>Advisor Stories · 15-second audio samples</p>
              </div>
            </a>
            <a href="#television" className="work-panel work-film">
              <img
                src="/media/television-frame-02.jpg"
                alt="A magical confrontation in Every Witch Way"
                width="1280"
                height="720"
                loading="lazy"
              />
              <div className="panel-top">
                <span>02 / TELEVISION & PRODUCTION</span>
                <span className="panel-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="panel-bottom">
                <span className="panel-brand">Nickelodeon</span>
                <h3>
                  Directing and
                  <br />
                  producing for television.
                </h3>
                <p>Director · Producer · Writer · Editor</p>
              </div>
            </a>
            <a href="#writing" className="work-panel work-book">
              <div className="book-panel-art">
                <img
                  src="/media/born-to-blood-cover-wrap.png"
                  alt="Born to Blood by Clayton Boen, book cover"
                  width="2000"
                  height="1414"
                  loading="lazy"
                />
              </div>
              <div className="panel-top">
                <span>03 / ORIGINAL FICTION</span>
                <span className="panel-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="panel-bottom">
                <span className="status-label">A NOVEL · COMING SOON</span>
                <h3>Born to Blood</h3>
                <p>The Last Knight Trilogy · Book One</p>
              </div>
            </a>
            <a href="#space-force" className="work-panel work-game">
              <img
                src="/media/space-force-emberwing.png"
                alt="Emberwing, a fiery orange fighter from Space Force"
                width="1024"
                height="1536"
                loading="lazy"
              />
              <div className="panel-top">
                <span>04 / INDEPENDENT GAME DEVELOPMENT</span>
                <span className="panel-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="panel-bottom">
                <span className="status-label">
                  BUILT IN UNITY · IN DEVELOPMENT
                </span>
                <h3>SPACE FORCE</h3>
                <p>My first independently developed game.</p>
              </div>
            </a>
          </div>
        </section>
        <section
          className="television-section section-pad"
          id="television"
          aria-labelledby="television-title"
        >
          <div className="section-number">
            <span>01 / DIRECTOR’S REEL</span>
            <span>TELEVISION & PRODUCTION</span>
          </div>
          <div className="film-heading">
            <h2 id="television-title">
              DIRECTOR’S
              <br />
              <span>REEL.</span>
            </h2>
            <div>
              <span className="nick-word">Nickelodeon</span>
              <p>
                My Nickelodeon work includes directing and producing episodes of
                Every Witch Way and Talia in the Kitchen, along with digital
                production for iCarly and Victorious.
              </p>
              <a className="text-link" href="#production-reel">
                Watch the reel <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
          <figure className="reel-feature" id="production-reel">
            <video
              controls
              playsInline
              preload="none"
              poster="/media/director-reel-poster.jpg"
              aria-label="Clayton Boen’s director’s reel"
            >
              <source
                src="/media/clayton-boen-director-reel.mp4"
                type="video/mp4"
              />
              Your browser does not support video.{' '}
              <a href="/media/clayton-boen-director-reel.mp4">
                Open the director’s reel.
              </a>
            </video>
            <figcaption>
              <span>CLAYTON BOEN / DIRECTOR’S REEL</span>
              <span>02:33 · TELEVISION</span>
            </figcaption>
          </figure>
          <div className="production-proof">
            <div className="big-number">
              <strong>
                80<span>+</span>
              </strong>
              <p>
                Half-hour episodes
                <br />
                directed / produced
              </p>
            </div>
            <div className="big-number">
              <strong>
                200<span>+</span>
              </strong>
              <p>
                People on crews
                <br />
                I’ve led
              </p>
            </div>
            <div className="production-copy">
              <h3>
                I know what it takes
                <br />
                to get a show made.
              </h3>
              <p>
                I’ve hired actors and crew, negotiated vendor deals, rented
                equipment, and managed schedules and budgets. A director has to
                make creative decisions while keeping the production moving.
              </p>
              <p>
                I’m an expert in Premiere Pro and After Effects, with extensive
                experience in editing, visual effects, sound, and composition.
              </p>
            </div>
          </div>
          <div className="show-credits">
            <div>
              <span>DIRECTING / PRODUCING</span>
              <h3>Every Witch Way</h3>
              <h3>Talia in the Kitchen</h3>
            </div>
            <div>
              <span>DIGITAL PRODUCTION</span>
              <h3>iCarly</h3>
              <h3>Victorious</h3>
            </div>
            <a
              className="text-link"
              href="https://www.imdb.com/name/nm2143401/"
            >
              Explore my IMDb <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="media-credit">
            Selected footage from my production work. Program footage ©
            respective rights holders.
          </p>
        </section>
        <LearningShowcase />
        <section
          className="book-section"
          id="writing"
          aria-labelledby="book-title"
        >
          <div className="book-art">
            <figure className="book-cover">
              <img
                src="/media/born-to-blood-cover-wrap.png"
                alt="Front cover of Born to Blood: a young woman faces an angel amid lightning over a dark waterfront"
                width="2000"
                height="1414"
                loading="lazy"
              />
            </figure>
            <span className="art-caption">
              THE LAST KNIGHT TRILOGY / BOOK ONE
            </span>
          </div>
          <div className="book-copy">
            <div className="section-number">
              <span>03 / THE READER</span>
              <span className="coming-soon">COMING SOON</span>
            </div>
            <p className="eyebrow book-eyebrow">THE LAST KNIGHT TRILOGY</p>
            <h2 id="book-title">
              Born to
              <br />
              Blood
            </h2>
            <p className="book-logline">
              She finally found a home.
              <br />
              Then the darkness found her.
            </p>
            <p>
              After ten years in foster care, Phoenix Wright finally has a
              family waiting for her. Then a demon comes to kill her. She
              discovers she is the final Knight in a hidden war between Heaven
              and the darkness beneath the modern world.
            </p>
            <p>
              The first book in The Last Knight Trilogy: young-adult fantasy,
              supernatural horror, dark humor, and a found family worth fighting
              for.
            </p>
            <NovelPreview />
            <div className="author-note">
              <span>WRITING THE NOVEL</span>
              <p>
                Writing a novel lets me spend more time with a character than an
                episode allows. Phoenix’s story follows what happens when
                someone who has learned not to trust finally has people to lose.
              </p>
            </div>
          </div>
        </section>
        <section
          className="game-section section-pad"
          id="space-force"
          aria-labelledby="game-title"
        >
          <div className="section-number">
            <span>04 / THE PLAYER</span>
            <span>INDEPENDENT GAME DEVELOPMENT</span>
          </div>
          <div className="game-intro">
            <div>
              <p className="eyebrow">AN INDEPENDENT UNITY PROJECT</p>
              <h2 id="game-title">
                SPACE
                <br />
                <span>FORCE</span>
                <span className="game-period">.</span>
              </h2>
              <div className="game-status">
                <span /> IN DEVELOPMENT / UNITY
              </div>
            </div>
            <img
              className="game-ship"
              src="/media/space-force-emberwing.png"
              alt="Emberwing fighter with glowing engines and orange armor"
              width="1024"
              height="1536"
              loading="lazy"
            />
          </div>
          <div className="game-showcase">
            <div className="game-copy">
              <h3>
                I wanted to make a game.
                <br />
                So I learned how.
              </h3>
              <p>
                I taught myself agentic coding to build Space Force in Unity.
                I’ve worked through the gameplay, progression systems, and
                interface, testing and revising the game as I go.
              </p>
              <p>
                That includes decisions about how a fighter handles, what an
                upgrade changes, and what the player needs to see on screen. The
                footage here shows the game in development.
              </p>
              <div className="capability-tags">
                <span>Creative direction</span>
                <span>Unity</span>
                <span>Agentic coding</span>
                <span>Game systems</span>
                <span>UI / player experience</span>
              </div>
              <GamePreview />
              <p className="game-note">
                Actual development footage and in-game captures.
              </p>
            </div>
            <div className="game-screens">
              <figure className="phone-frame flight-screen">
                <img
                  src="/media/space-force-gameplay.png"
                  alt="Space Force coastal flight gameplay, with enemy fighters and player controls"
                  width="390"
                  height="844"
                  loading="lazy"
                />
                <figcaption>01 / IN FLIGHT</figcaption>
              </figure>
              <figure className="phone-frame fighter-screen">
                <img
                  src="/media/space-force-fighter.png"
                  alt="Space Force fighter selection screen featuring Emberwing and its statistics"
                  width="390"
                  height="844"
                  loading="lazy"
                />
                <figcaption>02 / IN THE HANGAR</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section
          className="about-section section-pad"
          aria-labelledby="about-title"
        >
          <div className="portrait-wrap">
            <img
              src="/media/clayton-boen.jpg"
              alt="Clayton Boen"
              width="1853"
              height="2471"
              loading="lazy"
            />
            <span>CLAYTON BOEN / MESA, ARIZONA</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">THE PERSON BEHIND THE WORK</p>
            <h2 id="about-title">
              I’M CLAYTON.
              <br />I LIKE MAKING
              <br />
              <span>
                COMPLICATED
                <br />
                THINGS WORK.
              </span>
            </h2>
            <p>
              I spent years directing and producing television before moving
              into instructional design. Working with actors, writers, editors,
              and large crews taught me how to explain an idea and get people
              working toward it.
            </p>
            <p>
              I still enjoy the hands-on work. I can write the script, build the
              course, direct the shoot, or handle the edit. I’m comfortable
              leading a team and just as comfortable doing the work myself.
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/clayton-d-boen"
            >
              View my experience on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section
          className="contact-section section-pad"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-top">
            <p className="eyebrow">GET IN TOUCH</p>
            <span>OPEN TO OPPORTUNITIES</span>
          </div>
          <h2 id="contact-title">
            HAVE A PROJECT
            <br />
            <a href="mailto:claytonboen@gmail.com">
              IN MIND?<span aria-hidden="true">↗</span>
            </a>
          </h2>
          <div className="contact-bottom">
            <a href="mailto:claytonboen@gmail.com">claytonboen@gmail.com</a>
            <p>Remote · Greater Phoenix</p>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a href="#main">
          CLAYTON BOEN <span aria-hidden="true">↑</span>
        </a>
        <span>LEARNING. FILM. FICTION. PLAY.</span>
        <div>
          <a href="https://www.linkedin.com/in/clayton-d-boen">LinkedIn ↗</a>
          <a href="https://www.imdb.com/name/nm2143401/">IMDb ↗</a>
        </div>
        <p>© {new Date().getFullYear()} Clayton Boen</p>
      </footer>
    </>
  );
}
