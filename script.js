console.log("script.js loaded and starting execution.");

// --- 1. Vocabulary Data (Tree-Speak) ---
// **IMPORTANT:** Ensure this array contains ALL your vocabulary words
// from your list, following the { word: "", pronunciation: "", definition: "" }, format.
const allVocabularyData = [
    { word: "Arnn.n", pronunciation: "ARN", definition: "Eagle, Spirit of the sky, messenger, clear vision." },
    { word: "Ashn.n", pronunciation: "ASH", definition: "Ash Tree, World Tree connection, resilience, link between worlds." },
    { word: "Askn.n", pronunciation: "AHSK", definition: "Ash Tree (variant of Ash, older/more mythic), World Tree connection, source of first man (Norse myth)." },
    { word: "Augan.n", pronunciation: "OW-gah", definition: "Eye, Physical sight, spiritual perception, window to the soul." },
    { word: "Bearv.v", pronunciation: "BAIR", definition: "Carry, Endure, Hold, Physical carrying, but also enduring hardship or carrying a burden/legacy." },
    { word: "Beinn.n", pronunciation: "BAYN", definition: "Bone, Structure, remnants of life, connection to ancestors/death." },
    { word: "Bergn.n", pronunciation: "BERG", definition: "Mountain (similar to Fell, larger/imposing), Ancient power, dwelling of powerful spirits, obstacle." },
    { word: "Bernn.n", pronunciation: "BERN", definition: "Bear, Spirit of strength, primal power, introspection." },
    { word: "Bjarkn.n", pronunciation: "BYARK", definition: "Birch Tree, Renewal, beginnings, purification, resilience." },
    { word: "Bladn.n", pronunciation: "BLAHD", definition: "Leaf, Blade (of grass/knife), Growth, seasonal change, sharpness, small part of a whole." },
    { word: "Blodn.n", pronunciation: "BLOHD", definition: "Blood, Life force, sacrifice, lineage, connection." },
    { word: "Bregv.v", pronunciation: "BREG", definition: "Break, Shatter, Physical breaking, also breaking oaths or spirits." },
    { word: "Brennv.v", pronunciation: "BREN", definition: "Burn (controlled, intentional), To use fire for warmth, cooking, ritual, cauterizing." },
    { word: "Byggv.v", pronunciation: "BIG", definition: "Build, Construct, Creating shelter, structures, shaping the physical world." },
    { word: "Dagn.n", pronunciation: "DAHG", definition: "Day, Daylight, Time of revealing, warmth, activity." },
    { word: "Dimadj.adj", pronunciation: "DIM", definition: "Dim, Gloomy, Obscured, Faint light, twilight, unclear vision, sorrowful mood." },
    { word: "Dolkn.n", pronunciation: "DOHLK", definition: "Dagger, Ritual Knife, Tool for sacrifice, carving runes, defense." },
    { word: "Draumn.n", pronunciation: "DROWm (like 'ow' in cow)", definition: "Dream (the experience/vision itself), Messages from spirits, visions, journeys during sleep."深受喜爱
    { word: "Drekn.n", pronunciation: "DREK", definition: "Dragon, Great Serpent, Primal power, earth energy, hoarded knowledge/treasure, great danger." },
    { word: "Drithn.n", pronunciation: "DRITH (soft 'th' like 'this')", definition: "Spirit, Ghost, Ethereal Being, General term for non-corporeal entity." },
    { word: "Durnnum.num", pronunciation: "DURN", definition: "Two, Duality, Balance, pairs, opposition." },
    { word: "Dvalv.v", pronunciation: "DVAHL", definition: "Sleep, Rest, Lie dormant, Physical sleep, but also spiritual rest or a dormant state." },
    { word: "Dyrn.n", pronunciation: "DEER", definition: "Door, Entrance, Threshold, passage between spaces (physical or spiritual)." },
    { word: "Eikn.n", pronunciation: "AYK", definition: "Oak Tree, Strength, endurance, wisdom, sacred to thunder gods?." },
    { word: "Eitrn.n", pronunciation: "AY-tur", definition: "Poison, Venom, Corrupting Essence, Harmful substance, spiritual corruption, malice." },
    { word: "Eldn.n", pronunciation: "ELD", definition: "Fire (esp. hearth/ritual fire), Warmth, community, transformation, danger." },
    { word: "Elkn.n", pronunciation: "ELK", definition: "Elk, Moose, Majesty, forest guardian, valuable prey." },
    { word: "Enden.n", pronunciation: "EN-deh", definition: "End, Conclusion, Cessation, finality, goal." },
    { word: "Enun.n", pronunciation: "EH-noo", definition: "Name, Essence, True Nature, The core identity of a being or place." },
    { word: "Essarv.v", pronunciation: "ESS-ahr", definition: "Breathe, Life essence, the act of living, first/last breath." },
    { word: "Ethn.n", pronunciation: "ETH (soft 'th' like 'this')", definition: "Oath, Binding Word, A sacred promise, a word with power." },
    { word: "Faerv.v", pronunciation: "FAY-er", definition: "Fear (the emotion/state), Experience fear, be afraid. (Related to Oth)." },
    { word: "Fallav.v", pronunciation: "FAHL-lah", definition: "Fall, Descend, Die (in battle/suddenly), Physical falling, leaves falling, dying unexpectedly." },
    { word: "Fangn.n", pronunciation: "FANG", definition: "Capture, Prize / Fang, Tooth, The act of catching prey / A predator's tooth." },
    { word: "Farav.v", pronunciation: "FAH-rah", definition: "Go, Travel, Depart, Purposeful movement, journeying." },
    { word: "Fathn.n", pronunciation: "FAHTH (soft 'th' like 'this')", definition: "Father, Ancestor (male), Female lineage, protector spirit." },
    { word: "Felln.n", pronunciation: "FELL", definition: "Mountain, High Rocky Place, Place of perspective, isolation, ancient stone." },
    { word: "Fernn.n", pronunciation: "FERN", definition: "Fern, Ancient plant, hidden places, resilience in shade." },
    { word: "Finnv.v", pronunciation: "FIN", definition: "Find, Discover, Locating something lost or hidden." },
    { word: "Fioln.n", pronunciation: "FEE-ohl", definition: "Enemy, Foe, Adversary, source of conflict." },
    { word: "Fjaran.n", pronunciation: "FYAH-rah", definition: "Shore, Coast, Beach, Boundary between land and sea, liminal space." },
    { word: "Fjornn.n", pronunciation: "FYORN", definition: "Feather, Flight, message, lightness, connection to sky spirits." },
    { word: "Flokn.n", pronunciation: "FLOHK", definition: "Flock, Group, Band (of people or animals), Community, collective entity." },
    { word: "Flumn.n", pronunciation: "FLUM", definition: "River, Stream, Flow, passage of time, cleansing, boundary." },
    { word: "Fornadj.adj", pronunciation: "FORN", definition: "Ancient, Old (esp. relating to lore/time), Belonging to distant past, primeval." },
    { word: "Foxn.n", pronunciation: "FOX", definition: "Fox, Cunning, trickster, adaptability, guide in twilight." },
    { word: "Fridn.n", pronunciation: "FRID", definition: "Peace, Truce, Sanctuary, Absence of conflict, safety, harmony." },
    { word: "Frodadj.adj", pronunciation: "FROHD", definition: "Wise, Knowledgeable (through experience/lore), Deep understanding derived from age or study." },
    { word: "Froskn.n", pronunciation: "FROHSK", definition: "Frog, Transformation, fertility, connection to water/rain." },
    { word: "Fyrn.n", pronunciation: "FEER", definition: "Fire (esp. wild/destructive fire), Destruction, uncontrolled power, cleansing, warning signal." },
    { word: "Galv.v", pronunciation: "GAHL", definition: "Sing, Chant (esp. ritualistic or magical), Incantation, invoking power through voice." },
    { word: "Gamaladj.adj", pronunciation: "GAH-mahl", definition: "Old (referring to living beings/age), Aged, elder." },
    { word: "Gapav.v", pronunciation: "GAH-pah", definition: "Gape, Open wide (mouth, abyss), Awe, void, entrance to underworld?." },
    { word: "Gardn.n", pronunciation: "GAHRD", definition: "Enclosure, Yard, Protected Place, Area around a dwelling, safe zone." },
    { word: "Gautn.n", pronunciation: "GOWT (like 'ow' in cow)", definition: "God, Deity (general term), A divine being, powerful spirit." },
    { word: "Gefav.v", pronunciation: "GEH-vah", definition: "Give, Offer, Bestowing gifts, making offerings to spirits/gods." },
    { word: "Geirrn.n", pronunciation: "GAYR", definition: "Spear, Hunting tool, weapon, symbol of focus/direction." },
    { word: "Geitn.n", pronunciation: "GAYT", definition: "Goat, Stubbornness, agility, association with certain deities?." },
    { word: "Ginnadj.adj", pronunciation: "GIN", definition: "Empty, Void, Primal, The void before creation, vast emptiness, potential." },
    { word: "Glettn.n", pronunciation: "GLETT", definition: "Trickery, Deception, Illusion, Playful or malicious deceit, fae magic." },
    { word: "Glitv.v", pronunciation: "GLIT", definition: "Glitter, Shine, Reflecting light, beauty, potential illusion." },
    { word: "Graadj.adj", pronunciation: "GRAH", definition: "Grey, Twilight-colored, Between black and white, ambiguous, aged." },
    { word: "Gravv./n.", pronunciation: "GRAHV", definition: "Dig / Grave, To excavate / Place of burial." },
    { word: "Gripv.v", pronunciation: "GRIP", definition: "Grip, Seize, Hold fast, Strong grasp, taking control." },
    { word: "Grunn.n", pronunciation: "GRUN", definition: "Forest, Woods, The living world, mystery, shelter, danger." },
    { word: "Gwennn.n", pronunciation: "GWEN", definition: "Light, Glow, Illumination, Spirit-fire, hope, clarity, divine presence." },
    { word: "Gygn.n", pronunciation: "GEEG", definition: "Giantess, Ogress, Female Monster, Powerful, often destructive female entity of the wilds." },
    { word: "Hagn.n", pronunciation: "HAG", definition: "Hedge, Boundary marker / Hag, Wise Woman/Witch, Natural border / Woman of power, potentially dangerous." },
    { word: "Hainadj.adj", pronunciation: "HAIN (rhymes with 'rain')", definition: "Sacred, Hallowed, Forbidden, Touched by spirits, set apart, protected or dangerous." },
    { word: "Hainstadn.n", pronunciation: "HAIN-stahd", definition: "Sacred Place, Grove, Altar Site, Compound: Hain (sacred) + Stad (place)." },
    { word: "Hamrn.n", pronunciation: "HAHM-ur", definition: "Shape, Form, Skin (esp. shapeshaping), The outer form or vessel, ability to change shape." },
    { word: "Handn.n", pronunciation: "HAND", definition: "Hand, Tool of making, symbol of action/giving/taking." },
    { word: "Harv.v", pronunciation: "HAHR", definition: "Hold, Keep, Possess, Physical holding, but also holding memory or power." },
    { word: "Haugn.n", pronunciation: "HOWG (like 'ow' in cow)", definition: "Burial Mound, Barrow, Ancestral tomb, place of spirits and power." },
    { word: "Havn.n", pronunciation: "HAHV", definition: "Ocean, Sea, Vast expanse of water, primal chaos, source of life/danger." },
    { word: "Hæln.n", pronunciation: "HALE (rhymes with 'sail')", definition: "Health, Wholeness, Luck, State of balance, spiritual well-being." },
    { word: "Heidn.n", pronunciation: "HAYD", definition: "Heath, Moor, Open Wasteland, Untamed land, exposure, place of solitude or spirits." },
    { word: "Hellan.n", pronunciation: "HEL-lah", definition: "Flat Stone, Slab (for carving/altar), Surface for runes, rituals, memorials." },
    { word: "Hjalpv.v/n.", pronunciation: "YALP", definition: "Help, Aid / Assistance, Providing support / The support given." },
    { word: "Hjoln.n", pronunciation: "YOHL", definition: "Wheel, Cycle, Turning of seasons, cycle of life/death, fate's wheel?." },
    { word: "Hlidn.n", pronunciation: "HLEED", definition: "Gate, Passageway, Liminal Space, Threshold between worlds or states." },
    { word: "Hljodn.n", pronunciation: "HLYOHD", definition: "Sound, Hearing, Auditory perception, silence broken." },
    { word: "Hlutn.n", pronunciation: "HLOOT", definition: "Lot, Share, Fate (as portion assigned), One's assigned destiny or portion, casting lots." },
    { word: "Holn.n", pronunciation: "HOLE", definition: "Hole, Cave, Hollow, Entrance to underground, hidden place, dwelling." },
    { word: "Hornn.n", pronunciation: "HORN", definition: "Horn (animal or drinking/signal horn), Symbol of power/wildness, vessel for drink, signal sound." },
    { word: "Hreinadj.adj", pronunciation: "HRAYN", definition: "Clean, Pure, Unblemished, ritually pure." },
    { word: "Hridn.n", pronunciation: "HREED", definition: "Storm, Tempest (esp. snow/sleet), Violent weather, chaos, testing." },
    { word: "Hrimn.n", pronunciation: "HREEM", definition: "Frost, Ice, Stillness, preservation, cold, death's touch." },
    { word: "Hrossn.n", pronunciation: "HROSS", definition: "Horse, Travel, speed, companion, connection to certain deities." },
    { word: "Hugarn.n", pronunciation: "HOO-gahr", definition: "Thought, Mind, Spirit (as seat of thought), Consciousness, intention, memory." },
    { word: "Huldn.n", pronunciation: "HULD (like 'oo' in 'pull')", definition: "Hidden Folk, Hulder, Specific forest spirit, guardian/trickster of nature." },
    { word: "Husn.n", pronunciation: "HOOS", definition: "House (variant of Rann, simpler dwelling), Shelter, home." },
    { word: "Hvitadj.adj", pronunciation: "HVEET", definition: "White, Purity, snow, bone, spirit color." },
    { word: "Isn.n", pronunciation: "EES", definition: "Ice (esp. frozen water/glacier), Ancient stillness, immense power, time frozen." },
    { word: "Jarnn.n", pronunciation: "YARN", definition: "Iron, Metal, strength, tool/weapon material, bane to some spirits." },
    { word: "Jartn.n", pronunciation: "YART", definition: "Heart, Physical organ, seat of courage/emotion, core." },
    { word: "Jormn.n", pronunciation: "YORM", definition: "Serpent, Large Snake (esp. earth/water serpent), Earth energy, cyclical nature, potential danger." },
    { word: "Jotunn.n", pronunciation: "YOH-tun", definition: "Giant, Primal being of great size/power, often opposed to gods/order." },
    { word: "Kaldadj.adj", pronunciation: "KAHLD", definition: "Cold, Low temperature, lack of emotion, deathly." },
    { word: "Kannv.v", pronunciation: "KAHN", definition: "Can, Be able to, Ability, skill, potential." },
    { word: "Kapan.n", pronunciation: "KAH-pah", definition: "Cloak, Hooded Garment, Concealment, protection, travel wear." },
    { word: "Karnn.n", pronunciation: "KARN", definition: "Stone, Rock, Cairn, Memory, endurance, foundation, marker." },
    { word: "Kastav.v", pronunciation: "KAH-stah", definition: "Throw, Cast (lots, runes, spells), Propel physically, engage in divination/magic." },
    { word: "Keldn.n", pronunciation: "KELD", definition: "Spring, Well (water source), Source of pure water, life, potential oracle site." },
    { word: "Kenv.v", pronunciation: "KEN", definition: "Know, Understand (basic awareness), To perceive or recognize." },
    { word: "Kinn.n", pronunciation: "KIN", definition: "Family, Clan, Blood-relation, Bonds of community, shared ancestry." },
    { word: "Knifrn.n", pronunciation: "KNEE-fur", definition: "Knife, Tool, small weapon, utility blade." },
    { word: "Knottrn.n", pronunciation: "NOHT-tur", definition: "Ball, Sphere, Knob (esp. on tree/wood), Round object, concentration of energy?." },
    { word: "Kvedv.v", pronunciation: "KVED", definition: "Speak, Recite, Utter (formally), Formal speech, recitation of lore/poetry/spells." },
    { word: "Kvistn.n", pronunciation: "KVIST", definition: "Branch, Twig, Part of the tree, connection, small path." },
    { word: "Kyln.n", pronunciation: "KEEL", definition: "Club, Cudgel, Simple blunt weapon." },
    { word: "Kynn.n", pronunciation: "KIN", definition: "Kind, Type, Race, Gender, Category, lineage, specific nature." },
    { word: "Kyrradj.adj", pronunciation: "KEER", definition: "Calm, Still, Quiet, Peaceful state, absence of movement/sound." },
    { word: "Lagn.n", pronunciation: "LAHG", definition: "Law, Lore, Natural Order, The rules of nature and spirit, destiny's pattern." },
    { word: "Laksn.n", pronunciation: "LAHKSS", definition: "Salmon, Spirit of resilience/return, life cycle, wisdom, key sustenance." },
    { word: "Landn.n", pronunciation: "LAND", definition: "Land, Territory, Specific area, domain, earth." },
    { word: "Langadj.adj", pronunciation: "LANG", definition: "Long (in space or time), Extended duration or distance." },
    { word: "Laukrn.n", pronunciation: "LOWK-ur (like 'ow' in cow)", definition: "Plant, Herb (esp. magical/medicinal), Earth's power, healing, poison." },
    { word: "Lækv.v", pronunciation: "LAKE", definition: "Heal, Cure, Restore health, mend wounds (physical or spiritual)." },
    { word: "Leggn.n", pronunciation: "LEG", definition: "Leg, Support, movement." },
    { word: "Leidadj./adv.", pronunciation: "LAYD", definition: "Loathsome, Hateful / Sorrowfully, Repulsive / With sadness." },
    { word: "Leitv.v", pronunciation: "LAYT", definition: "Seek, Look for, Actively search." },
    { word: "Likn.n", pronunciation: "LEEK", definition: "Body, Corpse, Physical form, esp. after death." },
    { word: "Litav.v", pronunciation: "LEE-tah", definition: "Look, Appear, Seem, Visual appearance, perceived nature." },
    { word: "Litiladj.adj", pronunciation: "LEE-til", definition: "Little, Small, Small size." },
    { word: "Ljosn.n", pronunciation: "LYOHS", definition: "Light (general, physical light), Illumination, opposite of darkness." },
    { word: "Lodn.n", pronunciation: "LOHD", definition: "Shaggy Growth, Moss?, Furry Covering, Natural covering, insulation, wildness." },
    { word: "Lokn./v.", pronunciation: "LOHK", definition: "End, Lock / To Close, Finish, Conclusion, barrier / Act of closing or ending." },
    { word: "Lomn.n", pronunciation: "LOHM", definition: "Pool, Still Water, Reflection, scrying, hidden depths." },
    { word: "Loptn.n", pronunciation: "LOHPT", definition: "Air, Sky, Loft, The space above, atmosphere." },
    { word: "Lunn.n", pronunciation: "LOON", definition: "Moon, Feminine power, cycles, hidden light, dreams." },
    { word: "Lyssv.v", pronunciation: "LEESS", definition: "Listen, Hearken, Active listening, paying attention to spirits or nature." },
    { word: "Magav.v", pronunciation: "MAH-gah", definition: "Be able, Have power to, Capability, strength to accomplish." },
    { word: "Makin.n", pronunciation: "MAH-kee", definition: "Mate, Spouse, Companion, Partner, close relationship." },
    { word: "Mannn.n", pronunciation: "MAHN", definition: "Person, Human, Mortal being." },
    { word: "Marv.v", pronunciation: "MAHR", definition: "Remember, Recall, Holding memory, echo of the past." },
    { word: "Mathn.n", pronunciation: "MAHTH (hard 'th' like 'thin')", definition: "Food, Sustenance, Life-giving energy, gift of the hunt/forest." },
    { word: "Maullv.v", pronunciation: "MOWL (like 'ow' in cow)", definition: "Speak, Murmur, Mutter, Low or indistinct speech." },
    { word: "Merkv./n.", pronunciation: "MERK", definition: "Silence, Darken, Extinguish / Darkness, Absence of sound/light, secrecy, ending." },
    { word: "Midprep./adj.", pronunciation: "MID", definition: "With, Among / Middle, Accompanied by / Central position." },
    { word: "Mikiladj.adj", pronunciation: "MEE-kil", definition: "Big, Great, Much, Large size or quantity." },
    { word: "Mjodn.n", pronunciation: "MYOHD", definition: "Mead, Fermented honey drink, associated with poetry/gods/ritual." },
    { word: "Mjoln.n", pronunciation: "MYOHL", definition: "Meal, Flour, Ground grain, basic foodstuff." },
    { word: "Modn.n", pronunciation: "MOHD", definition: "Mother, Ancestor (female), Female lineage, nurturing spirit, earth connection." },
    { word: "Mosn.n", pronunciation: "MOHSS", definition: "Moss, Soft ground cover, ancient, quiet growth." },
    { word: "Munnn.n", pronunciation: "MUN (like 'oo' in 'pull')", definition: "Mouth, Orifice for speech/eating, entrance." },
    { word: "Myrn.n", pronunciation: "MEER", definition: "Swamp, Bog, Mire, Wet, difficult terrain, place of preservation/decay." },
    { word: "Mælav.v", pronunciation: "MY-lah", definition: "Speak, Talk (general conversation), Communicate verbally." },
    { word: "Naeradj./adv./prep.", pronunciation: "NIGH-er (or NAIR)", definition: "Near, Close / Nearby / Near to, Proximity." },
    { word: "Nagln.n", pronunciation: "NAH-gul", definition: "Nail (finger/toe), Claw, Hard appendage, tool/weapon." },
    { word: "Namn.n", pronunciation: "NAHM", definition: "Taking, Seizing / Learning, Study, Act of acquiring / Acquiring knowledge." },
    { word: "Natn.n", pronunciation: "NAHT", definition: "Night, Time of mystery, spirits, dreams, danger." },
    { word: "Nautn.n", pronunciation: "NOWT (like 'ow' in cow)", definition: "Beast, Cattle, Valuables, Domesticated animal, measure of wealth, brute strength." },
    { word: "Norn.n", pronunciation: "NOR", definition: "North, Cold Direction, Place of ancestors, testing, starkness." },
    { word: "Nornn.n", pronunciation: "NORN", definition: "Fate, Weaver of Destiny, Specific entity or force controlling fate." },
    { word: "Nydn.n", pronunciation: "NEED", definition: "Need, Necessity, Distress, Requirement, hardship, constraint (related to Norn Urd?)." },
    { word: "Nyadj.adj", pronunciation: "NEE", definition: "New, Recent, fresh, young." },
    { word: "Odn.n", pronunciation: "OHD", definition: "Soul, Spirit-Energy, Inspiration, The animating force, ecstatic state, divine madness." },
    { word: "Orradj.adj", pronunciation: "OR", definition: "Scarred / Generous, Quick, Marked by wounds / Eager, swift to act or give." },
    { word: "Ospn.n", pronunciation: "OHSP", definition: "Aspen Tree, Trembling leaves, communication, shields." },
    { word: "Ostn.n", pronunciation: "OHST", definition: "East, Dawn Direction, Place of sunrise, beginnings, hope." },
    { word: "Othn.n", pronunciation: "OTHTH (hard 'th' like 'thin')", definition: "Fear, Dread, Shadow's touch, loss of spirit, primal terror." },
    { word: "Oxin.n", pronunciation: "OHK-see", definition: "Axe, Tool for chopping wood, weapon." },
    { word: "Pundn.n", pronunciation: "PUND (like 'oo' in 'pull')", definition: "Pound (weight), Enclosure, Measure / A pen or fold." },
    { word: "Radv.v", pronunciation: "RAHD", definition: "Advise, Interpret (runes/omens), Reading signs, giving counsel based on wisdom/divination." },
    { word: "Raddrn.n", pronunciation: "RAHD-dur", definition: "Voice (quality or sound itself), The sound produced when speaking." },
    { word: "Rafnn.n", pronunciation: "RAH-fun", definition: "Raven, Messenger, trickster, spirit of thought/memory." },
    { word: "Rakadj.adj", pronunciation: "RAHK", definition: "Straight, Direct, Unbending path or manner." },
    { word: "Rannn.n", pronunciation: "RAHN", definition: "House, Dwelling, Shelter, Place of belonging, protection." },
    { word: "Rannv.v", pronunciation: "RAHN", definition: "Run, Flow (water), Movement of liquids or rapid movement." },
    { word: "Raudadj.adj", pronunciation: "ROWD (like 'ow' in cow)", definition: "Red, Color of blood, fire, passion, danger." },
    { word: "Regnn.n", pronunciation: "REGEN (hard 'g')", definition: "Rain, Cleansing, life-giving water, sorrow." },
    { word: "Reimn.n", pronunciation: "RAYM", definition: "Ghost, Haunting Spirit (often malevolent), A restless or harmful spirit." },
    { word: "Reistv.v", pronunciation: "RAYST", definition: "Carve (esp. runes), To inscribe symbols, esp. with magical intent." },
    { word: "Rekv.v", pronunciation: "REK", definition: "Drive, Push, Drift, Force movement, be carried by current/wind." },
    { word: "Rettadj.adj", pronunciation: "RETT", definition: "Right, Correct, Just, Proper, according to law/lore." },
    { word: "Rikadj.adj", pronunciation: "REEK", definition: "Rich, Powerful, Mighty, Possessing wealth, authority, or strength." },
    { word: "Ripan.n", pronunciation: "REE-pah", definition: "Ridge, Edge (of mountain/cliff), High crest, border." },
    { word: "Ristn.n", pronunciation: "RIST", definition: "Instep, Back of Hand, Specific body parts." },
    { word: "Rodv.v", pronunciation: "ROHD", definition: "Row (a boat), Propel a vessel with oars." },
    { word: "Rokn.n", pronunciation: "ROHK", definition: "Fate, Doom (esp. twilight of gods/end of world), Ultimate destiny, cataclysmic end." },
    { word: "Rotn.n", pronunciation: "ROHT", definition: "Root, Foundation, connection to earth, ancestry, hidden strength." },
    { word: "Rotav.v", pronunciation: "ROH-tah", definition: "Rot, Decay, Process of decomposition, return to earth." },
    { word: "Runn.n", pronunciation: "ROON", definition: "Rune, Secret, Mystery, Carved symbol, hidden knowledge, magic." },
    { word: "Sadradj.adj", pronunciation: "SAH-dur", definition: "Sad, Grieved, Emotion of sorrow." },
    { word: "Sagan.n", pronunciation: "SAH-gah", definition: "Story, History, Saga, Narrative of past events, lore." },
    { word: "Saln.n", pronunciation: "SAHL", definition: "Hall, Sacred Enclosure, place of ritual or meeting." },
    { word: "Sam-Prefix", pronunciation: "SAHM-", definition: "Together, With, Jointly, Indicates combination or unity." },
    { word: "Sannadj.adj", pronunciation: "SAHN", definition: "True, Truthful, Accurate, conforming to reality/lore." },
    { word: "Sattn.n", pronunciation: "SAHT", definition: "Agreement, Peace Settlement, Concord, reconciliation." },
    { word: "Savn.n", pronunciation: "SAHV", definition: "Sap, Lifeblood of Trees, Vital essence of the forest, connection." },
    { word: "Seidn.n", pronunciation: "SAYD", definition: "Magic, Sorcery (esp. shamanic/spirit work), Manipulation of spirit energy, prophecy, trance work." },
    { word: "Shenpron./adj.", pronunciation: "SHEN", definition: "All, Everything, Totality, The whole, completion." },
    { word: "Shaelv.v", pronunciation: "SHAY-el", definition: "Whisper, Speak softly, Secret communication, wind's voice, spirit talk." },
    { word: "Shæln.n", pronunciation: "SHALE (rhymes with 'sail')", definition: "Tree (Sacred, specific individual), The individual living entity, revered." },
    { word: "Sjav.v", pronunciation: "SYAH", definition: "See, Perceive (physical or spiritual), Vision, understanding, foresight." },
    { word: "Sjukadj.adj", pronunciation: "SYOOK", definition: "Sick, Ill, Unwell, afflicted by disease (physical or spiritual)." },
    { word: "Skav.v", pronunciation: "SKAH", definition: "Shall, Must (indicating fate or necessity), Indicates inevitability or strong obligation." },
    { word: "Skadv.v/n.", pronunciation: "SKAHD", definition: "Harm, Injure / Injury, Damage, To cause hurt / The hurt caused." },
    { word: "Skaldn.n", pronunciation: "SKALDD", definition: "Poet, Storyteller (esp. keeper of lore), Bard, preserver of history and myth through verse." },
    { word: "Skaptv.v", pronunciation: "SKAHPT", definition: "Shape, Create, Destine, To form something, assign fate." },
    { word: "Skardn.n", pronunciation: "SKAHRD", definition: "Notch, Gap, Pass (in mountains), Cut, opening, way through." },
    { word: "Skeggn.n", pronunciation: "SKEG", definition: "Beard, Facial hair, symbol of age/status?." },
    { word: "Skinnn.n", pronunciation: "SKIN", definition: "Skin, Hide, Pelt / Skinwalker, Boundary of self, transformation disguise / Specific shapeshifting being." },
    { word: "Skjoldn.n", pronunciation: "SKYOHLD", definition: "Shield, Defensive implement, protection." },
    { word: "Skogn.n", pronunciation: "SKOHG", definition: "Wood, Grove (specific part of forest), Smaller section of the Grun, often with specific character." },
    { word: "Skoln.n", pronunciation: "SKOHL", definition: "Skull, Symbol of death, vessel of memory/spirit." },
    { word: "Skorv.v", pronunciation: "SKOR", definition: "Cut, Score, Carve (less formal than Reist), General cutting action." },
    { word: "Slakv.v", pronunciation: "SLAHKS", definition: "Slake, Quench (thirst/fire), Satisfy need for water, extinguish flames." },
    { word: "Sleipadj.adj", pronunciation: "SLAYP", definition: "Slippery, Smooth, Difficult to hold or stand on." },
    { word: "Slidrn.n", pronunciation: "SLEE-dur", definition: "Sheath, Scabbard, Holder for blade." },
    { word: "Snagav.v", pronunciation: "SNAH-gah", definition: "Bite, Gnaw, Attack with teeth." },
    { word: "Snærn.n", pronunciation: "SNIGH-er", definition: "Snow, Frozen precipitation, covering, silence." },
    { word: "Soln.n", pronunciation: "SOHL", definition: "Sun, Masculine power, life-force, clarity, passing of time." },
    { word: "Sorgn.n", pronunciation: "SORG", definition: "Sorrow, Grief, Deep sadness, mourning." },
    { word: "Spakadj.adj", pronunciation: "SPAHK", definition: "Wise, Calm, Gentle (wisdom through peace), Quiet wisdom, prophetic insight." },
    { word: "Sporn.n", pronunciation: "SPOR", definition: "Track, Trail, Footprint, Sign of passage, clue for hunting/following." },
    { word: "Stadn.n", pronunciation: "STAHD", definition: "Place, Stead, Location, Specific spot or area." },
    { word: "Stafn.n", pronunciation: "STAHF", definition: "Staff, Post, Rune Stave, Walking stick, support, symbol of authority, carrier of runes." },
    { word: "Steinn.n", pronunciation: "STAYN", definition: "Stone (variant of Karn, smaller or worked), Marker, tool-stone, boundary." },
    { word: "Stigrn.n", pronunciation: "STEE-gur", definition: "Path, Trail (narrower than Vak), Small way, track through woods." },
    { word: "Stillav.v", pronunciation: "STIL-lah", definition: "Still, Calm, Quiet, To make peaceful or silent." },
    { word: "Stjarnan.n", pronunciation: "STYAR-nah", definition: "Star, Celestial light, guide, destiny marker." },
    { word: "Stokkn.n", pronunciation: "STOHK", definition: "Log, Tree Trunk, Main body of a felled tree." },
    { word: "Storadj.adj", pronunciation: "STOR", definition: "Big, Large (variant of Mikil), Great size." },
    { word: "Strandn.n", pronunciation: "STRAND", definition: "Strand, Beach, Shore (variant of Fjara), Edge of water." },
    { word: "Straumn.n", pronunciation: "STROWm (like 'ow' in cow)", definition: "Stream, Current, Flowing water, energy flow." },
    { word: "Styrn.n", pronunciation: "STEER", definition: "Strength, Power, Force, Physical or spiritual might." },
    { word: "Sudrn.n", pronunciation: "SOOD-ur", definition: "South, Warm Direction, Place of warmth, growth, vitality." },
    { word: "Sulthn.n", pronunciation: "SULTH (like 'oo' in 'pull')", definition: "Hunger, Need, Craving, Physical hunger, spiritual longing, emptiness." },
    { word: "Sumarn.n", pronunciation: "SOO-mahr", definition: "Summer, Season of warmth and light." },
    { word: "Surtadj.adj", pronunciation: "SURT", definition: "Black, Dark (esp. related to fire/destruction), Sooty black, connected to fire giants/endings." },
    { word: "Svann.n", pronunciation: "SVAHN", definition: "Swan, Selkie (in bird form), Grace, transformation, messenger between worlds." },
    { word: "Svelgv.v", pronunciation: "SVELG", definition: "Swallow, Devour, Consume completely, overwhelm." },
    { word: "Sverðn.n", pronunciation: "SVERD", definition: "Sword, Weapon of war/status." },
    { word: "Svikn./v.", pronunciation: "SVEEK", definition: "Betrayal, Deceit / To Betray, Treachery / Act of treachery." },
    { word: "Svinn.n", pronunciation: "SVEEN", definition: "Swine, Boar, Wild pig, symbol of fertility/warrior spirit." },
    { word: "Synn./v.", pronunciation: "SEEN", definition: "Sight, Vision / To See, Appear, Perception / Act of seeing or manifesting." },
    { word: "Systirn.n", pronunciation: "SIS-teer", definition: "Sister, Female sibling, close female bond." },
    { word: "Sækjav.v", pronunciation: "SIGH-kyah", definition: "Seek, Attack, Visit, Go after, assault, go to see." },
    { word: "Særn.n", pronunciation: "SIGH-er", definition: "Sea (poetic/vast sense, variant of Hav), The great deep, mystery." },
    { word: "Söngrn.n", pronunciation: "SUNG-ur", definition: "Song, Singing, Musical expression, chant." },
    { word: "Takav.v", pronunciation: "TAH-kah", definition: "Take, Grasp, Receive, Act of acquiring or accepting." },
    { word: "Talln.n", pronunciation: "TAHL", definition: "Pine Tree, Evergreen, resilience, resinous." },
    { word: "Talnn.n", pronunciation: "TAHLN", definition: "Voice, Spoken Word, Communication, call, command." },
    { word: "Tannn.n", pronunciation: "TAHN", definition: "Tooth, Tusk, Weapon, tool, sign of predator/age." },
    { word: "Taran.n", pronunciation: "TAH-rah", definition: "Tear (from crying), Droplet of sorrow/strong emotion." },
    { word: "Thannpron.pron", pronunciation: "THAHN (hard 'th' like 'thin')", definition: "That one (demonstrative), Pointing to a specific object/person." },
    { word: "Thekkadj.adj", pronunciation: "THEKK (hard 'th' like 'thin')", definition: "Pleasant, Welcome, Agreeable, favorable." },
    { word: "Therradj.adj", pronunciation: "THERR (hard 'th' like 'thin')", definition: "Dry, Lacking moisture." },
    { word: "Thingn.n", pronunciation: "THING (hard 'th' like 'thin')", definition: "Assembly, Meeting, Council / Thing, Matter, Formal gathering / An entity or issue." },
    { word: "Thistilln.n", pronunciation: "THIS-til (hard 'th' like 'thin')", definition: "Thistle, Prickly plant, resilience, protection?." },
    { word: "Thokn.n", pronunciation: "THOHK (hard 'th' like 'thin')", definition: "Fog, Mist, Obscurity, hidden paths, spirit breath." },
    { word: "Tholn.n", pronunciation: "THOHL (hard 'th' like 'thin')", definition: "Death, The Dead, The state of being dead, or the collective deceased." },
    { word: "Thorpn.n", pronunciation: "THORP (hard 'th' like 'thin')", definition: "Village, Settlement (smaller than a Gard?), Small cluster of dwellings." },
    { word: "Thraelln.n", pronunciation: "THRALL (hard 'th' like 'thin')", definition: "Thrall, Slave, Servant, Bound person, servant (potentially spiritual)." },
    { word: "Thrakv.v", pronunciation: "THRAK (hard 'th' like 'thin')", definition: "Kill, Strike down, Violent ending, felling." },
    { word: "Throttn.n", pronunciation: "THROHTT (hard 'th' like 'thin')", definition: "Strength, Vigor, Stamina, Enduring power." },
    { word: "Thunn.n", pronunciation: "THUN (hard 'th', oo in pull)", definition: "Thunder, Sky's voice, power, omen." },
    { word: "Thungadj.adj", pronunciation: "THUNG (hard 'th', oo in pull)", definition: "Heavy, Weighty, burdensome, oppressive." },
    { word: "Thunnadj.adj", pronunciation: "THUN (hard 'th', oo in pull)", definition: "Thin, Narrow, slender, weak." },
    { word: "Thyrn.n", pronunciation: "THEER (hard 'th' like 'thin')", definition: "Thirst, Need for water/drink." },
    { word: "Tidn.n", pronunciation: "TEED", definition: "Time, Season, Tide, Passage of moments, specific period." },
    { word: "Timbrn.n", pronunciation: "TIM-bur", definition: "Timber, Wood (for building), Material for construction." },
    { word: "Tolkn.n", pronunciation: "TOHLK", definition: "Interpreter, Speaker (of languages/omens), One who translates or explains." },
    { word: "Traustn.n", pronunciation: "TROWST (like 'ow' in cow)", definition: "Trust, Confidence, Security, Faith in someone/something, feeling safe." },
    { word: "Treadv.v", pronunciation: "TRED", definition: "Walk, Step, Journey, Physical movement, spiritual path." },
    { word: "Trigadj.adj", pronunciation: "TRIG", definition: "Loyal, Faithful, True to oaths or bonds." },
    { word: "Trinnum.num", pronunciation: "TREEN", definition: "Three, Sacred Triad, Life-death-dream, mind-body-spirit, significant number." },
    { word: "Trolln.n", pronunciation: "TROHL", definition: "Troll, Malevolent Nature Spirit, Often large, dangerous being of the wilds." },
    { word: "Trun.n", pronunciation: "TROO", definition: "Faith, Belief (religious/spiritual), Strong conviction." },
    { word: "Tungan.n", pronunciation: "TUNG-gah (like 'oo' in 'pull')", definition: "Tongue / Language, Organ of speech / System of communication." },
    { word: "Tunnn.n", pronunciation: "TUN (like 'oo' in 'pull')", definition: "Tun, Barrel, Container for liquids." },
    { word: "Tvinnv.v", pronunciation: "TVIN", definition: "Twine, Weave together, Interlace threads or concepts." },
    { word: "Tynv.v", pronunciation: "TEEN", definition: "Lose, Misplace, suffer loss." },
    { word: "Ugln.n", pronunciation: "OO-gul", definition: "Owl, Nocturnal bird, wisdom, omen-bearer, silent flight." },
    { word: "Ulfn.n", pronunciation: "ULF (like 'oo' in 'pull')", definition: "Wolf (variant of Warg, more natural/less monstrous), Pack animal, hunter, wild spirit." },
    { word: "Ulthn.n", pronunciation: "ULTH (like 'oo' in 'pull')", definition: "Shadow, Veil, Mystery, Obscurity, hidden things, the unknown." },
    { word: "Un-Prefix", pronunciation: "UN-", definition: "Negation, Reversal, Un-, Reverses or negates the root word." },
    { word: "Unnrn.n", pronunciation: "UN-nur (like 'oo' in 'pull')", definition: "Wave (of water), Movement on water surface, cyclical force." },
    { word: "Unvalnum./adj.", pronunciation: "UN-vahl", definition: "Many, Countless, Innumerable, beyond measure." },
    { word: "Uppadv./prep.", pronunciation: "UP", definition: "Up, Upwards / Upon, Direction towards sky / On top of." },
    { word: "Urn.n", pronunciation: "OOR", definition: "Water, Rain (esp. primal/ancient water), Source of life, chaos, deep origins." },
    { word: "Utanprep./adv.", pronunciation: "OO-tahn", definition: "Outside, Beyond, External, in the wilderness, exiled." },
    { word: "Utlagn.n", pronunciation: "OOT-lahg", definition: "Outlaw, Person exiled from community/law." },
    { word: "Vaenadj.adj", pronunciation: "VIGHN (or VAIN)", definition: "Beautiful, Fair, Pleasing appearance (can be deceptive)." },
    { word: "Vaeradj.adj", pronunciation: "VIGH-er (or VAIR)", definition: "Wary, Cautious, Alert to danger, careful." },
    { word: "Vaetrn.n", pronunciation: "VIGH-tur (or VAIR-tur)", definition: "Being, Creature, Spirit (esp. nature spirit), General term for an entity, often supernatural." },
    { word: "Vaidv.v", pronunciation: "VIGHD (or VAID)", definition: "Hunt, Track, Pursue, Seek prey (for sustenance or ritual)." },
    { word: "Vakv.v/n.", pronunciation: "VAHK", definition: "Move, Travel / Path, Trail, Physical motion, journey / The way forward." },
    { word: "Vakav.v", pronunciation: "VAH-kah", definition: "Wake, Be awake, Watch over, Emerge from sleep, guard." },
    { word: "Valn.n", pronunciation: "VAHL", definition: "The Slain (esp. in battle), Choice, Those killed / Act of choosing." },
    { word: "Vamban.n", pronunciation: "VAHM-bah", definition: "Belly, Womb, Center of body, place of gestation." },
    { word: "Vannv.v", pronunciation: "VAHN", definition: "Lack, Be without, Missing something needed." },
    { word: "Vargn.n", pronunciation: "VARG", definition: "Wolf (monstrous/dire wolf), Destructive Beast, Predatory spirit, embodiment of destruction." },
    { word: "Vargrn.n", pronunciation: "VAR-gur", definition: "Wolf (poetic/mythic, variant of Warg/Ulf), Outlaw, Great wolf, dangerous outcast." },
    { word: "Varnn.n", pronunciation: "VARN", definition: "Warning, Sign, Omen, A signal of danger or future events." },
    { word: "Varmadj.adj", pronunciation: "VARM", definition: "Warm, Having heat, comforting, sign of life." },
    { word: "Varpv.v", pronunciation: "VARP", definition: "Cast, Throw (esp. net/stones), Specific type of throwing action." },
    { word: "Vatnn.n", pronunciation: "VAHT-un", definition: "Water, Lake, Body of water, source of life, reflection." },
    { word: "Vaxav.v", pronunciation: "VAHK-sah", definition: "Grow, Increase, Develop, become larger." },
    { word: "Vedrn.n", pronunciation: "VED-ur", definition: "Weather, Atmospheric conditions." },
    { word: "Vefav.v", pronunciation: "VEH-fah", definition: "Weave, Create fabric, interlace threads (literal or metaphorical - fate)." },
    { word: "Veggn.n", pronunciation: "VEG", definition: "Wall (of building/enclosure), Barrier, side of structure." },
    { word: "Vekv.v", pronunciation: "VEK", definition: "Awaken (someone else), Arouse, Cause to wake up." },
    { word: "Veladv.adv", pronunciation: "VEL", definition: "Well, Good, In a good manner." },
    { word: "Venv.v/n.", pronunciation: "VEN", definition: "Consume, Devour / Deer, Prey, To eat/overwhelm / The hunted." },
    { word: "Vetrn.n", pronunciation: "VEH-tur", definition: "Winter, Cold season, time of dormancy/death." },
    { word: "Vethnum./adj.", pronunciation: "VETH (soft 'th' like 'this')", definition: "One, Unity, Alone, Single entity, wholeness." },
    { word: "Vexn.n", pronunciation: "VEKS", definition: "Plant, Herb (general term, variant of Laukr), General vegetation." },
    { word: "Vidprep./adv.", pronunciation: "VID / VEED", definition: "Against, Towards, At / Wide, Opposition / Broad extent." },
    { word: "Viln.n/v.", pronunciation: "VIL", definition: "Will, Desire / To Wish, Want, Intention / Act of desiring." },
    { word: "Villan.n/v.", pronunciation: "VIL-lah", definition: "Error, Delusion, Wildness / To Go astray, Err, Mistake, straying from path (literal/moral)." },
    { word: "Vinn.n", pronunciation: "VEEN", definition: "Friend, Ally, trusted companion." },
    { word: "Vindn.n", pronunciation: "VIND", definition: "Wind, Breath of the Forest, Movement, messenger, spirit's passage." },
    { word: "Vingn.n", pronunciation: "VING", definition: "Wing, Appendage for flight." },
    { word: "Virdv.v", pronunciation: "VEERD", definition: "Value, Esteem, Appraise, Assess worth, hold in regard." },
    { word: "Vissadj.adj", pronunciation: "VISS", definition: "Certain, Sure, Known, Confident, undoubtedly true." },
    { word: "Vitn.n", pronunciation: "VIT", definition: "Sense, Wit, Intellect, Knowledge, Mental faculty, understanding." },
    { word: "Vithv.v", pronunciation: "VITH (soft 'th' like 'this')", definition: "Know (deeply), Understand (wisdom), Innate knowledge, spiritual insight, wisdom." },
    { word: "Völlrn.n", pronunciation: "VOHL-ur", definition: "Field, Plain, Open Ground, Cleared land, battlefield?." },
    { word: "Vónn.n", pronunciation: "VOHN", definition: "Hope, Expectation, Anticipation of good." },
    { word: "Vordn.n", pronunciation: "VORD", definition: "Guardian, Warden, Watcher, Protector spirit or being." },
    { word: "Vrán.n", pronunciation: "VRAH", definition: "Corner, Nook, Isolated Place, Secluded spot." },
    { word: "Vredadj.adj", pronunciation: "VRAYD", definition: "Wrathful, Angry, Full of anger." },
    { word: "Wargn.n", pronunciation: "WARG", definition: "Wolf (monstrous/dire wolf), Destructive Beast, Predatory spirit, embodiment of destruction." },
    { word: "Wyrn.n", pronunciation: "WEER", definition: "Fate, Destiny (personal/thread aspect), Individual destiny, the thread spun by Norns." },
    { word: "Yewn.n", pronunciation: "YOO", definition: "Yew Tree, Association with death, rebirth, eternity, potent magic." },
    { word: "Yfirprep./adv.", pronunciation: "EE-feer", definition: "Over, Above, Across, Position higher than or spanning." },
    { word: "Ylav.v", pronunciation: "EE-lah", definition: "Howl (wolf/wind), Long, wailing cry." },
    { word: "Ytav.v", pronunciation: "EE-tah", definition: "Push, Shove, Apply force to move something." },
    { word: "Æfin.n", pronunciation: "EYE-fee", definition: "Lifetime, Age, Era, Span of existence." },
    { word: "Ægirn.n", pronunciation: "EYE-geer", definition: "Sea, Ocean (often personified as sea giant/god), The power of the sea itself." },
    { word: "Æskan.n", pronunciation: "EYE-skah", definition: "Youth, Period of being young." },
    { word: "Ættn.n", pronunciation: "EYETT", definition: "Family, Lineage, Clan (broader than Kin), Ancestral line, tribe." },
    { word: "Ørnn.n", pronunciation: "URN", definition: "Eagle (variant of Arn), Bird of prey, sky spirit." },
    { word: "Øxn.n", pronunciation: "URKS", definition: "Axe (variant of Oxi), Tool/weapon." }
];


// --- 2. Lesson Structure ---
// Define the sequence of lessons and activities here
const lessons = [
    {
        title: "Lesson 1: Sky and Earth", // Tree-Speak: Corrected title
        activities: [
            {
                type: 'lesson',
                data: {
                    content: `
                        <p>Welcome to your first Tree-Speak lesson! We'll start with some fundamental words related to the natural world.</p>
                        <p>The spirit of the sky is represented by the <span class="vocab-word">Arnn</span> (Eagle). The solid foundation of the world is the <span class="vocab-word">Landn</span>.</p>
                        <p>Look up to the <span class="vocab-word">Loptn</span> (Air/Sky) and see the <span class="vocab-word">Soln</span> (Sun) and the <span class="vocab-word">Lunn</span> (Moon).</p>
                        <p>Below you is the <span class="vocab-word">Vatnn</span> (Water/Lake). Feel the <span class="vocab-word">Vindn</span> (Wind).</p>
                        <p>These are some basic nouns to get you started!</p>
                        <h4>Vocabulary for this lesson:</h4>
                         <ul>
                            <li>Arnn (Eagle)</li>
                            <li>Landn (Land)</li>
                            <li>Loptn (Air/Sky)</li>
                            <li>Soln (Sun)</li>
                            <li>Lunn (Moon)</li>
                            <li>Vatnn (Water/Lake)</li>
                            <li>Vindn (Wind)</li>
                         </ul>
                    `
                }
            },
            {
                type: 'multiple-choice',
                data: {
                    // List the *words* (keys) from allVocabularyData relevant to this quiz
                    words: ["Arnn.n", "Landn.n", "Loptn.n", "Soln.n", "Lunn.n", "Vatnn.n", "Vindn.n"],
                    questionsToShow: 5 // How many MC questions in this activity
                }
            },
            {
                 type: 'flashcard',
                 data: {
                     // List the *words* (keys) for flashcards in this activity
                     words: ["Arnn.n", "Landn.n", "Loptn.n", "Soln.n", "Lunn.n", "Vatnn.n", "Vindn.n"]
                 }
            },
             {
                 type: 'matching',
                 data: {
                     // List the *words* (keys) for the matching game in this activity
                     words: ["Arnn.n", "Landn.n", "Loptn.n", "Soln.n", "Lunn.n", "Vatnn.n", "Vindn.n"]
                 }
            }
        ]
    },
    // --- Add More Lessons Here ---
    /*
    {
        title: "Lesson 2: Creatures (Tree-Speak)", // Example for next lesson
        activities: [
            {
                type: 'lesson',
                data: {
                    content: "<p>Let's learn about some creatures...</p>"
                }
            },
            {
                type: 'multiple-choice',
                 data: {
                     words: ["Ulfn.n", "Rafnn.n", "Svinn.n", "Elkn.n"],
                     questionsToShow: 3
                 }
            }
            // Add other activities for Lesson 2 here
        ]
    },
    */
    // --- End of Lessons ---
];


// --- 3. State Variables ---
let currentLessonIndex = 0;
let currentActivityIndex = 0;
let currentActivityData = null; // Holds the data for the current activity

// --- Variables for Multiple Choice Quiz State ---
let currentMultipleChoiceQuestions = []; // Array of questions generated for the current MC activity
let currentMultipleChoiceQuestionIndex = 0;
let currentMCQuestionData = null;

// --- Grading Variables ---
let currentActivityScore = 0;
let currentActivityTotalQuestions = 0;


// --- Variables for Flashcard State ---
let flashcardWords = []; // Vocab for current flashcard activity
let currentFlashcardIndex = 0;
// let flashcardFlipped = false; // No longer strictly needed if relying purely on CSS

// --- Variables for Matching State ---
let matchingPairs = []; // Pairs for the current matching game
let revealedCards = []; // Track cards flipped in matching
let matchesFound = 0; // Track matches in matching game
let matchingVocabSource = []; // Vocab for current matching game


// --- 4. Get HTML Elements ---
// Main sections
const vocabularySection = document.getElementById('vocabulary-section'); // Full list section
const lessonSection = document.getElementById('lesson-section'); // Lesson content section
const quizSection = document.getElementById('quiz-section'); // Multiple Choice Quiz section
const flashcardSection = document.getElementById('flashcard-section'); // Flashcard section
const matchingSection = document.getElementById('matching-section'); // Matching section
const completionSection = document.getElementById('completion-section'); // Section shown after all lessons

// Lesson Elements
const lessonTitleElement = document.getElementById('lesson-title');
const lessonContentElement = document.getElementById('lesson-content');
const startActivityButton = document.getElementById('start-activity-button'); // Updated Button ID

// Multiple Choice Quiz Elements
const mcQuestionWordElement = document.getElementById('mc-question-word'); // Updated ID
const mcAnswerButtonsElement = document.getElementById('mc-answer-buttons'); // Updated ID
const mcFeedbackElement = document.getElementById('mc-feedback'); // Updated ID
const nextMcQuestionButton = document.getElementById('next-mc-question-button'); // Updated ID
const mcScoreDisplay = document.getElementById('mc-score-display'); // Score display element

// Flashcard Elements
const flashcardContainer = document.getElementById('flashcard-container');
const flashcardWord = document.getElementById('flashcard-word');
const flashcardDefinition = document.getElementById('flashcard-definition');
const nextFlashcardButton = document.getElementById('next-flashcard-button');
const flashcardProgressDisplay = document.getElementById('flashcard-progress-display'); // Progress display element

// Matching Game Elements
const matchingGrid = document.getElementById('matching-grid');
const nextMatchingButton = document.getElementById('next-matching-button');
const matchingProgressDisplay = document.getElementById('matching-progress-display'); // Progress display element


// Navigation/Flow Buttons
const nextActivityButton = document.getElementById('next-activity-button'); // Button shown after an activity is done
const nextLessonButton = document.getElementById('next-lesson-button'); // Button shown after a lesson is done


// --- 5. Helper Functions ---

// Function to get full vocabulary objects for a given list of word keys
function getVocabObjectsForKeys(wordKeys) {
    // Filter the full list to get only the objects whose 'word' matches one in wordKeys
    // Using find ensures we get the full object, not just the key
    return wordKeys.map(key => allVocabularyData.find(item => item.word === key)).filter(item => item !== undefined);
}

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array]; // Create a copy to avoid modifying the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled; // Return the shuffled copy
}

