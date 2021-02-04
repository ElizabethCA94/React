import React from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom'

const Header = () => {
    return (
        <Menu>
            <Menu.item>Learn Functions</Menu.item>
            <Menu.item>Create quiz</Menu.item>
            <Menu.item>Logout</Menu.item>

        </Menu>
    )
}

export default Header;