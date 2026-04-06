import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, AlertTriangle, Scale } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const timeline = [
  {
    year: 'November 1872',
    label: 'A Contested Election',
    color: '#3c6e71',
    detail: 'Louisiana\'s gubernatorial election produces two competing claims of victory — Republican William Pitt Kellogg and Democrat John McEnery both declare themselves governor. Both appoint their own officials in parishes across the state. In Grant Parish, newly carved out as a Reconstruction-era stronghold for Black voters, both sides appoint a sheriff and a judge. The conflict over which government is legitimate will be settled not in court, but in blood.',
  },
  {
    year: 'March 25, 1873',
    label: 'Black Republicans Hold the Courthouse',
    color: '#b8860b',
    detail: 'Republican officials formally take control of the Colfax courthouse to prevent the Democratic/Fusionist faction from seizing it. Black militiamen — mostly freedmen, many of them Civil War veterans — stand guard. They dig trenches around the building. They know what is coming. For weeks they hold the courthouse as white paramilitary forces gather in the surrounding countryside.',
  },
  {
    year: 'April 1–12, 1873',
    label: 'The Noose Tightens',
    color: '#c0392b',
    detail: 'White militia forces — including members of the White League and the Ku Klux Klan — mass outside Colfax. The murder of Jesse McKinney, a Black farmer, escalates tensions. The defenders inside the courthouse are outgunned and increasingly surrounded. Reinforcements that were promised never arrive. By Easter Sunday, the mob has grown to approximately 300 men with rifles — and a cannon.',
  },
  {
    year: 'April 13, 1873 — Easter Sunday',
    label: 'The Siege',
    color: '#c0392b',
    detail: 'The attack begins in the morning. Christopher Columbus Nash leads the white force. The Black defenders hold as long as they can. The mob fires a four-pound cannon at the rear of the courthouse — the side without trenches. When that fails to break the defense, they force a Black captive at gunpoint to set the roof on fire with a torch. As the building burns, the men inside have two choices: burn, or run.',
  },
  {
    year: 'April 13, 1873 — The Surrender',
    label: 'Killed While Surrendering',
    color: '#c0392b',
    detail: 'Many of the Black defenders attempt to flee the burning courthouse under a white flag. They are shot as they run. Approximately 50 men who surrender are taken prisoner. That night, their captors — led by William "Bill" Cruikshank — execute them. Estimates of total Black deaths range from 62 to over 150. Three white men are killed during the assault. The bodies of many Black victims are thrown into the Red River or buried in unmarked graves.',
  },
  {
    year: '1874 — Federal Prosecution',
    label: 'The Government Tries to Prosecute',
    color: '#b8860b',
    detail: '97 men are indicted under the Enforcement Act of 1870, which was designed to protect the constitutional rights of Black citizens against private violence. Only three are ultimately convicted of conspiracy. The convictions are appealed all the way to the Supreme Court.',
  },
  {
    year: 'March 27, 1876',
    label: 'United States v. Cruikshank',
    color: '#c0392b',
    detail: 'The Supreme Court overturns the convictions. The ruling holds that the 14th Amendment applies only to state actions — not private individuals. The federal government, the Court says, cannot prosecute a white mob for murdering Black men, because only states can do that. The Enforcement Acts are gutted. The Ku Klux Klan and the White League now operate with full legal impunity. Reconstruction is effectively over.',
  },
  {
    year: '2021–2023',
    label: 'A Reckoning, 150 Years Later',
    color: '#3c6e71',
    detail: 'A Louisiana historical marker from 1950 that called the massacre the "end of carpetbag misrule" — white supremacist language celebrating the killings — is finally removed in 2021. On April 13, 2023, exactly 150 years after the massacre, a new granite memorial is dedicated listing the names of 57 confirmed Black victims. Archaeologists continue searching for mass grave sites.',
  },
];

const facts = [
  { label: 'Date',         value: 'April 13, 1873',          detail: 'Easter Sunday — during Reconstruction' },
  { label: 'Location',     value: 'Colfax, Louisiana',        detail: 'Grant Parish, carved out to protect Black voters' },
  { label: 'Deaths',       value: '62–153 Black victims',     detail: '3 white men died. Most Black victims thrown in the river.' },
  { label: 'Method',       value: 'Cannon + Fire + Execution', detail: 'Courthouse besieged, burned, survivors executed after surrendering' },
  { label: 'Prosecutions', value: 'Overturned',               detail: '3 convicted — then Supreme Court reversed all convictions in 1876' },
  { label: 'Legal Impact', value: 'U.S. v. Cruikshank (1876)', detail: 'Gutted federal civil rights enforcement. Gave white mobs free rein for decades.' },
];

const figures = [
  { name: 'The Black Defenders',        role: 'Freedmen and Civil War veterans who held the Colfax courthouse for weeks. Most were killed after surrendering.' },
  { name: 'Christopher Columbus Nash',  role: 'Led the white paramilitary force. Never charged. Later celebrated in Louisiana as a hero.' },
  { name: 'William Cruikshank',         role: 'Led the execution of prisoners after the courthouse fell. The Supreme Court case bears his name — and he went free.' },
  { name: 'Jesse McKinney',             role: 'Black farmer whose murder in the days before the massacre escalated the final confrontation.' },
  { name: 'Lemuel Penn (symbolic)',      role: 'The Cruikshank ruling\'s legacy echoed forward — it effectively prevented federal prosecution of racial violence until the Civil Rights era.' },
  { name: 'The 57 Named Victims',       role: 'Confirmed on the 2023 granite memorial. Over 90 more remain unidentified — bodies were thrown in the Red River.' },
];

