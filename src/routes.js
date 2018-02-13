import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Posts from './components/posts';

const Greeting = () => {
    return <div>HELLO!</div>;
};

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Posts} />
        {/*Posts component content will show on main page*/}
        {/*IndexRoute makes any component match main App component and show content from this component on main page*/}
        <Route path="greet" component={Greeting} />
    </Route>
    //{App} is a parent and {Greeting} is children above
    //App has to render Greeting using this.props.children in app.js

);



//React Router gives users impression that they are navigating to different webpages
//But they are always staying on the same webpage at all times
//The content on the pages is swapped so users think they are going to different webpages


