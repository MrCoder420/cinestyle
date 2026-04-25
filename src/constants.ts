import { Movie, Character, Outfit } from './types';

export const MOVIES: Movie[] = [
  {
    "id": "m1",
    "title": "Iron Man / Avengers",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/IronManAvengers/600/900"
  },
  {
    "id": "m2",
    "title": "Spider-Man (MCU)",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/SpiderManMCU/600/900"
  },
  {
    "id": "m3",
    "title": "Harry Potter Series",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/HarryPotterSeries/600/900"
  },
  {
    "id": "m4",
    "title": "Joker (2019)",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/Joker/600/900"
  },
  {
    "id": "m5",
    "title": "Pirates of the Caribbean",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/PiratesoftheCaribbean/600/900"
  },
  {
    "id": "m6",
    "title": "The Dark Knight / DC",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/TheDarkKnightDC/600/900"
  },
  {
    "id": "m7",
    "title": "Sherlock (BBC)",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/SherlockBBC/600/900"
  },
  {
    "id": "m8",
    "title": "Wednesday (Netflix)",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/WednesdayNetflix/600/900"
  },
  {
    "id": "m9",
    "title": "Thor / Avengers",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/ThorAvengers/600/900"
  },
  {
    "id": "m10",
    "title": "Black Widow / Avengers",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/BlackWidowAvengers/600/900"
  },
  {
    "id": "m11",
    "title": "Frozen (Disney)",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/FrozenDisney/600/900"
  },
  {
    "id": "m12",
    "title": "Deadpool (MCU/Fox)",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/DeadpoolMCUFox/600/900"
  },
  {
    "id": "m13",
    "title": "3 Idiots (Bollywood)",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/IdiotsBollywood/600/900"
  },
  {
    "id": "m14",
    "title": "Kabir Singh (Bollywood)",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/KabirSinghBollywood/600/900"
  },
  {
    "id": "m15",
    "title": "Moana (Disney)",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/MoanaDisney/600/900"
  },
  {
    "id": "m16",
    "title": "Don (Bollywood)",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/DonBollywood/600/900"
  },
  {
    "id": "m17",
    "title": "The Hunger Games",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/TheHungerGames/600/900"
  },
  {
    "id": "m18",
    "title": "Crayon Shin-chan",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/CrayonShinchan/600/900"
  },
  {
    "id": "m19",
    "title": "Doraemon (Anime)",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/DoraemonAnime/600/900"
  },
  {
    "id": "m20",
    "title": "Raiders of the Lost Ark",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/RaidersoftheLostArk/600/900"
  },
  {
    "id": "m21",
    "title": "Indiana Jones",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/IndianaJones/600/900"
  },
  {
    "id": "m22",
    "title": "John Wick",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/JohnWick/600/900"
  },
  {
    "id": "m23",
    "title": "The Matrix",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/TheMatrix/600/900"
  },
  {
    "id": "m24",
    "title": "Harry Potter",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/HarryPotter/600/900"
  },
  {
    "id": "m25",
    "title": "Back to the Future",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/BacktotheFuture/600/900"
  },
  {
    "id": "m26",
    "title": "Iron Man",
    "genre": "Various",
    "year": "N/A",
    "posterUrl": "https://picsum.photos/seed/IronMan/600/900"
  }
];

