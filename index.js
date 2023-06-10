const wordList = [
	"air horn",
	"airplane",
	"airport",
	"airship",
	"alarm",
	"alarm clock",
	"alien",
	"ambulance",
	"america",
	"anchor",
	"angel",
	"angry",
	"animal",
	"animals",
	"ant",
	"anvil",
	"ape",
	"apocalypse",
	"apple",
	"apple pie",
	"apple tree",
	"aquarium",
	"arcade",
	"arcade game",
	"archer",
	"archery",
	"arm",
	"armor",
	"army",
	"arrow",
	"art",
	"artist",
	"astronaut",
	"atmosphere",
	"australia",
	"autumn",
	"avocado",
	"award",
	"awards",
	"axe",
	"baby",
	"backflip",
	"backpack",
	"bacon",
	"badge",
	"bag",
	"baguette",
	"baker",
	"bakery",
	"baking",
	"bald head",
	"balloon",
	"balloons",
	"bamboo",
	"banana",
	"band",
	"bandage",
	"banjo",
	"bank",
	"banner",
	"bar",
	"barbeque",
	"barcode",
	"barn",
	"barrel",
	"barrier",
	"baseball",
	"baseball bat",
	"baseball field",
	"basket",
	"basketball",
	"basketball court",
	"bat",
	"bath",
	"bath tub",
	"bathroom",
	"battery",
	"battleship",
	"bay",
	"beach",
	"beach ball",
	"beach party",
	"bean",
	"beans",
	"bear",
	"beard",
	"beaver",
	"bed",
	"bedroom",
	"bedtime",
	"bee",
	"beef",
	"beehive",
	"beetle",
	"bell",
	"belt",
	"bench",
	"berries",
	"berry",
	"bicycle",
	"bigfoot",
	"bike",
	"bill board",
	"billboard",
	"bin",
	"binoculars",
	"bird",
	"bird nest",
	"bird feeder",
	"birdbath",
	"birdcage",
	"birds",
	"birthday",
	"birthday cake",
	"birthday party",
	"biscuit",
	"black hole",
	"blackboard",
	"blanket",
	"blaze",
	"blender",
	"blimp",
	"blizzard",
	"blocks",
	"board game",
	"boat",
	"bomb",
	"bone",
	"book",
	"book shelf",
	"bookcase",
	"bookmark",
	"bookstore",
	"boom box",
	"boomerang",
	"boots",
	"border",
	"bottle",
	"bouncy castle",
	"bow",
	"bow tie",
	"bow and arrow",
	"bowl",
	"bowling",
	"bowling ball",
	"bowling pin",
	"box",
	"box of chocolate",
	"boxing",
	"boxing gloves",
	"boxing ring",
	"boy",
	"bracelet",
	"brain",
	"branch",
	"bread",
	"breakfast",
	"brick",
	"bridge",
	"broccoli",
	"broom",
	"broomstick",
	"brush",
	"bubbles",
	"bucket",
	"bug",
	"build battle",
	"builder",
	"building",
	"bull",
	"bulldozer",
	"bumblebee",
	"bumper cars",
	"bunk bed",
	"bunny",
	"burger",
	"bus",
	"bus stop",
	"bush",
	"butcher",
	"butter",
	"butterfly",
	"button",
	"cab",
	"cabbage",
	"cabin",
	"cabinet",
	"cable",
	"cactus",
	"cage",
	"cake",
	"calculator",
	"calendar",
	"camel",
	"camera",
	"camouflage",
	"camp",
	"campfire",
	"campground",
	"camping",
	"can",
	"canada",
	"canal",
	"candle",
	"candy",
	"candy cane",
	"cane",
	"cannon",
	"cannonball",
	"canoe",
	"canopy bed",
	"cap",
	"cape",
	"car",
	"car park",
	"car wash",
	"caravan",
	"card",
	"card games",
	"cardboard box",
	"cards",
	"caribbean",
	"carnival",
	"carpenter",
	"carpet",
	"carriage",
	"carrot",
	"carrots",
	"cart",
	"cartoon",
	"cartwheel",
	"cash",
	"cashier",
	"cassette",
	"castle",
	"cat",
	"catacomb",
	"catapult",
	"caterpillar",
	"cauldron",
	"cave",
	"ceiling",
	"ceiling fan",
	"celebrate",
	"cell",
	"cellphone",
	"cereal",
	"chain",
	"chainsaw",
	"chair",
	"chairs",
	"chalk",
	"charger",
	"cheating",
	"checkerboard",
	"cheese",
	"cheeseburger",
	"cheesecake",
	"chef",
	"chefs hat",
	"chemistry",
	"cherries",
	"cherry",
	"chess",
	"chess piece",
	"chest",
	"chestnut",
	"chestplate",
	"chicken",
	"chicken jockey",
	"chicken nugget",
	"chili pepper",
	"chilli",
	"chimney",
	"china",
	"chip",
	"chocolate",
	"chocolate bar",
	"chocolate cake",
	"chocolate chip cookie",
	"chocolate factory",
	"chocolate milk",
	"chopsticks",
	"christmas",
	"christmas tree",
	"church",
	"cinema",
	"circle",
	"circus",
	"clam",
	"clap",
	"class",
	"classroom",
	"claw",
	"clay",
	"cliff",
	"climbing",
	"climbing boots",
	"cloak",
	"clock",
	"closet",
	"clouds",
	"clown",
	"clown fish",
	"coat",
	"coal",
	"coat hanger",
	"cobweb",
	"cockroach",
	"coconut",
	"cocoon",
	"coffee",
	"coffee cup",
	"coffee machine",
	"coffin",
	"cog",
	"coin",
	"coins",
	"colored pencil",
	"comb",
	"comet",
	"compass",
	"computer",
	"computer desk",
	"computer keyboard",
	"computer mouse",
	"concert",
	"construction",
	"contestant",
	"controller",
	"conveyor belt",
	"cook",
	"cooker",
	"cookie",
	"cookie jar",
	"cookie monster",
	"cooking",
	"corn",
	"corn dog",
	"corner",
	"cotton candy",
	"couch",
	"cow",
	"cowbell",
	"cowboy",
	"cowboy hat",
	"crab",
	"crane",
	"crate",
	"crater",
	"crayon",
	"credit card",
	"creeper",
	"crib",
	"cricket",
	"criminal",
	"crocodile",
	"crossbow",
	"crosswalk",
	"crow",
	"crowbar",
	"crown",
	"cruise",
	"cruise ship",
	"cry",
	"crystal",
	"crystal ball",
	"cube",
	"cuckoo clock",
	"cucumber",
	"cup",
	"cup of water",
	"cupboard",
	"cupcake",
	"curtain",
	"curtains",
	"cushion",
	"cycle",
	"cyclone",
	"cyclops",
	"dj booth",
	"dvd",
	"dab",
	"dad",
	"daffodil",
	"dagger",
	"date",
	"dance",
	"dancefloor",
	"dancer",
	"dancing",
	"day",
	"dead tree",
	"decoration",
	"deer",
	"demon",
	"dentist",
	"dentures",
	"deodorant",
	"desert",
	"desk",
	"dessert",
	"devil",
	"diamond",
	"diamond ring",
	"dice",
	"dictator",
	"dimples",
	"dinner",
	"dinosaur",
	"dirt house",
	"disappear",
	"disc",
	"disco",
	"disco ball",
	"dish",
	"dishes",
	"dishwasher",
	"dispenser",
	"diving",
	"diving board",
	"doctor",
	"dodgeball",
	"dog",
	"dog collar",
	"dogs",
	"doll",
	"dollar",
	"dollhouse",
	"dolphin",
	"domino",
	"donkey",
	"donut",
	"door",
	"doorknob",
	"door knob",
	"dragon",
	"dragon egg",
	"dragonfly",
	"drawing",
	"dream",
	"dress",
	"dressing gown",
	"drill",
	"drink",
	"drive through",
	"driveway",
	"droid",
	"drum",
	"drum sticks",
	"drums",
	"duck",
	"dumbbell",
	"dungeon",
	"dwarf",
	"dye",
	"dynamite",
	"eagle",
	"ear",
	"earring",
	"earth",
	"easter",
	"easter bunny",
	"easter egg",
	"ears",
	"eating",
	"eclipse",
	"eel",
	"eggplant",
	"eggs",
	"egypt",
	"elbow",
	"elephant",
	"elevator",
	"elf",
	"emerald",
	"emoji",
	"enchant",
	"ender dragon",
	"enderman",
	"energy",
	"engine",
	"england",
	"envelope",
	"environment",
	"eraser",
	"escalator",
	"europe",
	"exercise",
	"exit",
	"experiment",
	"explosion",
	"eye",
	"eye patch",
	"eyebrow",
	"eyes",
	"face",
	"factory",
	"fair",
	"fairy",
	"fairytale",
	"family",
	"fan",
	"fang",
	"farm",
	"farmer",
	"farmhouse",
	"farming",
	"farmland",
	"fast food",
	"fat",
	"feather",
	"feet",
	"fence",
	"fencing",
	"ferret",
	"ferris wheel",
	"ferry",
	"festival",
	"fez",
	"fidget spinner",
	"field",
	"fight",
	"fin",
	"finger",
	"finish line",
	"fire",
	"fire engine",
	"fire extinguisher",
	"fireball",
	"firefighter",
	"firefly",
	"fireplace",
	"fireworks",
	"first aid",
	"fish",
	"fish bowl",
	"fish tank",
	"fisherman",
	"fishing",
	"fishing rod",
	"fist",
	"flags",
	"flame",
	"flamingo",
	"flare",
	"flashlight",
	"flat",
	"fleece",
	"flip phone",
	"flipper",
	"floating island",
	"flood",
	"floor",
	"flowerbed",
	"flowerpot",
	"flowers",
	"flute",
	"fly",
	"flying pig",
	"fog",
	"folder",
	"food",
	"foot",
	"football",
	"football field",
	"footprint",
	"forehead",
	"forest",
	"forest fire",
	"fork",
	"fortress",
	"fortune cookie",
	"fossil",
	"fountain",
	"four leaf clover",
	"fox",
	"frame",
	"frankenstein",
	"french flag",
	"french fries",
	"fridge",
	"frisbee",
	"frog",
	"frown",
	"fruit",
	"fruit basket",
	"frying pan",
	"fudge",
	"fun park",
	"fur",
	"furnace",
	"furniture",
	"galaxy",
	"game",
	"games controller",
	"gaming chair",
	"gaming console",
	"garage",
	"garbage",
	"garbage can",
	"garbage truck",
	"garden",
	"gardening",
	"garlic bread",
	"gas mask",
	"gates",
	"genie",
	"genie lamp",
	"german flag",
	"geyser",
	"ghast",
	"ghost",
	"giant",
	"gift",
	"gifts",
	"gingerbread man",
	"giraffe",
	"girl",
	"glass",
	"glass of milk",
	"glasses",
	"globe",
	"gloves",
	"glue",
	"gnome",
	"goal",
	"goalkeeper",
	"goat",
	"goblet",
	"goblin",
	"godzilla",
	"goggles",
	"gold",
	"gold medal",
	"gold mine",
	"gold ring",
	"golden apple",
	"goldfish",
	"golem",
	"golf",
	"golf cart",
	"golf club",
	"golf course",
	"goose",
	"gorilla",
	"graduation",
	"grapes",
	"graph",
	"grasshopper",
	"grassland",
	"grave",
	"gravel",
	"gravestone",
	"graveyard",
	"great britain",
	"green",
	"greenhouse",
	"grenade",
	"guardian",
	"guitar",
	"gum",
	"gumball",
	"gun",
	"gym",
	"hair",
	"hair band",
	"hair brush",
	"hair dye",
	"hairbrush",
	"haircut",
	"hairdryer",
	"hairspray",
	"halloween",
	"hallway",
	"halo",
	"ham",
	"hamburger",
	"hammer",
	"hammock",
	"hamster",
	"hand",
	"handbag",
	"handcuffs",
	"hanggliding",
	"handshake",
	"handstand",
	"happy",
	"harbor",
	"harmonica",
	"harp",
	"harry potter",
	"hat",
	"haunted house",
	"hay",
	"head",
	"headband",
	"headphones",
	"headset",
	"heart",
	"hedge",
	"hedgehog",
	"helicopter",
	"helipad",
	"helmet",
	"hen",
	"heptagon",
	"hero",
	"hexagon",
	"hide and seek",
	"high heels",
	"highway",
	"hill",
	"hippopotamus",
	"hockey",
	"hockey rink",
	"hog",
	"hole",
	"holiday",
	"holiday lights",
	"hollywood sign",
	"home",
	"homework",
	"honey",
	"honeybee",
	"honeycomb",
	"hook",
	"horn",
	"horse",
	"horse racing",
	"horse riding",
	"hospital",
	"hot air balloon",
	"hot chocolate",
	"hot dog",
	"hot tub",
	"hotel",
	"hourglass",
	"house",
	"hula hoop",
	"hunger games",
	"hunter",
	"hurdles",
	"hurricane",
	"hut",
	"hypixel",
	"hypnotize",
	"ice bucket",
	"ice castle",
	"ice cream",
	"ice cream cone",
	"ice cream van",
	"ice cube",
	"ice skates",
	"ice spike",
	"ice skating",
	"iceberg",
	"icicle",
	"icy",
	"igloo",
	"ink",
	"insect",
	"instrument",
	"iron",
	"ironing board",
	"ironman",
	"island",
	"jacket",
	"jail",
	"japan",
	"jar",
	"javelin",
	"jeans",
	"jelly",
	"jellybeans",
	"jellyfish",
	"jet ski",
	"jetpack",
	"jewel",
	"jewellery",
	"jigsaw",
	"jogging",
	"joystick",
	"juggler",
	"juggling",
	"juice",
	"jump rope",
	"jumping",
	"jungle",
	"kangaroo",
	"karate",
	"katana",
	"kayak",
	"kennel",
	"ketchup",
	"kettle",
	"key",
	"keyboard",
	"keys",
	"kid",
	"king",
	"kiss",
	"kitchen",
	"kite",
	"kitten",
	"kiwi fruit",
	"knee",
	"knife",
	"knight",
	"knitting",
	"koala",
	"label",
	"laboratory",
	"ladder",
	"ladybird",
	"ladybug",
	"lake",
	"lamb",
	"lamp",
	"lamp post",
	"lampshade",
	"landscape",
	"lantern",
	"laptop",
	"laser",
	"lasso",
	"latin",
	"laughing",
	"laundry basket",
	"lava",
	"lava bucket",
	"lawn mower",
	"lawyer",
	"lead",
	"leaf",
	"leaking roof",
	"leather",
	"leaves",
	"leg",
	"legend of zelda",
	"lemon",
	"lemonade",
	"lemonade stand",
	"leprechaun",
	"letter",
	"lettuce",
	"librarian",
	"library",
	"lifejacket",
	"light",
	"light switch",
	"lightbulb",
	"lighthouse",
	"lightning",
	"lightning strike",
	"lights",
	"lightsaber",
	"lilypad",
	"lime",
	"line",
	"lion",
	"lips",
	"lipstick",
	"litter",
	"living room",
	"lizard",
	"llama",
	"loaf of bread",
	"lobster",
	"loch ness monster",
	"lock",
	"lock pick",
	"log",
	"log cabin",
	"lollipop",
	"london",
	"luggage",
	"lumberjack",
	"lunch",
	"lunchbox",
	"machine",
	"magazine",
	"magic",
	"magic carpet",
	"magic hat",
	"magic wand",
	"magician",
	"magma cube",
	"magnet",
	"magnifying glass",
	"mail",
	"mailbox",
	"mailman",
	"makeup",
	"mammoth",
	"mansion",
	"map",
	"marbles",
	"mario",
	"mark",
	"marker",
	"market",
	"mars",
	"marshmallow",
	"mask",
	"matchstick",
	"math",
	"mathematics",
	"mattress",
	"mayonnaise",
	"maze",
	"measurement",
	"meatball",
	"mechanic",
	"medieval house",
	"meeting",
	"melon",
	"mermaid",
	"meteorite",
	"mexico",
	"microphone",
	"microwave",
	"milk",
	"milkshake",
	"milky way",
	"mine",
	"minecart",
	"minecraft",
	"miner",
	"mineshaft",
	"mini golf",
	"mining",
	"minion",
	"mirror",
	"missile",
	"mistletoe",
	"mittens",
	"moat",
	"modern art",
	"modern house",
	"mole",
	"mom",
	"money",
	"monitor",
	"monkey",
	"monsters",
	"moon",
	"moose",
	"mop",
	"morning",
	"motorbike",
	"mountain",
	"mouse",
	"mouse pad",
	"mousepad",
	"mousetrap",
	"moustache",
	"mouth",
	"movie",
	"movie scene",
	"movie theatre",
	"mud",
	"muffin",
	"mug",
	"mummy",
	"muscle",
	"museum",
	"mushroom",
	"music",
	"music note",
	"musical",
	"musical keyboard",
	"musician",
	"mustard",
	"mystery box",
	"nachos",
	"nail",
	"nail polish",
	"name tag",
	"napkin",
	"nature",
	"necklace",
	"needle",
	"nether",
	"newspaper",
	"night",
	"nightmare",
	"ninja",
	"nintendo",
	"nose",
	"notepad",
	"north pole",
	"nurse",
	"nutcracker",
	"oar",
	"oasis",
	"ocean",
	"ocelot",
	"octagon",
	"octopus",
	"office",
	"ogre",
	"oil",
	"olympics",
	"omelette",
	"onesie",
	"onion ring",
	"orange",
	"orange juice",
	"orchard",
	"ore",
	"organ",
	"ornament",
	"ostrich",
	"otter",
	"oven",
	"owl",
	"oxygen",
	"oyster",
	"package",
	"packet",
	"pacman",
	"padlock",
	"paint",
	"paint bucket",
	"paint palette",
	"paintball",
	"paintbrush",
	"painter",
	"painting",
	"palace",
	"palette",
	"palm tree",
	"pan",
	"pancake",
	"panda",
	"paper",
	"paper airplane",
	"paperclip",
	"parachute",
	"park",
	"parking",
	"parkour",
	"parrot",
	"party",
	"party hat",
	"pathway",
	"patio",
	"pattern",
	"paws",
	"pea",
	"peach",
	"peacock",
	"peanut",
	"peanut butter",
	"pear",
	"pearl",
	"pedals",
	"pen",
	"penalty",
	"pencil",
	"pencil case",
	"penguin",
	"pentagon",
	"perfume",
	"pet",
	"pharaoh",
	"phoenix",
	"phone",
	"phone case",
	"phone charger",
	"photoframe",
	"photograph",
	"photographer",
	"piano",
	"pickaxe",
	"pickle",
	"picture",
	"picture frame",
	"pie",
	"pier",
	"pig",
	"pigeon",
	"piggy bank",
	"pigman",
	"pikachu",
	"pillow",
	"pillowcase",
	"pin",
	"pinata",
	"pine tree",
	"pineapple",
	"pineapple pizza",
	"pinecone",
	"ping pong",
	"ping pong table",
	"pipe",
	"pirate",
	"pirate hat",
	"pirate ship",
	"piston",
	"pitchfork",
	"pixel art",
	"pizza",
	"planet",
	"plank",
	"plant",
	"plate",
	"platform",
	"platypus",
	"playground",
	"pliers",
	"plug",
	"plunger",
	"pocket watch",
	"podium",
	"pogo stick",
	"poison",
	"pokeball",
	"pokemon",
	"polar bear",
	"pole vault",
	"police",
	"police officer",
	"police station",
	"policeman",
	"pond",
	"pong",
	"pony",
	"pool",
	"pool table",
	"poor",
	"popcorn",
	"poppy",
	"popsicle",
	"portal",
	"post office",
	"postcard",
	"poster",
	"pot",
	"pot of gold",
	"potato",
	"potato chips",
	"potatoes",
	"potion",
	"potted plant",
	"power lines",
	"power plug",
	"present",
	"presentation",
	"pretzel",
	"prince",
	"princess",
	"printer",
	"prison",
	"prison cell",
	"prisoner",
	"projectile",
	"propeller",
	"protest",
	"pudding",
	"puddle",
	"pump",
	"pumpkin",
	"puppet",
	"puppy",
	"purse",
	"puzzle",
	"puzzle cube",
	"pyjamas",
	"pyramid",
	"quad bike",
	"queen",
	"quicksand",
	"quiver",
	"rabbit",
	"raccoon",
	"race",
	"race track",
	"racecar",
	"racehorse",
	"radio",
	"raft",
	"railway",
	"rain",
	"rain coat",
	"rainbow",
	"raindrop",
	"rake",
	"rat",
	"ravine",
	"reading",
	"reindeer",
	"reaper",
	"recycle",
	"redstone",
	"reef",
	"refrigerator",
	"remote",
	"restaurant",
	"rhino",
	"ribbon",
	"rice",
	"rich",
	"ride",
	"ring",
	"river",
	"road",
	"robot",
	"rock",
	"rock band",
	"rock climbing",
	"rock and roll",
	"rocket",
	"rocket ship",
	"rocking chair",
	"roller blades",
	"rollercoaster",
	"roof",
	"room",
	"rope",
	"rose",
	"rose bush",
	"roundabout",
	"rowboat",
	"rowing",
	"rubber",
	"rubber band",
	"rubber duck",
	"rubbish",
	"rubiks cube",
	"rug",
	"ruler",
	"runner",
	"running",
	"sad",
	"saddle",
	"safe",
	"sail",
	"sailboat",
	"sailing",
	"salad",
	"salamander",
	"salmon",
	"saloon",
	"salt",
	"salt and pepper",
	"samurai",
	"sand castle",
	"sandbox",
	"sandcastle",
	"sandwiches",
	"santa",
	"santa workshop",
	"sardines",
	"satellite",
	"sauce",
	"sausage",
	"saw",
	"saxophone",
	"scaffold",
	"scale",
	"scarecrow",
	"scared",
	"scarf",
	"school",
	"school bus",
	"science",
	"scientist",
	"scissors",
	"scooby doo",
	"scooter",
	"scorpion",
	"screen",
	"screw",
	"screwdriver",
	"scuba diving",
	"scythe",
	"sea turtle",
	"seafood",
	"seagull",
	"seahorse",
	"seal",
	"seat",
	"seaweed",
	"security camera",
	"seed",
	"seesaw",
	"self portrait",
	"sewing machine",
	"sewer",
	"shack",
	"shampoo",
	"shapes",
	"shark",
	"shaving",
	"shed",
	"sheep",
	"sheet",
	"shelf",
	"shell",
	"shelter",
	"shield",
	"ship",
	"shipwreck",
	"shirt",
	"shoe laces",
	"shopping",
	"shoes",
	"shop",
	"shopping bag",
	"shopping trolley",
	"short",
	"shorts",
	"shoulder",
	"shovel",
	"shower",
	"shrek",
	"sidewalk",
	"sign",
	"signal",
	"signpost",
	"silo",
	"singer",
	"singing",
	"sink",
	"skateboarding",
	"skating",
	"skating rink",
	"skeleton",
	"ski",
	"ski lodge",
	"skiing",
	"skinny",
	"skirt",
	"skull",
	"sky",
	"skywars",
	"skydiver",
	"skyscraper",
	"sleep",
	"sleeping",
	"sleeping bag",
	"sleigh",
	"slide",
	"slime",
	"slippers",
	"slope",
	"sloth",
	"slug",
	"smartphone",
	"smell",
	"smelting",
	"smile",
	"smiley",
	"smoke",
	"smoking",
	"smoothie",
	"snail",
	"snake",
	"sneakers",
	"sniper",
	"snow",
	"snowball",
	"snowboarding",
	"snowflake",
	"snowing",
	"snowman",
	"snowy",
	"snow globe",
	"soap",
	"soccer",
	"soccer ball",
	"socks",
	"soda",
	"soda can",
	"sofa",
	"soil",
	"solar panel",
	"solar system",
	"soldier",
	"song",
	"sound",
	"soup",
	"space",
	"spaceship",
	"spade",
	"spaghetti",
	"spanner",
	"sparkler",
	"speakers",
	"spear",
	"speedboat",
	"spell",
	"sphere",
	"spider",
	"spider web",
	"spiderman",
	"spine",
	"spleef",
	"sponge",
	"spongebob",
	"spooky house",
	"spoon",
	"sports",
	"spray",
	"spring",
	"sprinkler",
	"sprint",
	"spy",
	"square",
	"squid",
	"squirrel",
	"stables",
	"stadium",
	"stage",
	"staircase",
	"stairs",
	"stamp",
	"star",
	"starfish",
	"statue",
	"steak",
	"steering wheel",
	"step ladder",
	"step stool",
	"stepping stones",
	"stereo",
	"stick",
	"sticky note",
	"stingray",
	"stocking",
	"stop sign",
	"stopwatch",
	"storage",
	"store",
	"storm",
	"stove",
	"straw",
	"strawberry",
	"street",
	"streetlamp",
	"string",
	"strong",
	"submarine",
	"sugar",
	"suit",
	"suitcase",
	"summer",
	"sumo",
	"sun",
	"sunbed",
	"sunflower",
	"sunglasses",
	"sunken airplane",
	"sunken ship",
	"sunlight",
	"sunrise",
	"sunset",
	"super hero",
	"supermarket",
	"surfboard",
	"surfing",
	"surgery",
	"surprise",
	"sushi",
	"swamp",
	"swan",
	"sweater",
	"swimming",
	"swimming pool",
	"swing",
	"swiss cheese",
	"switch",
	"sword",
	"swordfish",
	"t-rex",
	"t-shirt",
	"tnt",
	"tnt cannon",
	"tv remote",
	"table",
	"table cloth",
	"table tennis",
	"tablet",
	"tail",
	"tall",
	"tank",
	"tape",
	"target",
	"tattoo",
	"tavern",
	"taxi",
	"tea",
	"teacup",
	"teapot",
	"tears",
	"technology",
	"teddy bear",
	"teeth",
	"telephone",
	"telephone booth",
	"telescope",
	"television",
	"temple",
	"tennis",
	"tennis ball",
	"tennis court",
	"tent",
	"tetris",
	"texting",
	"thanksgiving",
	"the end",
	"the moon",
	"theater",
	"theme park",
	"thermometer",
	"thief",
	"throne",
	"thug",
	"thumb",
	"thunder",
	"thunderstorm",
	"tic tac toe",
	"ticket",
	"tie",
	"tiger",
	"tightrope",
	"time",
	"time machine",
	"tin can",
	"tinsel",
	"tire swing",
	"tissue",
	"titanic",
	"toad",
	"toast",
	"toaster",
	"toes",
	"toilet",
	"toilet paper",
	"tomato",
	"tomato ketchup",
	"tongue",
	"tools",
	"tooth",
	"tooth fairy",
	"toothbrush",
	"toothpaste",
	"top hat",
	"torch",
	"tornado",
	"tortoise",
	"totem pole",
	"towel",
	"towel rack",
	"tower",
	"tower of pisa",
	"toy",
	"toy soldier",
	"toy story",
	"track",
	"tractor",
	"trading",
	"traffic",
	"traffic jam",
	"traffic lights",
	"trailer",
	"train station",
	"train tracks",
	"trains",
	"trampoline",
	"transport",
	"transportation",
	"trap",
	"trash can",
	"treadmill",
	"treasure",
	"treasure chest",
	"tree",
	"tree frog",
	"treehouse",
	"triangle",
	"tricycle",
	"triplets",
	"trolley",
	"trolls",
	"trophy",
	"trousers",
	"truck",
	"trumpet",
	"tsunami",
	"tub",
	"tug of war",
	"tuna",
	"tunnel",
	"turkey",
	"turret",
	"turtle",
	"tuxedo",
	"tweezers",
	"twig",
	"typewriter",
	"tyre",
	"umbrella",
	"undead",
	"under the sea",
	"underwater",
	"unicorn",
	"unicycle",
	"upside down",
	"vacuum",
	"valentine",
	"vampire",
	"van",
	"vase",
	"vault",
	"vegetable garden",
	"vegetables",
	"vehicle",
	"vending machine",
	"video game",
	"video games",
	"viking",
	"village",
	"villager",
	"violin",
	"volcano",
	"volleyball",
	"voltage",
	"vulture",
	"waffle",
	"wagon",
	"wall",
	"wallet",
	"walrus",
	"wand",
	"wardrobe",
	"warrior",
	"washing basket",
	"washing machine",
	"wasp",
	"watch",
	"water",
	"water balloon",
	"water bottle",
	"water bucket",
	"water park",
	"water slide",
	"waterfall",
	"watermelon",
	"waterski",
	"waterslide",
	"wave",
	"weather",
	"web",
	"wedding",
	"wedding cake",
	"wedding ring",
	"weightlifting",
	"weights",
	"well",
	"wellies",
	"werewolf",
	"western",
	"whale",
	"wheat",
	"wheel",
	"wheelie",
	"whirlpool",
	"whistle",
	"whiteboard",
	"wig",
	"wild west",
	"wind",
	"windmill",
	"window",
	"wine",
	"wings",
	"wink",
	"winter",
	"wire",
	"wishing well",
	"witch",
	"witch house",
	"wither",
	"wizard",
	"wizard hat",
	"wolf",
	"wool",
	"workshop",
	"world",
	"worm",
	"wrecking ball",
	"wrench",
	"wrestling",
	"writing",
	"xylophone",
	"yacht",
	"yellow brick road",
	"yoghurt",
	"youtube",
	"zebra",
	"zeus",
	"zip line",
	"zipper",
	"zombie",
	"zombie apocalypse",
	"zoo",
	"chef hat"
];

