import {Switch, Route} from 'react-router-dom';

import {Source} from './Source';
import {Features} from './Features';
import {Environment} from './Environment';
import {Development} from './Development';
import {Deployment} from './Deployment';

import {Page404} from './Page404';

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Source} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/environment" component={Environment} />
            <Route exact path="/development" component={Development} />
            <Route exact path="/deployment" component={Deployment} />

            <Route exact path="*" component={Page404} />
        </Switch>
    );
}

export default Routes;
