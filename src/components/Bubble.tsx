import { PropsWithChildren } from "react";

export function Bubble({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`bg-[#f0f0f0] py-3 px-4 rounded-md ${className}`}>
      {children}
    </div>
  );
}
