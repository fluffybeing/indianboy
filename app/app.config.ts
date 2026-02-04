export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'cursor-pointer active:scale-[0.98] transition-transform duration-150'
      },
      defaultVariants: {
        color: 'neutral'
      }
    },
    colors: {
      neutral: 'neutral',
      primary: 'sky'
    },
  },
  seo: {
    title: 'indianboy - Opensource changelog template',
    description:
      'indianboy is an open source change log template made with Nuxt and Tailwind',
    image: 'https://indianboy.vercel.app/indianboy-banner.jpg',
    url: 'https://indianboy.vercel.app'
  }
});
