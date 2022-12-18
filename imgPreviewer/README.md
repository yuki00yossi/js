# 概要
input type="file"で選択された画像のプレビュー表示をする関数

# 使用方法
STEP１ inputタグに下記のdata属性をセットする

1. (必須)data-target-id ⇦プレビュー画像を表示する要素のID名
2. (任意)data-classes ⇦プレビューのために挿入されるimg要素に付与するクラス名

STEP２ onchange属性に当関数を指定して、引数にeventオブジェクトを渡す

# 使用例
```html
<!-- プレビュー表示用のdivタグ -->
<div id="preview"></div>
<!-- ファイルインプットタグ -->
<input type="file" data-target-id="preview" data-classes="hoge fuga" onchange="setImgPreview(event)">

<!-- JSファイル読み込み -->
<script src="./imgPreviewer.js"></script>
```
