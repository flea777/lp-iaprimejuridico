import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Results() {
	const results = [
		{
			image: "/result-1.jpeg",
			label: "Resultado de campanha semanal",
		},
		{
			image: "/result-4.jpg",
			label: "Resultado de campanha semanal",
		},
		{
			image: "/result-3.jpeg",
			label: "Resultado de campanha semanal",
		},
		{
			image: "/result-2.jpeg",
			label: "Resultado de campanha semanal",
		},
	]

	return (
		<section className="relative flex flex-col items-center overflow-hidden px-8 py-12">

			{/* Glow */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(212,168,67,0.10),transparent_55%)]" />

			<div className="flex w-full max-w-6xl flex-col items-center">

				{/* Heading */}
				<div className="mb-16 flex max-w-3xl flex-col items-center gap-4 text-center">

					<span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
						Resultados reais
					</span>

					<h3 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
						Quem já trabalha com a gente,
						<br />
						<strong className="font-ibm italic text-primary">
							tem o que mostrar.
						</strong>
					</h3>

					<p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
						Conversas reais com clientes que transformaram sua
						operação e começaram a enxergar resultados.
					</p>

				</div>

				{/* WhatsApp screenshots */}
				<div className="grid w-full grid-cols-2 items-center justify-items-center gap-5 sm:grid-cols-4 sm:gap-8">
					{results.map((result, index) => (
						<div
							key={index}
							className="group flex flex-col items-center gap-4"
						>
							<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-1 shadow-xl shadow-black/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-primary/10">
								<img
									src={result.image}
									alt={result.label}
									className="h-auto w-full max-w-[240px] rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.015]"
								/>
							</div>

							<div className="flex items-center gap-2 text-center">
								<span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
									{result.label}
								</span>

								<ArrowUpRight
									size={13}
									className="text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								/>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="mt-16 flex flex-col items-center gap-4 text-center">
					<p className="text-sm text-muted-foreground">
						Seu escritório também pode alcançar novos resultados.
					</p>

					<Button className="group h-12 px-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20">
						<span className="font-mono text-sm">
							QUERO GARANTIR MAIS CLIENTES
						</span>

						<span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
							→
						</span>
					</Button>
				</div>

			</div>
		</section>
	)
}