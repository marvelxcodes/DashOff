import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
	theme: {
		transparent: 'transparent',
		current: 'currentColor',
		extend: {
			colors: {
				'tremor': {
					brand: {
						faint: colors.neutral[950],
						muted: colors.neutral[950],
						subtle: colors.neutral[800],
						DEFAULT: colors.neutral[500],
						emphasis: colors.neutral[400],
						inverted: colors.neutral[950]
					},
					background: {
						muted: colors.neutral[800],
						subtle: colors.neutral[800],
						DEFAULT: colors.neutral[900],
						emphasis: colors.neutral[300]
					},
					border: {
						DEFAULT: colors.neutral[800]
					},
					ring: {
						DEFAULT: colors.neutral[800]
					},
					content: {
						subtle: colors.neutral[600],
						DEFAULT: colors.neutral[500],
						emphasis: colors.neutral[200],
						strong: colors.neutral[50],
						inverted: colors.neutral[950]
					}
				}
			},
			boxShadow: {
				'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'tremor-card':
					'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'tremor-dropdown':
					'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
			},
			borderRadius: {
				'tremor-small': '0.375rem',
				'tremor-default': '0.5rem',
				'tremor-full': '9999px'
			},
			fontSize: {
				'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
				'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
				'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
				'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }]
			}
		}
	},
	safelist: [
		{
			pattern:
				/^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected']
		},
		{
			pattern:
				/^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected']
		},
		{
			pattern:
				/^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected']
		},
		{
			pattern:
				/^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
		},
		{
			pattern:
				/^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
		},
		{
			pattern:
				/^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
		}
	],
	plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')]
};
export default config;
