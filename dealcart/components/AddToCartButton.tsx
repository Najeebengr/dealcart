'use client'
import useBasketStore from '@/app/(store)/store'
import { Product } from '@/sanity.types'
import React, { useEffect } from 'react'

interface AddToBasketButtonProps {
    product: Product
    disabled?: boolean
}

function AddToCartButton({ product,disabled }: AddToBasketButtonProps) {
const { addItem, removeItem, getItemCount} = useBasketStore();
const itemCount = getItemCount(product._id);
const [isClient, setIsClient] = React.useState(false);
  useEffect(() => {
    setIsClient(true);
  },[])
  if(!isClient){
    return null
  }
  return (
    <>
    <div className="quantity my-4 flex border border-[#576aff] gap-5 w-[150px] items-center bg-white justify-between py-1 px-2 rounded-3xl">
    <button className={`  px-2 text-lg rounded-full  cursor-pointer 
        ${
            itemCount === 0
            ? "bg-gray-100 text-black cursor-not-allowed"
            : "bg-[#576aff] text-white"
        }
        `} onClick={() => removeItem(product._id)} disabled={itemCount === 0 || disabled}>
      -
    </button>
    <span>
        {itemCount}
    </span>
    <button className={`  px-2 text-lg rounded-full  cursor-pointer 
        ${
            disabled
            ? "bg-gray-100 text-black cursor-not-allowed"
            : "bg-[#576aff] text-white"
        }
        `} onClick={() => addItem(product)} disabled={disabled}> 
      +
    </button>
  </div>
    
    </>
  )
}

export default AddToCartButton
