import { imageUrl } from '@/components/lib/imageUrl';
import { getProductBySlug } from '@/sanity/lib/products/getProductBySlug';
import { notFound } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { Button } from '@/components/ui/button';
import AddToCartButton from '@/components/AddToCartButton';
import { PRODUCT_BY_SLUG_QUERYResult } from '@/sanity.types';
async function ProductPage({ params }: { params: Promise<{ slug: string }>; }) {
  
    const { slug } = await params;
    const product: PRODUCT_BY_SLUG_QUERYResult = await getProductBySlug(slug);
    if(!product){
      console.log('not found')
        return notFound()
    }
    
    // const [quantity, setQuantity] = useState(0)
  if(product) { 
    const isOutOfStock = product?.Stock != null && product.Stock <= 0;
    return (
    <section className='container py-32 mx-auto px-4'>
      <div className='grid h-[50vh] grid-cols-1 md:grid-cols-3 gap-8'>
        <div className={`relative cursor-pointer bg-white overflow-hidden rounded-3xl shadow-lg ${isOutOfStock ? 'opacity-50' : ''}`}>
          {product?.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product?.name ?? 'Product Image'}
              fill
              className='object-contain transition-transform hover:scale-105 duration-300'
            />
          )}
          {isOutOfStock && (
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold'>
            <span>
              Out Of Stock
            </span>
          </div>  
          )}
        </div>
        <div className='flex flex-col py-4 justify-between'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold mb-4'>
              {product?.name}
            </h1>
            
            <div className='prose max-w-none mb-6'>
             
              <div className='icons flex gap-4 pt-6'>
                <div className='flex gap-2 items-center'>
                  <Image
                  src={'/wallet.svg'}
                  height={20}
                  width={30}
                  alt='Wallet'
                  />
                  <p className='text-sm'>
                    Cash on Delivery
                  </p>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image
                  src={'/return.svg'}
                  height={20}
                  width={30}
                  alt='Return'
                  />
                  <p className='text-sm'>
                    Return Policy
                  </p>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image
                  src={'/delivery.svg'}
                  height={20}
                  width={30}
                  alt='Delivery'
                  />
                  <p className='text-sm'>
                    Free Delivery
                  </p>
                </div>
              </div>
              <h2 className='text-xl text-[#576aff] font-bold mb-4'>
              Tafseel
              </h2>
              {Array.isArray(product.description) && <PortableText value={product.description} />}
            </div>
            <div className='flex flex-col w-[200px] items-center gap-3'>
              <AddToCartButton disabled={isOutOfStock} product={product} /> 
              <Button className='w-[200px] text-xl rounded-3xl hover:bg-[#576aff] font-bold bg-[#576aff]'>
    Rs. {product.discountedPrice}
    </Button>
            </div>
          </div>
        </div>
        <div className='side flex justify-end'>
          <div className='bg-white flex flex-col  gap-10 justify-end w-fit h-fit rounded-3xl shadow-md px-10 py-14'>
            <div className='bg-[#e8e6f2] flex flex-col gap-5 items-center rounded-3xl px-2 py-6 '>
              <Image
              src={'/favorite_hollow.svg'}
              width={40}
              height={25}
              alt='Heart'
              />
              <p className='text-lg'>
              FAVOURITES
              </p>
            </div>
            <div className='bg-[#f1e7ff] border border-[#9447f6] flex flex-col gap-1 items-center rounded-3xl px-2 py-1 '>
              <Image
              src={'/earn.svg'}
              width={80}
              height={25}
              alt='EARN'
              />
              <p className='text-lg flex flex-col items-center'>
              SHARE &<br/><span> EARN</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
}

export default ProductPage
