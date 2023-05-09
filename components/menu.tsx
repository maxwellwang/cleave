import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <ul className="menu menu-compact lg:menu-normal">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/ecommerce">Ecommerce</Link>
      </li>
      <li>
        <Link href="https://github.com/maxwellwang/portfolio" target="_blank">
          Source Code
        </Link>
      </li>
    </ul>
  );
}
