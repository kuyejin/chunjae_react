import React from 'react'

const test1 = () => {
    const names = ['서광', '이은영', '한선', '이소윤', '오태훈'];
    const nameList = names.map((data) => <li><a href='/getData/'>{data}</a></li>);
  return (
    <div className='App'>
        <ul>{nameList}</ul>
    </div>
  )
}

export default test1