    //初期は表示
    document.getElementById("air").style.display ="block";
    document.getElementById("wptest").style.display ="block";
    document.getElementById("ybbg").style.display ="block";

    //クリックした文字のCSSを変える処理、初期値は黒、HTMLだけ赤字赤線
    document.getElementById("1").style.color ="black";
    document.getElementById("1").style.borderBottom="medium solid black";
    document.getElementById("2").style.color ="black";
    document.getElementById("3").style.color ="black";
    
    const air = document.getElementById("air");
    const wptest = document.getElementById("wptest");
    const ybbg = document.getElementById("ybbg");

    const cohtml = document.getElementById("1");
    const cowp = document.getElementById("2");
    const cojs = document.getElementById("3");

    //htmlとcssを使った作品を表示
    function clickBtn1(){
        if(air.style.display=="none"){
            // noneであればblockにする
            air.style.display ="block";
        }

        if(wptest.style.display=="none"){
            // noneであればblockにする
            wptest.style.display ="block";
        }

        if(ybbg.style.display=="none"){
            // noneであればblockにする
            ybbg.style.display ="block";
        }
        //クリックした文字のCSSを変える処理、クリックしたところだけ文字を赤にして赤い下線をつける
        cohtml.style.color="black";
        cohtml.style.borderBottom="medium solid black";
        cowp.style.color="black";
        cowp.style.borderBottom="none";
        cojs.style.color="black";
        cojs.style.borderBottom="none";
    }

    //WordPressを使った作品を表示
    function clickBtn2(){
        if(air.style.display=="block"){
            // blockであればnoneにする
            air.style.display ="none";
        }

        if(wptest.style.display=="none"){
            // noneであればblockにする
            wptest.style.display ="block";
        }

        if(ybbg.style.display=="block"){
            // blockであればnoneにする
            ybbg.style.display ="none";
        }
        //クリックした文字のCSSを変える処理、クリックしたところだけ赤
        cohtml.style.color="black";
        cohtml.style.borderBottom="none";
        cowp.style.color="black";
        cowp.style.borderBottom="medium solid black";
        cojs.style.color="black";
        cojs.style.borderBottom="none";
    }

    //JavaScriptを使った作品を表示
    function clickBtn3(){
        if(air.style.display=="block"){
            // blockであればnoneにする
            air.style.display ="none";
        }

        if(wptest.style.display=="block"){
            // blockであればnoneにする
            wptest.style.display ="none";
        }

        if(ybbg.style.display=="none"){
            // noneであればblockにする
            ybbg.style.display ="block";
        }
        //クリックした文字のCSSを変える処理、クリックしたところだけ赤にする
        cohtml.style.color="black";
        cohtml.style.borderBottom="none";
        cowp.style.color="black";
        cowp.style.borderBottom="none";
        cojs.style.color="black";
        cojs.style.borderBottom="medium solid black";
    }