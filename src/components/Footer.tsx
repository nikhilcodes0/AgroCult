import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <>
    <Separator className="my-10  mx-auto opacity-100 bg-[#dcffd71a] p-[1px] w-[90%]" />
    <div className="flex justify-center items-center text-lg pb-6">
      <div>
        <p className="text-white font-semibold">Made by </p>
      </div>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-white underline text-lg">KJC Tech Farmers</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">The TEAM</h4>
              <p className="text-sm">
                Want to know more about us? Check out our Github!
              </p>
              <div className="flex items-center pt-2">
                {/* <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "} */}
                <span className="text-xs text-blue-500">
                  <a href="https://github.com/nikhilcodes0" target="_blank">Nikhil</a>
                </span>
                <span className="text-xs text-blue-500 ml-4">
                  <a href="https://github.com/some-1hing" target="_blank">Yash Prakash</a>
                </span>
                <span className="text-xs text-blue-500 ml-4">
                  <a href="https://github.com/hpsingh7146" target="_blank">Harsh Pratap</a>
                </span>
                <span className="text-xs text-blue-500 ml-4">
                  <a href="https://github.com/R3tr0gh057" target="_blank">Joe Sanjo</a>
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      </div>
    </>
  );
}

export default Footer;
