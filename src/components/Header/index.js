import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
    return (
        <Menu>
            <Menu.Item style={{fontSize : 24}}>Learn Functions</Menu.Item>
            <Menu.Item>Create quiz</Menu.Item>
            <Menu.Item>Logout</Menu.Item>

        </Menu>
    )
}

export default Header;