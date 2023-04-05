import { Iattraction } from './interfaces/iattraction';
import { Icity } from './interfaces/icity';
import { Iweather } from './interfaces/iweather';

const citiesInfo: Icity[] = [
  {
    name: 'Milan',
    attractions: ['attraction 1', 'attraction 2', 'attraction 3'],
  },
  {
    name: 'Rome',
    attractions: ['attraction 1', 'attraction 2', 'attraction 3'],
  },
  {
    name: 'Venice',
    attractions: ['attraction 1', 'attraction 2', 'attraction 3'],
  },
];

const citiesWeather: Iweather[] = [
  {
    name: 'Milan',
    springM: 25,
    springN: 15,
    summerM: 30,
    summerN: 19,
    winterM: 6,
    winterN: -1,
    fallM: 18,
    fallN: 14,
    visitFrom: 'May',
    visitTo: 'August',
  },
  {
    name: 'Rome',
    springM: 27,
    springN: 16,
    summerM: 31,
    summerN: 19,
    winterM: 12,
    winterN: 3,
    fallM: 22,
    fallN: 12,
    visitFrom: 'June',
    visitTo: 'September',
  },
  {
    name: 'Venice',
    springM: 24,
    springN: 16,
    summerM: 28,
    summerN: 18,
    winterM: 7,
    winterN: 0,
    fallM: 23,
    fallN: 15,
    visitFrom: 'June',
    visitTo: 'August',
  },
];

const cityAttractions: Iattraction[] = [
  {
    name: 'Milan',
    desc: "If you skip Milan in favor of Italy's more popular cities like Rome, Florence, and Venice, you're missing out: this underrated gem is the country's fashion, architecture, and design capital and should be on every traveller's must-see list. So where to start? There's the iconic Duomo di Milano, the world's largest—and perhaps most stunning—Gothic cathedral; the exquisite mosaics and glass vaults of the Scala Opera House and Galleria Vittorio Emanuelle II; the impressive museums like Pinacoteca di Brera and the contemporary MAXXI. And of course, plenty of boutiques to check out if you're looking to fill an extra suitcase (head to Corso Venezia, Corso Buenos Aires, and Via Montenapoleone for the city's best shopping).",
    imgs: [
      '../assets/img/milan/duomo-di-milano.jpg',
      '../assets/img/milan/duomo-rooftops.jpg',
      '../assets/img/milan/galleria-vittorio-emanuele.jpg',
      '../assets/img/milan/gallerie-d-italia.jpg',
      '../assets/img/milan/monumental-cemetery.jpg',
      '../assets/img/milan/navigli.jpg',
      '../assets/img/milan/piazza-del-duomo.jpg',
      '../assets/img/milan/stadio-giuseppe-meazza.jpg',
    ],
  },
  {
    name: 'Rome',
    desc: "The centuries-old buildings and bridges, the quiet canals and cobblestone alleyways, the labyrinth of eye-catching islands—it doesn’t get dreamier than Venice. And while the capital of the Veneto is undoubtedly a stunner, it’s also a very real city. The Grand Canal and Piazza San Marco are the centre of tourist activity, and the surrounding winding streets are filled with stylish cafes and gelaterias, souvenir shops and one-off boutiques, as well as gorgeous Renaissance palaces and Gothic churches. Once you’ve ticked off the must-see landmarks (don’t miss the Campanile and Gallerie dell'Accademia), get to know the lesser known neighbourhoods like Cannaregio, Dorsoduro, and Castello where locals crowd lowkey trattorias for afternoon aperitivo.",
    imgs: [
      '../assets/img/rome/the-altar-of-the-fatherland.jpg',
      '../assets/img/rome/colosseum.jpg',
      '../assets/img/rome/florence-cathedral.jpg',
      '../assets/img/rome/pantheon-temple.jpg',
      '../assets/img/rome/saint-peters-square.jpg',
      '../assets/img/rome/temple-of-saturn.jpg',
      '../assets/img/rome/tower-of-pisa.jpg',
      '../assets/img/rome/trevi-fountain.jpg',
    ],
  },
  {
    name: 'Venice',
    desc: "The centuries-old buildings and bridges, the quiet canals and cobblestone alleyways, the labyrinth of eye-catching islands—it doesn’t get dreamier than Venice. And while the capital of the Veneto is undoubtedly a stunner, it’s also a very real city. The Grand Canal and Piazza San Marco are the centre of tourist activity, and the surrounding winding streets are filled with stylish cafes and gelaterias, souvenir shops and one-off boutiques, as well as gorgeous Renaissance palaces and Gothic churches. Once you’ve ticked off the must-see landmarks (don’t miss the Campanile and Gallerie dell'Accademia), get to know the lesser known neighbourhoods like Cannaregio, Dorsoduro, and Castello where locals crowd lowkey trattorias for afternoon aperitivo.",
    imgs: [
      '../assets/img/venice/canal-grande.jpg',
      '../assets/img/venice/accademia-gallary.jpg',
      '../assets/img/venice/basilica-san-marco.jpg',
      '../assets/img/venice/burano.jpg',
      '../assets/img/venice/campanile-st-mark.jpg',
      '../assets/img/venice/doges-palace.jpg',
      '../assets/img/venice/mask-carnival.jpg',
      '../assets/img/venice/rialto-bridge.jpg',
    ],
  },
];

export { citiesInfo, citiesWeather, cityAttractions };
