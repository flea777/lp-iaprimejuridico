import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CtaLinkProps {
	className?: string
	compactLabel?: string
	label?: string
}

export function CtaLink({
	className,
	compactLabel,
	label = "QUERO GARANTIR MAIS CLIENTES",
}: CtaLinkProps) {
	return (
		<Link
			href="https://wa.me/5543984483502?text=Ol%C3%A1%2C%20quero%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20ecossistema%20que%20automatiza%20o%20fechamento%20de%20contratos."
			target="_blank"
			aria-label={label}
			className={cn(
				buttonVariants({ size: "lg" }),
				"group h-11 cursor-pointer rounded-full px-5 transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_6px_8px_-5px_color-mix(in_oklch,var(--primary)_55%,transparent)] active:translate-y-0 focus-visible:ring-3 focus-visible:ring-ring/30",
				className,
			)}
		>
			<span className="font-mono text-[0.6875rem] tracking-[-0.01em] sm:text-xs">
				{compactLabel ? (
					<>
						<span className="sm:hidden">{compactLabel}</span>
						<span className="hidden sm:inline">{label}</span>
					</>
				) : (
					label
				)}
			</span>

			<span
				aria-hidden="true"
				className="ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1"
			>
				→
			</span>
		</Link>
	)
}
