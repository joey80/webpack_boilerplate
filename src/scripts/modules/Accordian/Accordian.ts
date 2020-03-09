import './styles.scss';

interface AccordianProps {
  className: string;
  data: {
    text: string;
    title: string;
  };
}

export default class Accordian {
  className: string;
  data: [
    {
      text: string;
      title: string;
    }
  ];

  constructor(props: AccordianProps) {
    for (let key in props) {
      this[key] = props[key];
    }
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
      const elm = e.target as HTMLElement;
      if (elm.className === 'accordian__li') {
        this.toggleItem(elm.lastElementChild);
      }

      if (elm.className === 'accordian__title') {
        this.toggleItem(elm.nextElementSibling);
      }

      if (elm.classList.contains('accordian__body')) {
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
