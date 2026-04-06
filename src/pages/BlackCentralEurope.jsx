import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Crown, Sword, Church, Globe, ChevronRight, ExternalLink } from 'lucide-react';
import { figures } from '../data/figures';
import FigureImage from '../components/FigureImage';

/* ─── Page-specific data ────────────────────────────────────────────────── */
const bceIds = [148, 149, 150, 151, 152, 153, 154, 155];
const moorIds = [156, 157, 158, 159, 160, 161, 162];
const bceFigures = figures.filter(f => bceIds.includes(f.id));
const moorFigures = figures.filter(f => moorIds.includes(f.id));

const timeline = [
  {
    year: "250 AD",
    event: "Saint Maurice born in Thebes, Egypt — commander of the all-Christian Theban Legion",
    category: "Military",
  },
  {
    year: "286 AD",
    event: "Saint Maurice and the entire Theban Legion (≈6,600 men) martyred at Agaunum, Switzerland for refusing pagan orders",
    category: "Religion",
  },
  {
    year: "937 AD",
    event: "Emperor Otto I founds Magdeburg Cathedral dedicated to Saint Maurice — making a Black African the patron saint of the Holy Roman Empire",
    category: "Politics",
  },
  {
    year: "c. 1165",
    event: "The 'Letter of Prester John' circulates across Europe — establishing the legend of a powerful Black Christian king in Africa",
    category: "Culture",
  },
  {
    year: "c. 1200",
    event: "Wolfram von Eschenbach writes Parzival — featuring Feirefiz, a biracial Black knight equal to the white hero",
    category: "Literature",
  },
  {
    year: "c. 1221",
    event: "African diplomat Abuissac concludes a ten-year free trade treaty with Emperor Frederick II",
    category: "Politics",
  },
  {
    year: "c. 1240",
    event: "The Magdeburg Cathedral sculpture depicts Saint Maurice as a Black African man — the earliest major dignified depiction of a Black person in European art",
    category: "Art",
  },
  {
    year: "1254",
    event: "Johannes dictus Morus ('John called the Moor') dies — documented as a Black court figure in Holy Roman Empire records",
    category: "History",
  },
  {
    year: "c. 1370",
    event: "The 'Black Magus/Caspar' first depicted in Prague art — one of the Three Wise Men portrayed as a Black African king",
    category: "Art",
  },
  {
    year: "c. 1380",
    event: "The 'Coburg Moor' — a Black African figure — appears on Coburg's city coat of arms; remains there to this day",
    category: "History",
  },
  {
    year: "1441",
    event: "Ethiopian Christian delegation attends the Council of Florence — real African Christians meet European scholars for the first time",
    category: "Religion",
  },
  {
    year: "1470–1472",
    event: "Hans Memling paints the Adoration of the Magi with Balthazar as a dignified young Black African king — the standard becomes universal in European art",
    category: "Art",
  },
  {
    year: "1492",
    event: "Martin Behaim's Globe — the first terrestrial globe — depicts African kingdoms and their peoples",
    category: "Geography",
  },
];

