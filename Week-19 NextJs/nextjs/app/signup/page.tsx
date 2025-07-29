"use client";

import axios from "axios";
import { useState } from "react";

export default function signup() {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    return (
        <div className=" w-screen h- h-screen flex justify-center items-center">
            <div className="border p-2 ">
                <input
                    type=" text"
                    placeholder="USername"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                ></input>
                <input
                    type="text"
                    placeholder=" Password"
                    onChange={(e) => {
                        setpassword(e.target.value);
                    }}
                ></input>
                <button
                    onClick={() => {
                        axios.post("http://localhost:3000/api/v1/signup", {
                            username,
                            password,
                        });
                    }}
                >
                    Sign up{" "}
                </button>
            </div>
        </div>
    );
}
