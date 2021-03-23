import React from 'react'
import Button from './Button'
import './header.scss';

export default function Header(props) {
    return (
        <header className="header">
            <h1 className="header__title">Dashboard</h1>
            <Button handleButtonClick={props.handleButtonClick}/>
        </header>
    )
}