// Function to hide all main activity sections and then show a specific one
function showSection(sectionId) {
    // Hide all potential content sections first
    vocabularySection.style.display = 'none';
    lessonSection.style.display = 'none';
    quizSection.style.display = 'none';
    flashcardSection.style.display = 'none';
    matchingSection.style.display = 'none';
    completionSection.style.display = 'none'; // Hide completion message

    // Hide activity-specific navigation/flow buttons explicitly when switching sections
    // (These are often managed by individual activity start/end logic, but hiding them here adds safety)
     startActivityButton.style.display = 'none';
     nextMcQuestionButton.style.display = 'none';
     nextFlashcardButton.style.display = 'none';
     nextMatchingButton.style.display = 'none';
     nextActivityButton.style.display = 'none'; // Ensure this is hidden when loading a *new* activity type
     nextLessonButton.style.display = 'none'; // Ensure this is hidden when loading a *new* activity type


    // Show the requested section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
        // Handle error - maybe show a default view or error message
    }
}


// --- 6. State & Flow Management ---

// Function to load and display a specific activity within a lesson
function loadActivity(lessonIndex, activityIndex) {
    console.log(`Loading Lesson ${lessonIndex}, Activity ${activityIndex}`); // Debugging log

    // Check if lesson index is valid
    if (lessonIndex >= lessons.length) {
        // End of all lessons/course
        showCompletion();
        return;
    }

    const lesson = lessons[lessonIndex];

    // Check if activity index is valid within the current lesson
    if (activityIndex >= lesson.activities.length) {
        // End of activities for this lesson, move to the next lesson
        loadActivity(lessonIndex + 1, 0); // Load the first activity of the next lesson
        return;
    }

    // Update state variables
    currentLessonIndex = lessonIndex;
    currentActivityIndex = activityIndex;
    currentActivityData = lesson.activities[activityIndex].data;
    const activityType = lesson.activities[activityIndex].type;

    hideAllSections(); // Hide whatever was showing before

    // Load the specific activity based on its type
    switch (activityType) {
        case 'lesson':
            displayLessonContent(currentActivityData.content);
            break;
        case 'multiple-choice':
            // Need at least 4 words to make a meaningful MC quiz (1 correct + 3 distractors)
             if (!currentActivityData.words || currentActivityData.words.length < 4) {
                 console.error(`Activity ${activityIndex} in Lesson ${lessonIndex} is MC but doesn't have enough words.`);
                 // Skip this activity and move to the next
                 endActivity();
                 return;
             }
             // Get the actual vocab objects for the words specified in the lesson data
            const mcVocab = getVocabObjectsForKeys(currentActivityData.words);
            if (mcVocab.length < 4) { // Double check after getting objects
                 console.error(`Activity ${activityIndex} in Lesson ${lessonIndex} is MC but listed word keys resulted in less than 4 vocab objects.`);
                 endActivity();
                 return;
             }
            startMultipleChoiceQuiz(mcVocab, currentActivityData.questionsToShow);
            break;
        case 'flashcard':
            // Need at least 1 word for flashcards
             if (!currentActivityData.words || currentActivityData.words.length < 1) {
                 console.error(`Activity ${activityIndex} in Lesson ${lessonIndex} is Flashcard but has no words.`);
                 endActivity();
                 return;
             }
            const flashcardVocab = getVocabObjectsForKeys(currentActivityData.words);
             if (flashcardVocab.length < 1) {
                 console.error(`Activity ${activityIndex} in Lesson ${lessonIndex} is Flashcard but listed word keys resulted in no vocab objects.`);
                 endActivity();
                 return;
             }
            startFlashcards(flashcardVocab);
            break;
        case 'matching':
             // Need at least 2 words for matching (to form 1 pair)
             if (!currentActivityData.words || currentActivityData.words.length < 2) {
                 console.error(`Activity ${activityIndex} in Lesson ${lessonIndex} is Matching but doesn't have enough words.`);
                 endActivity();
                 return;
             }
             const matchingVocab = getVocabObjectsForKeys(currentActivityData.words);
              if (matchingVocab.length < 2) {
                 console.error(`Activity ${activityIndex} in Lesson ${lessonIndex} is Matching but listed word keys resulted in less than 2 vocab objects.`);
                 endActivity();
                 return;
             }
            startMatchingGame(matchingVocab);
            break;
        // case 'final-exam': // Add logic for final exam later
        //     startFinalExam();
        //     break;
        default:
            console.error(`Unknown activity type: ${activityType}`);
            // Skip this activity
            endActivity();
    }
}

