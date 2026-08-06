import { DOMLoaded } from './utils'

const selector = '.animate-fade-in-up'
const visibleClass = 'is-in-view'

const init = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const nodes = document.querySelectorAll<HTMLElement>(selector)
  if (!nodes.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add(visibleClass)
        observer.unobserve(entry.target)
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -6% 0px',
      threshold: 0,
    }
  )

  nodes.forEach((el) => observer.observe(el))
}

export const initRevealOnScroll = () => {
  DOMLoaded(init)
}
