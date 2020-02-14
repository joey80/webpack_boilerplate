import './styles.scss';

const NavBar = (() => {
  const setupEventListeners = () => {
    document.body.addEventListener('click', e => {
      if (e.target.className === 'accordian__title') {
        toggleAccordian(e.target);
      }
    });
  };

  const render = () => {
    setupEventListeners();

    return `
    <nav>This is the nav bar</nav>`;
  };

  return render();
})();

export default NavBar;