// Function to display lesson content
function displayLessonContent(contentHTML) {
    lessonTitleElement.innerText = lessons[currentLessonIndex].title; // Display lesson title
    lessonContentElement.innerHTML = contentHTML; // Set the content
    showSection('lesson-section'); // Show the lesson section

    // Configure the button to start the next activity
    startActivityButton.innerText = "Start Activity"; // Generic text
    startActivityButton.style.display = 'block'; // Show the start activity button
}

// Function called when an activity is completed
function endActivity() {
    console.log(`Ending Activity ${currentActivityIndex} in Lesson ${currentLessonIndex}`); // Debugging log
    // This function determines whether to go to the next activity in the current lesson
    // or move to the next lesson or finish the course.

     // Hide activity-specific navigation buttons from the completed activity
     // (These should ideally be hidden by the activity logic itself before calling endActivity,
     // but hiding them here adds safety)
     startActivityButton.style.display = 'none'; // Should be off if coming from activity
     nextMcQuestionButton.style.display = 'none';
     nextFlashcardButton.style.display = 'none';
     nextMatchingButton.style.display = 'none';


    // Check if there's a next activity in the current lesson
    const nextActivityIndex = currentActivityIndex + 1;
    if (nextActivityIndex < lessons[currentLessonIndex].activities.length) {
        // There is a next activity, show button to go to it
        nextActivityButton.innerText = `Go to Next Activity`; // Could be more specific like "Go to Quiz"
        nextActivityButton.style.display = 'block';
        // Event listener is already attached to nextActivityButton below
    } else {
        // No more activities in this lesson, check for next lesson
        const nextLessonIndex = currentLessonIndex + 1;
        if (nextLessonIndex < lessons.length) {
            // There is a next lesson, show button to go to it
            nextLessonButton.innerText = `Go to ${lessons[nextLessonIndex].title}`;
            nextLessonButton.style.display = 'block';
             // Event listener is already attached to nextLessonButton below
        } else {
            // End of all lessons
            showCompletion();
        }
        // Hide next activity button if it was shown
        nextActivityButton.style.display = 'none';
    }

    // Optional: Display a "Activity Complete" message briefly before transition
    // Can be added to a common area or the specific activity area before it's hidden
}

