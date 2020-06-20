import { List, ListIterator, ListedItem } from './model';
import { isNgTemplate } from '@angular/compiler';

export function createLoopedList(obj: List): void {     //add length [getter]
    // @ts-ignore
    obj[Symbol.iterator] = () => {
        let current: ListedItem = obj.first;
        return {
            next: () => {
                if (current.model.next) {
                    return { done: false, value: current.model.next };
                }

                return { done: true };
            }
        }
    }
};

// export function deleteListedItem(item: ListedItem)

// export const listLooper: (op: T)  => IteratorResult<T> = () => {     //check difference between FD and arrow with this behavior
// export function listLooper<T>(op: T): IteratorResult<T>  {  return { value: op } }   //check difference between FD and arrow with this behavior
//     if (item)
// }


// const a: IteratorYieldResult | IteratorReturnResult
