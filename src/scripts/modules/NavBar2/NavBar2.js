import './styles.scss';

export default class NavBar2 {
  constructor(data) {
    this.data = data;
  }

  renderSubItems(subData) {
    return subData.map(elm => `<li class='navbar__item__sub'>${elm}</li>`).join('');
  }

  renderItems() {
    return this.data
      .map(
        elm =>
          `<li class='navbar__item'>${elm.title}${
            elm.sub
              ? `<ul class='navbar__container__sub'>${this.renderSubItems(elm.sub)}</ul></li>`
              : '</li>'
          }`
      )
      .join('');
  }

  setupEventListeners() {
    document.body.addEventListener('click', e => {
      if (e.target.className === 'navbar__item') {
        console.log('you clicked a nav item');
      }
    });

    document.body.addEventListener('mouseover', e => {
      const lastNodeClass = e.target.lastChild.classList;
      if (lastNodeClass && lastNodeClass.contains('navbar__container__sub')) {
        lastNodeClass.add('navbar__container__sub--show');
      }
    });

    document.body.addEventListener('mouseout', e => {
      const lastNodeClass = e.target.lastChild.classList;
      if (lastNodeClass && lastNodeClass.contains('navbar__container__sub--show')) {
        lastNodeClass.remove('navbar__container__sub--show');
      }
    });
  }

  render() {
    this.setupEventListeners();

    return `
    <nav class='navbar'>
      <ul class='navbar__container'>
      ${this.renderItems()}
      </ul>
    </nav>`;
  }
}
