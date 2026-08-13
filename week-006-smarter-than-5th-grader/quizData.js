const QUIZ_REPOSITORY = [
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
cat > week-006-smarter-than-5th-grader/quizData.js << 'WEEK006_EOF'
const QUIZ_REPOSITORY = [
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
