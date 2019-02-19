<?php

if(isset($_POST['submit'])){
$to = "smirnof.evg@gmail.com";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // this is the sender's Email address
$message = $from . " подписался на рассылку ";
$subject = "Форма отправки сообщений с сайта";

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $from . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='localhost:3000'>Вернуться на сайт.</a>";
}

?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://epicblog.net/index.php");}
window.setTimeout("changeurl();",3000);
</script>