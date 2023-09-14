import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //App.js를 여기에서 출력함
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';
import Test8 from './Test8';
import reportWebVitals from './reportWebVitals';

//3. Test1 컴포넌트 추가
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 
    <App /> 
    <Test1 /> 
    <Test2 /> 
    <Test3 />
    <Test4 />
    <Test5 irum ="구예진" age="41" />
    <Test5 irum ="이슬비" age="78" addr="작정동" />
    <Test6 irum ="김천재" age="55" addr="산본동"/>
    <Test7 irum ="김이호" age="1" addr="상암동"/>
    */}
    <Test8 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
