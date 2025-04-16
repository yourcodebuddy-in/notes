import GirlSleepingOnDeskImg from "@/assets/girl-sleeping-on-a-desk.png";
import Image from "next/image";

export function Default() {
  return (
    <div className="hidden lg:block">
      <div className="rounded-xl bg-white">
        <Image
          src={GirlSleepingOnDeskImg}
          alt="Girl sleeping on a desk"
          className="w-full max-w-md h-auto rounded-xl mx-auto"
        />
      </div>
      <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">
        No note selected or does not exist
      </div>
    </div>
  );
}
