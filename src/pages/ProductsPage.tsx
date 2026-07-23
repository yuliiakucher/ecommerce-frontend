import { queryOptions, useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/api/client.ts';
import { productKeys } from '@/api/query-keys';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// TODO: move to src/types when your backend types stabilize
interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
}

export function ProductsPage() {

  const getAllProductsQueryOptions = () => queryOptions({
    queryKey: productKeys.list(),
    queryFn: () => getAllProducts<Product>(),
  });

  const query = useQuery(getAllProductsQueryOptions());

  return (
    <div>
      <h1 className="text-5xl text-primary">DISCOVER EVERYTHING YOU NEED IN ONE PLACE</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {query.data?.map((product) => (
          <Card key={product.id}>
            <img
              src="public/img/product-placeholder.webp"
              alt={product.title}
            />
            <CardHeader className="text-primary">
              <CardTitle className="flex justify-between">
                <a className="uppercase">{product.title}</a><a>${product.price.toFixed(2)}</a>
              </CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
