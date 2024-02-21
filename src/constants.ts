import {Track} from 'react-native-track-player';

export const playListData: Track[] = [
  {
    id: 1,
    title: 'Beetein Lamhein',
    artist: 'K. K.',
    album: 'Reverb mix',
    artwork:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRASp-BYi0WQSVB8uNSyJfV12sSOOHEPkdzw&usqp=CAU',
    url: require('./assets/audio/one.mp3'),
  },
  {
    id: 2,
    title: 'Tere Bin',
    artist: 'Atif Aslam',
    album: 'Tere Bin',
    artwork:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFowT4DnqPZYqtEX3svtSnmO_HcK1xty-UAg&usqp=CAU',
    url: require('./assets/audio/two.mp3'),
  },
  {
    id: 3,
    title: 'Intro III',
    artist: 'Nathan Feuristein',
    album: 'Mansion',
    artwork:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BluA-nG5rc2GT26IoCF3LXhH3DBikcYPHg&usqp=CAU',
    url: require('./assets/audio/three.mp3'),
  },
  {
    id: 4,
    title: 'Heathens',
    artist: 'TwentyOne Pilots',
    album: '21-pilots',
    artwork:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMvd0VPrJtX5CnvZa7PsECokQ_s3TKSyu3g&usqp=CAU',
    url: require('./assets/audio/four.mp3'),
  },
];