const moorTimeline = [
  {
    year: "711 AD",
    event: "Tariq ibn Ziyad leads 7,000 Moorish troops across the Strait of Gibraltar — launching the conquest of Iberia. He lands at the rock now named after him: Jabal Tariq (Gibraltar).",
    category: "Military",
  },
  {
    year: "718–722 AD",
    event: "Moors control approximately 90% of the Iberian Peninsula within a decade. The Visigothic kingdom collapses. Islamic governance brings religious tolerance for Christians and Jews.",
    category: "Politics",
  },
  {
    year: "756 AD",
    event: "Abd al-Rahman I founds the Emirate of Córdoba — the first independent Muslim state in Europe, establishing Moorish Spain as a distinct civilization.",
    category: "Politics",
  },
  {
    year: "c. 789 AD",
    event: "Ziryab ('Blackbird') — a Black musician from Baghdad — arrives in Córdoba. He revolutionizes music, dining, fashion, and personal hygiene, essentially creating European courtly culture.",
    category: "Culture",
  },
  {
    year: "784 AD",
    event: "Construction begins on the Great Mosque of Córdoba (La Mezquita) — one of the architectural masterpieces of the world, still standing today.",
    category: "Art",
  },
  {
    year: "912–961 AD",
    event: "Reign of Abd al-Rahman III — Córdoba becomes the most sophisticated city in Western Europe with 500,000 inhabitants, paved and lit streets, 700 mosques, 300 public baths, and the largest library in Europe.",
    category: "Politics",
  },
  {
    year: "929 AD",
    event: "Abd al-Rahman III declares the Caliphate of Córdoba — the pinnacle of Moorish power, rivaling Baghdad and Constantinople as a world center of civilization.",
    category: "Politics",
  },
  {
    year: "c. 936 AD",
    event: "Al-Zahrawi (Abulcasis) born near Córdoba. He becomes the father of modern surgery, inventing 200+ surgical instruments still used today and writing the defining medical encyclopedia of the medieval world.",
    category: "Medicine",
  },
  {
    year: "c. 1000 AD",
    event: "Al-Andalus hosts the most advanced universities, hospitals, and libraries in Europe. Scholars from across Europe travel to Moorish Spain to study mathematics, astronomy, medicine, and philosophy.",
    category: "Education",
  },
  {
    year: "1085 AD",
    event: "Toledo falls to Christian forces — but the vast Moorish libraries are preserved. Translation schools convert Arabic texts to Latin, beginning the transmission of Greek and Islamic science to Christian Europe.",
    category: "Education",
  },
  {
    year: "1126 AD",
    event: "Ibn Rushd (Averroës) born in Córdoba. His commentaries on Aristotle will reshape European philosophy, directly influence Thomas Aquinas, and help launch the European Renaissance.",
    category: "Philosophy",
  },
  {
    year: "1212 AD",
    event: "Battle of Las Navas de Tolosa — a turning point in the Reconquista. Moorish political power begins to contract. Granada remains the last Moorish kingdom.",
    category: "Military",
  },
  {
    year: "1304 AD",
    event: "Ibn Battuta born in Tangier, Morocco. He becomes history's greatest pre-modern traveler — covering 75,000+ miles, documenting the Mali Empire's wealth, and leaving the definitive African perspective on the medieval world.",
    category: "Exploration",
  },
  {
    year: "1492 AD",
    event: "The fall of Granada — the last Moorish kingdom. Nearly 800 years of Moorish civilization in Europe ends. Ferdinand and Isabella expel Muslims and Jews from Spain, eliminating the most cosmopolitan civilization in medieval Europe.",
    category: "History",
  },
];

