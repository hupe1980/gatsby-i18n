# gatsby-plugin-i18next
> Multi language feature for [Gatsby](https://github.com/gatsbyjs/gatsby).

## Installation
```sh
yarn add @wapps/gatsby-plugin-i18next
# npm install --save @wapps/gatsby-plugin-i18next
```

## Usage
Edit `gatsby-config.js`

```javascript
module.exports = {
  plugins: [
    {
      resolve: `@wapps/gatsby-plugin-i18next`,
      options: {
        // Add any options here
      },
    },
  ],
}
```

# Options
You can pass options to the plugin:
- availableLngs (Array [required])
- fallbackLng (String [required])
- siteUrl (String [optional])

For example:

```js
options: {
  availableLngs: ['en', 'de'],
  fallbackLng: 'en',
  siteUrl: 'https://www.example.com/',
}
```

## Starters
# [gatsby-starter-i18next](/starters/gatsby-starter-i18next)
- i18next integration
- automatic browser-language detection and redirection
- language switcher component
- ...

## License
[MIT](LICENSE)
