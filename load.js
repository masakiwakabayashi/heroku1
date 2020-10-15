            // idを取得
            const loading = document.getElementById("loading");
            const all = document.getElementById("all");

            // ローディングアニメーションを表示させる
            function loaded(){
                loading.classList.remove('hide');
            }

            // ローディングアニメーションを表示させる関数をサイトの読み込み直後に実行されるように指定
            window.onload = loaded;
            
            // ローディングアニメーションを消してサイトコンテンツを表示
            function loaded2(){
                // loadingのクラスを非表示にする
                loading.classList.add('hide');
                // サイトコンテンツを表示する
                all.classList.remove('hide');
            }

            // 2秒後に関数loaded2を実行
            setInterval(loaded2, 2000);