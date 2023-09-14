import './App.css';

//4. Test1 컴포넌트 생성 : 컴포넌트 이름은 대문자로 시작
//5. 표현식과 if 조건 연산, OR(||) 연산
//6. 내부 스타일링
//7. 인라인 스타일링
function Test1() {
    const name ="구예진";
    const param = undefined;
    const style = {
        backgroundColor : "grey",
        color: "white",
        fontSize:"32px",
        fontweight:"bold",
        padding:"10" 
    }
  return (
    <div className="App">
      <h2 className="title">{name} 테스트 페이지</h2>
      <h3 className="item_tit">{name === '구예진' ? '천재' : '둔재'}</h3>
      <h4 className="cate_tit">{ param || <span>방가방가</span> }</h4>
      
      <p style={ style }>이 내용은 내부 스타일 적용부입니다.</p>
      <div style={{
        backgroundColor:"black", color:"#ffffff", fontSize:"20px"   
      }}>{name} - 인라인 스타일 적용부 입니다.</div>

      <p className="comment">테스트 페이지입니다</p>
    </div>
  );
}

export default Test1;
