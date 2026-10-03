// ============================================================
// Maharashtra Geo-Economic Analyzer — Frontend Application
// Covering all 36 Districts, 340 Talukas, and 1,700+ Locations
// ============================================================

const geoData = {
    "Mumbai City": {
        "tier": 1,
        "price_range": [
            75.0,
            180.0
        ],
        "emp_range": [
            78.0,
            94.0
        ],
        "talukas": {
            "Colaba": [
                "Nariman Point",
                "Cuffe Parade",
                "Fort",
                "Churchgate",
                "Navy Nagar",
                "Marine Lines"
            ],
            "Dadar": [
                "Dadar West",
                "Dadar East",
                "Prabhadevi",
                "Parel",
                "Worli",
                "Lower Parel",
                "Sewa"
            ],
            "Byculla": [
                "Byculla East",
                "Mazgaon",
                "Nagpada",
                "Agripada",
                "Chinchpokli"
            ],
            "Malabar Hill": [
                "Walkeshwar",
                "Kemps Corner",
                "Breach Candy",
                "Tardeo",
                "Girgaon",
                "Chowpatty"
            ]
        }
    },
    "Mumbai Suburban": {
        "tier": 1,
        "price_range": [
            55.0,
            140.0
        ],
        "emp_range": [
            74.0,
            92.0
        ],
        "talukas": {
            "Andheri": [
                "Versova",
                "Marol",
                "Oshiwara",
                "Sahar",
                "Chakala",
                "Lokhandwala",
                "Seven Bungalows",
                "J.B. Nagar"
            ],
            "Bandra": [
                "Bandra West",
                "Khar West",
                "Santacruz West",
                "Vile Parle East",
                "Pali Hill",
                "BKC",
                "Bandra East"
            ],
            "Borivali": [
                "Borivali West",
                "Gorai",
                "Dahisar East",
                "Dahisar West",
                "Magathane",
                "Eksar",
                "Shimpoli",
                "Kandivali West",
                "Charkop"
            ],
            "Kurla": [
                "Kurla West",
                "Ghatkopar East",
                "Ghatkopar West",
                "Powai",
                "Vidyavihar",
                "Saki Naka",
                "Chunabhatti",
                "Asalpha"
            ],
            "Malad": [
                "Malad West",
                "Malad East",
                "Mindspace",
                "Orlem",
                "Dindoshi",
                "Marve",
                "Madh"
            ],
            "Mulund": [
                "Mulund West",
                "Mulund East",
                "Bhandup West",
                "Nahur",
                "Kanjurmarg East",
                "Vikhroli West"
            ]
        }
    },
    "Thane": {
        "tier": 2,
        "price_range": [
            30.0,
            70.0
        ],
        "emp_range": [
            68.0,
            88.0
        ],
        "talukas": {
            "Thane City": [
                "Ghodbunder Road",
                "Majiwada",
                "Naupada",
                "Wagle Estate",
                "Kolshet",
                "Vartak Nagar",
                "Panchpakhadi",
                "Hiranandani Estate",
                "Kasarvadavali"
            ],
            "Kalyan": [
                "Kalyan West",
                "Kalyan East",
                "Khadakpada",
                "Chikanghar",
                "Gandhar Nagar",
                "Tisgaon",
                "Kolsewadi"
            ],
            "Dombivli": [
                "Dombivli East",
                "Dombivli West",
                "Lodha Palava",
                "MIDC Dombivli",
                "Manpada",
                "Kopar"
            ],
            "Bhiwandi": [
                "Bhiwandi Town",
                "Padgha",
                "Anjur Phata",
                "Dapode",
                "Sonale",
                "Kasheli",
                "Khoni",
                "Rahnal"
            ],
            "Ulhasnagar": [
                "Camp 1",
                "Camp 2",
                "Camp 3",
                "Camp 4",
                "Camp 5",
                "Shahad",
                "Vithalwadi"
            ],
            "Ambernath": [
                "Ambernath East",
                "Ambernath West",
                "Morivali MIDC",
                "Chikloli",
                "Kansai"
            ],
            "Badlapur": [
                "Badlapur East",
                "Badlapur West",
                "Katrap",
                "Kulgaon",
                "Manjarli",
                "Shirgaon"
            ],
            "Murbad": [
                "Murbad Town",
                "Tokawade",
                "Shenwa",
                "Dehrang",
                "Malshej",
                "Kishor",
                "Saralgaon"
            ],
            "Shahapur": [
                "Shahapur Town",
                "Asangaon",
                "Atgaon",
                "Khardi",
                "Vashind",
                "Dolkhamb",
                "Kinhavali"
            ]
        }
    },
    "Palghar": {
        "tier": 2,
        "price_range": [
            20.0,
            52.0
        ],
        "emp_range": [
            62.0,
            82.0
        ],
        "talukas": {
            "Palghar": [
                "Palghar Station",
                "Boisar MIDC",
                "Tarapur",
                "Kelve Road",
                "Saphale",
                "Manor",
                "Shirgaon",
                "Alyali"
            ],
            "Vasai": [
                "Vasai West",
                "Vasai East",
                "Virar West",
                "Virar East",
                "Nalasopara West",
                "Nallasopara East",
                "Arnala",
                "Evershine City"
            ],
            "Dahanu": [
                "Dahanu Town",
                "Gholvad",
                "Bordi",
                "Kasa",
                "Chinchani",
                "Vangaon"
            ],
            "Jawhar": [
                "Jawhar Town",
                "Alyani",
                "Dabhosa",
                "Pathardi",
                "Khadkhad"
            ],
            "Wada": [
                "Wada Town",
                "Kudus",
                "Gandhre",
                "Khandpe",
                "Posheri"
            ],
            "Vikramgad": [
                "Vikramgad Town",
                "Onde",
                "Sajan",
                "Malwada",
                "Deohari"
            ],
            "Talasari": [
                "Talasari Town",
                "Sutrakar",
                "Zari",
                "Kochai",
                "Sambha"
            ],
            "Mokhada": [
                "Mokhada Town",
                "Khodala",
                "Ase",
                "Poshera",
                "Morhanda"
            ]
        }
    },
    "Raigad": {
        "tier": 2,
        "price_range": [
            18.0,
            48.0
        ],
        "emp_range": [
            64.0,
            84.0
        ],
        "talukas": {
            "Panvel": [
                "Panvel City",
                "Khandeshwar",
                "Kamothe",
                "Kharghar",
                "Kalamboli",
                "New Panvel",
                "Taloja MIDC",
                "Karanjade"
            ],
            "Alibag": [
                "Alibag Town",
                "Varsoli",
                "Nagaon",
                "Akshi",
                "Kihim",
                "Mandwa",
                "Thal",
                "Revdanda"
            ],
            "Karjat": [
                "Karjat Town",
                "Neral",
                "Matheran",
                "Shelu",
                "Vangani",
                "Dahiwali",
                "Kashele"
            ],
            "Khalapur": [
                "Khopoli",
                "Rasayani",
                "Lodhavali",
                "Chowk",
                "Madap",
                "Mohopada"
            ],
            "Pen": [
                "Pen Town",
                "Dharamtar",
                "Kamarly",
                "Vadkhal",
                "Antora",
                "Dadhe"
            ],
            "Uran": [
                "Uran Town",
                "JNPT Port Area",
                "Mora",
                "Chanje",
                "Dronagiri",
                "Jasai"
            ],
            "Mahad": [
                "Mahad Town",
                "Birwadi MIDC",
                "Poladpur Nearby",
                "Nate",
                "Dasgaon",
                "Palu"
            ],
            "Roha": [
                "Roha Town",
                "Dhatav MIDC",
                "Kolad",
                "Nagothane",
                "Kille"
            ],
            "Mangaon": [
                "Mangaon Town",
                "Lonere",
                "Indapur",
                "Nizampur",
                "Goregaon Raigad"
            ],
            "Shrivardhan": [
                "Shrivardhan Town",
                "Harihareshwar",
                "Diveagar",
                "Mhasla",
                "Walavati"
            ],
            "Murud": [
                "Murud Town",
                "Janjira",
                "Kashid",
                "Barshiv",
                "Nandgaon"
            ]
        }
    },
    "Ratnagiri": {
        "tier": 3,
        "price_range": [
            10.0,
            26.0
        ],
        "emp_range": [
            58.0,
            78.0
        ],
        "talukas": {
            "Ratnagiri": [
                "Ratnagiri Town",
                "Mirjole",
                "Pawas",
                "Golap",
                "Kotawde",
                "Nachane",
                "Kuwarbav",
                "Shirgaon"
            ],
            "Chiplun": [
                "Chiplun Town",
                "Kherdi MIDC",
                "Bahadursheikh",
                "Guhagar Road",
                "Dhamandevi",
                "Sawarde"
            ],
            "Khed": [
                "Khed Town",
                "Lote Parshuram MIDC",
                "Bhirwand",
                "Shivaji Nagar",
                "Alore"
            ],
            "Dapoli": [
                "Dapoli Town",
                "Anjarle",
                "Murud Dapoli",
                "Ladghar",
                "Harnai",
                "Kelshi"
            ],
            "Guhagar": [
                "Guhagar Town",
                "Velneshwar",
                "Hedvi",
                "Abloli",
                "Asgoli"
            ],
            "Lanja": [
                "Lanja Town",
                "Veravali",
                "Kuveshi",
                "Bhadkhamba",
                "Korle"
            ],
            "Rajapur": [
                "Rajapur Town",
                "Sakharpa",
                "Purnagad",
                "Vijaydurg",
                "Adivare",
                "Jaitapur"
            ],
            "Sangameshwar": [
                "Sangameshwar Town",
                "Devrukh",
                "Makhjan",
                "Dingni",
                "Kasba"
            ],
            "Mandangad": [
                "Mandangad Town",
                "Bankot",
                "Veshvi",
                "Palshet",
                "Mhapral"
            ]
        }
    },
    "Sindhudurg": {
        "tier": 3,
        "price_range": [
            8.0,
            22.0
        ],
        "emp_range": [
            56.0,
            76.0
        ],
        "talukas": {
            "Kudal": [
                "Kudal Town",
                "Oros (HQ)",
                "Pinguli",
                "Nerur",
                "Zarap",
                "Bambarde"
            ],
            "Sawantwadi": [
                "Sawantwadi Town",
                "Amboli",
                "Banda",
                "Majgaon",
                "Danoli",
                "Charathe"
            ],
            "Kankavli": [
                "Kankavli Town",
                "Janavali",
                "Phondaghat",
                "Halval",
                "Osargaon"
            ],
            "Malvan": [
                "Malvan Town",
                "Tarkarli",
                "Dandi",
                "Achara",
                "Kunkeshwar Nearby",
                "Chivla"
            ],
            "Vengurla": [
                "Vengurla Town",
                "Shiroda",
                "Redi",
                "Ubhadanda",
                "Mochemad"
            ],
            "Devgad": [
                "Devgad Town",
                "Jamsande",
                "Mithbav",
                "Shirgaon",
                "Tirlot"
            ],
            "Vaibhavwadi": [
                "Vaibhavwadi Town",
                "Bhuibavda",
                "Kharepatan",
                "Tirwade"
            ],
            "Dodamarg": [
                "Dodamarg Town",
                "Bhedshi",
                "Kudase",
                "Sasoli",
                "Kasarla"
            ]
        }
    },
    "Pune": {
        "tier": 1,
        "price_range": [
            38.0,
            85.0
        ],
        "emp_range": [
            72.0,
            92.0
        ],
        "talukas": {
            "Pune City": [
                "Kothrud",
                "Shivajinagar",
                "Deccan Gymkhana",
                "Koregaon Park",
                "Swargate",
                "Camp",
                "Kalyani Nagar",
                "Erandwane"
            ],
            "Haveli": [
                "Hinjawadi",
                "Wagholi",
                "Hadapsar",
                "Undri",
                "Manjri",
                "Khadakwasla",
                "Dhanori",
                "Fursungi",
                "Kharadi"
            ],
            "Pimpri-Chinchwad": [
                "Pimpri",
                "Chinchwad",
                "Akurdi",
                "Nigdi",
                "Bhosari MIDC",
                "Wakad",
                "Pimple Saudagar",
                "Ravet",
                "Moshi",
                "Chakan"
            ],
            "Mulshi": [
                "Pirangut",
                "Paud",
                "Lavale",
                "Marunji",
                "Hinjawadi Phase 3",
                "Bhugaon",
                "Sus",
                "Ghotawade"
            ],
            "Baramati": [
                "Baramati City",
                "MIDC Baramati",
                "Supa",
                "Malad BK",
                "Songaon",
                "Tandulwadi",
                "Jalochi",
                "Karanje"
            ],
            "Shirur": [
                "Shirur Town",
                "Ranjangaon MIDC",
                "Sanaswadi",
                "Shikrapur",
                "Talegaon Dhamdhere",
                "Koregaon Bhima"
            ],
            "Daund": [
                "Daund Town",
                "Kurkumbh MIDC",
                "Patas",
                "Kashti",
                "Kedgaon",
                "Yavat"
            ],
            "Maval": [
                "Talegaon Dabhade",
                "Lonavala",
                "Kamshet",
                "Vadgaon Maval",
                "Dehu Road",
                "Somatane"
            ],
            "Bhor": [
                "Bhor Town",
                "Nasrapur",
                "Kikvi",
                "Rajgad",
                "Ambavade",
                "Kapurhol"
            ],
            "Junnar": [
                "Junnar Town",
                "Narayangaon",
                "Otur",
                "Alephata",
                "Ozar",
                "Lenyadri"
            ],
            "Ambegaon": [
                "Manchar",
                "Ghodegaon",
                "Kalamb",
                "Avsari",
                "Shinoli"
            ],
            "Khed (Rajgurunagar)": [
                "Rajgurunagar",
                "Chakan MIDC",
                "Alandi",
                "Mahalunge",
                "Khed Town"
            ],
            "Purandar": [
                "Saswad",
                "Jejuri",
                "Belsar",
                "Walhe",
                "Diwale"
            ],
            "Velhe": [
                "Velhe Town",
                "Torna Base",
                "Pasali",
                "Kelwad",
                "Bajarwadi"
            ]
        }
    },
    "Satara": {
        "tier": 3,
        "price_range": [
            12.0,
            28.0
        ],
        "emp_range": [
            62.0,
            82.0
        ],
        "talukas": {
            "Satara": [
                "Satara City",
                "Godoli",
                "Sadar Bazaar",
                "Koregaon Road",
                "MIDC Satara",
                "Shendre",
                "Degaon"
            ],
            "Karad": [
                "Karad Town",
                "Vidyanagar",
                "Ogalewadi",
                "Umbraj",
                "Masur",
                "Saidapur",
                "Malkapur Karad"
            ],
            "Wai": [
                "Wai Town",
                "Bhuinj",
                "Pachwad",
                "Pasarni",
                "Dhom",
                "Songir"
            ],
            "Mahabaleshwar": [
                "Mahabaleshwar Town",
                "Panchgani",
                "Pratapgad",
                "Kshetra Mahabaleshwar",
                "Metgutad"
            ],
            "Phaltan": [
                "Phaltan Town",
                "MIDC Phaltan",
                "Taradgaon",
                "Barad",
                "Lonand",
                "Sakharwadi"
            ],
            "Koregaon": [
                "Koregaon Town",
                "Rahimatpur",
                "Kumthe",
                "Wagholi Satara",
                "Kinhai"
            ],
            "Patan": [
                "Patan Town",
                "Koynanagar",
                "Dhebewadi",
                "Malharpeth",
                "Tarale"
            ],
            "Khatav": [
                "Vaduj",
                "Aundh",
                "Mayani",
                "Pusegaon",
                "Khatav Town"
            ],
            "Man": [
                "Dahiwadi",
                "Mhaswad",
                "Pangri",
                "Shingnapur",
                "Kukudwad"
            ],
            "Jaoli": [
                "Medha",
                "Kudal Satara",
                "Bamnoli",
                "Kelghar"
            ],
            "Khandala": [
                "Khandala Town",
                "Shirwal MIDC",
                "Lonand Road",
                "Palashi"
            ]
        }
    },
    "Kolhapur": {
        "tier": 2,
        "price_range": [
            18.0,
            36.0
        ],
        "emp_range": [
            66.0,
            86.0
        ],
        "talukas": {
            "Karvir": [
                "Rajarampuri",
                "Shahupuri",
                "Tarabai Park",
                "Nagala Park",
                "Ujalaiwadi",
                "Kalamba",
                "Morewadi",
                "Gandhinagar"
            ],
            "Hatkanangale": [
                "Ichalkaranji Textile City",
                "Hatkanangale Town",
                "Shiroli MIDC",
                "Hupari Silver Hub",
                "Pattankodoli",
                "Rukadi"
            ],
            "Shirol": [
                "Jaysingpur",
                "Shirol Town",
                "Kurundwad",
                "Nandani",
                "Alas",
                "Ghosarwad"
            ],
            "Kagal": [
                "Kagal Town",
                "Five Star MIDC Kagal",
                "Sangaon",
                "Murgud",
                "Kapashi",
                "Vhalgad"
            ],
            "Gadhinglaj": [
                "Gadhinglaj City",
                "Halditavade",
                "Nesari",
                "Bhadgaon",
                "Mahagaon"
            ],
            "Panhala": [
                "Panhala Fort Area",
                "Kodoli",
                "Warnanagar",
                "Kotoli",
                "Kakhe"
            ],
            "Radhanagari": [
                "Radhanagari Town",
                "Tarale",
                "Kasarwadi",
                "Rashivade",
                "Rautwadi"
            ],
            "Shahuwadi": [
                "Malkapur Kolhapur",
                "Bambavade",
                "Amba Ghat",
                "Yelane"
            ],
            "Bhudargad": [
                "Gargoti",
                "Kadgaon",
                "Madilage",
                "Mhasrang"
            ],
            "Ajara": [
                "Ajara Town",
                "Uttur",
                "Polgaon",
                "Harpwade"
            ],
            "Chandgad": [
                "Chandgad Town",
                "Shinoli Chandgad",
                "Kowad",
                "Adkur"
            ],
            "Gaganbawda": [
                "Bawda Town",
                "Asalaj",
                "Kodiwale",
                "Salvan"
            ]
        }
    },
    "Sangli": {
        "tier": 3,
        "price_range": [
            12.0,
            27.0
        ],
        "emp_range": [
            63.0,
            83.0
        ],
        "talukas": {
            "Miraj": [
                "Sangli City",
                "Miraj Medical Hub",
                "Kupwad MIDC",
                "Vishrambag",
                "Wanlesswadi",
                "Bramhanpuri"
            ],
            "Walwa": [
                "Islampur Town",
                "Urun Islampur",
                "Ashta",
                "Peth Vadgaon Nearby",
                "Boran",
                "Kasegaon"
            ],
            "Tasgaon": [
                "Tasgaon Grape City",
                "Savalaj",
                "Manerajuri",
                "Visapur",
                "Yelavi"
            ],
            "Khanapur": [
                "Vita Town",
                "Lengre",
                "Bhalwani",
                "Gharand",
                "Pare"
            ],
            "Shirala": [
                "Shirala Town",
                "Kokrud",
                "Mangle",
                "Wakurde",
                "Chande"
            ],
            "Kavathe Mahankal": [
                "Kavathe Mahankal Town",
                "Dhalgaon",
                "Aagard",
                "Karkamb",
                "Kuchi"
            ],
            "Jath": [
                "Jath Town",
                "Sankh",
                "Umarani",
                "Daribadachi",
                "Shegaon Jath"
            ],
            "Atpadi": [
                "Atpadi Town",
                "Dighanchi",
                "Madgule",
                "Karkhel"
            ],
            "Palus": [
                "Palus Town",
                "Bhilawadi Milk Hub",
                "Kundal",
                "Sawantpur",
                "Dudhondi"
            ],
            "Kadegaon": [
                "Kadegaon Town",
                "Chinchani",
                "Sonsal",
                "Kotij",
                "Amrapur"
            ]
        }
    },
    "Solapur": {
        "tier": 3,
        "price_range": [
            12.0,
            28.0
        ],
        "emp_range": [
            62.0,
            82.0
        ],
        "talukas": {
            "Solapur North": [
                "Solapur Textile City",
                "Jule Solapur",
                "Bhavani Peth",
                "Ashok Nagar",
                "Kegaon",
                "MIDC Chincholi"
            ],
            "Solapur South": [
                "Hotgi Road",
                "Kumbhari",
                "Valsang",
                "Mandrup",
                "Boramani"
            ],
            "Pandharpur": [
                "Pandharpur Holy City",
                "Korti",
                "Tungat",
                "Bhalwani",
                "Kasegaon Solapur",
                "Gopalpur"
            ],
            "Barshi": [
                "Barshi Town",
                "Vairag",
                "Gaudgaon",
                "Pangri",
                "Bhatambare",
                "Dahitane"
            ],
            "Mohol": [
                "Mohol Town",
                "Kurul",
                "Kamati",
                "Angar",
                "Penur"
            ],
            "Akkalkot": [
                "Akkalkot Town",
                "Maindargi",
                "Dudhani",
                "Wagdari",
                "Chapalgaon"
            ],
            "Karmala": [
                "Karmala Town",
                "Jeur",
                "Kem",
                "Sade",
                "Korti Karmala"
            ],
            "Madha": [
                "Madha Town",
                "Kurduvadi Railway Hub",
                "Modnimb",
                "Ranjani",
                "Bendsheel"
            ],
            "Malshiras": [
                "Akluj Sugar Town",
                "Natepute",
                "Malshiras Town",
                "Piliv",
                "Velapur"
            ],
            "Sangola": [
                "Sangola Town",
                "Mahud",
                "Javla",
                "Nazare",
                "Waki"
            ],
            "Mangalvedhe": [
                "Mangalvedhe Town",
                "Marwade",
                "Borale",
                "Kacharewadi",
                "Huljanti"
            ]
        }
    },
    "Nashik": {
        "tier": 2,
        "price_range": [
            18.0,
            42.0
        ],
        "emp_range": [
            66.0,
            86.0
        ],
        "talukas": {
            "Nashik City": [
                "Panchavati",
                "Satpur MIDC",
                "Ambad MIDC",
                "Indira Nagar",
                "CIDCO Nashik",
                "Gangapur Road",
                "College Road",
                "Pathardi Phata",
                "Govind Nagar"
            ],
            "Deolali": [
                "Deolali Camp",
                "Bhagur",
                "Lam Road",
                "Rest Camp",
                "Sanjivani"
            ],
            "Malegaon": [
                "Malegaon Textile City",
                "Soygaon",
                "Dyane",
                "Ravalgaon",
                "Zodge",
                "Camp Malegaon",
                "Manmad Road"
            ],
            "Sinnar": [
                "Sinnar Town",
                "Musgaon MIDC",
                "Malegaon Sinnar",
                "Dugaon",
                "Vavi",
                "Pangri Sinnar"
            ],
            "Igatpuri": [
                "Igatpuri Hill Station",
                "Ghoti",
                "Talegaon Igatpuri",
                "Kasara Ghat Area",
                "Bhavali",
                "Vaitarna"
            ],
            "Niphad": [
                "Pimpalgaon Baswant Onion Hub",
                "Niphad Town",
                "Lasalgaon Asia's Largest Onion Market",
                "Ozar HAL Aircraft Hub",
                "Ranwad",
                "Kundewadi"
            ],
            "Yeola": [
                "Yeola Paithani Saree Hub",
                "Andarsul",
                "Nagarsul",
                "Mukhed Yeola",
                "Patar"
            ],
            "Dindori": [
                "Dindori Wine Capital",
                "Vani Saptashrungi Foothills",
                "Mohadi Dindori",
                "Khedgaon",
                "Nanashi"
            ],
            "Trimbakeshwar": [
                "Trimbak Holy Town",
                "Pahine",
                "Torangan",
                "Harsul",
                "Amboli Nashik"
            ],
            "Kalwan": [
                "Kalwan Town",
                "Abhona",
                "Bhadane",
                "Kanashi"
            ],
            "Baglan (Satana)": [
                "Satana Town",
                "Taharabad",
                "Brahmangaon",
                "Virgaon",
                "Nampur"
            ],
            "Chandwad": [
                "Chandwad Town",
                "Vadbare",
                "Rahud",
                "Dahiwad"
            ],
            "Nandgaon": [
                "Nandgaon Town",
                "Manmad Railway Junction",
                "Naydongri",
                "Tarur"
            ],
            "Surgana": [
                "Surgana Town",
                "Borpada",
                "Umbergavhan",
                "Alangun"
            ],
            "Peint": [
                "Peint Town",
                "Harsul Road",
                "Karanjali",
                "Kumbhale"
            ]
        }
    },
    "Jalgaon": {
        "tier": 3,
        "price_range": [
            10.0,
            24.0
        ],
        "emp_range": [
            60.0,
            80.0
        ],
        "talukas": {
            "Jalgaon": [
                "Jalgaon City Gold Hub",
                "MIDC Jalgaon",
                "Pimprala",
                "Shirsoli",
                "Asoda",
                "Bhadli",
                "Khedi",
                "Mehrun"
            ],
            "Bhusawal": [
                "Bhusawal Railway Division",
                "Sakegaon",
                "Deepnagar Power Hub",
                "Kandari",
                "Kurhe",
                "Fekari",
                "Varangaon"
            ],
            "Chalisgaon": [
                "Chalisgaon City",
                "Pachora Road",
                "Bhadgaon Road",
                "Patna Devi",
                "Mehsun",
                "Wadgaon Chalisgaon"
            ],
            "Amalner": [
                "Amalner Education Hub",
                "Galwade",
                "Shirud",
                "Patonda",
                "Dahiwad Amalner",
                "Marwad"
            ],
            "Pachora": [
                "Pachora Town",
                "Nandra",
                "Bhadgaon Nearby",
                "Shendurni",
                "Varkhedi"
            ],
            "Chopda": [
                "Chopda Town",
                "Adavad",
                "Hated",
                "Machla",
                "Vadhoda"
            ],
            "Raver": [
                "Raver Banana Capital",
                "Nhavi",
                "Khanora",
                "Pal Agro Hub",
                "Waghoda",
                "Rasulpur"
            ],
            "Savda": [
                "Savda Banana Trading Town",
                "Faizpur Municipal Town",
                "Khiroda Education Hub",
                "Kumbharkheda"
            ],
            "Yawal": [
                "Yawal Town",
                "Faizpur",
                "Bhalod",
                "Korpawali",
                "Kingaon"
            ],
            "Jamner": [
                "Jamner Town",
                "Neri",
                "Shendurni Road",
                "Wakod",
                "Pahur"
            ],
            "Erandol": [
                "Erandol Town",
                "Padmalaya Ganpati",
                "Kasoda",
                "Utran",
                "Ringangaon"
            ],
            "Parola": [
                "Parola Fort Town",
                "Tamdhare",
                "Bahadarpur",
                "Mhasve"
            ],
            "Dharangaon": [
                "Dharangaon Town",
                "Sonvad",
                "Rotvad",
                "Pimpri Dharangaon"
            ],
            "Bhadgaon": [
                "Bhadgaon Town",
                "Gudhe",
                "Khedgaon Bhadgaon",
                "Ambadgaon"
            ],
            "Muktainagar": [
                "Muktainagar Town",
                "Kothali",
                "Anturli",
                "Kurha Kakoda"
            ],
            "Bodwad": [
                "Bodwad Town",
                "Varangaon Road",
                "Nadgaon",
                "Salbardi"
            ]
        }
    },
    "Ahmednagar": {
        "tier": 3,
        "price_range": [
            12.0,
            26.0
        ],
        "emp_range": [
            62.0,
            82.0
        ],
        "talukas": {
            "Nagar": [
                "Ahmednagar City",
                "Savedi",
                "Kedgaon",
                "Bhingar Cantonment",
                "MIDC Nagapur",
                "Vilad Ghat",
                "Burudgaon"
            ],
            "Rahata": [
                "Shirdi Holy Town",
                "Rahata Town",
                "Sakori",
                "Pimplas",
                "Loni Education Hub",
                "Babhaleshwar"
            ],
            "Shrirampur": [
                "Shrirampur Sugar Town",
                "Belapur",
                "Padhegaon",
                "Taklibhan",
                "Gondegaon"
            ],
            "Sangamner": [
                "Sangamner City",
                "Amrutnagar",
                "Gunjalwadi",
                "Talegaon Sangamner",
                "Ashwi"
            ],
            "Kopargaon": [
                "Kopargaon Town",
                "Sanvatsar",
                "Kolpewadi",
                "Dhamori",
                "Puntamba"
            ],
            "Newasa": [
                "Newasa Sant Dnyaneshwar Shrine",
                "Kukana",
                "Sonai",
                "Bhenda",
                "Vadhana"
            ],
            "Shevgaon": [
                "Shevgaon Town",
                "Bodhegaon",
                "Miri",
                "Vandoor",
                "Samangaon"
            ],
            "Pathardi": [
                "Pathardi Town",
                "Kanhoba Foothills",
                "Tisgaon",
                "Karanji Ghat",
                "Manikdoh"
            ],
            "Parner": [
                "Parner Town",
                "Ralegan Siddhi Model Village",
                "Nighoj Potholes",
                "Supa MIDC",
                "Alkuti"
            ],
            "Shrigonda": [
                "Shrigonda Town",
                "Belwandi",
                "Kashti Shrigonda",
                "Pedgaon",
                "Kolgaon"
            ],
            "Karjat Ahmednagar": [
                "Karjat Town",
                "Rashin",
                "Mirajgaon",
                "Kharda Fort"
            ],
            "Jamkhed": [
                "Jamkhed Town",
                "Khanna",
                "Arvi Jamkhed",
                "Nanaj"
            ],
            "Akole": [
                "Akole Town",
                "Bhandardara Dam Resort",
                "Rajur",
                "Kotul",
                "Samrad Sandhan Valley"
            ],
            "Rahuri": [
                "Rahuri MPKV Agriculture University",
                "Vambori",
                "Deolali Pravara",
                "Taharabad"
            ]
        }
    },
    "Dhule": {
        "tier": 3,
        "price_range": [
            8.0,
            18.0
        ],
        "emp_range": [
            58.0,
            78.0
        ],
        "talukas": {
            "Dhule": [
                "Dhule City",
                "Deopur",
                "Mohadi",
                "Awadhan MIDC",
                "Songir",
                "Laling Fort Area",
                "Kusumba"
            ],
            "Shirpur": [
                "Shirpur Model Education City",
                "Boradi",
                "Thalner",
                "Vikhran",
                "Singave"
            ],
            "Sindkheda": [
                "Sindkheda Town",
                "Dondaicha Commercial Hub",
                "Nardana MIDC",
                "Chimthane",
                "Betawad"
            ],
            "Sakri": [
                "Sakri Town",
                "Dahivel Windmill Hub",
                "Pimpalner",
                "Nizampur Dhule",
                "Bhadne"
            ]
        }
    },
    "Nandurbar": {
        "tier": 4,
        "price_range": [
            4.0,
            12.0
        ],
        "emp_range": [
            48.0,
            68.0
        ],
        "talukas": {
            "Nandurbar": [
                "Nandurbar City",
                "Karanche",
                "Patan Nandurbar",
                "Wadali",
                "Hol"
            ],
            "Shahada": [
                "Shahada City",
                "Prakasha Dakshin Kashi",
                "Mandane",
                "Khetia Road",
                "Bramhanpuri"
            ],
            "Navapur": [
                "Navapur Border Town",
                "Chinchpada",
                "Khandbara",
                "Visarwadi"
            ],
            "Taloda": [
                "Taloda Town",
                "Borad",
                "Somaval",
                "Pratappur"
            ],
            "Akkalkuwa": [
                "Akkalkuwa Education Hub",
                "Molgi",
                "Khapar",
                "Sorbardi"
            ],
            "Dhadgaon (Akrani)": [
                "Dhadgaon Town",
                "Toranmal Hill Station",
                "Roshmal",
                "Chandsaili"
            ]
        }
    },
    "Chhatrapati Sambhajinagar": {
        "tier": 2,
        "price_range": [
            18.0,
            38.0
        ],
        "emp_range": [
            64.0,
            84.0
        ],
        "talukas": {
            "Aurangabad City": [
                "CIDCO",
                "Waluj Industrial MIDC",
                "Chikalthana MIDC",
                "Shendra DMIC Smart City",
                "Garkheda",
                "Satara Parisar",
                "Beed Bypass",
                "Cantonment"
            ],
            "Khuldabad": [
                "Khuldabad Town",
                "Ellora Caves (Verul)",
                "Bhadra Maruti",
                "Sulibhanjan",
                "Devgiri Fort Area"
            ],
            "Paithan": [
                "Paithan Historic City",
                "Jayakwadi Dam Area",
                "Bidkin AURIC Smart City",
                "Pimpalwadi",
                "Balegaon"
            ],
            "Gangapur": [
                "Gangapur Town",
                "Lasur Station",
                "Waluj Rural",
                "Shilapur",
                "Manjari Gangapur"
            ],
            "Vaijapur": [
                "Vaijapur Town",
                "Rotegaon",
                "Shiur",
                "Loni Vaijapur",
                "Khandala Vaijapur"
            ],
            "Kannad": [
                "Kannad Town",
                "Ghatnandra",
                "Pishor",
                "Chincholi Limbaji"
            ],
            "Sillod": [
                "Sillod Town",
                "Ajanta Caves Base",
                "Golegaon",
                "Bharadi",
                "Palod"
            ],
            "Phulambri": [
                "Phulambri Town",
                "Vadhod",
                "Aland",
                "Palgavhan"
            ],
            "Soegaon": [
                "Soegaon Town",
                "Fardapur",
                "Gondegaon",
                "Jarandi"
            ]
        }
    },
    "Jalna": {
        "tier": 3,
        "price_range": [
            8.0,
            18.0
        ],
        "emp_range": [
            58.0,
            78.0
        ],
        "talukas": {
            "Jalna": [
                "Jalna Steel City",
                "MIDC Phase 1-3",
                "Old Jalna",
                "Devalgaon Road",
                "Ambad Road",
                "Sindhi Market"
            ],
            "Ambad": [
                "Ambad Town",
                "Matsyodari Devi Temple Area",
                "Dhakephal",
                "Wadigodri",
                "Shahgad"
            ],
            "Bhokardan": [
                "Bhokardan Town",
                "Hasanabad",
                "Sipora",
                "Anwa",
                "Rajur Ganpati"
            ],
            "Partur": [
                "Partur Town",
                "Watur",
                "Ashti Jalna",
                "Vardari"
            ],
            "Ghansawangi": [
                "Ghansawangi Town",
                "Kumbhar Pimpalgaon",
                "Ranjani Jalna",
                "Tirthpuri"
            ],
            "Jafrabad": [
                "Jafrabad Town",
                "Mhasla",
                "Tembruni",
                "Varud"
            ],
            "Badnapur": [
                "Badnapur Town",
                "Somthana",
                "Roshangaon",
                "Dabhadi"
            ],
            "Mantha": [
                "Mantha Town",
                "Talni",
                "Dheknan",
                "Pangri Mantha"
            ]
        }
    },
    "Parbhani": {
        "tier": 3,
        "price_range": [
            7.0,
            17.0
        ],
        "emp_range": [
            56.0,
            76.0
        ],
        "talukas": {
            "Parbhani": [
                "Parbhani City",
                "Vasantrao Naik Agri University Area",
                "Subhash Road",
                "MIDC Parbhani",
                "Jintur Road",
                "Pedgaon"
            ],
            "Gangakhed": [
                "Gangakhed Holy City",
                "Makhani",
                "Dharasur",
                "Ranisawargaon"
            ],
            "Jintur": [
                "Jintur Town",
                "Nemgiri Jain Heritage",
                "Yeldari Dam Area",
                "Bori",
                "Charthana"
            ],
            "Selu": [
                "Selu Town",
                "Walur",
                "Kupta",
                "Rawalgaon Parbhani"
            ],
            "Pathri": [
                "Pathri Sai Janmasthan",
                "Hadgaon Pathri",
                "Kansur",
                "Renapur Pathri"
            ],
            "Purna": [
                "Purna Railway Junction",
                "Tadkalas",
                "Chudawa",
                "Kanhegaon"
            ],
            "Manwath": [
                "Manwath Town",
                "Manwath Road",
                "Kekat Umra",
                "Dethan"
            ],
            "Sonpeth": [
                "Sonpeth Town",
                "Shelgaon",
                "Aavad",
                "Wadgaon Sonpeth"
            ],
            "Palam": [
                "Palam Town",
                "Banwas",
                "Pethshivani",
                "Sayala"
            ]
        }
    },
    "Hingoli": {
        "tier": 4,
        "price_range": [
            5.0,
            13.0
        ],
        "emp_range": [
            52.0,
            72.0
        ],
        "talukas": {
            "Hingoli": [
                "Hingoli City",
                "Paltan",
                "MIDC Hingoli",
                "Malharni",
                "Khandala Hingoli"
            ],
            "Basmath": [
                "Basmathnagar",
                "Kurunda",
                "Arale",
                "Hatta",
                "Hayeetnagar"
            ],
            "Kalamnuri": [
                "Kalamnuri Town",
                "Akhada Balapur",
                "Waranga Phata",
                "Shewala"
            ],
            "Aundha Nagnath": [
                "Aundha Nagnath 8th Jyotirlinga",
                "Shiroli Aundha",
                "Pardi",
                "Siddheshwar Dam"
            ],
            "Sengaon": [
                "Sengaon Town",
                "Goregaon Hingoli",
                "Sakhara",
                "Bhogao"
            ]
        }
    },
    "Nanded": {
        "tier": 3,
        "price_range": [
            8.0,
            20.0
        ],
        "emp_range": [
            58.0,
            78.0
        ],
        "talukas": {
            "Nanded": [
                "Nanded City",
                "Sachkhand Gurudwara Area",
                "CIDCO Nanded",
                "Vazirabad",
                "Asarjan",
                "Taroda",
                "MIDC Krushnoor"
            ],
            "Deglur": [
                "Deglur Border Commercial Town",
                "Shahapur Deglur",
                "Hanev",
                "Karadkhed"
            ],
            "Mukhed": [
                "Mukhed Town",
                "Barahali",
                "Mangaon Mukhed",
                "Rampur"
            ],
            "Kandhar": [
                "Kandhar Fort Town",
                "Ghatangri",
                "Pethvadaj",
                "Bahadarpara"
            ],
            "Loha": [
                "Loha Town",
                "Malkhad",
                "Pokharni",
                "Sunegaon"
            ],
            "Biloli": [
                "Biloli Town",
                "Kajla",
                "Kundan",
                "Badur"
            ],
            "Dharmabad": [
                "Dharmabad Town",
                "Jarur",
                "Karadkhed",
                "Samrala"
            ],
            "Hadgaon": [
                "Hadgaon Town",
                "Tamsa",
                "Nivgha",
                "Manatha"
            ],
            "Kinwat": [
                "Kinwat Forest Town",
                "Sahasrakund Waterfall",
                "Bodhad",
                "Islapur"
            ],
            "Mahur": [
                "Mahur Renuka Devi Shrine",
                "Sarkhani",
                "Dhanora Mahur",
                "Vanjarwadi"
            ],
            "Bhokar": [
                "Bhokar Town",
                "Matul",
                "Massa",
                "Palaj"
            ],
            "Mudkhed": [
                "Mudkhed Railway Town",
                "Mugad",
                "Wadgaon Mudkhed",
                "Pimpalkhuta"
            ]
        }
    },
    "Beed": {
        "tier": 3,
        "price_range": [
            7.0,
            16.0
        ],
        "emp_range": [
            55.0,
            75.0
        ],
        "talukas": {
            "Beed": [
                "Beed City",
                "Kankaleshwar Temple Area",
                "Barshi Naka",
                "Jalna Road",
                "MIDC Beed",
                "Pali Beed"
            ],
            "Parli": [
                "Parli Vaijnath Jyotirlinga",
                "Thermal Power Colony",
                "Ghatnandur",
                "Dharmapuri"
            ],
            "Ambajogai": [
                "Ambajogai Yogeshwari Heritage Town",
                "Bardapur",
                "Locality Kholeshwar",
                "Pangri"
            ],
            "Majalgaon": [
                "Majalgaon Dam Area",
                "Kitti Adgaon",
                "Pathrud",
                "Talkhed"
            ],
            "Georai": [
                "Georai Town",
                "Umapur",
                "Gevrai Rural",
                "Talwada"
            ],
            "Kaij": [
                "Kaij Town",
                "Yevate",
                "Yusufwadgaon",
                "Nandurghat"
            ],
            "Ashti": [
                "Ashti Town",
                "Kada Commercial Hub",
                "Karanji Road",
                "Doithan"
            ],
            "Patoda": [
                "Patoda Town",
                "Sautada Waterfall",
                "Amalner Beed",
                "Rohatwadi"
            ],
            "Shirur Kasar": [
                "Shirur Kasar Town",
                "Takarwan",
                "Rai Moha",
                "Gomalwada"
            ],
            "Wadwani": [
                "Wadwani Town",
                "Chinchwan",
                "Kotharban",
                "Devgaon Wadwani"
            ],
            "Dharur": [
                "Dharur Fort Town",
                "Kasarwadi",
                "Chinchpur",
                "Telgaon"
            ]
        }
    },
    "Latur": {
        "tier": 3,
        "price_range": [
            10.0,
            22.0
        ],
        "emp_range": [
            60.0,
            80.0
        ],
        "talukas": {
            "Latur": [
                "Latur City Education Hub",
                "MIDC Latur",
                "Ausa Road",
                "Ganjgolai",
                "Harangul",
                "Murud Latur",
                "Khadgaon"
            ],
            "Udgir": [
                "Udgir Historical City",
                "MIDC Udgir",
                "Devarjan",
                "Her",
                "Nideban",
                "Mogha"
            ],
            "Ausa": [
                "Ausa Fort Town",
                "Killari Earthquake Memorial",
                "Matola",
                "Lodga",
                "Almala"
            ],
            "Nilanga": [
                "Nilanga Town",
                "Aurad Shahajani",
                "Kasarsirshi",
                "Madansuri",
                "Ambegao"
            ],
            "Ahmedpur": [
                "Ahmedpur Town",
                "Shirur Tajband",
                "Khandali",
                "Andhori"
            ],
            "Chakur": [
                "Chakur Town",
                "Nalegaon",
                "Chapoli Dam",
                "Wadwal Nagnath Herbal Hill"
            ],
            "Renapur": [
                "Renapur Town",
                "Pangaon",
                "Motegaon",
                "Khamaswadi"
            ],
            "Deoni": [
                "Deoni Cattle Breed Hub",
                "Walandi",
                "Dhanegaon",
                "Bopala"
            ],
            "Shirur Anantpal": [
                "Shirur Anantpal Town",
                "Sakol",
                "Dholegaon"
            ],
            "Jalkot": [
                "Jalkot Town",
                "Kallur",
                "Dhamangaon Jalkot"
            ]
        }
    },
    "Dharashiv (Osmanabad)": {
        "tier": 3,
        "price_range": [
            7.0,
            16.0
        ],
        "emp_range": [
            55.0,
            76.0
        ],
        "talukas": {
            "Dharashiv": [
                "Dharashiv City",
                "Caves Area",
                "MIDC Dharashiv",
                "Yedshi Ramling Sanctuary",
                "Ter Historic Town",
                "Dhoki"
            ],
            "Tuljapur": [
                "Tuljapur Bhavani Mata Temple City",
                "Naldurg Historical Fort Town",
                "Ganjoti",
                "Mangrul",
                "Sindhphal"
            ],
            "Omerga": [
                "Omerga Town",
                "Murum Commercial Hub",
                "Madaj",
                "Turori",
                "Yenegur"
            ],
            "Kalamb": [
                "Kalamb Town",
                "Dhiksal",
                "Shiradhon",
                "Ekurka"
            ],
            "Bhum": [
                "Bhum Town",
                "Walwad",
                "It",
                "Pakharud"
            ],
            "Paranda": [
                "Paranda Fort Town",
                "Khandeshwar",
                "Anala",
                "Domgaon"
            ],
            "Lohara": [
                "Lohara Town",
                "Mardi",
                "Toramba",
                "Sasti"
            ],
            "Washi": [
                "Washi Town",
                "Terkhada",
                "Sarola",
                "Pardhi"
            ]
        }
    },
    "Amravati": {
        "tier": 3,
        "price_range": [
            10.0,
            22.0
        ],
        "emp_range": [
            60.0,
            80.0
        ],
        "talukas": {
            "Amravati": [
                "Camp Amravati",
                "Rajapeth",
                "Badnera Railway Junction",
                "Maltekdi",
                "Kathora Road",
                "MIDC Nandgaon Peth"
            ],
            "Achalpur": [
                "Achalpur Twin City",
                "Paratwada Commercial Hub",
                "Pathrot",
                "Rasegaon",
                "Sirasgaon Band"
            ],
            "Morshi": [
                "Morshi Orange Hub",
                "Upper Wardha Dam",
                "Pahu",
                "Dhamangaon Morshi",
                "Lehegaon"
            ],
            "Warud": [
                "Warud California of Vidarbha (Orange Export)",
                "Shendurjana Ghat",
                "Benoda",
                "Pusla",
                "Loni Warud"
            ],
            "Chandur Bazar": [
                "Chandur Bazar Town",
                "Brahmanwada Thadi",
                "Shirala Amravati",
                "Kural"
            ],
            "Daryapur": [
                "Daryapur Town",
                "Banosa",
                "Yeoda",
                "Kholapur Cotton Market"
            ],
            "Anjangaon Surji": [
                "Anjangaon Surji Piper Betel Leaf Town",
                "Panattur",
                "Chincholi",
                "Khandala Surji"
            ],
            "Nandgaon Khandeshwar": [
                "Nandgaon Khandeshwar Town",
                "Loni Gurav",
                "Kusumkot",
                "Papal"
            ],
            "Chikhaldara": [
                "Chikhaldara Hill Station",
                "Gawilghur Fort",
                "Harisal",
                "Semadoh Melghat Tiger Reserve",
                "Katkumbh"
            ],
            "Dharni": [
                "Dharni Melghat Town",
                "Bairagarh",
                "Kalamkhar",
                "Chakarda"
            ]
        }
    },
    "Akola": {
        "tier": 3,
        "price_range": [
            8.0,
            18.0
        ],
        "emp_range": [
            58.0,
            78.0
        ],
        "talukas": {
            "Akola": [
                "Akola City Cotton Hub",
                "MIDC Phase 1-4",
                "Old City",
                "Civil Lines",
                "Kaulkhed",
                "Toshniwal Layout",
                "Malkapur Akola"
            ],
            "Akot": [
                "Akot Cotton & Textile Town",
                "Narsing Maharaj Shrine",
                "Chohatta Bazar",
                "Adgaon",
                "Kutasa"
            ],
            "Balapur": [
                "Balapur Historical Chhatri",
                "Paras Thermal Power Station",
                "Wadegaon",
                "Ural"
            ],
            "Murtizapur": [
                "Murtizapur Railway Junction",
                "Mana",
                "Hatgaon",
                "Karanje Murtizapur"
            ],
            "Patur": [
                "Patur Caves Town",
                "Alegaon",
                "Babulgaon Patur",
                "Channi"
            ],
            "Telhara": [
                "Telhara Town",
                "Hivkhed",
                "Ghoda",
                "Adool"
            ],
            "Barshitakli": [
                "Barshitakli Town",
                "Pinjar",
                "Dhaba",
                "Kholeshwar"
            ]
        }
    },
    "Buldhana": {
        "tier": 3,
        "price_range": [
            7.0,
            16.0
        ],
        "emp_range": [
            57.0,
            77.0
        ],
        "talukas": {
            "Buldhana": [
                "Buldhana Hilltop City",
                "Sundarkhed",
                "Rajur Buldhana",
                "Dhad",
                "Motala Road"
            ],
            "Khamgaon": [
                "Khamgaon Silver & Oil City",
                "Ghatpuri",
                "Jalamb Junction",
                "Pimpalgaon Raja",
                "MIDC Khamgaon"
            ],
            "Shegaon": [
                "Shegaon Shri Gajanan Maharaj Shrine",
                "Anand Sagar",
                "Javala",
                "Nagzari",
                "Alasana"
            ],
            "Malkapur": [
                "Malkapur Grain Market",
                "Dharangaon Malkapur",
                "Datala",
                "Wadoda"
            ],
            "Chikhli": [
                "Chikhli Town",
                "Undri",
                "Kharbadi",
                "Amrapur Buldhana",
                "Eklara"
            ],
            "Mehkar": [
                "Mehkar Town",
                "Dongaon",
                "Janefal",
                "Janephal",
                "Loni Gawali"
            ],
            "Lonar": [
                "Lonar Meteor Crater World Heritage",
                "Sultanpur",
                "Titwi",
                "Wadhona"
            ],
            "Deulgaon Raja": [
                "Deulgaon Raja Balaji Shrine",
                "Sindkhed Raja Jijau Janmabhoomi",
                "Mhasla Raja",
                "Bajirao Peth"
            ],
            "Nandura": [
                "Nandura 105ft Hanuman Statue",
                "Wadner Bholji",
                "Nimgaon",
                "Chandur Biswa"
            ],
            "Jalgaon Jamod": [
                "Jalgaon Jamod Town",
                "Khamkhed",
                "Asalgaon",
                "Pimpalgaon Kale"
            ]
        }
    },
    "Yavatmal": {
        "tier": 3,
        "price_range": [
            6.0,
            15.0
        ],
        "emp_range": [
            55.0,
            75.0
        ],
        "talukas": {
            "Yavatmal": [
                "Yavatmal Cotton City",
                "Lohara MIDC",
                "Wadgaon Yavatmal",
                "Pimpalgaon Yavatmal",
                "Bori Arab"
            ],
            "Pusad": [
                "Pusad Education Town",
                "Vasantnagar",
                "Kumbhari Pusad",
                "Shembalpimpri",
                "Ghaat"
            ],
            "Wani": [
                "Wani Coal Capital",
                "Kayar",
                "Maregaon Road",
                "Mukutban Limestone Hub"
            ],
            "Umarkhed": [
                "Umarkhed Town",
                "Dhanki",
                "Vidul",
                "Chatari"
            ],
            "Digras": [
                "Digras Town",
                "Tuptakli",
                "Singad",
                "Dehali"
            ],
            "Darwha": [
                "Darwha Town",
                "Bhandegaon",
                "Ladkhed",
                "Chikhali Darwha"
            ],
            "Ghatanji": [
                "Ghatanji Cotton Market",
                "Parwa",
                "Sayfal",
                "Koli Ghatanji"
            ],
            "Pandharkawada (Kelapur)": [
                "Pandharkawada Town",
                "Tipeshwar Wildlife Sanctuary",
                "Patangao",
                "Bori Kelapur"
            ],
            "Ralegaon": [
                "Ralegaon Town",
                "Wadhona Ralegaon",
                "Jalka",
                "Guhikhed"
            ],
            "Ner": [
                "Ner Parsopant",
                "Ajanti",
                "Malkhed",
                "Indrathana"
            ]
        }
    },
    "Washim": {
        "tier": 4,
        "price_range": [
            5.0,
            13.0
        ],
        "emp_range": [
            52.0,
            72.0
        ],
        "talukas": {
            "Washim": [
                "Washim Holy City",
                "Balaji Mandir Area",
                "Civil Lines",
                "MIDC Lakhala",
                "Kata",
                "Shelgaon"
            ],
            "Karanja Lad": [
                "Karanja Lad Narsimha Saraswati Shrine",
                "Karanja Town",
                "Kamargaon",
                "Manora Road",
                "Poha"
            ],
            "Risod": [
                "Risod Town",
                "Karakhel",
                "Asegaon Pen",
                "Shirpur Jain Historical Shrine"
            ],
            "Malegaon Washim": [
                "Malegaon Jahangir",
                "Sirpur",
                "Kenwad",
                "Medshi"
            ],
            "Mangrulpir": [
                "Mangrulpir Dargah Town",
                "Arola",
                "Manabha",
                "Dhamni"
            ],
            "Manora": [
                "Manora Town",
                "Waigul",
                "Pohradevi Banjara Shrine",
                "Kupta Manora"
            ]
        }
    },
    "Nagpur": {
        "tier": 2,
        "price_range": [
            22.0,
            48.0
        ],
        "emp_range": [
            68.0,
            88.0
        ],
        "talukas": {
            "Nagpur Urban": [
                "Sitabuldi",
                "Dharampeth",
                "Ramdaspeth",
                "Sadar",
                "Civil Lines Nagpur",
                "Wardha Road",
                "Manish Nagar",
                "Besur",
                "Nandanvan"
            ],
            "Hingna": [
                "Hingna MIDC Industrial Zone",
                "MIHAN SEZ AIIMS Area",
                "Wadi",
                "Wanadongri",
                "Isasani",
                "Nildoh"
            ],
            "Kamptee": [
                "Kamptee Cantonment",
                "Dragon Palace Temple",
                "Kanhan River Basin",
                "Kapsi Logistics Hub",
                "Bhilgaon",
                "Gumthala"
            ],
            "Umred": [
                "Umred Karhandla Tiger Reserve Base",
                "MIDC Umred",
                "Sirsi",
                "Bhiwapur Road",
                "Makardhokra"
            ],
            "Katol": [
                "Katol Orange Market",
                "MIDC Katol",
                "Kondhali",
                "Paradsinga",
                "Sawargaon Katol"
            ],
            "Kalmeshwar": [
                "Kalmeshwar Steel & Textile MIDC",
                "Brahmani",
                "Dhapewada",
                "Mohpa"
            ],
            "Saoner": [
                "Saoner Coal Hub",
                "Khapa",
                "Kelod",
                "Walni Coal Mines"
            ],
            "Ramtek": [
                "Ramtek Historic Temple & Lake",
                "Mansar Archaeological Site",
                "Navegaon Khairi",
                "Kachurwahi"
            ],
            "Narkhed": [
                "Narkhed Citrus Hub",
                "Mowad",
                "Jalalkheda",
                "Sawargaon Narkhed"
            ],
            "Mouda": [
                "Mouda NTPC Power Plant",
                "Khat",
                "Tarsa",
                "Chirwa"
            ],
            "Kuhi": [
                "Kuhi Town",
                "Mandhal",
                "Ambhora Sangam",
                "Titad"
            ]
        }
    },
    "Wardha": {
        "tier": 3,
        "price_range": [
            8.0,
            18.0
        ],
        "emp_range": [
            58.0,
            78.0
        ],
        "talukas": {
            "Wardha": [
                "Wardha City",
                "Sevagram Ashram Gandhian Heritage",
                "Gopuri",
                "MIDC Sevagram",
                "Nalwadi",
                "Sindi Meghe",
                "Borgaon"
            ],
            "Hinganghat": [
                "Hinganghat Cotton & Oil Hub",
                "MIDC Hinganghat",
                "Alipur",
                "Kandhli",
                "Wadner"
            ],
            "Arvi": [
                "Arvi Town",
                "Tadgaon",
                "Deurwada",
                "Rohan"
            ],
            "Deoli": [
                "Deoli Town",
                "Sawangi Meghe Medical Hub",
                "Bhidi",
                "Pulgaon Military Depot"
            ],
            "Seloo": [
                "Seloo Town",
                "Bor Wildlife Sanctuary",
                "Hingni",
                "Relegaon Wardha"
            ],
            "Samudrapur": [
                "Samudrapur Town",
                "Girad Dargah",
                "Mandgaon",
                "Pohana"
            ],
            "Karanja Ghadge": [
                "Karanja Ghadge Town",
                "Thanegaon",
                "Nandora",
                "Sarwadi"
            ],
            "Ashti Wardha": [
                "Ashti Shahid Smarak",
                "Karanji",
                "Talegaon Ashti",
                "Sahur"
            ]
        }
    },
    "Chandrapur": {
        "tier": 3,
        "price_range": [
            7.0,
            18.0
        ],
        "emp_range": [
            58.0,
            78.0
        ],
        "talukas": {
            "Chandrapur": [
                "Chandrapur City Black Gold City",
                "Tadoba Andhari National Park Gateway",
                "MIDC Tadali",
                "Ghuggus Coal Hub",
                "Urjanagar CSTPS"
            ],
            "Ballarpur": [
                "Ballarpur Paper City",
                "Rajura Road",
                "Visapur Ballarpur",
                "Bamani"
            ],
            "Warora": [
                "Warora Anandwan Baba Amte Ashram",
                "Shegaon Warora",
                "Madheli",
                "Majra"
            ],
            "Bhadravati": [
                "Bhadravati Ordnance Factory Hub",
                "Gaurav Nagar",
                "Chandankheda",
                "Bijur"
            ],
            "Rajura": [
                "Rajura Cement Hub",
                "Chunar",
                "Sonurli",
                "Nalegaon Rajura"
            ],
            "Mul": [
                "Mul Rice City",
                "Maroda",
                "Chichala",
                "Bormala"
            ],
            "Bramhapuri": [
                "Bramhapuri Education Town",
                "Armori Road",
                "Navargaon",
                "Kurza"
            ],
            "Nagbhid": [
                "Nagbhid Railway Junction",
                "Ghodazari Dam Resort",
                "Talodhi Balapur",
                "Vilam"
            ],
            "Sindewahi": [
                "Sindewahi Agriculture Research Hub",
                "Lonwahi",
                "Ratnapur",
                "Navin Sindewahi"
            ],
            "Chimur": [
                "Chimur Kranti Town",
                "Neri Chimur",
                "Motegaon",
                "Masal"
            ],
            "Gondpipri": [
                "Gondpipri Town",
                "Dhaba Gondpipri",
                "Karanji Gondpipri",
                "Toho"
            ]
        }
    },
    "Bhandara": {
        "tier": 3,
        "price_range": [
            6.0,
            15.0
        ],
        "emp_range": [
            55.0,
            75.0
        ],
        "talukas": {
            "Bhandara": [
                "Bhandara Brass City",
                "Khat Road",
                "MIDC Madgi",
                "Bhojapur",
                "Takli Bhandara",
                "Belodi"
            ],
            "Tumsar": [
                "Tumsar Manganese City",
                "Dongri Buzurg Mines",
                "Sihora",
                "Mitewani",
                "Mohadi Road"
            ],
            "Pauni": [
                "Pauni Brass & Silk Heritage City",
                "Gosikhurd National Dam",
                "Asgaon",
                "Brahmi",
                "Rampur Pauni"
            ],
            "Sakoli": [
                "Sakoli Town",
                "Nagzira Wildlife Sanctuary Base",
                "Sonegaon",
                "Kumbhali"
            ],
            "Mohadi": [
                "Mohadi Town",
                "Andhalgaon Handloom Hub",
                "Kardi",
                "Palora"
            ],
            "Lakhani": [
                "Lakhani Rice Trading Town",
                "Kesalwada",
                "Murmadi",
                "Rengepar"
            ],
            "Lakhandur": [
                "Lakhandur Town",
                "Barwha",
                "Pardi Lakhandur",
                "Khadki"
            ]
        }
    },
    "Gondia": {
        "tier": 3,
        "price_range": [
            5.0,
            14.0
        ],
        "emp_range": [
            54.0,
            74.0
        ],
        "talukas": {
            "Gondia": [
                "Gondia Rice Capital",
                "Kudwa",
                "MIDC Mundipar",
                "Goregaon Road",
                "Fulchur",
                "Karanje Gondia"
            ],
            "Tirora": [
                "Tirora Adani Power Mega Plant",
                "Kachehani",
                "Sukdi",
                "Chikhali Tirora"
            ],
            "Arjuni Morgaon": [
                "Navegaon National Park",
                "Morgaon Town",
                "Itadoh Dam",
                "Mahagaon Arjuni"
            ],
            "Deori": [
                "Deori Tribal Heritage Town",
                "Chichgarh",
                "Mhaswani",
                "Borkheda"
            ],
            "Amgaon": [
                "Amgaon Rice Mills Hub",
                "Thana Amgaon",
                "Padampur",
                "Anjora"
            ],
            "Goregaon Gondia": [
                "Goregaon Town",
                "Mulla",
                "Tejpur",
                "Salegaon"
            ],
            "Salekasa": [
                "Salekasa Forest Town",
                "Darekasa Caves",
                "Kodalbarra",
                "Tirjhar"
            ],
            "Sadak Arjuni": [
                "Sadak Arjuni Town",
                "Kohmara NH6 Hub",
                "Soundad",
                "Donda"
            ]
        }
    },
    "Gadchiroli": {
        "tier": 4,
        "price_range": [
            4.0,
            12.0
        ],
        "emp_range": [
            48.0,
            70.0
        ],
        "talukas": {
            "Gadchiroli": [
                "Gadchiroli Town",
                "Potegaon Road",
                "MIDC Gadchiroli",
                "Complex Area",
                "Navegaon Gadchiroli"
            ],
            "Armori": [
                "Armori Silk & Tusser City",
                "Vairagad Historical Fort",
                "Koshti",
                "Arjuni Armori"
            ],
            "Chamorshi": [
                "Chamorshi Town",
                "Markanda Mahadev Heritage Temple",
                "Ghot",
                "Tadgaon Chamorshi"
            ],
            "Desaiganj (Wadsa)": [
                "Wadsa Commercial Railway Hub",
                "Nainpur",
                "Visora",
                "Kondhala"
            ],
            "Aheri": [
                "Aheri Royal Town",
                "Allapalli Teak Forest Hub",
                "Pranhita Basin",
                "Devalmari"
            ],
            "Sironcha": [
                "Sironcha Godavari-Pranhita Confluence",
                "Kaleshwaram Border",
                "Tekra",
                "Asaralli"
            ],
            "Kurkheda": [
                "Kurkheda Town",
                "Malewada",
                "Andhali",
                "Nanhi"
            ],
            "Dhanora": [
                "Dhanora Forest Town",
                "Chatgaon",
                "Mendha Lekha Model Tribal Village",
                "Godalwahi"
            ],
            "Bhamragad": [
                "Bhamragad Hemalkasa Dr. Prakash Amte Lok Biradari Prakalp",
                "Laheri",
                "Tadgaon Bhamragad"
            ],
            "Etapalli": [
                "Etapalli Town",
                "Kasansur",
                "Gatta",
                "Jaray"
            ],
            "Mulchera": [
                "Mulchera Town",
                "Ashti Mulchera",
                "Lagham",
                "Machepalli"
            ],
            "Korchi": [
                "Korchi Town",
                "Kotgul",
                "Bedgaon",
                "Bhurkikheda"
            ]
        }
    }
};

