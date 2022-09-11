class WordAnimeSeparately {
    constructor({
        targetid,
        word,
        speed = 50,
        initClass = "anim-hidden",
        addClass = "anim-show",
        animType = "",
    }) {
        // コンストラクタ
        this.targetid = targetid
        this.speed = speed;
        this.word = word;
        this.targetElm = document.getElementById(targetid);
        this.initClass = initClass;
        this.addClass = addClass;
        this.animType = animType;
        this.init();
    }

    init() {
        // 処理内容：
        // 1: 文字を分割し配列に格納
        // 2: それぞれの文字をspanで囲み、クラスを設定して、HTMLを追加
        this.setClass();
        const wordAry = this.word.split('');
        let html = '';
        for (let i = 0; i < wordAry.length; i++) {
            // 半角スペースが消える対応
            let word = wordAry[i];
            if (word === ' ') word = '&ensp;';
            html += '<span class="' + this.initClass + '">' + word + '</span>';
        }
        this.targetElm.innerHTML += html;
    }

    setClass() {
        // アニメーションタイプに応じたクラスをプロパティにセットする
        if (this.animType === '') return false;
        switch (this.animType) {
            case 'typing':
                this.initClass = 'typing-anim-hidden';
                this.addClass = 'typing-anim-show';
                break;
        }
    }

    play() {
        const targetAry = this.targetElm.children;
        let loopIndex = 0;
        const loopInterval = setInterval(() => {
            if (loopIndex >= targetAry.length) {
                clearInterval(loopInterval);
                const event = new CustomEvent('word-fadein-ended');
                this.targetElm.dispatchEvent(event);
            } else {
                targetAry[loopIndex].classList.add(this.addClass);
                loopIndex++;
            }
        }, this.speed)
    }
}