// Function to show the course completion screen
function showCompletion() {
     hideAllSections(); // Hide everything else
     completionSection.style.display = 'block';
     // TODO: Calculate and display final overall score here if grading is implemented across activities
     // Example: document.getElementById('final-score').innerText = "Your Final Score: ...";
}


// --- 7. Multiple Choice Quiz Logic (Integrated with Grading) ---

// Function to start a new MC quiz activity
function startMultipleChoiceQuiz(vocabForQuiz, questionsToShow) {
    console.log("Starting Multiple Choice Quiz..."); // Debugging log
    currentMultipleChoiceQuestions = [];
    currentMultipleChoiceQuestionIndex = 0;
    currentActivityScore = 0; // Reset score for this activity

     // Validate data and number of questions
    if (!vocabForQuiz || vocabForQuiz.length < 4 || questionsToShow <= 0) {
        console.error("Insufficient data or question count for Multiple Choice.");
         mcScoreDisplay.innerText = "Cannot start quiz: Not enough words."; // Display error
        endActivity(); // End the activity if it can't run
        return;
    }

    // Ensure we don't ask for more questions than unique words available for questions
    const actualQuestionsToGenerate = Math.min(questionsToShow, vocabForQuiz.length);
    // currentActivityTotalQuestions is now tracked by the generated array length below


    const usedWords = new Set();

    while(currentMultipleChoiceQuestions.length < actualQuestionsToGenerate) {
         const questionItem = vocabForQuiz[Math.floor(Math.random() * vocabForQuiz.length)];

         // Only generate a question for this word if it hasn't been used yet
         if (!usedWords.has(questionItem.word)) {
             const correctAnswer = questionItem.definition;
             const questionWord = questionItem.word;

             // Generate 3 unique distractors from the SAME vocabForQuiz list
             const distractors = new Set();
             const numberOfDistractors = 3; // Keep 3 distractors

             // Keep picking random definitions from vocabSource until we have enough unique distractors
             while (distractors.size < numberOfDistractors) {
                 const randomItem = vocabForQuiz[Math.floor(Math.random() * vocabForQuiz.length)];
                 const distractorDefinition = randomItem.definition;
                 // Ensure the distractor is not the correct answer and not already added to the set
                 if (distractorDefinition !== correctAnswer && !distractors.has(distractorDefinition)) {
                     distractors.add(distractorDefinition);
                 }
             }

             // Combine correct and incorrect answers and shuffle them
             const options = [correctAnswer, ...distractors];
             const shuffledOptions = shuffleArray(options); // Use the helper shuffle

             // Store the generated question
             currentMultipleChoiceQuestions.push({
                 word: questionWord,
                 pronunciation: questionItem.pronunciation, // Store pronunciation too for display
                 correctAnswer: correctAnswer,
                 options: shuffledOptions
             });

             usedWords.add(questionWord); // Mark this word as used for a question
         }
    }

    // After generating, update the total questions based on how many were actually created
     currentActivityTotalQuestions = currentMultipleChoiceQuestions.length;


    showSection('quiz-section'); // Show the quiz section HTML

     // Display initial score/progress
     updateMultipleChoiceScoreDisplay();


     // Hide next button initially
     nextMcQuestionButton.style.display = 'none';

     mcFeedbackElement.innerText = ''; // Clear feedback
     mcFeedbackElement.className = ''; // Clear feedback classes


    // Display the first question
    displayMultipleChoiceQuestion();
}


