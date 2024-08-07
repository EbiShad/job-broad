import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center py-4 px-4 border-b">
        <Link href={"/"} className="text-[32px] font-bold  text-purple-700">
          Job Board
        </Link>
        <nav className="flex gap-2 *:bg-purple-300 *:px-4 *:py-2 *:rounded">
          <Link href={"/signin"} className="hover:bg-purple-400 transition ease-in-out delay-75">Login</Link>
          <Link href={"/signup"} className="hover:bg-purple-400 transition ease-in-out delay-75">signup</Link>
          <Link href={"/new-listing"}  className="hover:bg-purple-400 transition ease-in-out delay-75">Post a job</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
