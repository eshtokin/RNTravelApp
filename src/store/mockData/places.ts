import {
  ArchitectureInBarcelonaSpain,
  EileanDonanLochDuichIslandScotland,
  GoldenGateBridgeSanFranciscoUSA,
  HorseshoeBendArizonaUSA,
  LysefjordenNorway,
  MilfordSoundNewZeland,
  MoraineLakeCanada,
  MunichGermany,
  TheEiffelTowerParisFrance,
  Santorini,
  BoraBora,
  MachuPicchu,
  VictoriaFalls,
  GreatBarrierReef,
  MountCook,
  BanffNationalPark,
  Etretat,
  Bali,
} from '../../../assets/images/index'
import {
  category_beach,
  category_camping,
  category_fishing,
  category_forest,
  category_mountins,
  category_wave,
} from '../../../assets/images'
import {ImageSourcePropType} from 'react-native'

export enum Categories {
  all = 'All',
  Forest = 'Forest',
  Beach = 'Beach',
  Mountain = 'Mountain',
  Ocean = 'Ocean',
  Camping = 'Camping',
  Fishing = 'Fishing',
}

export const MOCK_CATEGORIES: {name: Categories; image: ImageSourcePropType}[] =
  [
    {name: Categories.Forest, image: category_forest},
    {name: Categories.Beach, image: category_beach},
    {name: Categories.Mountain, image: category_mountins},
    {name: Categories.Ocean, image: category_wave},
    {name: Categories.Camping, image: category_camping},
    {name: Categories.Fishing, image: category_fishing},
  ]

export type GeneratedPlace = {
  name: string
  description: string
  country: string
  location: {
    latitude: number
    longitude: number
    latitudeDelta: number
    longitudeDelta: number
  }
  photo?: any
  price: number
  rate: number
  inFavourites: boolean
  category: Categories
  darkContent: boolean
}