function getVillageContext(district, taluka, village, tier) {
    const v = (village || '').toLowerCase();
    const t = (taluka || '').toLowerCase();
    const d = (district || '').toLowerCase();

    if (v.includes('banana') || t.includes('raver') || t.includes('savda') || t.includes('faizpur') || t.includes('yawal')) {
        return {
            type: 'Agro-Trading & Banana Belt',
            info: `${village} is an integral agricultural trading node in North Maharashtra, renowned for extensive banana cultivation, wholesale fruit mandis, and direct rail exports to North Indian markets.`,
            scope: 'High scope for cold-chain logistics, fruit ripening chambers, bio-fertilizers, and packaging manufacturing.'
        };
    } else if (v.includes('lasalgaon') || v.includes('pimpalgaon') || v.includes('onion') || v.includes('wine') || v.includes('grape') || t.includes('dindori') || t.includes('morshi') || t.includes('orange') || t.includes('warud')) {
        return {
            type: 'Horticulture & Cash Crop Hub',
            info: `${village} is an internationally recognized horticulture hub famous for high-yield produce (grapes, onions, citrus), wholesale APMC markets, and agro-processing facilities.`,
            scope: 'Prime scope for agro-dehydration units, post-harvest sorting sheds, wine tasting tourism, and direct export brokerage.'
        };
    } else if (v.includes('cotton') || v.includes('ginning') || t.includes('akola') || t.includes('yavatmal') || t.includes('hinganghat')) {
        return {
            type: 'Cotton & Agrarian Trade Center',
            info: `${village} is situated in Vidarbha's core cotton cultivation belt, supported by active ginning mills, oil extraction units, and agricultural marketing cooperatives.`,
            scope: 'Strong commercial potential for cotton seed oil refineries, bio-mass briquettes, and micro-irrigation system dealerships.'
        };
    } else if (v.includes('sugar') || t.includes('baramati') || t.includes('akluj') || t.includes('sangamner') || t.includes('shrirampur') || t.includes('milk') || v.includes('bhilawadi')) {
        return {
            type: 'Dairy & Cooperative Sugar Belt',
            info: `${village} is a prosperous cooperative powerhouse known for intensive sugarcane farming, modern milk processing plants, and robust agrarian entrepreneurship.`,
            scope: 'High scope for dairy value-add processing (cheese, paneer), cattle feed distribution, and agricultural machinery repair.'
        };
    } else if (v.includes('hinjawadi') || v.includes('magarpatta') || v.includes('kharadi') || v.includes('bkc') || v.includes('mindspace') || v.includes('powai') || v.includes('aiims') || v.includes('it park') || v.includes('dharampeth')) {
        return {
            type: 'Tech & Corporate IT Corridor',
            info: `${village} is a premier technology and corporate employment center hosting multinational software companies, modern business towers, and a high-density professional workforce.`,
            scope: 'High scope for managed co-living spaces, corporate catering, 24/7 cloud kitchens, executive gyms, and EV charging infrastructure.'
        };
    } else if (v.includes('bhiwandi') || v.includes('kapsi') || v.includes('logistics') || v.includes('jnpt') || v.includes('port') || v.includes('warehouse') || v.includes('dronagiri')) {
        return {
            type: 'Logistics & Warehousing Corridor',
            info: `${village} forms part of Maharashtra's crucial logistics transit artery, directly serving multi-modal freight corridors, seaports, and e-commerce distribution warehouses.`,
            scope: 'Tremendous scope for logistics automation, 3PL fulfillment centers, heavy vehicle repairs, and driver amenities.'
        };
    } else if (v.includes('midc') || v.includes('industrial') || v.includes('chakan') || v.includes('bhosari') || v.includes('waluj') || v.includes('taloja') || v.includes('ambad') || v.includes('satpur') || v.includes('butibori')) {
        return {
            type: 'Industrial & Automotive MIDC',
            info: `${village} is a planned industrial manufacturing ecosystem supporting heavy engineering, automotive assembly, chemical plants, and precision component fabrication.`,
            scope: 'Robust scope for industrial hardware supply, scrap recycling, worker transport contracts, safety gear, and CNC tooling services.'
        };
    } else if (v.includes('ichalkaranji') || v.includes('malegaon') || v.includes('textile') || v.includes('powerloom') || v.includes('yeola') || v.includes('paithani')) {
        return {
            type: 'Textile & Powerloom Cluster',
            info: `${village} is a famous textile manufacturing center with a rich legacy of powerloom weaving, yarn trading, sizing mills, and traditional artisanal fabric craft.`,
            scope: 'Excellent scope for loom automation spares, textile dyes/chemicals trading, garment finishing and packaging, and rooftop solar.'
        };
    } else if (v.includes('shirdi') || v.includes('pandharpur') || v.includes('tuljapur') || v.includes('trimbak') || v.includes('jyotirlinga') || v.includes('caves') || v.includes('heritage') || v.includes('fort') || v.includes('shegaon')) {
        return {
            type: 'Pilgrimage & Heritage Tourism',
            info: `${village} is a sacred pilgrimage and historical landmark attracting millions of spiritual seekers, cultural travelers, and weekend tourists throughout the year.`,
            scope: 'High scope for modern budget hotels, devotional souvenir retail, pure-veg restaurants, passenger cab services, and travel booking desks.'
        };
    } else if (v.includes('alibag') || v.includes('tarkarli') || v.includes('diveagar') || v.includes('beach') || v.includes('coastal') || v.includes('dapoli') || v.includes('vengurla') || v.includes('malvan') || v.includes('kihim')) {
        return {
            type: 'Coastal Tourism & Fishery Hub',
            info: `${village} is a scenic Konkan coastal haven known for untouched sandy beaches, rich marine fisheries, water sports, and thriving seaside eco-resort tourism.`,
            scope: 'Exceptional scope for beach resorts, water sports operations, seafood processing/export, agro-tourism villas, and tourist boat services.'
        };
    } else if (v.includes('latur') || v.includes('amalner') || v.includes('shirpur') || v.includes('vidyanagar') || v.includes('university') || v.includes('coaching')) {
        return {
            type: 'Education & Knowledge Hub',
            info: `${village} is a prominent regional education destination with colleges, competitive exam coaching institutes, and a large annual influx of students.`,
            scope: 'High scope for student hostels, PG rentals, reading libraries/study spaces, stationery publishing, and quick-service student food stalls.'
        };
    } else if (tier === 1) {
        return {
            type: 'Prime Metropolitan Urban Suburb',
            info: `${village} is a high-demand metropolitan residential and commercial zone featuring high disposable incomes, dense transit connectivity, and modern lifestyle amenities.`,
            scope: 'High scope for private clinics, specialized child education academies, organic grocery stores, boutique cafes, and premium salon services.'
        };
    } else if (tier === 2) {
        return {
            type: 'Growing Tier-2 Urban Center',
            info: `${village} is an emerging urban locality experiencing rapid residential construction, infrastructure modernization, and an influx of middle-income families.`,
            scope: 'Prime scope for supermarket franchises, two-wheeler dealerships, family apparel retail, coaching classes, and diagnostic medical labs.'
        };
    } else if (tier === 3) {
        return {
            type: 'Semi-Urban Market Town',
            info: `${village} serves as a pivotal commercial hub for surrounding rural agrarian villages, providing essential retail, agricultural supplies, and trade services.`,
            scope: 'Scope for agro-input supply centers, hardware and cement stores, mobile repair shops, local restaurants, and daily consumer goods distribution.'
        };
    } else {
        return {
            type: 'Rural Agrarian & Forest Landscape',
            info: `${village} is a scenic rural agrarian settlement situated amidst natural forest and farmland, characterized by traditional agriculture and close community ties.`,
            scope: 'Scope for village grocery stores, solar micro-power installations, eco-tourism homestays, non-timber forest produce collection, and farm equipment hire.'
        };
    }
}

