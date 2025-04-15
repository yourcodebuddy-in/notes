import { Logo } from "@/components/logo";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <div className="flex items-center justify-center min-h-dvh -my-5">
        <div className="flex w-full max-w-md flex-col gap-6 items-center">
          <Logo className="w-44 h-auto" />
          {children}
        </div>
      </div>
    </main>
  );
}
