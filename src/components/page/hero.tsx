import { TypewritterEffect } from "../ui/animated/typewriter-effect"
import { Button } from "../ui/button"

export function Hero() {

    const phrases = [
        "gerindo sua rede social via tráfego pago.",
        "automatizando o atendimento do seu WhatsApp.",
        "fechando contratos automaticamente.",
        "trazendo controle e padronização via CRM personalizado.",
        "usando tecnologia a seu favor.",
    ]

    return (
        <section className="relative flex min-h-[650px] flex-col items-center justify-center overflow-hidden pt-16 pb-6">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(212,168,67,0.22),transparent_50%)]" />
            <div className="absolute -left-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[120px]" />

            <div
                className="absolute inset-0 -z-10 opacity-[0.045]"
                style={{
                    backgroundImage: `
                linear-gradient(to right, currentColor 1px, transparent 1px),
                linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="flex max-w-5xl flex-col items-center gap-8 px-6">

                <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary">
                    Marketing + Tecnologia para Advocacia
                </span>

                <h2 className="max-w-5xl text-center text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                    Advogado,{" "}
                    <strong className="font-ibm italic text-primary">
                        automatize seus fechamentos
                    </strong>{" "}
                    e escale seu escritório de verdade
                </h2>

                <div className="text-center text-lg leading-relaxed text-foreground sm:text-xl">
                    <p>
                        A Prime Jurídico te faz crescer
                    </p>

                    <div className="mt-2 text-foreground">
                        <TypewritterEffect texts={phrases} />
                    </div>
                </div>

                <Button className="group mt-2 h-12 px-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20">
                    <span className="font-mono text-sm">
                        QUERO GARANTIR MAIS CLIENTES
                    </span>

                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </Button>

            </div>
        </section>
    )
}