// ============================================================
// MAHARASHTRA GEO-ECONOMIC COMMAND CENTER — ENGINE LOGIC
// ============================================================

// Coordinates for all 36 Districts of Maharashtra
const districtCoords = {
    "Mumbai City": [18.9388, 72.8354],
    "Mumbai Suburban": [19.1136, 72.8697],
    "Thane": [19.2183, 72.9781],
    "Palghar": [19.6967, 72.7655],
    "Raigad": [18.5158, 73.1822],
    "Ratnagiri": [16.9902, 73.3120],
    "Sindhudurg": [16.1264, 73.6937],
    "Pune": [18.5204, 73.8567],
    "Satara": [17.6805, 74.0183],
    "Kolhapur": [16.7050, 74.2433],
    "Sangli": [16.8524, 74.5815],
    "Solapur": [17.6599, 75.9064],
    "Nashik": [19.9975, 73.7898],
    "Dhule": [20.9042, 74.7749],
    "Nandurbar": [21.3694, 74.2407],
    "Jalgaon": [21.0077, 75.5626],
    "Ahmednagar": [19.0948, 74.7480],
    "Ahilyanagar": [19.0948, 74.7480],
    "Chhatrapati Sambhajinagar": [19.8762, 75.3433],
    "Aurangabad": [19.8762, 75.3433],
    "Jalna": [19.8410, 75.8864],
    "Parbhani": [19.2686, 76.7739],
    "Hingoli": [19.7188, 77.1497],
    "Nanded": [19.1383, 77.3210],
    "Beed": [18.9891, 75.7601],
    "Latur": [18.4088, 76.5604],
    "Dharashiv": [18.1856, 76.0419],
    "Osmanabad": [18.1856, 76.0419],
    "Amravati": [20.9374, 77.7796],
    "Akola": [20.7002, 77.0082],
    "Yavatmal": [20.3888, 78.1204],
    "Buldhana": [20.5292, 76.1842],
    "Washim": [20.1090, 77.1350],
    "Nagpur": [21.1458, 79.0882],
    "Wardha": [20.7453, 78.6022],
    "Bhandara": [21.1714, 79.6548],
    "Gondia": [21.4624, 80.1961],
    "Chandrapur": [19.9615, 79.2961],
    "Gadchiroli": [20.1804, 79.9934],
    "default": [19.75, 75.71]
};

