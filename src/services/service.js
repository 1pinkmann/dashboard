import {LIST_URL} from './constants';

export function getList() {
    return fetch(LIST_URL).then((res) => res.json());
}

export function deleteItem(id) {
    return fetch(LIST_URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function createItem(newItem) {
    return fetch(LIST_URL, {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function updateItem(updatedItem) {
    return fetch(LIST_URL + updatedItem.id, {
        method: 'PUT',
        body: JSON.stringify(updatedItem),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}