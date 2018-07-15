<?php include "/var/www/html/control/lib/databases.php";?>
<?php 

$swid=$_GET['swid'];
$swid=substr($swid,1);
$sw_name=$_GET['sw_name'];
$up_sql="update Control_DB.Device set Name='".$sw_name."' where ID=".$swid;
mysql_query($up_sql)or die($up_sql);

?>