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
          <Button variant="link" className="text-white underline text-lg">Nikhil</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">NikhilCodes0</h4>
              <p className="text-sm">
                Want to know more about me? Check out my socials!
              </p>
              <div className="flex items-center pt-2">
                {/* <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "} */}
                <span className="text-xs text-blue-500">
                  <a href="https://github.com/nikhilcodes0">Github</a>
                </span>
                <span className="text-xs text-blue-500 ml-4">
                  <a href="https://x.com/nikhil__codes">Twitter</a>
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <span className="text-white">&</span>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-white underline text-lg">Harsh</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Harsh Pratap Singh</h4>
              <p className="text-sm">
                Want to know more about me? Check out my socials!
              </p>
              <div className="flex items-center pt-2">
                {/* <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "} */}
                <span className="text-xs text-blue-500">
                  <a href="https://github.com/HPSingh7146">Github</a>
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
