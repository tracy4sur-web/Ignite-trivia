const QUIZ_REPOSITORY = [
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
        { q: "Ruth's declaration of loyalty to Naomi is one of the most famous lines in the
cat > week-002-understanding-the-world/quizData.js << 'WEEK002_EOF'
const QUIZ_REPOSITORY = [
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
  }
];
WEEK002_EOF

echo "✅ Week 002 quizData.js created"

cat > week-003-biblical-iq/quizData.js << 'WEEK003_EOF'
const QUIZ_REPOSITORY = [
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
  }
];
