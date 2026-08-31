import {
	Accessibility,
	BriefcaseBusiness,
	Car,
	HeartPulse,
	Scale,
} from 'lucide-react'

export function Theses() {
	const theses = [
		{
			icon: BriefcaseBusiness,
			title: 'Salário-Maternidade',
			description:
				'Captação de pessoas que podem ter direito ao benefício e buscam orientação para entender e solicitar seus direitos.',
		},
		{
			icon: Accessibility,
			title: 'BPC / LOAS',
			description:
				'Encontre pessoas que podem se enquadrar nos requisitos do benefício assistencial e precisam de orientação especializada.',
		},
		{
			icon: Car,
			title: 'Auxílio-Acidente',
			description:
				'Conecte seu escritório a pessoas que sofreram acidentes e podem ter direito ao benefício previdenciário.',
		},
		{
			icon: HeartPulse,
			title: 'BPC Idoso',
			description:
				'Alcance idosos e familiares que buscam orientação sobre o Benefício de Prestação Continuada.',
		},
	]

	return (
		<section className='relative overflow-hidden px-8 py-24'>
			<div className='mx-auto flex max-w-6xl flex-col gap-14'>

				{/* Heading */}
				<div className='grid gap-6 lg:grid-cols-2 lg:items-end'>
					<div>
						<span className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>
							Teses com potencial de demanda
						</span>

						<h3 className='mt-4 max-w-2xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl'>
							Encontre quem já está{' '}
							<strong className='font-ibm italic text-primary'>
								buscando por uma solução.
							</strong>
						</h3>
					</div>

					<p className='max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end'>
						Criamos campanhas direcionadas para diferentes teses
						jurídicas, colocando seu escritório em contato com
						pessoas que precisam de orientação especializada.
					</p>
				</div>

				{/* Teses */}
				<div className='divide-y divide-white/10 border-y border-white/10'>
					{theses.map((thesis, index) => {
						const Icon = thesis.icon

						return (
							<div
								key={thesis.title}
								className='group grid gap-6 py-8 transition-all duration-300 lg:grid-cols-[100px_1fr_2fr] lg:items-center'
							>
								{/* Number */}
								<span className='font-ibm text-5xl font-semibold text-primary/30 transition-colors duration-300 group-hover:text-primary/70'>
									{String(index + 1).padStart(2, '0')}
								</span>

								{/* Title */}
								<div className='flex items-center gap-4'>
									<div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5'>
										<Icon
											size={21}
											className='text-primary'
										/>
									</div>

									<h4 className='text-xl font-semibold text-foreground sm:text-2xl'>
										{thesis.title}
									</h4>
								</div>

								{/* Description */}
								<p className='max-w-xl text-base leading-relaxed text-muted-foreground'>
									{thesis.description}
								</p>
							</div>
						)
					})}
				</div>

				{/* Other areas */}
				<div className='flex flex-col gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8'>
					<div className='flex items-start gap-4'>
						<div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10'>
							<Scale
								size={21}
								className='text-primary'
							/>
						</div>

						<div>
							<h4 className='text-lg font-semibold text-foreground'>
								E muito além dessas teses.
							</h4>

							<p className='mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground'>
								Esses são alguns dos nossos principais focos,
								mas a estratégia pode ser adaptada para
								diferentes áreas e demandas jurídicas.
							</p>
						</div>
					</div>

					<span className='shrink-0 font-mono text-xs uppercase tracking-wider text-primary'>
						Sob medida
					</span>
				</div>

			</div>
		</section>
	)
}