let searchInput = document.getElementById("search");

const spaceRegex = new RegExp("[^ ]", "g");
const sortedThemes = wordList.sort(function (a, b) {
	return b.length - a.length;
});

const hints = sortedThemes
	.map((word) => word.replace(spaceRegex, "_"))
	.filter((value, index, array) => array.indexOf(value) === index);
const hintsFormatted = sortedThemes
	.map((word) => word.replace(spaceRegex, "_ ").replaceAll("  ", "    ").trim())
	.filter((value, index, array) => array.indexOf(value) === index);

const choicesDiv = document.getElementById("choices");
document.getElementById("sortlengthdesc").disabled = true;
noFilter();

let selectedHint = "";
let prevEl;

let matchingThemes = [];
let guessedThemes = [];
let correct = 0;

function noFilter() {
	document.getElementById("nofilter").disabled = true;
	document.getElementById("spacefilter").disabled = false;
	document.getElementById("nospacefilter").disabled = false;

	choicesDiv.innerHTML = "";

	hintsFormatted.forEach((hint) => {
		let originalHint = hint.replaceAll("_ ", "_").replaceAll("  ", "");
		console.log(originalHint);
		let charCountGroups = originalHint
			.split(" ")
			.filter((f) => f.length != 0)
			.map((word) => `(${word.length})`)
			.join(" ");
		choicesDiv.innerHTML += `<input type="button" id="${hint}" onclick="selectHint(this)" value="${hint} ${
			originalHint.includes(" ") ? charCountGroups : ""
		} / ${originalHint.trim().length}"/>`;
	});
}

