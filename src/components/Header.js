import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="logo">
                    <p style={{ color: '#354052', margin: '0px' }}>SMART<small>
                        <span style={{ color: '#36af47' }}>G</span>
                        <span style={{ color: '#1991eb' }}>A</span>
                        <span style={{ color: '#f7981c' }}>M</span>
                        <span style={{ color: '#ed1c24' }}>E</span>
                        <span style={{ color: '#9a89e3' }}>S</span></small></p>
                </div>
                <div className="user-avatar">
                    <div><img src={require("../img/Avatar.png")} alt="Avatar"/></div>
                    <div style={{ paddingLeft: '8px' }}><img src={require("../img/Dropdown.png")} alt="Dropdown"/></div>
                </div>
            </div>
        )
    }
}
