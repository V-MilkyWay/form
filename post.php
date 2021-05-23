	<?php 
    $resultAll = $_POST['resultAll'];
    $fMessage =  'Radshura@yandex.ru';

    $to = 'Radshura@yandex.ru'; 
    $headers="From: Radshura@yandex.ru <Radshura@yandex.ru>\nReply-to:Radshura@yandex.ru\nContent-Type: text/html; charset=\"utf-8\"\n"; 
    // функция, которая отправляет наше письмо
    mail($to, $resultAll, $headers); 
 
?>