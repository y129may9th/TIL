#CSS

## resize
`resize: both;`
`resize: horizontal;`
`resize: vertical;`
`resize: none;`

## overflow
要素の内容が多すぎてブロックからはみ出す
- はみ出たまま  
`overflow: visible;`
- はみ出た部分を隠すだけ  
`overflow: hidden`
- スクロールで表示
`overflow: scroll;`
- 収まる場合は、visibleだが、新しいコンテキストを生成する。溢れる場合は、スクロールバー
`overflow: auto;`

## line-hight
行間？
```
h1, h2, h3, h4, h5, h6 {
  line-height: 1;
}
```

## letter-spacing
文字間隔  
`letter-spacing: -2px;`

## text-transform
要素のテキストを大文字表記する方法
- 単語の最初の文字を強制的に大文字に変換させる  
`text-transform: capitalize;`
- 全て大文字
`text-transform: uppercase;`
`text-transform: lowercase;`
- 変換しない
`text-transform: none;`
- 全角
`text-transform: full-width;`
- ルビ
`text-transform: full-width;`

# E:nth-child(n)
n番目にきた要素E

# text-decoration
テキストの装飾的な線の表示  
色々できて楽しそう
[text-decoration](https://developer.mozilla.org/ja/docs/Web/CSS/text-decoration)