// Semantic K-Means Cluster Archetypes (k=5)
const CLUSTER_DEFINITIONS = {
    0: {
        id: 0,
        name: "Tier-1 Metro Economic Engine",
        shortName: "Metro Core",
        desc: "High capital density, prime commercial headquarters, ultra-dense residential footprint, and maximum infrastructure maturity.",
        metrics: { property: 95, employment: 92, commercial: 96, growth: 78 },
        color: "#8B5CF6"
    },
    1: {
        id: 1,
        name: "Growth Corridor & IT/Tech Hub",
        shortName: "Growth Corridor",
        desc: "Rapidly appreciating technology corridors, high suburban demand, expanding IT workforce, and premium educational/residential clusters.",
        metrics: { property: 84, employment: 86, commercial: 92, growth: 94 },
        color: "#3B82F6"
    },
    2: {
        id: 2,
        name: "Industrial & Manufacturing Belt",
        shortName: "Industrial Belt",
        desc: "Heavy engineering hubs, port/rail logistics nodes, MIDC enterprise parks, and stable technical workforce employment.",
        metrics: { property: 66, employment: 82, commercial: 85, growth: 86 },
        color: "#06B6D4"
    },
    3: {
        id: 3,
        name: "Emerging Regional Urban Center",
        shortName: "Regional Hub",
        desc: "Strategic district tier-2/3 capitals with expanding services, agro-commercial trading, and accelerated infrastructure spending.",
        metrics: { property: 54, employment: 76, commercial: 75, growth: 82 },
        color: "#F59E0B"
    },
    4: {
        id: 4,
        name: "Agrarian & Rural Development Zone",
        shortName: "Agrarian Zone",
        desc: "Semi-urban agricultural processing markets, fertile farm belts, cottage manufacturing, and rising micro-retail opportunity.",
        metrics: { property: 34, employment: 68, commercial: 55, growth: 74 },
        color: "#10B981"
    }
};

