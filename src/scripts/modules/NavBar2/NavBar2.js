import './styles.scss';

export default class NavBar2 {
  constructor(data) {
    this.data = data;
  }

  renderItems() {
    return this.data.map(elm => `<li class='navbar__item'>${elm}</li>`).join('');
  }

  setupEventListeners() {
    document.body.addEventListener('click', e => {
      if (e.target.className === 'navbar__item') {
        console.log('you clicked a nav item');
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
