import React from 'react'

export default function DashboardItem({item, handleUnfocus, deleteItem}) {

    function unfocus(e) {
        let updatedItem = {
            description: e.target.value,
            id: item.id
        };
        handleUnfocus(updatedItem);
    }

    function handleDeleteClick() {
        deleteItem(item.id);
    }

    return (
        <li className="dashboard__item">
            <button className="dashboard__item-delete" onClick={handleDeleteClick}></button>
            <textarea name="dashboard" className="dashboard__item-textarea" defaultValue={item.description} placeholder="Введите текст" onBlur={unfocus}/>
        </li>
    )
}
