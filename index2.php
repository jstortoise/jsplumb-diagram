<?php 
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . "GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");



?>


<!--  <!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" href="/img/favicon.ico">

 <title>jsPlumb Toolkit - Multiple Renderers</title>
</head>
-->
       
        <link href="//fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
       
        <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <link href="jsPlumb/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="jsPlumb/node_modules/jsplumbtoolkit/dist/css/jsplumbtoolkit-defaults.css">
        <link rel="stylesheet" href="jsPlumb/node_modules/jsplumbtoolkit/dist/css/jsplumbtoolkit-demo.css">
        <link rel="stylesheet" href="jsPlumb/app.css">
        <link rel="stylesheet" href="jsPlumb/css/animate.css">
 	<link rel="stylesheet" href="jsPlumb/demo_x.css">
<link rel="stylesheet" href="jsPlumb/tip.css">

 	 <link rel="stylesheet" href="jsPlumb/menu/style.css">
	<script src="jsPlumb/menu/script.js"></script>
	 <script src="jsPlumb/menu.js"></script> 


   <!-- <body class="jtk-bootstrap jtk-bootstrap-wide"> -->

        <div class="jtk-header">
    

    <div class="jtk-nav">
  

    </div>

</div>





   <?php

date_default_timezone_set("Asia/Taipei");
$time_start = microtime(true);

?>    


        <div class="jtk-page-container">
            <div class="jtk-container">
                

<!-- content -->
        <script type="jtk" id="jtk-template-default">




<?php 

	 $setting="'setting'";
	$vlan="'vlan'";
//$i++;
$p_ip="'\${pip}'";
$p2="'1000'";
	$p3="'lockUI-1'";
	$url_Vlan="'Wired_Device','jsplumb','./switch_vlan.php?sw_id=\${nid}&mb=show'";
	$url_setting="'Wired_Device','jsplumb','./setting.php?sw_id=\${nid}'";
	$url_imformation="'Wired_Device','jsplumb','./information.php?sw_id=\${nid}'";
	//$url_system_log="'Wired_Device','jsplumb','./switchLog.php?h_id=".$cacti_host_ID."&name=".$Model."&ip=\${pip}'";
	$url_traffic="'100','29','\${pip}'";
	$url_sw_client="'Wired_Device','jsplumb','./switch_client.php?sw_id=\${nid}&mb=show'";

$show_link1='<li><i class="fa fa-cog">  <a  onclick="showrouteForm('.$p_ip.','.$p2.','.$p3.');xajax_index_data('.$url_setting.')"> <span style="padding-left: 0.5em;">Setting</span></a></i></li>'.
'<li> <i class="fa fa-random">  <a onclick="showrouteForm('.$p_ip.','.$p2.','.$p3.');xajax_index_data('.$url_Vlan.')"><span style="padding-left: 0.4em;">Vlan</span></a></i></li>'.
//'<li><i class="fa fa-list-alt">  <a onclick="showrouteForm('.$p_ip.','.$p2.','.$p3.');xajax_index_data('.$url_system_log.')"><span style="padding-left: 0.5em;"> System_log</span></a></i></li>'.
'<li> <i class="fa fa-info-circle">  <a onclick="showrouteForm('.$p_ip.','.$p2.','.$p3.');xajax_index_data('.$url_imformation.')"><span style="padding-left: 0.5em;"> Information</span></a></i></li>'.
'<li> <i class="fa fa-area-chart">  <a onclick="showrouteForm('.$p_ip.','.$p2.','.$p3.');xajax_index_data('.$url_traffic.')"> <span style="padding-left: 0.3em;">Traffic</span></a></i></li>'. 
'<li><i class="fa fa-user">  <a onclick="showrouteForm('.$p_ip.','.$p2.','.$p3.');xajax_index_data('.$url_sw_client.')"><span style="padding-left:0.8em;"> Client</span></a></i></li>';
$link2=$show_link1; 

