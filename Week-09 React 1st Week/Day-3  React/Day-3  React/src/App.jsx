import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <Postcomponent />
            <br />
          </div>
          <div>
            <Postcomponent />
            <br />
          </div>
        </div>

      </div>

    </div >
  )
}
const style = { width: 200, backgroundColor: "White", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20,borderStyle: 'solid' }
function Postcomponent() {
  return <div style={style}>
    <div style={{ display: "flex" }}>
      <img src={"https://www.hindustantimes.com/ht-img/img/2025/05/12/550x309/Prime-Minister-Narendra-Modi--AFP-_1747079003564.jpg"} style={{
        width: 30,
        height: 30,
        borderRadius: 20
      }} />
      <div style={{ fontSize: 10, marginLeft: 10 }}>
        <b>
          India
        </b>
        <div>
          BJP PARTY , PM OF INDIA
        </div>
        <div>1m</div>

      </div>

    </div>
    <div style={{fontSize:12}}>
      How to Become World First 30 trillion Economy 
    </div>

  </div>
}

export default App
