import { TypewritterEffect } from "../ui/animated/typewriter-effect"
import { CtaLink } from "../commons/cta-link"

export function Hero() {

    const phrases = [
        "gerindo sua rede social via tráfego pago.",
        "automatizando o atendimento do seu WhatsApp.",
        "fechando contratos automaticamente.",
        "trazendo controle e padronização via CRM personalizado.",
        "usando tecnologia a seu favor.",
    ]

    return (
        <section
            id="inicio"
            aria-labelledby="hero-title"
            className="relative flex min-h-[clamp(38rem,75vh,46rem)] w-full flex-col items-center justify-center overflow-hidden px-[var(--page-gutter)] py-[var(--section-space-compact)]"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_32%,rgba(212,168,67,0.18),transparent_48%)]" />
            <div className="absolute -left-40 top-16 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/8 blur-[120px]" />
            <div className="absolute -right-40 bottom-4 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/8 blur-[120px]" />

            <div className="flex w-full max-w-5xl flex-col items-center gap-7 sm:gap-8">

                <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary">
                    Marketing + Tecnologia para Advocacia
                </span>

                <h2
                    id="hero-title"
                    className="max-w-5xl text-balance text-center text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.035em] text-foreground"
                >
                    Advogado,{" "}
                    <strong className="font-ibm italic text-primary">
                        automatize seus fechamentos
                    </strong>{" "}
                    e escale seu escritório de verdade
                </h2>

                <div className="max-w-3xl text-pretty text-center text-lg leading-relaxed text-foreground/90 sm:text-xl">
                    <p>
                        A Prime Jurídico te faz crescer
                    </p>

                    <div className="mt-2 min-h-[3.5rem] text-foreground sm:min-h-8">
                        <TypewritterEffect texts={phrases} />
                    </div>
                </div>

                <CtaLink className="mt-1 h-12 px-6" />

            </div>
        </section>
    )
}
