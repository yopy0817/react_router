import React from 'react';


//history를 이용하는법
const Home = ({history}) => {
    return (
        <div>
            홈
            <button type="button" onClick={() => {history.push("/topics")} }>버튼</button>
        </div>
    );
};

export default Home;