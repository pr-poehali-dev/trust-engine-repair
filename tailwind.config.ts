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
				'xs': ['0.66rem', { lineHeight: '0.95rem' }],
				'sm': ['0.77rem', { lineHeight: '1.1rem' }],
				'base': ['0.88rem', { lineHeight: '1.35rem' }],
				'lg': ['0.99rem', { lineHeight: '1.55rem' }],
				'xl': ['1.1rem', { lineHeight: '1.7rem' }],
				'2xl': ['1.32rem', { lineHeight: '1.8rem' }],
				'3xl': ['1.65rem', { lineHeight: '2rem' }],
				'4xl': ['1.98rem', { lineHeight: '2.3rem' }],
				'5xl': ['2.64rem', { lineHeight: '2.8rem' }],
				'6xl': ['3.3rem', { lineHeight: '3.4rem' }],
				'7xl': ['3.96rem', { lineHeight: '4rem' }],
				'8xl': ['5.28rem', { lineHeight: '5.3rem' }],
				'9xl': ['7.04rem', { lineHeight: '7.1rem' }],
			},
			spacing: {
				'0': '0',
				'px': '1px',
				'0.5': '0.11rem',
				'1': '0.22rem',
				'1.5': '0.33rem',
				'2': '0.44rem',
				'2.5': '0.55rem',
				'3': '0.66rem',
				'3.5': '0.77rem',
				'4': '0.88rem',
				'5': '1.1rem',
				'6': '1.32rem',
				'7': '1.54rem',
				'8': '1.76rem',
				'9': '1.98rem',
				'10': '2.2rem',
				'11': '2.42rem',
				'12': '2.64rem',
				'14': '3.08rem',
				'16': '3.52rem',
				'20': '4.4rem',
				'24': '5.28rem',
				'28': '6.16rem',
				'32': '7.04rem',
				'36': '7.92rem',
				'40': '8.8rem',
				'44': '9.68rem',
				'48': '10.56rem',
				'52': '11.44rem',
				'56': '12.32rem',
				'60': '13.2rem',
				'64': '14.08rem',
				'72': '15.84rem',
				'80': '17.6rem',
				'96': '21.12rem',
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