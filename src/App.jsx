import {PropTypes} from 'prop-types';
import {Navbar} from '@blueprintjs/core';
import {Link} from 'react-router-dom';

import './App.scss';

import logo from './assets/img/logo.svg';

import {RepoActions, Navigation} from './components';

const {
    APPLICATION_REPOSITORY: repo,
    APPLICATION_BRANCH: branch
} = process.env;


export function App({children}) {
    return (
        <div className="app">
            <header className="app-header">
                <div className="app-title">
                    <Link to="/"><img className="app-title-logo" src={logo} alt="Application logo" /></Link>
                    <h2><Link className="app-title-name" to="/">Welcome to React Application</Link></h2>
                </div>
                <Navbar className="app-navbar">
                    <div className="container flex">
                        <Navigation />
                        <RepoActions {...{repo, branch}} />
                    </div>
                </Navbar>
            </header>
            <section className="app-content">
                <div className="container">
                    {children}
                </div>
            </section>
            <footer className="app-footer" />
        </div>
    );
}
App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default App;
