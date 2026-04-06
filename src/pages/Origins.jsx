import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Music, ArrowRight, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { figures } from '../data/figures';

/* ─── Genre Data ─────────────────────────────────────────────────────────── */
const genres = [
  {
    id: 'rock',
    name: "Rock & Roll",
    decade: "1940s–1950s",
    birthplace: "Mississippi Delta → Memphis → Cleveland",
    color: "#e74c3c",
    emoji: "🎸",
    tagline: "The music America tried to erase — then claimed as its own.",
    origin: `Rock and roll was born from the Black American tradition. It is the direct child of the blues — which itself grew from the work songs, field hollers, and spirituals of enslaved Africans on Southern plantations. The term "rock and roll" was Black slang for decades before it entered mainstream vocabulary.

In the late 1940s, Black artists like Sister Rosetta Tharpe were already playing distorted electric guitar and blending gospel energy with rhythm and blues. Fats Domino, Little Richard, and Chuck Berry then crystallized the sound in the early 1950s — driving rhythms, electrified guitars, and raw vocal energy — creating exactly what we now recognize as rock and roll.

When white artists like Elvis Presley rose to mainstream fame performing these styles, they were heavily influenced by — and in many cases directly covering — records by Black artists. Sam Phillips of Sun Studio famously said he was looking for "a white boy who could sing like a Black man." Little Richard called himself "the architect of rock and roll." He wasn't wrong.

DJ Alan Freed, who popularized the term "rock and roll" on Cleveland radio in 1951, was programming music made almost entirely by Black artists for Black audiences. The genre was systematically appropriated — but its roots are undeniably and powerfully Black.`,
    keyFigures: [
      { name: "Sister Rosetta Tharpe", role: "The Godmother of Rock — pioneered electric guitar distortion in the 1940s", figureId: 165 },
      { name: "Chuck Berry", role: "Guitar innovation, showmanship, and songwriting that defined the genre", figureId: 101 },
      { name: "Little Richard", role: "Raw energy, falsetto screams, and flamboyant style — 'the architect of rock and roll'", figureId: 126 },
      { name: "Fats Domino", role: "New Orleans R&B piano style that launched rock's foundational sound", figureId: 164 },
      { name: "Bo Diddley", role: "The 'Bo Diddley beat' — a syncopated rhythm used in thousands of rock songs", figureId: 163 },
    ],
    milestones: [
      { year: 1945, event: "Sister Rosetta Tharpe records 'Strange Things Happening Every Day' — considered one of the first rock recordings" },
      { year: 1951, event: "DJ Alan Freed begins programming Black R&B music on WJW Cleveland, coining 'rock and roll'" },
      { year: 1955, event: "Chuck Berry's 'Maybellene' reaches #1 on the R&B chart and crosses over — rock goes mainstream" },
      { year: 1955, event: "Little Richard records 'Tutti Frutti' — one of the most important records in music history" },
      { year: 1956, event: "Elvis Presley rises to fame performing in a style directly influenced by Black artists he grew up listening to" },
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Chuck_Berry_Guitar.jpg/440px-Chuck_Berry_Guitar.jpg",
  },

  {
    id: 'pop',
    name: "Pop Music",
    decade: "1950s–1960s",
    birthplace: "Detroit, Michigan",
    color: "#e91e8c",
    emoji: "🎤",
    tagline: "Berry Gordy built a sound that conquered the world from a house in Detroit.",
    origin: `The modern pop music industry — its sound, its production techniques, its star-making machinery — was fundamentally built by Black Americans. Motown Records, founded by Berry Gordy Jr. in Detroit in 1959, didn't just make popular music. It invented the modern pop formula.

Gordy ran Motown like a factory with rigorous quality control. Songs were tested on real audiences before release. Artists were trained in etiquette, choreography, and diction. The production team — Holland-Dozier-Holland — created a wall-of-sound approach that made Motown records undeniable on the radio. The result was an unprecedented string of #1 hits that crossed every racial barrier.

Before Motown, pop radio was largely segregated. After Motown, the Billboard Hot 100 became the standard because you couldn't separate the Supremes from the Beatles — both were competing for the same #1 spot.

Michael Jackson later redefined pop's reach with Thriller (1982) — the best-selling album of all time — and his music videos on MTV forced the network (which had been systematically excluding Black artists) to integrate its programming. Whitney Houston's gospel-rooted vocal runs became the template that pop singers worldwide still imitate. Beyoncé, Rihanna, and essentially every pop artist today are working in a tradition built by Black Americans.`,
    keyFigures: [
      { name: "Berry Gordy Jr.", role: "Founded Motown Records in 1959 — invented the modern pop production model", figureId: null },
      { name: "Diana Ross & The Supremes", role: "12 #1 hits, crossed every racial and cultural barrier in the 1960s", figureId: null },
      { name: "Michael Jackson", role: "Thriller is the best-selling album in history; forced MTV to air Black artists", figureId: null },
      { name: "Whitney Houston", role: "Defined the gospel-pop crossover; her vocal runs are still the industry template", figureId: null },
      { name: "Stevie Wonder", role: "Musical genius who controlled his art and expanded pop's emotional depth", figureId: null },
    ],
    milestones: [
      { year: 1959, event: "Berry Gordy founds Motown Records in a Detroit house with an $800 loan" },
      { year: 1964, event: "The Supremes record 'Where Did Our Love Go' — first of 12 #1 hits in a 5-year run" },
      { year: 1983, event: "Michael Jackson's Thriller released — becomes the best-selling album of all time" },
      { year: 1983, event: "Michael Jackson performs the moonwalk on Motown 25 TV special — iconic pop moment" },
      { year: 1985, event: "Whitney Houston's debut album creates the template for modern pop vocal performance" },
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Michael_Jackson_-_Smooth_Criminal.jpg/440px-Michael_Jackson_-_Smooth_Criminal.jpg",
  },

  {
    id: 'rap',
    name: "Hip-Hop & Rap",
    decade: "1970s–1980s",
    birthplace: "South Bronx, New York City",
    color: "#9b59b6",
    emoji: "🎙️",
    tagline: "Born in the Bronx with no budget — now the most consumed music on Earth.",
    origin: `Hip-hop was born on August 11, 1973 at a back-to-school party in the recreation room of 1520 Sedgwick Avenue in the South Bronx. DJ Kool Herc — a Jamaican immigrant named Clive Campbell — isolated the percussion "break" in funk and soul records and looped it continuously between two turntables, creating an extended dance section. The crowd went wild. A new art form was born.

The South Bronx in the early 1970s was a war zone — buildings were burning, the economy had collapsed, poverty was everywhere. Hip-hop emerged not from affluence but from raw necessity. Four elements: DJing (turntablism), MCing (rapping), b-boying (breakdancing), and graffiti art. All four were created by Black and Latino youth from the most neglected zip codes in America.

Grandmaster Flash perfected the technical art of DJing. Afrika Bambaataa used hip-hop to channel gang energy into culture through the Universal Zulu Nation. The Sugarhill Gang's 'Rapper's Delight' (1979) took the sound national. Run-D.M.C. crossed hip-hop into rock territory and secured a $1.6M endorsement deal with Adidas — the first non-athlete sponsorship in history. N.W.A brought West Coast street reality to the world. And by the 1990s, with Tupac, Biggie, Jay-Z, and Nas, hip-hop had become the primary language of a generation.

Today hip-hop is the most-streamed music genre globally. It is a Black American creation — invented from nothing, powered by community, and built into a multi-billion dollar culture that shapes fashion, language, film, and business worldwide.`,
    keyFigures: [
      { name: "DJ Kool Herc", role: "Invented hip-hop at a 1973 Bronx party — created the breakbeat technique", figureId: null },
      { name: "Grandmaster Flash", role: "Perfected turntable technique; 'The Message' defined socially conscious rap", figureId: null },
      { name: "Afrika Bambaataa", role: "Founded the Universal Zulu Nation; channeled gang culture into hip-hop community", figureId: null },
      { name: "Tupac Shakur", role: "75 million records sold; rap as political poetry and social chronicle", figureId: 68 },
      { name: "Jay-Z", role: "Redefined what a rapper could achieve in business, culture, and artistry", figureId: null },
    ],
    milestones: [
      { year: 1973, event: "DJ Kool Herc invents hip-hop at 1520 Sedgwick Ave, South Bronx — August 11" },
      { year: 1979, event: "Sugarhill Gang's 'Rapper's Delight' brings hip-hop to national radio" },
      { year: 1982, event: "Grandmaster Flash's 'The Message' — first major socially conscious rap record" },
      { year: 1986, event: "Run-D.M.C. signs $1.6M Adidas deal — first non-athlete sponsorship in music" },
      { year: 1988, event: "N.W.A releases 'Straight Outta Compton' — West Coast hip-hop arrives nationally" },
      { year: 2017, event: "Hip-hop overtakes rock as the most consumed music genre in the United States" },
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tupac_Shakur_2Pac_19920715_01.jpg/440px-Tupac_Shakur_2Pac_19920715_01.jpg",
  },

  {
    id: 'funk',
    name: "Funk",
    decade: "1960s–1970s",
    birthplace: "Macon, Georgia → Cincinnati, Ohio",
    color: "#f39c12",
    emoji: "🎺",
    tagline: "James Brown hit a beat in 1965 that changed music's relationship with rhythm forever.",
    origin: `Funk was invented by James Brown. Full stop. In 1965, Brown told his band to put the musical emphasis on beat 1 — the "one" — instead of the traditional backbeat on beats 2 and 4. The entire groove was restructured around a driving, syncopated bass line and interlocking rhythmic parts. Every instrument became a percussion instrument. The result was "Papa's Got a Brand New Bag" — and music was never the same.

Funk stripped soul music of its smooth edges and replaced them with raw polyrhythm, slapping bass, chicken-scratch guitar, and horn stabs. It was music as physical experience — designed explicitly for the body. James Brown's band (the Famous Flames, then the J.B.'s) became the most sampled musical collective in history. The drum break from "Funky Drummer" alone has been sampled in over 1,000 songs.

Sly & the Family Stone expanded funk's reach with psychedelic influences and racially integrated bands. George Clinton's Parliament-Funkadelic took it to outer space — motherships, costumes, theatrical stage shows — and cemented funk as a complete artistic universe with its own mythology. Prince later synthesized funk with rock, pop, and R&B in ways that remain unmatched.

Funk's impact extends far beyond its own genre. It is the direct DNA of hip-hop (sample culture began with funk records), electronic dance music, neo-soul, and much of modern pop production. Every slapping bass line, every syncopated groove in modern music has a straight line back to James Brown in the mid-1960s.`,
    keyFigures: [
      { name: "James Brown", role: "Invented funk; most sampled artist in history; the Godfather of Soul", figureId: 86 },
      { name: "Sly & the Family Stone", role: "Brought psychedelic influences and integration to funk; massive crossover appeal", figureId: null },
      { name: "George Clinton (Parliament-Funkadelic)", role: "Created the 'P-Funk' mythology — funk as theatrical, cosmic art form", figureId: null },
      { name: "Bootsy Collins", role: "Redefined the bass guitar's role; funky bass as melody, percussion, and personality", figureId: null },
      { name: "Prince Rogers Nelson", role: "Synthesized funk with rock, pop, and R&B — one of history's greatest musicians", figureId: 127 },
    ],
    milestones: [
      { year: 1965, event: "James Brown records 'Papa's Got a Brand New Bag' — funk is officially born" },
      { year: 1970, event: "James Brown's 'Funky Drummer' recorded — becomes the most sampled drum break in history" },
      { year: 1971, event: "Sly & the Family Stone release 'There's a Riot Goin' On' — funk goes dark and experimental" },
      { year: 1975, event: "Parliament releases 'Mothership Connection' — the peak of cosmic P-Funk mythology" },
      { year: 1982, event: "Prince releases '1999' and '6th Sign' — synthesizes funk with pop and rock globally" },
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/James_Brown_-_Lights_At_Night.jpg/440px-James_Brown_-_Lights_At_Night.jpg",
  },

  {
    id: 'disco',
    name: "Disco",
    decade: "1970s",
    birthplace: "New York City (Harlem & Greenwich Village)",
    color: "#1abc9c",
    emoji: "🪩",
    tagline: "Disco was Black queer joy — a refuge that became a revolution.",
    origin: `Disco was born in the Black and Latino gay underground clubs of New York City in the early 1970s — a fact that has been systematically erased from mainstream pop history. The genre was a refuge: created by and for communities who faced daily discrimination — Black Americans, Latino Americans, and LGBTQ+ people — in a time when police regularly raided their gathering spaces.

The roots lie directly in the soul and funk music of Philly soul — the lush, orchestrated sound developed by producers Kenny Gamble and Leon Huff at Philadelphia International Records. Artists like Harold Melvin & the Blue Notes, MFSB, and The O'Jays created a dense, string-laden groove that DJs in underground clubs discovered worked perfectly for extended dance sets.

DJ Francis Grasso at the Sanctuary club pioneered beatmatching — seamlessly blending records so the dance floor never stopped. Nicky Siano, Frankie Knuckles, and Larry Levan developed the DJ as curator and spiritual guide of the dance experience. The Paradise Garage and the Gallery became Black queer spaces where the music and the community were inseparable.

Donna Summer, Barry White, Gloria Gaynor's 'I Will Survive,' and Chic's Nile Rodgers and Bernard Edwards brought disco to mainstream heights. When white mainstream America appropriated the sound (Saturday Night Fever, 1977), the original communities were pushed out — but the culture they built went on to directly birth house music, techno, and all of modern electronic dance music.`,
    keyFigures: [
      { name: "Frankie Knuckles", role: "The 'Godfather of House Music' — disco DJ whose sets birthed electronic dance music", figureId: null },
      { name: "Donna Summer", role: "The 'Queen of Disco' — her vocal performances defined the genre's emotional peak", figureId: null },
      { name: "Nile Rodgers & Bernard Edwards (Chic)", role: "'Le Freak,' 'Good Times' — Chic's bassline became hip-hop's foundation", figureId: null },
      { name: "Barry White", role: "Orchestrated soul-disco that defined romantic Black excellence of the era", figureId: null },
      { name: "Gloria Gaynor", role: "'I Will Survive' became the anthem of resilience — one of history's most enduring songs", figureId: null },
    ],
    milestones: [
      { year: 1972, event: "DJ Francis Grasso pioneers beatmatching at NYC underground clubs — disco's technical foundation" },
      { year: 1974, event: "MFSB's 'TSOP (The Sound of Philadelphia)' reaches #1 — Philly soul enters mainstream" },
      { year: 1975, event: "Gloria Gaynor records 'Never Can Say Goodbye' — first disco 12-inch single" },
      { year: 1978, event: "Chic's 'Le Freak' becomes Atlantic Records' best-selling single in history" },
      { year: 1979, event: "'Disco Demolition Night' in Chicago — backlash driven partly by racism and homophobia" },
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Donna_Summer_1978.jpg/440px-Donna_Summer_1978.jpg",
  },

  {
    id: 'soul',
    name: "Soul Music",
    decade: "1950s–1960s",
    birthplace: "Georgia → Tennessee → Detroit",
    color: "#c0392b",
    emoji: "🎵",
    tagline: "Soul music is the sound of Black America refusing to be broken.",
    origin: `Soul music emerged in the late 1950s as Black gospel music — the sacred sound of the Black church — fused with rhythm and blues. The result was music of almost unbearable emotional power. It was not simply popular music; it was a cultural declaration that Black Americans were fully human, fully feeling, and fully alive, regardless of what segregation law and white supremacy claimed.

Ray Charles is often credited with creating soul music in 1954 when he recorded 'I Got a Woman' — taking the gospel melody of 'It Must Be Jesus' and rewriting it as a secular love song. The Black church had long kept gospel and R&B strictly separate. Ray Charles merged them, and the reaction was enormous — some called it sacrilege, audiences called it transcendence.

Sam Cooke brought sophistication and lyrical depth. His 1964 recording 'A Change Is Gonna Come' — written after being refused accommodation at a whites-only motel — became one of the most important civil rights anthems ever written. Aretha Franklin, who grew up singing in her father's Detroit church, channeled gospel power into pop and R&B with a vocal authority that has never been matched. Her 1967 recording of 'Respect' — Otis Redding's song, but Franklin's total transformation of it — became an anthem for both Black liberation and women's liberation simultaneously.

Motown refined soul into pop perfection. Stax Records in Memphis created a rawer, grittier alternative. Both were wholly Black-owned enterprises that built musical empires from virtually nothing. Soul music's legacy is total: it is the emotional foundation of all modern popular music.`,
    keyFigures: [
      { name: "Ray Charles", role: "Fused gospel and R&B in 1954 — widely credited with creating soul music", figureId: null },
      { name: "Sam Cooke", role: "'A Change Is Gonna Come' — the most important civil rights song ever written", figureId: null },
      { name: "Aretha Franklin", role: "The Queen of Soul — 'Respect' redefined what a voice could demand and receive", figureId: null },
      { name: "Otis Redding", role: "Raw vocal urgency that defined Southern soul before his death at 26", figureId: null },
      { name: "Nina Simone", role: "Fused soul, jazz, blues, and civil rights into an art form with no equal", figureId: 64 },
    ],
    milestones: [
      { year: 1954, event: "Ray Charles records 'I Got a Woman' — gospel meets R&B; soul music is born" },
      { year: 1957, event: "Sam Cooke's 'You Send Me' reaches #1 — the most important crossover in soul history" },
      { year: 1961, event: "Motown Records produces its first major hits — soul becomes pop's dominant sound" },
      { year: 1964, event: "Sam Cooke records 'A Change Is Gonna Come' after being refused at a segregated hotel" },
      { year: 1967, event: "Aretha Franklin's 'Respect' reaches #1 — both a musical and political watershed moment" },
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Nina_Simone_2.jpg/440px-Nina_Simone_2.jpg",
  },

  {
    id: 'dance',
    name: "Electronic Dance Music",
    decade: "1980s–1990s",
    birthplace: "Chicago, Illinois & Detroit, Michigan",
    color: "#3498db",
    emoji: "🎧",
    tagline: "House and techno were invented in Black America. The world dances to their blueprint.",
    origin: `Electronic dance music — house, techno, and all their descendants — was invented in Black communities in Chicago and Detroit in the 1980s. This is one of the most significant and least-acknowledged cultural exports in American history.

House music was created in Chicago at the Warehouse club by DJ Frankie Knuckles beginning in 1977. Named after the Warehouse, "house music" referred to the DJ's residency. Knuckles blended disco records, extended them with reel-to-reel tape edits, and layered in synthesizer bass lines and drum machines. He and Larry Levan (at New York's Paradise Garage) developed a spiritual approach to DJing — the DJ as preacher, the dance floor as congregation.

The Roland TR-808 and TR-909 drum machines — initially considered failures — became the sonic foundation of house. Larry Heard (Mr. Fingers) created "deep house" with tracks of profound emotional depth. Jesse Saunders and Vince Lawrence produced 'On and On' (1984) — widely considered the first commercially released house record.

Detroit techno came shortly after, developed by three Black friends: Juan Atkins, Derrick May, and Kevin Saunderson — later called "The Belleville Three." Inspired by Parliament-Funkadelic, Kraftwerk, and the decline of the auto industry around them, they created a futuristic, machine-driven music that was simultaneously Black, American, and unlike anything before it.

Both genres traveled to Europe — particularly the UK, Germany, and the Netherlands — where they were embraced, commercialized, and often credited to white European artists. Today EDM is a multi-billion dollar global industry whose foundations — rhythmically, sonically, and culturally — were laid entirely by Black Americans in two Midwestern cities.`,
    keyFigures: [
      { name: "Frankie Knuckles", role: "Invented house music at the Warehouse, Chicago (1977) — 'The Godfather of House'", figureId: null },
      { name: "Larry Levan", role: "DJed the Paradise Garage (NYC) — created the sacred concept of the dance floor", figureId: null },
      { name: "Juan Atkins", role: "Co-created Detroit techno — first released 'Techno!' in 1988 naming the genre", figureId: null },
      { name: "Derrick May", role: "Belleville Three; 'Strings of Life' (1987) — the most iconic techno record ever made", figureId: null },
      { name: "Larry Heard (Mr. Fingers)", role: "'Can You Feel It' — defined deep house as an emotional and spiritual experience", figureId: null },
    ],
    milestones: [
      { year: 1977, event: "Frankie Knuckles begins his residency at The Warehouse, Chicago — house music is born" },
      { year: 1984, event: "'On and On' by Jesse Saunders & Vince Lawrence — first commercially released house record" },
      { year: 1986, event: "Larry Heard's 'Can You Feel It' defines deep house as a spiritual music form" },
      { year: 1987, event: "Derrick May's 'Strings of Life' released — the most important techno record in history" },
      { year: 1988, event: "UK's 'Second Summer of Love' brings Chicago house and Detroit techno to mass European audiences" },
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Frankie_Knuckles_DJ.jpg/440px-Frankie_Knuckles_DJ.jpg",
  },

  {
    id: 'country',
    name: "Country Music",
    decade: "1920s–1930s",
    birthplace: "Appalachia → Mississippi Delta",
    color: "#e67e22",
    emoji: "🤠",
    tagline: "Country music has Black roots that Nashville spent decades trying to bury.",
    origin: `Country music's origins are deeply, undeniably African American — a truth that the mainstream country music industry has spent decades obscuring. The genre grew from the blending of two traditions: the Celtic folk and ballad traditions brought by Scots-Irish immigrants, and the blues, work songs, and musical innovations of enslaved and freedmen African Americans across the South.

The banjo — country music's most iconic instrument — is an African instrument. It was brought to the Americas by enslaved West Africans who played a gourd-based instrument called the akonting. White Appalachian musicians learned to play it from Black Americans. The five-string banjo that defines bluegrass and old-time country was shaped almost entirely by Black musical tradition.

Harmonica playing — central to country and folk — was taught to white musicians largely by Black blues players in the Mississippi Delta and Appalachian South. Guitar styles, tunings, and slide technique that became "country" playing were developed by Black musicians.

DeFord Bailey was one of the Grand Ole Opry's first stars and its first Black artist, performing from 1927 onward. He was fired in 1941, and the Opry's management systematically worked to erase his legacy. Charley Pride broke through in the 1960s, becoming one of country's best-selling artists — the first Black artist since DeFord Bailey to chart. Lil Nas X's 2019 'Old Town Road' — a Black artist's country-rap hybrid — was removed from Billboard's country chart in what many recognized as a racially motivated decision.

The string band tradition, the flat-picking technique, the storytelling lyricism, the blue notes in country melody — all trace directly to Black American musical culture. Country's debt to its Black roots is enormous, and largely unpaid.`,
    keyFigures: [
      { name: "DeFord Bailey", role: "Grand Ole Opry's first star and first Black artist (1927–1941) — 'The Harmonica Wizard'", figureId: null },
      { name: "Lead Belly (Huddie Ledbetter)", role: "Twelve-string guitar master who bridged blues, folk, and country traditions", figureId: null },
      { name: "Charley Pride", role: "First Black artist to win the CMA Entertainer of the Year award (1971); 52 charted hits", figureId: null },
      { name: "Ray Charles", role: "'Modern Sounds in Country and Western Music' (1962) — broke every barrier between genres", figureId: null },
      { name: "Lil Nas X", role: "'Old Town Road' was the longest-running #1 in Billboard Hot 100 history before the controversy", figureId: null },
    ],
    milestones: [
      { year: 1927, event: "DeFord Bailey becomes the Grand Ole Opry's first regular performer and first Black star" },
      { year: 1939, event: "Lead Belly's 'Midnight Special' and 'Goodnight, Irene' become folk and country standards" },
      { year: 1962, event: "Ray Charles' 'Modern Sounds in Country and Western' tops pop charts — Black mastery of the genre" },
      { year: 1971, event: "Charley Pride wins CMA Entertainer of the Year — first Black artist to do so" },
      { year: 2019, event: "Lil Nas X's 'Old Town Road' runs 19 weeks at #1 before being pulled from country charts" },
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Charley_Pride.jpg/440px-Charley_Pride.jpg",
  },
];

/* ─── Components ─────────────────────────────────────────────────────────── */
function GenreCard({ genre, isActive, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      style={{
        background: isActive ? `linear-gradient(135deg, ${genre.color}22, ${genre.color}10)` : 'var(--bg-card)',
        border: `1px solid ${isActive ? genre.color + '60' : 'var(--border)'}`,
        borderRadius: 14, padding: '18px 20px', cursor: 'pointer', textAlign: 'left',
        boxShadow: isActive ? `0 0 24px ${genre.color}22` : 'var(--shadow-card)',
        transition: 'all 0.2s', width: '100%', position: 'relative', overflow: 'hidden',
        fontFamily: 'inherit',
      }}
    >
      {isActive && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${genre.color}, ${genre.color}80)`, borderRadius: '14px 14px 0 0' }} />
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <span style={{ fontSize: 26, lineHeight: 1 }}>{genre.emoji}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: isActive ? genre.color : 'var(--text)', fontSize: 15, fontWeight: 700, marginBottom: 3, fontFamily: 'Playfair Display, serif' }}>
            {genre.name}
          </div>
          <div style={{ color: 'var(--text-faint)', fontSize: 11, fontWeight: 500 }}>{genre.decade}</div>
          <div style={{ color: 'var(--text-faint)', fontSize: 10, marginTop: 2 }}>{genre.birthplace}</div>
        </div>
        {isActive && <ChevronUp size={14} color={genre.color} style={{ flexShrink: 0, marginTop: 2 }} />}
        {!isActive && <ChevronDown size={14} color="var(--text-faint)" style={{ flexShrink: 0, marginTop: 2 }} />}
      </div>
    </motion.button>
  );
}

function GenreDetail({ genre }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Hero image */}
      <div style={{ position: 'relative', height: 'clamp(200px, 30vw, 280px)', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
        <img
          src={genre.image}
          alt={genre.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(25%) brightness(0.6)' }}
          onError={e => { e.target.style.display = 'none'; }}
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${genre.color}55 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, var(--bg-card) 100%)' }} />

        <div style={{ position: 'absolute', top: 16, left: 18 }}>
          <span style={{
            background: genre.color, color: '#fff', fontSize: 10, fontWeight: 800,
            letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 20,
          }}>
            {genre.emoji} {genre.name}
          </span>
        </div>

        <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontStyle: 'italic', fontFamily: 'Georgia, serif', lineHeight: 1.5, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            "{genre.tagline}"
          </p>
        </div>
      </div>

      {/* Content body */}
      <div style={{
        background: 'var(--bg-card)', border: `1px solid ${genre.color}30`, borderTop: 'none',
        borderRadius: '0 0 16px 16px', padding: 'clamp(20px, 4vw, 36px)',
      }}>

        {/* Origin story */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: genre.color, borderRadius: 2 }} />
            <span style={{ color: genre.color, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              The Origin Story
            </span>
          </div>
          {genre.origin.split('\n\n').map((para, i) => (
            <p key={i} style={{
              color: 'var(--text-muted)', fontSize: 'clamp(0.875rem, 1.5vw, 0.975rem)',
              lineHeight: 1.9, fontFamily: 'Georgia, "Playfair Display", serif', marginBottom: '1.25em',
            }}>
              {para}
            </p>
          ))}
        </div>

        {/* Key Figures */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: genre.color, borderRadius: 2 }} />
            <span style={{ color: genre.color, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Key Figures
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {genre.keyFigures.map((fig, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 14, padding: '13px 16px',
                  background: 'var(--bg-elevated)', borderRadius: 12,
                  border: `1px solid ${genre.color}20`,
                  cursor: fig.figureId ? 'pointer' : 'default',
                  transition: 'border-color 0.2s',
                }}
                onClick={() => fig.figureId && navigate(`/figure/${fig.figureId}`)}
                onMouseEnter={e => fig.figureId && (e.currentTarget.style.borderColor = genre.color + '50')}
                onMouseLeave={e => e.currentTarget.style.borderColor = genre.color + '20'}
              >
                <div style={{
                  width: 34, height: 34, borderRadius: 10, flexShrink: 0, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: 14,
                  background: `${genre.color}18`, border: `1px solid ${genre.color}30`,
                  fontFamily: 'Playfair Display, serif', fontWeight: 700, color: genre.color,
                }}>
                  {fig.name[0]}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 3 }}>
                    <span style={{ color: 'var(--text)', fontSize: 14, fontWeight: 600 }}>{fig.name}</span>
                    {fig.figureId && (
                      <span style={{
                        background: `${genre.color}18`, color: genre.color,
                        border: `1px solid ${genre.color}30`, fontSize: 9, fontWeight: 700,
                        padding: '2px 7px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase',
                        display: 'flex', alignItems: 'center', gap: 3,
                      }}>
                        <ExternalLink size={8} /> In Archive
                      </span>
                    )}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 12.5, lineHeight: 1.5 }}>{fig.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: genre.color, borderRadius: 2 }} />
            <span style={{ color: genre.color, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Key Milestones
            </span>
          </div>
          <div style={{ position: 'relative', paddingLeft: 22 }}>
            <div style={{ position: 'absolute', left: 7, top: 8, bottom: 8, width: 2, background: `linear-gradient(to bottom, ${genre.color}, ${genre.color}20)`, borderRadius: 2 }} />
            {genre.milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                style={{ display: 'flex', gap: 14, marginBottom: 16, alignItems: 'flex-start', position: 'relative' }}
              >
                <div style={{
                  position: 'absolute', left: -19, width: 10, height: 10, borderRadius: '50%',
                  background: genre.color, border: '2px solid var(--bg-card)', zIndex: 1,
                  boxShadow: `0 0 8px ${genre.color}50`,
                  top: 4, flexShrink: 0,
                }} />
                <div style={{ flex: 1 }}>
                  <span style={{
                    color: genre.color, fontSize: 12, fontWeight: 800,
                    fontFamily: 'Playfair Display, serif', marginRight: 10,
                  }}>
                    {m.year}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.55 }}>{m.event}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Origins() {
  const [activeGenre, setActiveGenre] = useState('rock');

  const active = genres.find(g => g.id === activeGenre);

  return (
    <div style={{ padding: 'clamp(1.25rem, 3vw, 2.5rem) clamp(1.25rem, 4vw, 2.5rem)' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 32 }}>
        <div className="section-label" style={{ marginBottom: 6 }}>The Untold Story</div>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--text)', marginBottom: 10, lineHeight: 1.15 }}>
          Origins of American Music
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', maxWidth: 600, lineHeight: 1.75 }}>
          Rock, pop, rap, funk, soul, disco, dance, and country all share a common root:
          the creativity, resilience, and genius of <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Black Americans</strong>.
          These are the origin stories that mainstream history forgot to tell.
        </p>

        <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
          {genres.map(g => (
            <button
              key={g.id}
              onClick={() => setActiveGenre(g.id)}
              style={{
                padding: '6px 14px', borderRadius: 20, fontSize: 12.5, cursor: 'pointer',
                border: `1px solid ${activeGenre === g.id ? g.color : 'var(--border)'}`,
                background: activeGenre === g.id ? `${g.color}18` : 'transparent',
                color: activeGenre === g.id ? g.color : 'var(--text-muted)',
                fontFamily: 'Inter, sans-serif', fontWeight: activeGenre === g.id ? 700 : 400,
                transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              <span>{g.emoji}</span> {g.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 280px) minmax(0, 1fr)', gap: 22, alignItems: 'flex-start' }}>

        {/* Left: genre list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'sticky', top: 20 }}>
          {genres.map(g => (
            <GenreCard
              key={g.id}
              genre={g}
              isActive={activeGenre === g.id}
              onClick={() => setActiveGenre(g.id)}
            />
          ))}
        </div>

        {/* Right: detail panel */}
        <div>
          <AnimatePresence mode="wait">
            {active && <GenreDetail key={active.id} genre={active} />}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
