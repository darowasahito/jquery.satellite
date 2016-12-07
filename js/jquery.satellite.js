/**
jQuery.satellite v1.0

Copyright (c) 2016 Hiroto Sawada.

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/
(function($){
	$.fn.satellite = function(options){
		var $target = this;

		var settings = $.extend({
			center: ['50%','50%'],		// 中心点 px, % でもOK
			radius: 200,							// 正円 num px 楕円[ num, num ] px
			angle: 0, 								// 初期角度
			times: 0, 								// 回転回数
			duration: 3000, 					// 1周の時間
			clockwise: true, 					// 回転方向
			rotate: 0, 								// 楕円の回転角度
			guide: false, 						// 中心点、軌跡の表示
			easing: "linear",
			delay: 0
		}, options);

		if(typeof settings.radius === 'number'){
			settings.radius = [settings.radius, settings.radius];
		}

		settings.angle *= -1;
		settings.rotate *= -1;

		var counter = 0; //回転回数の保存

		$target.addClass('satellite-item')
			.css( $.extend( {
							marginLeft: -$target.width()/2+'px',
							marginTop: -$target.height()/2+'px',
							left: settings.center[0],
							top: settings.center[1]}, position( settings.angle ) ));

		if( $target.parent().css('position') ==='static' ){
			$target.parent().css({position:'relative'});
		}

		var animation = function(){
			$target.delay(settings.delay).animate(
				{steps: 360*(settings.clockwise? 1: -1) },
				{
				duration: settings.duration,
				easing: settings.easing,
				complete: function(){
					this.steps = 0;
					if( settings.times === 0 || settings.times > ++counter ){
						animation();
					}
				},
				step: function(s){
					$(this).css( position(s + settings.angle) );
				}
			});
		};
		animation();

		//中心点と 軌道の表示
		if(settings.guide){
			//中心
			$('<div class="satellite-center">')
			.css({
				left: settings.center[0],
				top: settings.center[1]
			}).prependTo($target.parent());
			//軌跡
			$('<div class="satellite-locus">')
			.css({
				left: settings.center[0],
				top:  settings.center[1],
				marginLeft:   ( - settings.radius[0] )+'px',
				marginTop:    ( - settings.radius[1] )+'px',
				width:  ( settings.radius[0] * 2 )+'px',
				height: ( settings.radius[1] * 2 )+'px',
				transform: 'rotate('+ settings.rotate +'deg)'
			}).prependTo($target.parent());
		}

		return this;

		//座標の計算
		function position( angle ){
			//楕円の座標
			var p1 = {
				x: settings.radius[0] * Math.cos( angle / 180 * Math.PI ),
				y: settings.radius[1] * Math.sin( angle / 180 * Math.PI )};

			//回転 (加法定理)
			var p2 = {
				x: p1.x * Math.cos( settings.rotate / 180 * Math.PI ) - p1.y * Math.sin( settings.rotate / 180 * Math.PI ),
				y: p1.x * Math.sin( settings.rotate / 180 * Math.PI ) + p1.y * Math.cos( settings.rotate / 180 * Math.PI )
			};

			return { //楕円の中心の移動と、衛星の中心の調整
				//left:  p2.x + settings.center[0],
				//top:   p2.y + settings.center[1],
				transform: 'translate('+p2.x+'px,'+p2.y+'px)'
			};
		}
	};
})(jQuery);
