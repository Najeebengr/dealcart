import Banner from "@/components/Banner";
import CategoriesView from "@/components/CategoriesView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
// import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
// import { getAllSubCategories } from "@/sanity/lib/products/getAllSubCategories";

export default async function Home() {
  // const products = await getAllProducts();
  const categories = await getAllCategories();
  // const subCategories = await getAllSubCategories();
  return (

    <section className="container mx-auto px-6 md:px-0">
      <div>
      <Banner />
        <CategoriesView categories={categories}/>
        {/* <ProductsView products={products} /> */}
      </div>
    </section>
  );
}