// Function to display the current MC question
function displayMultipleChoiceQuestion() {
    // Get the data for the current question
    currentMCQuestionData = currentMultipleChoiceQuestions[currentMultipleChoiceQuestionIndex];

    // Update the question word display
     mcQuestionWordElement.innerHTML = `${currentMCQuestionData.word} <span class="pronunciation">(${currentMCQuestionData.pronunciation})</span>`;


    // Clear previous buttons
    mcAnswerButtonsElement.innerHTML = '';

    // Create buttons for each option
    currentMCQuestionData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option; // The button text is the definition
        button.classList.add('answer-button'); // Add a class for styling
        // Add a click listener that calls checkMultipleChoiceAnswer with the selected definition text
        button.addEventListener('click', () => checkMultipleChoiceAnswer(option));
        mcAnswerButtonsElement.appendChild(button); // Add the button to the HTML
    });

    // Clear feedback and hide next button for this question
    mcFeedbackElement.innerText = '';
    mcFeedbackElement.className = '';
    nextMcQuestionButton.style.display = 'none';
    nextActivityButton.style.display = 'none'; // Ensure next activity button is hidden


     // Update score display (shows current question number)
     updateMultipleChoiceScoreDisplay();
}

// Function to check the selected MC answer
function checkMultipleChoiceAnswer(selectedDefinition) {
    const buttons = mcAnswerButtonsElement.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true; // Disable all buttons

        // Add visual feedback
        if (button.innerText === currentMCQuestionData.correctAnswer) {
            // This button is the correct one
            button.style.backgroundColor = '#d4edda';
            button.style.borderColor = '#28a745';
            button.style.fontWeight = 'bold';
        } else if (button.innerText === selectedDefinition) {
             // This button is the one the user clicked AND it's incorrect
             button.style.backgroundColor = '#f8d7da';
             button.style.borderColor = '#dc3545';
        }
         // For incorrect buttons that weren't clicked, they just remain disabled/default styled
    });


    // Display overall feedback message
    if (selectedDefinition === currentMCQuestionData.correctAnswer) {
        mcFeedbackElement.innerText = 'Correct!';
        mcFeedbackElement.classList.add('correct'); // Add class for green text
        currentActivityScore++; // Increment score
    } else {
        mcFeedbackElement.innerText = `Incorrect. The correct answer was: ${currentMCQuestionData.correctAnswer}`;
        mcFeedbackElement.classList.add('incorrect'); // Add class for red text
    }


    // Update score display (shows current score)
    updateMultipleChoiceScoreDisplay();


    // Determine what button to show next (based on whether more questions are left)
    if (currentMultipleChoiceQuestionIndex < currentMultipleChoiceQuestions.length - 1) {
         // More questions left in this MC activity
         nextMcQuestionButton.innerText = 'Next Question';
         nextMcQuestionButton.style.display = 'block'; // Show the next question button
    } else {
         // MC Activity finished
         mcFeedbackElement.innerText += " Multiple Choice Activity Complete!";

         // Calculate and display final score for this activity
         const percentage = (currentActivityScore / currentActivityTotalQuestions) * 100;
         mcScoreDisplay.innerText = `Final Score: ${currentActivityScore} / ${currentActivityTotalQuestions} (${percentage.toFixed(0)}%)`;

         nextMcQuestionButton.style.display = 'none'; // Hide the next question button
         endActivity(); // Call endActivity to determine next step (next activity or next lesson)
    }
}

