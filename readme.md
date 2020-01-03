<p align="center"><img src="/assets/repository-open-graph-template.jpg" width="400"></p>
<p align="center">[Play](https://monodyle.github.io/flappy-bird-p5js/)</p>

🎮 A flappy-bird game write with [p5js](https://p5js.org/)

## Run locally

For the developer mode:

- Install [Node](http://nodejs.org/download/) and [Gulp](https://gulpjs.com/)
- Install the dependencies

```bash
$ npm install
$ npm install gulp-cli -g # Server + BrowserSync
```

Then just type on your bash:

```bash
$ gulp
```

Open your browser at `http://localhost:8000/`

Game can't run if you do not have **http(s) server** because p5.js fetch asset by fetch API, so if you open **index.html** by browser, you will got blank bird game... `URL scheme must be "http" or "https" for CORS request.`

Also can try `http-server` instead of `grunt` if you just need http-server to play a game.

```bash
$ npm install [-g] http-server
$ http-server
```

## Screenshot

<p align="center"><img src="/assets/screenshot.png"></p>

Just a simple game, may contain tons of bugs 🤣🤣

![](assets/birdy-algorithm.jpg)
