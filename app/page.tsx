import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="text-4xl font-bold">Maxwell Wang Portfolio</p>
      <br />
      <button className="btn btn-primary">
        <Link href="https://github.com/maxwellwang/portfolio" target="_blank">
          Source Code on GitHub
        </Link>
      </button>
    </main>
  );
}
