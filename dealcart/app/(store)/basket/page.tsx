"use client";
import React, {  useEffect } from "react";
import useBasketStore from "@/app/(store)/store";
// import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { imageUrl } from "@/components/lib/imageUrl";
import AddToCartButton from "@/components/AddToCartButton";
import Loading from "../loading";
import { Switch } from "@/components/ui/switch";
function BasketPage() {
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  console.log(groupedItems);
//   const { isSignedIn } = useAuth();
//   const { user } = useUser();
  const router = useRouter();
//   const [isLoading, setIsLoading] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const [profitValue, setProfitValue] = React.useState(0);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
      setProfitValue(useBasketStore.getState().getTotalPrice() - useBasketStore.getState().getTotalDiscountedPrice())
  },[useBasketStore.getState()])
  if (!isClient) {
    return <Loading />;
  }
  if (groupedItems.length === 0) {
    return (
      <section className="min-h-[60vh] flex flex-col justify-center items-center">
        <div className="image">
          <Image
            src={"../empty_cart.svg"}
            width={200}
            height={150}
            alt="Empty Cart"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-xl font-semibold">Koi orders dastiyab nahi hai</p>
          <p>Thori aur khareedari houjaye, tou kia hi baat hai 😉</p>
          <Link href={"/"}>
            <Button className="bg-[#576aff] text-white rounded-3xl px-6 text-lg hover:bg-[#576aff]">
              ITEMS DEKHAIN
            </Button>
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className="container mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4">
          <p className="text-lg font-medium">Cart</p>
          <div className="bg-white h-[600px] rounded-3xl shadow-md my-5 p-7 overflow-y-scroll">
            <div className="text-[#576aff] text-xl pb-6 border-b-2 border-gray-200">
              <p>Group Items</p>
            </div>
            <div className="text-[#576aff] text-xl py-4 ">
              <p>Single Items</p>
            </div>
            {groupedItems.map((item) => (
              <div className="flex px-3 py-8 " key={item.product._id}>
                <div>
                  {item.product.image && (
                    <Image
                      src={imageUrl(item.product.image).url()}
                      width={110}
                      height={100}
                      alt="Product Image"
                      className="cursor-pointer"
                      onClick={() =>
                        router.push(`/product/${item.product.slug?.current}`)
                      }
                    />
                  )}
                </div>
                <div className="grow pl-3">
                  <div className="w-[230px]">
                    <p
                      className="text-sm font-semibold truncate cursor-pointer"
                      onClick={() =>
                        router.push(`/product/${item.product.slug?.current}`)
                      }
                    >
                      {item.product.name}
                    </p>
                    <AddToCartButton product={item.product} />
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div>
                    <span className="text-md font-bold text-[#f55] px-2 ">
                      Rs. {item.product.discountedPrice}
                    </span>
                    <span className="px-2">
                      <s>Rs. {item.product.price}</s>
                    </span>
                    {/* <p className='my-3 w-[170px]'>
                                Total:  = Rs. { item.product.discountedPrice && item.quantity * item.product.discountedPrice}
                            </p> */}
                  </div>
                  <div>
                    <p
                      className="text-end text-sm text-gray-400 cursor-pointer"
                      onClick={() =>
                        useBasketStore
                          .getState()
                          .removeGroupedItem(item.product._id)
                      }
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-medium">Address</p>
            <p className="text-lg font-medium text-[#576aff]">Tabdeel Karein</p>
          </div>
          <div className="bg-white h-[150px] flex flex-col gap-8 rounded-3xl shadow-md my-3 p-7 overflow-y-scroll">
            <p className="text-sm" id="address">
              Lahore, Punjab, Pakistan
            </p>
          </div>
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <p className="text-lg  font-medium">Payment</p>

            <div className="bg-white h-[300px] flex flex-col gap-8 rounded-3xl shadow-md my-5 p-7 overflow-y-scroll">
              <div className="flex gap-4 items-center">
                <Image
                  src={"../cash_on_delivery.svg"}
                  width={50}
                  height={40}
                  alt="Payment"
                />
                <p className="text-lg">Cash on Delivery</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between py-3 px-6 rounded-full bg-[#e6e9ff] ">
                  <div>
                    <p className="text-sm">Use DC Coins</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="flex gap-2 items-center text-sm">
                      <Image
                        src={"../coin.svg"}
                        width={18}
                        height={10}
                        alt="DC Coin"
                      />
                      0
                    </div>
                    <div className="flex gap-2 items-center text-sm">
                      <Image
                        src={"../cash.svg"}
                        width={30}
                        height={10}
                        alt="Cash"
                      />
                      0
                    </div>
                    <Switch />
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full font-light h-13 border border-gray-300 items-center justify-between py-3 px-6 rounded-full bg-white shadow-md "
                    placeholder="Enter Promo Code"
                  ></input>
                  <Button className="absolute top-2.5 h-8 right-4 bg-[#576aff] py-0 px-10 rounded-full hover:bg-[#576aff]">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex border border-gray-300 flex-col rounded-3xl my-10 py-5 px-8 ">
              <div>
                <div className="flex justify-between text-md font-normal pb-2 border-b-2 border-gray-300">
                  <p>Subtotal</p>
                  <p>
                    Rs. {useBasketStore.getState().getTotalDiscountedPrice().toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between text-md font-normal py-2 border-b-2 border-gray-300">
                  <p>Delivery</p>
                  <p className="text-[#79bf9f] font-semibold">Free</p>
                </div>
                <div className="flex justify-between text-base font-normal py-2 ">
                  <p className="text-[#576aff] font-bold">
                    Total:
                    <span className="text-gray-400 font-normal">(5) items</span>
                  </p>
                  <p className="text-[#576aff] font-semibold">
                    Rs. {useBasketStore.getState().getTotalDiscountedPrice().toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 mb-3">
            <p style={{backgroundImage: 'url(../congrats.svg)'}} className="bg-[#576aff] bg-cover bg-no-repeat p-1 font-semibold text-center text-white rounded-t-3xl"> Aap ki bachat Rs. {profitValue}</p>
          <div className="bg-white h-[118px] flex flex-col gap-8 rounded-b-3xl shadow-md p-7 overflow-y-scroll">
            <div className="flex justify-between items-center">
            <p className="text-md font-bold flex flex-col gap-2" id="address">
              Apka Bill
              <br/>
              <span className="text-[#f55]">
                Rs. {useBasketStore.getState().getTotalDiscountedPrice().toFixed(2)}
              </span>
            </p>
            <Button className="bg-[#576aff] py-6 px-10 rounded-full text-lg hover:bg-[#576aff]">
                Order Karein
            </Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasketPage;
