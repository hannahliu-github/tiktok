# TikTok

My TikTok app is a single-page site that mimics video playback on TikTok. The current version is hosted on Fly.io as [tiktok-992019](https://tiktok-992019.fly.dev/). The app loads videos into the page from keywords entered in the search bar.

### Contents

1. [Features](#features)
2. [Tech Stack](#tech_stack)
3. [How-To](#how_to)
	- [Install](#install)
	- [Run App](#run_app)
4. [Author](#author)
5. [License](#license)

<a id="features"></a>
## 1. Features

- Query YouTube videos over REST API
- Embed video content
- React-bootstrap components
- Page styling with CSS

<a id="teck_stack"></a>
## 2. Tech Stack

![JavaScript](icons/javascript.svg) JavaScript,
![Node.js](icons/nodedotjs.svg) Node.js,
![YouTube](icons/youtube.svg) YouTube,
![React](icons/react.svg) React,
![Boostrap](icons/bootstrap.svg) Bootstrap,
![Babel](icons/babel.svg) Babel,
![CSS](icons/csswizardry.svg) CSS,
![Ruby](icons/ruby.svg) Ruby,
![Ruby on Rails](icons/rubyonrails.svg) Rails,
![Docker](icons/docker.svg) Docker,
![Fly](icons/fly.svg) Fly.io



<a id="how_to"></a>
## 3. How-To

<a id="install"></a>
### Install

To clone Git repository:

	git clone https://github.com/hannahliu-github/tiktok.git

When cloned as above the app's root directory is named `tiktok`. Go to this folder in a command window and run the following to install Ruby requirements:

	bundle install

To install JavaScript requirements change directory to the `frontend` folder and run

	npm install

<a id="run_app"></a>
### Run App
From root directory run:

	rails server

Then visit [localhost:3000](http://localhost:3000/).

<a id="author"></a>
## 4. Author

Shuhan (Hannah) Liu, [shhan.liu@gmail.com](mailto:shhan.liu@gmail.com)

<a id="license"></a>
## 5. License

MIT License

Copyright (c) 2022 Hannah Liu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.