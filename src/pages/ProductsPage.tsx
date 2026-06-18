import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/api/client.ts';
import { productKeys } from '@/api/query-keys';

// TODO: move to src/types when your backend types stabilize
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export function ProductsPage() {

  const query = useQuery({ queryKey: productKeys.list(), queryFn: () => getAllProducts<Product>() });

  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {query.data?.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border border-slate-200 bg-white p-4"
          >
            <h2 className="font-semibold">{product.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{product.description}</p>
            <p className="mt-2 font-medium">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
