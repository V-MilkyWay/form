	<?php 
    $fMail =  $_POST['resultAll'];
    $to = 'Radshura@yandex.ru'; 
    $headers="From: b-pi.ru \nContent-Type: text/html; charset=\"utf-8\"\n"; 
    // функция, которая отправляет наше письмо
    mail($to, 'b-pi.ru', $fMail); 
 
?>