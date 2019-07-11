import {Code} from '../components';

export function Development() {
    return (
        <div>
            <h1>Application Development</h1>
            <h2>Prepare</h2>
            <p>
                To init application development just run
                <Code>
                    npm install
                </Code>
                This will install all application dependencies.
            </p>
            <h2>Development Environment</h2>
            <p>
                By default in development environment application is served on <Code inline>http://localhost:8081</Code>.
                Port can be changed in configuration file for
                development environment <Code inline>webpack.dev.js</Code>.
            </p>
            <p>
                Application has several commands that are useful for development cycle
                {
                    Code(
                        'npm start       # starts the development server',
                        'npm run lint    # makes code quality check',
                        'npm test        # runs tests over the application'
                    )
                }
                When the server started it watches for changes are made to the code
                and refreshes the client each time it occurred.
            </p>
        </div>
    );
}

export default Development;
