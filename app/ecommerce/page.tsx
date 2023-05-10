import prisma from "@/lib/prisma";
import Card from "@/components/card";

async function getProducts() {
  return await prisma.products.findMany();
}

export default async function Ecommerce() {
  const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <Card key={product.id} title={product.title} price={product.price} />
        ))}
      </div>
    </main>
  );
}
