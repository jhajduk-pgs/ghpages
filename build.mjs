import { readFileSync, writeFileSync, mkdirSync } from 'fs'

const pkg = JSON.parse( readFileSync('./package.json') )

const template = (title = 'Title', body = 'elo') => `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
</head>
<body>
    <h1>${title}</h1>
    <p>${body}</p>
</body>
</html>`;

mkdirSync('./dist')
writeFileSync('./dist/index.html', template(`Version ${ pkg.version }`, `${ pkg.name } by ${ pkg.author } in ${ pkg.version }. Cheers!`), 'utf-8')
