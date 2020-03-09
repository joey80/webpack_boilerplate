import './styles.scss';

interface NavBar2Props {
  className: string;
  data: {
    sub: Array<string>;
    title: string;
  };
}

export default class NavBar2 {
  data: [
    {
      sub: Array<string>;
      title: string;
    }
  ];
  className: String;

  constructor(props: NavBar2Props) {
    for (let key in props) {
      this[key] = props[key];
    }
  }

  renderSubItems(subData: Array<String>) {
    return subData.map(elm => `<li class='navbar__item__sub'>${elm}</li>`).join('');
  }

  renderItems() {
    return this.data
      .map(
        elm =>
          `<li class='navbar__item'><a href='#'>${elm.title}</a>${
            elm.sub
              ? `<ul class='navbar__container__sub' style='height: ${elm.sub.length *
                  35}px'>${this.renderSubItems(elm.sub)}</ul></li>`
              : '</li>'
          }`
      )
      .join('');
  }

  setupEventListeners() {
    document.body.addEventListener('click', e => {
      const elm = e.target as HTMLElement;
      if (elm.className === 'navbar__item') {
        console.log('you clicked a nav item');
      }
    });

    document.body.addEventListener('mouseover', e => {
      const elm = e.target as HTMLElement;
      const lastNode = elm.lastChild as HTMLElement;
      const lastNodeClass = lastNode.classList;
      const nextSibling = elm.nextElementSibling;

      if (lastNodeClass && lastNodeClass.contains('navbar__container__sub')) {
        lastNodeClass.add('navbar__container__sub--show');
      }

      if (nextSibling && nextSibling.classList.contains('navbar__container__sub')) {
        nextSibling.classList.add('navbar__container__sub--show');
      }
    });

    document.body.addEventListener('mouseout', e => {
      const elm = e.target as HTMLElement;
      const lastNode = elm.lastChild as HTMLElement;
      const lastNodeClass = lastNode.classList;
      if (lastNodeClass && lastNodeClass.contains('navbar__container__sub--show')) {
        lastNodeClass.remove('navbar__container__sub--show');
      }
    });
  }

  render() {
    this.setupEventListeners();

    return `
    <nav class='navbar ${this.className}'>
      <ul class='navbar__container'>
      ${this.renderItems()}
      </ul>
    </nav>`;
  }
}
