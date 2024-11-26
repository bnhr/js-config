module.exports = {
	// Tailwind CSS Plugin
	plugins: ['prettier-plugin-tailwindcss'],

	// Core formatting
	"semi": false,
	"singleQuote": true,
	"printWidth": 80,
	"useTabs": true,
	"tabWidth": 2,
	"endOfLine": 'lf',

	// Brackets and spacing
	"arrowParens": "always",
	"bracketSpacing": true,
	"bracketSameLine": false,
	"trailingComma": "all",

	// React/JSX specific
	"singleAttributePerLine": true,
	"jsxSingleQuote": false,

	// quotes and HTML
	"quoteProps": "as-needed",
	"htmlWhitespaceSensitivity": "css",

	// Other
	"proseWrap": "preserve", // "always" for markdown file
	"embeddedLanguageFormatting": "auto"
}
