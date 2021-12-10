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


