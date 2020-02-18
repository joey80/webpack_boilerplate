import Accordian from '../Accordian/Accordian';
import TestMod2 from '../TestMod2/TestMod2';
import NavBar2 from '../NavBar2/NavBar2';

const App = (() => {
  const navData = ['Products', 'How To Use', 'Historical Data', 'Indicator/EA Support'];
  const rootNode = document.getElementById('root');
  const nb2 = new NavBar2(navData).render();
  let _App;

  const appendToDOM = () => {
    _App = document.createElement('div');
    rootNode.appendChild(_App);
  };

  const render = () => {
    appendToDOM();
    const DOM = `
    ${nb2}
    ${Accordian}
    ${TestMod2}
    `;
    _App.insertAdjacentHTML('beforeend', DOM);
  };

  return render();
})();

export default App;
