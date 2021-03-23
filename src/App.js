import {React, useState, useEffect} from 'react'
import './app.scss';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

import { getList, deleteItem, createItem, updateItem } from './services/service';


export default function App() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getList().then(list => {
            setList(list);
        });
    }, [])

    function handleUpdateItem(updatedItem) {
        updateItem(updatedItem).then(() => {

            setList(list.map((item) => item.id !== updatedItem.id ? item : updatedItem));
        });
    }

    function handleDeleteItem(id) {
        deleteItem(id).then(() => {
            setList(list.filter((item) => item.id !== id));
        });
    };

    function handleCreateItem() {
        let newItem = {description: ''};

        createItem(newItem).then((data) => {
            setList([...list, data]);
        });
    };

    return (
        <>
            <Header handleButtonClick={handleCreateItem}/>
            <Dashboard list={list} handleUpdateItem={handleUpdateItem} handleDeleteItem={handleDeleteItem}/>
        </>
    );
}