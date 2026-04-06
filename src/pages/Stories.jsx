import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, BookOpen, Quote } from 'lucide-react';
import { figures } from '../data/figures';
import { useNavigate } from 'react-router-dom';

const stories = [
  {
    figure: "Harriet Tubman",
    title: "The Night Sky Was Her Map",
    year: "1849",
    image: figures.find(f => f.name === "Harriet Tubman")?.image_url,
    figureId: figures.find(f => f.name === "Harriet Tubman")?.id,
    tags: ["Underground Railroad", "Freedom", "Courage"],
    narrative: `The autumn night was moonless — exactly as she had planned. Araminta Ross, who would soon rename herself Harriet Tubman, moved through the Maryland marshland with the practiced silence of someone who had spent a lifetime learning to disappear.

The North Star burned steady overhead. She had memorized this sky the way others memorized scripture. Every farmstead, every creek, every safe house had been mapped in her mind during years of forced labor on this same soil she was now escaping.

She was 27 years old. She carried nothing but a piece of cornbread, the clothes on her back, and a burning certainty that would define the rest of her life: *freedom or death.*

What Harriet could not have known — what no one told her — was that she would return. Not once, but thirteen times. That she would become the most famous conductor of the Underground Railroad, a network of abolitionists and safe houses stretching across the Mason-Dixon Line. That she would never lose a single passenger.

"I never ran my train off the track," she would later say, "and I never lost a passenger."`,
  },
  {
    figure: "Frederick Douglass",
    title: "The Day He Learned to Read",
    year: "1829",
    image: figures.find(f => f.name === "Frederick Douglass")?.image_url,
    figureId: figures.find(f => f.name === "Frederick Douglass")?.id,
    tags: ["Education", "Literacy", "Resistance"],
    narrative: `He was eight years old when Sophia Auld began teaching him his letters. She read aloud from the Bible, sounding out words, and the boy called Frederick Bailey absorbed every syllable with terrifying speed.

When her husband Hugh discovered the lessons, his reaction — Frederick would recall it for the rest of his life — was a revelation. "If you give a slave an inch, he will take an ell," Hugh Auld roared. "Learning would *spoil* the best slave in the world."

The prohibition achieved exactly the opposite of its intention. Frederick now understood, with crystalline clarity, what education meant. *It was the pathway from slavery to freedom.*

He began stealing knowledge. He befriended white children on errands, trading bread for reading lessons in the street. He studied old newspapers smuggled from the docks. He borrowed a book called *The Columbian Orator* — and inside its pages found a dialogue between a master and a slave arguing for emancipation.

The slave won the argument. And so did Frederick Douglass.`,
  },
  {
    figure: "Mae C. Jemison",
    title: "Above the Clouds",
    year: "1992",
    image: figures.find(f => f.name === "Mae C. Jemison")?.image_url,
    figureId: figures.find(f => f.name === "Mae C. Jemison")?.id,
    tags: ["Space", "NASA", "Breaking Barriers"],
    narrative: `At 7:23 on the morning of September 12, 1992, the engines of Space Shuttle Endeavour ignited with a fury that could be felt in the bones of everyone watching from Kennedy Space Center.

Aboard the orbiter, Mission Specialist Mae C. Jemison felt the G-forces press her into her seat and thought about Nichelle Nichols — Lieutenant Uhura on Star Trek — who had once told a young Black girl from Chicago that space belonged to her, too.

As Endeavour broke through the clouds and the blue of Earth's atmosphere gave way to the permanent night of orbit, Jemison unbuckled from her seat and floated to the window. Below: the continent of Africa, the curve of the Atlantic, the impossible fragility of the world she'd come from.

She had been a physician, an engineer, a Peace Corps worker in West Africa. She spoke three languages. She had wanted this moment since she was five years old and had never once been told she was *wrong* to want it.

"I felt like I belonged right there in space," she would say later. "I belonged as much as any human being."`,
  },
  {
    figure: "Martin Luther King Jr.",
    title: "A Dream Spoken Into History",
    year: "1963",
    image: figures.find(f => f.name === "Martin Luther King Jr.")?.image_url,
    figureId: figures.find(f => f.name === "Martin Luther King Jr.")?.id,
    tags: ["Civil Rights", "March on Washington", "Nonviolence"],
    narrative: `The heat on the National Mall that Wednesday was brutal — 87 degrees, 250,000 people pressed together from the Washington Monument to the steps of the Lincoln Memorial. It was August 28, 1963.

By the time Martin Luther King Jr. stepped to the microphone that afternoon, he had a prepared speech. He began reading it. The crowd grew restless with the formality.

Then Mahalia Jackson — standing behind him on the platform — called out: *"Tell them about the dream, Martin."*

He pushed aside the written speech. What followed were eight minutes that would echo across generations. *I have a dream,* he told 250,000 people and a watching nation, *that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.*

He was 34 years old. He had five years left to live. In those five minutes of improvised vision, he gave America a standard it has been straining to reach ever since.`,
  },
  {
    figure: "Rosa Parks",
    title: "The Seat That Changed a Nation",
    year: "1955",
    image: figures.find(f => f.name === "Rosa Parks")?.image_url,
    figureId: figures.find(f => f.name === "Rosa Parks")?.id,
    tags: ["Civil Rights", "Montgomery", "Defiance"],
    narrative: `On the evening of December 1, 1955, Rosa Parks boarded the Cleveland Avenue bus in Montgomery, Alabama after a long day's work at the Montgomery Fair department store. She was 42 years old, a trained NAACP organizer, and exhausted — not, as legend sometimes suggests, simply from tired feet, but from *being tired of giving in.*

When the bus driver, James Blake, ordered her to give up her seat in the Black section to a standing white passenger, she looked at him calmly and said: "No."

She was arrested, fingerprinted, and charged with violating Alabama's segregation laws. The bail was set at $100. Before the night was over, the Black community of Montgomery had organized a bus boycott.

It lasted 381 days. It broke the city's bus line financially. It produced a Supreme Court ruling declaring bus segregation unconstitutional. It turned a 26-year-old Baptist minister named Martin Luther King Jr. into a national figure.

*A single word — the most powerful word in the language of the oppressed — had set history in motion.*`,
  },
];

