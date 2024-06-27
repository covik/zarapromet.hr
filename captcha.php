<?php
header("Content-type: image/png");
session_start();

function GenerateRandomString($amount)
{
	$string = '';
	$charset = '0123456789';
    while ($amount--) 
	{
        $string .= $charset[mt_rand(0, strlen($charset) - 1)];
    }
	return $string;
}

$_SESSION['captcha'] = GenerateRandomString(5);

$image = imagecreatefrompng('images/captcha.png'); 
$text_color = imagecolorallocate($image, 187, 187, 187);  
imagestring($image, 18, 25, 11, $_SESSION['captcha'], $text_color);
//imagettftext($image, 13, 0, 15, 23, $text_color, 'captcha.ttf', $_SESSION['captcha']); 
imagepng($image);
imagedestroy($image);

?>