//import './styles.scss';

const TestMod = (() => {
  const rootNode = document.getElementById('root');
  let _TestMod;

  const appendToDOM = () => {
    _TestMod = document.createElement('div');
    _TestMod.className = 'test-mod';
    rootNode.appendChild(_TestMod);
  };

  const buildTheThing = () => {
    let markup = `
        <span class='test-mod__body'>HELLO WORLD</span>`;
    _TestMod.insertAdjacentHTML('beforeend', markup);
  };

  return {
    init: () => {
      appendToDOM();
      buildTheThing();
    }
  };
})();

export default TestMod;
