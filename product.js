            //1つ目の作品のタイトル、使用言語、画像
            const title1 = document.getElementById("title1");
            const desc1 = document.getElementById("desc1");
            const img1 = document.getElementById("img1");

            //2つ目の作品のタイトル、使用言語、画像
            const title2 = document.getElementById("title2");
            const desc2 = document.getElementById("desc2");
            const img2 = document.getElementById("img2");

            //2つ目の作品のタイトル、使用言語、画像
            const title3 = document.getElementById("title3");
            const desc3 = document.getElementById("desc3");
            const img3 = document.getElementById("img3");

            // 1つ目の作品の初期値
            // タイトルの非表示
            title1.style.display ="none";
            // 使用言語の非表示
            desc1.style.display ="none";
            // 画像を透過せず表示
            img1.style.opacity = "1";

            // 2つ目の作品の初期値
            // タイトルの非表示
            title2.style.display ="none";
            // 使用言語の非表示
            desc2.style.display ="none";
            // 画像を透過せず表示
            img2.style.opacity = "1";

            // 3つ目の作品の初期値
            // タイトルの非表示
            title3.style.display ="none";
            // 使用言語の非表示
            desc3.style.display ="none";
            // 画像を透過せず表示
            img3.style.opacity = "1";

        
            //1つ目の作品のマウスオーバーした時の関数
            function over1() {
                // タイトルの表示
                title1.style.display ="block";
                //使用言語の表示
                desc1.style.display ="block";
                //画像の透過
                img1.style.opacity = "0.3";
                // タイトルの文字だけ黒くする
                title1.style.color ="black";
                //使用言語の文字だけ黒くする
                desc1.style.color ="black";
                // 画像の拡大の倍率、変化の速度はCSSで指定
                img1.style.transform ="scale(1.1)";
            }
        
            //1つ目の作品のマウスを話した時の関数
            function leave1() {
                // タイトルの非表示
                title1.style.display ="none";
                // 使用言語の非表示
                desc1.style.display ="none";
                // 画像を透過せず表示
                img1.style.opacity = "1";
                // 拡大された画像を元の大きさに戻す処理
                img1.style.transform ="scale(1.0)";
            }

            //2つ目の作品のマウスオーバーした時の関数
            function over2() {
                // タイトルの表示
                title2.style.display ="block";
                //使用言語の表示
                desc2.style.display ="block";
                //画像の透過
                img2.style.opacity = "0.3";
                // タイトルの文字だけ黒くする
                title2.style.color ="black";
                //使用言語の文字だけ黒くする
                desc2.style.color ="black";
                // 画像の拡大の倍率、変化の速度はCSSで指定
                img2.style.transform ="scale(1.1)";
            }
        
            //2つ目の作品のマウスを話した時の関数
            function leave2() {
                // タイトルの非表示
                title2.style.display ="none";
                // 使用言語の非表示
                desc2.style.display ="none";
                // 画像を透過せず表示
                img2.style.opacity = "1";
                // 拡大された画像を元の大きさに戻す処理
                img2.style.transform ="scale(1.0)";
            }

            //3つ目の作品のマウスオーバーした時の関数
            function over3() {
                // タイトルの表示
                title3.style.display ="block";
                //使用言語の表示
                desc3.style.display ="block";
                //画像の透過
                img3.style.opacity = "0.3";
                // タイトルの文字だけ黒くする
                title3.style.color ="black";
                //使用言語の文字だけ黒くする
                desc3.style.color ="black";
                // 画像の拡大の倍率、変化の速度はCSSで指定
                img3.style.transform ="scale(1.1)";
            }
        
            //3つ目の作品のマウスを話した時の関数
            function leave3() {
                // タイトルの非表示
                title3.style.display ="none";
                // 使用言語の非表示
                desc3.style.display ="none";
                // 画像を透過せず表示
                img3.style.opacity = "1";
                // 拡大された画像を元の大きさに戻す処理
                img3.style.transform ="scale(1.0)";
            }