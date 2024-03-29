
const artistCategories = [
  {
    name: "Singer/Vocalist/Rapper",
    questions: [
      {
        label: "Description",
        type: "textarea",
        name: "description",
      },
      {
        label: "Language of Performance",
        type: "select",
        name: "languageOfPerformance",
        options: [
          "English",
          "Hindi/ Urdu/ Punjabi",
          "Tamil/ Telugu/ Kannada/ Malayalam",
          "Bengali/ Assamese",
          "Gujarati/ Marathi",
          "French/ Spanish",
          "Other",
          // Add other languages here
        ],
      },
      {
        label: "Genres Performed",
        type: "select",
        name: "genresPerformed",
        options: [
          "Bollywood/ Commercial",
          "Classic/ Modern Pop",
          "Indian Classical",
          "Rap/ Hip Hop/ Beatboxing",
          "Rock/ Metal",
          "Sufi/ Qawwali",
          "Ghazal/ Devotional",
          "Jazz/ Blues/ RnB",
          "Folk/ Gospel",
          "Other",
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "Other-genresPerformed",
      },
      {
        label: "Do you play any instrument when performing?",
        type: "select",
        name: "playInstrument",
        options: ["Yes", "No"],
      },
      {
        label: "If yes, which is your primary instrument?",
        type: "select",
        name: "primaryInstrument",
        options: [
          " Acoustic Guitar",
          "Keyboard/ Piano/ Accordion",
          "Ukulele",
          "Flute",
          "Violin/ Cello",
          "Saxophone/ Trumpet",
          "Other",
        ],
        condition: (formData) => formData.playInstrument === "Yes",
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "Other-primaryInstrument",
      },
      {
        label: "Number of private/ corporate shows performed this year",
        type: "select",
        name: "privateCorporateShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label: "Number of club shows performed this year",
        type: "select",
        name: "clubShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
    ],
  },
  {
    name: "Band/Orchestra",
    questions: [
        
      {
        label: "Description",
        type: "textarea",
        name: "description",
      },
      {
        label: "Band Name",
        type: "text",
        name: "bandName",
      },
      {
        label: "Number of Band Members",
        type: "number",
        name: "numBandMembers",
      },
      {
        label: "Band experience in years",
        type: "number",
        name: "bandExperience",
      },
      {
        label: "Language of Performance",
        type: "select",
        name: "languageOfPerformance",
        options: [
          "English",
          "Hindi/ Urdu/ Punjabi",
          "Tamil/ Telugu/ Kannada/ Malayalam",
          "Bengali/ Assamese",
          "Gujarati/ Marathi",
          "French/ Spanish",
          "Other",
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-languageOfPerformance",
      },
      {
        label: "Genres Performed",
        type: "select",
        name: "genresPerformed",
        options: [
          "Orchestra",
          "Wedding Band",
          "Acoustic/ Unplugged",
          "Party Music/ Commercial",
          "Alternative/ Indie",
          "Blues",
          "Jazz",
          "Modern Rock",
          "Classic Rock",
          "Pop",
          "Oldies",
          "R&B/ Soul",
          "Country",
          "Folk",
          "Metal",
          "Gospel",
          "Devotional",
          "Tribute Band",
          "Other",
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-genresPerformed",
      },
      {
        label:
          "Number of private/ corporate shows performed as a band this year",
        type: "select",
        name: "privateCorporateShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label: "Number of club shows performed as a band this year",
        type: "select",
        name: "clubShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
    ],
  },
  {
    name: "DJ",
    questions: [
      {
        label: "Description",
        type: "textarea",
        name: "description",
      },
      {
        label: "Genres Performed",
        type: "select",
        name: "genresPerformed",
        options: [
          "House/ EDM/ Electronica",
          "Techno/ Trance",
          "Hip Hop",
          "Dubstep/ Trap",
          "Bollywood/ Commercial Hindi",
          "Punjabi",
          "Regional",
          "Other",
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-genresPerformed",
      },
      {
        label: "Experience as DJ in years",
        type: "number",
        name: "djExperience",
      },
      {
        label: "How many outstation/ international gigs performed this year?",
        type: "number",
        name: "outstationGigs",
      },
      {
        label: "How many gigs performed in your city this year?",
        type: "number",
        name: "cityGigs",
      },
      {
        label: "Are you an in-house DJ in a club or many clubs?",
        type: "select",
        name: "inHouseDJ",
        options: ["Yes", "No"],
      },
      {
        label: "If yes, how many clubs?",
        type: "number",
        name: "howManyClubs",
      },
      {
        label:
          "Any other props/ instruments/ uniqueness in your performance? Explain in few words",
        type: "text",
        name: "OtherProp",
      },
    ],
  },
  {
    name: "Instrument Player",
    questions: [
        {
            label: "Description",
            type: "textarea",
            name: "description",
          },
      {
        
        label: "Instrument(s) you perform on",
        type: "select",
        options: [
          "Classical Guitar/ Acoustic Guitar",
          "Saxophone/ Trumpet",
          " Piano/ Keyboard",
          " Violin",
          " Flute/ Clarinet",
          "Sitar",
          "Tabla",
          "Ukulele",
          "Djembe/ Percussion",
          "Xylophone",
          "Accordion",
          "Bagpipes",
          " Harp",
          "Cello/ Viola",
          "Steel Drums",
          "Drums",
          "Bass Guitar/ Upright Bass",
          "Other",
        ],
        name: "instruments",
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-instruments",
      },
      {
        label: "Experience in years",
        type: "number",
        name: "experience",
      },
      {
        label: "Do you prefer to be a solo performer or in a band?",
        type: "select",
        name: "performancePreference",
        options: ["Solo Performer", "In a Band"],
      },
      {
        label: "Number of shows performed this year as a solo musician",
        type: "number",
        name: "soloShows",
      },
    ],
  },
  {
    name: "Comedian",
    questions: [
      {
        label: "Description",
        type: "textarea",
        name: "description",
      },
      {
        label: "Genres Performed",
        type: "select",
        name: "genresPerformed",
        options: [
          "Stand Up",
          "Spoof or Prop Comedy",
          "Impersonators/Mimicry Artist",
          "Comedy Group",
          "Other",
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-genresPerformed",
      },
      {
        label: "Language of Performance",
        type: "select",
        name: "languageOfPerformance",
        options: [
          "English",
          "Hindi/ Urdu/ Punjabi",
          "Tamil/ Telugu/ Kannada/ Malayalam",
          "Bengali/ Assamese",
          "Gujarati/ Marathi",
          "French/ Spanish",
          "Other",
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-languageOfPerformance",
      },
      {
        label: "Experience in years",
        type: "number",
        name: "experience",
      },
      {
        label: "Number of private/ corporate shows performed this year",
        type: "select",
        name: "privateCorporateShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label: "Number of club shows performed this year",
        type: "select",
        name: "clubShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label:
          "Any other props/ instruments/ uniqueness in your performance? Explain in few words",
        type: "text",
        name: "OtherProp",
      },
    ],
  },
  {
    name: "Magician/Puppeteer",
    questions: [
      {
        label: "Description",
        type: "textarea",
        name: "description",
      },
      {
        label: "Genres Performed",
        type: "select",
        name: "genresPerformed",
        options: [
          "Table Magicians",
          "Psychological Magicians",
          "Illusionists",
          "Stage Magicians",
          "Card Magicians",
          "Street Magicians",
          "Escape Artists",
          "Puppeteer/ Puppet Show",
          "Ventriloquist",
          "Other",
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-genresPerformed",
      },
      {
        label: "Experience in years",
        type: "number",
        name: "experience",
      },
      {
        label: "Number of private/ corporate shows performed this year",
        type: "select",
        name: "privateCorporateShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label: "Number of club shows performed this year",
        type: "select",
        name: "clubShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label:
          "Any other props/ instruments/ uniqueness in your performance? Explain in few words",
        type: "text",
        name: "OtherProp",
      },
    ],
  },
  {
    name: "Dancer/Performer",
    questions: [
      {
        label: "Description",
        type: "textarea",
        name: "description",
      },
      {
        label: "Genres Performed",
        type: "select",
        name: "genresPerformed",
        options: [
          "Freestyle",
          " Contemporary",
          "Hip Hop",
          "Bounce",
          "Locking & Popping",
          " Ballet",
          "Bellydance",
          "Firedance",
          "Bollywood",
          "Street",
          "Salsa/ Flamenco",
          "Carnival",
          "Dance Troupe",
          "Indian Wedding",
          " Garba",
          "Kathak/ Classical Dance",
          "Tribal",
          "Bharatnatyam/ Odissi",
          "Other",
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-genresPerformed",
      },
      {
        label: "Experience in years",
        type: "number",
        name: "experience",
      },
      {
        label: "Prefer to be a Solo performer or a Group performer?",
        type: "select",
        name: "performancePreference",
        options: ["Solo Performer", "Group Performer"],
      },
      {
        label: "Number of private/ corporate shows performed this year",
        type: "select",
        name: "privateCorporateShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label: "Number of club shows performed this year",
        type: "select",
        name: "clubShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label:
          "Any other props/ instruments/ uniqueness in your performance? Explain in few words",
        type: "text",
        name: "OtherProp",
      },
    ],
  },
  {
    name: "Host/Emcee/Karaoke/Quiz/Games",
    questions: [
        {
            label: "Description",
            type: "textarea",
            name: "description",
          },
      {
        label: "Languages known",
        type: "select",
        name: "languagesKnown",
        options: [
          "English",
          "Hindi",
          "Urdu",
          "Marathi",
          "Gujarati",
          "Punjabi",
          "Bengali",
          "Assamese",
          "Tamil",
          "Telugu",
          "Kannada",
          "Malayalam",
          "French",
          "Spanish",

          "Other",
          // Add other languages here
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-languagesKnown",
      },
      {
        label: "Genres Performed",
        type: "select",
        name: "genresPerformed",
        options: [
          "Karaoke",
          "Event Host",
          "Quizmaster",
          "Wedding Reception",
          "Business Speaker",
          "Motivational Speaker",
          "Religious & Spiritual Speaker",
          "Fitness Guru",
          "Card Dealer",
          "Games Coordinator",
          "Other",
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-genresPerformed",
      },
      {
        label: "Experience in years",
        type: "number",
        name: "experience",
      },
      {
        label: "Number of private/ corporate shows performed this year",
        type: "select",
        name: "privateCorporateShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label: "Number of club shows performed this year",
        type: "select",
        name: "clubShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label:
          "Any other props/ instruments/ uniqueness in your performance? Explain in few words",
        type: "text",
        name: "OtherProp",
      },
    ],
  },
  {
    name: "Entertainer",
    questions: [
      {
        label: "Description",
        type: "textarea",
        name: "description",
      },
      {
        label: "Genres Performed",
        type: "select",
        name: "genresPerformed",
        options: [
          "Poet",
          "Narrator",
          "Storyteller",
          "Tarot Reader/ Horoscope",
          "Bartender",
          "Clown/ Joker",
          "Juggler",
          "Mime",
          "Tattoo Artist",
          "Mehendi Artist",
          "Cartoon Character/ Costumed Character",
          "Face Painting",
          "Caricature Artist",
          "Balloon Artist",
          "Sand Artist/ Other Painter",
          "Other",
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-genresPerformed",
      },
      {
        label: "Experience in years",
        type: "number",
        name: "experience",
      },
      {
        label: "Languages known",
        type: "select",
        name: "languagesKnown",
        options: [
          "English",
          "Hindi",
          "Urdu",
          "Marathi",
          "Gujarati",
          "Punjabi",
          "Bengali",
          "Assamese",
          "Tamil",
          "Telugu",
          "Kannada",
          "Malayalam",
          "French",
          "Spanish",

          "Other",
          // Add other languages here
        ],
      },
      {
        label: "If Other, please specify below",
        type: "text",
        name: "other-languagesKnown",
      },
      {
        label: "Number of private/ corporate shows performed this year",
        type: "select",
        name: "privateCorporateShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label: "Number of club shows performed this year",
        type: "select",
        name: "clubShows",
        options: ["None", "1-4", "5-10", "10+"],
      },
      {
        label:
          "Any other props/ instruments/ uniqueness in your performance? Explain in few words",
        type: "text",
        name: "OtherProp",
      },
    ],
  },
];
module.exports = { artistCategories };