// Function to load the next MC question (called by nextMcQuestionButton click)
function nextMultipleChoiceQuestion() {
    console.log("Moving to next MC question..."); // Debugging log
    // Increment the question index
    currentMultipleChoiceQuestionIndex++;

     // Reset button styles from the previous question are done inside displayQuestion now
     // Clear feedback and hide next button itself are done inside displayQuestion now

    // Display the next question
    displayMultipleChoiceQuestion();
}

// Function to update the MC score/progress display HTML
function updateMultipleChoiceScoreDisplay() {
    // Only display if total questions is set (i.e., quiz has started)
    if (currentActivityTotalQuestions > 0) {
         // Display score and current question number
        mcScoreDisplay.innerText = `Score: ${currentActivityScore} / ${currentMultipleChoiceQuestions.length} (Question ${currentMultipleChoiceQuestionIndex + 1} of ${currentMultipleChoiceQuestions.length})`;
    } else {
        mcScoreDisplay.innerText = ''; // Hide score if quiz hasn't started or data is bad
    }
}


// --- 8. Flashcard Logic ---

let flashcardWords = []; // Vocab for current flashcard activity
let currentFlashcardIndex = 0;
// let flashcardFlipped = false; // No longer strictly needed if relying purely on CSS


function startFlashcards(vocabForFlashcards) {
    console.log("Starting Flashcard activity...", vocabForFlashcards);
     flashcardWords = shuffleArray(vocabForFlashcards); // Shuffle words for flashcards
     currentFlashcardIndex = 0;
     // flashcardFlipped = false; // No longer needed
     updateFlashcardProgressDisplay(); // Show initial progress

     // Clear card content before showing section to avoid flicker of previous content
     flashcardWord.innerText = 'Loading...';
     flashcardDefinition.innerText = 'Loading...';
     flashcardContainer.classList.remove('flipped'); // Ensure starts unflipped


    showSection('flashcard-section'); // Show the flashcard section HTML
    displayFlashcard(); // Display the first card
}

