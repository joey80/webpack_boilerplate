import Accordian2 from '../Accordian2/Accordian2';
import TestMod2 from '../TestMod2/TestMod2';
import NavBar2 from '../NavBar2/NavBar2';

const App = (() => {
  const rootNode = document.getElementById('root');
  const accordianData = [
    { title: 'This is the first title', text: 'This is some cool text man' },
    { title: 'This is the second title', text: 'Wow this is very intersting' },
    { title: 'This is the third title', text: 'Can you believe what youre reading?' }
  ];
  const navData = [
    { title: 'Products', sub: ['one', 'two', 'three'] },
    { title: 'How To Use' },
    { title: 'Historical Data', sub: ['four', 'five', 'six'] },
    { title: 'Indicator/EA Support', sub: ['seven', 'eight', 'nine'] }
  ];

  const render = () => {
    const DOM = `
    ${new NavBar2(navData).render()}
    ${new Accordian2(accordianData).render()}
    ${TestMod2}
    `;
    rootNode.insertAdjacentHTML('beforeend', DOM);
  };

  return render();
})();

export default App;