export default function ColfaxMassacre() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#060809', padding: 'clamp(4rem,10vw,8rem) clamp(1.5rem,5vw,4rem)', position: 'relative', overflow: 'hidden' }}>
        {/* Harper's Weekly illustration of the Colfax Massacre, 1873 — public domain */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Harpers_colfax.jpg/1280px-Harpers_colfax.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
          opacity: 0.13, filter: 'grayscale(100%) sepia(20%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,8,9,0.55) 0%, rgba(6,8,9,0.2) 40%, rgba(6,8,9,0.75) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 40%, rgba(180,100,20,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 3, background: '#b8860b', borderRadius: 99 }} />
              <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b8860b' }}>Grant Parish, Louisiana · April 13, 1873 · Easter Sunday</span>
              <div style={{ width: 28, height: 3, background: '#b8860b', borderRadius: 99 }} />
            </div>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2.4rem,8vw,5.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#fff', marginBottom: 24 }}>
            The Colfax<br /><span style={{ color: '#b8860b' }}>Massacre</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} style={{ color: 'rgba(255,255,255,0.52)', fontSize: 'clamp(0.95rem,1.8vw,1.1rem)', lineHeight: 1.78, maxWidth: '56ch', marginBottom: 28 }}>
            On Easter Sunday 1873, white paramilitary forces besieged a courthouse held by Black militiamen in Louisiana, killing up to 153 men — many after they surrendered. The Supreme Court's response made white mob violence federally unpunishable for a generation.
          </motion.p>
          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Colfax, LA', 'Easter 1873', 'Reconstruction Era', 'Cruikshank (1876)'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)', fontFamily: 'Roboto Mono, monospace', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 99 }}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <div style={{ background: '#0a0908', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.05rem,2.2vw,1.4rem)', fontStyle: 'italic', fontWeight: 500, color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, margin: 0 }}>
            "The slaughter at Colfax taught the colored people of the South a great lesson: that it was better to compromise, to act with prudence, to be patient and watchful for the opportunity."
          </p>
          <div style={{ marginTop: 12, fontFamily: 'Roboto Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em' }}>
            — James K. Hogue, historian · The lesson that was taught was not patience. It was powerlessness.
          </div>
        </div>
      </div>

      {/* Facts */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#b8860b', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b8860b' }}>Key Facts</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 12 }}>
            {facts.map(f => (
              <div key={f.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px', boxShadow: '0 2px 8px rgba(53,53,53,0.05)' }}>
                <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.56rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8860b', marginBottom: 6 }}>{f.label}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem', fontWeight: 900, color: '#353535', marginBottom: 5, letterSpacing: '-0.01em' }}>{f.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{f.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal impact callout */}
      <section style={{ background: 'var(--bg-elevated)', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ background: 'rgba(192,57,43,0.05)', border: '1.5px solid rgba(192,57,43,0.2)', borderRadius: 14, padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <AlertTriangle size={18} color="#c0392b" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: '#c0392b', marginBottom: 6 }}>The Supreme Court's Gift to the Mob</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: '0 0 10px' }}>
                United States v. Cruikshank (1876) is one of the most consequential and destructive Supreme Court decisions in American history. By ruling that the 14th Amendment only restricts state government — not private individuals — the Court made it impossible for the federal government to prosecute mob violence against Black citizens.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#353535', lineHeight: 1.7, margin: 0 }}>
                This ruling directly enabled the terrorism of the Jim Crow era. Every lynching, every massacre, every act of paramilitary white supremacist violence that went unpunished for the next 90 years operated in the legal space Cruikshank created. The Supreme Court, handed the bodies of 150 men killed on Easter Sunday, responded by making sure it could never happen again — in court.
              </p>
            </div>
          </div>
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
            <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #3c6e71, #c0392b 25%, #c0392b 80%, #3c6e71)', borderRadius: 2 }} />
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
      <section style={{ background: '#fff', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ width: 22, height: 3, background: '#3c6e71', borderRadius: 99 }} />
            <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3c6e71' }}>People to Remember</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
            {figures.map(f => (
              <div key={f.name} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', fontWeight: 800, color: '#353535', marginBottom: 6 }}>{f.name}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.62 }}>{f.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section style={{ background: '#060809', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Scale size={32} color="#b8860b" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
            They defended a courthouse.<br /><span style={{ color: '#c0392b' }}>The mob burned it down.</span><br /><span style={{ color: '#3c6e71' }}>The Court said that was fine.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.78, margin: '0 auto 36px', maxWidth: '46ch' }}>
            The 1873 historical marker at Colfax called the massacre "the end of carpetbag misrule." It stood for 148 years. A new memorial listing 57 of the victims' names was finally dedicated in 2023.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/wilmington-coup')} style={{ background: '#3c6e71', color: '#fff', border: 'none', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7 }} onMouseEnter={e => e.currentTarget.style.background = '#2a5255'} onMouseLeave={e => e.currentTarget.style.background = '#3c6e71'}>
              Wilmington Coup <ArrowRight size={15} />
            </button>
            <a href="https://en.wikipedia.org/wiki/Colfax_massacre" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'rgba(255,255,255,0.62)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '0.9rem 2rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <ExternalLink size={14} /> Wikipedia Article
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
