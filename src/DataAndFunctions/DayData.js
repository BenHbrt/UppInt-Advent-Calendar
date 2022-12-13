const dayData = [
    {
        date: 14,
        data: {
            phoneme: {  
                symbol: "h",
                audio: "PhH.m4a",
                examples: [["help", "/help/", "help.m4a"], ["hook", "/hʊk/", "hook.m4a"], ["abhor", "/əbhɔː/", "abhor.m4a"]],
                note: "This is a voiceless consonant."
            },
            question: {
                stem: "If I ________ him, I would've told him.",
                A: "saw",
                B: "had seen",
                C: "have seen",
                answer: "B",
                note: "Third conditionals such as this are used to talk about past hypothetical actions and their consequences."
            }
        } 
    },
    {
        date: 9,
        data: {
            phoneme: {  
                symbol: "θ",
                audio: "PhTHumb.m4a",
                examples: [["month", "/mʌnθ/", "month.m4a"], ["think", "/θɪŋk/", "think.m4a"], ["cathedral", "/kəθiːdrəl/", "cathedral.m4a"]],
                note: "This is a voiceless consonant."
            },
            question: {
                stem: "I'll go on holiday next year if I ________ enough money.",
                A: "will have",
                B: "had",
                C: "have",
                answer: "C",
                note: "We don't use 'will' in the 'if' clause of first conditional sentences when it has future meaning."
            }
        }
    },
    {
        date: 24,
        data: {
            phoneme: {  
                symbol: "ɔ:",
                audio: "PhdOOR.m4a",
                examples: [["door", "/dɔː/", "door.m4a"], ["cause", "/kɔːz/", "cause.m4a"], ["awful", "/ɔːfəl/", "awful.m4a"]],
                note: "This is a long vowel sound."
            },
            question: {
                stem: "I wish my teacher would give me ________.",
                A: "more homeworks",
                B: "more homework",
                C: "many more homework",
                answer: "B",
                note: "'Homework' is uncountable."
            }
        }
    },   
    {
        date: 7,
        data: {
            phoneme: {  
                symbol: "eɪ",
                audio: "PhEI.m4a",
                examples: [["take", "/teɪk/", "take.m4a"], ["nature", "/neɪʧə/", "nature.m4a"], ["information", "/ɪnfəmeɪʃən/", "information.m4a"]],
                note: "This is a dipthong, which means it is a sound made by moving from one vowel sound to another, in this case from /e/ to /ɪ/."
            },
            question: {
                stem: "I'm in favour ________ this proposal.",
                A: "of",
                B: "for",
                C: "to",
                answer: "A",
                note: ""
            }
        }
    },   
    {
        date: 13,
        data: {
            phoneme: {  
                symbol: "eə",
                audio: "PhAIR.m4a",
                examples: [["hair", "/heə/", "hair.m4a"], ["share", "/ʃeə/", "share.m4a"], ["hardware", "/hɑːdweə/", "hardware.m4a"]],
                note: "This is a dipthong, which means it is a sound made by moving from one vowel sound to another, in this case from /e/ to /ə/."
            },
            question: {
                stem: "After finishing school, she ________ to study at university.",
                A: "went on",
                B: "go",
                C: "went in",
                answer: "A",
                note: ""
            }
        }
    },
    {
        date: 21,
        data: {
            phoneme: {  
                symbol: "ʧ",
                audio: "PhCH.m4a",
                examples: [["chair", "/ʧeə/", "chair.m4a"], ["nature", "/neɪʧə/", "nature.m4a"], ["research", "/rɪsɜːʧ/", "research.m4a"]],
                note: "This is a voiceless consonant."
            },
            question: {
                stem: "I'm sick and ________ of the noise!",
                A: "angry",
                B: "tired",
                C: "ill",
                answer: "B",
                note: ""
            }
        }
    },
    {
        date: 18,
        data: {
            phoneme: {  
                symbol: "ʃ",
                audio: "PhSH.m4a",
                examples: [["cash", "/kæʃ/", "cash.m4a"], ["information", "/ɪnfəmeɪʃən/", "information.m4a"], ["commission", "/kəmɪʃən/", "comission.m4a"]],
                note: "This is a voiceless consonant."
            },
            question: {
                stem: "I should________ my homework yesterday.",
                A: "'ve done",
                B: "'ve do",
                C: "'ve did",
                answer: "A",
                note: "We can use 'should + have + past participle' when discussing regrets about the past."
            }
        }
    },
    {
        date: 20,
        data: {
            phoneme: {  
                symbol: "ɒ",
                audio: "PhdOg.m4a",
                examples: [["dog", "/dɒɡ/", "dog.m4a"], ["foreign", "/fɒrən/", "foreign.m4a"], ["knowledge", "/nɒlɪdʒ/", "nɒlɪdʒ.m4a"]],
                note: "This is a short vowel sound."
            },
            question: {
                stem: "The manager, ________ had recently been promoted, told the staff the news.",
                A: "that",
                B: "whom",
                C: "who",
                answer: "C",
                note: "We can't use 'that' in non-defining relative clauses."
            }
        }
    },
    {
        date: 15,
        data: {
            phoneme: {  
                symbol: "ʒ",
                audio: "PhZH.m4a",
                examples: [["vision", "/vɪʒən/", "vision.m4a"], ["regime", "/reɪʒiːm/", "regime.m4a"], ["leisure", "/leʒə/", "leisure.m4a"]],
                note: "This is a voiced consonant."
            },
            question: {
                stem: "My boss decided to ________ my salary",
                A: "raise",
                B: "rise",
                C: "move up",
                answer: "A",
                note: "'Raise' and 'rise' have a similar meaning. However, 'raise' takes and object and 'rise' does not."
            }
        }
    },
    {
        date: 1,
        data: {
            phoneme: {  
                symbol: "ɑʊ",
                audio: "PhAU.m4a",
                examples: [["out", "/aʊt/", "out.m4a"], ["amount", "/əmaʊnt/", "amount.m4a"], ["foundation", "/faʊndeɪʃən/", "foundation.m4a"]],
                note: "This is a dipthong, which means it is a sound made by moving from one vowel sound to another, in this case from /ɑ/ to /ʊ/."
            },
            question: {
                stem: "Jana realised that she ________ to put on her hat when she stepped outside.",
                A: "forgot",
                B: "forgotten",
                C: "had forgotten",
                answer: "AC",
                note: "Both the past simple and past perfect can be used here. The difference is the past perfect emphasises the fact that she forgot to put on her hat before she stepped outside."
            }
        } 
    },
    {
        date: 23,
        data: {
            phoneme: {  
                symbol: "əʊ",
                audio: "PhshOW.m4a",
                examples: [["show", "/ʃəʊ/", "show.m4a"], ["progress", "/prəʊɡres/", "progress.m4a"], ["although", "/ɔːlðəʊ/", "although.m4a"]],
                note: "This is a dipthong, which means it is a sound made by moving from one vowel sound to another, in this case from /ə/ to /ʊ/."
            },
            question: {
                stem: "I arrived at the wrong location. I think I ________ his instructions.",
                A: "misunderstood",
                B: "misunderstand",
                C: "not understand",
                answer: "A",
                note: ""
            }
        }
    },
    {
        date: 16,
        data: {
            phoneme: {  
                symbol: "ʊə",
                audio: "PhcURe.m4a",
                examples: [["cure", "/kjʊə/", "cure.m4a"], ["curious", "/kjʊəriəs/", "curious.m4a"], ["tournament", "/tʊənəmənt/", "tournament.m4a"]],
                note: "This is a dipthong, which means it is a sound made by moving from one vowel sound to another, in this case from /ʊ/ to /ə/."
            },
            question: {
                stem: "I'd rather they ________ us tomorrow.",
                A: "will visit",
                B: "visited",
                C: "visiting",
                answer: "B",
                note: "'Would rather + past' is used to say what we would prefer someone else to do."
            }
        }
    },
    {
        date: 22,
        data: {
            phoneme: {  
                symbol: "u:",
                audio: "PhglUE.m4a",
                examples: [["blue", "/bluː/", "blue.m4a"], ["broom", "/bruːm/", "broom.m4a"], ["mushroom", "/mʌʃruːm/", "mushroom.m4a"]],
                note: "This is a long vowel sound."
            },
            question: {
                stem: "We can't afford ________ a new sofa.",
                A: "buying",
                B: "buy",
                C: "to buy",
                answer: "C",
                note: "'Afford' is followed by either a noun or an infinitie with 'to'."
            }
        }
    },
    {
        date: 4,
        data: {
            phoneme: {  
                symbol: "ɑɪ",
                audio: "PhAI.m4a",
                examples: [["size", "/saɪz/", "size.m4a"], ["crime", "/kraɪm/", "crime.m4a"], ["otherwise", "/ʌðəwaɪz/", "otherwise.m4a"]],
                note: "This is a dipthong, which means it is a sound made by moving from one vowel sound to another, in this case from /ɑ/ to /ɪ/."
            },
            question: {
                stem: "I________ two cups of coffee so far today.",
                A: "drank",
                B: "'ve been drinking",
                C: "'ve drunk",
                answer: "C",
                note: "We use the present perfect simple here because we are focusing on the number of times this action occured. If we want to focus on the duration of the action, we should use the present perfect continuous if possible."
            }
        }
    },
    {
        date: 8,
        text: "ʌ",
        data: {
            phoneme: {  
                symbol: "ʌ",
                audio: "PhUp.m4a",
                examples: [["up", "/ʌp/", "up.m4a"], ["month", "/mʌnθ", "month.m4a"], ["production", "/prədʌkʃən/", "production.m4a"]],
                note: "This is a short vowel sound."
            },
            question: {
                stem: "It's ________ freezing outside!",
                A: "very",
                B: "fairly",
                C: "absolutely",
                answer: "C",
                note: "'Absolutely' can be used as an intensifier with ungradable adjectives. 'Very' and 'fairly' are used with gradable adjectives, such as 'cold'."
            }
        }
    },
    {
        date: 2,
        data: {
            phoneme: {  
                symbol: "ʊ",
                audio: "PhgOOd.m4a",
                examples: [["good", "/ɡʊd/", "good.m4a"], ["should", "/ʃʊd/", "should.m4a"], ["insurance", "/ɪnʃʊɹəns/", "insurance.m4a"]],
                note: "This is a vowel sound. It is made by lifting your tongue high in the mouth and towards the back."
            },
            question: {
                stem: "Paul is really tired these days. I think he needs to recharge his ________.",
                A: "mobile",
                B: "batteries",
                C: "laptop",
                answer: "B",
                note: ""
            }
        } 
    },
    {
        date: 11,
        data: {
            phoneme: {  
                symbol: "ɜ:",
                audio: "PhbIrd.m4a",
                examples: [["bird", "/bɜːd/", "bird.m4a"], ["service", "/sɜːvɪs/", "service.m4a"], ["research", "/rɪsɜːʧ/", "research.m4a"]],
                note: "This is a long vowel sound."
            },
            question: {
                stem: "I'm disappointed ________ you.",
                A: "on",
                B: "in",
                C: "with",
                answer: "BC",
                note: "'Disappointed in' usually conveys a greater sense of betrayal than 'disappointed with' when used with a person."
            }
        }
    },
    {
        date: 17,
        data: {
            phoneme: {  
                symbol: "æ",
                audio: "PhcAt.m4a",
                examples: [["cat", "/kæt/", "cat.m4a"], ["language", "/læŋɡwɪdʒ/", "language.m4a"], ["financial", "/faɪnænʃəl/", "financial.m4a"]],
                note: "This is a short vowel sound."
            },
            question: {
                stem: "She went outside ________ the heavy rain.",
                A: "however",
                B: "even though",
                C: "despite",
                answer: "C",
                note: "'Despite' can be used to add contrast using a noun phrase."
            }
        }
    },
    {
        date: 3,
        data: {
            phoneme: {  
                symbol: "ŋ",
                audio: "PhNG.m4a",
                examples: [["long", "/lɒŋ/", "long.m4a"], ["kingdom", "/kɪŋdəm/", "kingdom.m4a"], ["linguistic", "/lɪŋɡwɪstɪk/", "linguistic.m4a"]],
                note: "This is a voiced nasal consonant. It is often written as 'ng'."
            },
            question: {
                stem: "I wish I ________ more when I was younger",
                A: "studied",
                B: "had studied",
                C: "had study",
                answer: "B",
                note: "The past perfect is used with 'wish' to express a regret about the past."
            }
        } 
    },
    {
        date: 6,
        data: {
            phoneme: {  
                symbol: "ʤ",
                audio: "PhDZ.m4a",
                examples: [["job", "/ʤɒb/", "job.m4a"], ["judge", "/ʤʌʤ/", "judge.m4a"], ["generation", "/ʤenəreɪʃən/", "generation.m4a"]],
                note: "This is a voiced consonant."
            },
            question: {
                stem: "I ________ my homework this evening.",
                A: "will do definitely",
                B: "will definitely do",
                C: "do will definitely",
                answer: "B",
                note: "We normally place adverbs describing probability between 'will' and the main verb."
            }
        }
    },
    {
        date: 10,
        data: {
            phoneme: {  
                symbol: "ɔɪ",
                audio: "PhOI.m4a",
                examples: [["boy", "/bɔɪ/", "boy.m4a"], ["avoid", "/əvɔɪd/", "avoid.m4a"], ["unemployment", "/ʌnɪmplɔɪmənt/", "unemployment.m4a"]],
                note: "This is a dipthong, which means it is a sound made by moving from one vowel sound to another, in this case from /ɔ/ to /ɪ/."
            },
            question: {
                stem: "He doesn't often hang around with other people. He prefers to keep ________.",
                A: "himself",
                B: "himself to himself",
                C: "himself alone",
                answer: "B",
                note: ""
            }
        }
    },
    {
        date: 12,
        data: {
            phoneme: {  
                symbol: "ð",
                audio: "PhmoTHer.m4a",
                examples: [["mother", "/mʌðə/", "mother.m4a"], ["smooth", "/smuːð/", "smooth.m4a"], ["therefore", "/ðeəfɔː/", "therefore.m4a"]],
                note: "This is a voiced consonant."
            },
            question: {
                stem: "I wouldn't do that if I ________ you.",
                A: "was",
                B: "would be",
                C: "were",
                answer: "AC",
                note: "Both 'was' and 'were' are possible here. 'Was' should not be used in formal English."
            }
        }
    },
    {
        date: 5,
        data: {
            phoneme: {  
                symbol: "ə",
                audio: "PhSCHWA.m4a",
                examples: [["power", "/paʊə/", "power.m4a"], ["person", "/pɜːsən/", "person.m4a"], ["teacher", "/tiːʧə/", "teacher.m4a"]],
                note: "This sound is associated with unstressed syllables and some function words."
            },
            question: {
                stem: "CCTV cameras are often used to ________ public places.",
                A: "monitor",
                B: "control",
                C: "look over",
                answer: "A",
                note: ""
            }
        }
    },
    {
        date: 19,
        data: {
            phoneme: {  
                symbol: "ɪə",
                audio: "PhEAR.m4a",
                examples: [["ear", "/ɪə/", "ear.m4a"], ["severe", "/sɪvɪə/", "severe.m4a"], ["superior", "/suːpɪəriə/", "superior.m4a"]],
                note: "This is a dipthong, which means it is a sound made by moving from one vowel sound to another, in this case from /ɪ/ to /ə/."
            },
            question: {
                stem: "He is very rude and ________!",
                A: "impolite",
                B: "unpolite",
                C: "depolite",
                answer: "A",
                note: ""
            }
        }
    },
]
export default dayData;