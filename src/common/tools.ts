export const isClose = (reference = 0, margin = 0) =>
    (toCompare = 0) => Math.abs(reference - toCompare) <= margin;

export const debounce = (fn: Function, time = 150) => {
    let timer: NodeJS.Timeout | null;

    return () => {
        if (timer) {
            return;
        }

        fn();
        timer = setTimeout(() => { timer = null; }, time);
    }
};

export const isScrollable = (element: HTMLDivElement) => element.scrollHeight > element.clientHeight;