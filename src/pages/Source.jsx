import {Code} from '../components';

const {
    APPLICATION_REPOSITORY
} = process.env;

export function Source() {
    return (
        <div>
            <h1>Application Source</h1>
            <p>
                This application was built from repository
                <Code>
                    {APPLICATION_REPOSITORY}
                </Code>
                which was generated from Agilestacks React Web Application Template.
            </p>
        </div>
    );
}

export default Source;