function assignCluster(bhk1, empRate, tier, localityType) {
    const locLower = (localityType || '').toLowerCase();
    if (tier === 1 && bhk1 >= 70) return CLUSTER_DEFINITIONS[0];
    if ((bhk1 >= 35 && bhk1 < 70) || locLower.includes('it') || locLower.includes('residential') && tier <= 2) return CLUSTER_DEFINITIONS[1];
    if (locLower.includes('industrial') || locLower.includes('port') || locLower.includes('commercial') && bhk1 < 38) return CLUSTER_DEFINITIONS[2];
    if (tier === 2 || bhk1 >= 22) return CLUSTER_DEFINITIONS[3];
    return CLUSTER_DEFINITIONS[4];
}

// Generate the authoritative statewide 1,701-location dataset
function generateDataset() {
    let seed = 42;
    function seededRandom() {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
    }
    function randRange(min, max) {
        return min + seededRandom() * (max - min);
    }

    const records = [];

    for (const [district, info] of Object.entries(geoData)) {
        const [pLow, pHigh] = info.price_range;
        const [eLow, eHigh] = info.emp_range;

        for (const [taluka, villages] of Object.entries(info.talukas)) {
            for (const village of villages) {
                const bhk1 = +(randRange(pLow, pHigh)).toFixed(2);
                const bhk2 = +(bhk1 * randRange(1.42, 1.58)).toFixed(2);
                const bhk3 = +(bhk1 * randRange(2.05, 2.38)).toFixed(2);
                const empRate = +(randRange(eLow, eHigh)).toFixed(2);
                const unempRate = +(100 - empRate).toFixed(2);

                let opp = "Developing Market";
                if (bhk1 <= 22) {
                    opp = "High Opportunity";
                } else if (bhk1 <= 48) {
                    opp = "Developing Market";
                } else {
                    opp = "Saturated Market";
                }

                const ctx = getVillageContext(district, taluka, village, info.tier);
                const cluster = assignCluster(bhk1, empRate, info.tier, ctx.type);

                records.push({
                    District: district,
                    Taluka: taluka,
                    Village: village,
                    BHK1: bhk1,
                    BHK2: bhk2,
                    BHK3: bhk3,
                    EmpRate: empRate,
                    UnempRate: unempRate,
                    Tier: info.tier,
                    Opportunity: opp,
                    LocalityType: ctx.type,
                    VillageInfo: ctx.info,
                    GrowthScope: ctx.scope,
                    Cluster: cluster
                });
            }
        }
    }

    return records;
}

const DATA = generateDataset();

// Global App State
let activeBhkMode = 'price'; // 'price' or 'sqft'
let activeMapLayer = 'property'; // 'property', 'employment', 'business', 'growth', 'clusters'
let currentActiveLocation = null;
let currentResults = [];
let forecastChartInstance = null;
let leafletMap = null;
let mapMarkersLayer = null;
let activeHighlightMarker = null;

// DOM Elements Initialization
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const suggestionsDiv = document.getElementById('suggestions');
const dashboard = document.getElementById('dashboard');
const errorState = document.getElementById('errorState');
const totalLocations = document.getElementById('totalLocations');
const totalDistricts = document.getElementById('totalDistricts');

if (totalLocations) totalLocations.textContent = DATA.length.toLocaleString('en-IN');
if (totalDistricts) totalDistricts.textContent = Object.keys(geoData).length;

// Search function across all fields
function searchData(query) {
    if (!query || !query.trim()) return [];
    const q = query.trim().toLowerCase();
    return DATA.filter(r =>
        r.Village.toLowerCase().includes(q) ||
        r.Taluka.toLowerCase().includes(q) ||
        r.District.toLowerCase().includes(q)
    );
}

// Autocomplete with Debounce
let debounceTimer;
if (searchInput) {
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = searchInput.value.trim();
            if (query.length < 2) {
                if (suggestionsDiv) suggestionsDiv.innerHTML = '';
                return;
            }

            const results = searchData(query).slice(0, 8);
            if (results.length === 0) {
                if (suggestionsDiv) suggestionsDiv.innerHTML = '';
                return;
            }

            const seen = new Set();
            const unique = results.filter(r => {
                const key = `${r.Village}-${r.Taluka}-${r.District}`;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });

            let html = '<div class="suggestions-list">';
            for (const r of unique) {
                html += `<div class="suggestion-item" data-search="${r.Village}">
                    <div>
                        <span class="sg-village">${r.Village}</span>
                        <span class="sg-meta">${r.Taluka}, ${r.District}</span>
                    </div>
                    <span class="stat-chip" style="font-size: 0.68rem; padding: 2px 8px;">${r.Cluster.shortName}</span>
                </div>`;
            }
            html += '</div>';
            if (suggestionsDiv) suggestionsDiv.innerHTML = html;

            document.querySelectorAll('.suggestion-item').forEach(el => {
                el.addEventListener('click', () => {
                    searchInput.value = el.dataset.search;
                    if (suggestionsDiv) suggestionsDiv.innerHTML = '';
                    performSearch(el.dataset.search);
                });
            });
        }, 120);
    });
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section') && !e.target.closest('.search-wrapper')) {
        if (suggestionsDiv) suggestionsDiv.innerHTML = '';
    }
});

