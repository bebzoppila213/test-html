
export class OpenCloseByElement{
    private element: Element;
    private trigger: Element;
    private classOpen: string
    private elementIsOpen = false

    constructor(elementClas: string, triggerClass: string, classOpen: string){
        this.element = document.querySelector(elementClas)
        this.trigger = document.querySelector(triggerClass)
        this.classOpen = classOpen
        this.initEvents()
    }

    private openElement(event: MouseEvent){
        event.stopPropagation()
        this.elementIsOpen = true
        this.element.classList.add(this.classOpen)
    }

    private closeElement(){
        this.element.classList.remove(this.classOpen)
    }

    private windowClick(event: MouseEvent){
        if(!event.composedPath().includes(this.element) && this.elementIsOpen){
            this.closeElement()
        }
    }

    private initEvents(){
        this.trigger.addEventListener('click', this.openElement.bind(this))
        document.addEventListener('click', this.windowClick.bind(this))
    }
}