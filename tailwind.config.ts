import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Commissioner', 'system-ui', '-apple-system', 'sans-serif'],
				commissioner: ['Commissioner', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.6rem', { lineHeight: '0.8rem' }],
				'sm': ['0.7rem', { lineHeight: '1rem' }],
				'base': ['0.8rem', { lineHeight: '1.2rem' }],
				'lg': ['0.9rem', { lineHeight: '1.4rem' }],
				'xl': ['1rem', { lineHeight: '1.5rem' }],
				'2xl': ['1.2rem', { lineHeight: '1.6rem' }],
				'3xl': ['1.5rem', { lineHeight: '1.8rem' }],
				'4xl': ['1.8rem', { lineHeight: '2rem' }],
				'5xl': ['2.4rem', { lineHeight: '2.4rem' }],
				'6xl': ['3rem', { lineHeight: '3rem' }],
				'7xl': ['3.6rem', { lineHeight: '3.6rem' }],
				'8xl': ['4.8rem', { lineHeight: '4.8rem' }],
				'9xl': ['6.4rem', { lineHeight: '6.4rem' }],
			},
			spacing: {
				'0': '0',
				'px': '1px',
				'0.5': '0.1rem',
				'1': '0.2rem',
				'1.5': '0.3rem',
				'2': '0.4rem',
				'2.5': '0.5rem',
				'3': '0.6rem',
				'3.5': '0.7rem',
				'4': '0.8rem',
				'5': '1rem',
				'6': '1.2rem',
				'7': '1.4rem',
				'8': '1.6rem',
				'9': '1.8rem',
				'10': '2rem',
				'11': '2.2rem',
				'12': '2.4rem',
				'14': '2.8rem',
				'16': '3.2rem',
				'20': '4rem',
				'24': '4.8rem',
				'28': '5.6rem',
				'32': '6.4rem',
				'36': '7.2rem',
				'40': '8rem',
				'44': '8.8rem',
				'48': '9.6rem',
				'52': '10.4rem',
				'56': '11.2rem',
				'60': '12rem',
				'64': '12.8rem',
				'72': '14.4rem',
				'80': '16rem',
				'96': '19.2rem',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Brand color palette
				brand: {
					blue: '#1d4cd7',
					'blue-dark': '#1540bd',
					'blue-light': '#e6ecfd',
					background: '#f2f6fa',
					gray: {
						50: '#F8FAFC',
						100: '#F1F5F9',
						200: '#E2E8F0',
						300: '#CBD5E1',
						400: '#94A3B8',
						500: '#64748B',
						600: '#475569',
						700: '#334155',
						800: '#1E293B',
						900: '#0F172A'
					}
				},

			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem'
			},

			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;