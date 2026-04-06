import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, AlertTriangle, Wheat } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const timeline = [
  {
    year: 'September 30, 1919',
    label: 'Sharecroppers Organize',
    color: '#3c6e71',
    detail: 'Members of the Progressive Farmers and Household Union of America (PFHUA) gather at a church in Hoop Spur, Arkansas to discuss suing white landowners for fair cotton payments. They had hired a lawyer to audit the plantation records — a direct challenge to the debt peonage system keeping them in poverty. Armed guards stood watch outside. When two white law enforcement officers arrived and a confrontation began, Deputy W.A. Adkins was shot and killed.',
  },
  {
    year: 'October 1, 1919',
    label: 'The Mob Descends',
    color: '#c0392b',
    detail: 'A posse of 500 to 1,000 armed white men from across Arkansas and Mississippi arrives in Elaine under the pretext of suppressing an "insurrection." The violence is immediate and overwhelming. Black residents — men, women, and children — are hunted across the countryside. Homes are burned. People are shot in the fields, on the roads, in the water.',
  },
  {
    year: 'October 2, 1919',
    label: 'Federal Troops Arrive — and Kill',
    color: '#c0392b',
    detail: '500 federal troops from Camp Pike arrive under Colonel Isaac Jenks, ostensibly to restore order. Instead, evidence — including testimony later gathered by Ida B. Wells-Barnett and Walter White of the NAACP — shows that federal soldiers participated in the indiscriminate killing of Black residents. The troops then rounded up hundreds of Black men and confined them in stockades.',
  },
  {
    year: 'October 2–7, 1919',
    label: 'Torture and Confessions',
    color: '#c0392b',
    detail: 'Hundreds of Black men are held in stockades and systematically tortured to extract confessions of conspiracy. The "Committee of Seven" — a group of local white leaders — manages the "investigation." There is no investigation. There is only coercion. The goal is to manufacture a legal pretext for executions that have already been decided.',
  },
  {
    year: 'November 1919',
    label: 'Trials Lasting Minutes',
    color: '#c0392b',
    detail: '122 Black men are indicted. 73 are charged with murder. The trials for the "Elaine Twelve" — the twelve men sentenced to death — last minutes each. All-white juries deliberate for no more than eight minutes before returning guilty verdicts. No Black witnesses for the defense are allowed. The defendants are denied the right to choose their own attorneys.',
  },
  {
    year: '1920–1923',
    label: 'The NAACP Fights Back',
    color: '#b8860b',
    detail: 'Black attorney Scipio Jones, working with the NAACP, mounts a years-long legal battle for the Elaine Twelve. Ida B. Wells-Barnett publishes The Arkansas Race Riot (1920), and Walter White goes undercover in Elaine to gather evidence. The case reaches the U.S. Supreme Court — and changes American law.',
  },
  {
    year: 'February 19, 1923',
    label: 'Moore v. Dempsey',
    color: '#3c6e71',
    detail: 'The Supreme Court rules in Moore v. Dempsey that a trial dominated by a mob — where the proceedings are a "mask" rather than genuine due process — violates the 14th Amendment. It is the first time the Supreme Court uses the 14th Amendment to review a state criminal trial. The ruling becomes a cornerstone of civil rights law.',
  },
  {
    year: 'January 13, 1925',
    label: 'The Last Men Released',
    color: '#3c6e71',
    detail: 'The last of the Elaine Twelve are finally released from prison, more than five years after their wrongful convictions. Robert L. Hill, the founder of the PFHUA who had fled to Kansas, was never extradited — Arkansas eventually gave up trying. No white mob member, no soldier, and no torturer was ever charged.',
  },
];

const facts = [
  { label: 'Date',         value: 'Sept 30 – Oct 7, 1919', detail: 'A week of state-sanctioned racial terror' },
  { label: 'Location',     value: 'Elaine, Arkansas',       detail: 'Phillips County — cotton country' },
  { label: 'Deaths',       value: '200–800 Black lives',    detail: 'Official: ~5 white men. Historian estimates: 200–800+ Black people' },
  { label: 'Cause',        value: 'Trying to Unionize',     detail: 'Sharecroppers hired a lawyer to audit plantation records' },
  { label: 'Prosecutions', value: 'Zero — of the mob',      detail: '12 Black men sentenced to death; all eventually released after 5+ years' },
  { label: 'Legal Legacy', value: 'Moore v. Dempsey',       detail: 'First Supreme Court use of 14th Amendment to review a state criminal trial (1923)' },
];

const figures = [
  { name: 'Robert L. Hill',     role: 'Founder of the PFHUA. Escaped to Kansas. Arkansas sought extradition for years and failed. He survived.' },
  { name: 'Scipio Jones',       role: 'Black attorney who fought for the Elaine Twelve for five years — all the way to the Supreme Court.' },
  { name: 'Ida B. Wells-Barnett', role: 'Investigated the massacre undercover and published The Arkansas Race Riot (1920), exposing the full truth.' },
  { name: 'Walter White',       role: 'NAACP Field Secretary who went undercover in Elaine. His findings were critical to the legal challenge.' },
  { name: 'Frank Moore',        role: 'Lead defendant in Moore v. Dempsey — the landmark Supreme Court case that came from his death sentence.' },
  { name: 'The Elaine Twelve',  role: 'Twelve men sentenced to death in trials lasting minutes. All eventually freed — but only after years of imprisonment.' },
];

