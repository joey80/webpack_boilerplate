import './styles.scss';

const Accordian = (() => {
  const rootNode = document.getElementById('root');

  const buildTheAccordian = data => {
    const ul = document.createElement('ul');
    ul.className = 'accordian__ul';
    rootNode.appendChild(ul);

    data.forEach(elm => {
      let markup = `
      <li>
        <span class='accordian__title'>${elm.title}</span>
        <span class='accordian__body'>${elm.text}</span>
      </li>`;
      ul.insertAdjacentHTML('beforeend', markup);
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
      buildTheAccordian(data);
      setupEventListeners();
    }
  };
})();

export default Accordian;
