// Used palx by jxnblk to generate a full spectrum palette using Persian Green(#00A896) as base color
// Link: https://palx.jxnblk.com/

// The colors and font-family for heading and body are overridden, other theme objects are default 

// If you want to see the default theme, try this at App component:
// -------
// import {theme} from "@chakra-ui/core"
// -------
// then 'console.log' it
// -------
// console.log(theme)
// -------

import {theme} from '@chakra-ui/core'
import 'typeface-lato'
import 'typeface-raleway'

export default {
	...theme,
	colors: {
		black: "#000",
		white: "#FFF",
		primary: {
		  50: '#d9fffd',
		  100: '#adfff8',
		  200: '#7dfff1',
		  300: '#4dffec',
		  400: '#26ffe6',
		  500: '#15e6cd',
		  600: '#00b39f',
		  700: '#008072',
		  800: '#004e44',
		  900: '#001c18',
		},
		secondary: {
		  50: '#fafbe4',
		  100: '#f0f3be',
		  200: '#e6eb96',
		  300: '#dde46d',
		  400: '#d4dc45',
		  500: '#bac22d',
		  600: '#909722',
		  700: '#676c18',
		  800: '#3e410c',
		  900: '#151600',
		},
		blackAlpha: {
			50: "rgba(0, 0, 0, 0.04)",
			100: "rgba(0, 0, 0, 0.06)",
			200: "rgba(0, 0, 0, 0.08)",
			300: "rgba(0, 0, 0, 0.16)",
			400: "rgba(0, 0, 0, 0.24)",
			500: "rgba(0, 0, 0, 0.36)",
			600: "rgba(0, 0, 0, 0.48)",
			700: "rgba(0, 0, 0, 0.64)",
			800: "rgba(0, 0, 0, 0.80)",
			900: "rgba(0, 0, 0, 0.92)",
		},
		whiteAlpha: {
			50: "rgba(255, 255, 255, 0.04)",
			100: "rgba(255, 255, 255, 0.06)",
			200: "rgba(255, 255, 255, 0.08)",
			300: "rgba(255, 255, 255, 0.16)",
			400: "rgba(255, 255, 255, 0.24)",
			500: "rgba(255, 255, 255, 0.36)",
			600: "rgba(255, 255, 255, 0.48)",
			700: "rgba(255, 255, 255, 0.64)",
			800: "rgba(255, 255, 255, 0.80)",
			900: "rgba(255, 255, 255, 0.92)",
		},
		gray: {
			50: "#f9f9f9",
			100: "#eceeee",
			200: "#dee1e1",
			300: "#ced4d3",
			400: "#bec5c4",
			500: "#abb5b4",
			600: "#96a2a1",
			700: "#7d8c8a",
			800: "#5d706d",
			900: "#344240",
		},
		cyan: {
			50: "#f3fbfa",
			100: "#daf2f0",
			200: "#bfe9e4",
			300: "#a0dfd7",
			400: "#7dd3c9",
			500: "#54c5b7",
			600: "#1fb3a1",
			700: "#009a88",
			800: "#007a6c",
			900: "#00483f",
		},
		blue: {
			50: "#f6fafc",
			100: "#e4eff6",
			200: "#d1e4ef",
			300: "#bbd7e8",
			400: "#a4c9e0",
			500: "#89b9d7",
			600: "#6aa7cc",
			700: "#4490bf",
			800: "#1071ad",
			900: "#00426b",
		},
		indigo: {
			50: "#f9f9fd",
			100: "#ebedf8",
			200: "#dde0f3",
			300: "#cdd1ee",
			400: "#bcc2e8",
			500: "#a9b0e2",
			600: "#939cda",
			700: "#7983d1",
			800: "#5663c5",
			900: "#182ab0",
		},
		violet: {
			50: "#faf9fd",
			100: "#f0ebf8",
			200: "#e6ddf3",
			300: "#daceee",
			400: "#cdbce8",
			500: "#bfa9e2",
			600: "#ae93da",
			700: "#9a78d1",
			800: "#7f55c5",
			900: "#4d11ae",
		},
		fuschia: {
			50: "#fcf8fd",
			100: "#f6eaf8",
			200: "#efdaf2",
			300: "#e8c9ed",
			400: "#e0b6e6",
			500: "#d7a0df",
			600: "#cd87d6",
			700: "#bf67cb",
			800: "#ab37bb",
			900: "#70007f",
		},
		pink: {
			50: "#fdf8fb",
			100: "#f8eaf2",
			200: "#f2dae9",
			300: "#edc9df",
			400: "#e6b6d4",
			500: "#dfa0c7",
			600: "#d687b8",
			700: "#cb67a5",
			800: "#bb3788",
			900: "#7e004e",
		},
		red: {
			50: "#fdf8f9",
			100: "#f8eaec",
			200: "#f3dbde",
			300: "#edcbcf",
			400: "#e7b8be",
			500: "#e0a3aa",
			600: "#d78b94",
			700: "#cd6c77",
			800: "#be3f4e",
			900: "#850010",
		},
		orange: {
			50: "#fcf9f7",
			100: "#f6ece5",
			200: "#f0ddd2",
			300: "#e9cebd",
			400: "#e1bda6",
			500: "#d8a98d",
			600: "#ce936e",
			700: "#c17749",
			800: "#af5016",
			900: "#6e2a00",
		},
		yellow: {
			50: "#fbfaf2",
			100: "#f1eed7",
			200: "#e7e2ba",
			300: "#e7e2ba",
			400: "#d0c676",
			500: "#c3b54e",
			600: "#b2a11e",
			700: "#9c8900",
			800: "#7b6c00",
			900: "#484000",
		},
		lime: {
			50: "#f7fbf2",
			100: "#e7f1d7",
			200: "#d6e7b9",
			300: "#c2dc99",
			400: "#add074",
			500: "#94c14a",
			600: "#76b018",
			700: "#5e9800",
			800: "#4b7800",
			900: "#2c4700",
		},
		green: {
			50: "#f5fbf4",
			100: "#dff3dc",
			200: "#c7eac2",
			300: "#ace0a5",
			400: "#8ed584",
			500: "#6ac85d",
			600: "#3cb72c",
			700: "#139f00",
			800: "#0f7e00",
			900: "#094a00",
		},
		teal: {
			50: "#f4fbf7",
			100: "#dcf3e5",
			200: "#c2ead1",
			300: "#a5e0bb",
			400: "#83d5a2",
			500: "#5cc785",
			600: "#2ab660",
			700: "#009f3c",
			800: "#007d30",
			900: "#004a1c",
		},
	},
	fonts: {
		...theme.fonts,	
		body: "Lato, sans-serif",
		heading: "Lato, sans-serif",
	}

}