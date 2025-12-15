document.addEventListener('DOMContentLoaded', () => {

    /* -------------------------------------
       1. ローディング画面の制御
       (loaderというIDがあるページのみ実行)
    ------------------------------------- */
    const loader = document.getElementById('loader');
    if (loader) {
        // 1.5秒後にクラスを付与してCSSで非表示にする
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 1500);
    }

    /* -------------------------------------
       2. スクロール時のフェードイン (共通)
    ------------------------------------- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10%見えたら発火
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // .fade-up クラスがついている要素をすべて監視
    document.querySelectorAll('.fade-up').forEach(element => {
        observer.observe(element);
    });

});