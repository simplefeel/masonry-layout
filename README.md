<h1 align="center">Welcome to masonry-layout 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/skinner">
    <img alt="Twitter: skinner" src="https://img.shields.io/twitter/follow/skinner.svg?style=social" target="_blank" />
  </a>
</p>

> 瀑布流布局组件，跨多端，支持微信小程序、百度小程序、头条小程序、web等

## Install

1. clone或者下载项目到本地
2. dist文件夹为目标文件目录，里面分别有支付宝小程序、百度小程序、web、weex、微信小程序的源代码
3. 根据不同端拷贝对应目录下的文件引入项目即可（小程序需要拷贝components、npm、static目录下的文件）

## Usage

1. 引入组件后，使用方式如下，以微信小程序举例
```html
<masonry-layout init-data="{{cardList}}">
  <view wx:for="{{cardList}}" slot="masonry-item-{{index}}">
     //加入你的列表布局代码
  </view>       
</masonry-layout>
```
2. 其中，属性** init-data ** 为传递给瀑布流布局组件的数据，如果有滚动加载，每次在滚动到底部，将所有数据传入即可

## Other

该项目是通过使用[chameleon](https://cmljs.org/#/)框架编写，来实现一套代码运行多端的，有需要的可以看情况在此基础上进行扩展

## Author

👤 **skinner**

* Twitter: [@skinner](https://twitter.com/skinner)
* Github: [@skinner](https://github.com/skinner)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
