/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00B5D7',
        'border': '#D0D5DD',
        'error': '#F2376F',
        'purple': '#6A67F8',
        'grey': '#F6F8F9',
        'deactive': '#838C97',
        'secondary': '#475569',
        'disabled': '#1D1B201F',
        'lightSurf': '#E2F3FF',
        'tertiary': '#838C97',
        'dark': '#212121',
        'lightSur': '#D0D5DD',
        'hover_color': '#F6F8F9',
        'active_background': '#D3EFDE',
        'active_status': '#27AE60',
        'error_background': '#FCD7D7',
        'gray-900': '#101828',
        'gray-500': '#667085',
        'fill-surf': '#EAECF0',
        'light-surface': '#6E7C87',
        'status_deleted': '#F2F4F7',
        'text-red-600': '#F2376F',
        'yellow-600': '#FFCA00',
        'surface-bright': '#F5F5F6',
        'terminal-text': '#110D6D',
        'terminal-bg': '#E0E6FC',
        'transit-bg': '#FFF1F5',
        'border-color':'rgb(52, 119, 176)'


      },
   

    },
  },
  plugins: [

    require('flowbite/plugin')

  ],
}