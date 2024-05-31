  <?php
    $nombre = $_POST['nombre'];
    $tef = $_POST['tef'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    
    $header = 'From: ' . $mail . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";
    
    $mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
    $mensaje .= "El asunto es: " . $asunto . " \r\n";
    $mensaje .= "Su e-mail es: " . $mail . " \r\n";
    $mensaje .= "Su telefono es: " . $tef . " \r\n";
    $mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time());
    
    $para = 'yoelruano848@gmail.com';
    $asunto = 'Mensaje de mi sitio web';
    
    mail($para, $asunto, utf8_decode($mensaje), $header);
    
    header("Location:index.html");
    ?>