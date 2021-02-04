import React from 'react';
import { Menu, Button, Icon, Image } from 'semantic-ui-react';
import logo from '../../assets/images/logo.svg';

const Header = () => {
    return (
        <Menu secundary pointing>
            <Image src = "logo" width = {60}></Image>
            <Menu.Item style = {{fontSize : 24}}>Learn Functions</Menu.Item>
            <Menu.Item position = "right">
                <Button icon>
                    <Icon name = "add"></Icon>
                    Create quiz
                </Button></Menu.Item>
            <Menu.Item>Logout</Menu.Item>

        </Menu>
    )
}

export default Header;