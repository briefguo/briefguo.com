import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Index = React.lazy(() => import('./pages/index'));

const Loading = () => {
  return <div>loading...</div>;
};

const BriefguoApp = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index}></Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

ReactDOM.render(<BriefguoApp />, document.getElementById('__APP__'));
