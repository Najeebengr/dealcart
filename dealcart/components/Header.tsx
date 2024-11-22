"use client";
import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Form from "next/form";
import { CiSearch } from "react-icons/ci";
import { SidebarTrigger } from "./ui/sidebar";
import { nav_items } from "@/lib/constants";
import useBasketStore from "@/app/(store)/store";

function Header() {
  const { user } = useUser();
  const itemCount =useBasketStore((state)=>
   state.items.reduce((total,item) => total + item.quantity, 0));  
  const [navIsOpen, setNavIsOpen] = React.useState(false);
 const createPassKey = async () => {
  try {
    const response = await user?.createPasskey();
    console.log(response);
    
  } catch (error) {
    console.error("Error:", JSON.stringify(error, null, 2))
  }
}

  return (

    <header className="flex flex-wrap  justify-between items-center px-5 py-3" id="header">
      <div className="md:order-none w-1/3 order-2">
        <Link href={"/"}>
          <Image
            src={"../dealcart_logo.svg"}
            width={100}
            height={45}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="nav_search justify-start md:justify-center w-1/3 md:order-none order-1 flex items-center">
      {navIsOpen && (
      <div className="desktop-nav lg:flex hidden gap-5 border border-[#576aff] rounded-full px-6 py-2 ">
      {nav_items.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className="md:flex hidden gap-2 flex-col items-center"
        >
          <span className="text-md hover:text-[#576aff]">{item.title}</span>
        </Link>
      ))}
       <CiSearch onClick={()=>setNavIsOpen(!navIsOpen)} className="text-[#64616a] cursor-pointer text-xl" />
    </div>
       
      )}
        <div className="nav">
        <SidebarTrigger className="md:hidden block" />
        {!navIsOpen && (
        <Image
            src={"../top_nav.svg"}
            width={25}
            height={45}
            alt="Nav"
            className="md:block hidden cursor-pointer"
            id="nav_trigger"
            onClick={()=>setNavIsOpen(!navIsOpen)}
          />
        )}
        </div>
        <div className={`${navIsOpen ? "w-0 opacity-0 overflow-hidden" : "w-[400px] opacity-1 search hidden lg:block relative ease-linear transition-all duration-500"} `}>
          <Form action={"/search"} className=" ">
            <input
              type="text"
              name="query"
              className=" w-[400px] sm-w-auto sm:flex-1 pl-12 py-2 border focus-visible:border-[#ffc803] focus-visible:outline-none border-[#576aff] rounded-full sm:mx-4 text-lg mt-2 sm:mt-0 text-[#9988b2]"
              placeholder="Search DealCart"
            />
            <CiSearch className="text-[#9988b2] absolute top-[25%] left-[9%] text-xl" />
          </Form>
        </div>
      </div>
     
     
      <div className="nav-icons w-1/3 justify-end md:order-none order-3 flex items-start gap-6">
        <Link href={"/orders"} className="hidden md:flex relative gap-2 flex-col items-center">
          <span className="h-10 flex p-2 rounded-full  bg-[#d6daff]">
            <Image src={"../basket.svg"} width={25} height={45} alt="Basket" />
          </span>

          <span className="text-sm">Orders</span>
        </Link>
        <Link
          href={"/search"}
          className="md:flex hidden gap-2 flex-col items-center"
        >
          <span className="h-10 flex p-2 rounded-full bg-[#d6daff]">
            <Image src={"../search.svg"} width={25} height={45} alt="Basket" />
          </span>
          <span className="text-sm">Search</span>
        </Link>
      
        <ClerkLoaded>
          <SignedIn>
            <>
              <Link href={"/basket"} className="md:flex relative hidden gap-2 flex-col items-center">
                <span className="h-10 flex p-2 rounded-full bg-[#d6daff]">
                  <Image
                    src={"../cart.svg"}
                    width={25}
                    height={45}
                    alt="Basket"
                  />
                </span>

          <span className="absolute -top-2 -right-2 bg-[#eb5ba1] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {itemCount}
          </span>
                <span className="text-sm">Cart</span>
              </Link>
            </>
            </SignedIn>
          {user ? (
            <div className="flex bg-[#d6daff] p-3 rounded-full items-center space-x-2">
              <UserButton />
              <div className="hidden sm:block text-xs">
                <p className="text-[#1f1f1f]">Welcome Back</p>
                <p className="font-bold">{user.fullName}!</p>
              </div>
            </div>
          ) : (
              <SignInButton mode="modal">
                <div className="flex gap-2 flex-col items-center cursor-pointer">
                  <span className="h-10 flex p-2 rounded-full bg-[#d6daff]">
                    <Image
                      src={"../profile.svg"}
                      width={25}
                      height={45}
                      alt="Basket"
                    />
                  </span>
                  <span className="text-sm">Sign In</span>
                </div>
              </SignInButton>
          )}
          {user?.passkeys.length === 0 && (
            <button onClick={createPassKey} className="bg-[#d6daff] animate-pulse  hover:bg-[#576aff] hover:text-white text-black font-bold py-2 px-4 rounded">
              Create a PassKey Now
            </button>
          )}
        </ClerkLoaded>
      </div>
    </header>
  );
}

export default Header;
