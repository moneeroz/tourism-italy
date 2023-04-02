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

export { citiesInfo, citiesWeather };