const moorEssays = [
  {
    heading: "The Moors: Who Were They?",
    icon: Globe,
    color: "#2980b9",
    body: `The term 'Moor' was used by medieval Europeans to describe the Muslim peoples who conquered and ruled the Iberian Peninsula (modern Spain and Portugal) from 711 to 1492 AD. The Moors were predominantly Berber Africans from North Africa, along with Arabs, Sub-Saharan Africans, and later Iberian converts to Islam. The word 'Moor' itself derives from the Latin 'Maurus' — meaning an inhabitant of Mauretania, modern-day Morocco and Algeria.

This was not an Arab conquest with a few African soldiers attached. The Berber-African general Tariq ibn Ziyad commanded the initial force that crossed into Europe. The Berber people — indigenous North Africans with ancestral ties to Sub-Saharan Africa — formed the backbone of Moorish armies and the majority of Moorish Spain's population. Their presence represents nearly 800 continuous years of African-led civilization on European soil.`,
  },
  {
    heading: "Al-Andalus: Africa's Gift to Western Civilization",
    icon: BookOpen,
    color: "#16a085",
    body: `The Moorish civilization of Al-Andalus was not simply a Muslim outpost in Europe — it was the most advanced, tolerant, and intellectually productive civilization in the medieval Western world. Under the Caliphate of Córdoba, the city held a population of perhaps 500,000 — larger than Paris and London combined. It had paved streets, public streetlights, running water systems, public baths, and hospitals when most of Europe lived in muddy villages with no sanitation.

The Great Library of Córdoba held over 400,000 manuscripts at a time when the largest library in Christian Europe had perhaps a few hundred. Muslim, Jewish, and Christian scholars worked side by side in a culture of convivencia — coexistence — that produced breakthroughs in medicine, mathematics, astronomy, philosophy, and agriculture.

When medieval European scholars wanted to learn science, they traveled to Moorish Spain. The works of Aristotle, preserved and expanded by Arabic scholars, were translated from Arabic into Latin in Toledo and Córdoba — and these translations launched the European Renaissance. Europe's intellectual awakening was ignited by African and Arab knowledge.`,
  },
  {
    heading: "Science, Medicine, and Innovation",
    icon: Crown,
    color: "#e67e22",
    body: `The Moors transformed every domain of knowledge they touched. Al-Zahrawi (Abulcasis) of Córdoba invented surgical instruments still in use today and wrote the medical encyclopedia used in European medical schools for 500 years. Ibn Rushd (Averroës) wrote the philosophical commentaries that reshaped all of European thought. Al-Kwarizmi's algebra (itself an Arabic word from 'al-jabr') gave Europe the mathematical foundation for every subsequent scientific advance.

Moorish agricultural innovation transformed European eating: they introduced oranges, lemons, sugar cane, rice, cotton, apricots, figs, pomegranates, artichokes, spinach, and dozens of other crops to the Iberian Peninsula and eventually all of Europe. They developed irrigation systems that turned arid land into farmland. Their architectural advances — the horseshoe arch, intricate geometric tilework, muqarnas ceiling vaulting — influenced European building for centuries.

Ziryab — an African musician who arrived in Córdoba in the 9th century — essentially invented the concept of high culture in Europe: seasonal fashion, a three-course meal structure, deodorant, toothpaste, and a musical tradition that influenced European classical music.`,
  },
  {
    heading: "The Erasure of Moorish Africa",
    icon: Sword,
    color: "#c0392b",
    body: `The Reconquista — the centuries-long Christian re-conquest of Iberia — culminated in 1492 with the fall of Granada. Ferdinand and Isabella expelled both the Moors and the Jewish population of Spain, dismantling the most tolerant and cosmopolitan civilization in medieval European history.

What followed was systematic erasure. The Spanish Inquisition targeted anyone with Muslim or Jewish ancestry. The Arabic language was banned. Moorish libraries were burned. The word 'Moor' became a slur. European historians rewrote the medieval period as a purely European-Christian narrative, obscuring the African and Arab foundations of their own Renaissance.

Shakespeare's Othello — written around 1603, just over a century after the fall of Granada — reflects the residual anxiety: a noble, accomplished Black general who is ultimately undone by the suspicion his Blackness breeds. The 'Moor of Venice' was a recognizable type to Shakespeare's audience precisely because African Moorish people had been a real, powerful presence in Europe for 800 years — and had only recently been expelled and erased.`,
  },
];

const categoryColors = {
  Military:    "#c0392b",
  Religion:    "#8e44ad",
  Politics:    "#2980b9",
  Culture:     "#e67e22",
  Literature:  "#16a085",
  Art:         "#d35400",
  History:     "#DAA520",
  Geography:   "#27ae60",
  Medicine:    "#1abc9c",
  Education:   "#3498db",
  Philosophy:  "#9b59b6",
  Exploration: "#e67e22",
};

