import { IconGoogle } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth.client";

interface Props {
  title: string;
  provider: "google";
  variant?: "outline" | "default";
  className?: string;
  disabled?: boolean;
}

export function OAuthButton({ title, provider, variant = "default", className, disabled }: Props) {
  async function signInWithOAuth() {
    await authClient.signIn.social({
      provider,
    });
  }

  return (
    <Button type="button" variant={variant} disabled={disabled} className={className} onClick={signInWithOAuth}>
      <OAuthIcons provider={provider} />
      {title}
    </Button>
  );
}

function OAuthIcons({ provider }: { provider: "google" }) {
  switch (provider) {
    case "google":
      return <IconGoogle />;
    default:
      return null;
  }
}
