<?php
    //preg_match_all('!\d+!', $input, $arr);
    $z =trim(fgets(STDIN));
    //$arrin1=explode(" ", $z);
    $arrin1;
    preg_match_all('!\d+!', $z, $arrin1);
    $arrin1=$arrin1[0];
    $arrin2;
    $out=0;
    
    for ($i=0; $i<$arrin1[0];$i++) {
        $arrin2[$i]=fgets(STDIN);
        $arrin2[$i]=str_split($arrin2[$i]);
    }
    
   $fun1=function ($a, $b) use($arrin1, $arrin2,&$out) {
    $count1=0;
    $count2=0;
    $res=0;
    
    for ($i=0; $i<$arrin1[1]; $i++) {
        if ($arrin2[$a][$i]=="*" && $i!=$b) {
            $count1++;
        }
    }
 
    
    for ($j=0; $j<$arrin1[0]; $j++) {
        if ($arrin2[$j][$b]=="*" && $j!=$a) {
            $count2++;
        }
    }

    $res=$count1*$count2;
  
    $out=$out+$res;

};
   
   for ($h=0; $h<$arrin1[0];$h++) {
        for ($j=0; $j<$arrin1[1];$j++) {
            if ($arrin2[$h][$j]=="*") {
                $fun1($h,$j);
            }
        }
   }

   echo"$out".PHP_EOL;

?>