import "../css/Mapnav.css"

const MapNav=()=>{


    return(
        <div className="Map_nav">

    <div className="Map_nav_image"><img src={process.env.PUBLIC_URL+`../img/로고 파랑 2.png`}></img> BZero</div>
    
    <div className="Map_nav_sellect">
        <a href="/mypage"><div className="Map_nav_subtext">마이페이지</div></a>
        <div className="Map_nav_subtext" style={{color:'#0679FF'}}>가게 찾기</div>
        <div className="Map_nav_subsub">
            <div>클린스토어</div>
            <div style={{color:'#353535'}}>공병스토어</div>
        </div>
        <div className="Map_nav_subtext">커뮤니티</div>
        <div className="Map_nav_subtext">제로웨이스트 일기</div>
        
    </div>

    

    </div>
    )
}

export default MapNav