# Aurelia.jsを試す

## 参考
[get-started.md](https://github.com/aurelia/documentation/blob/master/English/get-started.md)

[ガチっぽいドキュメント](https://github.com/aurelia/documentation/blob/master/English/docs.md)

## 環境
mdどおりに作成。

jspm, gulpあたりは調べておく。

## 状況
custom element作成まで。angularのdirectiveみたいな印象。

## Aurelia.js起動手順っぽいもの

### index.html
スタートアップページ。Angularと大体一緒。

```
<body aurelia-app>
...
	<script>
      System.import('aurelia-bootstrapper');
    </script>
...
```

Aureliaが推奨するSystemJS（モジュールローダー）に色々お任せ。

この書き方だとapp.jsとapp.htmlのセットを探しに行く

### app.html, app.js

```
...
<router-view></router-view>
```

angularのng-viewっぽい。
app.jsを見てみる

```
import 'bootstrap';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
```

いわゆるrouter。angularのngRouterと比べると要素が増えててちょっととっつきにくい。

あと、moduleIdという書き方が紛らわしいが、どうやらhtmlとjsのペアを基本としているらしく、
上記のwelcomeの場合は、app.jsと同じ階層のwelcome.htmlとwelcome.jsを探しに行く。。。
なので、hoge.htmlとか買いちゃうと、welcome.html無いよエラーが出る。

まあ、こういうのを名前で縛っちゃうと、自動生成とか楽になりそうですね。

