import { ScenarioDemo } from '@/components/scenario-demo';
import { StoryHero } from '@/components/story-hero';
import { NovelPreview, GamePreview } from '@/components/project-dialogs';

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
          <p>STORIES BUILT FOR</p>
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
              <p className="eyebrow">THE SELECTED WORK / 01—04</p>
              <h2 id="selected-title">
                FOUR MEDIUMS.
                <br />
                <span className="muted-heading">ONE STORY LENS.</span>
              </h2>
            </div>
            <p className="intro-copy">
              A learner facing a difficult conversation. An actor finding the
              moment. A reader turning the page. A player choosing one more
              round.
              <br />
              <strong>I build for the person on the other side.</strong>
            </p>
          </div>
          <div className="work-mosaic">
            <a href="#learning" className="work-panel work-learning">
              <div className="panel-top">
                <span>01 / LEARNING DESIGN</span>
                <span className="panel-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p className="learning-poster-type">
                LESS
                <br />
                INFORMATION
                <br />
                OVERLOAD.
                <br />
                <span>
                  MORE “I
                  <br />
                  GET IT.”
                </span>
              </p>
              <div className="panel-bottom">
                <h3>Learning that moves people.</h3>
                <p>Finance New Hire · Scenario design · Storyline</p>
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
                  From the page
                  <br />
                  to the final frame.
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
                <p>From “what if” to a game you can see in motion.</p>
              </div>
            </a>
          </div>
        </section>
        <section
          className="learning-section section-pad"
          id="learning"
          aria-labelledby="learning-title"
        >
          <div className="section-number">
            <span>01 / THE LEARNER</span>
            <span>INSTRUCTIONAL DESIGN</span>
          </div>
          <div className="learning-lead">
            <h2 id="learning-title">
              MAKE IT
              <br />
              <span>MAKE SENSE.</span>
            </h2>
            <div>
              <p className="lead-copy">
                Complex rules. Real people.
                <br />A clear way forward.
              </p>
              <p>
                At the University of Phoenix, I designed learning for Finance
                New Hire: financial aid, tuition, military education benefits,
                and the federal and state requirements behind student-facing
                decisions.
              </p>
              <p>
                My job is to turn that complexity into something an advisor can
                actually use—in the conversation, under pressure, when getting
                it right matters.
              </p>
              <div className="capability-tags">
                <span>Instructional design</span>
                <span>Regulated content</span>
                <span>Articulate Storyline</span>
                <span>Scenario writing</span>
              </div>
            </div>
          </div>
          <div className="learning-workbench" id="scenario">
            <div className="learning-narrative">
              <p className="eyebrow">FEATURED INTERACTIVE / 3 DECISIONS</p>
              <h3>
                One call.
                <br />A human response.
              </h3>
              <p>
                “Where is my payment?” can be a question about money—and a
                conversation about fear, trust, and what happens next.
              </p>
              <p>
                I use branching dialogue to put advisors inside that moment.
                Choices have consequences. Feedback explains why. The learner
                gets another chance to get it right.
              </p>
              <p className="try-label">
                <span aria-hidden="true">↗</span> Take the advisor’s seat.
              </p>
            </div>
            <ScenarioDemo />
          </div>
          <div className="military-case" id="military">
            <div>
              <p className="eyebrow">BEYOND A SINGLE SCENARIO</p>
              <h3>
                Better support for
                <br />
                military-affiliated students.
              </h3>
              <p>
                My course redevelopment and collaborative design work connected
                benefit terminology, resource navigation, and realistic advising
                practice. The learning journey continues beyond the course.
              </p>
            </div>
            <ol className="learning-sequence">
              <li>
                <span>01</span>
                <div>
                  <h4>Find the answer.</h4>
                  <p>
                    Pre-work builds confidence locating the right source and
                    explaining it in plain language.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h4>Use it in context.</h4>
                  <p>
                    Facilitated scenarios connect the resource to a student’s
                    actual question.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h4>Make it stick.</h4>
                  <p>
                    Designed 30- and 60-day reinforcement returns to the
                    decisions that need practice.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <details className="project-credits">
            <summary>
              Project details & credits <span aria-hidden="true">+</span>
            </summary>
            <div>
              <p>
                <strong>My role:</strong> Storyline course redevelopment,
                scenario adaptation, dialogue, and collaborative instructional
                design. Tools include Articulate Storyline, Word, and Microsoft
                Forms.
              </p>
              <p>
                <strong>Military learning design collaborators:</strong> Amber
                Holt Geary, Clayton Boen, Devin Nordmeyer, and Ivan Nicholson.
              </p>
              <p>
                <strong>Interactive sample:</strong> Condensed portfolio
                adaptation of my finance-advisor scenario work. Original
                Storyline template by Bianca Woods. Fictional practice content,
                not financial advice.
              </p>
            </div>
          </details>
        </section>
        <section
          className="television-section section-pad"
          id="television"
          aria-labelledby="television-title"
        >
          <div className="section-number">
            <span>02 / THE AUDIENCE</span>
            <span>TELEVISION & PRODUCTION</span>
          </div>
          <div className="film-heading">
            <h2 id="television-title">
              THE STORY.
              <br />
              THE CREW.
              <br />
              <span>THE CUT.</span>
            </h2>
            <div>
              <span className="nick-word">Nickelodeon</span>
              <p>
                Big ideas only matter if you can bring them to life. I’ve done
                it from the script through the shoot, the edit, the sound, and
                the final delivery.
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
              aria-label="Clayton Boen’s television production reel"
            >
              <source
                src="/media/clayton-boen-director-reel.mp4"
                type="video/mp4"
              />
              Your browser does not support video.{' '}
              <a href="/media/clayton-boen-director-reel.mp4">
                Open the production reel.
              </a>
            </video>
            <figcaption>
              <span>CLAYTON BOEN / PRODUCTION REEL</span>
              <span>02:33 · ARCHIVE SELECTS</span>
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
                Creative vision.
                <br />
                Production backbone.
              </h3>
              <p>
                Actors, crew, vendors, equipment, locations, schedules, and
                budgets. I negotiate the deal, solve the production problem, and
                keep the story intact.
              </p>
              <p>
                Expert editing, motion graphics, visual effects, sound editing,
                and composition—with Premiere Pro and After Effects at the heart
                of the toolkit.
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
              family waiting for her. Then a demon comes to kill her—and she
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
              <span>THE SAME STORY INSTINCT, ON THE PAGE.</span>
              <p>
                Character. Tension. Pacing. The carefully chosen detail that
                makes you lean closer. Long-form fiction gives those instincts a
                world of their own.
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
              <p className="eyebrow">
                CREATED FROM SCRATCH. LEARNED ALONG THE WAY.
              </p>
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
                I taught myself agentic coding to build Space Force in
                Unity—taking an idea through gameplay, progression, interface
                design, and repeated iteration.
              </p>
              <p>
                It brings the same instincts I use in learning and production
                into an interactive world: clear feedback, meaningful choices, a
                strong visual identity, and a reason to keep going.
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
              A STORYTELLER.
              <br />A MAKER.
              <br />
              <span>
                A GET-IT-DONE
                <br />
                PERSON.
              </span>
            </h2>
            <p>
              I’m Clayton. I’ve led television crews, designed university
              learning, written a novel, and taught myself to build a game. The
              through-line isn’t a job title. It’s turning an idea into an
              experience that means something to somebody.
            </p>
            <p>
              I can develop the concept, write the script, design the learning,
              direct the talent, negotiate the resources, and get the edit
              across the finish line.
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/clayton-d-boen"
            >
              The full professional story <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section
          className="contact-section section-pad"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-top">
            <p className="eyebrow">YOUR NEXT PROJECT / OUR NEXT CHAPTER</p>
            <span>OPEN TO OPPORTUNITIES</span>
          </div>
          <h2 id="contact-title">
            LET’S MAKE
            <br />
            <a href="mailto:claytonboen@gmail.com">
              IT MATTER.<span aria-hidden="true">↗</span>
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
