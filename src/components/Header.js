import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
          showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }
    showMenu(event) {
    event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    
    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }
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
                    <div><img src={require("../img/Avatar.png")} alt="Avatar" onClick={this.showMenu}/></div>
                    <div style={{ paddingLeft: '8px' }}><img src={require("../img/Dropdown.png")} alt="Dropdown" onClick={this.showMenu}/></div>
                    
                    {this.state.showMenu &&
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={3000} transitionEnter={false} transitionLeave={false}>
                    <div className="Dropdown-menu">
                        <p style={{ borderBottom: '1px solid #dfe2e5' }}>Your profil</p>
                        <p>Setting</p>
                        <p style={{ borderBottom: '1px solid #dfe2e5' }}>Help</p>
                        <p>Sing Out</p>
                    </div>
                    </ReactCSSTransitionGroup>
                    }
                </div>
            </div>
        )
    }
}