export const CHARACTERS: Character[] = [
  {
    "id": "c1",
    "name": "Tony Stark",
    "portraitUrl": "https://picsum.photos/seed/TonyStark/400/400",
    "movieId": "m1"
  },
  {
    "id": "c2",
    "name": "Peter Parker / Spider-Man",
    "portraitUrl": "https://picsum.photos/seed/PeterParkerSpiderMan/400/400",
    "movieId": "m2"
  },
  {
    "id": "c3",
    "name": "Harry Potter",
    "portraitUrl": "https://picsum.photos/seed/HarryPotter/400/400",
    "movieId": "m3"
  },
  {
    "id": "c4",
    "name": "Joker (Arthur Fleck)",
    "portraitUrl": "https://picsum.photos/seed/JokerArthurFleck/400/400",
    "movieId": "m4"
  },
  {
    "id": "c5",
    "name": "Captain Jack Sparrow",
    "portraitUrl": "https://picsum.photos/seed/CaptainJackSparrow/400/400",
    "movieId": "m5"
  },
  {
    "id": "c6",
    "name": "Bruce Wayne / Batman",
    "portraitUrl": "https://picsum.photos/seed/BruceWayneBatman/400/400",
    "movieId": "m6"
  },
  {
    "id": "c7",
    "name": "Sherlock Holmes",
    "portraitUrl": "https://picsum.photos/seed/SherlockHolmes/400/400",
    "movieId": "m7"
  },
  {
    "id": "c8",
    "name": "Wednesday Addams",
    "portraitUrl": "https://picsum.photos/seed/WednesdayAddams/400/400",
    "movieId": "m8"
  },
  {
    "id": "c9",
    "name": "Thor Odinson",
    "portraitUrl": "https://picsum.photos/seed/ThorOdinson/400/400",
    "movieId": "m9"
  },
  {
    "id": "c10",
    "name": "Hermione Granger",
    "portraitUrl": "https://picsum.photos/seed/HermioneGranger/400/400",
    "movieId": "m3"
  },
  {
    "id": "c11",
    "name": "Natasha Romanoff",
    "portraitUrl": "https://picsum.photos/seed/NatashaRomanoff/400/400",
    "movieId": "m10"
  },
  {
    "id": "c12",
    "name": "Elsa",
    "portraitUrl": "https://picsum.photos/seed/Elsa/400/400",
    "movieId": "m11"
  },
  {
    "id": "c13",
    "name": "Deadpool",
    "portraitUrl": "https://picsum.photos/seed/Deadpool/400/400",
    "movieId": "m12"
  },
  {
    "id": "c14",
    "name": "Rancho / Phunsukh Wangdu",
    "portraitUrl": "https://picsum.photos/seed/RanchoPhunsukhWangdu/400/400",
    "movieId": "m13"
  },
  {
    "id": "c15",
    "name": "Kabir Singh",
    "portraitUrl": "https://picsum.photos/seed/KabirSingh/400/400",
    "movieId": "m14"
  },
  {
    "id": "c16",
    "name": "Moana",
    "portraitUrl": "https://picsum.photos/seed/Moana/400/400",
    "movieId": "m15"
  },
  {
    "id": "c17",
    "name": "Don",
    "portraitUrl": "https://picsum.photos/seed/Don/400/400",
    "movieId": "m16"
  },
  {
    "id": "c18",
    "name": "Katniss Everdeen",
    "portraitUrl": "https://picsum.photos/seed/KatnissEverdeen/400/400",
    "movieId": "m17"
  },
  {
    "id": "c19",
    "name": "Shinchan",
    "portraitUrl": "https://picsum.photos/seed/Shinchan/400/400",
    "movieId": "m18"
  },
  {
    "id": "c20",
    "name": "Doraemon",
    "portraitUrl": "https://picsum.photos/seed/Doraemon/400/400",
    "movieId": "m19"
  },
  {
    "id": "c21",
    "name": "Indiana Jones",
    "portraitUrl": "https://picsum.photos/seed/IndianaJones/400/400",
    "movieId": "m20"
  },
  {
    "id": "c22",
    "name": "Indiana Jones",
    "portraitUrl": "https://picsum.photos/seed/IndianaJones/400/400",
    "movieId": "m21"
  },
  {
    "id": "c23",
    "name": "John Wick",
    "portraitUrl": "https://picsum.photos/seed/JohnWick/400/400",
    "movieId": "m22"
  },
  {
    "id": "c24",
    "name": "Neo",
    "portraitUrl": "https://picsum.photos/seed/Neo/400/400",
    "movieId": "m23"
  },
  {
    "id": "c25",
    "name": "Harry Potter",
    "portraitUrl": "https://picsum.photos/seed/HarryPotter/400/400",
    "movieId": "m24"
  },
  {
    "id": "c26",
    "name": "Marty McFly",
    "portraitUrl": "https://picsum.photos/seed/MartyMcFly/400/400",
    "movieId": "m25"
  },
  {
    "id": "c27",
    "name": "Tony Stark",
    "portraitUrl": "https://picsum.photos/seed/TonyStark/400/400",
    "movieId": "m26"
  }
];

