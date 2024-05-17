import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Glassium</span>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Glassium',
    }
  },
  project: {
    link: 'https://glassium.org',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/ex3ndr/glassium-docs',
  footer: {
    text: 'Bulka LLC, San Francisco, CA',
  },
}

export default config
