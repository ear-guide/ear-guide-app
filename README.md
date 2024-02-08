# Ear Guide App
A simple audio guide.

## Get the PWA
To get the app, scan the QR code below:

![ear guide](https://github.com/ear-guide/ear-guide-app/assets/142092/fa0e4d1d-8e81-4d6e-8973-dc4c5a2c807c)

It points to https://ear.guide/ (our generic [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)).

## Visit a place
To visit a place, using the app, scan the QR code below:

![ear guide 3rdparty](https://github.com/ear-guide/ear-guide-app/assets/142092/c22d99ac-ca2d-4cc5-b8bb-ce378abcc2e3)

It points to https://ear.guide/reader?url=https://raw.githubusercontent.com/tamberg/guide/main/README.md (3rd party [content](https://raw.githubusercontent.com/tamberg/guide/main/README.md)).

## Add a guide
To add a guide, on your website _example.com_ (or in a [Github](https://github.com/) repo), publish a file _museum.md_ with the following structure:

```md
# Museum
## Room 1
### Work A
Description of work A
### Work B
Description of work B
## Room 2
...
```

Then adapt the URL https://www.ear.guide/reader?url=https://example.com/museum.md and [create a QR code](https://ddg.co/?q=qr+https://www.ear.guide/reader?url=https://example.com/museum.md).

## Build the PWA
To build the PWA from source code, using [Node.js](https://nodejs.org) and [npm](https://npmjs.com), type:
```console
$ npm install
$ npm start
```

## Deploy the PWA
To host the PWA on your domain, deploy to a publicly accessible, static Web server:
```console
$ npm run build
$ cp dist/ear-guide/index.html dist/ear-guide/404.html
$ cp -r dist/ear-guide/* ../www
```
