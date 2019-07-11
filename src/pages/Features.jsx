import {Feature} from '../components';
import {dependencies, devDependencies} from '../../package.json';

const features = [
    {
        name: 'Babel',
        version: devDependencies['@babel/core'].replace('^', ''),
        link: 'https://babeljs.io/'
    },
    {
        name: 'Webpack',
        version: devDependencies.webpack.replace('^', ''),
        link: 'https://webpack.js.org/'
    },
    {
        name: 'React',
        version: dependencies.react.replace('^', ''),
        link: 'https://reactjs.org/'
    },
    {
        name: 'React router',
        version: dependencies['react-router-dom'].replace('^', ''),
        link: 'https://github.com/ReactTraining/react-router'
    },
    {
        name: 'Blueprintjs',
        version: dependencies['@blueprintjs/core'].replace('^', ''),
        link: 'http://blueprintjs.com/docs'
    },
    {
        name: 'ESLint',
        version: devDependencies.eslint.replace('^', ''),
        link: 'https://eslint.org/'
    },
    {
        name: 'Sass Lint',
        version: devDependencies['sass-lint'].replace('^', ''),
        link: 'https://github.com/sasstools/sass-lint/'
    },
    {
        name: 'Jest',
        version: devDependencies.jest.replace('^', ''),
        link: 'https://facebook.github.io/jest/'
    }
];

export function Features() {
    return (
        <div>
            <h1>Application Features</h1>
            <p>
                From the scratch the application supports the following features
            </p>
            <ul>
                {
                    features.map(feature => <li key={feature.name}><Feature {...feature} /></li>)
                }
            </ul>
        </div>
    );
}

export default Features;
