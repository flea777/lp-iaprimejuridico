interface PresentationCardProps {
	icon: React.ElementType
	title: string
	description: string
	index: number
	featured?: boolean
}

export function PresentationCard(props: PresentationCardProps) {
	const { icon, title, description, index, featured = false } = props
	const Icon = icon

	return (
		<div
			className={`group flex h-full flex-col rounded-2xl bg-card/80 p-5 ring-1 ring-white/8 transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:bg-card hover:shadow-[0_8px_8px_-8px_rgba(0,0,0,0.7)] sm:p-6 ${
				featured ? 'items-start text-left lg:min-h-52 lg:flex-row lg:gap-6 lg:p-7' : 'items-center text-center'
			}`}
		>
			<div className='mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/12 lg:mb-0'>
				<Icon className='h-5 w-5 text-primary' />
			</div>

			<div className={featured ? 'lg:pt-0.5' : ''}>
				<span className='mb-2 block font-mono text-[0.625rem] uppercase tracking-[0.16em] text-primary/75'>
					{String(index + 1).padStart(2, '0')}
				</span>
				<h4 className='mb-2 font-ibm text-xl font-semibold text-foreground'>
					{title}
				</h4>
				<p className='text-pretty text-sm leading-relaxed text-muted-foreground'>
					{description}
				</p>
			</div>
		</div>
	)
}
