import {Code} from '../components';

export function Environment() {
    return (
        <div>
            <h1>Environment</h1>
            <p>
                From the environment application supposes to obtain such a variable parameters
                {
                    Code(
                        'APPLICATION_REPOSITORY=github-organization-or-user/repository',
                        'APPLICATION_BRANCH=branch-name # default is master'
                    )
                }
                These are in help for application to represent and manipulate own code source.
            </p>
        </div>
    );
}

export default Environment;