function noSpacesFilter() {
	document.getElementById("nofilter").disabled = false;
	document.getElementById("spacefilter").disabled = false;
	document.getElementById("nospacefilter").disabled = true;

	choicesDiv.innerHTML = "";

	hintsFormatted
		.filter((hint) => !hint.includes("    "))
		.forEach((hint) => {
			let originalHint = hint.replaceAll("_ ", "_").replaceAll("  ", "");
			let charCountGroups = originalHint
				.split(" ")
				.filter((f) => f.length != 0)
				.map((word) => `(${word.length})`)
				.join(" ");
			choicesDiv.innerHTML += `<input type="button" id="${hint}" onclick="selectHint(this)" value="${hint} ${
				originalHint.includes(" ") ? charCountGroups : ""
			} / ${originalHint.trim().length}"/>`;
		});
}

function spacesFilter() {
	document.getElementById("nofilter").disabled = false;
	document.getElementById("spacefilter").disabled = true;
	document.getElementById("nospacefilter").disabled = false;

	choicesDiv.innerHTML = "";

	hintsFormatted
		.filter((hint) => hint.includes("    "))
		.forEach((hint) => {
			let originalHint = hint.replaceAll("_ ", "_").replaceAll("  ", "");
			let charCountGroups = originalHint
				.split(" ")
				.filter((f) => f.length != 0)
				.map((word) => `(${word.length})`)
				.join(" ");
			choicesDiv.innerHTML += `<input type="button" id="${hint}" onclick="selectHint(this)" value="${hint} ${
				originalHint.includes(" ") ? charCountGroups : ""
			} / ${originalHint.trim().length}"/>`;
		});
}

