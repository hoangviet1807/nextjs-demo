module.exports = {
    theme: {
      screens: {
        mobile: '375px',
        tablet: '768px',
        laptop: '1248px',
        desktop: '1632px',
      },
      container: {
        screens: {
          sm: '100%',
          md: '768px',
          lg: '848px',
          xl: '1168px',
          '2xl': '1468px',
        },
      },
      extend: {
        colors: {
          primary: 'var(--color-primary)',
          'primary-hover': 'var(--color-primary-hover)',
          secondary: 'var(--color-secondary)',
          'secondary-hover': 'var(--color-secondary-hover)',
          important: 'var(--color-important)',
          error: 'var(--color-error)',
          success: 'var(--color-success)',
        },
        typography: {
          DEFAULT: {
            css: {
              h1: {
                fontSize: '1.875rem',
                color: 'white',
                fontWeight: 600,
                lineHeight: 1.2,
                margin: '0 0 25px',
              },
              h2: {
                fontSize: '28px',
                color: 'white',
                fontWeight: 600,
                lineHeight: 1.2,
                margin: '0 0 25px',
              },
              h3: {
                fontSize: '18px',
                color: 'white',
                fontWeight: 600,
                lineHeight: 1.2,
                margin: '16px 0 24px',
                textTransform: 'capitalize',
              },
              p: {
                color: '#a1a1a1',
                fontSize: '1em',
                fontWeight: 500,
                margin: 0,
                lineHeight: 1.8,
              },
              a: {
                color: 'white',
                '&:hover': {
                  textDecoration: 'none',
                },
              },
              strong: {
                color: '#a1a1a1',
                fontSize: '1em',
                fontWeight: 'bold',
                lineHeight: 1.8,
              },
              ul: {
                listStyleType: 'none',
                margin: '0 0 20px',
                padding: 0,
                li: {
                  margin: '.5rem 0 0',
                  paddingLeft: '25px',
                  position: 'relative',
                  '&:before': {
                    content: "''",
                    height: '6px',
                    width: '6px',
                    backgroundColor: '#ec3200',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: 0,
                    top: '0.5em',
                  },
                  '&:first-child': {
                    margin: 0,
                  },
                },
              },
            },
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
  };
  