<?php 

function get_fields($f_name){

	$name_sql="SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name ='".$f_name."'";
	$name_rs=mysql_query($name_sql) ;
	$name_rows=mysql_num_rows($name_rs) ;
	$i_count=0;		
		while ($sf_rows = mysql_fetch_assoc($name_rs)){	
		 $fields_name[$i_count]=$sf_rows['COLUMN_NAME'];
		$end="'";
		if ($i_count<$name_rows) $end="',";
		$f_insert.="'".$sf_rows['COLUMN_NAME'].$end;
		$i_count++;
		}
	
}

function get_vendor($sw_id){

	$device_sql="select * from Device_DB.Device where ID='".$sw_id."'";
	$device_rs=mysql_query($device_sql) ;
	$i_count=0;		
		while ($device_rows = mysql_fetch_assoc($device_rs)){	
		$name=$device_rows['Name'];
		$Vendor=$device_rows['Vendor'];
		}
	return $name;
}


$str = shell_exec('curl -u admin:gentrice  http://'.$radar_ip.':8080/sw_table/input');
$input_array=json_decode($str,true);

foreach($input_array["data"] as $key => $row){
	$f_count=0;
		$sql_i="";
		while ($f_count<$f_ds){	
		$kk=$ff[$f_count];	
		$f_ds2=$f_ds-1;		
		$end="',";
		$st="'";
		if ($f_count==$f_ds2) $end="'";
		 $sql_i.=$st.$row[$kk].$end; 
		$f_count++;		
	}
	$id=$row['sw_id'];
	$sw_name=get_vendor($id);
	$swx[$o]=array("id" => "w".$row['u_id'],"name" =>$row['sw_id'],"w"=>40,"h"=>80,"left"=>0,"top"=>0,"nid"=>$row['u_id'],"pip"=>$row['ip']);
	 $sql_insert.="INSERT INTO `input` (`u_id`, `sw_id`, `ip`, `inputport`, `status`, `ports`, `port_status`, `admin_port_status`, `cpu_utilization`, `community`, `poe`, `poe_ports`, `poe_port_status`, `version`, `auth_user`, `auth_pwd`, `auth_proto`, `priv_pass`, `priv_proto`, `level`, `no`, `name`, `next_count`, `lev_order`, `Model`) VALUES (".$sql_i.");";
	}
             mysql_query($sql_insert) ;


?>