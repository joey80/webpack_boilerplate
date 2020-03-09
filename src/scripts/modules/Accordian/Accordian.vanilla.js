import './styles.scss';

export default class Accordian {
  constructor(props) {
    this.data = props.data;
    this.className = props.className;
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
      if (e.target.className === 'accordian__li') {
        this.toggleItem(e.target.lastElementChild);
      }

      if (e.target.className === 'accordian__title') {
        this.toggleItem(e.target.nextElementSibling);
      }

      if (e.target.classList.contains('accordian__body')) {
        this.toggleItem(e.target);
      }
    });
  }

  render() {
    this.setupEventListeners();

    return `
    <ul class='accordian__ul ${this.className}'>
      ${this.renderItems()}
    </ul>`;
  }
}
