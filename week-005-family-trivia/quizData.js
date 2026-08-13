const QUIZ_REPOSITORY = [
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
  }
];