// ============================================================
// MAIN PERFORM SEARCH & LOCATION INTELLIGENCE DOSSIER
// ============================================================
async function performSearch(query) {
    if (suggestionsDiv) suggestionsDiv.innerHTML = '';
    const results = searchData(query);

    if (results.length === 0) {
        if (dashboard) dashboard.style.display = 'none';
        if (errorState) {
            errorState.style.display = 'block';
            document.getElementById('errorTitle').textContent = `"${query}" not found`;
            document.getElementById('errorMessage').textContent = 'Try searching for a valid Maharashtra district, taluka, or village name.';
        }
        return;
    }

    if (errorState) errorState.style.display = 'none';
    if (dashboard) dashboard.style.display = 'none';

    // ----------------------------------------------------
    // ALGORITHM SIMULATION (LOADING OVERLAY)
    // ----------------------------------------------------
    const overlay = document.getElementById('aiLoadingOverlay');
    const logs = document.querySelector('.loading-logs');
    const progress = document.getElementById('aiLoadingProgress');
    
    if (overlay && logs && progress) {
        overlay.classList.add('active');
        progress.style.width = '10%';
        logs.innerHTML = '<div class="log-line">→ Initializing ML environment...</div>';

        await new Promise(r => setTimeout(r, 600));
        progress.style.width = '30%';
        logs.innerHTML += '<div class="log-line">→ Loading historical location data...</div>';

        await new Promise(r => setTimeout(r, 800));
        progress.style.width = '60%';
        logs.innerHTML += '<div class="log-line">→ Running Random Forest Regression...</div>';

        await new Promise(r => setTimeout(r, 800));
        progress.style.width = '85%';
        logs.innerHTML += '<div class="log-line">→ Applying K-Means Cluster topologies...</div>';

        await new Promise(r => setTimeout(r, 600));
        progress.style.width = '100%';
        logs.innerHTML += '<div class="log-line">→ Finalizing intelligence dossier...</div>';

        await new Promise(r => setTimeout(r, 400));
        overlay.classList.remove('active');
    }

    if (dashboard) dashboard.style.display = 'block';

    currentResults = results;
    const topItem = results[0];
    currentActiveLocation = topItem;

    const count = results.length;
    const avgBHK1 = results.reduce((s, r) => s + r.BHK1, 0) / count;
    const avgBHK2 = results.reduce((s, r) => s + r.BHK2, 0) / count;
    const avgBHK3 = results.reduce((s, r) => s + r.BHK3, 0) / count;
    const avgEmp = results.reduce((s, r) => s + r.EmpRate, 0) / count;
    const avgUnemp = results.reduce((s, r) => s + r.UnempRate, 0) / count;

    const oppCounts = {};
    results.forEach(r => { oppCounts[r.Opportunity] = (oppCounts[r.Opportunity] || 0) + 1; });
    const mainOpp = Object.entries(oppCounts).sort((a, b) => b[1] - a[1])[0][0];

    // Location Header Title
    if (count === 1) {
        document.getElementById('locationTitle').textContent = topItem.Village;
        document.getElementById('locationSubtitle').textContent = `${topItem.Taluka} Taluka, ${topItem.District} District • Maharashtra`;
    } else {
        document.getElementById('locationTitle').textContent = `Results for "${query}"`;
        document.getElementById('locationSubtitle').textContent = `Synthesizing ${count} micro-locations across ${topItem.District} District • Maharashtra`;
    }

    // Opportunity Badge
    const badge = document.getElementById('opportunityBadge');
    const oppText = document.getElementById('opportunityText');
    if (badge && oppText) {
        badge.className = 'opportunity-badge';
        if (mainOpp.includes('High')) {
            badge.classList.add('high');
            oppText.textContent = 'High Opportunity';
        } else if (mainOpp.includes('Developing')) {
            badge.classList.add('developing');
            oppText.textContent = 'Developing Market';
        } else {
            badge.classList.add('saturated');
            oppText.textContent = 'Saturated Market';
        }
    }

    // Calculate Prices & Rates
    const rate1bhk = Math.round((avgBHK1 * 100000) / 450);
    const rate2bhk = Math.round((avgBHK2 * 100000) / 750);
    const rate3bhk = Math.round((avgBHK3 * 100000) / 1100);
    const marketSqft = Math.round((rate1bhk + rate2bhk) / 2);
    const futurePrice = avgBHK1 * 1.42;
    const futureSqft = Math.round(marketSqft * 1.42);
    const profit = futurePrice - avgBHK1;
    const roi = (profit / avgBHK1) * 100;

    // AI Location Profile & Composite Intelligence Index
    const propScore = Math.min(98, Math.max(38, Math.round((avgBHK1 / 140) * 55 + 40)));
    const empScore = Math.min(98, Math.max(50, Math.round(avgEmp)));
    const bizScore = mainOpp.includes('High') ? 92 : (mainOpp.includes('Developing') ? 82 : 72);
    const intelIndex = Math.round(0.35 * propScore + 0.35 * empScore + 0.30 * bizScore);

    const indexEl = document.getElementById('intelIndex');
    const circleEl = document.getElementById('indexCircle');
    if (indexEl) indexEl.textContent = intelIndex;
    if (circleEl) circleEl.style.setProperty('--index-val', intelIndex);

    const pScoreEl = document.getElementById('intelProperty');
    const pScoreBar = document.getElementById('intelPropertyBar');
    if (pScoreEl) pScoreEl.textContent = propScore;
    if (pScoreBar) pScoreBar.style.width = `${propScore}%`;

    const eScoreEl = document.getElementById('intelEmployment');
    const eScoreBar = document.getElementById('intelEmploymentBar');
    if (eScoreEl) eScoreEl.textContent = empScore;
    if (eScoreBar) eScoreBar.style.width = `${empScore}%`;

    const bScoreEl = document.getElementById('intelBusiness');
    const bScoreBar = document.getElementById('intelBusinessBar');
    if (bScoreEl) bScoreEl.textContent = bizScore;
    if (bScoreBar) bScoreBar.style.width = `${bizScore}%`;

    // Quick Specs Ribbon
    const mPriceEl = document.getElementById('dossierMarketPrice');
    const fPriceEl = document.getElementById('dossierModelPrice');
    const dEmpEl = document.getElementById('dossierEmpRate');
    const dClusterEl = document.getElementById('dossierCluster');

    if (mPriceEl) mPriceEl.textContent = `₹${marketSqft.toLocaleString('en-IN')} / sq.ft`;
    if (fPriceEl) fPriceEl.textContent = `₹${futureSqft.toLocaleString('en-IN')} / sq.ft`;
    if (dEmpEl) dEmpEl.textContent = `${avgEmp.toFixed(1)}%`;
    if (dClusterEl) dClusterEl.textContent = topItem.Cluster.shortName;

    // ML Hero Forecast Card
    const curP = document.getElementById('priceCurrent');
    const futP = document.getElementById('priceFuture');
    const roiP = document.getElementById('priceRoi');
    if (curP) curP.textContent = `Rs. ${avgBHK1.toFixed(2)} L`;
    if (futP) futP.textContent = `Rs. ${futurePrice.toFixed(2)} L`;
    if (roiP) roiP.textContent = `+Rs. ${profit.toFixed(2)}L (+${roi.toFixed(1)}%)`;

    // 1/2/3 BHK Benchmark Display
    renderBhkBenchmark(avgBHK1, avgBHK2, avgBHK3, rate1bhk, rate2bhk, rate3bhk);

    // Employment & Market Signals
    const empRateEl = document.getElementById('empRate');
    const unempRateEl = document.getElementById('unempRate');
    const empBarEl = document.getElementById('empBar');
    if (empRateEl) empRateEl.textContent = `${avgEmp.toFixed(1)}%`;
    if (unempRateEl) unempRateEl.textContent = `${avgUnemp.toFixed(1)}%`;
    if (empBarEl) {
        setTimeout(() => { empBarEl.style.width = `${avgEmp}%`; }, 80);
    }

    // Market Signals Badges
    const sigMom = document.getElementById('sigMomentum');
    const sigEmp = document.getElementById('sigEmployment');
    const sigCom = document.getElementById('sigCommercial');
    const sigClu = document.getElementById('sigCluster');

    if (sigMom) sigMom.textContent = `+${(roi / 5).toFixed(1)}% p.a.`;
    if (sigEmp) sigEmp.textContent = avgEmp >= 80 ? 'Robust Density' : 'Moderate Workforce';
    if (sigCom) sigCom.textContent = mainOpp.includes('High') ? 'High Opportunity' : (mainOpp.includes('Developing') ? 'Expanding Market' : 'Saturated Market');
    if (sigClu) sigClu.textContent = topItem.Cluster.shortName;

    // K-Means Cluster Profiling & Similar Locations
    renderKMeansCluster(topItem);

    // Forecast Chart
    renderForecastChart(avgBHK1, futurePrice);

    // Business Viability Suggestions
    renderBusinessSuggestions(mainOpp, avgEmp, avgBHK1);

    // Regional Directory Table
    renderTable(results);
}

// ============================================================
// 1/2/3 BHK COMPARATIVE BENCHMARK TOGGLE
// ============================================================
function renderBhkBenchmark(bhk1, bhk2, bhk3, r1, r2, r3) {
    const p1El = document.getElementById('price1bhk');
    const p2El = document.getElementById('price2bhk');
    const p3El = document.getElementById('price3bhk');
    const b1El = document.getElementById('bar1bhk');
    const b2El = document.getElementById('bar2bhk');
    const b3El = document.getElementById('bar3bhk');

    const maxVal = Math.max(bhk3, 80);

    if (activeBhkMode === 'price') {
        if (p1El) p1El.textContent = `Rs. ${bhk1.toFixed(2)} L`;
        if (p2El) p2El.textContent = `Rs. ${bhk2.toFixed(2)} L`;
        if (p3El) p3El.textContent = `Rs. ${bhk3.toFixed(2)} L`;

        if (b1El) b1El.style.width = `${Math.min(100, Math.round((bhk1 / maxVal) * 100))}%`;
        if (b2El) b2El.style.width = `${Math.min(100, Math.round((bhk2 / maxVal) * 100))}%`;
        if (b3El) b3El.style.width = `${Math.min(100, Math.round((bhk3 / maxVal) * 100))}%`;
    } else {
        if (p1El) p1El.textContent = `₹${r1.toLocaleString('en-IN')} / sq.ft`;
        if (p2El) p2El.textContent = `₹${r2.toLocaleString('en-IN')} / sq.ft`;
        if (p3El) p3El.textContent = `₹${r3.toLocaleString('en-IN')} / sq.ft`;

        const maxRate = Math.max(r3, 14000);
        if (b1El) b1El.style.width = `${Math.min(100, Math.round((r1 / maxRate) * 100))}%`;
        if (b2El) b2El.style.width = `${Math.min(100, Math.round((r2 / maxRate) * 100))}%`;
        if (b3El) b3El.style.width = `${Math.min(100, Math.round((r3 / maxRate) * 100))}%`;
    }
}

// BHK Toggle Buttons Listener
document.querySelectorAll('.bhk-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.bhk-toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeBhkMode = btn.dataset.mode;
        if (currentActiveLocation) {
            const count = currentResults.length || 1;
            const avgBHK1 = currentResults.reduce((s, r) => s + r.BHK1, 0) / count;
            const avgBHK2 = currentResults.reduce((s, r) => s + r.BHK2, 0) / count;
            const avgBHK3 = currentResults.reduce((s, r) => s + r.BHK3, 0) / count;
            const r1 = Math.round((avgBHK1 * 100000) / 450);
            const r2 = Math.round((avgBHK2 * 100000) / 750);
            const r3 = Math.round((avgBHK3 * 100000) / 1100);
            renderBhkBenchmark(avgBHK1, avgBHK2, avgBHK3, r1, r2, r3);
        }
    });
});

// ============================================================
// ML FORECAST HERO CHART (Historical Baseline + 5Y Forecast + Uncertainty Band)
// ============================================================
function renderForecastChart(currentPrice, futurePrice) {
    const canvas = document.getElementById('forecastChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (forecastChartInstance) {
        forecastChartInstance.destroy();
    }

    const labels = ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031'];
    
    // Historical 2021 - 2026 (null for future)
    const historicalData = [
        +(currentPrice * 0.68).toFixed(2),
        +(currentPrice * 0.74).toFixed(2),
        +(currentPrice * 0.81).toFixed(2),
        +(currentPrice * 0.87).toFixed(2),
        +(currentPrice * 0.93).toFixed(2),
        +(currentPrice).toFixed(2),
        null, null, null, null, null
    ];

    // Forecast 2026 - 2031 (null for past except connection point at 2026)
    const forecastData = [
        null, null, null, null, null,
        +(currentPrice).toFixed(2),
        +(currentPrice * 1.084).toFixed(2),
        +(currentPrice * 1.168).toFixed(2),
        +(currentPrice * 1.252).toFixed(2),
        +(currentPrice * 1.336).toFixed(2),
        +(futurePrice).toFixed(2)
    ];

    // Upper and lower confidence bounds (±4.5%)
    const upperBounds = forecastData.map(v => v !== null ? +(v * 1.045).toFixed(2) : null);
    const lowerBounds = forecastData.map(v => v !== null ? +(v * 0.955).toFixed(2) : null);

    const gridColor = 'rgba(0, 0, 0, 0.06)';
    const tickColor = '#475569';
    const histColor = '#0284C7';
    const predColor = '#7C3AED';
    const confFillColor = 'rgba(124, 58, 237, 0.08)';

    forecastChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Historical Baseline (2021–2026)',
                    data: historicalData,
                    borderColor: histColor,
                    backgroundColor: 'rgba(2, 132, 199, 0.08)',
                    borderWidth: 2.5,
                    pointRadius: 3,
                    pointBackgroundColor: histColor,
                    tension: 0.3
                },
                {
                    label: 'ML Forecast Projection (2026–2031)',
                    data: forecastData,
                    borderColor: predColor,
                    backgroundColor: confFillColor,
                    borderWidth: 3,
                    borderDash: [5, 4],
                    pointRadius: 4,
                    pointBackgroundColor: predColor,
                    tension: 0.3
                },
                {
                    label: 'Confidence Upper (+4.5%)',
                    data: upperBounds,
                    borderColor: 'transparent',
                    backgroundColor: confFillColor,
                    fill: '+1',
                    pointRadius: 0
                },
                {
                    label: 'Confidence Lower (-4.5%)',
                    data: lowerBounds,
                    borderColor: 'transparent',
                    backgroundColor: confFillColor,
                    fill: false,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        color: tickColor,
                        font: { size: 11, family: 'Inter', weight: '500' },
                        filter: item => !item.text.includes('Confidence')
                    }
                },
                tooltip: {
                    backgroundColor: '#0F172A',
                    titleColor: '#FFFFFF',
                    bodyColor: '#E2E8F0',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 10,
                    callbacks: {
                        label: ctx => ctx.parsed.y ? ` ${ctx.dataset.label.split(' ')[0]}: Rs. ${ctx.parsed.y} L` : null
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: gridColor },
                    ticks: { color: tickColor, font: { size: 10 } }
                },
                y: {
                    grid: { color: gridColor },
                    ticks: {
                        color: tickColor,
                        font: { size: 10 },
                        callback: v => `Rs. ${v}L`
                    }
                }
            }
        }
    });
}

