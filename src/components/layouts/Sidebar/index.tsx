import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import * as React from "react";
import { BsBuildings, BsGear } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineMessage,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { headers } from "next/headers";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const heads = headers();

  const pathname = heads.get("next-url");
  const Links =[
    {
      title:"Home",
      link:"/",
      icon:<AiOutlineHome className="mr-2 text-lg" />,
    },
    {
      title:"Messages",
      link:"/messages",
      icon:<AiOutlineMessage className="mr-2 text-lg" />,
    },
    {
      title:"Company Profile",
      link:"/company-profile",
      icon:<BsBuildings className="mr-2 text-lg" />,
    },
    {
      title:"All Aplicants",
      link: "/all-aplicants",
      icon:<AiOutlineUsergroupAdd className='mr-2 text-lg'/>,
    },
    {
      title:"Job Listings",
      link: "/job-listings",
      icon:<HiOutlineClipboardList className='mr-2 text-lg'/>,
    },
    {
      title:"My Schedule",
      link:"/my-schedule",
      icon:<AiOutlineCalendar className="mr-2 text-lg" />,
    }
  ]
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="flex flex-col gap-y-3">
            {Links.map((item,index) => {
              return(
                <Link href={item.link} key={index}>
                <Button
                  variant={"ghost"}
                  className={cn("w-full justify-start rounded-none hover:text-primary",pathname === item.link ? "text-purple-600 bg-purple-200":"")}
                >
                  {item.icon} {item.title}
                </Button>
              </Link>
              )
            })}
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <BsGear className="mr-2 text-lg" /> Settings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none text-red-500 hover:bg-red-200 hover:text-red-500"
            >
              <AiOutlineLogout className="mr-2 text-lg" /> Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
