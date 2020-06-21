export class IterableList {
    constructor() {};

    values() {

    }

    keys() {

    }

    entries() { //if needed?

    }
}

let str: string;

interface ListModel {
    // first: boolean;
    next: ListedItem | null;
    prev: ListedItem | null;
}
export interface ListedItem {
    id: string;
    model: ListModel;
    value: any;
}

interface IIterableList {
    /**
     * key would be equal inner id
     */
    first;
    last;
    // next;
    data: {
        [key: string]: ListedItem
    }
}
