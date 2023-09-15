import React, {useState} from 'react'

const Test9 = () => {
    const [ message, setMessage ] = useState('');
    const onClickEnter = () => setMessage("안녕하세요. 환영합니다.");
    const onClickLeave = () => setMessage("안녕히 가세요");
    const [color,setColor] = useState('black');
  return (
    
    <div className='App'>
        <hr/>
        <button onClick={onClickEnter}>입실</button>
        <button onClick={onClickLeave}>퇴실</button>    
        <h1>{message}</h1>
        <h1 style={{color}}>{message}</h1>
        <button onClick={() => setColor('gold')}>금</button>
        <button onClick={() => setColor('grey')}>은</button>
        <button onClick={() => setColor('brown')}>동</button>
    </div>
  )
}

export default Test9