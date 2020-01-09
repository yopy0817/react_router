import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Topics from './routes/Topics';
import Login from './routes/Login';
import MyPage from './routes/MyPage';
import Search from './routes/Search';

import NotFind from './routes/NotFind'; //찾을수 없음 페이지

import './App.css'

const App = () => {
  return (

    //https://velopert.com/3275
    <Router>
      <div>
        <div className="header"> {/* 선택때 특정 클래스를 적용해라 activeClassName사용 home이 계속 선택되는 문제를 exact로 처리*/}
          <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
          <NavLink to="/about/값" className="item" activeClassName="active">about</NavLink>
          <NavLink to="/topics" className="item" activeClassName="active">topics</NavLink>{/* 토픽안에 또다른 라우터 */}
          <NavLink to="/login" className="item" activeClassName="active">로그인</NavLink>
          <NavLink to="/myPage" className="item" activeClassName="active">마이페이지</NavLink>
          <NavLink to="/search" className="item" activeClassName="active">검색</NavLink>
        </div>
        <Switch>{/* 스위치가 있으면 순서대로 매칭해서 매칭되는 곳으로만 이동한는 효과입니다 */}
          <Route path="/" exact component={Home} />
          <Route path="/about/:username" exact component={About} />
          <Route path="/topics" component={Topics} /> {/* 토픽안에 또다른 라우터 일때는 exact를 뺴라  */}
          <Route path="/login" component={Login} />
          <Route path="/myPage" component={MyPage} />
          <Route path="/search" component={Search} />
          <Route component={NotFind} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;