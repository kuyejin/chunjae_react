

const Test3 = () => {
    const season = ["봄","여름","가을","겨울"];
  return (
    <div className="App">
        <h2 className="title3">테스트3 페이지</h2>
        
        <ul>
        {
            season.map((data,index) => (
                <li key={index}>
                    {data}
                </li>
            ))

            
            
            
        }
        </ul>

        
    </div>
  )
}

export default Test3