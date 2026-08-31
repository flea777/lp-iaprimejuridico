"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Pause, Play, Volume2, VolumeX } from "lucide-react"

import { CtaLink } from "@/components/commons/cta-link"

export function Results() {
	const results = [
		{
			type: "video" as const,
			video: "/result-1.mp4",
			poster: "/result-1-poster.jpg",
			label: "Resultado de campanha semanal",
			width: 824,
			height: 1600,
		},
		{
			type: "image" as const,
			image: "/result-4.jpg",
			label: "Resultado de campanha semanal",
			width: 929,
			height: 1600,
		},
		{
			type: "image" as const,
			image: "/result-3.jpeg",
			label: "Resultado de campanha semanal",
			width: 924,
			height: 1600,
		},
		{
			type: "image" as const,
			image: "/result-2.jpeg",
			label: "Resultado de campanha semanal",
			width: 824,
			height: 1600,
		},
	]

	return (
		<section
			id="resultados"
			aria-labelledby="results-title"
			className="relative flex w-full flex-col items-center overflow-hidden px-[var(--page-gutter)] py-[var(--section-space)]"
		>

			{/* Glow */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(212,168,67,0.10),transparent_55%)]" />

			<div className="flex w-full max-w-6xl flex-col items-center">

				{/* Heading */}
				<div className="mb-12 flex max-w-3xl flex-col items-center gap-4 text-center sm:mb-16">

					<span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
						Resultados reais
					</span>

					<h3
						id="results-title"
						className="text-balance text-4xl font-semibold tracking-[-0.025em] text-foreground sm:text-5xl"
					>
						Quem já trabalha com a gente,
						<br />
						<strong className="font-ibm italic text-primary">
							tem o que mostrar.
						</strong>
					</h3>

					<p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
						Conversas reais com clientes que transformaram sua
						operação e começaram a enxergar resultados.
					</p>

				</div>

				{/* WhatsApp screenshots */}
				<div className="grid w-full grid-cols-2 items-start justify-items-center gap-x-4 gap-y-8 sm:gap-7 lg:grid-cols-4 lg:gap-8">
					{results.map((result, index) => (
						<div
							key={result.type === "video" ? result.video : result.image}
							className="group flex flex-col items-center gap-4"
						>
							<div className="relative overflow-hidden rounded-2xl bg-card p-1 ring-1 ring-white/10 transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_8px_8px_-8px_color-mix(in_oklch,var(--primary)_45%,transparent)] group-hover:ring-primary/35">
								{result.type === "video" ? (
									<VideoResult
										src={result.video}
										poster={result.poster}
										width={result.width}
										height={result.height}
										priority={index === 0}
									/>
								) : (
									<Image
										src={result.image}
										width={result.width}
										height={result.height}
										alt={result.label}
										sizes="(max-width: 639px) 44vw, (max-width: 1023px) 22vw, 240px"
										className="h-auto w-full max-w-[240px] rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.015]"
									/>
								)}
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
				<div className="mt-14 flex flex-col items-center gap-4 text-center sm:mt-16">
					<p className="text-sm text-muted-foreground">
						Seu escritório também pode alcançar novos resultados.
					</p>

					<CtaLink className="h-12 px-6" />
				</div>

			</div>
		</section>
	)
}

function VideoResult({
	src,
	poster,
	width,
	height,
	priority,
}: {
	src: string
	poster: string
	width: number
	height: number
	priority: boolean
}) {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [isPlaying, setIsPlaying] = useState(true)
	const [isMuted, setIsMuted] = useState(true)

	function togglePlay() {
		const video = videoRef.current
		if (!video) return

		if (video.paused) {
			video.play()
			setIsPlaying(true)
		} else {
			video.pause()
			setIsPlaying(false)
		}
	}

	function toggleMute() {
		const video = videoRef.current
		if (!video) return

		video.muted = !video.muted
		setIsMuted(video.muted)
	}

	return (
		<div className="relative">
			<video
				ref={videoRef}
				src={src}
				poster={poster}
				autoPlay
				loop
				muted
				playsInline
				preload={priority ? "auto" : "metadata"}
				className="h-auto w-full max-w-[240px] rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.015]"
				style={{ aspectRatio: `${width} / ${height}` }}
			/>

			<div className="absolute bottom-2 right-2 flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
				<button
					type="button"
					onClick={toggleMute}
					aria-label={isMuted ? "Ativar som" : "Desativar som"}
					className="flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
				>
					{isMuted ? (
						<VolumeX size={11} />
					) : (
						<Volume2 size={11} />
					)}
				</button>

				<button
					type="button"
					onClick={togglePlay}
					aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
					className="flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
				>
					{isPlaying ? (
						<Pause size={11} fill="currentColor" />
					) : (
						<Play size={11} fill="currentColor" className="ml-[1px]" />
					)}
				</button>
			</div>
		</div>
	)
}