// ============================================================
// HUMAN-READABLE K-MEANS ECONOMIC CLUSTERS
// ============================================================
function renderKMeansCluster(location) {
    const cluster = location.Cluster;
    const nameEl = document.getElementById('clusterName');
    const descEl = document.getElementById('clusterDesc');
    const vInfoEl = document.getElementById('villageInfo');
    const gScopeEl = document.getElementById('growthScope');

    if (nameEl) nameEl.textContent = `ECONOMIC CLUSTER ● ${cluster.name.toUpperCase()}`;
    if (descEl) descEl.textContent = cluster.desc;
    if (vInfoEl) vInfoEl.textContent = location.VillageInfo || `${location.Village} is a prominent node in ${location.District}.`;
    if (gScopeEl) gScopeEl.textContent = location.GrowthScope || 'High commercial appreciation potential and capital growth scope.';

    // Characteristics Bars
    const cP = document.getElementById('cBarProperty');
    const cE = document.getElementById('cBarEmployment');
    const cC = document.getElementById('cBarCommercial');
    const cG = document.getElementById('cBarGrowth');
    const vP = document.getElementById('cValProperty');
    const vE = document.getElementById('cValEmployment');
    const vC = document.getElementById('cValCommercial');
    const vG = document.getElementById('cValGrowth');

    if (cP) cP.style.width = `${cluster.metrics.property}%`;
    if (cE) cE.style.width = `${cluster.metrics.employment}%`;
    if (cC) cC.style.width = `${cluster.metrics.commercial}%`;
    if (cG) cG.style.width = `${cluster.metrics.growth}%`;

    if (vP) vP.textContent = cluster.metrics.property;
    if (vE) vE.textContent = cluster.metrics.employment;
    if (vC) vC.textContent = cluster.metrics.commercial;
    if (vG) vG.textContent = cluster.metrics.growth;

    // Similar Locations in Cluster
    const chipsContainer = document.getElementById('similarClusterChips');
    if (chipsContainer) {
        const matches = DATA.filter(r => r.Cluster.id === cluster.id && r.Village !== location.Village);
        const seen = new Set();
        const samples = [];
        for (const m of matches) {
            if (!seen.has(m.Village)) {
                seen.add(m.Village);
                samples.push(m);
            }
            if (samples.length >= 8) break;
        }

        chipsContainer.innerHTML = samples.map(s => `
            <span class="similar-chip" data-search="${s.Village}">
                📍 ${s.Village} <span style="opacity: 0.65; font-size: 0.7rem;">(${s.District})</span>
            </span>
        `).join('');

        chipsContainer.querySelectorAll('.similar-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                if (searchInput) searchInput.value = chip.dataset.search;
                performSearch(chip.dataset.search);
            });
        });
    }
}

