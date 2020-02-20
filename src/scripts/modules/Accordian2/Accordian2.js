import './styles.scss';

export default class Accordian2 {
  constructor(data) {
    this.data = data;
  }

  renderItems() {
    return this.data
      .map(
        elm =>
          `<li class='accordian__li'>
            <span class='accordian__title'>${elm.title}</span>
            <span class='accordian__body'>${elm.text}</span>
          </li>`
      )
      .join('');
  }

  toggleItem(target) {
    target.classList.toggle('accordian__body--show');
  }

  setupEventListeners() {
    document.body.addEventListener('click', e => {
      if (e.target.className === 'accordian__title') {
        this.toggleItem(e.target.nextElementSibling);
      }
    });
  }

  render() {
    this.setupEventListeners();

    return `
    <ul class='accordian__ul'>
      ${this.renderItems()}
    </ul>`;
  }
}
