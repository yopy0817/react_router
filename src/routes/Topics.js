import React from 'react';
import {Route, Link} from 'react-router-dom';

const Topic = ({match}) => {
    return (
        <h2>
            <p>{match.params.id}</p>라우터
        </h2>
    )
}

const Topics = () => {
    return (
        <div>
            <h1>컴포넌트 안에 또다른 라우터</h1>
            <Link to="/topics/writer">writer</Link>
            <Link to="/topics/title">tilte</Link>
            <Link to="/topics/reply">reply</Link>
            <Route path="/topics/:id" exact={true} component={Topic}></Route>

        </div>
    );
};
export default Topics;