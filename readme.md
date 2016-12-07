SATELLITE 1.0
======================

オブジェクトを円軌道に沿って、くるくる回転させるjQueryプラグインです。  

## DEMO / デモ

準備中

## USAGE / 使い方

### PREPARATION / 準備

    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="./js/jquery.satellite.js"></script>
    <link rel="stylesheet" href="./css/satellite.css">

### CORDING / コーディング

HTML

    <div class="stl0"></div>
    <div class="stl1"></div>

JavaScript

    $(document).ready(function(){
      $('.stl0').satellite();
      $('.stl1').satellite( {center: ['50%','500px'], radius: 300} );
    });

### OPTIONS / オプション

**center**: *strings (単位も必要)*  
軌道円の中心点座標  

    default: ['50%','50%']
    options: [ x座標 (px / %), y座標 (px / %) ]

**radius**: *integer* or *[ integer, integer ]*  
軌道円の半径  

    default: 200
    options: 正円の時: 半径 (px) / 楕円の時: [ 横半径 (px), 縦半径 (px) ]

**duration**: *integer*  
1周の時間

    default: 3000
		options: 時間(ms)

**clockwise**: *boolean*  
回転方向（時計回りか否か）  

    default: true
    options: 時計回りの時: true / 反時計回りの時: false

**angle**: *integer*  
  回転開始時の角度

    default: 0
    options: 角度(deg)

**times**: *integer*  
最大回転回数  

    default: 0
    options: 回転数(回 無限回転の時: 0)

**rotate**: *integer*  
軌道円の回転角度。(deg)  

    default: 0
    options: 角度(deg)

**guide**: *boolean*  
中心点と軌跡の表示  

    default: false
    options: boolean (true / false)

**easing**: *strings*  
イージング  

    default: "linear"
    options: "swing", "linear" (jquery.easing.1.3.jsを読み込むと選択肢が増えます)


## LICENCE

MIT

## AUTHOR

[Hiroto Sawada](https://github.com/darowasahito)  
[Hawshi Hiccoroton LLC.](http://hawshi-hiccoroton.com)
