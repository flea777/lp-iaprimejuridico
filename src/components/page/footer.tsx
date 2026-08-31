import Image from "next/image"
import {
	ArrowUpRight,
	Mail,
	MessageCircle,
} from "lucide-react"

export function Footer() {
	return (
		<footer
			id="contato"
			className="relative overflow-hidden border-t border-white/10 bg-card/50"
		>

			{/* Glow */}
			<div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 bg-primary/5 blur-3xl" />

			<div className="mx-auto w-full max-w-[var(--content-width)] px-[var(--page-gutter)]">

				{/* Main footer */}
				<div className="grid gap-12 py-[var(--section-space-compact)] md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.25fr] lg:gap-16">

					{/* Brand */}
					<div className="flex flex-col gap-6">

						<div className="flex items-center gap-3">
							<Image
								src="/logo.png"
								width={60}
								height={60}
								alt="Prime Jurídico"
								className="h-[60px] w-[60px] object-contain"
							/>

							<h2 className="font-ibm text-3xl leading-[0.85] text-foreground">
								PRIME
								<br />
								<span className="font-semibold text-primary">
									Jurídico
								</span>
							</h2>
						</div>

						<p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
							Tecnologia, tráfego e automação para transformar
							a operação do seu escritório e gerar novas
							oportunidades.
						</p>

						<span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
							Seu escritório. Mais inteligente.
						</span>

					</div>

					{/* Links */}
					<div className="flex flex-col gap-5">

						<span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
							Navegação
						</span>

						<nav aria-label="Navegação do rodapé" className="flex flex-col gap-1">
							<a
								href="#inicio"
								className="inline-flex min-h-11 w-fit items-center rounded-md text-sm text-muted-foreground transition-[color,transform] duration-200 ease-out hover:translate-x-1 hover:text-foreground focus-visible:text-foreground"
							>
								Início
							</a>

							<a
								href="#teses"
								className="inline-flex min-h-11 w-fit items-center rounded-md text-sm text-muted-foreground transition-[color,transform] duration-200 ease-out hover:translate-x-1 hover:text-foreground focus-visible:text-foreground"
							>
								Teses
							</a>

							<a
								href="#como-funciona"
								className="inline-flex min-h-11 w-fit items-center rounded-md text-sm text-muted-foreground transition-[color,transform] duration-200 ease-out hover:translate-x-1 hover:text-foreground focus-visible:text-foreground"
							>
								Como funciona
							</a>

							<a
								href="#resultados"
								className="inline-flex min-h-11 w-fit items-center rounded-md text-sm text-muted-foreground transition-[color,transform] duration-200 ease-out hover:translate-x-1 hover:text-foreground focus-visible:text-foreground"
							>
								Resultados
							</a>
						</nav>

					</div>

					{/* Contact */}
					<div className="flex flex-col gap-5">

						<span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
							Fale com a gente
						</span>

						<div className="flex flex-col gap-3">

							{/* WhatsApp */}
							<a
								href="https://wa.me/5543984483502?text=Ol%C3%A1%2C%20quero%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Prime%20Jur%C3%ADdico."
								target="_blank"
								rel="noopener noreferrer"
								className="group -mx-2 flex min-h-12 items-center gap-4 rounded-xl px-2 transition-colors duration-200 hover:bg-white/[0.035]"
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-background/40">
									<MessageCircle
										size={18}
										className="text-primary"
									/>
								</div>

								<div>
									<p className="text-xs text-muted-foreground">
										WhatsApp
									</p>

									<p className="text-sm font-medium text-foreground">
										(43) 98448-3502
									</p>
								</div>

								<ArrowUpRight
									size={15}
									className="ml-auto text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
								/>
							</a>

							{/* E-mail */}
							<a
								href="mailto:contato@primejuridico.com.br"
								className="group -mx-2 flex min-h-12 items-center gap-4 rounded-xl px-2 transition-colors duration-200 hover:bg-white/[0.035]"
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-background/40">
									<Mail
										size={18}
										className="text-primary"
									/>
								</div>

								<div>
									<p className="text-xs text-muted-foreground">
										E-mail
									</p>

									<p className="text-sm font-medium text-foreground">
										primemktprev@gmail.com
									</p>
								</div>

								<ArrowUpRight
									size={15}
									className="ml-auto text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
								/>
							</a>

							{/* Instagram */}
							<a
								href="https://instagram.com/gustavo_queiroz__adv"
								target="_blank"
								rel="noopener noreferrer"
								className="group -mx-2 flex min-h-12 items-center gap-4 rounded-xl px-2 transition-colors duration-200 hover:bg-white/[0.035]"
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-background/40">
									<span className="text-xs font-bold text-primary">
										IG
									</span>
								</div>

								<div>
									<p className="text-xs text-muted-foreground">
										Instagram
									</p>

									<p className="text-sm font-medium text-foreground">
										@gustavo_queiroz__adv
									</p>
								</div>

								<ArrowUpRight
									size={15}
									className="ml-auto text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
								/>
							</a>

						</div>

					</div>
				</div>

				{/* Bottom */}
				<div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">

					<span>
						© {new Date().getFullYear()} Prime Jurídico. Todos os direitos reservados.
					</span>

					<span>
						Marketing e tecnologia para advocacia.
					</span>

				</div>

			</div>
		</footer>
	)
}
