import { IconGoogle } from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth.client";
import { useState } from "react";

interface Props {
  title: string;
  provider: "google";
  variant?: "outline" | "default";
  className?: string;
  disabled?: boolean;
}

export function OAuthButton({ title, provider, variant = "default", className, disabled }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  async function signInWithOAuth() {
    setIsLoading(true);
    await authClient.signIn.social({
      provider,
    });
    setIsLoading(false);
  }

  return (
    <Button
      type="button"
      variant={variant}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      className={className}
      onClick={signInWithOAuth}
    >
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
