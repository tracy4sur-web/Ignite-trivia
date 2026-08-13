const QUIZ_REPOSITORY = [
  // ── WEEK 1 — Know Your Roots ────────────────────────────────────
  {
    id: "week-001",
    title: "Know Your Roots",
    date: "June 15, 2026",
    event: "Ignite IQ — EnVegan Camp Creek",
    categories: [
      { id: "roots-culture", name: "Roots & Culture", color: "#1A1A1A", emoji: "🌍", scored: true, questions: [
        { q: "What West African region is most credited with bringing collard greens to the American South through the transatlantic slave trade?", a: "West Africa — specifically present-day Ghana, Nigeria, and Senegal.", source: "Michael Twitty, 'The Cooking Gene' (2017)", spark: "What food from your culture tells a story about where your people came from?" },
        { q: "What Caribbean island nation has the highest concentration of Rastafarians — a movement known for its Ital (vegan/vegetarian) diet?", a: "Jamaica. The Rastafari movement originated there in the 1930s and promotes Ital living — natural, plant-based food as spiritual practice.", source: "Encyclopedia Britannica: Rastafari Movement", spark: "" },
        { q: "In what year did Juneteenth become an official U.S. federal holiday?", a: "2021. President Biden signed the Juneteenth National Independence Day Act on June 17, 2021.", source: "Public Law 117-17, signed June 17, 2021", spark: "" },
        { q: "Which Atlanta HBCU is known as 'The House' and has produced more Black male doctors and Ph.Ds than any other institution in the U.S.?", a: "Morehouse College. Founded in 1867, it is the only all-male HBCU in the United States.", source: "Morehouse College Office of Institutional Research", spark: "" },
        { q: "What ancient African empire, once the wealthiest in the world, was centered in present-day Mali and led by Mansa Musa?", a: "The Mali Empire. At its peak in the 14th century, Mansa Musa's 1324 pilgrimage to Mecca crashed the gold market across North Africa and the Middle East.", source: "Encyclopedia Britannica: Mali Empire; British Museum records", spark: "" }
      ]},
      { id: "plant-power", name: "Plant Power", color: "#2D6A2D", emoji: "🌱", scored: true, questions: [
        { q: "What is aquafaba — and what common baking ingredient does it replace?", a: "Aquafaba is the liquid from canned chickpeas. It whips up like egg whites and is used as a vegan egg substitute.", source: "Aquafaba.com; coined by Joel Roessel & Goose Wohlt, 2015", spark: "" },
        { q: "Which plant-based protein is considered 'complete' because it contains all nine essential amino acids?", a: "Soy protein (soybeans / edamame). One of the few plant foods equivalent to meat as a complete protein.", source: "Academy of Nutrition and Dietetics, 2016 Position Paper", spark: "" },
        { q: "EnVegan Camp Creek is known for its vegan version of what classic Philadelphia sandwich?", a: "The Philly Cheesesteak — one of their most reviewed dishes, made entirely plant-based.", source: "EnVegan Google Reviews; Yelp listing", spark: "" },
        { q: "Nutritional yeast is popular in vegan cooking — what distinctive flavor does it add?", a: "A cheesy, savory, umami flavor. Often fortified with B12 and used in everything from vegan mac and cheese to popcorn.", source: "Harvard T.H. Chan School of Public Health", spark: "" },
        { q: "What food trend went wildly viral on TikTok in early 2021 involving a block of cheese baked with cherry tomatoes then tossed with pasta?", a: "Baked Feta Pasta. Originating in Finland, it caused feta cheese shortages worldwide.", source: "New York Times Food, February 2021", spark: "" }
      ]},
      { id: "atlanta-iq", name: "Atlanta IQ", color: "#0A3D6B", emoji: "🍑", scored: true, questions: [
        { q: "In what year did Atlanta host the Summer Olympic Games?", a: "1996. The Centennial Olympic Games ran July 19 – August 4, 1996.", source: "International Olympic Committee official records", spark: "" },
        { q: "OutKast released their critically acclaimed album 'ATLiens' in what year?", a: "1996. Released August 27, 1996 on LaFace Records.", source: "Billboard charts; LaFace Records release history", spark: "" },
        { q: "What is the name of the Atlanta corridor that connects several HBCUs and is sometimes called the 'Black college corridor'?", a: "The Atlanta University Center corridor — anchored by MLK Jr. Drive.", source: "Atlanta Regional Commission; AUC Consortium", spark: "" },
        { q: "Which Georgia-born rapper released 'Old Town Road' — the longest-running #1 in Billboard Hot 100 history at the time?", a: "Lil Nas X. 'Old Town Road' spent 19 weeks at #1 in 2019.", source: "Billboard Hot 100 chart history, 2019", spark: "" },
        { q: "What Georgia congressman — known as 'the conscience of Congress' — was a Freedom Rider who passed away in July 2020?", a: "Congressman John Lewis. He represented Georgia's 5th Congressional District for 33 years.", source: "U.S. Congress Biographical Directory", spark: "" }
      ]},
      { id: "faith-wisdom", name: "Faith & Wisdom", color: "#6B2D0A", emoji: "✨", scored: true, questions: [
        { q: "In which book of the Bible does Daniel ask to eat only vegetables and water instead of the king's food?", a: "Daniel, Chapter 1. After 10 days, he looked healthier than all who ate royal food.", source: "Daniel 1:8-16, Holy Bible", spark: "" },
        { q: "The word 'Sabbath' comes from which ancient language — and what does it mean?", a: "Hebrew. From 'Shabbat', meaning 'to rest' or 'to cease.'", source: "Strong's Hebrew Concordance #7676", spark: "" },
        { q: "Who said: 'Darkness cannot drive out darkness; only light can do that'?", a: "Dr. Martin Luther King Jr. From 'Strength to Love,' published 1963.", source: "King, M.L. Jr., 'Strength to Love,' 1963", spark: "" },
        { q: "What biblical figure was sold into slavery by his brothers and became second in command of Egypt?", a: "Joseph, son of Jacob (Israel). His story spans Genesis 37-50.", source: "Genesis 37-50, Holy Bible", spark: "" },
        { q: "In Proverbs 31, the virtuous woman is described doing something surprisingly entrepreneurial — what is it?", a: "She considers a field and buys it; from her profits she plants a vineyard (Proverbs 31:16).", source: "Proverbs 31:10-31, Holy Bible", spark: "" }
      ]},
      { id: "pop-culture", name: "Pop Culture Remix", color: "#5B2D82", emoji: "🎤", scored: true, questions: [
        { q: "Beyonce went plant-based before what major 2019 performance that became a Netflix documentary?", a: "Coachella. She adopted a vegan diet 44 days before her historic 2018 headlining set.", source: "Netflix 'Homecoming' (2019); Vogue interview, 2018", spark: "" },
        { q: "What Atlanta-set FX/Hulu series starring Donald Glover won the Emmy for Outstanding Comedy Series?", a: "'Atlanta.' It ran for 4 seasons (2016-2022) and won the Emmy in 2017.", source: "Emmy Awards database; FX Networks", spark: "" },
        { q: "What iconic Georgia congressman and civil rights leader passed away in July 2020?", a: "John Lewis — 33 years representing Georgia's 5th district.", source: "U.S. Congress Biographical Directory", spark: "" },
        { q: "What East Point, GA community closes every gathering with 'Build. Ignite. Fortify. Live Victoriously'?", a: "Ignite House Atlanta (@ignit3house).", source: "ignitehouseatlanta.com", spark: "" },
        { q: "Fill in the blank: The opening line of the 'Ignite Your Morning' podcast is: 'The darkness is over, a new day is here — welcome to Ignite Your Morning, your wake-up call for _______ living.'", a: "Victorious.", source: "Ignite Your Morning Podcast", spark: "" }
      ]}
    ]
  },

  // ── WEEK 2 — Understanding the World We Live In ─────────────────
  {
    id: "week-002",
    title: "Understanding the World We Live In",
    date: "July 23, 2026",
    event: "No Agenda — Ignite House Atlanta",
    categories: [
      { id: "facts-changed-world", name: "Facts That Changed the World", color: "#1A1A2E", emoji: "🌍", scored: true, questions: [
        { q: "In 1928, Alexander Fleming discovered penicillin by accident when mold contaminated his lab. How many lives is penicillin estimated to have saved since the 1940s?", a: "Estimates reach 200 million lives saved.", source: "Oxford University research; BBC Science, 2020", spark: "What everyday thing do you think is quietly saving lives right now?" },
        { q: "In 1989, the Berlin Wall fell — but what event actually triggered the wall opening that night on November 9, 1989?", a: "A miscommunication. Spokesman Gunter Schabowski said new travel regulations took effect 'immediately.'", source: "BBC History; The New York Times archive, November 10, 1989", spark: "Has a misunderstanding ever accidentally caused something good in your life?" },
        { q: "Gutenberg's printing press (c.1440) sparked the Protestant Reformation and Scientific Revolution. What was the very first book it mass-produced?", a: "The Gutenberg Bible — the Latin Vulgate Bible. Around 180 copies printed. 49 still exist.", source: "British Library; Smithsonian Magazine, 2020", spark: "" },
        { q: "Rosa Parks refused to give up her seat in 1955. But who was the 15-year-old who did it nine months earlier?", a: "Claudette Colvin. Civil rights leaders feared her pregnancy would hurt the movement. Rosa Parks was chosen because of her background as an NAACP secretary.", source: "Claudette Colvin: Twice Toward Justice by Phillip Hoose (2009); NPR History", spark: "" },
        { q: "The 1918 Spanish Flu infected an estimated 500 million people. How many people died globally?", a: "50 to 100 million deaths — more than WWI and WWII combined.", source: "CDC Historical Archives; National Geographic, 2018", spark: "" }
      ]},
      { id: "people-changed-world", name: "People That Changed the World", color: "#1B3A2D", emoji: "✊", scored: true, questions: [
        { q: "Harriet Tubman freed around 70 people via the Underground Railroad. What did she do after the Civil War that most history books skip?", a: "She became a spy and scout for the Union Army and led the Combahee River Raid (1863), freeing 700 enslaved people in one night.", source: "Kate Clifford Larson, 'Bound for the Promised Land' (2004)", spark: "" },
        { q: "Nikola Tesla invented AC electrical current. He died broke and alone in 1943. What happened to his research?", a: "The U.S. government seized his documents immediately and held them classified for decades.", source: "FBI FOIA Tesla files (declassified 2016); PBS American Experience", spark: "" },
        { q: "Madam C.J. Walker became the first self-made female millionaire in American history. What was her job before she built her empire?", a: "She was a laundress earning $1.50 a day. She developed her own hair formula after experiencing hair loss.", source: "A'Lelia Bundles, 'On Her Own Ground' (2001)", spark: "" },
        { q: "Dr. Martin Luther King Jr. is remembered for 'I Have a Dream.' In his final years, what shifted his focus — and cost him major allies?", a: "Economic inequality and the Vietnam War. His 1967 'Beyond Vietnam' speech cost him White House support.", source: "The King Center Archives; Taylor Branch, 'At Canaan's Edge' (2006)", spark: "" },
        { q: "Malala Yousafzai was shot in the head by the Taliban at 15 for advocating girls' education. She became the youngest Nobel Peace Prize laureate at 17. What did she study at Oxford?", a: "Philosophy, Politics and Economics — graduating in 2020.", source: "Malala Fund official biography; Oxford University 2020", spark: "" }
      ]},
      { id: "world-we-live-in", name: "The World We Live In", color: "#2C1810", emoji: "⚙️", scored: true, questions: [
        { q: "The U.S. has 4% of the world's population. What percentage of the world's prison population does it hold?", a: "Approximately 20%. The U.S. incarcerates more people than any other nation.", source: "Prison Policy Initiative, 2024; NAACP Criminal Justice Fact Sheet", spark: "" },
        { q: "What is the median wealth gap between white families and Black families in the United States?", a: "White families hold approximately 7-8 times the median wealth of Black families.", source: "Federal Reserve Survey of Consumer Finances, 2022; Brookings Institution", spark: "" },
        { q: "Instagram, TikTok, and Facebook are free to use. How do these companies make money?", a: "They sell attention — your behavior, preferences, and patterns sold to advertisers. Meta earned $134 billion in ad revenue in 2023.", source: "Meta Q4 2023 earnings; Shoshana Zuboff, 'The Age of Surveillance Capitalism' (2019)", spark: "" },
        { q: "What percentage of the world's wealth is owned by the top 1% of people globally?", a: "As of 2024, approximately 45%. The bottom 50% own about 2%.", source: "Oxfam Inequality Report 2024; Credit Suisse Global Wealth Report 2023", spark: "" },
        { q: "The U.S. spends more on healthcare per person than any other country. Where does the U.S. rank globally in health outcomes?", a: "35th to 40th globally, depending on the measure. U.S. life expectancy is lower than 40 other countries.", source: "Commonwealth Fund International Health Policy Survey, 2023; WHO Global Health Observatory", spark: "" }
      ]}
    ]
  },

  // ── WEEK 3 — Biblical IQ ────────────────────────────────────────
  {
    id: "week-003",
    title: "Biblical IQ",
    date: "July 27, 2026",
    event: "Faith Community Gathering — Ignite House Atlanta",
    categories: [
      { id: "people-who-didnt-listen", name: "People Who Didn't Listen", emoji: "🙉", color: "#3D1A00", scored: true, questions: [
        { q: "Adam and Eve were told not to eat from one specific tree. What reason did the serpent give Eve that convinced her to eat it anyway?", a: "The serpent told Eve they would not die — but would become like God, knowing good and evil. (Genesis 3:4-6)", source: "Genesis 3:1-7, NIV/KJV", spark: "" },
        { q: "Jonah was told by God to go to Nineveh. Where did he go instead — and how did God respond?", a: "Jonah booked passage to Tarshish. God sent a violent storm. He was swallowed by a great fish for three days. (Jonah 1:1-17)", source: "Jonah 1, NIV/KJV", spark: "" },
        { q: "King Saul was told to completely destroy the Amalekites. What did he actually do — and what did it cost him?", a: "Saul spared King Agag and the best livestock. Samuel told him 'To obey is better than sacrifice.' God rejected Saul as king. (1 Samuel 15)", source: "1 Samuel 15, NIV/KJV", spark: "" },
        { q: "Lot's wife was told not to look back as they fled Sodom. She looked back. What happened to her?", a: "She turned into a pillar of salt. (Genesis 19:26; Luke 17:32)", source: "Genesis 19:17-26; Luke 17:32, NIV/KJV", spark: "" },
        { q: "Moses was told to speak to the rock to bring forth water. What did he do instead — and what did it cost him?", a: "He struck the rock twice in anger. God still produced the water — but Moses could not enter the Promised Land. (Numbers 20:7-12)", source: "Numbers 20:1-13, NIV/KJV", spark: "" }
      ]},
      { id: "biblical-politics", name: "Politics", emoji: "⚖️", color: "#0A2040", scored: true, questions: [
        { q: "The Israelites demanded a king even though God warned them it would go badly. What specific things did God say the king would do to them?", a: "The king would take their sons for his army, their daughters as servants, their best fields. God said they would cry out — and He would not answer. (1 Samuel 8:10-18)", source: "1 Samuel 8, NIV/KJV", spark: "" },
        { q: "Esther had to decide whether to approach the king uninvited — a crime punishable by death — to save her people. What famous words did her cousin Mordecai say?", a: "'Who knows whether you have not come to the kingdom for such a time as this?' (Esther 4:13-14)", source: "Esther 4:1-14, NIV/KJV", spark: "" },
        { q: "Pontius Pilate found no guilt in Jesus but handed him over to be crucified anyway. What did Pilate do publicly?", a: "He washed his hands in front of the crowd and declared 'I am innocent of this man's blood.' (Matthew 27:24-25)", source: "Matthew 27:11-26, NIV/KJV", spark: "" },
        { q: "Daniel was thrown into the lions' den not for a crime, but for political reasons. What was the real motivation?", a: "Jealousy. Daniel distinguished himself so much that the king planned to set him over the whole kingdom. Others targeted his prayer life. (Daniel 6:1-9)", source: "Daniel 6, NIV/KJV", spark: "" },
        { q: "Joseph was second in command of all Egypt. How did he get there from being a slave in prison?", a: "He interpreted Pharaoh's dream about seven fat and thin cows, predicting seven years of abundance followed by famine. Pharaoh appointed him over all Egypt the same day. (Genesis 41)", source: "Genesis 41, NIV/KJV", spark: "" }
      ]},
      { id: "great-love-stories", name: "Great Love Stories", emoji: "❤️", color: "#3D0A1A", scored: true, questions: [
        { q: "Jacob worked 7 years to marry Rachel. What happened on the wedding night — and what did he do about it?", a: "Laban substituted his older daughter Leah in the dark. Jacob agreed to work another 7 years for Rachel — totaling 14 years of labor. (Genesis 29:15-30)", source: "Genesis 29:1-30, NIV/KJV", spark: "" },
        { q: "The Song of Solomon describes romantic love with vivid imagery. Why did some religious leaders debate whether it belonged in the Bible?", a: "It was considered too erotic for scripture. Rabbi Akiva called it the 'holy of holies' of all writings. Most theologians read it as an allegory of God's love for Israel.", source: "Song of Solomon; Mishnah Yadayim 3:5", spark: "" },
        { q: "Ruth's declaration of loyalty to Naomi is one of the most famous lines in the Bible. What did she say?", a: "'Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.' (Ruth 1:16-17)", source: "Ruth 1:1-18, NIV/KJV", spark: "" },
        { q: "David and Jonathan had one of the most intense friendships in the Bible. What covenant did Jonathan make with David?", a: "Jonathan, as heir to the throne, made a covenant that David would be king and he would be second. He gave David his robe, armor, sword, bow and belt. (1 Samuel 18:1-4)", source: "1 Samuel 18-20; 2 Samuel 1:26, NIV/KJV", spark: "" },
        { q: "Abigail is one of the most overlooked figures in the Bible. Her husband Nabal insulted David. What did she do?", a: "Without telling her husband, she gathered food and wine and rode out to intercept David's army. She appealed to his better nature and convinced him not to spill blood. Nabal died 10 days later — and David asked Abigail to be his wife. (1 Samuel 25)", source: "1 Samuel 25, NIV/KJV", spark: "" }
      ]}
    ]
  },

  // ── WEEK 4 — Right Now, Right Here ──────────────────────────────
  {
    id: "week-004",
    title: "Right Now, Right Here",
    date: "July 30, 2026",
    event: "Ignite IQ — Ignite House Atlanta",
    categories: [
      { id: "current-events-now", name: "Current Events", color: "#12263F", emoji: "📰", scored: true, questions: [
        { q: "THIS YEAR — On July 19, 2026, the first World Cup ever played across three countries ended in extra time. Which nation won it?", a: "Spain beat Argentina 1-0. Ferran Torres scored the winner in extra time. The first 48-team World Cup, co-hosted by the United States, Mexico and Canada.", source: "FIFA official match report; ESPN, July 19, 2026", spark: "" },
        { q: "THIS YEAR — In April 2026, four astronauts traveled farther from Earth than any humans in history. What was the mission called?", a: "Artemis II — the first crewed Moon mission since 1972. They flew 252,756 miles from Earth on April 6, breaking Apollo 13's 1970 record.", source: "NASA mission records, April 2026", spark: "" },
        { q: "THIS YEAR — On July 4, 2026, the United States marked a milestone. What was it?", a: "The 250th anniversary of the Declaration of Independence — the semiquincentennial. The Declaration was adopted July 4, 1776.", source: "U.S. Semiquincentennial Commission", spark: "" },
        { q: "FIVE YEARS AGO — In March 2021, a single ship got stuck sideways and stopped roughly 12% of all world trade for almost a week. Name the ship or the waterway.", a: "The Ever Given, wedged across the Suez Canal in Egypt for six days. Around 400 ships backed up waiting.", source: "Suez Canal Authority; Lloyd's List, March 2021", spark: "" },
        { q: "TEN YEARS AGO — In November 2016, a baseball team won its first championship in 108 years — the longest drought in American professional sports. Which team?", a: "The Chicago Cubs, who beat the Cleveland Indians in seven games. Their last title had been in 1908.", source: "Major League Baseball official records, November 2, 2016", spark: "" }
      ]},
      { id: "food-world-comfort", name: "Food: World & Comfort", color: "#3D2200", emoji: "🍜", scored: true, questions: [
        { q: "Thai, Indian, Korean and Sichuan cooking are all famous for heat. But chili peppers didn't exist anywhere in Asia before about 1500. Where did they come from?", a: "The Americas — domesticated in Mexico and Central and South America. They spread to Asia through the Columbian Exchange after 1492.", source: "Smithsonian Institution; Alfred Crosby, 'The Columbian Exchange' (1972)", spark: "" },
        { q: "A British foreign secretary called this dish 'a true British national dish' in a 2001 speech. It's an Indian-sounding curry invented in Scotland. Name it.", a: "Chicken tikka masala. Robin Cook called it Britain's national dish in April 2001. Most likely invented in Glasgow.", source: "Robin Cook, speech to the Social Market Foundation, April 19, 2001", spark: "" },
        { q: "Ketchup began as something completely different — and had no tomatoes in it at all. What was the original?", a: "A fermented fish sauce from southeast China, called something close to 'ke-tsiap.' Tomatoes weren't added until the early 1800s in America.", source: "Dan Jurafsky, 'The Language of Food' (2014); Smithsonian Magazine", spark: "" },
        { q: "Vanilla comes from an orchid pollinated by one specific bee, found only in Mexico. So how does the rest of the world grow it?", a: "By hand — using a technique invented in 1841 by a 12-year-old enslaved boy named Edmond Albius on the island of Reunion. Nearly all the world's vanilla is still hand-pollinated using his method.", source: "Smithsonian Magazine; National Geographic", spark: "" },
        { q: "The croissant is the most French thing on any breakfast table. Which country did it actually come from?", a: "Austria. It descends from the Viennese kipferl. It came to Paris in the 1830s with an Austrian entrepreneur. The French still call croissants 'viennoiserie' — 'things from Vienna.'", source: "Jim Chevallier, 'August Zang and the French Croissant' (2009)", spark: "" }
      ]},
      { id: "atlanta-and-the-a", name: "Atlanta & The A", color: "#5C2200", emoji: "🍑", scored: true, questions: [
        { q: "In 2022, this soul food restaurant on Martin Luther King Jr. Drive — open since 1947 — became the first Atlanta restaurant ever to win a James Beard America's Classics award. Name it.", a: "Busy Bee Cafe. During segregation, its street was one of the few places in Atlanta where Black-owned businesses could operate.", source: "James Beard Foundation, 2022; Atlanta Magazine", spark: "" },
        { q: "The Varsity opened on North Avenue in 1928 with a different name, chosen to appeal to the college across the street. What was it originally called?", a: "The Yellow Jacket. Founder Frank Gordy opened in a 14-by-35-foot building with a six-stool counter and took in $47.30 on his first day.", source: "Atlanta History Center; The Varsity company timeline", spark: "" },
        { q: "Delta Air Lines started in Georgia in 1925 — but not as an airline. What was the original business?", a: "Crop dusting. It began as Huff Daland Dusters, the world's first aerial crop-dusting company. The name 'Delta' comes from the Mississippi Delta region.", source: "Delta Flight Museum official history", spark: "" },
        { q: "The Fox Theatre looks like a Moorish palace because it was never designed to be a theatre. What was it built to be in 1928?", a: "The headquarters of Atlanta's Shriners — which is why it has domes and minarets. It opened to the public on Christmas Day 1929.", source: "Fox Theatre official history; Atlanta Landmarks", spark: "" },
        { q: "Almost every major Atlanta rap act of the 1990s came out of one basement with red clay dirt floors, in a house right here in East Point. What was that basement called?", a: "The Dungeon — in the home of producer Rico Wade's mother. It was the base for Organized Noize, producing OutKast, Goodie Mob, Killer Mike and Cee-Lo Green.", source: "Atlanta Journal-Constitution, 2024", spark: "" }
      ]}
    ]
  },

  // ── WEEK 5 — Family Trivia: Right Here, Right Now ───────────────
  {
    id: "week-005",
    title: "Family Trivia: Right Here, Right Now",
    date: "August 6, 2026",
    event: "Family Trivia Night — Ignite House Atlanta",
    categories: [
      { id: "movies-classics", name: "Movies & Classics", color: "#8B0000", emoji: "🎬", scored: true, questions: [
        { q: "In 'The Lion King,' what is Simba's father's name?", a: "Mufasa.", source: "The Lion King (1994), Disney", spark: "What's a movie you watched as a kid that you still love watching now?" },
        { q: "Which Disney princess never kissed a prince in her movie?", a: "Moana. She kissed no one and didn't need a prince — she saved her entire island by herself.", source: "Moana (2016), Disney", spark: "" },
        { q: "What is the name of Andy's neighbor in 'Toy Story' — the kid who mistreats toys?", a: "Sid Phillips.", source: "Toy Story (1995), Pixar", spark: "" },
        { q: "What is the name of the snowman in 'Frozen'?", a: "Olaf.", source: "Frozen (2013), Disney", spark: "" },
        { q: "What is Shrek — in the movie 'Shrek'?", a: "An ogre. He's a big, green, grumpy ogre who lives alone in a swamp.", source: "Shrek (2001), DreamWorks", spark: "" }
      ]},
      { id: "pop-culture-trends", name: "Pop Culture & Trends", color: "#FF1493", emoji: "📺", scored: true, questions: [
        { q: "What YouTube star and boxer fought Logan Paul in a boxing match?", a: "Jake Paul (his brother). Logan fought KSI first in 2018, then Jake fought Logan in 2024.", source: "YouTube; ESPN", spark: "" },
        { q: "What streaming show features a Korean squid game where people compete for money?", a: "Squid Game (Netflix). It became one of the most-watched shows on Netflix in 2021.", source: "Netflix series", spark: "" },
        { q: "What video game had people playing it everywhere in 2020 — even during a pandemic?", a: "Animal Crossing: New Horizons (Nintendo Switch). It became a global phenomenon during lockdowns.", source: "Nintendo; gaming news 2020", spark: "" },
        { q: "What social media app do teenagers use to send disappearing photo messages?", a: "Snapchat. Started in 2011, it lets messages disappear after being viewed.", source: "Snapchat official history", spark: "" },
        { q: "What app lets you put filters on your face and share videos — and became huge among teenagers?", a: "Snapchat and TikTok both offer face filters. TikTok is now the dominant platform for this among Gen Z.", source: "App store data; social media trends", spark: "" }
      ]},
      { id: "animals-nature", name: "Animals & Nature", color: "#228B22", emoji: "🦁", scored: true, questions: [
        { q: "How many legs does a spider have?", a: "Eight legs.", source: "Arachnida classification; National Geographic", spark: "" },
        { q: "What is the only mammal that can't jump?", a: "The elephant. Elephants can move quickly but cannot jump — all four feet cannot leave the ground at once.", source: "National Geographic; Smithsonian Magazine", spark: "" },
        { q: "What is the only bird that can fly backwards?", a: "The hummingbird. Its wings rotate 360 degrees at the shoulder and beat up to 80 times per second.", source: "National Geographic; bird physiology", spark: "" },
        { q: "How many hearts does an octopus have?", a: "Three. Two hearts pump blood to the gills, and one pumps blood to the rest of the body.", source: "Marine biology; National Geographic", spark: "" },
        { q: "What animal can hold its breath the longest?", a: "The Cuvier's beaked whale. It can hold its breath for over 3.5 hours and dive deeper than any other marine mammal.", source: "Guinness World Records; marine biology", spark: "" }
      ]},
      { id: "geography-cultures", name: "Geography & World Cultures", color: "#4169E1", emoji: "🌍", scored: true, questions: [
        { q: "What is the capital of France?", a: "Paris.", source: "Geography; Atlas", spark: "" },
        { q: "What is the largest country in the world by land area?", a: "Russia. It covers over 17 million square kilometers and spans 11 time zones.", source: "CIA World Factbook; geographic data", spark: "" },
        { q: "What is the smallest country in the world by land area?", a: "Vatican City. It's 0.17 square miles and home to about 800 people.", source: "Geographic data; CIA World Factbook", spark: "" },
        { q: "What is the highest mountain in the world?", a: "Mount Everest in the Himalayas. It's 29,032 feet high.", source: "Geographic surveys; National Geographic", spark: "" },
        { q: "How many types of sharks are there in the world — roughly?", a: "About 500 species of sharks. Sharks have been around for over 450 million years.", source: "National Geographic; Shark Research Institute", spark: "" }
      ]},
      { id: "sports-athletes", name: "Sports & Athletes", color: "#DC143C", emoji: "⚽", scored: true, questions: [
        { q: "How many Super Bowls has Tom Brady won as a quarterback?", a: "Seven. He won 6 with the New England Patriots (2001-2019) and 1 with the Tampa Bay Buccaneers (2020).", source: "NFL official records", spark: "" },
        { q: "What is the maximum score possible in a single game of bowling?", a: "300 — a perfect game. All 12 rolls must be strikes.", source: "Professional Bowling Association", spark: "" },
        { q: "How many times has Serena Williams won a Grand Slam tennis tournament?", a: "23 Grand Slam singles titles (tied for the most ever).", source: "WTA Tennis official records", spark: "" },
        { q: "How old was Pelé when he won his first World Cup with Brazil?", a: "17 years old. He won the World Cup in 1958.", source: "FIFA official records", spark: "" },
        { q: "In track and field, what is the long jump world record?", a: "29 feet 4.5 inches (8.95 meters) set by Mike Powell in 1991.", source: "World Athletics official records", spark: "" }
      ]},
      { id: "music-songs", name: "Music & Songs", color: "#FF6347", emoji: "🎵", scored: true, questions: [
        { q: "How many Beatles members were there — and what was the famous drummer's name?", a: "Four: John Lennon, Paul McCartney, George Harrison, and Ringo Starr. Ringo joined in 1962.", source: "Beatles official history", spark: "" },
        { q: "What is the best-selling album of all time?", a: "Michael Jackson's 'Thriller' (1982) with approximately 70 million copies sold worldwide.", source: "Guinness World Records", spark: "" },
        { q: "What rapper released 'Lose Yourself' as the theme for the movie 8 Mile in 2002?", a: "Eminem. The song won an Academy Award for Best Original Song.", source: "Academy Awards records; film history", spark: "" },
        { q: "What famous guitarist is known as 'Slowhand'?", a: "Eric Clapton. The nickname came from his slow, deliberate playing style.", source: "Music history; Eric Clapton biography", spark: "" },
        { q: "What instrument is Stevie Wonder famous for playing — and is he blind?", a: "Stevie Wonder is a master of keyboards/piano and harmonica. He's been blind since infancy but became one of the greatest musicians of all time.", source: "Stevie Wonder official biography", spark: "" }
      ]},
      { id: "books-authors", name: "Books & Authors", color: "#8B4789", emoji: "📖", scored: true, questions: [
        { q: "How many books are in the Harry Potter series?", a: "Seven. Harry Potter and the Philosopher's Stone through Harry Potter and the Deathly Hallows (2007).", source: "J.K. Rowling official series", spark: "" },
        { q: "What famous author wrote 'The Lord of the Rings' and invented the entire language of Elvish?", a: "J.R.R. Tolkien. He was a professor of Old English and medieval literature.", source: "Tolkien biography", spark: "" },
        { q: "Who wrote 'To Kill a Mockingbird' — one of the most famous American novels ever?", a: "Harper Lee. Published in 1960, it won the Pulitzer Prize in 1961.", source: "Literature history", spark: "" },
        { q: "What book is the story of a girl who falls down a rabbit hole into a fantastical world?", a: "'Alice's Adventures in Wonderland' by Lewis Carroll (1865).", source: "Literature classic", spark: "" },
        { q: "What is the name of the boy who never grows up in 'Peter Pan'?", a: "Peter Pan. The character was created by J.M. Barrie and lives in Neverland.", source: "J.M. Barrie, Peter Pan classic", spark: "" }
      ]}
    ]
  },

  // ── WEEK 6 — Are You Smarter Than a 5th Grader? ─────────────────
  {
    id: "week-006",
    title: "Are You Smarter Than a 5th Grader?",
    date: "August 12, 2026",
    event: "Ignite IQ — Ignite House Atlanta",
    difficulty: "7th grade",
    categories: [
      { id: "math-basics", name: "Math Basics", color: "#FF6B35", emoji: "🔢", scored: true, questions: [
        { q: "What is 15% of 200?", options: ["25", "30", "35", "40"], a: "30", source: "Basic percentage math", spark: "Where do you use percentages in your daily life?" },
        { q: "If a rectangle has a length of 12 and width of 5, what is its area?", options: ["17", "34", "60", "120"], a: "60", source: "Area formula (L × W)", spark: "" },
        { q: "What is the next number in this sequence: 2, 4, 8, 16, ___?", options: ["24", "32", "30", "20"], a: "32", source: "Powers of 2 / doubling sequence", spark: "" },
        { q: "If you have 3/4 of a pizza and eat 1/2 of that, how much of the whole pizza did you eat?", options: ["1/4", "1/2", "3/8", "1/8"], a: "3/8", source: "Fraction multiplication", spark: "" },
        { q: "What is 25% written as a decimal?", options: ["0.25", "2.5", "0.025", "25.0"], a: "0.25", source: "Percent to decimal conversion", spark: "" }
      ]},
      { id: "science-life", name: "Science & Life", color: "#F7B801", emoji: "🧬", scored: true, questions: [
        { q: "How many bones are in the adult human body?", options: ["186", "206", "226", "256"], a: "206", source: "Human anatomy", spark: "" },
        { q: "What is the process by which plants make their own food using sunlight?", options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], a: "Photosynthesis", source: "Plant biology", spark: "" },
        { q: "What is the chemical formula for water?", options: ["H2O", "H2O2", "H3O", "HO2"], a: "H2O", source: "Chemistry basics", spark: "" },
        { q: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], a: "Mercury", source: "Solar system", spark: "" },
        { q: "What do we call the process where a caterpillar becomes a butterfly?", options: ["Evolution", "Adaptation", "Metamorphosis", "Mutation"], a: "Metamorphosis", source: "Biology life cycles", spark: "" }
      ]},
      { id: "history-geography", name: "History & Geography", color: "#8B0000", emoji: "🗺️", scored: true, questions: [
        { q: "In what year did Columbus sail to the Americas?", options: ["1491", "1492", "1493", "1500"], a: "1492", source: "World history", spark: "" },
        { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], a: "Canberra", source: "World capitals", spark: "" },
        { q: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], a: "6", source: "Geometry shapes", spark: "" },
        { q: "Which continent is the largest by land area?", options: ["Africa", "North America", "Asia", "Europe"], a: "Asia", source: "World geography", spark: "" },
        { q: "What year did the Titanic sink?", options: ["1912", "1915", "1920", "1925"], a: "1912", source: "History of disasters", spark: "" }
      ]},
      { id: "language-lit", name: "Language & Literature", color: "#4B0082", emoji: "📚", scored: true, questions: [
        { q: "Which author wrote 'Harry Potter'?", options: ["Stephen King", "J.K. Rowling", "Rick Riordan", "Suzanne Collins"], a: "J.K. Rowling", source: "Children's literature", spark: "" },
        { q: "What is the opposite of 'big'?", options: ["Huge", "Small", "Tall", "Wide"], a: "Small", source: "Vocabulary / antonyms", spark: "" },
        { q: "Which of these is a noun?", options: ["Run", "Happy", "Quickly", "Book"], a: "Book", source: "Parts of speech", spark: "" },
        { q: "What does 'vocabulary' mean?", options: ["Grammar rules", "All the words in a language", "How to write", "How to speak"], a: "All the words in a language", source: "Language definitions", spark: "" },
        { q: "What is the past tense of 'go'?", options: ["Went", "Going", "Goes", "Goed"], a: "Went", source: "Verb tenses", spark: "" }
      ]},
      { id: "everyday-logic", name: "Everyday Logic", color: "#228B22", emoji: "🧠", scored: true, questions: [
        { q: "If a shirt costs $20 and is on sale for 25% off, what is the new price?", options: ["$5", "$10", "$15", "$18"], a: "$15", source: "Practical math", spark: "" },
        { q: "How many minutes are in 2.5 hours?", options: ["150", "180", "120", "210"], a: "150", source: "Time conversion", spark: "" },
        { q: "If you read 30 pages a day, how many days will it take you to read a 300-page book?", options: ["10 days", "5 days", "15 days", "20 days"], a: "10 days", source: "Division / problem solving", spark: "" },
        { q: "What is the next vowel after 'E' in the alphabet?", options: ["A", "I", "O", "U"], a: "I", source: "Alphabet sequence", spark: "" },
        { q: "If it's 3 PM now, what time will it be in 4.5 hours?", options: ["6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"], a: "7:30 PM", source: "Time addition", spark: "" }
      ]},
      { id: "atlanta-local", name: "Atlanta Local", color: "#DC143C", emoji: "🍑", scored: true, questions: [
        { q: "In what year did Atlanta host the Summer Olympic Games?", options: ["1992", "1994", "1996", "2000"], a: "1996", source: "Atlanta history", spark: "" },
        { q: "What does ATL stand for in the airport code?", options: ["Atlanta", "Atlantic", "Alt", "Atlanta Land Terminal"], a: "Atlanta", source: "Airport codes", spark: "" },
        { q: "OutKast released their album 'ATLiens' in what year?", options: ["1994", "1996", "1998", "2000"], a: "1996", source: "Atlanta hip-hop history", spark: "" },
        { q: "Which Georgia-born rapper released 'Old Town Road'?", options: ["Ludacris", "Lil Nas X", "T.I.", "Future"], a: "Lil Nas X", source: "Recent music history", spark: "" },
        { q: "What is the name of Atlanta's main airport?", options: ["Hartsfield", "Hartsfield-Jackson", "Jackson International", "Atlanta International"], a: "Hartsfield-Jackson", source: "Atlanta landmarks", spark: "" }
      ]}
    ]
  }
];
