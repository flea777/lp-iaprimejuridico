import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex w-[calc(100%-2rem)] items-center justify-between gap-4 rounded-3xl border border-white/10 bg-card/80 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-xl sm:w-[90%] sm:px-6 md:w-[85%] lg:w-3/4 lg:px-8">
      
      {/* Logo */}
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <img
          src="/logo.png"
          width={56}
          height={56}
          alt="Prime Jurídico"
          className="h-11 w-11 shrink-0 object-contain sm:h-14 sm:w-14"
        />

        <h1 className="text-foreground font-ibm text-xl leading-[0.85] sm:text-2xl">
          PRIME <br />
          <span className="text-primary font-semibold">
            Jurídico
          </span>
        </h1>
      </div>

      {/* CTA */}
      <Button className="group shrink-0 px-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 sm:px-4">
        <span className="font-mono text-[10px] sm:text-sm">
          <span className="sm:hidden">
            QUERO MAIS CLIENTES
          </span>

          <span className="hidden sm:inline">
            QUERO GARANTIR MAIS CLIENTES
          </span>
        </span>

        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1 sm:ml-2">
          →
        </span>
      </Button>
    </header>
  );
}