import PropTypes from 'prop-types';
import {Component} from 'react';
import {NavbarGroup, Button, Intent, NavbarDivider, AnchorButton, Classes} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';
import classNames from 'classnames';

import './RepoActions.scss';

export class RepoActions extends Component {
    copy = () => {
        if (this.sourceInput) {
            this.sourceInput.select();
            document.execCommand('copy');
        }
    }

    mountSourceInput = sourceInput => Object.assign(this, {sourceInput})

    render() {
        const {copy, mountSourceInput} = this;
        const {repo, branch} = this.props;

        const repoUrl = repo;
        const editUrl = repo && `${repo.replace(/\.git$/, '')}/blob/${branch}/src/App.jsx`;

        return (
            <NavbarGroup className="repo-actions">
                <span className="repo-actions-source">
                    <input
                        className={classNames(Classes.INPUT, 'repo-actions-source-value')}
                        ref={mountSourceInput}
                        readOnly
                        value={repoUrl}
                    />
                </span>
                <Button pintent={Intent.PRIMARY} icon={IconNames.CLIPBOARD} onClick={copy}>
                    Copy
                </Button>
                <NavbarDivider />
                <AnchorButton target="_blank" href={editUrl} text="Edit application" icon={IconNames.EDIT} />
            </NavbarGroup>
        );
    }
}

RepoActions.propTypes = {
    repo: PropTypes.string.isRequired,
    branch: PropTypes.string
};

RepoActions.defaultProps = {
    branch: 'master'
};

export default RepoActions;