// Function to display the current flashcard
function displayFlashcard() {
    if (currentFlashcardIndex < flashcardWords.length) {
        const card = flashcardWords[currentFlashcardIndex];

        // --- IMPORTANT: Populate BOTH sides ---
        // Use innerHTML for word side in case pronunciation span is included
        flashcardWord.innerHTML = `${card.word} <span class="pronunciation">(${card.pronunciation})</span>`;
        // Use innerText for definition side to avoid rendering HTML inside definition
        flashcardDefinition.innerText = card.definition;

        // --- Ensure the card starts in the unflipped state ---
        flashcardContainer.classList.remove('flipped');


        // --- Update Progress Display ---
        updateFlashcardProgressDisplay();


        // Configure next card button
        nextFlashcardButton.innerText = 'Next Card';
        nextFlashcardButton.style.display = 'block'; // Show next card button
        nextActivityButton.style.display = 'none'; // Hide next activity button


    } else {
        // Flashcard activity finished
        console.log("Flashcard Activity Complete!");
        // Display a completion message on the card itself
        flashcardWord.innerText = "Activity Complete!";
        flashcardWord.style.fontSize = '1.5em'; // Adjust font size for completion text
        flashcardWord.style.fontWeight = 'bold';

        flashcardDefinition.innerText = ""; // Clear definition side
        flashcardContainer.classList.remove('flipped'); // Ensure card is unflipped at the end

        // Hide buttons and show progress/completion state
        updateFlashcardProgressDisplay(true); // Show completion message
        nextFlashcardButton.style.display = 'none'; // Hide next card button
        endActivity(); // Move to the next activity/lesson
    }
}

