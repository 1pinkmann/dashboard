import React from 'react'
import './app.scss';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

import {useItems} from "./services/hooks";


export default function App() {

    let {list, handleUpdateItem, handleDeleteItem, handleCreateItem} = useItems([]);

    return (
        <>
            <Header handleButtonClick={handleCreateItem}/>
            <Dashboard list={list} handleUpdateItem={handleUpdateItem} handleDeleteItem={handleDeleteItem}/>
        </>
    );
}