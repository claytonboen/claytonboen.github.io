import { ScenarioDemo } from '@/components/scenario-demo';

const work = [
  {
    n: '01',
    tag: 'LEARNING DESIGN / REGULATED CONTENT',
    title: 'Helping advisors navigate military education benefits.',
    copy: 'Course redevelopment, practical scenarios, and reinforcement for the conversations where accurate guidance matters.',
    href: '#military',
  },
  {
    n: '02',
    tag: 'SCENARIO DESIGN / COMMUNICATION',
    title: 'An upset caller. A decision that changes the conversation.',
    copy: 'Branching practice that connects empathy, account research, and clear next steps.',
    href: '#scenario',
  },
];
export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#">
          CLAYTON BOEN<span>Learning designer · Writer · Director</span>
        </a>
        <nav aria-label="Main">
          <a href="#learning">Learning</a>
          <a href="#television">Television</a>
          <a href="#writing">Writing</a>
          <a href="mailto:claytonboen@gmail.com">Contact ↗</a>
        </nav>
      </header>
      <main id="main">
        <section className="hero">
          <p className="eyebrow">
            INSTRUCTIONAL DESIGN + ENTERTAINMENT PRODUCTION
          </p>
          <h1>
            Instructional design,
            <br />
            <em>with a director’s eye.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              I’m Clayton Boen. I turn complex information into learning people
              can use—and stories people want to watch. My experience spans
              university finance training, autonomous-vehicle operations, and
              Nickelodeon television.
            </p>
            <a className="text-link" href="#learning">
              Explore selected work ↓
            </a>
          </div>
          <div className="experience-strip">
            <span>University of Phoenix</span>
            <span>GM Cruise</span>
            <span className="nick">Nickelodeon</span>
          </div>
        </section>
        <section id="learning" className="section">
          <p className="eyebrow">01 / LEARNING & COMPLIANCE</p>
          <h2>
            Built around the next
            <br />
            real-world decision.
          </h2>
          <div className="work-grid">
            {work.map((w) => (
              <a className="work-card" href={w.href} key={w.n}>
                <div className="work-card-top">
                  <span>{w.n}</span>
                  <span>↗</span>
                </div>
                <p className="eyebrow">{w.tag}</p>
                <h3>{w.title}</h3>
                <p>{w.copy}</p>
                <span className="card-link">Explore the case study →</span>
              </a>
            ))}
          </div>
        </section>
        <section id="military" className="case section">
          <p className="eyebrow">CASE STUDY / UNIVERSITY LEARNING</p>
          <h2>
            Military-affiliated
            <br />
            student support.
          </h2>
          <dl className="project-facts">
            <div>
              <dt>Audience</dt>
              <dd>Finance advisors & academic counselors</dd>
            </div>
            <div>
              <dt>My contribution</dt>
              <dd>Course redevelopment & collaborative design</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>Storyline · Word · Microsoft Forms</dd>
            </div>
          </dl>
          <div className="case-columns">
            <h3>Clarity under pressure.</h3>
            <div>
              <p>
                Supporting military-affiliated students asks advisors to connect
                unfamiliar terminology, changing requirements, institutional
                resources, and an individual student’s situation.
              </p>
              <p>
                My work includes redevelopment and maintenance of an existing
                Finance New Hire Storyline course, alongside collaborative
                design of academic-counselor practice and reinforcement. The
                focus is practical: clarify the situation, consult the right
                resource, and communicate an accurate next step.
              </p>
              <h4>The design decision</h4>
              <p>
                Don’t turn a changing policy environment into a memory test.
                Give learners repeated practice finding information, locating
                its supporting detail, and explaining it in student-friendly
                language.
              </p>
            </div>
          </div>
          <ol className="learning-path">
            <li>
              <span>01 / PRE-WORK</span>
              <h4>Find & explain</h4>
              <p>
                Resource-navigation prompts ask for the source, exact location,
                summary, and a plain-language explanation.
              </p>
            </li>
            <li>
              <span>02 / LIVE PRACTICE</span>
              <h4>Apply & discuss</h4>
              <p>
                The design plan uses facilitated scenarios to connect resource
                knowledge with realistic advising conversations.
              </p>
            </li>
            <li>
              <span>03 / REINFORCEMENT</span>
              <h4>Revisit & transfer</h4>
              <p>
                Planned 30- and 60-day practice returns to challenging cases
                after the initial learning experience.
              </p>
            </li>
          </ol>
          <div className="case-columns">
            <h3>
              Designed for use.
              <br />
              Checked in practice.
            </h3>
            <div>
              <p>
                The archive includes a revised Storyline course, collaborative
                design documents, facilitator materials, and a completed
                resource-navigation form. A recorded QA pass verified five
                resource sections, twenty required long-answer fields,
                navigation, a successful test submission, and preservation of
                existing settings.
              </p>
              <p>
                I used Codex under my supervision for the documented Forms
                revision and QA workflow. That is separate from the original
                Storyline authoring; it is not a claim that AI built the entire
                course.
              </p>
              <p className="note">
                The reinforcement sequence is a design deliverable, not a
                claimed measured outcome. Internal systems, student information,
                and employer-owned source files are not published here.
              </p>
            </div>
          </div>
        </section>
        <section id="scenario" className="case section">
          <p className="eyebrow">CASE STUDY / BRANCHING SCENARIO</p>
          <h2>
            De-escalating a<br />
            difficult conversation.
          </h2>
          <dl className="project-facts">
            <div>
              <dt>Audience</dt>
              <dd>Finance advisors</dd>
            </div>
            <div>
              <dt>My contribution</dt>
              <dd>Scenario adaptation & dialogue</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>Storyline original · Web adaptation below</dd>
            </div>
          </dl>
          <div className="case-columns">
            <h3>
              Make a choice.
              <br />
              See the consequence.
            </h3>
            <div>
              <p>
                A frustrated student needs help understanding a delayed payment.
                The advisor must acknowledge the impact, verify information,
                research the issue, and avoid promising an outcome they cannot
                control.
              </p>
              <p>
                I adapted an existing Storyline scenario template for
                finance-advisor practice, using dialogue and branching
                consequences to make communication choices tangible.
              </p>
              <h4>The design decision</h4>
              <p>
                Put the learner inside the conversation. Contrast a useful
                response with a plausible shortcut, then explain the
                consequence. The practice below distills three of those
                decisions into a short, keyboard-accessible web experience.
              </p>
            </div>
          </div>
          <ScenarioDemo />
          <p className="note">
            Source credit: the Storyline package builds on an existing template
            credited to Bianca Woods. This condensed web version is a new
            portfolio demonstration, not an export of the employer’s course or
            evidence of learner-outcome gains.
          </p>
        </section>
        <section id="television" className="section television">
          <p className="eyebrow">02 / TELEVISION & PRODUCTION</p>
          <h2>
            From the page
            <br />
            to the final frame.
          </h2>
          <p className="section-intro">
            Nickelodeon production experience, hands-on post-production
            expertise, and the judgment to lead a crew from concept through
            delivery.
          </p>
          <figure className="reel">
            <video
              controls
              playsInline
              preload="none"
              poster="/media/director-reel-poster.jpg"
              aria-label="Clayton Boen archive production reel"
              aria-describedby="reel-description"
            >
              <source
                src="/media/clayton-boen-director-reel.mp4"
                type="video/mp4"
              />
              Your browser does not support this video.{' '}
              <a href="/media/clayton-boen-director-reel.mp4">Open the reel</a>.
            </video>
            <figcaption id="reel-description">
              Archive production reel · 2015 · 2 min 33 sec. A montage of
              television performance, comic timing, ensemble staging, and
              visual-effects sequences. Contributions vary by project; the reel
              includes episodic directing and digital production. Programme
              dialogue and music are present; captions are not yet available.
            </figcaption>
          </figure>
          <div className="credits">
            <div>
              <strong>80+</strong>
              <span>Half-hour episodes directed and produced</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>Crew members on large productions</span>
            </div>
            <div>
              <strong>End to end</strong>
              <span>Writing, production, editing, sound & visual effects</span>
            </div>
          </div>
          <p>
            My work spans <i>Every Witch Way</i>, <i>Talia in the Kitchen</i>,
            and short-form digital production for <i>iCarly</i> and{' '}
            <i>Victorious</i>.
          </p>
          <a
            className="text-link"
            href="https://www.imdb.com/name/nm2143401/"
            target="_blank"
            rel="noreferrer"
          >
            View IMDb credits ↗
          </a>
          <p className="rights-note">
            Programme footage belongs to its respective rights holders and is
            presented as a professional work sample. No affiliation or
            endorsement is implied.
          </p>
        </section>
        <section id="writing" className="section">
          <p className="eyebrow">03 / WRITING</p>
          <h2>Story is a working skill.</h2>
          <div className="case-columns">
            <h3>
              Different audiences.
              <br />A clear point of view.
            </h3>
            <div>
              <p>
                I write for performance: the action a learner needs to take, the
                beat an actor needs to play, and the story an audience needs to
                follow. My archive includes original television pilots, feature
                screenplays, children's television specs, and workplace learning
                materials.
              </p>
              <a
                className="text-link"
                href="mailto:claytonboen@gmail.com?subject=Writing%20samples"
              >
                Request writing samples ↗
              </a>
            </div>
          </div>
        </section>
        <section className="section about" id="about">
          <p className="eyebrow">ABOUT CLAYTON</p>
          <h2>
            A writer’s instincts.
            <br />A producer’s follow-through.
          </h2>
          <div className="case-columns">
            <p>
              Mesa, Arizona
              <br />
              Open to remote opportunities
            </p>
            <div>
              <p>
                I bring instructional design and entertainment production
                together: scripts, storyboards, eLearning, facilitator guides,
                scenarios, assessments, and video.
              </p>
              <p>
                I’m an expert in Premiere Pro and After Effects, with hands-on
                experience across editing, sound, composition, visual effects,
                directing, and production. I also negotiate the practical
                details—talent, crews, vendors, equipment, and schedules—that
                get work made.
              </p>
              <p>
                Bachelor of Fine Arts, Media Arts / Film & Television
                <br />
                University of Arizona · 1998–2004
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <h2>
          Let’s make complex
          <br />
          work understandable.
        </h2>
        <a href="mailto:claytonboen@gmail.com">claytonboen@gmail.com ↗</a>
        <div>
          <span>© 2026 Clayton Boen</span>
          <a
            href="https://www.linkedin.com/in/clayton-d-boen"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.imdb.com/name/nm2143401/"
            target="_blank"
            rel="noreferrer"
          >
            IMDb ↗
          </a>
        </div>
      </footer>
    </>
  );
}
