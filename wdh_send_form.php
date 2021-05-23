<?php if(mail($_POST['Radshura@yandex.ru'],'тестовый заголовок письма',$_POST['text'],'Content-type: text/html; charset=utf-8')){
    echo 'Сообщение отправлено!';
}
else{
    echo 'Ошибка отправки сообщения.';
}
?>