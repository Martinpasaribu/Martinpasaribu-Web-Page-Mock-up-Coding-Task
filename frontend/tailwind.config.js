/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        'fadeInUp': 'fadeInUp 0.5s ease-in-out',
      },
      fontFamily: {
        'linkstyle': ['Linkstyle', 'sans-serif',],
        'gaya-apa' : ['Robot'],
        'sans': ['Open Sans', 'sans-serif'],

        
      },
      backgroundImage:{
        'cats': 'url(/src/assets/bg-kerja.jpg)'
      },
      colors: {
        blue: '#3490dc', // Atau kode warna biru yang Anda inginkan
        ijo:  '#527853',
        cokelat: '#5c5a5a',
        kuning:"#F4E0B9",
        ungukeren:"#5551FF",
        pinkungu: "#A259FF",
        yelow2:"#EBBA4A",
        orange2:"#E8A03E",
        light2:"#5AC6FA",
        dark:"#459CE3",
        red2:"#E3634D",
        abu:"#696868FD",
        abu2:"#949494FD"

        
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '26': '1rem', // Untuk menyesuaikan ukuran sesuai kebutuhan
      },
      transitionDuration: {
        '3000': '3000ms',
        '6000': '10000ms', // Atur durasi transisi menjadi 3000ms (3 detik)
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
      backgroundImage:{
        'bg1': 'url(/src/assets/background.jpg)'
      },

    }
  },
  plugins: [
    
  ],
}

