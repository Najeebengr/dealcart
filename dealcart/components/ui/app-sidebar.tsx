import { ChevronRight} from "lucide-react"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { nav_items } from "@/lib/constants"

// Menu items.
const items = [
  {
    title: "Orders",
    url: "#",
    icon: '../basket.svg',
  },
  {
    title: "Favorites",
    url: "#",
    icon: '../favourites_icon.svg',
  },
  {
    title: "Addresses",
    url: "#",
    icon:  '../address.svg',
  },
  {
    title: "Rewards",
    url: "#",
    icon:  '../rewards.svg',
  },
  {
    title: "Help",
    url: "#",
    icon: '../address.svg',
  },
]

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="p-10 flex justify-center border-b-2 border-[#f1f1f1] rounded-none">
          <Image
            src={"../dealcart_logo.svg"}
            width={150}
            height={45}
            alt="Nav"
            className="cursor-pointer "
          />
          </SidebarGroupLabel>
          <SidebarGroupContent className="py-10 border-b-2 border-[#f1f1f1]">
            <SidebarMenu className=" flex flex-col gap-4 justify-center">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="font-semibold">
                    <span className="h-15 flex p-2 rounded-lg  bg-[#d6daff]">
            <Image src={item.icon as string} width={20} height={45} alt="Basket" />
          </span>
                      <span>{item.title}</span> 
                      <ChevronRight className="text-lg font-bold absolute right-[10%]" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupContent className="py-10 px-4 ">
            <SidebarMenu className=" flex flex-col gap-4 justify-center">
              {nav_items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="font-medium text-lg">
                      <span>{item.title}</span> 
                      <ChevronRight className="text-lg font-bold absolute right-[10%]" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
