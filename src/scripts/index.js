import Accordian from '../scripts/modules/Accordian/Accordian';
import '../styles/index.scss';

const data = [
  { title: 'This is the first title', text: 'This is some cool text man' },
  { title: 'This is the second title', text: 'Wow this is very intersting' },
  { title: 'This is the third title', text: 'Can you believe what youre reading?' }
];

Accordian.init(data);
