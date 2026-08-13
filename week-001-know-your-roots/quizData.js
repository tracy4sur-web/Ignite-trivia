const QUIZ_REPOSITORY = [
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
  }
];
