import { useNavigate } from "react-router-dom";

const RegisterPage = ()=>{
  const navigate = useNavigate();

  async function handleSubmit1(e : any) {
    e.preventDefault();

    const form = e.currentTarget;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

      if(!username || !email || !password){
        alert("Incorrect Values")
        return;
      }
    const data = {
      username,
      email,
      password
    }

    try{
     const res = await fetch("http://localhost:5000/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(data)
      });
      if(res.ok){
        alert("Account Created");
      }
      else{
        alert("Account already exist");
      }
      form.username.value = "";
      form.email.value = "";
      form.password.value = "";
      return;

      }catch(err){
        console.log("Error while sending data");
      }
  }

  async function handleSubmit2(e : any) {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

      if( !email || !password){
        alert("Incorrect Values")
        return;
      }
    const data = {
      email,
      password
    }

    try{
      const res = await fetch("http://localhost:5000/api/v1/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(data)
      });
      const backendData = await res.json();
      if (res.ok) {
        localStorage.setItem("token", backendData.token)
        localStorage.setItem("userId",backendData.userID)
        alert("Logged in Successfully");
        navigate("/HomePage"); 
      } else {
        alert("Login failed");
      }
      }catch(err){
        console.log("Error while sending data");
      }
  }
  return <div className="flex">
    <div className="h-screen w-[30vw] bg-slate-300 ml-32 flex flex-col justify-center items-center">
      <div>
        <div className="text-3xl font-semibold">
        <h1>Welcome to <span className="text-3xl text-blue-400">Second Brain</span></h1>
        </div>
        <div className="text-2xl font-semibold">
          create your account
        </div>
        <form onSubmit={handleSubmit1} className="mt-7 flex flex-col gap-2">
          <input type="text" placeholder="Username" required name="username" className="outline-none h-12 w-[22vw] rounded-lg p-2 hover:bg-slate-100"/>
          <input type="email" placeholder="Email" required name="email" className="outline-none h-12 w-[22vw] rounded-lg p-2 hover:bg-slate-100"/>
          <input type="password" placeholder="Password" required name="password" className="outline-none h-12 w-[22vw] rounded-lg p-2 hover:bg-slate-100"/>
          <div>
          <button className="bg-blue-400 px-4 py-2 rounded-2xl font-semibold hover:bg-blue-500">Create my Account</button>
          </div>
        </form>
      </div>
    </div>
    <div className="h-screen w-[15vw] flex justify-center items-center">
        <span className="bg-blue-500 px-4 py-3 rounded-full text-white text-2xl">or</span>
    </div>
    <div className="flex flex-col h-screen justify-center">
      <div className="text-2xl font-semibold">
        Login your account
      </div>
      <form onSubmit={handleSubmit2} className="flex flex-col gap-3 mt-7">
      <input type="email" placeholder="Email" required name="email" className="outline-none h-12 w-[22vw] rounded-lg p-2 bg-slate-100 hover:bg-slate-200 block shadow-md"/>
      <input type="password" placeholder="Password" required name="password" className="outline-none h-12 w-[22vw] rounded-lg p-2 bg-slate-100 hover:bg-slate-200 block shadow-md"/>
      <div>
          <button className="bg-blue-400 px-4 py-2 rounded-2xl font-semibold hover:bg-blue-500 shadow-md mt-2">Login</button>
      </div>
      </form>
    </div>
  </div>
}

export default RegisterPage;
