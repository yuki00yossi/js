class WordFadeinAnime {
    constructor(targetid, word, speed = 50) {
        this.targetid = targetid
        this.speed = speed;
        this.word = word;
        this.targetElm = document.getElementById(targetid);
        this.id = Math.floor(Math.random() * 1000);
        this.init();
    }

    init() {
        // 処理内容：
        // 1: 文字を分割し配列に格納
        // 2: それぞれの文字をspanで囲み、クラスを設定して、HTMLを追加
        const wordAry = this.word.split('');
        for (let i = 0; i < wordAry.length; i++) {
            this.targetElm.innerHTML += '<span class="anim-hidden word_' + this.id + i + '">' + wordAry[i] + '</span>';
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
                targetAry[loopIndex].classList.add('anim-show');
                loopIndex++;
            }
        }, this.speed)
    }
}