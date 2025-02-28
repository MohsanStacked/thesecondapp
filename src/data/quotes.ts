export interface Quote {
  arabic: string;
  english: string;
  transliteration?: string;
  source?: string; // Optional source/reference
  virtues?: string;
}

export const quotes: Quote[] = [
  {
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    english: "Glory is to Allah and praise is to Him.",
    transliteration: "Subḥānallāhi wa biḥamdihī",
    source: "Sahih Muslim 2691",
  },
  {
    arabic: "سُبْحَانَ اللَّهِ الْعَظِيمِ",
    english: "Glory is to Allah, the Most Great.",
    transliteration: "Subḥānallāhil-'Aẓīm",
    source: "Sahih al-Bukhari 6682",
  },
  {
    arabic:
      "لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    english:
      "There is no deity worthy of worship except Allah, alone, without partner. To Him belongs the dominion and praise, and He is over all things competent.",
    transliteration:
      "Lā ilāha illallāhu waḥdahu lā sharīka lahu, lahu al-mulku walahu al-ḥamdu wa huwa ʿalā kulli shayʾin qadīr.",
  },
  {
    arabic:
      "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    english:
      "O Allah, You are As-Salam (The Peace), and from You is all peace, blessed are You, O Possessor of Glory and Honor.",
    transliteration:
      "Allāhumma anta as-salāmu wa minka as-salāmu tabārakta yā dhal-jalāli wal-ikrām.",
    source: "Sahih Muslim 592",
  },
  {
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    english: "There is no power nor might except with Allah.",
    transliteration: "Lā ḥawla wa lā quwwata illā billāh.",
  },
  {
    arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    english: "I seek forgiveness from Allah and turn to Him in repentance.",
    transliteration: "Astaghfirullāha wa atūbu ilayh.",
  },
  {
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي",
    english:
      "O Allah, forgive me, have mercy on me, guide me, grant me well-being, and provide for me.",
    transliteration: "Allāhumma ighfir lī warḥamnī wahdinī waʿāfinī warzuqnī.",
  },
  {
    arabic: "يَا حَيُّ يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ",
    english: "O Ever-Living, O Sustainer, by Your mercy I seek help!",
    transliteration: "Yā Ḥayyu yā Qayyūm, biraḥmatika astaghīthu.",
  },
  {
    arabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    transliteration: "Bismillāhir-Raḥmānir-Raḥīm",
    english: "In the name of Allah, the Most Gracious, the Most Merciful",
    source: "Quran, Opening of most chapters",
  },
  {
    arabic: "حَسْبُنَا ٱللَّٰهُ وَنِعْمَ ٱلْوَكِيلُ",
    english:
      "Sufficient for us is Allah, and He is the best Disposer of affairs",
    transliteration: "Ḥasbunallāhu wa ni'mal-wakīl",
    source: "Quran 3:173",
  },
  {
    arabic: "ٱللَّٰهُ لَا إِلَٰهَ إِلَّا هُوَ ٱلْحَيُّ ٱلْقَيُّومُ",
    english:
      "Allah - there is no deity except Him, the Ever-Living, the Sustainer",
    transliteration: "Allāhu lā ilāha illā huw al-Ḥayyul-Qayyūm",
    source: "Quran 2:255 (Ayat al-Kursi)",
  },
  {
    arabic: "سُبْحَانَ اللهِ",
    transliteration: "Subḥānallāh",
    english: "Glory be to Allah",
    virtues: "Fills the scales of good deeds",
  },
  {
    arabic: "الْحَمْدُ لِلَّهِ",
    transliteration: "Alḥamdulillāh",
    english: "All praise is due to Allah",
    virtues: "Fills what is between the heavens and earth",
  },
  {
    arabic: "لَا إِلَٰهَ إِلَّا اللهُ",
    transliteration: "Lā ilāha illallāh",
    english: "There is no deity worthy of worship except Allah",
    virtues: "Best remembrance, erases sins",
  },
  {
    arabic: "اللهُ أَكْبَرُ",
    transliteration: "Allāhu akbar",
    english: "Allah is Greater",
    virtues: "Highly rewarded, fills space between heaven and earth",
  },
  {
    arabic: "أَسْتَغْفِرُ اللهَ",
    transliteration: "Astaghfirullāh",
    english: "I seek forgiveness from Allah",
    virtues: "Source of relief from distress and provision",
  },
  {
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ",
    transliteration: "Lā ḥawla wa lā quwwata illā billāh",
    english: "There is no might nor power except with Allah",
    virtues: "A treasure from the treasures of Paradise",
  },
  {
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ",
    transliteration: "Allāhumma ṣalli ʿalā Muḥammad",
    english: "O Allah, send blessings upon Muhammad",
    virtues:
      "Allah sends ten blessings upon the one who sends one blessing upon the Prophet",
  },
  {
    arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
    transliteration: "Subḥānallāhi wa biḥamdih",
    english: "Glory be to Allah and praise be to Him",
    virtues: "Heavy on the scales, beloved to Allah",
  },
  {
    arabic: "بِسْمِ اللهِ",
    transliteration: "Bismillāh",
    english: "In the name of Allah",
    virtues: "Protects what is begun with it",
  },
  {
    arabic:
      "سُبْحَانَ اللهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ",
    transliteration:
      "Subḥānallāhi wal-ḥamdulillāhi wa lā ilāha illallāhu wallāhu akbar",
    english:
      "Glory be to Allah, all praise is due to Allah, there is no deity except Allah, and Allah is Greater",
    virtues: "Most beloved words to Allah, expiates sins",
  },
  {
    arabic:
      "حَسْبِيَ اللهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration:
      "Ḥasbiyallāhu lā ilāha illā huwa, ʿalayhi tawakkaltu wa huwa rabbul-ʿarshil-ʿaẓīm",
    english:
      "Sufficient for me is Allah; there is no deity except Him. On Him I rely, and He is the Lord of the Great Throne",
    source: "Quran 9:129",
    virtues: "Protects against anxiety and harm",
  },
  {
    arabic: "حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Ḥasbunallāhu wa niʿmal-wakīl",
    english:
      "Sufficient for us is Allah, and [He is] the best Disposer of affairs",
    source: "Quran 3:173",
    virtues:
      "Said by Ibrahim when thrown into fire, brings relief from difficulty",
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ",
    transliteration: "Allāhumma innī as'alukal-ʿafwa wal-ʿāfiyah",
    english: "O Allah, I ask You for pardon and well-being",
    virtues: "One of the best supplications for well-being",
  },
  {
    arabic: "رَبِّ اغْفِرْ لِي",
    transliteration: "Rabbighfir lī",
    english: "My Lord, forgive me",
    source: "Quran",
  },
  {
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "Subḥāna rabbiyal-ʿaẓīm",
    english: "Glory be to my Lord, the Magnificent",
    virtues: "Said during bowing in prayer (rukoo)",
  },
  {
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    transliteration: "Subḥāna rabbiyal-aʿlā",
    english: "Glory be to my Lord, the Most High",
    virtues: "Said during prostration (sujood)",
  },
  {
    arabic: "اللَّهُمَّ رَبَّنَا لَكَ الْحَمْدُ",
    transliteration: "Allāhumma rabbanā lakal-ḥamd",
    english: "O Allah, our Lord, to You is all praise",
    virtues: "Said when rising from bowing in prayer",
  },
  {
    arabic: "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي",
    transliteration: "Allāhummaghfir lī warḥamnī",
    english: "O Allah, forgive me and have mercy upon me",
    virtues: "Comprehensive supplication for forgiveness and mercy",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
    transliteration:
      "Allāhumma innī as'alukal-jannata wa aʿūdhu bika minan-nār",
    english:
      "O Allah, I ask You for Paradise and seek refuge in You from the Fire",
    virtues: "Direct request for ultimate success in the Hereafter",
  },
  {
    arabic:
      "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    transliteration:
      "Allāhumma aʿinnī ʿalā dhikrika wa shukrika wa ḥusni ʿibādatik",
    english:
      "O Allah, help me to remember You, to thank You, and to worship You in the best way",
    source: "Abu Dawud, Nasa'i",
    virtues: "Taught by the Prophet ﷺ to Mu'adh ibn Jabal",
  },
  {
    arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
    transliteration: "Allāhumma ṣalli wa sallim ʿalā nabiyyinā Muḥammad",
    english: "O Allah, send prayers and peace upon our Prophet Muhammad",
    virtues: "One of the most virtuous acts",
  },
  {
    arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ سُبْحَانَ اللهِ الْعَظِيمِ",
    transliteration: "Subḥānallāhi wa biḥamdih, subḥānallāhil-ʿaẓīm",
    english:
      "Glory be to Allah and praise be to Him, Glory be to Allah the Magnificent",
    virtues:
      "Light on the tongue, heavy on the scales, beloved to the Most Merciful",
  },
  {
    arabic: "سُبْحَانَ اللهِ عَدَدَ خَلْقِهِ",
    transliteration: "Subḥānallāhi ʿadada khalqih",
    english: "Glory be to Allah, equal to the number of His creation",
    virtues: "Multiplied reward",
  },
  {
    arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
    transliteration: "Yā Ḥayyu yā Qayyūm, biraḥmatika astaghīth",
    english:
      "O Ever-Living, O Self-Sustaining, by Your mercy I seek assistance",
    virtues: "A powerful supplication using Allah's Greatest Names",
  },
  {
    arabic: "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا",
    transliteration: "Rabbanā āmannā faghfir lanā warḥamnā",
    english: "Our Lord, we have believed, so forgive us and have mercy upon us",
    source: "Quran 23:109",
  },
  {
    arabic: "اللَّهُمَّ سَلِّمْنِي وَسَلِّمْ مِنِّي",
    transliteration: "Allāhumma sallimnī wa sallim minnī",
    english: "O Allah, keep me safe and protect others from any harm from me",
    virtues: "Comprehensive supplication for safety",
  },
  {
    arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    transliteration: "Innā lillāhi wa innā ilayhi rājiʿūn",
    english: "Indeed, to Allah we belong and to Him we shall return",
    source: "Quran 2:156",
    virtues: "Said during calamity, brings reward and replacement",
  },
  {
    arabic: "اللَّهُمَّ بَارِكْ لِي فِيمَا رَزَقْتَنِي",
    transliteration: "Allāhumma bārik lī fīmā razaqtanī",
    english: "O Allah, bless for me what You have provided me",
    virtues: "Brings barakah (blessing) in provision",
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعِلْمَ النَّافِعَ",
    transliteration: "Allāhumma innī as'alukal-ʿilman-nāfiʿ",
    english: "O Allah, I ask You for beneficial knowledge",
    virtues: "Important supplication for seekers of knowledge",
  },
  {
    arabic: "ٱلْحَمْدُ لِلَّٰهِ رَبِّ ٱلْعَٰلَمِينَ",
    transliteration: "Al-ḥamdu lillāhi rabbil-ʿālamīn",
    english: "All praise is due to Allah, Lord of the worlds",
    source: "Quran 1:2",
  },
  {
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    transliteration: "Iyyāka naʿbudu wa-iyyāka nastaʿīn",
    english: "You alone we worship and You alone we ask for help",
    source: "Quran 1:5",
  },
  {
    arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ",
    transliteration: "Lā ilāha illallāh",
    english: "There is no deity worthy of worship except Allah",
    source: "First part of the Shahada",
  },
  {
    arabic: "مُحَمَّدٌ رَسُولُ ٱللَّٰهِ",
    transliteration: "Muḥammadur-rasūlullāh",
    english: "Muhammad is the Messenger of Allah",
    source: "Second part of the Shahada",
  },
  {
    arabic: "سُبْحَانَ اللهِ",
    transliteration: "Subḥānallāh",
    english: "Glory be to Allah",
    source: "Common dhikr, mentioned in many Quranic verses",
  },
  {
    arabic: "اَلْحَمْدُ لِلّٰهِ",
    transliteration: "Alḥamdulillāh",
    english: "All praise is due to Allah",
    source: "Common dhikr, mentioned in many Quranic verses",
  },
  {
    arabic: "اللهُ أَكْبَرُ",
    transliteration: "Allāhu akbar",
    english: "Allah is Greater",
    source: "Common dhikr, mentioned in many hadiths",
  },
  {
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ",
    transliteration: "Lā ḥawla wa lā quwwata illā billāh",
    english: "There is no might nor power except with Allah",
    source: "Sahih Muslim",
  },
  {
    arabic: "أَسْتَغْفِرُ اللهَ",
    transliteration: "Astaghfirullāh",
    english: "I seek forgiveness from Allah",
    source: "Common dhikr, mentioned in many hadiths",
  },
  {
    arabic: "حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Ḥasbunallāhu wa ni'mal-wakīl",
    english: "Allah is sufficient for us, and how excellent a guardian He is",
    source: "Quran 3:173",
  },
  {
    arabic: "إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    transliteration: "Innā lillāhi wa innā ilayhi rājiʿūn",
    english: "Indeed, to Allah we belong and to Him we shall return",
    source: "Quran 2:156",
  },
  {
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
    transliteration: "Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammad",
    english:
      "O Allah, send Your blessings upon Muhammad and upon the family of Muhammad",
    source: "Bukhari and Muslim",
  },
  {
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ʿadhāban-nār",
    english:
      "Our Lord, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire",
    source: "Quran 2:201",
  },
  {
    arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ",
    transliteration: "Rabbighfir lī wa li-wālidayya",
    english: "My Lord, forgive me and my parents",
    source: "Quran 14:41, 71:28",
  },
  {
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidnī ʿilmā",
    english: "My Lord, increase me in knowledge",
    source: "Quran 20:114",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
    transliteration:
      "Allāhumma innī as'alukal-ʿafwa wal-ʿāfiyata fid-dunyā wal-ākhirah",
    english:
      "O Allah, I ask You for pardon and well-being in this life and the Hereafter",
    source: "Ibn Majah",
  },
  {
    arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
    transliteration: "Subḥānallāhi wa biḥamdih",
    english: "Glory be to Allah and praise be to Him",
    source: "Bukhari and Muslim",
  },
  {
    arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ سُبْحَانَ اللهِ الْعَظِيمِ",
    transliteration: "Subḥānallāhi wa biḥamdih, subḥānallāhil-ʿaẓīm",
    english:
      "Glory be to Allah and praise be to Him, Glory be to Allah the Magnificent",
    source: "Bukhari and Muslim",
  },
  {
    arabic:
      "سُبْحَانَ اللهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ",
    transliteration:
      "Subḥānallāhi wal-ḥamdulillāhi wa lā ilāha illallāhu wallāhu akbar",
    english:
      "Glory be to Allah, and praise be to Allah, and there is no deity except Allah, and Allah is Greater",
    source: "Muslim",
  },
  {
    arabic: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "Aʿūdhu bikalimātillāhit-tāmmāti min sharri mā khalaq",
    english:
      "I seek refuge in the perfect words of Allah from the evil of what He has created",
    source: "Muslim",
  },
  {
    arabic:
      "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Bismillāhilladhī lā yaḍurru maʿa ismihi shay'un fil-arḍi wa lā fis-samā'i wa huwas-samīʿul-ʿalīm",
    english:
      "In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing",
    source: "Abu Dawud, Tirmidhi",
  },
  {
    arabic: "أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "Aʿūdhu billāhi minash-shayṭānir-rajīm",
    english: "I seek refuge in Allah from Satan, the accursed",
    source: "Common formula before Quran recitation",
  },
  {
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration:
      "Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa anā ʿabduka, wa anā ʿalā ʿahdika wa waʿdika mastaṭaʿtu, aʿūdhu bika min sharri mā ṣanaʿtu, abū'u laka biniʿmatika ʿalayya, wa abū'u bidhanbī faghfir lī fa'innahū lā yaghfirudh-dhunūba illā ant",
    english:
      "O Allah, You are my Lord, there is no deity except You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge before You Your favors upon me, and I acknowledge my sins, so forgive me, for none forgives sins except You",
    source: "Bukhari",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
    transliteration:
      "Allāhumma innī ẓalamtu nafsī ẓulman kathīran, wa lā yaghfirudh-dhunūba illā anta, faghfir lī maghfiratan min ʿindika, warḥamnī, innaka antal-ghafūrur-raḥīm",
    english:
      "O Allah, I have greatly wronged myself, and none forgives sins except You, so grant me forgiveness from You and have mercy upon me, for You are the Most Forgiving, the Most Merciful",
    source: "Bukhari and Muslim",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ وَمِنْ عَذَابِ الْقَبْرِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
    transliteration:
      "Allāhumma innī aʿūdhu bika min ʿadhābi jahannam, wa min ʿadhābil-qabr, wa min fitnatil-maḥyā wal-mamāt, wa min sharri fitnatil-masīḥid-dajjāl",
    english:
      "O Allah, I seek refuge in You from the punishment of Hellfire, from the punishment of the grave, from the trials of life and death, and from the evil of the trial of the False Messiah",
    source: "Bukhari and Muslim",
  },
  {
    arabic:
      "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي وَاجْعَلِ الْحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ وَاجْعَلِ الْمَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ",
    transliteration:
      "Allāhumma aṣliḥ lī dīnī alladhī huwa ʿiṣmatu amrī, wa aṣliḥ lī dunyāya allatī fīhā maʿāshī, wa aṣliḥ lī ākhiratī allatī fīhā maʿādī, wajʿalil-ḥayāta ziyādatan lī fī kulli khayr, wajʿalil-mawta rāḥatan lī min kulli sharr",
    english:
      "O Allah, make good for me my religion, which is the safeguard of my affairs; and make good for me my worldly affairs, in which is my livelihood; and make good for me my Hereafter, to which is my return; and make life an increase for me in all that is good; and make death a relief for me from all that is evil",
    source: "Muslim",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    transliteration:
      "Allāhumma innī as'alukal-hudā wat-tuqā wal-ʿafāfa wal-ghinā",
    english:
      "O Allah, I ask You for guidance, piety, chastity, and contentment",
    source: "Muslim",
  },
  {
    arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    transliteration: "Yā muqallibal-qulūb, thabbit qalbī ʿalā dīnik",
    english: "O Turner of hearts, make my heart firm upon Your religion",
    source: "Tirmidhi",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    transliteration:
      "Allāhumma innī aʿūdhu bika minal-hammi wal-ḥazan, wal-ʿajzi wal-kasal, wal-bukhli wal-jubn, wa ḍalaʿid-dayni wa ghalabatir-rijāl",
    english:
      "O Allah, I seek refuge in You from anxiety and sorrow, from incapacity and laziness, from stinginess and cowardice, from being heavily in debt and from being overpowered by men",
    source: "Bukhari",
  },
  {
    arabic:
      "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا أَنْتَ وَلِيُّهَا وَمَوْلَاهَا",
    transliteration:
      "Allāhumma āti nafsī taqwāhā, wa zakkihā anta khayru man zakkāhā, anta waliyyuhā wa mawlāhā",
    english:
      "O Allah, grant my soul its piety and purify it, for You are the Best who can purify it. You are its Guardian and Master",
    source: "Muslim",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ",
    transliteration:
      "Allāhumma innī aʿūdhu bika min sharri mā ʿamiltu wa min sharri mā lam aʿmal",
    english:
      "O Allah, I seek refuge in You from the evil of what I have done and from the evil of what I have not done",
    source: "Muslim",
  },
  {
    arabic:
      "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    transliteration:
      "Rabbij-ʿalnī muqīmaṣ-ṣalāti wa min dhurriyyatī, rabbanā wa taqabbal duʿā'",
    english:
      "My Lord, make me an establisher of prayer, and from my descendants. Our Lord, and accept my supplication",
    source: "Quran 14:40",
  },
  {
    arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا",
    transliteration: "Rabbanā lā tu'ākhidhnā in nasīnā aw akhṭa'nā",
    english:
      "Our Lord, do not impose blame upon us if we have forgotten or erred",
    source: "Quran 2:286",
  },
  {
    arabic:
      "رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا",
    transliteration:
      "Rabbanā wa lā taḥmil ʿalaynā iṣran kamā ḥamaltahū ʿalalladhīna min qablinā",
    english:
      "Our Lord, and do not lay upon us a burden like that which You laid upon those before us",
    source: "Quran 2:286",
  },
  {
    arabic:
      "رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Rabbanā wa lā tuḥammilnā mā lā ṭāqata lanā bih, waʿfu ʿannā, waghfir lanā, warḥamnā, anta mawlānā fanṣurnā ʿalal-qawmil-kāfirīn",
    english:
      "Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people",
    source: "Quran 2:286",
  },
  {
    arabic:
      "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي",
    transliteration:
      "Rabbish-raḥ lī ṣadrī, wa yassir lī amrī, waḥlul ʿuqdatan min lisānī, yafqahū qawlī",
    english:
      "My Lord, expand for me my chest, and ease for me my task, and untie the knot from my tongue that they may understand my speech",
    source: "Quran 20:25-28",
  },
  {
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي وَإِسْرَافِي فِي أَمْرِي وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي",
    transliteration:
      "Allāhummaghfir lī khaṭī'atī wa jahlī wa isrāfī fī amrī, wa mā anta aʿlamu bihī minnī",
    english:
      "O Allah, forgive me for my sins, my ignorance, my immoderation in my affairs, and all that You know better than I",
    source: "Bukhari and Muslim",
  },
  {
    arabic:
      "اللَّهُمَّ اغْفِرْ لِي جِدِّي وَهَزْلِي وَخَطَئِي وَعَمْدِي وَكُلُّ ذَلِكَ عِنْدِي",
    transliteration:
      "Allāhummaghfir lī jiddī wa hazlī, wa khaṭa'ī wa ʿamdī, wa kullu dhālika ʿindī",
    english:
      "O Allah, forgive me for my seriousness and my playfulness, my mistakes and my deliberate actions, and all of that is with me",
    source: "Bukhari and Muslim",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ وَفُجَاءَةِ نِقْمَتِكَ وَجَمِيعِ سَخَطِكَ",
    transliteration:
      "Allāhumma innī aʿūdhu bika min zawāli niʿmatik, wa taḥawwuli ʿāfiyatik, wa fujā'ati niqmatik, wa jamīʿi sakhaṭik",
    english:
      "O Allah, I seek refuge in You from the decline of Your blessings, the shift of Your well-being, the suddenness of Your revenge, and all of Your displeasure",
    source: "Muslim",
  },
  {
    arabic:
      "اللَّهُمَّ لَكَ أَسْلَمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَإِلَيْكَ أَنَبْتُ وَبِكَ خَاصَمْتُ",
    transliteration:
      "Allāhumma laka aslamtu, wa bika āmantu, wa ʿalayka tawakkaltu, wa ilayka anabtu, wa bika khāṣamtu",
    english:
      "O Allah, to You I submit, in You I believe, upon You I rely, to You I turn, and for Your sake I contend",
    source: "Bukhari and Muslim",
  },
  {
    arabic:
      "اللَّهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ",
    transliteration:
      "Allāhumma antal-awwalu falaysa qablaka shay', wa antal-ākhiru falaysa baʿdaka shay'",
    english:
      "O Allah, You are the First, so there is nothing before You, and You are the Last, so there is nothing after You",
    source: "Muslim",
  },
  {
    arabic:
      "اللَّهُمَّ رَبَّ السَّمَوَاتِ وَرَبَّ الْأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ فَالِقَ الْحَبِّ وَالنَّوَى وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْفُرْقَانِ أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ",
    transliteration:
      "Allāhumma rabbas-samāwāti wa rabbal-arḍi wa rabbal-ʿarshil-ʿaẓīm, rabbanā wa rabba kulli shay', fāliqal-ḥabbi wan-nawā, wa munzilat-tawrāti wal-injīli wal-furqān, aʿūdhu bika min sharri kulli shay'in anta ākhidhun bināṣiyatih",
    english:
      "O Allah, Lord of the heavens, Lord of the earth, and Lord of the Mighty Throne, our Lord and the Lord of everything, Splitter of the grain and the date stone, Revealer of the Torah, the Gospel, and the Criterion (Quran), I seek refuge in You from the evil of everything You are holding by its forelock",
    source: "Muslim",
  },
];
