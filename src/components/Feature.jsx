import PropTypes from 'prop-types';
import './Feature.scss';

export function Feature({name, version, link}) {
    const featureName = <span className="feature-name">{name}</span>;
    return (
        <span className="feature">
            {
                link
                    ? <a className="feature-link" target="__blank" href={link}>{featureName}</a>
                    : featureName
            }
            {version && <span className="feature-versoin">v{version}</span>}
        </span>
    );
}

Feature.propTypes = {
    name: PropTypes.string.isRequired,
    version: PropTypes.string,
    link: PropTypes.string
};

Feature.defaultProps = {
    version: undefined,
    link: undefined
};

export default Feature;
