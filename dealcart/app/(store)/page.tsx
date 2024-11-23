import Banner from "@/components/Banner";
import CategoriesView from "@/components/CategoriesView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
// import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
// import { getAllSubCategories } from "@/sanity/lib/products/getAllSubCategories";

export default async function Home() {
  // const products = await getAllProducts();
  const categories = await getAllCategories();
  // const subCategories = await getAllSubCategories();
  console.log("Sanity Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("Sanity Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log("Sanity API Token:", process.env.SANITY_API_TOKEN);
console.log("Sanity Read Token:", process.env.SANITY_API_READ_TOKEN);
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
