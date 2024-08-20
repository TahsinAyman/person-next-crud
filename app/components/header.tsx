import Link from "next/link";

const Header = () => {
  return (
    <nav className="border border-border flex flex-1 p-8 items-center">
      <div className="flex-1">
        <Link href="/">
          <h1 className="hover:underline cursor-pointer text-3xl">CRUD</h1>
        </Link>
      </div>
      <div className="gap-4 flex">
        <Link href="/new" className="hover:underline cursor-pointer">
          New
        </Link>
      </div>
    </nav>
  );
};

export default Header;