const MOCK_PLACES: Array<GeneratedPlace> = [
  {
    name: 'Santorini',
    description:
      'Known for its stunning sunsets and white-washed buildings perched atop cliffs overlooking the Aegean Sea, Santorini offers a captivating blend of natural beauty and traditional charm.',
    country: 'Greece',
    location: {
      longitude: 25.4,
      latitude: 36.4,
      longitudeDelta: 0.2,
      latitudeDelta: 0.2,
    },
    price: 100,
    rate: 4.6,
    inFavourites: false,
    photo: Santorini,
    category: Categories.Ocean,
    darkContent: true,
  },
  {
    name: 'Bora Bora',
    description:
      'A tropical paradise with crystal-clear turquoise waters, overwater bungalows, and lush green mountains, Bora Bora is a dream destination for honeymooners and travelers seeking tranquility.',
    country: 'French Polynesia',
    location: {
      latitude: -16.6,
      longitude: -151.7415,
      longitudeDelta: 0.2,
      latitudeDelta: 0.2,
    },
    price: 170,
    rate: 4.0,
    inFavourites: false,
    photo: BoraBora,
    category: Categories.Beach,
    darkContent: true,
  },
  {
    name: 'Machu Picchu',
    description:
      'Nestled high in the Andes Mountains, Machu Picchu is an ancient Incan citadel surrounded by mist-covered peaks. The awe-inspiring ruins and breathtaking views make it a UNESCO World Heritage site.',
    country: 'Peru',
    location: {
      latitude: -13.2331,
      longitude: -72.545,
      longitudeDelta: 0.3,
      latitudeDelta: 0.3,
    },
    price: 130,
    rate: 4.8,
    inFavourites: false,
    photo: MachuPicchu,
    category: Categories.Forest,
    darkContent: false,
  },
  {
    name: 'Victoria Falls',
    description:
      'One of the largest and most spectacular waterfalls in the world, Victoria Falls creates a dramatic curtain of mist as it plunges into the Zambezi Gorge, offering a thrilling sight and a variety of outdoor activities.',
    country: 'Zambia/Zimbabwe',
    location: {
      latitude: -17.9,
      longitude: 25.8572,
      longitudeDelta: 0.3,
      latitudeDelta: 0.3,
    },
    price: 50,
    rate: 5.0,
    inFavourites: false,
    photo: VictoriaFalls,
    category: Categories.Mountain,
    darkContent: true,
  },
  {
    name: 'Great Barrier Reef',
    description:
      "The world's largest coral reef system, the Great Barrier Reef is renowned for its vibrant marine life and clear blue waters, making it a paradise for snorkelers and divers.",
    country: 'Australia',
    location: {
      latitude: -18.2871,
      longitude: 146.7,
      longitudeDelta: 1.5,
      latitudeDelta: 1.5,
    },
    price: 120,
    rate: 4.5,
    inFavourites: false,
    photo: GreatBarrierReef,
    category: Categories.Ocean,
    darkContent: false,
  },
  {
    name: 'Aoraki / Mount Cook',
    description:
      'The highest peak in New Zealand, Aoraki (Mount Cook) is surrounded by breathtaking alpine landscapes, turquoise lakes, and rugged terrain, attracting mountaineers and nature enthusiasts.',
    country: 'New Zealand',
    location: {
      latitude: -43.7343,
      longitude: 170.0962,
      longitudeDelta: 0.7,
      latitudeDelta: 0.7,
    },
    price: 90,
    rate: 4.0,
    inFavourites: false,
    photo: MountCook,
    category: Categories.Mountain,
    darkContent: false,
  },
  {
    name: 'Banff National Park',
    description:
      "Located in the Canadian Rockies, Banff National Park boasts majestic mountain scenery, glacial lakes, and abundant wildlife. It's a haven for outdoor adventurers and photographers.",
    country: 'Canada',
    location: {
      latitude: 51.2968,
      longitude: -115.9281,
      longitudeDelta: 1.3,
      latitudeDelta: 1.3,
    },
    price: 20,
    rate: 4.6,
    inFavourites: false,
    photo: BanffNationalPark,
    category: Categories.Forest,
    darkContent: false,
  },
  {
    name: 'Bali',
    description:
      'With its lush rice terraces, ancient temples, and stunning beaches, Bali is a tropical paradise that offers a rich cultural experience and a range of outdoor activities.',
    country: 'Indonesia',
    location: {
      latitude: -8.88,
      longitude: 115.189,
      latitudeDelta: 1.3,
      longitudeDelta: 1.3,
    },
    price: 110,
    rate: 4.0,
    inFavourites: false,
    photo: Bali,
    category: Categories.Beach,
    darkContent: false,
  },
  {
    name: 'Étretat',
    country: 'France',
    description:
      'The commune is situated on the coast of Northern France and is famous for the amazing cliffs. For ages the rocky arches were visited and painted by artists like Eugène Boudin, Gustave Courbet and Claude Monet. Today the scenic spot attracts many tourists and photographers',
    price: 150,
    rate: 3.4,
    location: {
      latitude: 49.7079,
      longitude: 0.205,
      longitudeDelta: 0.3,
      latitudeDelta: 0.3,
    },
    inFavourites: false,
    photo: Etretat,
    category: Categories.Mountain,
    darkContent: false,
  },
  {
    name: 'Milford Sound',
    country: 'New Zealand',
    description:
      'This is one of our most favorite natural wonders! The fjord is a favorite tourist destination in New Zealand and owns a legendary appraisal by Rudyard Kipling, who called it the eighth Wonder of the World. The fjord has two waterfalls – Lady Bowen Falls and Stirling Falls, accompanied by the hundreds of temporary falls after a heavy rain. Well developed tourism provides with the best service and tours to this magnificent place.',
    photo: MilfordSoundNewZeland,
    price: 170,
    rate: 3.9,
    inFavourites: false,
    location: {
      latitude: -44.8,
      longitude: 167.8974,
      longitudeDelta: 0.6,
      latitudeDelta: 0.6,
    },
    category: Categories.Mountain,
    darkContent: false,
  },
  {
    name: 'Munich',
    country: 'Germany',
    description:
      'The capital of Bavaria is also one of the most beautiful cities in Germany. Situated in the backdrop of the Alps, it has plenty to offer: from historic architecture and world class museums, to hip neighborhoods, bars and restaurants. Annual beer festival Octoberfest attracts millions of tourists each year alone!',
    photo: MunichGermany,
    price: 170,
    rate: 3.9,
    inFavourites: false,
    location: {
      latitude: 48,
      longitude: 11.582,
      longitudeDelta: 1,
      latitudeDelta: 1,
    },
    category: Categories.Camping,
    darkContent: false,
  },
  {
    name: 'Horseshoe Bend',
    country: 'Arizona, USA',
    description:
      'The Colorado River bend belongs to the Glen Canyon chain. What is unusual about it, is that you can see it from the cliff above, since the Bend is surrounded with canyons. No need to fly with a helicopter to view this natural beauty. The sun fills in with light, therefore many gorgeous pictures have been created by the hikers. A really good spot for travel photography.',
    photo: HorseshoeBendArizonaUSA,
    price: 170,
    rate: 3.9,
    inFavourites: false,
    location: {
      latitude: 36.8796,
      longitude: -111.4108,
      longitudeDelta: 0.5,
      latitudeDelta: 0.5,
    },
    category: Categories.Fishing,
    darkContent: false,
  },
  {
    name: 'Lake Luice',
    country: 'Canada',
    description:
      'The world famous and most recognizable lake is found in the Valley of the Ten Peaks, at an elevation of approximately 1,885 m (6,183 feet). Moraine Lake is famous for its blue color and the amazing surroundings: high mountains with snowy peaks create the desired tranquility. Many hiking tracks are trod by visitors from all around the world.',
    photo: MoraineLakeCanada,
    price: 170,
    rate: 3.9,
    inFavourites: false,
    location: {
      latitude: 51.3271,
      longitude: -116.1822,
      longitudeDelta: 0.5,
      latitudeDelta: 0.5,
    },
    category: Categories.Fishing,
    darkContent: true,
  },
  {
    name: 'Eilean Donan',
    country: 'Loch Duich Island, Scotland',
    description:
      'Built in the 13th century, the castle belonged to the Clan Mackenzie. It was exposed to a lot of aristocratic dramas and finally fully destroyed by the Jacobites in the 18th century. The castle’s renovation started in 1919 and was finished in 1932, making it one of the most popular castles in Scotland today.',
    photo: EileanDonanLochDuichIslandScotland,
    price: 170,
    rate: 3.9,
    inFavourites: false,
    location: {
      latitude: 57.2739,
      longitude: -5.5162,
      longitudeDelta: 0.4,
      latitudeDelta: 0.4,
    },
    category: Categories.Forest,
    darkContent: false,
  },
  {
    name: 'The Eiffel Tower',
    country: 'Paris, France',
    description:
      'Erected in the 1889 to present the World’s Fair, the iron tower initially received a lot of criticism. Nevertheless it has become a signature landmark of Paris and the most recognizable building in the world. It is also one of the most popular attractions in the world: by 2010 it was visited by 250 million tourists. Approximately 7 million visitors ascend it every year.',
    photo: TheEiffelTowerParisFrance,
    price: 170,
    rate: 3.9,
    inFavourites: false,
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
      longitudeDelta: 0.3,
      latitudeDelta: 0.5,
    },
    category: Categories.Camping,
    darkContent: false,
  },
  {
    name: 'Architecture in Barcelona',
    country: 'Spain',
    description:
      'Antoni Gaudi – the genius architect – has shaped the town’s cityscape. It is the main reason why Barcelona is so famous among the tourists. The glorious church of Sagrada Família, surreal Casa Batlló, exciting Park Güell and other works have made a huge impact on how we understand architecture today.',
    photo: ArchitectureInBarcelonaSpain,
    price: 170,
    rate: 3.9,
    inFavourites: false,
    location: {
      latitude: 41.409664637558585,
      longitude: 2.1781262607395466,
      longitudeDelta: 0.5,
      latitudeDelta: 0.5,
    },
    category: Categories.Camping,
    darkContent: false,
  },
  {
    name: 'Lysefjorden',
    country: 'Norway',
    description:
      'The fjord is famous for Preikestolen – a steep flat cliff, looking down the abyss, created by the fjord. It attracts thousands of visitors, who want to admire the breathtaking views and take some impressive pictures. It is the best spot to approach Lysefjorden as well',
    photo: LysefjordenNorway,
    price: 170,
    rate: 3.9,
    inFavourites: false,
    location: {
      latitude: 58.9871,
      longitude: 6.0892,
      longitudeDelta: 1,
      latitudeDelta: 1,
    },
    category: Categories.Forest,
    darkContent: false,
  },
  {
    name: 'Golden Gate Bridge',
    country: 'San Francisco, USA',
    description:
      'The engineering wonder is a symbol of the West Coast. Besides being the most photographed bridge in the world, the Golden Gate Bridge offers a beautiful trek, which takes from one side to another.',
    photo: GoldenGateBridgeSanFranciscoUSA,
    price: 170,
    rate: 3.9,
    inFavourites: false,
    location: {
      latitude: 37.8129,
      longitude: -122.4783,
      longitudeDelta: 0.1,
      latitudeDelta: 0.1,
    },
    category: Categories.Camping,
    darkContent: false,
  },
]

export default MOCK_PLACES
