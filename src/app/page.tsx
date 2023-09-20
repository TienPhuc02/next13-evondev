import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Link href={"/"}>Home</Link>
        <Link href={"/property"}>Property List</Link>
        <Link href={"/property/city-land"}>City Land</Link>
      </header>
      <main>Home Page</main>
    </>
  );
}
