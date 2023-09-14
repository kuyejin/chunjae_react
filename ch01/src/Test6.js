
// 구조 분할(분리) => 비구조 할당
const test6 = (props) => {
    //객체 구조 분할
    const {irum, age, addr} = props; 
    // const [irum, age, addr] = props; // 배열 구조 분할
    return (
        <div className="APP">
            <h1> 구조 분할(분리) - 비구조 할당 </h1>
            <h2> 저의 이름은 {irum}입니다.</h2>
            <h2> 나이는 {age}세 입니다. </h2>
            <h2> 사는 곳은 {addr} 입니다. </h2>
            <hr/>
        </div>
    )
}

export default test6