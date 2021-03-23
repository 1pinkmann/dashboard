import {useEffect, useState} from "react";
import {createItem, deleteItem, getList, updateItem} from "./service";

export function useItems(defaultValue) {
    const [list, setList] = useState(defaultValue);

    useEffect(() => {
        getList().then(list => {
            setList(list);
        });
    }, []);

    function handleUpdateItem(updatedItem) {
        updateItem(updatedItem).then(() => {

            setList(list.map((item) => item.id !== updatedItem.id ? item : updatedItem));
        });
    }

    function handleDeleteItem(id) {
        deleteItem(id).then(() => {
            setList(list.filter((item) => item.id !== id));
        });
    }

    function handleCreateItem() {
        let newItem = {description: ''};

        createItem(newItem).then((data) => {
            setList([...list, data]);
        });
    }

    return {
        list,
        handleUpdateItem,
        handleDeleteItem,
        handleCreateItem
    }
}