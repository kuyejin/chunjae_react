
// 구조 할당(props)
const Test5 = (props) => {
  return (
    <div className="APP">
         <h1> 구조 할당(props) </h1>
        <h2> 저의 이름은 {props.irum}입니다.</h2>
        <h2> 나이는 {props.age}세 입니다. </h2>
        <h2> 사는 곳은 {props.addr} 입니다. </h2>
        
    </div>
  )
}

Test5.defaultProps = {
    irum : '',
    age : 32,
    addr : '서울특별시 은평구'
}

export default Test5