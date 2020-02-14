import './styles.scss';

const NavBar = (() => {
  const setupEventListeners = () => {
    document.body.addEventListener('click', e => {
      if (e.target.className === 'navbar__item') {
        // do something
      }
    });
  };

  const render = () => {
    setupEventListeners();

    return `
    <nav class='navbar'>
      <ul class='navbar__container'>
        <li class='navbar__item'>Products</li>
        <li class='navbar__item'>How To Use</li>
        <li class='navbar__item'>Historical Data</li>
        <li class='navbar__item'>Indicator/EA</li>
        <li class='navbar__item'>Support</li>
      </ul>
    </nav>`;
  };

  return render();
})();

export default NavBar;