const essayBlocks = [
  {
    heading: "The Myth of the 'White' Middle Ages",
    icon: Globe,
    color: "#2980b9",
    body: `One of the most persistent myths in Western culture is that medieval Europe was an all-white civilization with no meaningful contact with African people. The evidence from art, literature, theology, and diplomatic records tells a completely different story.

Black Africans were not absent from medieval Central Europe — they were present, documented, celebrated, and in some cases venerated as saints. The question isn't whether Black people existed in medieval European culture. They did. The real question is why this history has been so aggressively suppressed.`,
  },
  {
    heading: "Saint Maurice: A Black Patron of the Holy Roman Empire",
    icon: Sword,
    color: "#c0392b",
    body: `The most powerful example is Saint Maurice. Born in Thebes, Egypt, Maurice commanded the Theban Legion — an all-Christian Roman military unit. His martyrdom around 286 AD for refusing to persecute fellow Christians made him one of the earliest Christian martyrs.

Emperor Otto I made Maurice the patron saint of the Holy Roman Empire in 937 AD. His face appeared in sacred art, on cathedral facades, and on imperial regalia. Around 1240, a sculptor in Magdeburg Cathedral carved Maurice as a Black African man with naturalistic features — realistic sub-Saharan facial structure, full lips, 'woolly' hair. This sculpture is the earliest known major artwork in European history to depict a Black person with dignity and individuality rather than as a symbol.

This was not an accident. It was a statement: that the patron of the empire, the figure who embodied its spiritual authority, was African.`,
  },
  {
    heading: "Black Figures in Literature and Art",
    icon: BookOpen,
    color: "#16a085",
    body: `Medieval literature also documented this presence. Wolfram von Eschenbach's Parzival (c. 1200) features Feirefiz — a biracial knight who is the equal of the story's white hero in every way. His mother was a Black African queen. His skin is described as 'mottled' — black and white. He is noble, chivalrous, wealthy, and spiritually worthy of salvation. Written 800 years ago, this is one of the earliest literary depictions of a biracial person in Western literature — and he is portrayed as a hero.

In religious art, the tradition of the Black Magus — one of the Three Wise Men depicted as an African king — spread across Northern Europe from the 14th century. Hans Memling, Albrecht Dürer, and Andrea Mantegna all painted the Magi with a Black African king of evident dignity and status. Medieval theology insisted that Africa — represented by one of the three Magi — was present at the birth of Christianity.`,
  },
  {
    heading: "Diplomacy, Courts, and Real Presence",
    icon: Crown,
    color: "#e67e22",
    body: `Beyond art and literature, Black Africans held documented positions in medieval Central European courts. Emperor Frederick II — the most cosmopolitan ruler in medieval European history — maintained Black soldiers, musicians, and advisors at his court in Sicily. The African diplomat Abuissac concluded a ten-year free trade treaty with Frederick II around 1221, exercising full diplomatic agency with the most powerful monarch in Europe.

Records note 'Johannes dictus Morus' — 'John called the Moor' — as a named Black court figure who died in 1254. Named. Documented. Not anonymous. The city of Coburg has carried a Black African figure on its coat of arms since approximately 1380 — a continuous civic record spanning over 640 years.`,
  },
  {
    heading: "The Atlantic Slave Trade and the Erasure",
    icon: Church,
    color: "#8e44ad",
    body: `This dignified, complex medieval tradition did not disappear gradually. It was actively destroyed. The Atlantic slave trade, beginning in the 1440s, required an ideology that could justify treating human beings as property. That ideology demanded that Blackness be recast — from the noble, holy, chivalric tradition of Saint Maurice and the Black Magus — into a mark of inferiority, savagery, and sub-humanity.

The suppression was thorough. In Nazi Germany, Saint Maurice's image was removed from Coburg's coat of arms because of his African features — the swastika replaced him until 1945. Mainstream European art history minimized the tradition of the Black Magus. The story of Feirefiz was rarely taught. The name of Abuissac was unknown to most historians.

What the site BlackCentralEurope.com documents — and what these figures represent — is the pre-colonial reality: that Black Africans were a recognized, respected, and even venerated presence in medieval European civilization, and that this reality was deliberately buried to make room for the ideology that powered the slave trade.`,
  },
];

