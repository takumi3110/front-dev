# 03 animation

## emmet

- `div.bounce$*3`で以下の結果になる
    ```
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
    ```

## ローダー

- inline-blockはinlineとblock要素を持っているため、text-align: center;で中央揃えできる
- `borer-radius: 50%;`で円になる（widthとheightの半分の値のため）
- animationにkeyframeの名前を設定
    ```
    animation: <name> <count> <option>
    ex. 
    animation: sk-bouncedelay 1.4s infinite
    ``` 
- animationプロパティを1行に書くのは非推奨
- keyframeは0%から100%で動きを決める


## mixin

- sassで使用できる
- animationなどのプロパティをまとめておける
- 引数にデフォルト値を設定できる
- 引数が多いプロパティは簡潔に記述できる
- 同じ名前のプロパティをまとめることができる
```
@mixin animation(
    $name,
    $duration: 1s,
    $timing-function: ease,
    $delay: 1s,
    $iteration-count: 1,
    $direction: normal,
    $fill-mode: forwards,
) {
    animation: {
        name: $name;
        duration: $duration;
        timing-function: $timing-function;
        delay: $delay;
        iteration-count: $iteration-count;
        direction: $direction;
        fill-mode: $fill-mode; 
        
    }
    // animation-name: $name;
    // animation-deuration: $duration;
}

.rect {
    @include animation(
        $name: sk-bouncedelay
    );
```

## 疑似セレクター
    
- `:hover` `:focus` `:active` `:visted`
- `:nth-child` `:nth-of-type`について
  - 同じ要素の順番で指定できる
  ```
  div {
  & span {
  color: olive;
  // 3番目のみpurpleにする
  // 偶数の場合(2n),奇数の場合(2n + 1)
  & span:nth-child(3) {
      color: purple;
  }
  }
   ```
  - nth-of-typeは要素の間に違う要素が入っていても、指定した要素のみ適用する
  - nth-childは間に違う要素が入ってもそれを含んだ順番で適用される
  - `:first-child`で最初の要素
  - `:last-child`で最後の要素
- `:not()`
  - ()の要素を除外する
  