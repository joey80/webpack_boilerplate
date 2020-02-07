import './styles.scss';

const Accordian = (() => {
  const data = [
    { title: 'This is the first title', text: 'This is some cool text man' },
    { title: 'This is the second title', text: 'Wow this is very intersting' },
    { title: 'This is the third title', text: 'Can you believe what youre reading?' }
  ];

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

  const renderItems = () => {
    return data
      .map(
        elm =>
          `<li>
            <span class='accordian__title'>${elm.title}</span>
            <span class='accordian__body'>${elm.text}</span>
          </li>`
      )
      .join('');
  };

  const render = () => {
    setupEventListeners();

    return `
    <ul class='accordian__ul'>
      ${renderItems()}
    </ul>`;
  };

  return render();
})();

export default Accordian;
