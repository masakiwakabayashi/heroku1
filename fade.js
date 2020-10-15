$(function(){
    // スクロールした時に関数を実行する
    $(window).scroll(function(){// 実行する関数の中身
        // left-to-rightクラスとdown-to-topクラスに対して繰り返しの処理をする
        $('.left-to-right, .down-to-top, .right-to-left').each(function(){
            // 以下のの内容の処理を繰り返し実行する
            // left-to-rightクラスまたはdown-to-topクラスの
            // topからの位置を取得して変数elemPosiに格納
            var elemPosi = $(this).offset().top;
            // ブラウザ全体に対してのスクロール位置を取得して
            // 変数scrollに格納する
            var scroll = $(window).scrollTop();
            // ウィンドウの高さ(表示されている画面の縦の長さ)を
            // 変数windowHeightに格納する
            var windowHeight = $(window).height();
            // もし対象になっている要素のtopからの高さから画面の縦の長さを引いて
            // プラス150pxしたものよりも、ブラウザ全体に対しての現在スクロールした高さが
            // 大きければ
            if (scroll > elemPosi - windowHeight){
                // 対象となっているその要素にクラスscrollinを加える
                $(this).addClass('scrollin');
            }
        });
    });
});