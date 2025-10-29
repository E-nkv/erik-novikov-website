import next from "eslint-config-next"
import prettierPlugin from "eslint-plugin-prettier"

const config = [
	...next,
	{
		name: "custom-rules",
		plugins: { prettier: prettierPlugin },
		rules: {
			"prettier/prettier": ["error"],
			"react/no-unescaped-entities": "off",
			"@next/next/no-img-element": "off",
		},
	},
]

export default config
