import renderer from 'react-test-renderer';
import React from 'react';

import {Code} from '../Code';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <Code>
                Code example
            </Code>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
