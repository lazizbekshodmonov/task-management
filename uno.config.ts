import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({

  shortcuts: [
    ['btn', 'px-[43px] py-[15px] rounded inline-block transition duration-200 ease-in-out text-[16px] font-medium cursor-pointer active:scale-95 !outline-none disabled:cursor-default disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:opacity-50'],
    ['btn-magenta', 'bg-magenta-affair hover:bg-magenta-hover text-white'],
    ['btn-blue', ' bg-blue-700 hover:bg-blue-800 text-white '],
    ['btn-slate', 'bg-slate-200 hover:bg-slate-300'],
    ['icon-btn', 'inline-block cursor-pointer select-none  transition duration-200 ease-in-out opacity-70 text-dark-300 hover:opacity-100 hover:text-dark-600'],
    ['inpt', 'w-full border-[1px] rounded p-3 text-[14.573px] font-not-italic font-medium capitalize font-sans border-gray-400 dark:border-gray-700 bg-transparent text-gray-400  outline-none active:outline-none'],
    ['lbl', 'text-gray-900 dark:text-white font-not-italic font-sans font-medium text-4 line-height-[normal] mb-3 text-left block'],
  ],
  theme: {
    colors: {
      'magenta-affair': '#973FCF',
      'magenta-hover': '#6c2697'
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
