import ElementObserver from "./ElementObserver";

export default class ElementСache {
  private element: Element;
  private cachElementKey: string;
  private observer: ElementObserver;

  constructor(elementSelector: string, cachElementKey: string) {
    this.element = document.querySelector(elementSelector);
    this.cachElementKey = cachElementKey;
    this.initEvents();
    this.initObserver()
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.cachElementKey, this.element.innerHTML);
  }

  private loadpage() {
    const data = localStorage.getItem(this.cachElementKey);
    if (data) {
      this.element.innerHTML = data;
    }
  }

  private initEvents() {
    window.addEventListener("load", this.loadpage.bind(this));
  }

  private initObserver(){
    this.observer = new ElementObserver();
    this.observer.addObserve(() => this.saveToLocalStorage(), this.element);
  }
}
