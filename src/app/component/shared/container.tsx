import { cn } from "@/lib/utils";

export interface ContainerProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}
function Container({ className, children }: ContainerProps) {
  return (
    <section className={cn("mx-auto container-main px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </section>
  );
}

export default Container;
