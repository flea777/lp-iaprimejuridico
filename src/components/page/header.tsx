import Image from "next/image"

import { CtaLink } from "@/components/commons/cta-link"

export function Header() {
  return (
    <header className="relative z-20 mx-auto flex w-[calc(100%-2rem)] max-w-[var(--content-width)] items-center justify-between gap-2 rounded-2xl bg-card/85 px-4 py-3 shadow-[0_6px_8px_-6px_rgba(0,0,0,0.48)] ring-1 ring-white/10 backdrop-blur-xl sm:gap-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <Image
          src="/logo.png"
          width={56}
          height={56}
          alt="Prime Jurídico"
          priority
          className="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14"
        />

        <h1 className="font-ibm text-lg leading-[0.85] text-foreground sm:text-2xl">
          PRIME <br />
          <span className="font-semibold text-primary">Jurídico</span>
        </h1>
      </div>

      <CtaLink
        compactLabel="MAIS CLIENTES"
        className="h-11 shrink-0 px-2 sm:px-5"
      />
    </header>
  )
}
