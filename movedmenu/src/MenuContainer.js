import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class MenuContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.tooggleMenu = this.tooggleMenu.bind(this);
        this.handleMoudeDown = this.handleMoudeDown.bind(this);
    }

    tooggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleMoudeDown(e) {
        this.tooggleMenu();

        console.log('clicked');

        //e.stopPropagaton();
    }

    render() {
        return (
            <div>
                <MenuButton handleMoseDown={this.handleMoudeDown} />
                <Menu handleMoseDown={this.handleMoudeDown}
                    menuVisibility={this.state.visible} />

                <div>
                    <p>What's item?</p>
                    <ul>
                        <li>Lorem</li>
                        <li>Flow</li>
                        <li>Pol</li>
                        <li>Sit</li>
                        <li>Moreder</li>
                        <li>Modern</li>
                        <li>Nothing</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuContainer;