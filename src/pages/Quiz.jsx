import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, CheckCircle, XCircle, RotateCcw, Zap, Trophy, Flame, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const questionBank = [
  { q: "Who was known as the 'Moses of her people' for leading enslaved people to freedom via the Underground Railroad?", options: ["Sojourner Truth", "Harriet Tubman", "Ida B. Wells", "Rosa Parks"], answer: 1, figure: "Harriet Tubman", category: "Civil Rights" },
  { q: "George Washington Carver developed over 300 products from which crop, transforming Southern agriculture?", options: ["Cotton", "Soybeans", "Peanuts", "Sweet potatoes"], answer: 2, figure: "George Washington Carver", category: "Science" },
  { q: "What invention is Garrett Morgan best known for creating in 1923?", options: ["The light bulb filament", "The telephone", "The three-position traffic signal", "The gas mask"], answer: 2, figure: "Garrett Morgan", category: "Invention" },
  { q: "Mae C. Jemison made history in 1992 by becoming the first African American woman to do what?", options: ["Win a Nobel Prize", "Serve in Congress", "Travel to space", "Graduate from MIT"], answer: 2, figure: "Mae C. Jemison", category: "Science" },
  { q: "Lewis Howard Latimer made crucial improvements to the incandescent light bulb, allowing it to burn for hours. Who did he work alongside?", options: ["Alexander Graham Bell & Thomas Edison", "Only Thomas Edison", "Only Alexander Graham Bell", "Benjamin Banneker"], answer: 0, figure: "Lewis Howard Latimer", category: "Invention" },
  { q: "Dr. Charles Drew pioneered what critical medical innovation that saved millions of lives during WWII?", options: ["Penicillin synthesis", "Blood plasma storage and banking", "X-ray imaging", "Surgical anesthesia"], answer: 1, figure: "Charles Drew", category: "Medicine" },
  { q: "Frederick Douglass escaped slavery and became a leading voice in what 19th-century movement?", options: ["The Suffragette Movement", "The Abolitionist Movement", "The Temperance Movement", "The Labor Movement"], answer: 1, figure: "Frederick Douglass", category: "Civil Rights" },
  { q: "Ida B. Wells led a courageous anti-lynching crusade in the 1890s. How many states did she travel to document these atrocities?", options: ["3 states", "7 states", "Multiple Southern and Northern states", "She never left the South"], answer: 2, figure: "Ida B. Wells", category: "Civil Rights" },
  { q: "Marcus Garvey founded the Universal Negro Improvement Association and championed what political philosophy?", options: ["Marxism", "Pan-Africanism", "Anarchism", "Libertarianism"], answer: 1, figure: "Marcus Garvey", category: "Pan-Africanism" },
  { q: "Wilma Rudolph won how many gold medals at the 1960 Rome Olympics?", options: ["One", "Two", "Three", "Four"], answer: 2, figure: "Wilma Rudolph", category: "Athletics" },
  { q: "Granville T. Woods invented the Synchronous Multiplex Railway Telegraph to solve what deadly problem?", options: ["Power outages in cities", "Train collisions via moving-train communication", "Telegraph signal delays", "Locomotive engine failures"], answer: 1, figure: "Granville T. Woods", category: "Invention" },
  { q: "Dr. Patricia Bath's 1988 Laserphaco Probe revolutionized treatment of which condition?", options: ["Diabetes", "Hearing loss", "Cataracts", "Spinal injuries"], answer: 2, figure: "Patricia Bath", category: "Medicine" },
  { q: "Percy Julian synthesized cortisone from soybeans, making affordable treatment possible for which condition?", options: ["Tuberculosis", "Malaria", "Arthritis", "Heart disease"], answer: 2, figure: "Percy Julian", category: "Science" },
  { q: "Otis Boykin's precision wire-wound resistor was critically used in which life-saving medical device?", options: ["The MRI machine", "The artificial heart pacemaker", "The insulin pump", "The hearing aid"], answer: 1, figure: "Otis Boykin", category: "Invention" },
  { q: "Frederick M. Jones's 1940 portable refrigeration invention enabled what major change to modern life?", options: ["Home air conditioning", "Long-distance transport of perishable food and medicine", "Industrial food processing", "Cold storage in grocery stores"], answer: 1, figure: "Frederick M. Jones", category: "Invention" },
  { q: "Madam C.J. Walker became the first self-made female millionaire in America through what business?", options: ["Real estate investment", "The cotton trade", "A line of hair care products for Black women", "A chain of beauty schools"], answer: 2, figure: "Madam C.J. Walker", category: "Civil Rights" },
  { q: "Dr. Daniel Hale Williams made history in 1893 by performing the world's first successful open surgery on which organ?", options: ["The brain", "The kidney", "The lungs", "The heart"], answer: 3, figure: "Daniel Hale Williams", category: "Medicine" },
  { q: "Lonnie Johnson invented the Super Soaker while working on a NASA mission. Which mission?", options: ["Apollo 13", "Space Shuttle Challenger", "Galileo", "Voyager 1"], answer: 2, figure: "Lonnie Johnson", category: "Invention" },
  { q: "Dr. Gladys West's mathematical modeling of Earth's shape was foundational to which modern technology?", options: ["The internet", "GPS navigation", "Weather satellites", "Mobile phones"], answer: 1, figure: "Dr. Gladys West", category: "Science" },
  { q: "Jerry Lawson pioneered what game-changing technology in 1976 that defined the video game industry?", options: ["The first color display screen", "Online multiplayer gaming", "The ROM game cartridge console", "Motion-sensing controllers"], answer: 2, figure: "Jerry Lawson", category: "Technology" },
  { q: "Thomas L. Jennings made history in 1821 as the first African American to receive a U.S. patent. What did he invent?", options: ["A mechanical loom", "A dry-cleaning process called dry scouring", "A water purification system", "A printing press improvement"], answer: 1, figure: "Thomas L. Jennings", category: "Invention" },
  { q: "Alexander Miles' 1887 elevator patent solved a deadly hazard. What did his invention automate?", options: ["The elevator's speed control", "The opening and closing of elevator shaft doors", "The cable tension system", "The floor indicator display"], answer: 1, figure: "Alexander Miles", category: "Invention" },
  { q: "What year did Rosa Parks refuse to give up her seat on the Montgomery bus, sparking the famous boycott?", options: ["1952", "1955", "1960", "1963"], answer: 1, figure: "Rosa Parks", category: "Civil Rights" },
  { q: "Martin Luther King Jr. received the Nobel Peace Prize in which year?", options: ["1963", "1964", "1965", "1968"], answer: 1, figure: "Martin Luther King Jr.", category: "Civil Rights" },
  { q: "Katherine Johnson's calculations were critical to which historic NASA mission?", options: ["Apollo 11 Moon Landing", "John Glenn's orbital flight", "Both Apollo 11 and John Glenn's mission", "The first Mars probe"], answer: 2, figure: "Katherine Johnson", category: "Science" },
  { q: "Who was the first African American to win the Academy Award for Best Supporting Actress?", options: ["Dorothy Dandridge", "Cicely Tyson", "Hattie McDaniel", "Eartha Kitt"], answer: 2, figure: "Hattie McDaniel", category: "Arts & Music" },
  { q: "Thurgood Marshall argued which landmark Supreme Court case that declared school segregation unconstitutional?", options: ["Plessy v. Ferguson", "Brown v. Board of Education", "Loving v. Virginia", "Shelley v. Kraemer"], answer: 1, figure: "Thurgood Marshall", category: "Civil Rights" },
  { q: "Nelson Mandela spent how many years imprisoned before becoming South Africa's president?", options: ["18 years", "22 years", "27 years", "32 years"], answer: 2, figure: "Nelson Mandela", category: "Civil Rights" },
  { q: "Mansa Musa ruled which powerful West African empire in the 14th century?", options: ["The Songhai Empire", "The Mali Empire", "The Ashanti Kingdom", "The Benin Kingdom"], answer: 1, figure: "Mansa Musa", category: "Ancient History" },
  { q: "Jackie Robinson broke baseball's color barrier in which year?", options: ["1945", "1947", "1950", "1952"], answer: 1, figure: "Jackie Robinson", category: "Athletics" },
];