export default function ElaineMassacre() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#060a05', padding: 'clamp(4rem,10vw,8rem) clamp(1.5rem,5vw,4rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 40% 70%, rgba(139,90,43,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 3, background: '#8b5a2b', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8b5a2b' }}>Phillips County, Arkansas · September–October 1919</span>
              <div style={{ width: 28, height: 3, background: '#8b5a2b', borderRadius: 99 }} />
            </div>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2.4rem,8vw,5.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#fff', marginBottom: 24 }}>
            The Elaine<br /><span style={{ color: '#8b5a2b' }}>Massacre</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} style={{ color: 'rgba(255,255,255,0.52)', fontSize: 'clamp(0.95rem,1.8vw,1.1rem)', lineHeight: 1.78, maxWidth: '56ch', marginBottom: 28 }}>
            Black sharecroppers in Arkansas tried to hire a lawyer to get fair pay for their cotton. White mobs — backed by federal troops — killed up to 800 of them in response. It may be the deadliest racial massacre in U.S. history.
          </motion.p>
          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Elaine, AR', 'Red Summer 1919', 'Up to 800 Killed', '0 White Prosecutions'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)', fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 99 }}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <div style={{ background: '#0c0906', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.05rem,2.2vw,1.4rem)', fontStyle: 'italic', fontWeight: 500, color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, margin: 0 }}>
            "The real causes of the Elaine massacre were the determination of the white planters to maintain peonage, and the equal determination of the Negro farmers to have fair settlements."
          </p>
          <div style={{ marginTop: 12, fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em' }}>
            — Ida B. Wells-Barnett, The Arkansas Race Riot, 1920
          </div>
        </div>
      </div>

      {/* Facts */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#8b5a2b', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8b5a2b' }}>Key Facts</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 12 }}>
            {facts.map(f => (
              <div key={f.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px', boxShadow: '0 2px 8px rgba(53,53,53,0.05)' }}>
                <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.56rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8b5a2b', marginBottom: 6 }}>{f.label}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem', fontWeight: 900, color: '#353535', marginBottom: 5, letterSpacing: '-0.01em' }}>{f.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{f.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section style={{ background: '#fff', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>Why It Happened</span>
          </div>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.3rem,2.8vw,1.9rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#353535', lineHeight: 1.1, marginBottom: 16 }}>Debt Peonage and the Audacity of Organizing</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 14, maxWidth: '62ch' }}>
            The sharecroppers of Elaine were trapped in a system designed to keep them permanently indebted to white landowners. They would pick the cotton, but the landowner would control the accounting — and the accounting always showed the sharecropper still owed money, year after year, no matter how good the harvest.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.78, marginBottom: 0, maxWidth: '62ch' }}>
            The PFHUA had a radical idea: hire a lawyer, force an independent audit, and sue for what was owed. That act — not armed rebellion, not any crime — is what triggered the massacre. The threat wasn't violence. It was paperwork.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(3.5rem,7vw,6rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>Timeline</span>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #3c6e71, #c0392b 20%, #c0392b 75%, #3c6e71)', borderRadius: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07, duration: 0.5 }} style={{ display: 'flex', gap: 20 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', flexShrink: 0, background: item.color, border: '3px solid var(--bg)', boxShadow: `0 0 0 2px ${item.color}33`, marginTop: 2 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: item.color, marginBottom: 4 }}>{item.year}</div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 800, color: '#353535', lineHeight: 1.2, marginBottom: 8 }}>{item.label}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.72, margin: 0 }}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* People */}
      <section style={{ background: 'var(--bg-elevated)', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>People to Remember</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
            {figures.map(f => (
              <div key={f.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px', boxShadow: '0 2px 8px rgba(53,53,53,0.04)' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', fontWeight: 800, color: '#353535', marginBottom: 6 }}>{f.name}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.62 }}>{f.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alert: death toll */}
      <section style={{ background: '#fff', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ background: 'rgba(192,57,43,0.05)', border: '1.5px solid rgba(192,57,43,0.2)', borderRadius: 14, padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <AlertTriangle size={18} color="#c0392b" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: '#c0392b', marginBottom: 6 }}>The Deadliest Massacre You've Never Heard Of</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: 0 }}>
                The official death count from the Elaine Massacre lists approximately five white men. Historian estimates for Black deaths range from 100 to over 800. The gap exists because the killing of Black sharecroppers across cotton fields, swamps, and back roads was not recorded — it was concealed. This may be the single deadliest act of racial violence in U.S. history, and it is among the least known.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section style={{ background: '#060a05', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Wheat size={32} color="#8b5a2b" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
            They asked for<br /><span style={{ color: '#8b5a2b' }}>a fair accounting.</span><br /><span style={{ color: '#3c6e71' }}>The answer was bullets.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.78, margin: '0 auto 36px', maxWidth: '46ch' }}>
            Moore v. Dempsey became landmark constitutional law. The men who earned that ruling did so from prison cells, sentenced to death for trying to get paid for their work.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/black-wall-street')} style={{ background: '#3c6e71', color: '#fff', border: 'none', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#2a5255'} onMouseLeave={e => e.currentTarget.style.background = '#3c6e71'}>
              Black Wall Street <ArrowRight size={15} />
            </button>
            <a href="https://en.wikipedia.org/wiki/Elaine_massacre" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'rgba(255,255,255,0.62)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <ExternalLink size={14} /> Wikipedia Article
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
