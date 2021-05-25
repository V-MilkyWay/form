	<?php 

    //Post
    $fMail =  $_POST['resultAll'];
    $to = 'Radshura@yandex.ru, websohoware@gmail.com, aav@b-pi.ru'; 
    $headers="From: b-pi.ru \nContent-Type: text/html; charset=\"utf-8\"\n"; 
  
    mail($to, 'b-pi.ru', $fMail); 
 

?>