import {
	BarChart3,
	Bot,
	FileSignature,
	Headphones,
	LayoutDashboard,
	MessageCircle,
} from 'lucide-react'
import { PresentationCard } from '../commons/presentation-card'

export function Presentation() {
	const solutions = [
		{
			icon: LayoutDashboard,
			title: 'CRM Personalizado',
			description:
				'Tenha controle total dos seus leads, processos comerciais e oportunidades em um só lugar.',
			featured: true,
		},
		{
			icon: MessageCircle,
			title: 'WhatsApp Automatizado',
			description:
				'Automatize atendimentos, follow-ups e respostas para não perder nenhuma oportunidade.',
			featured: true,
		},
		{
			icon: FileSignature,
			title: 'Contratos Automáticos',
			description:
				'Envie contratos automaticamente através da integração com a ZapSign e acelere seus fechamentos.',
		},
		{
			icon: BarChart3,
			title: 'Tráfego Pago',
			description:
				'Atraia potenciais clientes com campanhas estratégicas e direcionadas para seu escritório.',
		},
		{
			icon: Bot,
			title: 'Automação Inteligente',
			description:
				'Conecte suas ferramentas e elimine tarefas repetitivas que consomem o tempo da sua equipe.',
		},
		{
			icon: Headphones,
			title: 'Suporte Especializado',
			description:
				'Conte com acompanhamento próximo para garantir que sua operação continue funcionando.',
		},
	]

	return (
		<section
			id='como-funciona'
			aria-labelledby='presentation-title'
			className='flex w-full flex-col items-center px-[var(--page-gutter)] py-[var(--section-space)]'
		>
			<div className='mb-12 flex flex-col items-center gap-4 sm:mb-14'>
				<span className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>
					Tudo que seu escritório precisa
				</span>

				<h3
					id='presentation-title'
					className='max-w-3xl text-balance text-center text-4xl font-semibold tracking-[-0.025em] text-foreground sm:text-5xl'
				>
					Transformamos tecnologia em{' '}
					<strong className='text-primary font-ibm italic'>
						resultados reais
					</strong>{' '}
					para o seu escritório
				</h3>

				<p className='max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground'>
					Da aquisição de novos clientes até o fechamento de contratos,
					criamos uma operação mais eficiente para você crescer.
				</p>
			</div>

			<div className='grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6'>
				{solutions.map((solution, index) => (
					<div
						key={solution.title}
						className={solution.featured ? 'lg:col-span-6' : 'lg:col-span-3'}
					>
						<PresentationCard
							icon={solution.icon}
							title={solution.title}
							description={solution.description}
							index={index}
							featured={solution.featured}
						/>
					</div>
				))}
			</div>
		</section>
	)
}