function sortLengthAsc() {
	document.getElementById("sortlengthasc").disabled = true;
	document.getElementById("sortlengthdesc").disabled = false;
	choicesDiv.innerHTML = "";
	wordList
		.sort(function (a, b) {
			return a.length - b.length;
		})
		.map((word) => word.replace(spaceRegex, "_ ").replaceAll("  ", "    ").trim())
		.filter((value, index, array) => array.indexOf(value) === index)
		.forEach((hint) => {
			let originalHint = hint.replaceAll("_ ", "_").replaceAll("  ", "");
			let charCountGroups = originalHint
				.split(" ")
				.filter((f) => f.length != 0)
				.map((word) => `(${word.length})`)
				.join(" ");
			choicesDiv.innerHTML += `<input type="button" id="${hint}" onclick="selectHint(this)" value="${hint} ${
				originalHint.includes(" ") ? charCountGroups : ""
			} / ${originalHint.trim().length}"/>`;
		});
}

function sortLengthDesc() {
	document.getElementById("sortlengthasc").disabled = false;
	document.getElementById("sortlengthdesc").disabled = true;

	choicesDiv.innerHTML = "";
	wordList
		.sort(function (a, b) {
			return b.length - a.length;
		})
		.map((word) => word.replace(spaceRegex, "_ ").replaceAll("  ", "    ").trim())
		.filter((value, index, array) => array.indexOf(value) === index)
		.forEach((hint) => {
			let originalHint = hint.replaceAll("_ ", "_").replaceAll("  ", "");
			let charCountGroups = originalHint
				.split(" ")
				.filter((f) => f.length != 0)
				.map((word) => `(${word.length})`)
				.join(" ");
			choicesDiv.innerHTML += `<input type="button" id="${hint}" onclick="selectHint(this)" value="${hint} ${
				originalHint.includes(" ") ? charCountGroups : ""
			} / ${originalHint.trim().length}"/>`;
		});
}

