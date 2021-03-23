import React from 'react'

export default function DashboardItem(props) {

    function unfocus(e) {
        let item = {
            description: e.target.value,
            id: props.item.id
        };
        props.handleUnfocus(item);
    }

    function handleDeleteClick() {
        props.deleteItem(props.item.id);
    }

    return (
        <li className="dashboard__item">
            <button className="dashboard__item-delete" onClick={handleDeleteClick}></button>
            <textarea name="dashboard" className="dashboard__item-textarea" defaultValue={props.item.description} placeholder="Введите текст" onBlur={unfocus}/>
        </li>
    )
}
