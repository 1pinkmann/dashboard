import {React} from 'react'
import './dashboard.scss';
import DashboardItem from './DashboardItem';

export default function Dashboard(props) {

    return (
        <ul className="dashboard">
            {props.list.map(item => {
                return <DashboardItem key={item.id} item={item} handleUnfocus={props.handleUpdateItem} deleteItem={props.handleDeleteItem}/>;
            })}
        </ul>
    );
}
