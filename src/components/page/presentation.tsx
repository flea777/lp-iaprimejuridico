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
		},
		{
			icon: MessageCircle,
			title: 'WhatsApp Automatizado',
			description:
				'Automatize atendimentos, follow-ups e respostas para não perder nenhuma oportunidade.',
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
		<section className='flex flex-col gap-4 px-8 pb-20 pt-14 items-center'>
			<div className='flex flex-col items-center gap-4 mb-10'>
				<span className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>
					Tudo que seu escritório precisa
				</span>

				<h3 className='text-foreground font-semibold text-4xl text-center max-w-3xl'>
					Transformamos tecnologia em{' '}
					<strong className='text-primary font-ibm italic'>
						resultados reais
					</strong>{' '}
					para o seu escritório
				</h3>

				<p className='text-muted-foreground text-center max-w-2xl text-lg'>
					Da aquisição de novos clientes até o fechamento de contratos,
					criamos uma operação mais eficiente para você crescer.
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
				{solutions.map((solution, index) => (
					<PresentationCard
						key={index}
						icon={solution.icon}
						title={solution.title}
						description={solution.description}
						index={index}
					/>
				))}
			</div>
		</section>
	)
}