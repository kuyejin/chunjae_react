import React, { useEffect, useRef} from 'react'

const Test4 = () => {
    const inputRef = useRef();
    useEffect(()=>{
        console.log(inputRef.current.value);
        inputRef.current.focus();
    },[]);
    const loginPro = (e) => {
        alert(`환영합니다.  ${inputRef.current.value} 님`);
        inputRef.current.focus();
    }
  return (
    <>
        <header>
            <fieldset>
                <input ref = {inputRef} type='text' placeholder='id input' />
            </fieldset>
            <button onClick={loginPro}>Login</button>

        </header>
    </>
  )
}

export default Test4