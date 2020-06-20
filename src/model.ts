export interface Tab {
    active: boolean;
    caption: string;
    content: any //change
}

export interface Configuration {
    endpointURL: '';
}

interface ListModel {
    first: boolean;
    next: List;
    prev: List | null;
}

export interface ListedItem {
    id: string;
    model: ListModel;
    value: any;
}

// key should be equal to ListedItem.id
export interface List {
    first: ListedItem;
    last: ListedItem;
    [key: string]: ListedItem;
}

// export interface ListIterator {
//     next: () => {done: boolean; value?: any};
//     [key: string]: any;
// }
