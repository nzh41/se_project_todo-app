class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this.items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItems(element) {
    this._container.append(element);
  }
}

export default Section;
