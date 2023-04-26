import Image from "next/image";
import tenzMouse from "../assets/tenz-mouse.webp";

export default function Card() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={tenzMouse} alt="Tenz mouse" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Tenz Mouse</h2>
        <p>I hecking love Tenz</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