?>
        
		<div class="${node_cls}" style="width:${w}px;height:${h}px;">

				
				<div style="line-height: 12px;">${pip}</div>
				<div style="line-height: 12px;">${name}</div>
				<div>${lo}</div>
				<div class="left_icon">
<div  class="${poe_css}" style="visibility:${poe};"><div style="visibility:hidden;">-</div></div>
<div  class="img_alert" style="visibility:${poe};"><div style="visibility:hidden;">-</div></div>
<div class="tooltipxx" style="line-height:12px;">
	<div class="${ap_css}" style=" visibility:${ap};cursor: pointer;">
		<div class="notice">${apn}</div>
		<span class="tooltiptextxx">${apc}</span>
	</div>
</div>
		</div>		


              			<div id="in_byte_${nid}" class="out_byte">${label}</div>
			<div id="out_byte_${nid}" class="in_byte">${label}</div>
			<div id="${id}">		 	
				<div class="name"> 
                   					<div class="img_vender" style="cursor:move;background-image:url('jsPlumb/img/vendor/${vendor}.png');">
										<div style="visibility:hidden;">-</div>
										</div>
											
									
	 			</div>

				
			</div>

			  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
  <h3 class="animated infinite bounce"> <div id="here_${nid}" name="here_${nid}" class="imglocal" style="visibility:hidden;">.</div> </h3>
<div class="cogg" style="cursor: pointer;"><div class="tooltipxx2"><i2 class="fa fa-cog "></i2><span class="tooltiptextxx2" style="z-index:100000000;right:1em;top:-10em;"><?php echo $link2;?></span></div></div>

         		 </div>



        </script>



        <div class="jtk-demo-main">
		

         
            <div class="jtk-demo-canvas canvas-wide" id="demo-hierarchical" data-id="hierarchical">
                <div class="controls">
                    <i class="fa fa-clock">拓樸分析時間:<div id="utime"><?php echo $update_time;?></div> </i>
    	
               <i class="fa fa-home"><?php echo "目前".$error_msg;?></i>
                </div>
                <div class="miniview" id="miniview-hierarchical"></div>
            </div>

<!-- menu start -->
<div id="top_a">
	<!-- 3line start -->
	<span class="toggle-button">
            <div class="menu-bar menu-bar-top"></div> 
            <div class="menu-bar menu-bar-middle"></div>
            <div class="menu-bar menu-bar-bottom"></div>

        </span>
	<!-- 3line end -->
	<!-- search start -->
	<div style="float:left;left:70px;top:80px;width:120px;position:absolute;z-index:122;">
   		<div >
     	 		<input type="text" class="searchTerm" name="ss" placeholder="search ip mac name" id="search_text_i" onkeypress="if (event.keyCode == 13) {xajax_index_data('100','19',search_text_i.value);}">
      			<div  id="s_icon"></div><!-- <button type="submit" class="searchButton" onclick="xajax_index_data('100','19',search_text_i.value);" ><i class="fa fa-search"></i></button>-->
   		</div>
	</div>
	<!-- search end -->
	
	<!-- menu_slider start -->


<?php 

