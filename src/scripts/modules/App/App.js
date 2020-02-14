import Accordian from '../Accordian/Accordian';
import TestMod2 from '../TestMod2/TestMod2';
import NavBar from '../NavBar/NavBar';

const App = (() => {
  const rootNode = document.getElementById('root');
  let _App;

  const appendToDOM = () => {
    _App = document.createElement('div');
    rootNode.appendChild(_App);
  };

  const render = () => {
    appendToDOM();
    const DOM = `
    ${NavBar}
    ${Accordian}
    ${TestMod2}
    `;
    _App.insertAdjacentHTML('beforeend', DOM);
  };

  return render();
})();

export default App;
