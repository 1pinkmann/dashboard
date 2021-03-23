import {React} from 'react'
import './dashboard.scss';
import DashboardItem from './DashboardItem';

export default function Dashboard({list, handleUpdateItem, handleDeleteItem}) {

    return (
        <ul className="dashboard">
            {list.map(item => {
                return <DashboardItem key={item.id} item={item} handleUnfocus={handleUpdateItem} deleteItem={handleDeleteItem}/>;
            })}
        </ul>
    );
}
