import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      Todo Application
      <br />
      <Link className=" text=md border m-2 " href="/sigin">
        Sign IN
      </Link>
      <br />
      <Link className=" text=md border m-2 " href="/signup">
        Sign Up
      </Link>
    </div>
  );
}
