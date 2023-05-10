import { Prisma } from "@prisma/client";

interface Product {
  title: string;
  price: Prisma.Decimal;
}

export default function Card({ title, price }: Product) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>${price.toString()}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
