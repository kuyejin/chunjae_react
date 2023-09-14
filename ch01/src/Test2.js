import './App.css';

//표현식과 내부 스타일링, 인라인 스타일링, 조건 연산자, if 문을 활용하여 컴포넌트 만들기
const Test2 = () => {

    const name ="천재교육";
    const param = undefined;
    const style = {
        backgroundColor : "rgb(118, 118, 211)",
        color: "white",
        fontSize:"32px",
        fontweight:"bold",
        padding:"10" 
    }


    return (
    <div className="App">
      <h2 className="title2">{name} 테스트2 페이지</h2>
      <h3 className="item_tit2">{name === '구예진' ? '천재' : '둔재'}</h3>
      <h4 className="cate_tit2">{ param || <span>방가방가</span> }</h4>
      
      <p style={ style }>이 내용은 내부 스타일 적용부입니다.</p>
      <div style={{
        backgroundColor:"rgb(82, 82, 193)", color:"#ffffff", fontSize:"20px"   
      }}>{name} - 인라인 스타일 적용부 입니다.</div>

      <p className="comment2">테스트 페이지입니다</p>

    </div>
  )
}

export default Test2   