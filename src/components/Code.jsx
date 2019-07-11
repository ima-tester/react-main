import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Code.scss';

export function Code(props, ...args) {
    if (typeof props === 'string') {
        return <Code>{[props, ...args].join('\n')}</Code>;
    }
    const {className, inline, ...rest} = props;
    const componentClassName = classNames(
        'code',
        className,
        {
            'code-inline': inline
        }
    );

    return <code className={componentClassName} {...rest} />;
}

Code.propTypes = {
    className: PropTypes.string,
    inline: PropTypes.bool
};

Code.defaultProps = {
    className: undefined,
    inline: false
};

export default Code;