/* ─── Components ─────────────────────────────────────────────────────────── */
function FigureChip({ figure, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -2, borderColor: 'var(--gold)' }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        borderRadius: 12, cursor: 'pointer', transition: 'border-color 0.2s',
      }}
    >
      <FigureImage
        src={figure.image_url}
        name={figure.name}
        era={figure.era}
        style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0, filter: 'grayscale(10%)' }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: 'var(--text)', fontSize: 13.5, fontWeight: 600, marginBottom: 2, lineHeight: 1.25 }}>{figure.name}</div>
        <div style={{ color: 'var(--text-faint)', fontSize: 11 }}>
          {figure.born ? `c. ${figure.born}` : 'Medieval Era'} · {figure.birthplace.split(',')[0]}
        </div>
        <div style={{ display: 'flex', gap: 4, marginTop: 4, flexWrap: 'wrap' }}>
          {figure.tags.slice(0, 2).map(t => (
            <span key={t} className="tag" style={{ fontSize: 9 }}>{t}</span>
          ))}
        </div>
      </div>
      <ArrowRight size={14} color="var(--text-faint)" style={{ flexShrink: 0 }} />
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function BlackCentralEurope() {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const tabs = [
    { id: 'overview',  label: 'Overview' },
    { id: 'moors',     label: `The Moors (${moorFigures.length})` },
    { id: 'figures',   label: `Medieval Figures (${bceFigures.length})` },
    { id: 'timeline',  label: 'Timeline' },
  ];

  return (
    <div style={{ padding: 'clamp(1.25rem, 3vw, 2.5rem) clamp(1.25rem, 4vw, 2.5rem)', maxWidth: 1000 }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 36 }}>

        {/* Source badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <div style={{ height: 1, width: 28, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
          <span style={{
            background: 'var(--gold-dim)', border: '1px solid var(--border-gold)',
            color: 'var(--gold)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
            padding: '4px 10px', borderRadius: 20, textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            <Globe size={9} /> Source: blackcentraleurope.com
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.75rem)', color: 'var(--text)', lineHeight: 1.15, marginBottom: 14 }}>
          Black Presence in{' '}
          <span className="gold-shimmer">Medieval Europe</span>
          <br />
          <span style={{ color: 'var(--text-muted)', fontSize: '0.55em', fontWeight: 400, fontFamily: 'Inter, sans-serif', letterSpacing: 0 }}>
            1000 – 1500 AD
          </span>
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.9rem, 1.5vw, 1.02rem)', maxWidth: 640, lineHeight: 1.8, marginBottom: 22 }}>
          The myth of an all-white medieval Europe erases centuries of documented history. Black Africans
          appear in Central European art, literature, diplomacy, and religious tradition throughout the medieval
          period — as saints, heroes, kings, diplomats, and courtiers. This is their story.
        </p>

        {/* Quick stats */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { label: 'Moorish Figures', value: moorFigures.length },
            { label: 'Medieval Figures', value: bceFigures.length },
            { label: 'Years of Moorish Rule', value: '781' },
            { label: 'Timeline Events', value: timeline.length + moorTimeline.length },
          ].map(({ label, value }) => (
            <div key={label} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 10, padding: '10px 18px', textAlign: 'center',
            }}>
              <div style={{ color: 'var(--gold)', fontSize: 'clamp(1rem, 2vw, 1.35rem)', fontWeight: 700, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{value}</div>
              <div style={{ color: 'var(--text-faint)', fontSize: 10.5, marginTop: 3, fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Tabs ──────────────────────────────────────────── */}
      <div style={{ display: 'flex', gap: 4, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: 4, marginBottom: 28, width: 'fit-content' }}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: '8px 20px', borderRadius: 9, fontSize: 13.5, cursor: 'pointer',
            border: 'none', fontFamily: 'Inter, sans-serif', fontWeight: activeTab === tab.id ? 600 : 400,
            background: activeTab === tab.id ? 'linear-gradient(135deg, var(--gold-dark), var(--gold))' : 'transparent',
            color: activeTab === tab.id ? '#fff' : 'var(--text-muted)',
            transition: 'all 0.2s',
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">

        {/* ── Overview Tab ────────────────────────────────── */}
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Essay blocks */}
            {essayBlocks.map((block, i) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    marginBottom: 24,
                    background: 'var(--bg-card)',
                    border: `1px solid ${block.color}25`,
                    borderLeft: `3px solid ${block.color}`,
                    borderRadius: '0 14px 14px 0',
                    padding: 'clamp(18px, 3vw, 30px)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                      background: `${block.color}18`, border: `1px solid ${block.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={15} color={block.color} />
                    </div>
                    <h3 style={{ color: 'var(--text)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 700, lineHeight: 1.3 }}>
                      {block.heading}
                    </h3>
                  </div>
                  {block.body.split('\n\n').map((para, j) => (
                    <p key={j} style={{
                      color: 'var(--text-muted)',
                      fontSize: 'clamp(0.875rem, 1.4vw, 0.975rem)',
                      lineHeight: 1.9, fontFamily: 'Georgia, "Playfair Display", serif',
                      marginBottom: j < block.body.split('\n\n').length - 1 ? '1.1em' : 0,
                    }}>
                      {para}
                    </p>
                  ))}
                </motion.div>
              );
            })}

            {/* Figure preview strip */}
            <div style={{ marginTop: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div>
                  <div className="section-label">In the Archive</div>
                  <h3 style={{ color: 'var(--text)', fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>Featured Figures</h3>
                </div>
                <button
                  className="btn-outline"
                  onClick={() => setActiveTab('figures')}
                  style={{ fontSize: 12, padding: '0.45rem 1rem' }}
                >
                  View All <ChevronRight size={12} />
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
                {bceFigures.slice(0, 4).map(f => (
                  <FigureChip key={f.id} figure={f} onClick={() => navigate(`/figure/${f.id}`)} />
                ))}
              </div>
            </div>

            {/* Source credit */}
            <div style={{
              marginTop: 28, padding: '16px 20px',
              background: 'var(--bg-elevated)', border: '1px solid var(--border)',
              borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 12,
            }}>
              <ExternalLink size={15} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ color: 'var(--text)', fontSize: 13, fontWeight: 600, marginBottom: 3 }}>
                  Source: Black Central Europe
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1.6, margin: 0 }}>
                  Historical research sourced from <strong>blackcentraleurope.com</strong> — a scholarly project
                  documenting the presence of Black Africans in Central European history from 1000–1500 AD
                  through primary sources, medieval art, literature, and diplomatic records.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Moors Tab ───────────────────────────────────── */}
        {activeTab === 'moors' && (
          <motion.div
            key="moors"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero banner */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(41,128,185,0.12), rgba(22,160,133,0.08))',
              border: '1px solid rgba(41,128,185,0.25)',
              borderRadius: 16, padding: 'clamp(18px, 3vw, 28px)',
              marginBottom: 28,
            }}>
              <div style={{ color: '#2980b9', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>
                711 – 1492 AD · Iberian Peninsula
              </div>
              <h2 style={{ color: 'var(--text)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', marginBottom: 10, lineHeight: 1.2 }}>
                The Moors: 781 Years of African Civilization in Europe
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.875rem, 1.4vw, 0.97rem)', lineHeight: 1.8, maxWidth: 680, margin: 0 }}>
                From 711 to 1492, Berber-African Muslims ruled the Iberian Peninsula (modern Spain and Portugal),
                creating the most advanced civilization in medieval Western Europe — and laying the intellectual
                foundations of the European Renaissance. This history has been systematically erased.
              </p>
            </div>

            {/* Essay blocks */}
            {moorEssays.map((block, i) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    marginBottom: 22,
                    background: 'var(--bg-card)',
                    border: `1px solid ${block.color}25`,
                    borderLeft: `3px solid ${block.color}`,
                    borderRadius: '0 14px 14px 0',
                    padding: 'clamp(16px, 3vw, 26px)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                      background: `${block.color}18`, border: `1px solid ${block.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={15} color={block.color} />
                    </div>
                    <h3 style={{ color: 'var(--text)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', fontWeight: 700, lineHeight: 1.3 }}>
                      {block.heading}
                    </h3>
                  </div>
                  {block.body.split('\n\n').map((para, j) => (
                    <p key={j} style={{
                      color: 'var(--text-muted)',
                      fontSize: 'clamp(0.875rem, 1.4vw, 0.975rem)',
                      lineHeight: 1.9, fontFamily: 'Georgia, "Playfair Display", serif',
                      marginBottom: j < block.body.split('\n\n').length - 1 ? '1.1em' : 0,
                    }}>
                      {para}
                    </p>
                  ))}
                </motion.div>
              );
            })}

            {/* Moorish figures */}
            <div style={{ marginTop: 8, marginBottom: 8 }}>
              <div className="section-label" style={{ marginBottom: 6 }}>In the Archive</div>
              <h3 style={{ color: 'var(--text)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: 16 }}>Key Moorish Figures</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {moorFigures.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="card"
                  onClick={() => navigate(`/figure/${f.id}`)}
                  style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', display: 'flex' }}
                >
                  <div style={{ width: 90, flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                    <FigureImage
                      src={f.image_url}
                      name={f.name}
                      era={f.era}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(15%) brightness(0.85)', minHeight: 100 }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, var(--bg-card))' }} />
                  </div>
                  <div style={{ padding: '14px 18px', flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 5 }}>
                      <h3 style={{ color: 'var(--text)', fontSize: 14.5, fontWeight: 700, lineHeight: 1.25 }}>{f.name}</h3>
                      <span style={{ color: 'var(--text-faint)', fontSize: 11, fontWeight: 600, fontFamily: 'Playfair Display, serif', flexShrink: 0 }}>
                        {f.born ? `b. ${f.born}` : 'Medieval'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: 5, marginBottom: 7, flexWrap: 'wrap' }}>
                      {f.tags.slice(0, 3).map(t => <span key={t} className="tag" style={{ fontSize: 9 }}>{t}</span>)}
                    </div>
                    <p className="line-clamp-2" style={{ color: 'var(--text-muted)', fontSize: 12.5, lineHeight: 1.6 }}>
                      {f.bio}
                    </p>
                    <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 4, color: 'var(--gold)', fontSize: 12, fontWeight: 600 }}>
                      Read full profile <ArrowRight size={11} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Moorish timeline */}
            <div style={{ marginTop: 36 }}>
              <div className="section-label" style={{ marginBottom: 6 }}>Chronology</div>
              <h3 style={{ color: 'var(--text)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: 20 }}>Moorish Spain: A Timeline</h3>
              <div style={{ position: 'relative', paddingLeft: 28 }}>
                <div style={{
                  position: 'absolute', left: 8, top: 8, bottom: 0, width: 2,
                  background: 'linear-gradient(to bottom, #2980b9, transparent)', borderRadius: 2,
                }} />
                {moorTimeline.map((item, i) => {
                  const catColor = categoryColors[item.category] || '#2980b9';
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      style={{ display: 'flex', gap: 16, marginBottom: 16, position: 'relative', alignItems: 'flex-start' }}
                    >
                      <div style={{
                        position: 'absolute', left: -23, width: 12, height: 12, borderRadius: '50%',
                        background: catColor, border: '2px solid var(--bg)', zIndex: 1,
                        boxShadow: `0 0 8px ${catColor}60`, top: 5, flexShrink: 0,
                      }} />
                      <div style={{
                        flex: 1, background: 'var(--bg-card)', border: `1px solid ${catColor}25`,
                        borderRadius: 12, padding: '12px 16px',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                          <span style={{ color: catColor, fontSize: 13, fontWeight: 800, fontFamily: 'Playfair Display, serif' }}>
                            {item.year}
                          </span>
                          <span style={{
                            background: `${catColor}18`, color: catColor,
                            border: `1px solid ${catColor}30`, fontSize: 9.5, fontWeight: 700,
                            padding: '2px 8px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>
                            {item.category}
                          </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                          {item.event}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Figures Tab ─────────────────────────────────── */}
        {activeTab === 'figures' && (
          <motion.div
            key="figures"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ marginBottom: 18 }}>
              <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.7 }}>
                These {bceFigures.length} figures — saints, literary characters, theological traditions, and documented historical persons —
                represent Black African presence in Central European civilization between 250 AD and 1500 AD.
                Click any figure to read their full profile.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {bceFigures.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="card"
                  onClick={() => navigate(`/figure/${f.id}`)}
                  style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', display: 'flex' }}
                >
                  <div style={{ width: 90, flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                    <FigureImage
                      src={f.image_url}
                      name={f.name}
                      era={f.era}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(15%) brightness(0.85)', minHeight: 100 }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, var(--bg-card))' }} />
                  </div>
                  <div style={{ padding: '16px 20px', flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 6 }}>
                      <h3 style={{ color: 'var(--text)', fontSize: 15, fontWeight: 700, lineHeight: 1.25 }}>{f.name}</h3>
                      <span style={{ color: 'var(--text-faint)', fontSize: 11, fontWeight: 600, fontFamily: 'Playfair Display, serif', flexShrink: 0 }}>
                        {f.born ? `c. ${f.born}` : 'Medieval'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: 5, marginBottom: 8, flexWrap: 'wrap' }}>
                      {f.tags.map(t => <span key={t} className="tag" style={{ fontSize: 9 }}>{t}</span>)}
                    </div>
                    <p className="line-clamp-3" style={{ color: 'var(--text-muted)', fontSize: 12.5, lineHeight: 1.6 }}>
                      {f.bio}
                    </p>
                    <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 4, color: 'var(--gold)', fontSize: 12, fontWeight: 600 }}>
                      Read full profile <ArrowRight size={11} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Timeline Tab ────────────────────────────────── */}
        {activeTab === 'timeline' && (
          <motion.div
            key="timeline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.7, marginBottom: 24 }}>
              A chronological record of documented Black African presence and influence in Central Europe from 250 AD to 1500 AD.
            </p>

            <div style={{ position: 'relative', paddingLeft: 28 }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute', left: 8, top: 8, bottom: 0, width: 2,
                background: 'linear-gradient(to bottom, var(--gold), transparent)',
                borderRadius: 2,
              }} />

              {timeline.map((item, i) => {
                const catColor = categoryColors[item.category] || 'var(--gold)';
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{ display: 'flex', gap: 16, marginBottom: 20, position: 'relative', alignItems: 'flex-start' }}
                  >
                    {/* Dot */}
                    <div style={{
                      position: 'absolute', left: -23, width: 12, height: 12, borderRadius: '50%',
                      background: catColor, border: '2px solid var(--bg)', zIndex: 1,
                      boxShadow: `0 0 8px ${catColor}60`, top: 5, flexShrink: 0,
                    }} />

                    <div style={{
                      flex: 1, background: 'var(--bg-card)', border: `1px solid ${catColor}25`,
                      borderRadius: 12, padding: '14px 18px',
                      transition: 'border-color 0.2s',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7, flexWrap: 'wrap' }}>
                        <span style={{
                          color: catColor, fontSize: 13, fontWeight: 800,
                          fontFamily: 'Playfair Display, serif',
                        }}>
                          {item.year}
                        </span>
                        <span style={{
                          background: `${catColor}18`, color: catColor,
                          border: `1px solid ${catColor}30`, fontSize: 9.5, fontWeight: 700,
                          padding: '2px 8px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase',
                        }}>
                          {item.category}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.65, margin: 0 }}>
                        {item.event}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
