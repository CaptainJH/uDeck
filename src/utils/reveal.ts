/** Clases de scroll reveal: ver `revealOnScroll.ts` + `globals.css` */

export const REVEAL_STAGGER_CAP_MS = 400
export const REVEAL_STAGGER_STEP_MS = 100

export function staggerDelayMs(
  index: number,
  cap = REVEAL_STAGGER_CAP_MS
): number {
  return Math.min((index + 1) * REVEAL_STAGGER_STEP_MS, cap)
}

export function staggerDelayClass(index: number, cap?: number): string {
  return `delay-${staggerDelayMs(index, cap)}`
}

/** `class:list` para tarjetas / ítems con entrada escalonada */
export function revealStaggerTokens(index: number, cap?: number): string[] {
  return ['animate-fade-in-up', staggerDelayClass(index, cap)]
}
