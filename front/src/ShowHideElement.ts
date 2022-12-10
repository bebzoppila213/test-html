


export default class ShowHideElement{
    private element: Element;
    private showClass: string;

    constructor(elementClass: string, showClass: string){
        this.element = document.querySelector(elementClass)
        this.showClass = showClass
    }

    public show(){
        this.element.classList.add(this.showClass)
    }

    public hide(){
        this.element.classList.remove(this.showClass)
    }
}