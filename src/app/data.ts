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
    desc: '',
    imgs: ['', '', '', '', '', '', '', ''],
  },
  {
    name: 'Venice',
    desc: '',
    imgs: ['', '', '', '', '', '', '', ''],
  },
];

export { citiesInfo, citiesWeather, cityAttractions };