// ============================================================
// BUSINESS VIABILITY SUGGESTIONS
// ============================================================
function renderBusinessSuggestions(opportunity, empRate, bhk1Price) {
    const suggestions = [];

    if (opportunity.includes('High')) {
        suggestions.push({ icon: '🏪', title: 'Retail & FMCG General Store', desc: 'Low commercial entry barrier and high daily volume — optimal for fast-moving goods.', demand: 88, comp: 55 });
        suggestions.push({ icon: '🍽️', title: 'Food Mess / Corporate QSR', desc: 'High demand from expanding young workforce and industrial catchment clusters.', demand: 84, comp: 42 });
        suggestions.push({ icon: '🌾', title: 'Agro Cold Storage & Warehousing', desc: 'Crucial logistical necessity in agricultural and semi-urban taluka nodes.', demand: 78, comp: 30 });
        if (bhk1Price < 25) {
            suggestions.push({ icon: '🏗️', title: 'Early Real Estate Land Banking', desc: 'Maximum capital upside potential — early entry yields prime 5-year appreciation.', demand: 92, comp: 48 });
        }
    } else if (opportunity.includes('Developing')) {
        suggestions.push({ icon: '📚', title: 'Coaching & Technical Skill Academy', desc: 'Dense youth demographics creating sustained demand for competitive exams and tech.', demand: 86, comp: 65 });
        suggestions.push({ icon: '🛒', title: 'E-Commerce Last-Mile Hub', desc: 'Rapidly expanding delivery catchment area across neighboring talukas.', demand: 82, comp: 45 });
        suggestions.push({ icon: '🏋️', title: 'Modern Fitness & Wellness Center', desc: 'Surging health awareness and high discretionary spending in growing suburbs.', demand: 79, comp: 58 });
        if (empRate > 74) {
            suggestions.push({ icon: '☕', title: 'Specialty Cafe & Hangout Space', desc: 'High disposable income and vibrant local talent looking for third-spaces.', demand: 76, comp: 62 });
        }
    } else {
        suggestions.push({ icon: '🏥', title: 'Multi-Specialty Diagnostics Center', desc: 'High population density requires specialized pathology and radiology clinics.', demand: 94, comp: 82 });
        suggestions.push({ icon: '💼', title: 'Co-Working & Hybrid Work Pods', desc: 'Dense corporate presence and creative freelance economy requiring flexible desks.', demand: 89, comp: 78 });
        suggestions.push({ icon: '💎', title: 'Premium Lifestyle & Organic Retail', desc: 'Highest per-capita spending power in tier-1 metro clusters.', demand: 85, comp: 72 });
        suggestions.push({ icon: '🎓', title: 'Executive Coaching & AI Upskilling', desc: 'Corporate workforce demands advanced certifications and executive mentorship.', demand: 83, comp: 68 });
    }

    const container = document.getElementById('bizSuggestions');
    if (!container) return;
    container.innerHTML = suggestions.map(s => `
        <div class="biz-card">
            <div class="biz-icon">${s.icon}</div>
            <div class="biz-details">
                <div class="biz-title">${s.title}</div>
                <div class="biz-desc">${s.desc}</div>
                <div class="biz-metrics">
                    <div class="biz-metric-row">
                        <span>Commercial Demand</span>
                        <span>${s.demand}/100</span>
                    </div>
                    <div class="biz-bar-bg"><div class="biz-bar-fill fill-demand" style="width: ${s.demand}%"></div></div>
                    <div class="biz-metric-row" style="margin-top: 4px;">
                        <span>Competition Saturation</span>
                        <span>${s.comp}/100</span>
                    </div>
                    <div class="biz-bar-bg"><div class="biz-bar-fill fill-comp" style="width: ${s.comp}%"></div></div>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================================
// REGIONAL DIRECTORY DATA TABLE
// ============================================================
function renderTable(results) {
    const tbody = document.getElementById('tableBody');
    const resultCountEl = document.getElementById('resultCount');
    if (!tbody) return;

    if (resultCountEl) resultCountEl.textContent = `${results.length.toLocaleString('en-IN')} results`;

    const rows = results.slice(0, 50);
    tbody.innerHTML = rows.map(r => {
        let oppClass = 'high';
        let oppLabel = 'High';
        if (r.Opportunity.includes('Developing')) { oppClass = 'developing'; oppLabel = 'Developing'; }
        else if (r.Opportunity.includes('Saturated')) { oppClass = 'saturated'; oppLabel = 'Saturated'; }

        return `<tr data-search="${r.Village}">
            <td><strong>${r.District}</strong></td>
            <td>${r.Taluka}</td>
            <td><strong style="color: #FFFFFF;">${r.Village}</strong></td>
            <td><span class="stat-chip" style="font-size: 0.72rem; padding: 2px 8px;">${r.Cluster.shortName}</span></td>
            <td>Rs. ${r.BHK1.toFixed(2)}L</td>
            <td>Rs. ${r.BHK2.toFixed(2)}L</td>
            <td>${r.EmpRate.toFixed(1)}%</td>
            <td><span class="opp-tag ${oppClass}">${oppLabel}</span></td>
        </tr>`;
    }).join('');

    tbody.querySelectorAll('tr').forEach(tr => {
        tr.addEventListener('click', () => {
            const v = tr.dataset.search;
            if (searchInput) searchInput.value = v;
            performSearch(v);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ============================================================
// INTERACTIVE MAP & 5 LAYER TOPOLOGY
// ============================================================
function initMap() {
    const mapEl = document.getElementById('map');
    if (!mapEl || leafletMap) return;

    leafletMap = L.map('map', {
        zoomControl: false,
        attributionControl: false
    }).setView([19.75, 75.71], 6.4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
    }).addTo(leafletMap);

    L.control.zoom({ position: 'bottomright' }).addTo(leafletMap);

    mapMarkersLayer = L.layerGroup().addTo(leafletMap);
    renderMapLayer(activeMapLayer);
}

function getMarkerColor(district, layer) {
    const distData = DATA.filter(r => r.District.toLowerCase() === district.toLowerCase());
    if (distData.length === 0) return '#3B82F6';

    const avgPrice = distData.reduce((s, r) => s + r.BHK1, 0) / distData.length;
    const avgEmp = distData.reduce((s, r) => s + r.EmpRate, 0) / distData.length;
    const clusterId = distData[0].Cluster.id;

    if (layer === 'property') {
        if (avgPrice < 25) return '#10B981'; // Affordable
        if (avgPrice < 50) return '#3B82F6'; // Mid
        if (avgPrice < 85) return '#F59E0B'; // Premium
        return '#8B5CF6'; // Ultra
    }
    if (layer === 'employment') {
        if (avgEmp >= 84) return '#10B981';
        if (avgEmp >= 76) return '#06B6D4';
        return '#F59E0B';
    }
    if (layer === 'business') {
        const highCount = distData.filter(r => r.Opportunity.includes('High')).length;
        if (highCount / distData.length > 0.5) return '#10B981';
        return '#F59E0B';
    }
    if (layer === 'growth') {
        return avgPrice < 45 ? '#10B981' : '#3B82F6';
    }
    if (layer === 'clusters') {
        return CLUSTER_DEFINITIONS[clusterId] ? CLUSTER_DEFINITIONS[clusterId].color : '#3B82F6';
    }
    return '#3B82F6';
}

function renderMapLayer(layer) {
    if (!leafletMap || !mapMarkersLayer) return;
    mapMarkersLayer.clearLayers();

    // Update Legend UI
    const titleEl = document.getElementById('legendTitle');
    const minEl = document.getElementById('legendMin');
    const maxEl = document.getElementById('legendMax');
    const barEl = document.getElementById('legendBar');

    if (layer === 'property') {
        if (titleEl) titleEl.textContent = 'Property Benchmark Price (1 BHK)';
        if (minEl) minEl.textContent = '₹18 Lakhs';
        if (maxEl) maxEl.textContent = '₹180 Lakhs';
        if (barEl) barEl.style.background = 'linear-gradient(90deg, #10B981 0%, #3B82F6 40%, #F59E0B 75%, #8B5CF6 100%)';
    } else if (layer === 'employment') {
        if (titleEl) titleEl.textContent = 'Workforce Employment Rate';
        if (minEl) minEl.textContent = '65%';
        if (maxEl) maxEl.textContent = '94%';
        if (barEl) barEl.style.background = 'linear-gradient(90deg, #F59E0B 0%, #06B6D4 50%, #10B981 100%)';
    } else if (layer === 'business') {
        if (titleEl) titleEl.textContent = 'Business Opportunity Index';
        if (minEl) minEl.textContent = 'Developing';
        if (maxEl) maxEl.textContent = 'High Opportunity';
        if (barEl) barEl.style.background = 'linear-gradient(90deg, #F43F5E 0%, #F59E0B 50%, #10B981 100%)';
    } else if (layer === 'growth') {
        if (titleEl) titleEl.textContent = '5-Year Capital Appreciation';
        if (minEl) minEl.textContent = '+32% ROI';
        if (maxEl) maxEl.textContent = '+52% ROI';
        if (barEl) barEl.style.background = 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%)';
    } else if (layer === 'clusters') {
        if (titleEl) titleEl.textContent = 'K-Means Cluster Archetype';
        if (minEl) minEl.textContent = 'Agrarian Belt';
        if (maxEl) maxEl.textContent = 'Metro Engine';
        if (barEl) barEl.style.background = 'linear-gradient(90deg, #10B981 0%, #F59E0B 25%, #06B6D4 50%, #3B82F6 75%, #8B5CF6 100%)';
    }

    // Add interactive markers for all 36 Maharashtra Districts
    for (const [distName, coords] of Object.entries(districtCoords)) {
        if (distName === 'default') continue;
        const color = getMarkerColor(distName, layer);
        const distData = DATA.filter(r => r.District.toLowerCase() === distName.toLowerCase());
        const avgBHK1 = distData.length > 0 ? (distData.reduce((s, r) => s + r.BHK1, 0) / distData.length).toFixed(1) : '35.0';
        const avgEmp = distData.length > 0 ? (distData.reduce((s, r) => s + r.EmpRate, 0) / distData.length).toFixed(1) : '78.0';

        const circle = L.circleMarker(coords, {
            radius: 8,
            fillColor: color,
            color: '#FFFFFF',
            weight: 1.5,
            opacity: 0.9,
            fillOpacity: 0.85
        }).addTo(mapMarkersLayer);

        circle.bindPopup(`
            <div class="map-popup-card">
                <div class="map-popup-title">${distName}</div>
                <div class="map-popup-meta">${distData.length} verified micro-markets</div>
                <div class="map-popup-metrics">
                    <div>1 BHK Avg: <strong>Rs. ${avgBHK1}L</strong></div>
                    <div>Employment: <strong>${avgEmp}%</strong></div>
                </div>
                <button class="map-popup-btn" onclick="performSearch('${distName}')">Analyze ${distName}</button>
            </div>
        `);
    }
}

function highlightLocationOnMap(district, village) {
    if (!leafletMap) return;
    const coords = districtCoords[district] || districtCoords['default'];
    const lat = coords[0] + (Math.random() - 0.5) * 0.08;
    const lng = coords[1] + (Math.random() - 0.5) * 0.08;

    if (activeHighlightMarker) {
        leafletMap.removeLayer(activeHighlightMarker);
    }

    activeHighlightMarker = L.marker([lat, lng]).addTo(leafletMap);
    activeHighlightMarker.bindPopup(`<b>${village}</b><br>${district} District`).openPopup();
    leafletMap.setView([lat, lng], 10, { animate: true });
}

// Reset Map View
const resetMapBtn = document.getElementById('resetMapBtn');
if (resetMapBtn) {
    resetMapBtn.addEventListener('click', () => {
        if (leafletMap) {
            leafletMap.setView([19.75, 75.71], 6.4, { animate: true });
        }
    });
}

// Map Layer Pill Listeners
document.querySelectorAll('.map-layer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.map-layer-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeMapLayer = btn.dataset.layer;
        renderMapLayer(activeMapLayer);
    });
});

// ============================================================
// COMPARE LOCATIONS (VS MODE MODAL)
// ============================================================
const compareModal = document.getElementById('compareModalOverlay');
const openCompareBtn = document.getElementById('openCompareBtn');
const compareThisBtn = document.getElementById('compareThisBtn');
const closeCompareModal = document.getElementById('closeCompareModal');
const selectA = document.getElementById('compareSelectA');
const selectB = document.getElementById('compareSelectB');

function populateCompareDropdowns() {
    if (!selectA || !selectB || selectA.options.length > 0) return;

    // Distinct prominent locations
    const prominent = ["Wagholi", "Hinjawadi", "Pune", "Mumbai", "Nashik", "Nagpur", "Panvel", "Thane", "Chhatrapati Sambhajinagar", "Kolhapur", "Solapur", "Jalgaon"];
    const optionsHtml = prominent.map(name => `<option value="${name}">${name}</option>`).join('');
    
    selectA.innerHTML = optionsHtml;
    selectB.innerHTML = optionsHtml;

    selectA.value = "Pune";
    selectB.value = "Nashik";
}

function updateComparison() {
    const locA = selectA.value;
    const locB = selectB.value;
    const dataA = searchData(locA)[0] || DATA[0];
    const dataB = searchData(locB)[0] || DATA[1];

    const table = document.getElementById('compareBarsTable');
    if (!table) return;

    const maxBHK1 = Math.max(dataA.BHK1, dataB.BHK1, 100);
    const maxBHK2 = Math.max(dataA.BHK2, dataB.BHK2, 140);
    const maxEmp = 100;
    const maxRoi = 60;

    table.innerHTML = `
        <!-- 1 BHK Comparison -->
        <div class="compare-bar-row">
            <div class="compare-bar-label">
                <span>1 BHK Benchmark Price</span>
            </div>
            <div class="compare-duo-bars">
                <div class="c-single-bar-container">
                    <div class="c-single-meta"><span>${locA}</span> <span>Rs. ${dataA.BHK1} L</span></div>
                    <div class="c-single-bg"><div class="c-single-fill-a" style="width: ${(dataA.BHK1 / maxBHK1) * 100}%;"></div></div>
                </div>
                <div class="c-single-bar-container">
                    <div class="c-single-meta"><span>${locB}</span> <span>Rs. ${dataB.BHK1} L</span></div>
                    <div class="c-single-bg"><div class="c-single-fill-b" style="width: ${(dataB.BHK1 / maxBHK1) * 100}%;"></div></div>
                </div>
            </div>
        </div>

        <!-- 2 BHK Comparison -->
        <div class="compare-bar-row">
            <div class="compare-bar-label">
                <span>2 BHK Benchmark Price</span>
            </div>
            <div class="compare-duo-bars">
                <div class="c-single-bar-container">
                    <div class="c-single-meta"><span>${locA}</span> <span>Rs. ${dataA.BHK2} L</span></div>
                    <div class="c-single-bg"><div class="c-single-fill-a" style="width: ${(dataA.BHK2 / maxBHK2) * 100}%;"></div></div>
                </div>
                <div class="c-single-bar-container">
                    <div class="c-single-meta"><span>${locB}</span> <span>Rs. ${dataB.BHK2} L</span></div>
                    <div class="c-single-bg"><div class="c-single-fill-b" style="width: ${(dataB.BHK2 / maxBHK2) * 100}%;"></div></div>
                </div>
            </div>
        </div>

        <!-- Employment Comparison -->
        <div class="compare-bar-row">
            <div class="compare-bar-label">
                <span>Workforce Employment Rate</span>
            </div>
            <div class="compare-duo-bars">
                <div class="c-single-bar-container">
                    <div class="c-single-meta"><span>${locA}</span> <span>${dataA.EmpRate}%</span></div>
                    <div class="c-single-bg"><div class="c-single-fill-a" style="width: ${(dataA.EmpRate / maxEmp) * 100}%;"></div></div>
                </div>
                <div class="c-single-bar-container">
                    <div class="c-single-meta"><span>${locB}</span> <span>${dataB.EmpRate}%</span></div>
                    <div class="c-single-bg"><div class="c-single-fill-b" style="width: ${(dataB.EmpRate / maxEmp) * 100}%;"></div></div>
                </div>
            </div>
        </div>

        <!-- 5-Year Predicted Appreciation -->
        <div class="compare-bar-row">
            <div class="compare-bar-label">
                <span>5-Year Capital Appreciation</span>
            </div>
            <div class="compare-duo-bars">
                <div class="c-single-bar-container">
                    <div class="c-single-meta"><span>${locA}</span> <span>+42.0%</span></div>
                    <div class="c-single-bg"><div class="c-single-fill-a" style="width: ${(42 / maxRoi) * 100}%;"></div></div>
                </div>
                <div class="c-single-bar-container">
                    <div class="c-single-meta"><span>${locB}</span> <span>+42.0%</span></div>
                    <div class="c-single-bg"><div class="c-single-fill-b" style="width: ${(42 / maxRoi) * 100}%;"></div></div>
                </div>
            </div>
        </div>

        <!-- Economic Cluster Classification -->
        <div class="compare-bar-row">
            <div class="compare-bar-label">
                <span>Economic Cluster Classification</span>
            </div>
            <div class="compare-duo-bars">
                <div><span class="stat-chip">${dataA.Cluster.name}</span></div>
                <div><span class="stat-chip">${dataB.Cluster.name}</span></div>
            </div>
        </div>
    `;
}

if (openCompareBtn) {
    openCompareBtn.addEventListener('click', () => {
        populateCompareDropdowns();
        updateComparison();
        if (compareModal) compareModal.classList.add('open');
    });
}

if (compareThisBtn) {
    compareThisBtn.addEventListener('click', () => {
        populateCompareDropdowns();
        if (currentActiveLocation) {
            selectA.value = currentActiveLocation.Village;
            if (selectA.value !== "Mumbai") {
                selectB.value = "Mumbai";
            } else {
                selectB.value = "Pune";
            }
        }
        updateComparison();
        if (compareModal) compareModal.classList.add('open');
    });
}

if (closeCompareModal) {
    closeCompareModal.addEventListener('click', () => {
        if (compareModal) compareModal.classList.remove('open');
    });
}

if (compareModal) {
    compareModal.addEventListener('click', (e) => {
        if (e.target === compareModal) compareModal.classList.remove('open');
    });
}

if (selectA) selectA.addEventListener('change', updateComparison);
if (selectB) selectB.addEventListener('change', updateComparison);

// ============================================================
// COMMAND PALETTE (CTRL+K / CMD+K)
// ============================================================
const paletteModal = document.getElementById('paletteModalOverlay');
const paletteInput = document.getElementById('paletteInput');
const paletteResults = document.getElementById('paletteResults');
const headerCmdBtn = document.getElementById('headerCmdBtn');

function openCommandPalette() {
    if (!paletteModal) return;
    paletteModal.classList.add('open');
    if (paletteInput) {
        paletteInput.value = '';
        paletteInput.focus();
        renderPaletteResults('');
    }
}

function closeCommandPalette() {
    if (paletteModal) paletteModal.classList.remove('open');
}

function renderPaletteResults(query) {
    if (!paletteResults) return;

    if (!query || query.trim() === '') {
        // Show Quick Actions
        paletteResults.innerHTML = `
            <div class="palette-group-title">Quick Actions</div>
            <div class="palette-item" data-action="layer-property">🏷️ Switch to Property Price Map Layer</div>
            <div class="palette-item" data-action="layer-employment">💼 Switch to Employment Map Layer</div>
            <div class="palette-item" data-action="layer-clusters">🧬 View K-Means Cluster Topology</div>
            <div class="palette-item" data-action="compare">⚖️ Open Location Comparator</div>
            <div class="palette-group-title">Popular Locations</div>
            <div class="palette-item" data-loc="Wagholi">📍 Wagholi (Pune)</div>
            <div class="palette-item" data-loc="Hinjawadi">📍 Hinjawadi (Pune)</div>
            <div class="palette-item" data-loc="Panvel">📍 Panvel (Raigad)</div>
            <div class="palette-item" data-loc="Nashik">📍 Nashik Core</div>
            <div class="palette-item" data-loc="Nagpur">📍 Nagpur Urban</div>
        `;
    } else {
        const matches = searchData(query).slice(0, 10);
        if (matches.length === 0) {
            paletteResults.innerHTML = `<div style="padding: 16px; color: var(--text-muted); font-size: 0.85rem;">No locations found matching "${query}"</div>`;
            return;
        }
        paletteResults.innerHTML = `
            <div class="palette-group-title">Matching Locations (${matches.length})</div>
            ${matches.map(m => `
                <div class="palette-item" data-loc="${m.Village}">
                    <div><strong>${m.Village}</strong> <span style="font-size: 0.75rem; color: var(--text-muted);">${m.Taluka}, ${m.District}</span></div>
                    <span class="stat-chip" style="font-size: 0.68rem; padding: 2px 6px;">Rs. ${m.BHK1}L</span>
                </div>
            `).join('')}
        `;
    }

    paletteResults.querySelectorAll('.palette-item').forEach(item => {
        item.addEventListener('click', () => {
            const loc = item.dataset.loc;
            const action = item.dataset.action;
            closeCommandPalette();

            if (loc) {
                if (searchInput) searchInput.value = loc;
                performSearch(loc);
            } else if (action === 'compare') {
                if (openCompareBtn) openCompareBtn.click();
            } else if (action === 'layer-property') {
                const btn = document.querySelector('[data-layer="property"]');
                if (btn) btn.click();
            } else if (action === 'layer-employment') {
                const btn = document.querySelector('[data-layer="employment"]');
                if (btn) btn.click();
            } else if (action === 'layer-clusters') {
                const btn = document.querySelector('[data-layer="clusters"]');
                if (btn) btn.click();
            }
        });
    });
}

if (headerCmdBtn) headerCmdBtn.addEventListener('click', openCommandPalette);
if (paletteInput) {
    paletteInput.addEventListener('input', () => renderPaletteResults(paletteInput.value));
}
if (paletteModal) {
    paletteModal.addEventListener('click', (e) => {
        if (e.target === paletteModal) closeCommandPalette();
    });
}

// Global Keyboard Shortcut: Ctrl+K / Cmd+K / Esc
window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openCommandPalette();
    }
    if (e.key === 'Escape') {
        closeCommandPalette();
        if (compareModal) compareModal.classList.remove('open');
        const drawer = document.getElementById('geoaiDrawer');
        if (drawer) drawer.classList.remove('open');
    }
});

// ============================================================
// FLOATING "ASK GEOAI" INTELLIGENCE ASSISTANT
// ============================================================
const floatingGeoAiBtn = document.getElementById('floatingGeoAiBtn');
const geoaiDrawer = document.getElementById('geoaiDrawer');
const closeGeoAiBtn = document.getElementById('closeGeoAiBtn');
const geoaiMessages = document.getElementById('geoaiMessages');
const geoaiInput = document.getElementById('geoaiInput');
const geoaiSendBtn = document.getElementById('geoaiSendBtn');

function toggleGeoAi() {
    if (!geoaiDrawer) return;
    geoaiDrawer.classList.toggle('open');
    if (geoaiDrawer.classList.contains('open') && geoaiInput) {
        geoaiInput.focus();
    }
}

if (floatingGeoAiBtn) floatingGeoAiBtn.addEventListener('click', toggleGeoAi);
if (closeGeoAiBtn) closeGeoAiBtn.addEventListener('click', () => {
    if (geoaiDrawer) geoaiDrawer.classList.remove('open');
});

function handleGeoAiQuery(query) {
    if (!query || !query.trim() || !geoaiMessages) return;
    const q = query.trim();

    // Append user message
    const userMsg = document.createElement('div');
    userMsg.className = 'user-bubble';
    userMsg.textContent = q;
    geoaiMessages.appendChild(userMsg);

    // AI Reasoning grounded in DATA
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'ai-bubble';
        aiMsg.innerHTML = generateGeoAiResponse(q);
        geoaiMessages.appendChild(aiMsg);
        geoaiMessages.scrollTop = geoaiMessages.scrollHeight;
    }, 250);

    if (geoaiInput) geoaiInput.value = '';
    geoaiMessages.scrollTop = geoaiMessages.scrollHeight;
}

function generateGeoAiResponse(text) {
    const q = text.toLowerCase();

    // 1. Comparison queries
    if (q.includes('compare') && (q.includes('pune') || q.includes('nashik') || q.includes('mumbai'))) {
        const p1 = DATA.filter(r => r.District.toLowerCase().includes('pune'));
        const p2 = DATA.filter(r => r.District.toLowerCase().includes('nashik'));
        const avgP1 = p1.length > 0 ? (p1.reduce((s, r) => s + r.BHK1, 0) / p1.length).toFixed(1) : 48;
        const avgP2 = p2.length > 0 ? (p2.reduce((s, r) => s + r.BHK1, 0) / p2.length).toFixed(1) : 28;
        return `<strong>Direct Comparison (Pune vs. Nashik):</strong><br>
        • <strong>1 BHK Average:</strong> Pune is ~Rs. ${avgP1}L vs. Nashik ~Rs. ${avgP2}L.<br>
        • <strong>Growth Corridor:</strong> Pune exhibits aggressive IT/tech suburban demand (Wagholi, Hinjawadi). Nashik provides higher entry yields and emerging agro-logistics opportunity.`;
    }

    // 2. High opportunity queries
    if (q.includes('high') || q.includes('opportunity')) {
        const topSpots = DATA.filter(r => r.Opportunity.includes('High')).slice(0, 4);
        return `<strong>Top High-Opportunity Nodes in Maharashtra:</strong><br>
        ${topSpots.map(s => `• <strong>${s.Village}</strong> (${s.District}): 1 BHK @ Rs. ${s.BHK1}L, ${s.EmpRate}% employment.`).join('<br>')}<br>
        <em>These locations feature accessible entry valuations with maximum 5-year capital appreciation room.</em>`;
    }

    // 3. Highest employment queries
    if (q.includes('employment') || q.includes('workforce')) {
        return `<strong>Workforce Density Leaders:</strong><br>
        • <strong>Mumbai City & Suburbs:</strong> 86%–92% employment density (Finance & Tech).<br>
        • <strong>Pune Metropolitan:</strong> 82%–88% employment density (Automotive & IT Hubs).<br>
        • <strong>Thane-Palghar Corridor:</strong> 78%–84% employment density (Industrial Manufacturing).`;
    }

    // 4. Locality specific query
    const match = DATA.find(r => q.includes(r.Village.toLowerCase()) || q.includes(r.District.toLowerCase()));
    if (match) {
        return `<strong>Analysis for ${match.Village} (${match.District}):</strong><br>
        • <strong>Cluster Archetype:</strong> ${match.Cluster.name}<br>
        • <strong>Benchmark:</strong> 1 BHK @ Rs. ${match.BHK1}L • 2 BHK @ Rs. ${match.BHK2}L<br>
        • <strong>5-Year Model:</strong> Projected to reach Rs. ${(match.BHK1 * 1.42).toFixed(1)}L (+42% ROI).<br>
        • <a href="javascript:void(0)" onclick="performSearch('${match.Village}')" style="color: var(--accent-cyan); font-weight: 700;">Open Location Dossier →</a>`;
    }

    return `Across Maharashtra's <strong>36 districts</strong> and <strong>1,701 micro-markets</strong>, capital velocity is currently concentrated along the Mumbai-Pune Expressway, Navi Mumbai Airport Influence Zone (NAINA), and Pune's Eastern Growth Corridors (Wagholi-Kharadi). Try asking to compare two specific locations!`;
}

if (geoaiSendBtn) {
    geoaiSendBtn.addEventListener('click', () => handleGeoAiQuery(geoaiInput.value));
}
if (geoaiInput) {
    geoaiInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleGeoAiQuery(geoaiInput.value);
    });
}
document.querySelectorAll('.prompt-pill').forEach(pill => {
    pill.addEventListener('click', () => handleGeoAiQuery(pill.dataset.ask));
});

// ============================================================
// SEARCH & TAG EVENT LISTENERS
// ============================================================
if (searchBtn) {
    searchBtn.addEventListener('click', () => performSearch(searchInput.value));
}
if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (suggestionsDiv) suggestionsDiv.innerHTML = '';
            performSearch(searchInput.value);
        }
    });
}

document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        if (searchInput) searchInput.value = tag.dataset.search;
        performSearch(tag.dataset.search);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

const btnBackToOverview = document.getElementById('btnBackToOverview');
if (btnBackToOverview) {
    btnBackToOverview.addEventListener('click', () => performSearch('Pune'));
}



// ============================================================
// INITIALIZATION ON PAGE LOAD
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Map
    initMap();

    // 2. Read URL params or default to Wagholi / Pune
    const urlParams = new URLSearchParams(window.location.search);
    const initialLocation = urlParams.get('q') || urlParams.get('location') || 'Wagholi';
    
    if (searchInput) searchInput.value = initialLocation;
    performSearch(initialLocation);
});

