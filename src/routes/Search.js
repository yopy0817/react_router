import React from 'react';

//쿼리파라미터 처리방법 (부모에서는 match, location, history를 전달한다)
//URLSearchParams사용 get으로 키값쓰면됨
const Search = ({location}) => {
    return (
        <div>
            {console.log(location)}
            {new URLSearchParams(location.search).get('key')} 라고 쿼리파라미터를 불러옵니다  
        </div>
    );
};

export default Search;  