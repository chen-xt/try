
$(document).ready(function(){
	//修改个人资料显示输入框及内容，隐藏原本显示的内容
	$("#update").click(function(){
		$(".info span").hide();
		$(".info input").show();
		$(".but #update").hide();
		$(".but #save").show();
	});
	$("#save").click(function(){
		$(".info span").show();
		$(".info input").hide();
		$(".but #update").show();
		$(".but #save").hide();
	});

	//菜单切换显示不同内容,修改后还是在那个菜单显示页中
	$("#list").find("li").click(function() {
 		var index = $(this).index();//index()搜索匹配的元素，并返回相应元素的索引值，从0开始计数
 		$("#content > div").eq(index).show().siblings().hide();//eq()获取第index元素
 	}).eq(0).click();
 	var hash = window.location.hash;//获取页面的标签值，如#order
 	$('[href="'+hash+'"]').parent().click();

});

// 菜单切换显示不同内容
$(function(){
	$('.guide li a').click(function(){
		var _self = $(this);
		var c = _self.attr('href').substr(1);//取从第2个字符开始的
		$('.tab-content').find('.tab-pane').each(function(){	
			if($(this).hasClass("active")){
				$(this).removeClass('active').addClass("hide");
			}
			if($(this).attr('id') == c){
				$(this).removeClass('hide').addClass('active');					console.log($(this));	
			}
		})
	});
});