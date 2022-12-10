


export default class ElementObserver{
    private observers: MutationObserver[] = [];
    private config = {
        attributes: true,
        childList: true,
        subtree: true,
      };

    public addObserve(func: () => void, element: Element){
        // console.log(func());
        
        const observer = new MutationObserver(func)
        observer.observe(element, this.config);
        this.observers.push(observer)
    }
}