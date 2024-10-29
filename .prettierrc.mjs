/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  printWidth: 100,
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  singleQuote: false,
  jsxSingleQuote: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '.*styles.css$',
    '',
    'dayjs',
    '^react$',
    '^next$',
    '^next/.*$',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@mantine/(.*)$',
    '^@mantinex/(.*)$',
    '^@mantine-tests/(.*)$',
    '^@docs/(.*)$',
    '^@/.*$',
    '^../(?!.*.css$).*$',
    '^./(?!.*.css$).*$',
    '\\.css$',
  ],
  overrides: [
    {
      files: '*.mdx',
      options: {
        printWidth: 100,
        trailingComma: 'es5',
        semi: false,
        tabWidth: 2,
        singleQuote: true,
        jsxSingleQuote: true,
      },
    },
  ],
}

export default config