export const OUTFITS: Outfit[] = [
  {
    "id": "o1",
    "name": "Arc Reactor T-Shirt",
    "category": "T-Shirt",
    "price": "₹299 – ₹799",
    "imageUrl": "https://picsum.photos/seed/ArcReactorTShirt/600/800",
    "characterId": "c1",
    "link": "https://www.amazon.in/s?k=iron+man+arc+reactor+tshirt"
  },
  {
    "id": "o2",
    "name": "Black Slim-Fit Suit Blazer",
    "category": "Blazer",
    "price": "₹999 – ₹3,499",
    "imageUrl": "https://picsum.photos/seed/BlackSlimFitSuitBlazer/600/800",
    "characterId": "c1",
    "link": "https://www.amazon.in/s?k=black+slim+fit+blazer+men"
  },
  {
    "id": "o3",
    "name": "Spider-Man Cosplay Suit",
    "category": "Cosplay",
    "price": "₹499 – ₹2,499",
    "imageUrl": "https://picsum.photos/seed/SpiderManCosplaySuit/600/800",
    "characterId": "c2",
    "link": "https://www.amazon.in/s?k=spiderman+costume+suit"
  },
  {
    "id": "o4",
    "name": "Plaid Hoodie (casual Peter)",
    "category": "Hoodie",
    "price": "₹399 – ₹999",
    "imageUrl": "https://picsum.photos/seed/PlaidHoodiecasualPeter/600/800",
    "characterId": "c2",
    "link": "https://www.amazon.in/s?k=plaid+flannel+hoodie+men"
  },
  {
    "id": "o5",
    "name": "Hogwarts Robe (Gryffindor)",
    "category": "Costume Robe",
    "price": "₹699 – ₹2,999",
    "imageUrl": "https://picsum.photos/seed/HogwartsRobeGryffindor/600/800",
    "characterId": "c3",
    "link": "https://www.amazon.in/s?k=harry+potter+gryffindor+robe"
  },
  {
    "id": "o6",
    "name": "Round Frame Glasses",
    "category": "Accessories",
    "price": "₹149 – ₹499",
    "imageUrl": "https://picsum.photos/seed/RoundFrameGlasses/600/800",
    "characterId": "c3",
    "link": "https://www.amazon.in/s?k=round+frame+black+glasses+men"
  },
  {
    "id": "o7",
    "name": "Red Suit Joker Costume",
    "category": "Costume Suit",
    "price": "₹999 – ₹3,999",
    "imageUrl": "https://picsum.photos/seed/RedSuitJokerCostume/600/800",
    "characterId": "c4",
    "link": "https://www.amazon.in/s?k=joker+red+suit+costume"
  },
  {
    "id": "o8",
    "name": "Green Waistcoat Vest",
    "category": "Vest",
    "price": "₹399 – ₹1,299",
    "imageUrl": "https://picsum.photos/seed/GreenWaistcoatVest/600/800",
    "characterId": "c4",
    "link": "https://www.amazon.in/s?k=green+waistcoat+vest+men"
  },
  {
    "id": "o9",
    "name": "Pirate Costume Set",
    "category": "Costume",
    "price": "₹799 – ₹2,999",
    "imageUrl": "https://picsum.photos/seed/PirateCostumeSet/600/800",
    "characterId": "c5",
    "link": "https://www.amazon.in/s?k=jack+sparrow+pirate+costume"
  },
  {
    "id": "o10",
    "name": "Tricorn Pirate Hat",
    "category": "Hat",
    "price": "₹199 – ₹799",
    "imageUrl": "https://picsum.photos/seed/TricornPirateHat/600/800",
    "characterId": "c5",
    "link": "https://www.amazon.in/s?k=tricorn+pirate+hat"
  },
  {
    "id": "o11",
    "name": "Batman Cosplay Suit",
    "category": "Cosplay",
    "price": "₹699 – ₹3,499",
    "imageUrl": "https://picsum.photos/seed/BatmanCosplaySuit/600/800",
    "characterId": "c6",
    "link": "https://www.amazon.in/s?k=batman+cosplay+suit+costume"
  },
  {
    "id": "o12",
    "name": "Black Tactical Turtleneck",
    "category": "Top",
    "price": "₹349 – ₹1,199",
    "imageUrl": "https://picsum.photos/seed/BlackTacticalTurtleneck/600/800",
    "characterId": "c6",
    "link": "https://www.amazon.in/s?k=black+turtleneck+men"
  },
  {
    "id": "o13",
    "name": "Wool Overcoat Long",
    "category": "Coat",
    "price": "₹1,499 – ₹5,999",
    "imageUrl": "https://picsum.photos/seed/WoolOvercoatLong/600/800",
    "characterId": "c7",
    "link": "https://www.amazon.in/s?k=long+wool+overcoat+men+detective"
  },
  {
    "id": "o14",
    "name": "Blue Slim Fit Dress Shirt",
    "category": "Shirt",
    "price": "₹399 – ₹1,499",
    "imageUrl": "https://picsum.photos/seed/BlueSlimFitDressShirt/600/800",
    "characterId": "c7",
    "link": "https://www.amazon.in/s?k=blue+slim+fit+formal+shirt+men"
  },
  {
    "id": "o15",
    "name": "Black Goth School Dress",
    "category": "Dress",
    "price": "₹499 – ₹1,999",
    "imageUrl": "https://picsum.photos/seed/BlackGothSchoolDress/600/800",
    "characterId": "c8",
    "link": "https://www.amazon.in/s?k=wednesday+addams+black+dress+costume"
  },
  {
    "id": "o16",
    "name": "Black Platform Oxford Shoes",
    "category": "Footwear",
    "price": "₹599 – ₹2,499",
    "imageUrl": "https://picsum.photos/seed/BlackPlatformOxfordShoes/600/800",
    "characterId": "c8",
    "link": "https://www.amazon.in/s?k=black+platform+oxford+shoes+women"
  },
  {
    "id": "o17",
    "name": "Thor Cosplay Costume (with cape)",
    "category": "Cosplay",
    "price": "₹699 – ₹2,999",
    "imageUrl": "https://picsum.photos/seed/ThorCosplayCostumewithcape/600/800",
    "characterId": "c9",
    "link": "https://www.amazon.in/s?k=thor+costume+cape+avengers"
  },
  {
    "id": "o18",
    "name": "Red Cape / Superhero Cape",
    "category": "Accessories",
    "price": "₹199 – ₹699",
    "imageUrl": "https://picsum.photos/seed/RedCapeSuperheroCape/600/800",
    "characterId": "c9",
    "link": "https://www.amazon.in/s?k=red+superhero+cape+adult"
  },
  {
    "id": "o19",
    "name": "Hogwarts Gryffindor Uniform Set",
    "category": "Costume",
    "price": "₹799 – ₹2,999",
    "imageUrl": "https://picsum.photos/seed/HogwartsGryffindorUniformSet/600/800",
    "characterId": "c10",
    "link": "https://www.amazon.in/s?k=hermione+granger+costume+hogwarts"
  },
  {
    "id": "o20",
    "name": "Black Tactical Jumpsuit",
    "category": "Jumpsuit",
    "price": "₹699 – ₹2,499",
    "imageUrl": "https://picsum.photos/seed/BlackTacticalJumpsuit/600/800",
    "characterId": "c11",
    "link": "https://www.amazon.in/s?k=black+tactical+jumpsuit+women"
  },
  {
    "id": "o21",
    "name": "Red Leather Belt",
    "category": "Accessories",
    "price": "₹149 – ₹599",
    "imageUrl": "https://picsum.photos/seed/RedLeatherBelt/600/800",
    "characterId": "c11",
    "link": "https://www.amazon.in/s?k=red+wide+belt+women"
  },
  {
    "id": "o22",
    "name": "Ice Blue Shimmer Gown",
    "category": "Dress / Gown",
    "price": "₹499 – ₹2,499",
    "imageUrl": "https://picsum.photos/seed/IceBlueShimmerGown/600/800",
    "characterId": "c12",
    "link": "https://www.amazon.in/s?k=elsa+frozen+blue+gown+costume"
  },
  {
    "id": "o23",
    "name": "Deadpool Red & Black Cosplay Suit",
    "category": "Cosplay",
    "price": "₹799 – ₹3,499",
    "imageUrl": "https://picsum.photos/seed/DeadpoolRedBlackCosplaySuit/600/800",
    "characterId": "c13",
    "link": "https://www.amazon.in/s?k=deadpool+costume+suit"
  },
  {
    "id": "o24",
    "name": "Deadpool Graphic T-Shirt",
    "category": "T-Shirt",
    "price": "₹249 – ₹799",
    "imageUrl": "https://picsum.photos/seed/DeadpoolGraphicTShirt/600/800",
    "characterId": "c13",
    "link": "https://www.amazon.in/s?k=deadpool+graphic+tshirt"
  },
  {
    "id": "o25",
    "name": "White College Shirt",
    "category": "Shirt",
    "price": "₹249 – ₹799",
    "imageUrl": "https://picsum.photos/seed/WhiteCollegeShirt/600/800",
    "characterId": "c14",
    "link": "https://www.amazon.in/s?k=white+college+shirt+men"
  },
  {
    "id": "o26",
    "name": "Light Blue Denim Jeans",
    "category": "Jeans",
    "price": "₹349 – ₹1,499",
    "imageUrl": "https://picsum.photos/seed/LightBlueDenimJeans/600/800",
    "characterId": "c14",
    "link": "https://www.amazon.in/s?k=light+blue+slim+jeans+men"
  },
  {
    "id": "o27",
    "name": "White Kurta Pyjama Set",
    "category": "Ethnic Wear",
    "price": "₹499 – ₹2,999",
    "imageUrl": "https://picsum.photos/seed/WhiteKurtaPyjamaSet/600/800",
    "characterId": "c15",
    "link": "https://www.amazon.in/s?k=white+kurta+pyjama+set+men"
  },
  {
    "id": "o28",
    "name": "Black Leather Biker Jacket",
    "category": "Jacket",
    "price": "₹799 – ₹3,999",
    "imageUrl": "https://picsum.photos/seed/BlackLeatherBikerJacket/600/800",
    "characterId": "c15",
    "link": "https://www.amazon.in/s?k=black+leather+biker+jacket+men"
  },
  {
    "id": "o29",
    "name": "Polynesian Sarong / Pareo Set",
    "category": "Costume",
    "price": "₹399 – ₹1,999",
    "imageUrl": "https://picsum.photos/seed/PolynesianSarongPareoSet/600/800",
    "characterId": "c16",
    "link": "https://www.amazon.in/s?k=moana+costume+dress"
  },
  {
    "id": "o30",
    "name": "White 3-Piece Suit",
    "category": "Suit",
    "price": "₹1,999 – ₹6,999",
    "imageUrl": "https://picsum.photos/seed/WhitePieceSuit/600/800",
    "characterId": "c17",
    "link": "https://www.amazon.in/s?k=white+3+piece+suit+men"
  },
  {
    "id": "o31",
    "name": "Black Slim-Fit Tuxedo",
    "category": "Suit",
    "price": "₹2,499 – ₹8,999",
    "imageUrl": "https://picsum.photos/seed/BlackSlimFitTuxedo/600/800",
    "characterId": "c17",
    "link": "https://www.amazon.in/s?k=black+slim+fit+tuxedo+men"
  },
  {
    "id": "o32",
    "name": "Mockingjay Black Combat Suit",
    "category": "Cosplay",
    "price": "₹699 – ₹2,999",
    "imageUrl": "https://picsum.photos/seed/MockingjayBlackCombatSuit/600/800",
    "characterId": "c18",
    "link": "https://www.amazon.in/s?k=katniss+everdeen+costume+hunger+games"
  },
  {
    "id": "o33",
    "name": "Tactical Cargo Pants Women",
    "category": "Pants",
    "price": "₹399 – ₹1,499",
    "imageUrl": "https://picsum.photos/seed/TacticalCargoPantsWomen/600/800",
    "characterId": "c18",
    "link": "https://www.amazon.in/s?k=cargo+pants+women+tactical"
  },
  {
    "id": "o34",
    "name": "Red T-Shirt (Shinchan cosplay)",
    "category": "T-Shirt",
    "price": "₹199 – ₹599",
    "imageUrl": "https://picsum.photos/seed/RedTShirtShinchancosplay/600/800",
    "characterId": "c19",
    "link": "https://www.amazon.in/s?k=shinchan+red+tshirt+cosplay"
  },
  {
    "id": "o35",
    "name": "Shinchan Graphic Hoodie",
    "category": "Hoodie",
    "price": "₹349 – ₹1,199",
    "imageUrl": "https://picsum.photos/seed/ShinchanGraphicHoodie/600/800",
    "characterId": "c19",
    "link": "https://www.amazon.in/s?k=shinchan+hoodie+graphic"
  },
  {
    "id": "o36",
    "name": "Doraemon Blue Costume / Onesie",
    "category": "Costume",
    "price": "₹499 – ₹1,999",
    "imageUrl": "https://picsum.photos/seed/DoraemonBlueCostumeOnesie/600/800",
    "characterId": "c20",
    "link": "https://www.amazon.in/s?k=doraemon+costume+onesie"
  },
  {
    "id": "o37",
    "name": "Doraemon Graphic T-Shirt",
    "category": "T-Shirt",
    "price": "₹199 – ₹699",
    "imageUrl": "https://picsum.photos/seed/DoraemonGraphicTShirt/600/800",
    "characterId": "c20",
    "link": "https://www.amazon.in/s?k=doraemon+graphic+tshirt"
  },
  {
    "id": "o38",
    "name": "Brown Distressed Leather Jacket",
    "category": "Jacket",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/BrownDistressedLeatherJacket/600/800",
    "characterId": "c21",
    "link": "https://www.amazon.in/Indiana-Jones-Vintage-Distressed-Brown-Harrison/dp/B09KMGZCYJ"
  },
  {
    "id": "o39",
    "name": "Brown Bomber Leather Jacket",
    "category": "Jacket",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/BrownBomberLeatherJacket/600/800",
    "characterId": "c22",
    "link": "https://www.amazon.in/Raiders-Indiana-Harrison-Bomber-Leather/dp/B09HMHK94P"
  },
  {
    "id": "o40",
    "name": "White Pirate / Poet Shirt",
    "category": "Shirt",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/WhitePiratePoetShirt/600/800",
    "characterId": "c5",
    "link": "Search \"pirate shirt\" or use: https://www.amazon.in/s?k=jack+sparrow+shirt (many white poet shirts available)"
  },
  {
    "id": "o41",
    "name": "Shirt + Vest + Pants Combo",
    "category": "Full Set",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/ShirtVestPantsCombo/600/800",
    "characterId": "c5",
    "link": "https://www.amazon.in/s?k=captain+jack+sparrow+costume"
  },
  {
    "id": "o42",
    "name": "Black Leather Jacket (Shirt Collar)",
    "category": "Jacket",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/BlackLeatherJacketShirtCollar/600/800",
    "characterId": "c23",
    "link": "https://www.amazon.in/ORVIX-Classic-Collar-Leather-Jacket/dp/B0FXS2CFKM"
  },
  {
    "id": "o43",
    "name": "Black Gothic Trench Coat (Cotton)",
    "category": "Jacket/Coat",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/BlackGothicTrenchCoatCotton/600/800",
    "characterId": "c24",
    "link": "https://www.amazon.in/UGFashions-Matrix-Costume-Gothic-Steampunk/dp/B0B5L4BKZP"
  },
  {
    "id": "o44",
    "name": "Black Gothic Trench Coat (Heavy Cotton)",
    "category": "Jacket/Coat",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/BlackGothicTrenchCoatHeavyCotton/600/800",
    "characterId": "c24",
    "link": "https://www.amazon.in/Matrix-Cotton-Reeves-Gothic-Cosplay/dp/B09KR2VKL8"
  },
  {
    "id": "o45",
    "name": "Gryffindor Black Cotton Hoodie (Top)",
    "category": "Shirt/Hoodie",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/GryffindorBlackCottonHoodieTop/600/800",
    "characterId": "c25",
    "link": "https://www.amazon.in/Potter-Cotton-Gryffindor-Sweatshirt-Hoodies/dp/B0DRVXMC5J"
  },
  {
    "id": "o46",
    "name": "Denim Jacket + Red Puffer Vest Combo",
    "category": "Jacket",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/DenimJacketRedPufferVestCombo/600/800",
    "characterId": "c26",
    "link": "Search \"Marty McFly costume\" â many include denim jacket + red vest"
  },
  {
    "id": "o47",
    "name": "Checkered Shirt (part of costume)",
    "category": "Shirt",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/CheckeredShirtpartofcostume/600/800",
    "characterId": "c26",
    "link": "https://www.amazon.in/s?k=marty+mcfly+costume (most bundles include the shirt)"
  },
  {
    "id": "o48",
    "name": "Arc Reactor / Stark Printed T-Shirt",
    "category": "Shirt",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/ArcReactorStarkPrintedTShirt/600/800",
    "characterId": "c1",
    "link": "https://www.amazon.in/s?k=tony+stark+t+shirt (The Souled Store versions are good)"
  },
  {
    "id": "o49",
    "name": "Black Hoodie Style",
    "category": "Hoodie",
    "price": "N/A",
    "imageUrl": "https://picsum.photos/seed/BlackHoodieStyle/600/800",
    "characterId": "c27",
    "link": "https://www.amazon.in/s?k=tony+stark+hoodie"
  }
];
