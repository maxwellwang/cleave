import Link from "next/link";

export default function Menu() {
  return (
    <ul className="menu menu-compact lg:menu-normal">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/ecommerce">Ecommerce</Link>
      </li>
    </ul>
  );
}