export default function Stories() {
  const [current, setCurrent] = useState(0);
  const [narrating, setNarrating] = useState(false);
  const navigate = useNavigate();
  const story = stories[current];

  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, []);

  function navigate_story(idx) {
    window.speechSynthesis?.cancel();
    setNarrating(false);
    setCurrent(idx);
  }

  function handleNarrate() {
    if (!window.speechSynthesis) return;
    if (narrating) {
      window.speechSynthesis.cancel();
      setNarrating(false);
      return;
    }
    const text = story.narrative.replace(/\*/g, '');
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 0.95;
    utterance.volume = 1;
    utterance.onend = () => setNarrating(false);
    utterance.onerror = () => setNarrating(false);
    window.speechSynthesis.speak(utterance);
    setNarrating(true);
  }

  return (
    <div style={{ padding: 'clamp(1.25rem, 3vw, 2.5rem) clamp(1.25rem, 4vw, 2.5rem)', maxWidth: 960 }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
        <div className="section-label" style={{ marginBottom: 6 }}>Cinematic Archive</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: 'var(--text)', marginBottom: 4 }}>Story Moments</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 13.5 }}>
              Immersive narratives from pivotal moments in Black history
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-faint)', fontSize: 12 }}>
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{current + 1}</span>
            <span>/ {stories.length} stories</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Hero Image */}
          <div style={{ position: 'relative', height: 'clamp(260px, 40vw, 380px)', borderRadius: '20px 20px 0 0', overflow: 'hidden' }}>
            <img
              src={story.image}
              alt={story.figure}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(35%) brightness(0.58)' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, var(--bg-card) 100%)' }} />

            {/* Story index indicators */}
            <div style={{ position: 'absolute', top: 18, right: 20, display: 'flex', gap: 6 }}>
              {stories.map((_, i) => (
                <button key={i} onClick={() => navigate_story(i)} style={{
                  width: i === current ? 28 : 8, height: 8, borderRadius: 4, cursor: 'pointer',
                  background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
                  border: 'none', transition: 'all 0.35s', padding: 0,
                }} />
              ))}
            </div>

            {/* Tags */}
            <div style={{ position: 'absolute', top: 18, left: 20, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {story.tags.map(t => (
                <span key={t} style={{
                  background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(218,165,32,0.35)', color: 'var(--gold)',
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '4px 9px', borderRadius: 20,
                }}>{t}</span>
              ))}
            </div>

            {/* Title overlay */}
            <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
              <div style={{ color: 'var(--gold)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8, opacity: 0.9 }}>
                {story.year} · {story.figure}
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', lineHeight: 1.2, textShadow: '0 2px 16px rgba(0,0,0,0.7)', fontWeight: 700 }}>
                {story.title}
              </h2>
            </div>
          </div>

          {/* Narrative Body */}
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderTop: 'none', borderRadius: '0 0 20px 20px', padding: 'clamp(24px, 4vw, 44px)',
          }}>
            {/* Controls bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Quote size={18} color="var(--gold)" style={{ opacity: 0.7 }} />
                <span style={{ color: 'var(--text-faint)', fontSize: 12, fontStyle: 'italic' }}>
                  Narrative account
                </span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={handleNarrate}
                  className={narrating ? 'btn-gold' : 'btn-outline'}
                  style={{ fontSize: 12, padding: '0.45rem 1rem' }}
                  title={narrating ? 'Stop narration' : 'Listen to story'}
                >
                  {narrating ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  {narrating ? 'Stop' : 'Listen'}
                </button>
                {story.figureId && (
                  <button
                    className="btn-outline"
                    onClick={() => navigate(`/figure/${story.figureId}`)}
                    style={{ fontSize: 12, padding: '0.45rem 1rem' }}
                  >
                    <BookOpen size={13} /> Full Profile
                  </button>
                )}
              </div>
            </div>

            {/* Narrative text */}
            <div style={{ fontFamily: 'Georgia, "Playfair Display", serif', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', lineHeight: 2.0, color: 'var(--text-muted)', maxWidth: '68ch' }}>
              {story.narrative.split('\n\n').map((para, i) => (
                <p key={i} style={{ marginBottom: '1.5em' }}>
                  {para.split(/(\*[^*]+\*)/).map((part, j) =>
                    part.startsWith('*') && part.endsWith('*')
                      ? <em key={j} style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 400 }}>{part.slice(1, -1)}</em>
                      : part
                  )}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, gap: 12 }}>
        <button
          className="btn-outline"
          onClick={() => navigate_story(Math.max(0, current - 1))}
          disabled={current === 0}
          style={{ display: 'flex', alignItems: 'center', gap: 7, opacity: current === 0 ? 0.3 : 1, fontSize: 13 }}
        >
          <ChevronLeft size={15} /> Previous
        </button>

        <div style={{ color: 'var(--text-faint)', fontSize: 12, textAlign: 'center' }}>
          <span style={{ color: 'var(--text-muted)' }}>{story.figure}</span>
        </div>

        <button
          className="btn-outline"
          onClick={() => navigate_story(Math.min(stories.length - 1, current + 1))}
          disabled={current === stories.length - 1}
          style={{ display: 'flex', alignItems: 'center', gap: 7, opacity: current === stories.length - 1 ? 0.3 : 1, fontSize: 13 }}
        >
          Next <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
