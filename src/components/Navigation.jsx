import {NavbarGroup} from '@blueprintjs/core';
import {NavLink} from 'react-router-dom';

import './Navigation.scss';

function NavigationItem(props) {
    return (
        <NavLink
            {...props}
            className="navigation-item"
            activeClassName="navigation-item-active"
            exact
        />
    );
}

export function Navigation() {
    return (
        <NavbarGroup className="navigation">
            <NavigationItem to="/">Source</NavigationItem>
            <NavigationItem to="/features">Features</NavigationItem>
            <NavigationItem to="/environment">Environment</NavigationItem>
            <NavigationItem to="/development">Development</NavigationItem>
            <NavigationItem to="/deployment">Deployment</NavigationItem>
        </NavbarGroup>
    );
}

export default Navigation;
