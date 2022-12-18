# 概要
input type="file"で選択された画像のプレビュー表示をする関数

# 使用方法
**STEP１**

ImgPreviewerクラスをインスタンス化

**STEP２**

プレビュー表示用の要素を準備する

**STEP３**

inputタグに下記のdata属性とonchange属性をセットする

data属性
1. (必須)data-target-id ⇦プレビュー画像を表示する要素のID名
2. (任意)data-classes ⇦プレビューのために挿入されるimg要素に付与するクラス

onchange属性（addEventLister等でも可)

instance.setImgPreview(event);  

# 使用例
```html
<!-- プレビュー表示用のdivタグ -->
<div id="preview"></div>
<!-- ファイルインプットタグ -->
<input type="file" data-target-id="preview" data-classes="hoge fuga" onchange="previewer.setImgPreview(event);">

<!-- JSファイル読み込み -->
<script src="./imgPreviewer.js"></script>
<script>
    // インスタンス化
    const previewer = new ImgPreviewer();
</script>
```
