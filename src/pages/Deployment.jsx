import {Code} from '../components';

export function Deployment() {
    return (
        <div>
            <h1>Application deployment</h1>
            <p>

                The application is to be distributed with a built source.
                There&apos;s a command to create a build
                <Code>
                    npm run build
                </Code>
                It creates distribution set in <Code inline>./dist/</Code> folder.
            </p>
            <p>
                There&apos;re another CI useful commands
                {
                    Code(
                        'npm run junit:lint      # makes code quality check and creates a junit report',
                        'npm run junit:test      # runs tests over the application and create a junit report'
                    )
                }
            </p>
            <p>
                Here&apos;s an example of deployment cycle
                {
                    Code(
                        'export APPLICATION_REPOSITORY=github-organization-or-user/repository',
                        '# export APPLICATION_BRANCH=custom-branch',
                        '',
                        'npm install',
                        'npm run junit:lint && \\',
                        'npm run junit:test && \\',
                        'npm run build && \\',
                        'aws s3 sync .dist s3://$DEPLOYMENT_BUCKET/'
                    )
                }
            </p>
        </div>
    );
}

export default Deployment;
