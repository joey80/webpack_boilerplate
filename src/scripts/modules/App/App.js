import Accordian from '../Accordian/Accordian';
import TestMod2 from '../TestMod2/TestMod2';
import NavBar from '../NavBar/NavBar';
import { Data } from './Data';

const App = (() => {
  const rootNode = document.getElementById('root');

  const render = () => {
    const DOM = `
    ${new NavBar({ data: Data.navData, className: 'demo-navbar' }).render()}
    ${new Accordian({ data: Data.accordianData, className: 'demo-accordian' }).render()}
    ${TestMod2}
    `;
    rootNode.insertAdjacentHTML('beforeend', DOM);
  };

  return render();
})();

export default App;
