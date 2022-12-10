
export function debounce( callback: () => void, delay: number ) {
    let timeout: NodeJS.Timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout( callback, delay );
    }
}