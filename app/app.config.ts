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
    title: 'INDIANBOY - A Satirical Blog',
    description:
      'INDIANBOY is a satirical blog that humorously chronicles the adventures and misadventures of a mischievous young Indian boy in Sweden',
    image: 'https://indianboy.vercel.app/logo.png',
    url: 'https://indianboy.xyz'
  }
});
