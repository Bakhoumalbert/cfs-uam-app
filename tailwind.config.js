/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '8xl': [
        '120px', 
        {
          lineHeight: '120px',
          letterSpacing: '-6px',
          fontWeight: '500',
        },
      ],
      '7xl': [
        '72px', 
        {
          lineHeight: '88px',
          letterSpacing: '-4.5px',
          fontWeight: '600',
        },
      ],
      '6xl': [
        '55px', 
        {
          lineHeight: '60px',
          letterSpacing: '-2.5px',
          fontWeight: '500',
        },
      ],
      '5xl': [
        '48px', 
        {
          lineHeight: '54px',
          letterSpacing: '-1.600000023841858px',
          fontWeight: '500',
        },
      ],
      '4xl': [
        '38px', 
        {
          lineHeight: '44px',
          letterSpacing: '-1.2000000476837158px',
          fontWeight: '500',
        },
      ],
      '3xl': [
        '28px', 
        {
          lineHeight: '34px',
          letterSpacing: '-0.80000001192029px',
          fontWeight: '500',
        },
      ],
      '2xl': [
        '24px',
        {
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '400',
        },
      ],
      xl: [
        '24px', 
        {
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '400',
        },
      ],
      lg: [
        '21px', 
        {
          lineHeight: '30px',
          letterSpacing: '-0.80000001192029px',
          fontWeight: '400',
        },
      ],
      base: [
        '17px', 
        {
          lineHeight: '25px',
          letterSpacing: '-0.699999988079071px',
          fontWeight: '400',
        },
      ],
      sm: [
        '15px', 
        {
          lineHeight: '23px',
          letterSpacing: '-0.6000000238418579px',
          fontWeight: '400',
        },
      ],
      caption1: [
        '20px', 
        {
          lineHeight: '24px',
          letterSpacing: '-0.6000000238418579px',
          fontWeight: '400',
        },
      ],
      caption2: [
        '18px', 
        {
          lineHeight: '20px',
          letterSpacing: '-0.30000001192092896px',
          fontWeight: '400',
        },
      ],
      caption3: [
        '16px', 
        {
          lineHeight: '18px',
          letterSpacing: '-0.5px',
          fontWeight: '400',
        },
      ],
      caption4: [
        '13px', 
        {
          lineHeight: '15px',
          letterSpacing: '-0.2000000298023224px',
          fontWeight: '400',
        },
      ],
  },colors : {
    white: "#ffffff",
    primary: {
      200: "#FEEFED",
      300: "#FBD7C5",
      400: "#F5845A",
      DEFAULT: "#DC7837",
      600: "#AC4414",
    },
    secondary: {
      200: "#EFEFFC2",
      300: "#CFD0F6",
      400: "#7F81E8",
      DEFAULT: "#5F62E2",
      600: "#5658CB2",
    },
    gray: {
      300: "#fafafa",
      400: "#f2f2f2",
      500: "#e5e5e5",
      600: "#b2b2b2",
      700: "#808080",
      800: "#333333",
      DEFAULT: "#1d1d1d",
    },
    alert: {
      danger: "#FF4E4E",
      success: "#FEB72F",
      warning: "#90DA1A",
    }
  },
  borderRadius: { // Cette déclaration nous permet de respecter les valeurs de la maquette
    // On a pas ces valeurs sur tailwinds
    DEFAULT: '10px',
    full: "9999px",
  },
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("daisyui")
  ],
}