function getQuiz(count = 5) {
  return [...questionBank].sort(() => Math.random() - 0.5).slice(0, count);
}

const categoryColors = {
  'Civil Rights':   '#c0392b',
  'Science':        '#2980b9',
  'Invention':      '#8B6200',
  'Medicine':       '#27ae60',
  'Technology':     '#8e44ad',
  'Athletics':      '#e67e22',
  'Arts & Music':   '#16a085',
  'Ancient History':'#7f8c8d',
  'Pan-Africanism': '#c0392b',
};

export default function Quiz() {
  const [quiz, setQuiz] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(() => parseInt(localStorage.getItem('loveblaq-best-streak') || '0'));
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  function startQuiz() {
    setQuiz(getQuiz(5));
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setCurrentStreak(0);
    setAnswers([]);
    setDone(false);
  }

  function handleSelect(idx) {
    if (selected !== null) return;
    setSelected(idx);
    const correct = quiz[current].answer === idx;
    const newStreak = correct ? currentStreak + 1 : 0;
    if (correct) setScore(s => s + 1);
    setCurrentStreak(newStreak);
    if (newStreak > bestStreak) {
      setBestStreak(newStreak);
      localStorage.setItem('loveblaq-best-streak', newStreak);
    }
    setAnswers(a => [...a, { selected: idx, correct, question: quiz[current] }]);
    setTimeout(() => {
      if (current + 1 >= quiz.length) {
        setDone(true);
      } else {
        setCurrent(c => c + 1);
        setSelected(null);
      }
    }, 1400);
  }

  const q = quiz?.[current];
  const catColor = q ? (categoryColors[q.category] || 'var(--gold)') : 'var(--gold)';

  return (
    <div style={{ padding: 'clamp(1.25rem, 3vw, 2.5rem) clamp(1.25rem, 4vw, 2.5rem)', maxWidth: 760 }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="section-label" style={{ marginBottom: 6 }}>Knowledge Test</div>
            <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: 'var(--text)', marginBottom: 4 }}>History Quiz</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 13.5 }}>
              Test your knowledge of Black history, science, and culture
            </p>
          </div>

          {bestStreak > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'linear-gradient(135deg, rgba(255,152,0,0.12), rgba(255,100,0,0.08))',
                border: '1px solid rgba(255,152,0,0.3)', borderRadius: 12, padding: '10px 18px',
              }}
            >
              <Flame size={22} color="#ff9800" />
              <div>
                <div style={{ color: '#ff9800', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Best Streak</div>
                <div style={{ color: 'var(--text)', fontSize: 22, fontWeight: 700, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{bestStreak}</div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">

        {/* ── Start Screen ────────────────────────────────── */}
        {!quiz && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="card" style={{ padding: 'clamp(32px, 5vw, 56px)', textAlign: 'center', border: '1px solid var(--border-gold)' }}>
              <div style={{
                width: 88, height: 88, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(218,165,32,0.15), rgba(218,165,32,0.04))',
                border: '1px solid var(--border-gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px',
                boxShadow: 'var(--gold-glow-md)',
              }}>
                <Brain size={38} color="var(--gold)" strokeWidth={1.5} />
              </div>
              <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--text)', marginBottom: 12 }}>
                Ready to Test Your Knowledge?
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: 32, lineHeight: 1.75, maxWidth: 400, margin: '0 auto 32px', fontSize: 14 }}>
                5 curated questions covering Black history from ancient empires to modern breakthroughs. Each question is randomly selected from a pool of {questionBank.length}.
              </p>

              {/* Stats row */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 28, marginBottom: 36 }}>
                {[
                  { label: 'Questions', value: 5, icon: Brain },
                  { label: 'Question Bank', value: questionBank.length, icon: Zap },
                  { label: 'Your Best', value: bestStreak > 0 ? `🔥 ${bestStreak}` : '—', icon: Trophy },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 700, color: 'var(--gold)', fontFamily: 'Playfair Display, serif' }}>{value}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
                  </div>
                ))}
              </div>

              <button className="btn-gold" onClick={startQuiz} style={{ fontSize: '0.95rem', padding: '0.75rem 2rem' }}>
                <Zap size={16} /> Begin Quiz
              </button>
            </div>

            {/* Category preview */}
            <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {Object.entries(categoryColors).map(([cat, color]) => (
                <span key={cat} style={{
                  padding: '4px 12px', borderRadius: 20,
                  background: `${color}15`, border: `1px solid ${color}30`,
                  color, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
                }}>
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Active Question ──────────────────────────────── */}
        {quiz && !done && q && (
          <motion.div
            key={`q-${current}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Progress bar */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
                  Question <span style={{ color: 'var(--text)', fontWeight: 600 }}>{current + 1}</span> of {quiz.length}
                </span>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  {currentStreak >= 2 && (
                    <motion.span
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      style={{ color: '#ff9800', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}
                    >
                      <Flame size={14} color="#ff9800" /> {currentStreak} streak!
                    </motion.span>
                  )}
                  <span style={{ color: 'var(--gold)', fontSize: 13, fontWeight: 600 }}>
                    {score}/{current} correct
                  </span>
                </div>
              </div>
              {/* Step dots */}
              <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
                {quiz.map((_, i) => (
                  <div key={i} style={{
                    flex: 1, height: 4, borderRadius: 4,
                    background: i < current
                      ? (answers[i]?.correct ? 'var(--gold)' : '#c0392b')
                      : i === current ? 'var(--gold-dark)' : 'var(--border)',
                    transition: 'background 0.3s',
                  }} />
                ))}
              </div>
            </div>

            {/* Question card */}
            <div className="card" style={{ padding: '28px 30px', marginBottom: 16, borderLeft: `3px solid ${catColor}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{
                  padding: '3px 10px', borderRadius: 20, fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  background: `${catColor}18`, border: `1px solid ${catColor}40`, color: catColor,
                }}>
                  {q.category}
                </span>
                <span style={{ color: 'var(--text-faint)', fontSize: 12 }}>— {q.figure}</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--text)', lineHeight: 1.65, fontFamily: 'Georgia, serif', fontWeight: 400 }}>
                {q.q}
              </h3>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {q.options.map((opt, i) => {
                const isSelected = selected === i;
                const isCorrect = q.answer === i;
                let styles = {};
                if (selected !== null) {
                  if (isCorrect) {
                    styles = { borderColor: 'var(--gold)', background: 'rgba(218,165,32,0.08)', color: 'var(--gold)' };
                  } else if (isSelected) {
                    styles = { borderColor: '#c0392b', background: 'rgba(192,57,43,0.08)', color: '#e55' };
                  }
                }
                return (
                  <motion.button
                    key={i}
                    whileHover={selected === null ? { scale: 1.005, borderColor: 'var(--border-gold)' } : {}}
                    whileTap={selected === null ? { scale: 0.998 } : {}}
                    onClick={() => handleSelect(i)}
                    style={{
                      padding: '15px 20px', borderRadius: 12,
                      border: `1px solid ${styles.borderColor || 'var(--border)'}`,
                      background: styles.background || 'var(--bg-card)',
                      color: styles.color || 'var(--text-muted)',
                      cursor: selected === null ? 'pointer' : 'default',
                      textAlign: 'left', fontSize: 14, fontFamily: 'Inter, sans-serif',
                      display: 'flex', alignItems: 'center', gap: 14,
                      transition: 'all 0.2s', lineHeight: 1.4,
                    }}
                  >
                    <span style={{
                      width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                      border: `1.5px solid ${styles.borderColor || 'var(--border)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700, color: styles.color || 'var(--text-faint)',
                      transition: 'all 0.2s',
                    }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span style={{ flex: 1 }}>{opt}</span>
                    {selected !== null && isCorrect && (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}>
                        <CheckCircle size={17} color="var(--gold)" />
                      </motion.span>
                    )}
                    {selected !== null && isSelected && !isCorrect && (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}>
                        <XCircle size={17} color="#c0392b" />
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ── Results ─────────────────────────────────────── */}
        {done && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card" style={{ padding: 'clamp(28px, 5vw, 48px)', textAlign: 'center', border: '1px solid var(--border-gold)' }}>

              {/* Score ring */}
              <div style={{ position: 'relative', width: 110, height: 110, margin: '0 auto 24px' }}>
                <svg width="110" height="110" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="55" cy="55" r="46" fill="none" stroke="var(--border)" strokeWidth="8" />
                  <motion.circle
                    cx="55" cy="55" r="46" fill="none"
                    stroke={score === quiz.length ? 'var(--gold)' : score >= 3 ? 'var(--gold-dark)' : '#c0392b'}
                    strokeWidth="8" strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 46}
                    initial={{ strokeDashoffset: 2 * Math.PI * 46 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 46 * (1 - score / quiz.length) }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                  />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--gold)', fontSize: 24, fontWeight: 700, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{score}</span>
                  <span style={{ color: 'var(--text-faint)', fontSize: 11 }}>/ {quiz.length}</span>
                </div>
              </div>

              <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--text)', marginBottom: 8 }}>
                {score === quiz.length ? '🏆 Perfect Score!' : score >= 4 ? '⭐ Excellent!' : score >= 3 ? '👏 Well Done!' : '📚 Keep Learning!'}
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: 20, fontSize: 14 }}>
                You answered <strong style={{ color: 'var(--text)' }}>{score}</strong> out of <strong style={{ color: 'var(--text)' }}>{quiz.length}</strong> questions correctly.
              </p>

              {currentStreak > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(255,152,0,0.1)', border: '1px solid rgba(255,152,0,0.3)',
                    borderRadius: 20, padding: '6px 18px', marginBottom: 24,
                  }}
                >
                  <Flame size={14} color="#ff9800" />
                  <span style={{ color: '#ff9800', fontSize: 13, fontWeight: 600 }}>
                    {currentStreak === quiz.length ? 'Perfect streak!' : `${currentStreak} correct in a row`}
                  </span>
                </motion.div>
              )}

              {/* Answer review */}
              <div style={{ textAlign: 'left', marginBottom: 32 }}>
                <div className="section-label" style={{ marginBottom: 12, textAlign: 'left' }}>Review</div>
                {answers.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                      padding: '12px 0', borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ marginTop: 2, flexShrink: 0 }}>
                      {a.correct
                        ? <CheckCircle size={16} color="var(--gold)" />
                        : <XCircle size={16} color="#c0392b" />
                      }
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: 'var(--text-muted)', fontSize: 12.5, lineHeight: 1.5, marginBottom: 3 }} className="line-clamp-2">
                        {a.question.q}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--text-faint)' }}>
                        {a.question.figure} · {a.question.category}
                      </div>
                    </div>
                    <span style={{
                      fontSize: 11, fontWeight: 700, flexShrink: 0,
                      color: a.correct ? 'var(--gold)' : '#c0392b',
                      padding: '2px 8px', borderRadius: 20,
                      background: a.correct ? 'rgba(218,165,32,0.1)' : 'rgba(192,57,43,0.1)',
                    }}>
                      {a.correct ? 'Correct' : 'Wrong'}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn-gold" onClick={startQuiz}>
                  <RotateCcw size={14} /> Try Again
                </button>
                <button className="btn-outline" onClick={() => navigate('/figures')}>
                  Explore Figures <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
