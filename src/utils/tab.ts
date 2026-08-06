export const handleTabButtonClick = (button: HTMLButtonElement) => {
  const tab = button.closest('[data-tab]') as HTMLElement

  const tabButtons = tab.querySelectorAll(
    ':scope > [data-tab-header] [data-tab-button]',
  ) as NodeListOf<HTMLButtonElement>
  const tabPanes = tab.querySelectorAll(
    ':scope > [data-tab-body] > [data-tab-pane]',
  ) as NodeListOf<HTMLElement>

  desactivateAll(tabButtons, tabPanes)
  activateTab(button, tabButtons, tabPanes)
}

/** Align panels with the tab marked selected (or the first tab). Run once on load. */
export const initAllTabs = () => {
  document.querySelectorAll('[data-tab]').forEach((container) => {
    const tab = container as HTMLElement
    const tabButtons = tab.querySelectorAll(
      ':scope > [data-tab-header] [data-tab-button]',
    ) as NodeListOf<HTMLButtonElement>
    const tabPanes = tab.querySelectorAll(
      ':scope > [data-tab-body] > [data-tab-pane]',
    ) as NodeListOf<HTMLElement>

    if (tabButtons.length === 0) return

    const selectedIndex = Array.from(tabButtons).findIndex(
      (b) => b.getAttribute('aria-selected') === 'true',
    )
    const index = selectedIndex >= 0 ? selectedIndex : 0
    const button = tabButtons[index]!

    desactivateAll(tabButtons, tabPanes)
    activateTab(button, tabButtons, tabPanes)
  })
}

const desactivateAll = (
  tabButtons: NodeListOf<HTMLButtonElement>,
  tabPanes: NodeListOf<HTMLElement>,
) => {
  tabButtons.forEach((button) => {
    button.setAttribute('aria-selected', 'false')
  })
  tabPanes.forEach((pane) => {
    pane.setAttribute('aria-hidden', 'true')
  })
}

const activateTab = (
  button: HTMLButtonElement,
  tabButtons: NodeListOf<HTMLButtonElement>,
  tabPanes: NodeListOf<HTMLElement>,
) => {
  const index = Array.from(tabButtons).indexOf(button)

  button.setAttribute('aria-selected', 'true')
  if (tabPanes[index]) {
    tabPanes[index].setAttribute('aria-hidden', 'false')
  }
}
