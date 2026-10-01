# Comprehensive, authentic Maharashtra Geographic Hierarchy covering all 36 Districts,
# key Talukas, and prominent Villages / Localities.

MAHARASHTRA_GEO = {
    # -------------------------------------------------------------
    # KONKAN DIVISION (High Economic Activity / Metro & Coastal)
    # -------------------------------------------------------------
    "Mumbai City": {
        "tier": 1, "price_range": (75.0, 180.0), "emp_range": (78.0, 94.0),
        "talukas": {
            "Colaba": ["Nariman Point", "Cuffe Parade", "Fort", "Churchgate", "Navy Nagar", "Marine Lines"],
            "Dadar": ["Dadar West", "Dadar East", "Prabhadevi", "Parel", "Worli", "Lower Parel", "Sewa"],
            "Byculla": ["Byculla East", "Mazgaon", "Nagpada", "Agripada", "Chinchpokli"],
            "Malabar Hill": ["Walkeshwar", "Kemps Corner", "Breach Candy", "Tardeo", "Girgaon", "Chowpatty"]
        }
    },
    "Mumbai Suburban": {
        "tier": 1, "price_range": (55.0, 140.0), "emp_range": (74.0, 92.0),
        "talukas": {
            "Andheri": ["Versova", "Marol", "Oshiwara", "Sahar", "Chakala", "Lokhandwala", "Seven Bungalows", "J.B. Nagar"],
            "Bandra": ["Bandra West", "Khar West", "Santacruz West", "Vile Parle East", "Pali Hill", "BKC", "Bandra East"],
            "Borivali": ["Borivali West", "Gorai", "Dahisar East", "Dahisar West", "Magathane", "Eksar", "Shimpoli", "Kandivali West", "Charkop"],
            "Kurla": ["Kurla West", "Ghatkopar East", "Ghatkopar West", "Powai", "Vidyavihar", "Saki Naka", "Chunabhatti", "Asalpha"],
            "Malad": ["Malad West", "Malad East", "Mindspace", "Orlem", "Dindoshi", "Marve", "Madh"],
            "Mulund": ["Mulund West", "Mulund East", "Bhandup West", "Nahur", "Kanjurmarg East", "Vikhroli West"]
        }
    },
    "Thane": {
        "tier": 2, "price_range": (30.0, 70.0), "emp_range": (68.0, 88.0),
        "talukas": {
            "Thane City": ["Ghodbunder Road", "Majiwada", "Naupada", "Wagle Estate", "Kolshet", "Vartak Nagar", "Panchpakhadi", "Hiranandani Estate", "Kasarvadavali"],
            "Kalyan": ["Kalyan West", "Kalyan East", "Khadakpada", "Chikanghar", "Gandhar Nagar", "Tisgaon", "Kolsewadi"],
            "Dombivli": ["Dombivli East", "Dombivli West", "Lodha Palava", "MIDC Dombivli", "Manpada", "Kopar"],
            "Bhiwandi": ["Bhiwandi Town", "Padgha", "Anjur Phata", "Dapode", "Sonale", "Kasheli", "Khoni", "Rahnal"],
            "Ulhasnagar": ["Camp 1", "Camp 2", "Camp 3", "Camp 4", "Camp 5", "Shahad", "Vithalwadi"],
            "Ambernath": ["Ambernath East", "Ambernath West", "Morivali MIDC", "Chikloli", "Kansai"],
            "Badlapur": ["Badlapur East", "Badlapur West", "Katrap", "Kulgaon", "Manjarli", "Shirgaon"],
            "Murbad": ["Murbad Town", "Tokawade", "Shenwa", "Dehrang", "Malshej", "Kishor", "Saralgaon"],
            "Shahapur": ["Shahapur Town", "Asangaon", "Atgaon", "Khardi", "Vashind", "Dolkhamb", "Kinhavali"]
        }
    },
    "Palghar": {
        "tier": 2, "price_range": (20.0, 52.0), "emp_range": (62.0, 82.0),
        "talukas": {
            "Palghar": ["Palghar Station", "Boisar MIDC", "Tarapur", "Kelve Road", "Saphale", "Manor", "Shirgaon", "Alyali"],
            "Vasai": ["Vasai West", "Vasai East", "Virar West", "Virar East", "Nalasopara West", "Nallasopara East", "Arnala", "Evershine City"],
            "Dahanu": ["Dahanu Town", "Gholvad", "Bordi", "Kasa", "Chinchani", "Vangaon"],
            "Jawhar": ["Jawhar Town", "Alyani", "Dabhosa", "Pathardi", "Khadkhad"],
            "Wada": ["Wada Town", "Kudus", "Gandhre", "Khandpe", "Posheri"],
            "Vikramgad": ["Vikramgad Town", "Onde", "Sajan", "Malwada", "Deohari"],
            "Talasari": ["Talasari Town", "Sutrakar", "Zari", "Kochai", "Sambha"],
            "Mokhada": ["Mokhada Town", "Khodala", "Ase", "Poshera", "Morhanda"]
        }
    },
    "Raigad": {
        "tier": 2, "price_range": (18.0, 48.0), "emp_range": (64.0, 84.0),
        "talukas": {
            "Panvel": ["Panvel City", "Khandeshwar", "Kamothe", "Kharghar", "Kalamboli", "New Panvel", "Taloja MIDC", "Karanjade"],
            "Alibag": ["Alibag Town", "Varsoli", "Nagaon", "Akshi", "Kihim", "Mandwa", "Thal", "Revdanda"],
            "Karjat": ["Karjat Town", "Neral", "Matheran", "Shelu", "Vangani", "Dahiwali", "Kashele"],
            "Khalapur": ["Khopoli", "Rasayani", "Lodhavali", "Chowk", "Madap", "Mohopada"],
            "Pen": ["Pen Town", "Dharamtar", "Kamarly", "Vadkhal", "Antora", "Dadhe"],
            "Uran": ["Uran Town", "JNPT Port Area", "Mora", "Chanje", "Dronagiri", "Jasai"],
            "Mahad": ["Mahad Town", "Birwadi MIDC", "Poladpur Nearby", "Nate", "Dasgaon", "Palu"],
            "Roha": ["Roha Town", "Dhatav MIDC", "Kolad", "Nagothane", "Kille"],
            "Mangaon": ["Mangaon Town", "Lonere", "Indapur", "Nizampur", "Goregaon Raigad"],
            "Shrivardhan": ["Shrivardhan Town", "Harihareshwar", "Diveagar", "Mhasla", "Walavati"],
            "Murud": ["Murud Town", "Janjira", "Kashid", "Barshiv", "Nandgaon"]
        }
    },
    "Ratnagiri": {
        "tier": 3, "price_range": (10.0, 26.0), "emp_range": (58.0, 78.0),
        "talukas": {
            "Ratnagiri": ["Ratnagiri Town", "Mirjole", "Pawas", "Golap", "Kotawde", "Nachane", "Kuwarbav", "Shirgaon"],
            "Chiplun": ["Chiplun Town", "Kherdi MIDC", "Bahadursheikh", "Guhagar Road", "Dhamandevi", "Sawarde"],
            "Khed": ["Khed Town", "Lote Parshuram MIDC", "Bhirwand", "Shivaji Nagar", "Alore"],
            "Dapoli": ["Dapoli Town", "Anjarle", "Murud Dapoli", "Ladghar", "Harnai", "Kelshi"],
            "Guhagar": ["Guhagar Town", "Velneshwar", "Hedvi", "Abloli", "Asgoli"],
            "Lanja": ["Lanja Town", "Veravali", "Kuveshi", "Bhadkhamba", "Korle"],
            "Rajapur": ["Rajapur Town", "Sakharpa", "Purnagad", "Vijaydurg", "Adivare", "Jaitapur"],
            "Sangameshwar": ["Sangameshwar Town", "Devrukh", "Makhjan", "Dingni", "Kasba"],
            "Mandangad": ["Mandangad Town", "Bankot", "Veshvi", "Palshet", "Mhapral"]
        }
    },
    "Sindhudurg": {
        "tier": 3, "price_range": (8.0, 22.0), "emp_range": (56.0, 76.0),
        "talukas": {
            "Kudal": ["Kudal Town", "Oros (HQ)", "Pinguli", "Nerur", "Zarap", "Bambarde"],
            "Sawantwadi": ["Sawantwadi Town", "Amboli", "Banda", "Majgaon", "Danoli", "Charathe"],
            "Kankavli": ["Kankavli Town", "Janavali", "Phondaghat", "Halval", "Osargaon"],
            "Malvan": ["Malvan Town", "Tarkarli", "Dandi", "Achara", "Kunkeshwar Nearby", "Chivla"],
            "Vengurla": ["Vengurla Town", "Shiroda", "Redi", "Ubhadanda", "Mochemad"],
            "Devgad": ["Devgad Town", "Jamsande", "Mithbav", "Shirgaon", "Tirlot"],
            "Vaibhavwadi": ["Vaibhavwadi Town", "Bhuibavda", "Kharepatan", "Tirwade"],
            "Dodamarg": ["Dodamarg Town", "Bhedshi", "Kudase", "Sasoli", "Kasarla"]
        }
    },

    # -------------------------------------------------------------
    # PUNE DIVISION (Western Maharashtra / Industrial & Agri Hub)
    # -------------------------------------------------------------
    "Pune": {
        "tier": 1, "price_range": (38.0, 85.0), "emp_range": (72.0, 92.0),
        "talukas": {
            "Pune City": ["Kothrud", "Shivajinagar", "Deccan Gymkhana", "Koregaon Park", "Swargate", "Camp", "Kalyani Nagar", "Erandwane"],
            "Haveli": ["Hinjawadi", "Wagholi", "Hadapsar", "Undri", "Manjri", "Khadakwasla", "Dhanori", "Fursungi", "Kharadi"],
            "Pimpri-Chinchwad": ["Pimpri", "Chinchwad", "Akurdi", "Nigdi", "Bhosari MIDC", "Wakad", "Pimple Saudagar", "Ravet", "Moshi", "Chakan"],
            "Mulshi": ["Pirangut", "Paud", "Lavale", "Marunji", "Hinjawadi Phase 3", "Bhugaon", "Sus", "Ghotawade"],
            "Baramati": ["Baramati City", "MIDC Baramati", "Supa", "Malad BK", "Songaon", "Tandulwadi", "Jalochi", "Karanje"],
            "Shirur": ["Shirur Town", "Ranjangaon MIDC", "Sanaswadi", "Shikrapur", "Talegaon Dhamdhere", "Koregaon Bhima"],
            "Daund": ["Daund Town", "Kurkumbh MIDC", "Patas", "Kashti", "Kedgaon", "Yavat"],
            "Maval": ["Talegaon Dabhade", "Lonavala", "Kamshet", "Vadgaon Maval", "Dehu Road", "Somatane"],
            "Bhor": ["Bhor Town", "Nasrapur", "Kikvi", "Rajgad", "Ambavade", "Kapurhol"],
            "Junnar": ["Junnar Town", "Narayangaon", "Otur", "Alephata", "Ozar", "Lenyadri"],
            "Ambegaon": ["Manchar", "Ghodegaon", "Kalamb", "Avsari", "Shinoli"],
            "Khed (Rajgurunagar)": ["Rajgurunagar", "Chakan MIDC", "Alandi", "Mahalunge", "Khed Town"],
            "Purandar": ["Saswad", "Jejuri", "Belsar", "Walhe", "Diwale"],
            "Velhe": ["Velhe Town", "Torna Base", "Pasali", "Kelwad", "Bajarwadi"]
        }
    },
    "Satara": {
        "tier": 3, "price_range": (12.0, 28.0), "emp_range": (62.0, 82.0),
        "talukas": {
            "Satara": ["Satara City", "Godoli", "Sadar Bazaar", "Koregaon Road", "MIDC Satara", "Shendre", "Degaon"],
            "Karad": ["Karad Town", "Vidyanagar", "Ogalewadi", "Umbraj", "Masur", "Saidapur", "Malkapur Karad"],
            "Wai": ["Wai Town", "Bhuinj", "Pachwad", "Pasarni", "Dhom", "Songir"],
            "Mahabaleshwar": ["Mahabaleshwar Town", "Panchgani", "Pratapgad", "Kshetra Mahabaleshwar", "Metgutad"],
            "Phaltan": ["Phaltan Town", "MIDC Phaltan", "Taradgaon", "Barad", "Lonand", "Sakharwadi"],
            "Koregaon": ["Koregaon Town", "Rahimatpur", "Kumthe", "Wagholi Satara", "Kinhai"],
            "Patan": ["Patan Town", "Koynanagar", "Dhebewadi", "Malharpeth", "Tarale"],
            "Khatav": ["Vaduj", "Aundh", "Mayani", "Pusegaon", "Khatav Town"],
            "Man": ["Dahiwadi", "Mhaswad", "Pangri", "Shingnapur", "Kukudwad"],
            "Jaoli": ["Medha", "Kudal Satara", "Bamnoli", "Kelghar"],
            "Khandala": ["Khandala Town", "Shirwal MIDC", "Lonand Road", "Palashi"]
        }
    },
    "Kolhapur": {
        "tier": 2, "price_range": (18.0, 36.0), "emp_range": (66.0, 86.0),
        "talukas": {
            "Karvir": ["Rajarampuri", "Shahupuri", "Tarabai Park", "Nagala Park", "Ujalaiwadi", "Kalamba", "Morewadi", "Gandhinagar"],
            "Hatkanangale": ["Ichalkaranji Textile City", "Hatkanangale Town", "Shiroli MIDC", "Hupari Silver Hub", "Pattankodoli", "Rukadi"],
            "Shirol": ["Jaysingpur", "Shirol Town", "Kurundwad", "Nandani", "Alas", "Ghosarwad"],
            "Kagal": ["Kagal Town", "Five Star MIDC Kagal", "Sangaon", "Murgud", "Kapashi", "Vhalgad"],
            "Gadhinglaj": ["Gadhinglaj City", "Halditavade", "Nesari", "Bhadgaon", "Mahagaon"],
            "Panhala": ["Panhala Fort Area", "Kodoli", "Warnanagar", "Kotoli", "Kakhe"],
            "Radhanagari": ["Radhanagari Town", "Tarale", "Kasarwadi", "Rashivade", "Rautwadi"],
            "Shahuwadi": ["Malkapur Kolhapur", "Bambavade", "Amba Ghat", "Yelane"],
            "Bhudargad": ["Gargoti", "Kadgaon", "Madilage", "Mhasrang"],
            "Ajara": ["Ajara Town", "Uttur", "Polgaon", "Harpwade"],
            "Chandgad": ["Chandgad Town", "Shinoli Chandgad", "Kowad", "Adkur"],
            "Gaganbawda": ["Bawda Town", "Asalaj", "Kodiwale", "Salvan"]
        }
    },
    "Sangli": {
        "tier": 3, "price_range": (12.0, 27.0), "emp_range": (63.0, 83.0),
        "talukas": {
            "Miraj": ["Sangli City", "Miraj Medical Hub", "Kupwad MIDC", "Vishrambag", "Wanlesswadi", "Bramhanpuri"],
            "Walwa": ["Islampur Town", "Urun Islampur", "Ashta", "Peth Vadgaon Nearby", "Boran", "Kasegaon"],
            "Tasgaon": ["Tasgaon Grape City", "Savalaj", "Manerajuri", "Visapur", "Yelavi"],
            "Khanapur": ["Vita Town", "Lengre", "Bhalwani", "Gharand", "Pare"],
            "Shirala": ["Shirala Town", "Kokrud", "Mangle", "Wakurde", "Chande"],
            "Kavathe Mahankal": ["Kavathe Mahankal Town", "Dhalgaon", "Aagard", "Karkamb", "Kuchi"],
            "Jath": ["Jath Town", "Sankh", "Umarani", "Daribadachi", "Shegaon Jath"],
            "Atpadi": ["Atpadi Town", "Dighanchi", "Madgule", "Karkhel"],
            "Palus": ["Palus Town", "Bhilawadi Milk Hub", "Kundal", "Sawantpur", "Dudhondi"],
            "Kadegaon": ["Kadegaon Town", "Chinchani", "Sonsal", "Kotij", "Amrapur"]
        }
    },
    "Solapur": {
        "tier": 3, "price_range": (12.0, 28.0), "emp_range": (62.0, 82.0),
        "talukas": {
            "Solapur North": ["Solapur Textile City", "Jule Solapur", "Bhavani Peth", "Ashok Nagar", "Kegaon", "MIDC Chincholi"],
            "Solapur South": ["Hotgi Road", "Kumbhari", "Valsang", "Mandrup", "Boramani"],
            "Pandharpur": ["Pandharpur Holy City", "Korti", "Tungat", "Bhalwani", "Kasegaon Solapur", "Gopalpur"],
            "Barshi": ["Barshi Town", "Vairag", "Gaudgaon", "Pangri", "Bhatambare", "Dahitane"],
            "Mohol": ["Mohol Town", "Kurul", "Kamati", "Angar", "Penur"],
            "Akkalkot": ["Akkalkot Town", "Maindargi", "Dudhani", "Wagdari", "Chapalgaon"],
            "Karmala": ["Karmala Town", "Jeur", "Kem", "Sade", "Korti Karmala"],
            "Madha": ["Madha Town", "Kurduvadi Railway Hub", "Modnimb", "Ranjani", "Bendsheel"],
            "Malshiras": ["Akluj Sugar Town", "Natepute", "Malshiras Town", "Piliv", "Velapur"],
            "Sangola": ["Sangola Town", "Mahud", "Javla", "Nazare", "Waki"],
            "Mangalvedhe": ["Mangalvedhe Town", "Marwade", "Borale", "Kacharewadi", "Huljanti"]
        }
    },

    # -------------------------------------------------------------
    # NASHIK DIVISION (North Maharashtra / Industrial, Grape & Agro)
    # -------------------------------------------------------------
    "Nashik": {
        "tier": 2, "price_range": (18.0, 42.0), "emp_range": (66.0, 86.0),
        "talukas": {
            "Nashik City": ["Panchavati", "Satpur MIDC", "Ambad MIDC", "Indira Nagar", "CIDCO Nashik", "Gangapur Road", "College Road", "Pathardi Phata", "Govind Nagar"],
            "Deolali": ["Deolali Camp", "Bhagur", "Lam Road", "Rest Camp", "Sanjivani"],
            "Malegaon": ["Malegaon Textile City", "Soygaon", "Dyane", "Ravalgaon", "Zodge", "Camp Malegaon", "Manmad Road"],
            "Sinnar": ["Sinnar Town", "Musgaon MIDC", "Malegaon Sinnar", "Dugaon", "Vavi", "Pangri Sinnar"],
            "Igatpuri": ["Igatpuri Hill Station", "Ghoti", "Talegaon Igatpuri", "Kasara Ghat Area", "Bhavali", "Vaitarna"],
            "Niphad": ["Pimpalgaon Baswant Onion Hub", "Niphad Town", "Lasalgaon Asia's Largest Onion Market", "Ozar HAL Aircraft Hub", "Ranwad", "Kundewadi"],
            "Yeola": ["Yeola Paithani Saree Hub", "Andarsul", "Nagarsul", "Mukhed Yeola", "Patar"],
            "Dindori": ["Dindori Wine Capital", "Vani Saptashrungi Foothills", "Mohadi Dindori", "Khedgaon", "Nanashi"],
            "Trimbakeshwar": ["Trimbak Holy Town", "Pahine", "Torangan", "Harsul", "Amboli Nashik"],
            "Kalwan": ["Kalwan Town", "Abhona", "Bhadane", "Kanashi"],
            "Baglan (Satana)": ["Satana Town", "Taharabad", "Brahmangaon", "Virgaon", "Nampur"],
            "Chandwad": ["Chandwad Town", "Vadbare", "Rahud", "Dahiwad"],
            "Nandgaon": ["Nandgaon Town", "Manmad Railway Junction", "Naydongri", "Tarur"],
            "Surgana": ["Surgana Town", "Borpada", "Umbergavhan", "Alangun"],
            "Peint": ["Peint Town", "Harsul Road", "Karanjali", "Kumbhale"]
        }
    },
    "Jalgaon": {
        "tier": 3, "price_range": (10.0, 24.0), "emp_range": (60.0, 80.0),
        "talukas": {
            "Jalgaon": ["Jalgaon City Gold Hub", "MIDC Jalgaon", "Pimprala", "Shirsoli", "Asoda", "Bhadli", "Khedi", "Mehrun"],
            "Bhusawal": ["Bhusawal Railway Division", "Sakegaon", "Deepnagar Power Hub", "Kandari", "Kurhe", "Fekari", "Varangaon"],
            "Chalisgaon": ["Chalisgaon City", "Pachora Road", "Bhadgaon Road", "Patna Devi", "Mehsun", "Wadgaon Chalisgaon"],
            "Amalner": ["Amalner Education Hub", "Galwade", "Shirud", "Patonda", "Dahiwad Amalner", "Marwad"],
            "Pachora": ["Pachora Town", "Nandra", "Bhadgaon Nearby", "Shendurni", "Varkhedi"],
            "Chopda": ["Chopda Town", "Adavad", "Hated", "Machla", "Vadhoda"],
            "Raver": ["Raver Banana Capital", "Nhavi", "Khanora", "Pal Agro Hub", "Waghoda", "Rasulpur"],
            "Savda": ["Savda Banana Trading Town", "Faizpur Municipal Town", "Khiroda Education Hub", "Kumbharkheda"],
            "Yawal": ["Yawal Town", "Faizpur", "Bhalod", "Korpawali", "Kingaon"],
            "Jamner": ["Jamner Town", "Neri", "Shendurni Road", "Wakod", "Pahur"],
            "Erandol": ["Erandol Town", "Padmalaya Ganpati", "Kasoda", "Utran", "Ringangaon"],
            "Parola": ["Parola Fort Town", "Tamdhare", "Bahadarpur", "Mhasve"],
            "Dharangaon": ["Dharangaon Town", "Sonvad", "Rotvad", "Pimpri Dharangaon"],
            "Bhadgaon": ["Bhadgaon Town", "Gudhe", "Khedgaon Bhadgaon", "Ambadgaon"],
            "Muktainagar": ["Muktainagar Town", "Kothali", "Anturli", "Kurha Kakoda"],
            "Bodwad": ["Bodwad Town", "Varangaon Road", "Nadgaon", "Salbardi"]
        }
    },
    "Ahmednagar": {
        "tier": 3, "price_range": (12.0, 26.0), "emp_range": (62.0, 82.0),
        "talukas": {
            "Nagar": ["Ahmednagar City", "Savedi", "Kedgaon", "Bhingar Cantonment", "MIDC Nagapur", "Vilad Ghat", "Burudgaon"],
            "Rahata": ["Shirdi Holy Town", "Rahata Town", "Sakori", "Pimplas", "Loni Education Hub", "Babhaleshwar"],
            "Shrirampur": ["Shrirampur Sugar Town", "Belapur", "Padhegaon", "Taklibhan", "Gondegaon"],
            "Sangamner": ["Sangamner City", "Amrutnagar", "Gunjalwadi", "Talegaon Sangamner", "Ashwi"],
            "Kopargaon": ["Kopargaon Town", "Sanvatsar", "Kolpewadi", "Dhamori", "Puntamba"],
            "Newasa": ["Newasa Sant Dnyaneshwar Shrine", "Kukana", "Sonai", "Bhenda", "Vadhana"],
            "Shevgaon": ["Shevgaon Town", "Bodhegaon", "Miri", "Vandoor", "Samangaon"],
            "Pathardi": ["Pathardi Town", "Kanhoba Foothills", "Tisgaon", "Karanji Ghat", "Manikdoh"],
            "Parner": ["Parner Town", "Ralegan Siddhi Model Village", "Nighoj Potholes", "Supa MIDC", "Alkuti"],
            "Shrigonda": ["Shrigonda Town", "Belwandi", "Kashti Shrigonda", "Pedgaon", "Kolgaon"],
            "Karjat Ahmednagar": ["Karjat Town", "Rashin", "Mirajgaon", "Kharda Fort"],
            "Jamkhed": ["Jamkhed Town", "Khanna", "Arvi Jamkhed", "Nanaj"],
            "Akole": ["Akole Town", "Bhandardara Dam Resort", "Rajur", "Kotul", "Samrad Sandhan Valley"],
            "Rahuri": ["Rahuri MPKV Agriculture University", "Vambori", "Deolali Pravara", "Taharabad"]
        }
    },
    "Dhule": {
        "tier": 3, "price_range": (8.0, 18.0), "emp_range": (58.0, 78.0),
        "talukas": {
            "Dhule": ["Dhule City", "Deopur", "Mohadi", "Awadhan MIDC", "Songir", "Laling Fort Area", "Kusumba"],
            "Shirpur": ["Shirpur Model Education City", "Boradi", "Thalner", "Vikhran", "Singave"],
            "Sindkheda": ["Sindkheda Town", "Dondaicha Commercial Hub", "Nardana MIDC", "Chimthane", "Betawad"],
            "Sakri": ["Sakri Town", "Dahivel Windmill Hub", "Pimpalner", "Nizampur Dhule", "Bhadne"]
        }
    },
    "Nandurbar": {
        "tier": 4, "price_range": (4.0, 12.0), "emp_range": (48.0, 68.0),
        "talukas": {
            "Nandurbar": ["Nandurbar City", "Karanche", "Patan Nandurbar", "Wadali", "Hol"],
            "Shahada": ["Shahada City", "Prakasha Dakshin Kashi", "Mandane", "Khetia Road", "Bramhanpuri"],
            "Navapur": ["Navapur Border Town", "Chinchpada", "Khandbara", "Visarwadi"],
            "Taloda": ["Taloda Town", "Borad", "Somaval", "Pratappur"],
            "Akkalkuwa": ["Akkalkuwa Education Hub", "Molgi", "Khapar", "Sorbardi"],
            "Dhadgaon (Akrani)": ["Dhadgaon Town", "Toranmal Hill Station", "Roshmal", "Chandsaili"]
        }
    },

    # -------------------------------------------------------------
    # CHHATRAPATI SAMBHAJINAGAR DIVISION (Marathwada Hub)
    # -------------------------------------------------------------
    "Chhatrapati Sambhajinagar": {
        "tier": 2, "price_range": (18.0, 38.0), "emp_range": (64.0, 84.0),
        "talukas": {
            "Aurangabad City": ["CIDCO", "Waluj Industrial MIDC", "Chikalthana MIDC", "Shendra DMIC Smart City", "Garkheda", "Satara Parisar", "Beed Bypass", "Cantonment"],
            "Khuldabad": ["Khuldabad Town", "Ellora Caves (Verul)", "Bhadra Maruti", "Sulibhanjan", "Devgiri Fort Area"],
            "Paithan": ["Paithan Historic City", "Jayakwadi Dam Area", "Bidkin AURIC Smart City", "Pimpalwadi", "Balegaon"],
            "Gangapur": ["Gangapur Town", "Lasur Station", "Waluj Rural", "Shilapur", "Manjari Gangapur"],
            "Vaijapur": ["Vaijapur Town", "Rotegaon", "Shiur", "Loni Vaijapur", "Khandala Vaijapur"],
            "Kannad": ["Kannad Town", "Ghatnandra", "Pishor", "Chincholi Limbaji"],
            "Sillod": ["Sillod Town", "Ajanta Caves Base", "Golegaon", "Bharadi", "Palod"],
            "Phulambri": ["Phulambri Town", "Vadhod", "Aland", "Palgavhan"],
            "Soegaon": ["Soegaon Town", "Fardapur", "Gondegaon", "Jarandi"]
        }
    },
    "Jalna": {
        "tier": 3, "price_range": (8.0, 18.0), "emp_range": (58.0, 78.0),
        "talukas": {
            "Jalna": ["Jalna Steel City", "MIDC Phase 1-3", "Old Jalna", "Devalgaon Road", "Ambad Road", "Sindhi Market"],
            "Ambad": ["Ambad Town", "Matsyodari Devi Temple Area", "Dhakephal", "Wadigodri", "Shahgad"],
            "Bhokardan": ["Bhokardan Town", "Hasanabad", "Sipora", "Anwa", "Rajur Ganpati"],
            "Partur": ["Partur Town", "Watur", "Ashti Jalna", "Vardari"],
            "Ghansawangi": ["Ghansawangi Town", "Kumbhar Pimpalgaon", "Ranjani Jalna", "Tirthpuri"],
            "Jafrabad": ["Jafrabad Town", "Mhasla", "Tembruni", "Varud"],
            "Badnapur": ["Badnapur Town", "Somthana", "Roshangaon", "Dabhadi"],
            "Mantha": ["Mantha Town", "Talni", "Dheknan", "Pangri Mantha"]
        }
    },
    "Parbhani": {
        "tier": 3, "price_range": (7.0, 17.0), "emp_range": (56.0, 76.0),
        "talukas": {
            "Parbhani": ["Parbhani City", "Vasantrao Naik Agri University Area", "Subhash Road", "MIDC Parbhani", "Jintur Road", "Pedgaon"],
            "Gangakhed": ["Gangakhed Holy City", "Makhani", "Dharasur", "Ranisawargaon"],
            "Jintur": ["Jintur Town", "Nemgiri Jain Heritage", "Yeldari Dam Area", "Bori", "Charthana"],
            "Selu": ["Selu Town", "Walur", "Kupta", "Rawalgaon Parbhani"],
            "Pathri": ["Pathri Sai Janmasthan", "Hadgaon Pathri", "Kansur", "Renapur Pathri"],
            "Purna": ["Purna Railway Junction", "Tadkalas", "Chudawa", "Kanhegaon"],
            "Manwath": ["Manwath Town", "Manwath Road", "Kekat Umra", "Dethan"],
            "Sonpeth": ["Sonpeth Town", "Shelgaon", "Aavad", "Wadgaon Sonpeth"],
            "Palam": ["Palam Town", "Banwas", "Pethshivani", "Sayala"]
        }
    },
    "Hingoli": {
        "tier": 4, "price_range": (5.0, 13.0), "emp_range": (52.0, 72.0),
        "talukas": {
            "Hingoli": ["Hingoli City", "Paltan", "MIDC Hingoli", "Malharni", "Khandala Hingoli"],
            "Basmath": ["Basmathnagar", "Kurunda", "Arale", "Hatta", "Hayeetnagar"],
            "Kalamnuri": ["Kalamnuri Town", "Akhada Balapur", "Waranga Phata", "Shewala"],
            "Aundha Nagnath": ["Aundha Nagnath 8th Jyotirlinga", "Shiroli Aundha", "Pardi", "Siddheshwar Dam"],
            "Sengaon": ["Sengaon Town", "Goregaon Hingoli", "Sakhara", "Bhogao"]
        }
    },
    "Nanded": {
        "tier": 3, "price_range": (8.0, 20.0), "emp_range": (58.0, 78.0),
        "talukas": {
            "Nanded": ["Nanded City", "Sachkhand Gurudwara Area", "CIDCO Nanded", "Vazirabad", "Asarjan", "Taroda", "MIDC Krushnoor"],
            "Deglur": ["Deglur Border Commercial Town", "Shahapur Deglur", "Hanev", "Karadkhed"],
            "Mukhed": ["Mukhed Town", "Barahali", "Mangaon Mukhed", "Rampur"],
            "Kandhar": ["Kandhar Fort Town", "Ghatangri", "Pethvadaj", "Bahadarpara"],
            "Loha": ["Loha Town", "Malkhad", "Pokharni", "Sunegaon"],
            "Biloli": ["Biloli Town", "Kajla", "Kundan", "Badur"],
            "Dharmabad": ["Dharmabad Town", "Jarur", "Karadkhed", "Samrala"],
            "Hadgaon": ["Hadgaon Town", "Tamsa", "Nivgha", "Manatha"],
            "Kinwat": ["Kinwat Forest Town", "Sahasrakund Waterfall", "Bodhad", "Islapur"],
            "Mahur": ["Mahur Renuka Devi Shrine", "Sarkhani", "Dhanora Mahur", "Vanjarwadi"],
            "Bhokar": ["Bhokar Town", "Matul", "Massa", "Palaj"],
            "Mudkhed": ["Mudkhed Railway Town", "Mugad", "Wadgaon Mudkhed", "Pimpalkhuta"]
        }
    },
    "Beed": {
        "tier": 3, "price_range": (7.0, 16.0), "emp_range": (55.0, 75.0),
        "talukas": {
            "Beed": ["Beed City", "Kankaleshwar Temple Area", "Barshi Naka", "Jalna Road", "MIDC Beed", "Pali Beed"],
            "Parli": ["Parli Vaijnath Jyotirlinga", "Thermal Power Colony", "Ghatnandur", "Dharmapuri"],
            "Ambajogai": ["Ambajogai Yogeshwari Heritage Town", "Bardapur", "Locality Kholeshwar", "Pangri"],
            "Majalgaon": ["Majalgaon Dam Area", "Kitti Adgaon", "Pathrud", "Talkhed"],
            "Georai": ["Georai Town", "Umapur", "Gevrai Rural", "Talwada"],
            "Kaij": ["Kaij Town", "Yevate", "Yusufwadgaon", "Nandurghat"],
            "Ashti": ["Ashti Town", "Kada Commercial Hub", "Karanji Road", "Doithan"],
            "Patoda": ["Patoda Town", "Sautada Waterfall", "Amalner Beed", "Rohatwadi"],
            "Shirur Kasar": ["Shirur Kasar Town", "Takarwan", "Rai Moha", "Gomalwada"],
            "Wadwani": ["Wadwani Town", "Chinchwan", "Kotharban", "Devgaon Wadwani"],
            "Dharur": ["Dharur Fort Town", "Kasarwadi", "Chinchpur", "Telgaon"]
        }
    },
    "Latur": {
        "tier": 3, "price_range": (10.0, 22.0), "emp_range": (60.0, 80.0),
        "talukas": {
            "Latur": ["Latur City Education Hub", "MIDC Latur", "Ausa Road", "Ganjgolai", "Harangul", "Murud Latur", "Khadgaon"],
            "Udgir": ["Udgir Historical City", "MIDC Udgir", "Devarjan", "Her", "Nideban", "Mogha"],
            "Ausa": ["Ausa Fort Town", "Killari Earthquake Memorial", "Matola", "Lodga", "Almala"],
            "Nilanga": ["Nilanga Town", "Aurad Shahajani", "Kasarsirshi", "Madansuri", "Ambegao"],
            "Ahmedpur": ["Ahmedpur Town", "Shirur Tajband", "Khandali", "Andhori"],
            "Chakur": ["Chakur Town", "Nalegaon", "Chapoli Dam", "Wadwal Nagnath Herbal Hill"],
            "Renapur": ["Renapur Town", "Pangaon", "Motegaon", "Khamaswadi"],
            "Deoni": ["Deoni Cattle Breed Hub", "Walandi", "Dhanegaon", "Bopala"],
            "Shirur Anantpal": ["Shirur Anantpal Town", "Sakol", "Dholegaon"],
            "Jalkot": ["Jalkot Town", "Kallur", "Dhamangaon Jalkot"]
        }
    },
    "Dharashiv (Osmanabad)": {
        "tier": 3, "price_range": (7.0, 16.0), "emp_range": (55.0, 76.0),
        "talukas": {
            "Dharashiv": ["Dharashiv City", "Caves Area", "MIDC Dharashiv", "Yedshi Ramling Sanctuary", "Ter Historic Town", "Dhoki"],
            "Tuljapur": ["Tuljapur Bhavani Mata Temple City", "Naldurg Historical Fort Town", "Ganjoti", "Mangrul", "Sindhphal"],
            "Omerga": ["Omerga Town", "Murum Commercial Hub", "Madaj", "Turori", "Yenegur"],
            "Kalamb": ["Kalamb Town", "Dhiksal", "Shiradhon", "Ekurka"],
            "Bhum": ["Bhum Town", "Walwad", "It", "Pakharud"],
            "Paranda": ["Paranda Fort Town", "Khandeshwar", "Anala", "Domgaon"],
            "Lohara": ["Lohara Town", "Mardi", "Toramba", "Sasti"],
            "Washi": ["Washi Town", "Terkhada", "Sarola", "Pardhi"]
        }
    },

    # -------------------------------------------------------------
    # AMRAVATI DIVISION (Vidarbha West / Cotton, Oranges & Forests)
    # -------------------------------------------------------------
    "Amravati": {
        "tier": 3, "price_range": (10.0, 22.0), "emp_range": (60.0, 80.0),
        "talukas": {
            "Amravati": ["Camp Amravati", "Rajapeth", "Badnera Railway Junction", "Maltekdi", "Kathora Road", "MIDC Nandgaon Peth"],
            "Achalpur": ["Achalpur Twin City", "Paratwada Commercial Hub", "Pathrot", "Rasegaon", "Sirasgaon Band"],
            "Morshi": ["Morshi Orange Hub", "Upper Wardha Dam", "Pahu", "Dhamangaon Morshi", "Lehegaon"],
            "Warud": ["Warud California of Vidarbha (Orange Export)", "Shendurjana Ghat", "Benoda", "Pusla", "Loni Warud"],
            "Chandur Bazar": ["Chandur Bazar Town", "Brahmanwada Thadi", "Shirala Amravati", "Kural"],
            "Daryapur": ["Daryapur Town", "Banosa", "Yeoda", "Kholapur Cotton Market"],
            "Anjangaon Surji": ["Anjangaon Surji Piper Betel Leaf Town", "Panattur", "Chincholi", "Khandala Surji"],
            "Nandgaon Khandeshwar": ["Nandgaon Khandeshwar Town", "Loni Gurav", "Kusumkot", "Papal"],
            "Chikhaldara": ["Chikhaldara Hill Station", "Gawilghur Fort", "Harisal", "Semadoh Melghat Tiger Reserve", "Katkumbh"],
            "Dharni": ["Dharni Melghat Town", "Bairagarh", "Kalamkhar", "Chakarda"]
        }
    },
    "Akola": {
        "tier": 3, "price_range": (8.0, 18.0), "emp_range": (58.0, 78.0),
        "talukas": {
            "Akola": ["Akola City Cotton Hub", "MIDC Phase 1-4", "Old City", "Civil Lines", "Kaulkhed", "Toshniwal Layout", "Malkapur Akola"],
            "Akot": ["Akot Cotton & Textile Town", "Narsing Maharaj Shrine", "Chohatta Bazar", "Adgaon", "Kutasa"],
            "Balapur": ["Balapur Historical Chhatri", "Paras Thermal Power Station", "Wadegaon", "Ural"],
            "Murtizapur": ["Murtizapur Railway Junction", "Mana", "Hatgaon", "Karanje Murtizapur"],
            "Patur": ["Patur Caves Town", "Alegaon", "Babulgaon Patur", "Channi"],
            "Telhara": ["Telhara Town", "Hivkhed", "Ghoda", "Adool"],
            "Barshitakli": ["Barshitakli Town", "Pinjar", "Dhaba", "Kholeshwar"]
        }
    },
    "Buldhana": {
        "tier": 3, "price_range": (7.0, 16.0), "emp_range": (57.0, 77.0),
        "talukas": {
            "Buldhana": ["Buldhana Hilltop City", "Sundarkhed", "Rajur Buldhana", "Dhad", "Motala Road"],
            "Khamgaon": ["Khamgaon Silver & Oil City", "Ghatpuri", "Jalamb Junction", "Pimpalgaon Raja", "MIDC Khamgaon"],
            "Shegaon": ["Shegaon Shri Gajanan Maharaj Shrine", "Anand Sagar", "Javala", "Nagzari", "Alasana"],
            "Malkapur": ["Malkapur Grain Market", "Dharangaon Malkapur", "Datala", "Wadoda"],
            "Chikhli": ["Chikhli Town", "Undri", "Kharbadi", "Amrapur Buldhana", "Eklara"],
            "Mehkar": ["Mehkar Town", "Dongaon", "Janefal", "Janephal", "Loni Gawali"],
            "Lonar": ["Lonar Meteor Crater World Heritage", "Sultanpur", "Titwi", "Wadhona"],
            "Deulgaon Raja": ["Deulgaon Raja Balaji Shrine", "Sindkhed Raja Jijau Janmabhoomi", "Mhasla Raja", "Bajirao Peth"],
            "Nandura": ["Nandura 105ft Hanuman Statue", "Wadner Bholji", "Nimgaon", "Chandur Biswa"],
            "Jalgaon Jamod": ["Jalgaon Jamod Town", "Khamkhed", "Asalgaon", "Pimpalgaon Kale"]
        }
    },
    "Yavatmal": {
        "tier": 3, "price_range": (6.0, 15.0), "emp_range": (55.0, 75.0),
        "talukas": {
            "Yavatmal": ["Yavatmal Cotton City", "Lohara MIDC", "Wadgaon Yavatmal", "Pimpalgaon Yavatmal", "Bori Arab"],
            "Pusad": ["Pusad Education Town", "Vasantnagar", "Kumbhari Pusad", "Shembalpimpri", "Ghaat"],
            "Wani": ["Wani Coal Capital", "Kayar", "Maregaon Road", "Mukutban Limestone Hub"],
            "Umarkhed": ["Umarkhed Town", "Dhanki", "Vidul", "Chatari"],
            "Digras": ["Digras Town", "Tuptakli", "Singad", "Dehali"],
            "Darwha": ["Darwha Town", "Bhandegaon", "Ladkhed", "Chikhali Darwha"],
            "Ghatanji": ["Ghatanji Cotton Market", "Parwa", "Sayfal", "Koli Ghatanji"],
            "Pandharkawada (Kelapur)": ["Pandharkawada Town", "Tipeshwar Wildlife Sanctuary", "Patangao", "Bori Kelapur"],
            "Ralegaon": ["Ralegaon Town", "Wadhona Ralegaon", "Jalka", "Guhikhed"],
            "Ner": ["Ner Parsopant", "Ajanti", "Malkhed", "Indrathana"]
        }
    },
    "Washim": {
        "tier": 4, "price_range": (5.0, 13.0), "emp_range": (52.0, 72.0),
        "talukas": {
            "Washim": ["Washim Holy City", "Balaji Mandir Area", "Civil Lines", "MIDC Lakhala", "Kata", "Shelgaon"],
            "Karanja Lad": ["Karanja Lad Narsimha Saraswati Shrine", "Karanja Town", "Kamargaon", "Manora Road", "Poha"],
            "Risod": ["Risod Town", "Karakhel", "Asegaon Pen", "Shirpur Jain Historical Shrine"],
            "Malegaon Washim": ["Malegaon Jahangir", "Sirpur", "Kenwad", "Medshi"],
            "Mangrulpir": ["Mangrulpir Dargah Town", "Arola", "Manabha", "Dhamni"],
            "Manora": ["Manora Town", "Waigul", "Pohradevi Banjara Shrine", "Kupta Manora"]
        }
    },

    # -------------------------------------------------------------
    # NAGPUR DIVISION (Vidarbha East / Forest, Mineral & Logistics)
    # -------------------------------------------------------------
    "Nagpur": {
        "tier": 2, "price_range": (22.0, 48.0), "emp_range": (68.0, 88.0),
        "talukas": {
            "Nagpur Urban": ["Sitabuldi", "Dharampeth", "Ramdaspeth", "Sadar", "Civil Lines Nagpur", "Wardha Road", "Manish Nagar", "Besur", "Nandanvan"],
            "Hingna": ["Hingna MIDC Industrial Zone", "MIHAN SEZ AIIMS Area", "Wadi", "Wanadongri", "Isasani", "Nildoh"],
            "Kamptee": ["Kamptee Cantonment", "Dragon Palace Temple", "Kanhan River Basin", "Kapsi Logistics Hub", "Bhilgaon", "Gumthala"],
            "Umred": ["Umred Karhandla Tiger Reserve Base", "MIDC Umred", "Sirsi", "Bhiwapur Road", "Makardhokra"],
            "Katol": ["Katol Orange Market", "MIDC Katol", "Kondhali", "Paradsinga", "Sawargaon Katol"],
            "Kalmeshwar": ["Kalmeshwar Steel & Textile MIDC", "Brahmani", "Dhapewada", "Mohpa"],
            "Saoner": ["Saoner Coal Hub", "Khapa", "Kelod", "Walni Coal Mines"],
            "Ramtek": ["Ramtek Historic Temple & Lake", "Mansar Archaeological Site", "Navegaon Khairi", "Kachurwahi"],
            "Narkhed": ["Narkhed Citrus Hub", "Mowad", "Jalalkheda", "Sawargaon Narkhed"],
            "Mouda": ["Mouda NTPC Power Plant", "Khat", "Tarsa", "Chirwa"],
            "Kuhi": ["Kuhi Town", "Mandhal", "Ambhora Sangam", "Titad"]
        }
    },
    "Wardha": {
        "tier": 3, "price_range": (8.0, 18.0), "emp_range": (58.0, 78.0),
        "talukas": {
            "Wardha": ["Wardha City", "Sevagram Ashram Gandhian Heritage", "Gopuri", "MIDC Sevagram", "Nalwadi", "Sindi Meghe", "Borgaon"],
            "Hinganghat": ["Hinganghat Cotton & Oil Hub", "MIDC Hinganghat", "Alipur", "Kandhli", "Wadner"],
            "Arvi": ["Arvi Town", "Tadgaon", "Deurwada", "Rohan"],
            "Deoli": ["Deoli Town", "Sawangi Meghe Medical Hub", "Bhidi", "Pulgaon Military Depot"],
            "Seloo": ["Seloo Town", "Bor Wildlife Sanctuary", "Hingni", "Relegaon Wardha"],
            "Samudrapur": ["Samudrapur Town", "Girad Dargah", "Mandgaon", "Pohana"],
            "Karanja Ghadge": ["Karanja Ghadge Town", "Thanegaon", "Nandora", "Sarwadi"],
            "Ashti Wardha": ["Ashti Shahid Smarak", "Karanji", "Talegaon Ashti", "Sahur"]
        }
    },
    "Chandrapur": {
        "tier": 3, "price_range": (7.0, 18.0), "emp_range": (58.0, 78.0),
        "talukas": {
            "Chandrapur": ["Chandrapur City Black Gold City", "Tadoba Andhari National Park Gateway", "MIDC Tadali", "Ghuggus Coal Hub", "Urjanagar CSTPS"],
            "Ballarpur": ["Ballarpur Paper City", "Rajura Road", "Visapur Ballarpur", "Bamani"],
            "Warora": ["Warora Anandwan Baba Amte Ashram", "Shegaon Warora", "Madheli", "Majra"],
            "Bhadravati": ["Bhadravati Ordnance Factory Hub", "Gaurav Nagar", "Chandankheda", "Bijur"],
            "Rajura": ["Rajura Cement Hub", "Chunar", "Sonurli", "Nalegaon Rajura"],
            "Mul": ["Mul Rice City", "Maroda", "Chichala", "Bormala"],
            "Bramhapuri": ["Bramhapuri Education Town", "Armori Road", "Navargaon", "Kurza"],
            "Nagbhid": ["Nagbhid Railway Junction", "Ghodazari Dam Resort", "Talodhi Balapur", "Vilam"],
            "Sindewahi": ["Sindewahi Agriculture Research Hub", "Lonwahi", "Ratnapur", "Navin Sindewahi"],
            "Chimur": ["Chimur Kranti Town", "Neri Chimur", "Motegaon", "Masal"],
            "Gondpipri": ["Gondpipri Town", "Dhaba Gondpipri", "Karanji Gondpipri", "Toho"]
        }
    },
    "Bhandara": {
        "tier": 3, "price_range": (6.0, 15.0), "emp_range": (55.0, 75.0),
        "talukas": {
            "Bhandara": ["Bhandara Brass City", "Khat Road", "MIDC Madgi", "Bhojapur", "Takli Bhandara", "Belodi"],
            "Tumsar": ["Tumsar Manganese City", "Dongri Buzurg Mines", "Sihora", "Mitewani", "Mohadi Road"],
            "Pauni": ["Pauni Brass & Silk Heritage City", "Gosikhurd National Dam", "Asgaon", "Brahmi", "Rampur Pauni"],
            "Sakoli": ["Sakoli Town", "Nagzira Wildlife Sanctuary Base", "Sonegaon", "Kumbhali"],
            "Mohadi": ["Mohadi Town", "Andhalgaon Handloom Hub", "Kardi", "Palora"],
            "Lakhani": ["Lakhani Rice Trading Town", "Kesalwada", "Murmadi", "Rengepar"],
            "Lakhandur": ["Lakhandur Town", "Barwha", "Pardi Lakhandur", "Khadki"]
        }
    },
    "Gondia": {
        "tier": 3, "price_range": (5.0, 14.0), "emp_range": (54.0, 74.0),
        "talukas": {
            "Gondia": ["Gondia Rice Capital", "Kudwa", "MIDC Mundipar", "Goregaon Road", "Fulchur", "Karanje Gondia"],
            "Tirora": ["Tirora Adani Power Mega Plant", "Kachehani", "Sukdi", "Chikhali Tirora"],
            "Arjuni Morgaon": ["Navegaon National Park", "Morgaon Town", "Itadoh Dam", "Mahagaon Arjuni"],
            "Deori": ["Deori Tribal Heritage Town", "Chichgarh", "Mhaswani", "Borkheda"],
            "Amgaon": ["Amgaon Rice Mills Hub", "Thana Amgaon", "Padampur", "Anjora"],
            "Goregaon Gondia": ["Goregaon Town", "Mulla", "Tejpur", "Salegaon"],
            "Salekasa": ["Salekasa Forest Town", "Darekasa Caves", "Kodalbarra", "Tirjhar"],
            "Sadak Arjuni": ["Sadak Arjuni Town", "Kohmara NH6 Hub", "Soundad", "Donda"]
        }
    },
    "Gadchiroli": {
        "tier": 4, "price_range": (4.0, 12.0), "emp_range": (48.0, 70.0),
        "talukas": {
            "Gadchiroli": ["Gadchiroli Town", "Potegaon Road", "MIDC Gadchiroli", "Complex Area", "Navegaon Gadchiroli"],
            "Armori": ["Armori Silk & Tusser City", "Vairagad Historical Fort", "Koshti", "Arjuni Armori"],
            "Chamorshi": ["Chamorshi Town", "Markanda Mahadev Heritage Temple", "Ghot", "Tadgaon Chamorshi"],
            "Desaiganj (Wadsa)": ["Wadsa Commercial Railway Hub", "Nainpur", "Visora", "Kondhala"],
            "Aheri": ["Aheri Royal Town", "Allapalli Teak Forest Hub", "Pranhita Basin", "Devalmari"],
            "Sironcha": ["Sironcha Godavari-Pranhita Confluence", "Kaleshwaram Border", "Tekra", "Asaralli"],
            "Kurkheda": ["Kurkheda Town", "Malewada", "Andhali", "Nanhi"],
            "Dhanora": ["Dhanora Forest Town", "Chatgaon", "Mendha Lekha Model Tribal Village", "Godalwahi"],
            "Bhamragad": ["Bhamragad Hemalkasa Dr. Prakash Amte Lok Biradari Prakalp", "Laheri", "Tadgaon Bhamragad"],
            "Etapalli": ["Etapalli Town", "Kasansur", "Gatta", "Jaray"],
            "Mulchera": ["Mulchera Town", "Ashti Mulchera", "Lagham", "Machepalli"],
            "Korchi": ["Korchi Town", "Kotgul", "Bedgaon", "Bhurkikheda"]
        }
    }
}
