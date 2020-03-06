//import './styles.scss';

const TestMod2 = (() => {
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

  const setupEventListeners = () => {
    document.body.addEventListener('click', () => {
      //console.log('poopy butt');
    });
  };

  const render = () => {
    setupEventListeners();
    return `<div>JOEY is cool</div>`;
  };

  return render();
})();

export default TestMod2;
