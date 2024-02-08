# Ear Guide App
A simple audio guide.

## Try
- https://www.ear.guide/ (generic [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps))
- https://www.ear.guide/reader?url=https://www.ear.guide/assets/example.md (example [content](https://www.ear.guide/assets/example.md))
- https://www.ear.guide/reader?url=https://raw.githubusercontent.com/tamberg/guide/main/README.md (3rd party example [content](https://raw.githubusercontent.com/tamberg/guide/main/README.md))

## Build
Requires [Node.js](https://nodejs.org) and [npm](https://npmjs.com).
```console
$ npm install
$ npm start
```

## Deploy
Requires a static Web server.
```console
$ npm run build
$ cp -r dist/ear-guide/* ../www
```
