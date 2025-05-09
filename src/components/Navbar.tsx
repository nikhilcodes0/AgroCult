import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Link } from "react-router-dom";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo-leaf.svg";
import "../App.css";

function Navbar() {
  return (
    <div className="bg-[rgba(255,_255,_255,_0.05)] border-[1.3px]  border-[rgba(255,255,255,0.05)] rounded-xl w-[90%] mx-auto my-6 px-3 py-4 ">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <p className="logo text-white lg:text-xl">KJC Smart Agri</p>
          <img src={logo} alt="logo" />
        </div>
        <div className="text-white right-0">
          <div className="hidden md:block ">
            <ul className="flex gap-8 pr-6 lg:mr-0 lg:gap-12 lg:text-lg text-[#DCFFD7] font-semibold">
              <a href="/">
                <li className="cursor-pointer hover:text-white">Home</li>
              </a>
              <a href="/stats">
                <li className="cursor-pointer hover:text-white">Stats</li>
              </a>
              <a href="https://www.kristujayanti.edu.in/home/contact-us.php">
              <li className="cursor-pointer hover:text-white">Contact Us</li>
              </a>
            </ul>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="md:hidden ">
                <HamburgerMenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-white text-left">
                  Available Links!
                </SheetTitle>
                <SheetDescription className="text-white text-left opacity-50">
                  Click on any of the links below to get started!
                </SheetDescription>
              </SheetHeader>
              <div className="p-4 pb-0 mt-3">
                <div className="flex items-center justify-center gap-4 flex-col">
                  <SheetClose className="w-full">
                    <Link to="/">
                      <Button
                        variant="default"
                        size="icon"
                        className="h-12 w-full shrink-0 rounded-full"
                      >
                        Home
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose className="w-full">
                    <Link to="/stats">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="h-12 w-full shrink-0 rounded-full"
                      >
                        Stats
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose className="w-full">
                    <a href="https://www.kristujayanti.edu.in/home/contact-us.php">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="h-12 w-full shrink-0 rounded-full"
                      >
                        Contact Us
                      </Button>
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
