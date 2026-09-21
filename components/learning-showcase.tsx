import { EpisodeAudio, PoppyExcerpt } from '@/components/learning-media';

export function LearningShowcase() {
  return (
    <section className="learning-showcase section-pad" id="learning" aria-labelledby="learning-work-title">
      <div className="section-number"><span>02 / LEARNING DESIGN</span><span>SELECTED SAMPLES</span></div>
      <div className="evidence-intro">
        <h2 id="learning-work-title">LEARNING<br /><span>IN PRACTICE.</span></h2>
        <p>I design training for people who need to explain complicated information and make decisions on the job.</p>
      </div>
      <article className="podcast-feature" id="chaos-to-calm" aria-labelledby="chaos-title">
        <div className="podcast-heading">
          <div>
            <p className="eyebrow">UNIVERSITY OF PHOENIX / LEARNING THROUGH AUDIO</p>
            <h3 id="chaos-title">CHAOS<br /><span>TO CALM.</span></h3>
          </div>
          <div className="podcast-intro">
            <p className="podcast-series">Advisor Stories</p>
            <p>I produced these podcasts for Finance New Hire training. Advisors hear how a difficult call sounds and discuss ways to respond.</p>
            <p>Each recording below is a 15-second sample.</p>
            <p className="project-role">Producer · Instructional designer</p>
          </div>
        </div>
        <div className="episode-list" aria-label="Advisor Stories samples">
          <article className="episode">
            <span className="episode-number" aria-hidden="true">01</span>
            <div className="episode-copy">
              <p className="episode-meta">EPISODE 1 <span>0:15 SAMPLE</span></p>
              <h4>Recognizing and Regulating Stress Responses</h4>
              <p>Recognizing the signs of stress in your own voice.</p>
            </div>
            <EpisodeAudio src="/media/samples/chaos-to-calm-01-15s.mp3" title="Recognizing and Regulating Stress Responses" />
          </article>
          <article className="episode">
            <span className="episode-number" aria-hidden="true">02</span>
            <div className="episode-copy">
              <p className="episode-meta">EPISODE 2 <span>0:15 SAMPLE</span></p>
              <h4>Escalated Caller Stories</h4>
              <p>Helping an overwhelmed caller slow down.</p>
            </div>
            <EpisodeAudio src="/media/samples/chaos-to-calm-02-15s.mp3" title="Escalated Caller Stories" />
          </article>
          <article className="episode">
            <span className="episode-number" aria-hidden="true">04</span>
            <div className="episode-copy">
              <p className="episode-meta">EPISODE 4 <span>0:15 SAMPLE</span></p>
              <h4>Leaving Work at Work</h4>
              <p>Creating a boundary at the end of the workday.</p>
            </div>
            <EpisodeAudio src="/media/samples/chaos-to-calm-04-15s.mp3" title="Leaving Work at Work" />
          </article>
        </div>
      </article>
      <article className="learning-feature guide-feature" id="finance-new-hire" aria-labelledby="guide-title">
        <figure className="learning-project-image">
          <img src="/media/samples/finance-new-hire-cover.png" alt="Finance Advisor New Hire Facilitator Guide cover" width="1547" height="2002" loading="lazy" />
          <figcaption>Cover page only · Finance New Hire Facilitator Guide</figcaption>
        </figure>
        <div className="learning-feature-copy">
          <p className="eyebrow">UNIVERSITY OF PHOENIX / CURRICULUM OWNERSHIP</p>
          <h3 id="guide-title">Finance<br />New Hire.</h3>
          <p className="guide-scale">Nearly 1,200 pages</p>
          <p>I owned the instructional design and maintenance of the Finance New Hire Facilitator Guide, which spans nearly 1,200 pages across the program.</p>
          <p>The work covered financial aid, university processes and regulatory requirements. I developed facilitator guidance and practice activities, checked details with subject-matter experts, and kept the material current.</p>
          <p className="project-role">Instructional design owner · Curriculum development</p>
          <p className="sample-credit">Only the cover is shown here. Internal training content is not shared.</p>
        </div>
      </article>
      <article className="learning-feature poppy-feature" id="poppy" aria-labelledby="poppy-title">
        <figure className="learning-project-image">
          <PoppyExcerpt />
          <figcaption>A Day in the Life of Poppy · 15-second sample · Original on-screen captions</figcaption>
        </figure>
        <div className="learning-feature-copy">
          <p className="eyebrow">CRUISE / INSTRUCTIONAL FILM</p>
          <h3 id="poppy-title">A Day in the<br />Life of Poppy.</h3>
          <p>Cruise's CEO told me employees did not fully understand the product or how the company’s teams fit together.</p>
          <p>I pitched a film that follows one car from boot-up to its return at the end of the day. Pre-interviews with employees shaped the story and helped me explain the roles involved. The film received hundreds of direct compliments inside the company.</p>
          <p className="project-role">Concept · Needs assessment · Producer</p>
          <p className="sample-credit">A short excerpt from the rider-support sequence, with the original on-screen captions.</p>
        </div>
      </article>
    </section>
  );
}
