import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>There is Somecontent inside the card</p>
      </Card>
      <Card>
        <h2>Card Sanskar</h2>
        <p>There is says that the project would be in the diffreent </p>
      </Card>
      <CustomButton>Click Me</CustomButton>
<CustomButton><i>🚀 Launch</i></CustomButton>
    </div>
  );
}

const Card=({children})=>{
  return (
    <div style={{
      border:"1px solid #ccc",
      borderRadius:"5px",
      padding:"20px",
      margin:"10px",
      boxShadow:"2px 2px 5px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  );
};
function CustomButton({ children }) {
  return (
    <button style={{ padding: "10px", background: "purple", color: "white" }}>
      {children}
    </button>
  );
}

export default App;
