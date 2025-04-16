import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-4 px-4 md:px-10">
      <div className="rounded-xl bg-white">
        <Skeleton className="w-full max-w-md h-[300px] rounded-xl mx-auto" />
      </div>
      <Skeleton className="w-48 h-7" />
      <div className="prose w-full max-w-none">
        <Skeleton className="w-full h-[400px]" />
      </div>
    </div>
  );
}
