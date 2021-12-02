# HTMLとCSSの基礎知識

## 01_html

- タグについて

## 02_inline_and_block

- インライン要素とブロック要素について
- インラインは横並び、ブロックは縦に並ぶ

## 03_css

- styleタグでhtmlに記載できるが、cssファイルを作成し、そっちに記載する

## 04_css_detail

- cssの詳細度について
- 親要素＜タグの名前＜クラスの名前＜id
- classはhtml内で複数設定可能。idはhtmlファイル内に1個しか付けられない
- 同じ詳細度についてはあとから書かれたものが優先される

## 05_auto

- vscodeでの自動補完（emet）
- それぞれ入力したらtabを押して確定

```
#container

<div id="container"></div>
```

```
.cls

<div class="cls"></div>
```

```
span.cls

<span class="cls"></span>
```

```
#container>.cls

<div id="container">
    <div class="cls"></div>
</div>
```

```
#container>.cls*6

<div id="container">
    <div class="cls"></div>
    <div class="cls"></div>
    <div class="cls"></div>
    <div class="cls"></div>
    <div class="cls"></div>
    <div class="cls"></div>
</div>
```

```
#container>.cls$*6

<div id="container">
    <div class="cls1"></div>
    <div class="cls2"></div>
    <div class="cls3"></div>
    <div class="cls4"></div>
    <div class="cls5"></div>
    <div class="cls6"></div>
</div>
```

```
#container>.cls$$*6

<div id="container">
    <div class="cls01"></div>
    <div class="cls02"></div>
    <div class="cls03"></div>
    <div class="cls04"></div>
    <div class="cls05"></div>
    <div class="cls06"></div>
</div>
```