import './styles.scss';

const Accordian = (() => {
  const rootNode = document.getElementById('root');
  let _Accordian;

  const appendToDOM = () => {
    _Accordian = document.createElement('ul');
    _Accordian.className = 'accordian__ul';
    rootNode.appendChild(_Accordian);
  };

  const buildTheAccordian = data => {
    data.forEach(elm => {
      let markup = `
      <li>
        <span class='accordian__title'>${elm.title}</span>
        <span class='accordian__body'>${elm.text}</span>
      </li>`;
      _Accordian.insertAdjacentHTML('beforeend', markup);
    });
  };

  const toggleAccordian = target => {
    const bodyText = target.nextElementSibling;
    bodyText.classList.contains('accordian__body--show')
      ? bodyText.classList.remove('accordian__body--show')
      : bodyText.classList.add('accordian__body--show');
  };

  const setupEventListeners = () => {
    document.body.addEventListener('click', e => {
      if (e.target.className === 'accordian__title') {
        toggleAccordian(e.target);
      }
    });
  };

  return {
    init: data => {
      appendToDOM();
      buildTheAccordian(data);
      setupEventListeners();
    }
  };
})();

export default Accordian;
