import Image from "next/image";
import tenzMouse from "../assets/tenz-mouse.webp";

export default function Card() {
  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <figure>
        <Image src={tenzMouse} alt="Tenz mouse" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Gaming Mouse</h2>
        <p>State of the art mouse, rank up or your money back!</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
