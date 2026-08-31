'use client'

import { useEffect, useState } from 'react'
import Typewritter from 'typewriter-effect'

interface TypewritterEffectProps {
	texts: string[]
}

export function TypewritterEffect(props: TypewritterEffectProps) {
	const { texts } = props
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
		const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)

		updateMotionPreference()
		mediaQuery.addEventListener('change', updateMotionPreference)

		return () => mediaQuery.removeEventListener('change', updateMotionPreference)
	}, [])

	if (prefersReducedMotion) {
		return <span className='inline-block'>{texts[0]}</span>
	}

	return (
		<>
			<span className='inline-block' aria-hidden='true'>
				<Typewritter
					options={{
						strings: texts,
						autoStart: true,
						loop: true,
						delay: 60,
					}}
				/>
			</span>
			<span className='sr-only'>{texts[0]}</span>
		</>
	)
}
