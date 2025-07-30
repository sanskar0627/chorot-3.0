import axios from "axios";
("use client");
export default function () {
  return (
    <div>
      Sign in <br></br>
      <input></input>
      <input></input>
      <button
        onClick={async () => {
          const res = await axios.post("http://localhost:3000/api/signin", {
            username: "asssa",
            password: "kkfdhfck",
          });
          localStorage.setItem("token", res.data.token);
        }}
      >
        Sign in{" "}
      </button>
    </div>
  );
}