searchInput.addEventListener("keyup", function (event) {
	filterHints();
});

function filterHints() {
	choicesDiv.innerHTML = "";
	const filter = searchInput.value.trim();

	hints
		.filter((hint) => (filter != "" ? hint.trim() == filter : true))
		.forEach((hint) => {
			let formattedHint = hintsFormatted[hints.indexOf(hint)];
			let charCountGroups = hint
				.split(" ")
				.filter((f) => f.length != 0)
				.map((word) => `(${word.length})`)
				.join(" ");
			choicesDiv.innerHTML += `<input type="button" id="${formattedHint}" onclick="selectHint(this)" value="${formattedHint} ${
				hint.includes(" ") ? charCountGroups : ""
			} / ${hint.trim().length}"/>`;
		});
}

function selectHint(el) {
	if (prevEl) prevEl.disabled = false;
	el.disabled = true;
	prevEl = el;

	document.getElementById("guesses").innerHTML = "";

	correct = 0;
	selectedHint = el.value.split(" (")[0];
	selectedHint = hints[hintsFormatted.indexOf(selectedHint)];

	guessedThemes = [];
	matchingThemes = wordList.filter((element) => {
		let regex = new RegExp(`^${selectedHint.replace(/_/g, "\\S")}$`);
		return regex.test(element);
	});

	console.log(matchingThemes);

	document.getElementById("guess").setAttribute("maxlength", selectedHint.length);
	document.getElementById("progress").innerText = `${correct}/${matchingThemes.length}`;
}

let guessInput = document.getElementById("guess");
guessInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		guess();
	}
});

function guess() {
	if (matchingThemes.length == 0) return;
	const guess = guessInput.value.replaceAll(" ", "").toLowerCase();
	if (guessedThemes.includes(guess)) return;
	guessedThemes.push(guess);
	if (matchingThemes.map((theme) => theme.replaceAll(" ", "").toLowerCase()).includes(guess)) {
		correct++;
		document.getElementById("progress").innerText = `${correct}/${matchingThemes.length}`;
		document.getElementById("guesses").innerHTML += `${guessInput.value}, `;
	}
	guessInput.value = "";
}
