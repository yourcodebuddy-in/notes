import Link from "next/link";

export function LegalPoliciesNotices() {
  return (
    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary">
      By clicking continue, you agree to our{" "}
      <Link href="/terms" target="_blank">
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link href="/privacy" target="_blank">
        Privacy Policy
      </Link>
      .
    </div>
  );
}
