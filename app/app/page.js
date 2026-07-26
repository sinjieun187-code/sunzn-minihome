export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(#cfeeff, #ffffff)",
      padding: "30px 20px",
      fontFamily: "sans-serif"
    }}>

      <div style={{
        maxWidth: "500px",
        margin: "0 auto",
        background: "rgba(255,255,255,0.8)",
        borderRadius: "25px",
        padding: "25px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}>

        <h1>
          🧏🏻‍♀️ Welcome to<br/>
          슨즌's 슬기로운 병동생활🫧🤦🏻‍♀️
        </h1>

        <p>
          Today 0 | Total 0
        </p>

        <hr />

        <h3>💬 STATUS</h3>
        <p>
          어느 날 갑자기 12주 진단을 받은<br/>
          슨즌의 슬기로운 병원일기 ! !<br/><br/>
          심심할때 보고 웃고 가깅 🫧<br/>
          웃었으면 글 남기깅 🤍
        </p>

        <hr />

        <h3>🎵 Now Playing</h3>
        <p>
          Freestyle - Y
        </p>

        <hr />

        <h3>👤 PROFILE</h3>
        <p>
          닉네임 : 슨즌
          <br/>
          MBTI : ESFJ
        </p>

        <p style={{fontSize:"30px"}}>
          ☕️ ☁️ 🍺 🐱 🐶 🌙 🤍
        </p>

        <hr />

        <h3>🌤 TODAY'S MOOD</h3>
        <p>
          슨즌은 오늘도 열심히 적응즁
        </p>

        <hr />

        <div style={{
          display:"flex",
          justifyContent:"space-around"
        }}>
          <span>💌 방명록</span>
          <span>⭐ 일촌평</span>
          <span>📖 일기</span>
          <span>📸 사진</span>
        </div>

      </div>

    </main>
  );
}