// Function to flip the flashcard (called by clicking flashcardContainer)
function flipFlashcard() {
     // Check if the activity is already completed before allowing flip
     if (currentFlashcardIndex >= flashcardWords.length) {
         return; // Don't flip if the activity is over
     }

    // Toggle the 'flipped' class on the main container to trigger the CSS animation
    flashcardContainer.classList.toggle('flipped');

    // No need to manually toggle display: none if using backface-visibility CSS
    console.log("Flashcard flipped class toggled."); // Optional: for debugging
}

// Function to go to the next flashcard (called by nextFlashcardButton click)
function nextFlashcard() {
    console.log("Moving to next Flashcard..."); // Debugging log
     currentFlashcardIndex++;
     // Ensure the card starts unflipped for the next word - Handled in displayFlashcard
     displayFlashcard(); // Display the next card
}

// Function to update Flashcard progress display
function updateFlashcardProgressDisplay(isComplete = false) {
    const totalCards = flashcardWords.length;
    if (totalCards > 0 && !isComplete) {
         flashcardProgressDisplay.innerText = `Card ${currentFlashcardIndex + 1} of ${totalCards}`;
    } else if (isComplete) {
        flashcardProgressDisplay.innerText = "Flashcard Activity Complete!";
         flashcardProgressDisplay.style.fontWeight = 'bold'; // Make completion message bold
         flashcardProgressDisplay.style.color = '#2e7d32'; // Green color for completion
    }
    else {
        flashcardProgressDisplay.innerText = ''; // Hide if no cards loaded
    }
}


// --- 9. Matching Game Logic (Placeholder) ---

// Function to start a new Matching Game activity
function startMatchingGame(vocabForMatching) {
    console.log("Starting Matching Game activity...", vocabForMatching);
    matchingGrid.innerHTML = ''; // Clear previous grid

    // Store vocab source for this activity if needed for reveal logic
    matchingVocabSource = vocabForMatching;

    // Create pairs: each word and its definition
    matchingPairs = [];
    matchingVocabSource.forEach(item => {
        matchingPairs.push({ type: 'word', text: item.word, pairId: item.word, pronunciation: item.pronunciation });
        matchingPairs.push({ type: 'definition', text: item.definition, pairId: item.word });
    });

    matchingPairs = shuffleArray(matchingPairs); // Shuffle all cards

    revealedCards = []; // Reset revealed cards
    matchesFound = 0; // Reset matches counter
    updateMatchingProgressDisplay(); // Show initial progress

    // Create card elements in the grid
    matchingPairs.forEach(cardData => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('matching-card');
        cardElement.dataset.pairId = cardData.pairId; // Use data attributes to store pair info
        cardElement.dataset.type = cardData.type; // Store type (word/definition)


        // Add the inner content which gets flipped by CSS
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-back">?</div>
                <div class="card-face card-front">
                    ${cardData.type === 'word' ?
                       `${cardData.text} <span class="pronunciation">${cardData.pronunciation ? '(' + cardData.pronunciation + ')' : ''}</span>` // Include pronunciation for word side if available
                       :
                       cardData.text // Definition side
                    }
                </div>
            </div>
        `;

        cardElement.addEventListener('click', () => revealMatchingCard(cardElement));
        matchingGrid.appendChild(cardElement);
    });

    showSection('matching-section'); // Show the matching section HTML
    nextMatchingButton.style.display = 'none'; // Hide 'Next Activity' button initially
}

// Function called when a matching card is clicked
function revealMatchingCard(cardElement) {
    // Prevent clicking already matched cards or clicking more than two cards at once
    if (cardElement.classList.contains('matched') || revealedCards.length === 2) {
        return;
    }

    // Add 'flipped' class to show the front face
    cardElement.classList.add('flipped');
    revealedCards.push(cardElement); // Add to revealed cards array

    // If two cards are revealed, check for a match
    if (revealedCards.length === 2) {
        const [card1, card2] = revealedCards;

        // Check if their pairIds match AND they are different types (word vs definition)
        if (card1.dataset.pairId === card2.dataset.pairId && card1.dataset.type !== card2.dataset.type) {
            // Match found!
            console.log("Match Found!");
            card1.classList.add('matched'); // Add 'matched' class (for potential styling)
            card2.classList.add('matched');
            matchesFound++;
            updateMatchingProgressDisplay(); // Update matches found

            // Clear revealed cards after a brief moment (even though they stay flipped)
            // This prevents trying to match a third card before the check is done
            setTimeout(() => {
                 revealedCards = [];
            }, 500); // Small delay

            // Check if all pairs are matched
            if (matchesFound === matchingPairs.length / 2) {
                console.log("Matching Game Activity Complete!");
                 updateMatchingProgressDisplay(true); // Show completion message
                nextMatchingButton.style.display = 'block'; // Show the next activity button
            }

        } else {
            // Not a match, flip them back after a delay
            console.log("No Match.");
             // Temporarily disable clicking while cards are flipping back
            matchingGrid.style.pointerEvents = 'none';

            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                revealedCards = []; // Clear revealed cards
                matchingGrid.style.pointerEvents = 'auto'; // Re-enable clicking
            }, 1000); // Flip back after 1 second
        }
    }
}

// Function to update Matching Game progress display
function updateMatchingProgressDisplay(isComplete = false) {
    const totalPairs = matchingPairs.length / 2;
    if (totalPairs > 0 && !isComplete) {
        matchingProgressDisplay.innerText = `Matches Found: ${matchesFound} / ${totalPairs}`;
    } else if (isComplete) {
        matchingProgressDisplay.innerText = `Matching Activity Complete! Found ${matchesFound} of ${totalPairs} matches.`;
         matchingProgressDisplay.style.fontWeight = 'bold';
         matchingProgressDisplay.style.color = '#2e7d32';
    }
    else {
        matchingProgressDisplay.innerText = ''; // Hide if game not started or data is bad
    }
}


// --- 10. Event Listeners for Flow ---

// Button to start the first activity from the lesson content screen
startActivityButton.addEventListener('click', () => {
    loadActivity(currentLessonIndex, currentActivityIndex + 1); // Load the activity *after* the lesson content
});

// Button to go to the next question in an MC quiz (called by MC checkAnswer)
nextMcQuestionButton.addEventListener('click', nextMultipleChoiceQuestion);

// Button to go to the next card in Flashcards (called by nextFlashcardButton click)
nextFlashcardButton.addEventListener('click', nextFlashcard);
// Listener to flip the flashcard when clicked (attached to the container)
flashcardContainer.addEventListener('click', flipFlashcard);


// Button to go to the next activity/lesson after completing an activity (MC, Flashcard, Matching)
// This button becomes visible via endActivity()
nextActivityButton.addEventListener('click', () => {
     loadActivity(currentLessonIndex, currentActivityIndex + 1); // Load the next activity in the sequence
});

// Button to go to the next lesson (called by endActivity when last activity is done)
// This button becomes visible via endActivity()
nextLessonButton.addEventListener('click', () => {
    loadActivity(currentLessonIndex + 1, 0); // Load the first activity of the next lesson
});

// Button to proceed after Matching game completion (calls endActivity)
nextMatchingButton.addEventListener('click', endActivity);


// --- 11. Initialize Application ---
// This function runs automatically once the browser has loaded the HTML and CSS
window.onload = function() {
    console.log("Window loaded, starting application initialization."); // Optional: Add a log to confirm this runs

    // Initial setup: Hide all sections before displaying the first activity
    hideAllSections();

    // Start the learning flow by loading the first activity (Lesson 1, Activity 1)
    // This should typically be the lesson content itself.
    loadActivity(0, 0); // Load Lesson 1 (index 0), first activity (index 0)
};
