import GirlSleepingOnDeskImg from "@/assets/girl-sleeping-on-a-desk.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getNote } from "@/db/fetch";
import Image from "next/image";
import { NoteDetails } from "../_components/note-details";
import { Default } from "./default";

interface Props {
  params: Promise<{ pageId: string }>;
  searchParams: Promise<{ note?: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { note } = await searchParams;

  if (!note) {
    return <Default />;
  }

  const data = await getNote({ noteId: note, status: "active" });

  if (!data) {
    return <Default />;
  }

  return (
    <div className="relative">
      <ScrollArea className="h-[calc(100dvh-120px)]">
        <div className="space-y-4 px-4 md:px-10">
          <div className="rounded-xl bg-white">
            <Image
              src={GirlSleepingOnDeskImg}
              alt="Girl sleeping on a desk"
              className="w-full max-w-md h-auto rounded-xl mx-auto"
            />
          </div>
          <h1 className="text-lg lg:text-xl font-bold max-w-[650px] mx-auto">{data.title}</h1>
          <NoteDetails key={note} id={note} content={data.content} pinned={data.pinned} />
        </div>
      </ScrollArea>
    </div>
  );
}