function get_op($op){

	if ($op=="poe")$fun="myFunction(cp1,0)";
	if ($op=="ap")$fun="myFunction_wifi(cp1,0)";
if ($op=="alert")$fun="myFunction_alert(cp1,0)";
if ($op=="off")$fun="myFunction_off(cp1,0)";

	

 $onoff_ui_op = '<span class="onoffswitch"><input type="checkbox" name="poe_stauts_'.$op.'" class="onoffswitch-checkbox" id="'.$op.'_stauts" checked onclick='.$fun.'>
<label class="onoffswitch-label" for="'.$op.'_stauts"><span class="onoffswitch-inner" data-swchon-text="ON" data-swchoff-text="OFF"></span>
<span class="onoffswitch-switch"></span> </label></span>';
return  $onoff_ui_op;
}
?>




        <div class="menu-wrap">
            <div class="menu-sidebar">

                <ul   >
		<li>
		
			<li> &nbsp;<a onclick="myFunction(cp1,0)"><i2 class="fa fa-lightbulb-o"></i2><span id="menu_lv1"  style="color:#000;font-size:10pt;">&nbsp;&nbsp;PoE&nbsp;</span><span id="status_text"><?php echo get_op("poe"); ?></span></a></li>
			<li> <a onclick="myFunction_wifi(cp1,1)"><i3 style="left:-7;"><img src="jsPlumb/img/ap.png" width="12"></i3> <span id="menu_lv2" style="color:#000;font-size:10pt;">&nbsp;&nbsp;&nbsp;AP數&nbsp;</span><span id="status_text2"><?php echo get_op("ap"); ?></span></a></li>
			<li> <a onclick="myFunction_alert(cp1,1)"><i2 class="fa fa-warning"></i2><span id="menu_lv3"  style="color:#000;font-size:10pt;">&nbsp;&nbsp;&nbsp;異常&nbsp;</span><span id="status_text"><?php echo get_op("alert"); ?></span></a></li>
			<li> <a onclick="myFunction_off(cp1,1)"><i2 class="fa fa-unlink"></i2><span id="menu_lv4"  style="color:#000;font-size:10pt;">&nbsp;&nbsp;&nbsp;離線&nbsp;</span><span id="status_text"><?php echo get_op("off"); ?></span></a></li>
			<li><hr></hr></li>
			<li> <i2 class="fa fa-cog "></i2><span id="status_text">&nbsp;&nbsp;Switch資訊</span></li>
			<li> <i3><img src="jsPlumb/img/upload.png" width="12"></i3><span id="status_text">&nbsp;&nbsp;上傳速率</span></li>
			<li>  <i3><img src="jsPlumb/img/download.png" width="12"></i3><span id="status_text">&nbsp;&nbsp;下載速率</span></li>

			<li> <i2 style="width:25px;height:2px; background:Orange;float:left;top:10px;"></i2><span id="status_text">10/100Mb</span> </li>
			<li> <i2 style="width:25px;height:4px; background:Orange;float:left;top:10px;"></i2><span id="status_text">1Gb</span> </li> 
			<li> <i2 style="width:25px;height:4px; background:gray;float:left;top:10px;"></i2><span id="status_text">較少流量(< 25%)</span> </li>
			<li> <i2 style="width:25px;height:4px; background:Orange;float:left;top:10px;"></i2><span id="status_text">正常(25%-75%)</span> </li>
			<li> <i2 style="width:25px;height:4px; background:Brown;float:left;top:10px;"></i2><span id="status_text">壅塞(>=75%)</span> </li>
					</li>		
    		</ul>	
	</div>
	</div>
	<!-- menu_slider end -->
	

	<!--  show_ans start-->
 	<div id="st" class="w" style="top:10em;left:6em;width:10em;visibility:hidden;z-index:9999;" onmousedown="open_search();" onmouseleave="close_search();"> 

 	<div id="search_rs" style="cursor:default;"></div> 
	</div>
	
 
     	<!--  show_ans end-->
</div>
<!--   menu end -->
         
            <!-- the current dataset -->
         <!--   <div class="jtk-demo-dataset"></div>  -->
        </div>

        <div style="clear:both;"></div>

     




<script src="jsPlumb/node_modules/jsplumbtoolkit/dist/js/jsplumbtoolkit.js"></script>
<script src="jsPlumb/node_modules/jsplumbtoolkit/dist/js/syntax-highlighter.js"></script>
<!-- demo 
        <script src="jsplumb/demo/multiple/demo-support.js"></script>-->
        <script src="jsPlumb/app.js"></script>
        <!-- /demo -->
        
            </div>
        </div>


   <!-- </body>

</html> -->