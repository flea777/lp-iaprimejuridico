import {
	ArrowUpRight,
	Mail,
	MessageCircle,
} from "lucide-react"

export function Footer() {
	return (
		<footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-card/50">

			{/* Glow */}
			<div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 bg-primary/5 blur-3xl" />

			<div className="w-full px-8 sm:px-12 lg:px-16">

				{/* Main footer */}
				<div className="grid gap-16 py-20 lg:grid-cols-[2fr_1fr_1fr]">

					{/* Brand */}
					<div className="flex flex-col gap-6">

						<div className="flex items-center gap-3">
							<img
								src="/logo.png"
								width={60}
								height={60}
								alt="Prime Jurídico"
								className="object-contain"
							/>

							<h2 className="font-ibm text-3xl leading-[0.85] text-foreground">
								PRIME
								<br />
								<span className="font-semibold text-primary">
									Jurídico
								</span>
							</h2>
						</div>

						<p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
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

						<nav className="flex flex-col gap-3">
							<a
								href="#inicio"
								className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
							>
								Início
							</a>

							<a
								href="#teses"
								className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
							>
								Teses
							</a>

							<a
								href="#como-funciona"
								className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
							>
								Como funciona
							</a>

							<a
								href="#resultados"
								className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
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
								href="https://wa.me/5500000000000"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-4 transition-colors"
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
										(00) 00000-0000
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
								className="group flex items-center gap-4 transition-colors"
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
										contato@primejuridico.com.br
									</p>
								</div>

								<ArrowUpRight
									size={15}
									className="ml-auto text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
								/>
							</a>

							{/* Instagram */}
							<a
								href="https://instagram.com/primejuridico"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-4 transition-colors"
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
										@primejuridico
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