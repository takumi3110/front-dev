# 02_css_transition

## 010_hover and change color

- font-weightのデフォルト値は500
- paddingは要素の内側に余白、marginは要素の外側に余白
- `.btn:hover`でホバーしたときのstyleを決める
- ホバーしたときに瞬時に変化してしまうので、元の要素にtransitionプロパティを作る
- `transition: all 0.3s;`0.3秒かけて変化する
- backgroung-colorだけに変化をもたせたい場合`transition:background-color03s`

```
transition: 場所 時間 移り変わりの緩急 遅延時間;

ex.
transition: all 0.3s ease 3s;
(指定したすべての場所に0.3秒かけて移り変わる。3秒後に)
```

## 015_sass

- cssファイルの拡張子を.scssに変更
- 変数を使用できる
- 入れ子にできる

```
ex.

.btn {
    background-color: $cWhite;
    color: $cBlack;
    border: 1px solid $cBlack;
    padding: 10px 40px;
    margin: 50px 0;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: $cBlack;
        color: $cWhite;
    }
}
```

- watch_sass拡張機能をクリックするとcssファイルとコンポーネントファイルが出来上がる

- 入れ子にした時の正式な記載方法は`& btn`になるが、`&`を省略可能
- 省略可能なのは前に半角スペースが入ってもいいものに限る

```
ex.

省略前
#container {
    text-align: center;

    & .btn {

    }
}

省略後
#container {
    text-align: center;

    .btn {

    }
}

省略できない場合
.btn {
    &:hover {

    }
}

cssを見ると…
.btn :hover{
}

cssの文法として正しくないので&が必要
```

- 1つの要素をまとめる場合、入れ子にするとコードが見やすくなる
- sassファイルを使用する場合はcssファイルをいじらない

- 親要素の中に子要素があり、子要素のみスタイルを変更したい場合

```
ex.1 クラスを追加する

html
<div class="parent">
   親要素
   <div class="child element">子要素</div>
</div>

scss
.parent {
    color: blue;
}

.child {
    color: red;
}

ex.2 scssで入れ子にする
html
<div class="parent">
    親要素
    <div class="element">
        子要素
        <div class="element">
            孫要素
        </div>
    </div>
</div>

scss
.parent {
    color: blue;
    $ > .element {
        color: red;
    }
}

$ >を付けることで、parent直下のelementのみスタイルが適用になる。>がない場合、parentの中のelement全てに適用される（1階層下のみ）
```

- 複数のセレクターで指定したスタイルのほうが、単独で指定したときよりも詳細度が高いので優先して適用される

```
×
html
<div class="parent">
    親要素
    <div class="element">子要素</div>
    <div class="second-child element">子要素</div>
    <div class="element">
        子要素
        <div class="element">
            孫要素
        </div>
    </div>
</div>

scss
.parent {
    color: blue;

    & > .element {
        color: purple;
    }
}

.element {
    color: red;
}

.second-child {
    color: black;
}

〇
scss
.parent {
    color: blue;

    & > .element {
        color: purple;
        &.second-child {
            color: black;
        }
    }
}
```

- scss に `!important`で詳細度を無視できる。※非推奨

## 040_transform

- `translate`は物体を移動する

```
ex.1 x軸に50px、y軸に50px動く
.rect {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-color: orangered;
    transform: translate(50px, 50px);
}
```

- `rotate`は物体を回転する

```
ex.1 30度右に回転する
.rect {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-color: orangered;
    transform: rotate(30deg);
}

ex.2 transform-originで起点の場所を指定できる
左上を支点に回転
.rect {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-color: orangered;
    transform: rotate(30deg);
    transform-origin: top left;
}

左下を支点に回転
.rect {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-color: orangered;
    transform: rotate(30deg);
    transform-origin: bottom left;
}

任意の点を支点に回転
.rect {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-color: orangered;
    transform: rotate(30deg);
    transform-origin: -20px -20px;
}

```

- `skew`で平行四辺形みたくできる

```
.rect {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-color: orangered;
    transform: skew(-30deg);
    transform-origin: center center;
}
```

- `scale(x, y)`で大きさを変更できる

```
ex.1 x軸、y軸に1.1倍大きくする
.rect {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-color: orangered;
    transform: scale(1.1, 1.1);
    transform-origin: center center;
}
```

- 組み合わせて複数の動きを持たせる

```
ex.1 x軸に50px移動して、y軸方向に2倍大きくなる
.rect {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-color: orangered;
    transform: translateX(50px) scaleY(2);
    transform-origin: center center;
}
```

- animationを行うときは`transform`を使用するようにする。

## 050_position and z-index

- 親要素に`position: relative`の場合、子要素の`position:absolute`は親要素の起点に反映される
  - 子要素のみについていた場合、起点がないので、htmlの起点までさかのぼってしまう(ページの左上)

- `position: fixed;`で固定

- `position: stickey;`で指定の場所までいったら固定
  - `overflow: hidden;`が親要素にある場合無効化される

## 070

- 060でbuttonの前にspanタグをおいてスライドを作ったが、空のタグを置くのは非推奨
- そのため、疑似要素を使用する

- 疑似要素は`before`, `after`

## 080 3d animation 1

- 3Dアニメーションの場合、`transform-style: preserve-3d;`を指定する
- `opacity`や`perspective`などを指定

##

