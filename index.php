<?php ob_start(); ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="Tvrtka za prijevoz robe" />
<meta name="keywords" content="zara, promet, prijevoz, prijevoznički obrt" />
<meta name="googlebot" content="noarchive" />
<meta name="robots" content="all" />
<title>Zara Promet</title>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/functions.js"></script>
<script src="js/Slider.js"></script>
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-45133477-1', 'zarapromet.hr');
ga('send', 'pageview');
</script>
<script>
$(function(){
	$('#slides').slides({
		play: 5000,
		pause: 2500,
		hoverPause: false
	});
	$('#top').click(function () {
		$('html, body').animate({scrollTop: '0px'}, 400);
		return false;
	});
});
</script>

<link href="index.css" rel="stylesheet" type="text/css" />
</head>
<body>
<?php

//$connect = mysqli_connect("localhost", "zaraprom_ante", "2E25W4V37I8G51n") or die(mysqli_error());
//mysqli_select_db("zaraprom_main") or die(mysqli_error());

session_start();
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');
mb_http_input('UTF-8');
mb_language('uni');
mb_regex_encoding('UTF-8');
ob_start('mb_output_handler');

if(preg_match('/MSIE/i', $_SERVER['HTTP_USER_AGENT'])) return die('Page doesn\'t support Internet Explorer!');

$scripturl = 'http://www.zarapromet.hr/index.php';

if(empty($_COOKIE['language'])) { $_COOKIE['language'] = "croatian"; setcookie("language", "croatian", time() + (60 * 60 * 24 * 365 * 5)); }
switch($_COOKIE['language'])
{
	case "croatian":
	include('index.croatian.php');
	break;
	
	case "english":
	include('index.english.php');
	break;
	
	default:
	include('index.croatian.php');
	break;
}


if(isset($_POST['login_username']))
{
	$variables['login_username'] = ProtectSQL($_POST['login_username']);
}
if(isset($_POST['login_password']))
{
	$variables['login_password'] = ProtectSQL($_POST['login_password']);
}
if(isset($_POST['login_rememberme']))
{
	$variables['login_rememberme'] = $_POST['login_rememberme'];
}
if(isset($_POST['login_submit']))
{
	$login_submit = $_POST['login_submit'];
}
if(isset($_POST['news_title']))
{
	$variables['news_title'] = ProtectSQL($_POST['news_title']);
}
if(isset($_POST['news_text']))
{
	$variables['news_text'] = ProtectSQL($_POST['news_text']);
}
if(isset($_POST['news_submit']))
{
	$news_submit = $_POST['news_submit'];
}
if(isset($_POST['dn_yes']))
{
	$dn_yes = $_POST['dn_yes'];
}
if(isset($_POST['dn_no']))
{
	$dn_no = $_POST['dn_no'];
}
if(isset($_GET['id']))
{
	$variables['id'] = ProtectSQL($_GET['id']);
}
if(isset($_POST['en_title']))
{
	$variables['en_title'] = ProtectSQL($_POST['en_title']);
}
if(isset($_POST['en_text']))
{
	$variables['en_text'] = ProtectSQL($_POST['en_text']);
}
if(isset($_POST['en_submit']))
{
	$en_submit = $_POST['en_submit'];
}
if(isset($_POST['c_title']))
{
	$variables['c_title'] = ProtectSQL($_POST['c_title']);
}
if(isset($_POST['c_email']))
{
	$variables['c_email'] = ProtectSQL($_POST['c_email']);
}
if(isset($_POST['c_text']))
{
	$variables['c_text'] = ProtectSQL($_POST['c_text']);
}
if(isset($_POST['c_submit']))
{
	$c_submit = $_POST['c_submit'];
}
if(isset($_POST['ticket_text']))
{
	$variables['ticket_text'] = ProtectSQL($_POST['ticket_text']);
}
if(isset($_POST['ticket_submit']))
{
	$ticket_submit = $_POST['ticket_submit'];
}
if(isset($_POST['keywords']))
{
	$variables['keywords'] = mysql_real_escape_string(htmlentities(trim($_POST['keywords'])));
	
	$variables['errors'] = array();
	
	if(empty($variables['keywords']))
	{
		$variables['errors'][] = $txt['search_enter_query'];
	}
	else if(strlen($variables['keywords']) < 3)
	{
		$variables['errors'][] = $txt['search_length'];
	}
	else if(SearchResults($variables['keywords']) === false)
	{
		$variables['errors'][] = $txt['search_no_results'].' <strong>'.$variables['keywords'].'</strong> !';
	}
}

$variables['load_time_start'] = microtime(true);
$y = 0;
for($x = 0; $x <= 1000000; $x++)
{
	$y = $x;
	$y *= pi();
	$y *= (pi() * 2);
}
$variables['load_time_end'] = number_format((microtime(true) - $variables['load_time_start']), 2);

$variables['date'] = date("d.m.Y");
$variables['current_action'] = isset($_GET['action']) ? $_GET['action'] : '';

function IsUserLogged()
{
	global $variables;
	if(isset($_SESSION['logged_username_session']) || isset($_COOKIE['logged_username_cookie']))
	{
		$variables['user']['is_logged'] = true;
		return $variables['user']['is_logged'];
	}
}

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

function SearchResults($keywords)
{
	global $variables, $txt;
	$returned_results = array();
	$where = "";
	
	$keywords = preg_split('/[\s]+/', $keywords);
	$total_keywords = count($keywords);
	
	foreach($keywords as $key => $keyword)
	{
		$where .= "`Title` LIKE '%$keyword%' OR `Post` LIKE '%$keyword%'";
		if($key != ($total_keywords) - 1)
		{
			$where .= " AND ";
		}
	}
	$results = "SELECT `Title`, LEFT(`Post`, 70) as `Post`, `Author` FROM `news` WHERE $where";
	$results_num = ($results = mysql_query($results) or die(mysql_error())) ? mysql_num_rows($results) : 0;
	
	if($results_num === 0)
	{
		$variables['errors'][] = $txt['search_no_results'].' <strong>'.$variables['keywords'].'</strong> !';
	}
	else
	{
		while($row = mysql_fetch_assoc($results))
		{
			$returned_results[] = array(
				'title' => $row['Title'],
				'post' => $row['Post'],
				'author' => $row['Author'],
			);
		}
	}
	return $returned_results;
}

function HighlightWords($string, $words)
{
	foreach ($words as $word)
	{
		$string = str_ireplace($word, '<span class="highlight_word">'.$word.'</span>', $string);
	}
	return $string;
}

function toolbar_template()
{
	global $variables, $txt, $scripturl;
	$variables['buttons'] = array(
		'home' => array(
			'title' => $txt['Home'],
			'href' => $scripturl,
			'show' => true
		),
		'news' => array(
			'title' => $txt['News'],
			'href' => $scripturl . '?action=news',
			'show' => true
		),
		'contact' => array(
			'title' => $txt['Contact'],
			'href' => $scripturl . '?action=contact',
			'show' => true
		),
		'admin' => array(
			'title' => $txt['Admin'],
			'href' => $scripturl . '?action=admin',
			'show' => IsUserLogged()
		),
		'logout' => array(
			'title' => $txt['Logout'],
			'href' => $scripturl . '?action=logout',
			'show' => IsUserLogged()
		),
		'login' => array(
			'title' => $txt['Login'],
			'href' => $scripturl . '?action=login',
			'show' => !IsUserLogged()
		),
	); 
	$menu_buttons = array();
	foreach ($variables['buttons'] as $act => $button)
	{
		if (!empty($button['show']))
		{
			$button['active_button'] = false;
			$menu_buttons[$act] = $button;
		}	
	}
	$variables['menu_buttons'] = $menu_buttons;
	
	echo '
			<ul id="topnav">';

	foreach ($variables['menu_buttons'] as $act => $button)
	{
		$current_action = 'home';
		$url="http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
		if ($url == $button['href']) $current_action = $button['active_button'];
		echo '
		<li id="button_', $act, '">
			<a class="', $button['active_button'] ? 'active ' : '', 'firstlevel" href="' .$button['href']. '">'.$button['title'].'</a>
		</li>';
	}

	echo '
		</ul>';
}

function ProtectSQL($string) 
{ 
	$string = strip_tags($string); 
	$string = mysql_real_escape_string($string); 
	return $string; 
}

function content_template()
{
	global $variables, $txt, $scripturl, $login_submit, $news_submit, $dn_yes, $dn_no, $en_submit, $c_submit, $ticket_submit;
	if(isset($_GET['action']))
	{
		if($_GET['action'] == 'news')
		{
			if(IsUserLogged())
			{
				if($news_submit)
				{
					if($variables['news_title'] && $variables['news_text'])
					{
						if($_COOKIE['logged_username_cookie']) $author = $_COOKIE['logged_username_cookie'];
						else if($_SESSION['logged_username_session']) $author = $_COOKIE['logged_username_session'];
						$query = mysql_query("SELECT Fullname FROM `users` WHERE Username = '$author'") or die(mysql_error());
						while($row = mysql_fetch_assoc($query))
						{
							$fullname = $row['Fullname'];
						}
						$day = date("d");
						$month = date("m");
						mysql_query("INSERT INTO `news` VALUES('$variables[news_text]', '$variables[news_title]', '$fullname', '$day', '$month', 0, '')") or die(mysql_error());
					}
					else echo '<div id="error">'.$txt['please_fill_all_fields'].'</div>';
				}
				echo '
				<a style="font-size: 20px; text-shadow: 1px 1px 0 white;" onclick="toggle_news(600);">'.$txt['new_news'].'</a>
				<div id="news_form">
				<form action="index.php?action=news" method="post">
					<h2 style="font-size: 16px; text-shadow: 1px 1px 0 white;">'.$txt['Title'].'</h2>
					<br>
					<input type="text" spellcheck="false" name="news_title" maxlength="25">
					<h2 style="font-size: 16px; text-shadow: 1px 1px 0 white;">'.$txt['Text'].'</h2>
					<textarea cols="50" rows="5" spellcheck="false" name="news_text"></textarea>
					<br><br><br>
					<input type="submit" name="news_submit" value="'.$txt['send'].'">
				</form>
				</div><br>';
			}
			$query = mysql_query("SELECT * FROM `news`") or die(mysql_error());
			if(mysql_num_rows($query) == 0)
			{
				echo '<h2 style="font-size: 25px; text-shadow: 1px 1px 0 white;">'.$txt['no_news'].'</h2>';
			}
			else
			{
				while($row = mysql_fetch_assoc($query))
				{
					$n_id = $row['ID'];
					$post = $row['Post'];
					$title = $row['Title'];
					$author = $row['Author'];
					$day = $row['Day'];
					$month = $row['Month'];
					$update = $row['Update'];
					
					if($month == 1) $cur_month = "JAN";
					else if($month == 2) $cur_month = "FEB";
					else if($month == 3) $cur_month = "MAR";
					else if($month == 4) $cur_month = "APR";
					else if($month == 5) $cur_month = "MAY";
					else if($month == 6) $cur_month = "JUN";
					else if($month == 7) $cur_month = "JUL";
					else if($month == 8) $cur_month = "AUG";
					else if($month == 9) $cur_month = "SEP";
					else if($month == 10) $cur_month = "OCT";
					else if($month == 11) $cur_month = "NOV";
					else if($month == 12) $cur_month = "DEC";
					
					if($day == 1) $day = "01";
					else if($day == 2) $day = "02";
					else if($day == 3) $day = "03";
					else if($day == 4) $day = "04";
					else if($day == 5) $day = "05";
					else if($day == 6) $day = "06";
					else if($day == 7) $day = "07";
					else if($day == 8) $day = "08";
					else if($day == 9) $day = "09";
				
					if(IsUserLogged())
					{
						echo'
							<div style="float: right; margin-right: 35px; margin-top: 10px;">
								<a href="index.php?action=editnews&id='.$n_id.'" title="'.$txt['edit_news'].'"><img src="images/edit.png"></a>
								<a href="index.php?action=deletenews&id='.$n_id.'" title="'.$txt['delete_news'].'"><img src="images/delete.png"></a>
							</div>';
					}
					echo'
					<br>
					<div style="margin-left: 1%;">
						<div id="news_title">'.$title.'</div>
						<div id="news_poster">'.$author.'</div>
						<div id="news_month">'.$cur_month.'</div>
						<div id="news_day">'.$day.'</div>
					</div>
					<div id="news_content">'.nl2br($post).'</div>';
					if($update != 0)
					{
						echo '
						<div id="news_update">'.$txt['updated'].': '.$update.'</div>';
					}
					echo'
					<div style="margin-left: 1%;" id="news_separator"></div>';
				}
			}
		}
		if($_GET['action'] == 'login')
		{
			if(IsUserLogged()) header('location: index.php');
			if($login_submit)
			{
				if($variables['login_username'] && $variables['login_password'])
				{
					$query = mysql_query("SELECT * FROM `users` WHERE Username = '$variables[login_username]'") or die(mysql_error());
					if(mysql_num_rows($query) == 1)
					{
						while($row = mysql_fetch_assoc($query))
						{
							$dbusername = $row['Username'];
							$dbpassword = $row['Password'];
						}
						echo $dbusername.'<br>'.$dbpassword;
						if($variables['login_username'] == $dbusername && $variables['login_password'] == $dbpassword)
						{
							if($variables['login_rememberme'] == "on") setcookie("logged_username_cookie", $dbusername, time() + (60 * 60 * 24 * 365 * 5));
							else if($variables['login_rememberme'] == "") $_SESSION['logged_username_session'] = $dbusername;
							header('location: index.php');
						}
						else echo '<div id="error">'.$txt['password_is_not_correct'].'</div>';
						echo $variables['login_username'].' '.md5($variables['login_password']);
					}
					else echo '<div id="error">'.$txt['username_does_not_exist'].'</div>';
				}
				else echo '<div id="error">'.$txt['please_fill_all_fields'].'</div>';
			}
			echo '
			<form action="index.php?action=login" method="post">
				<h2 style="font-size: 25px; text-shadow: 1px 1px 0 white;">'.$txt['username'].'</h2>
				<input type="text" name="login_username" spellcheck="false">
				<h2 style="font-size: 25px; text-shadow: 1px 1px 0 white;">'.$txt['password'].'</h2>
				<input type="password" name="login_password" spellcheck="false"><br><br>
				<input type="checkbox" name="login_rememberme">'.$txt['remember_me'].'<br><br>
				<input type="submit" name="login_submit" value="'.$txt['login_submit'].'">
			</form>';
		}
		if($_GET['action'] == 'logout')
		{
			if(!IsUserLogged()) header('location: index.php');
			setcookie("logged_username_cookie", "", time() - (60 * 60 * 24 * 365 * 5));
			unset($_SESSION['logged_username_session']);
			header('location: index.php');
		}
		if($_GET['action'] == 'deletenews')
		{
			if(IsUserLogged())
			{
				$query = mysql_query("SELECT * FROM `news` WHERE `ID` = '".$variables['id']."'") or die(mysql_error());
				if(mysql_num_rows($query) == 0)
				{
					echo '
					<h2 style="text-shadow: 1px 1px white;">'.$txt['news_does_not_exist'].'</h2>';
					return;
				}
				if($dn_yes)
				{
					mysql_query("DELETE FROM `news` WHERE `ID` = ".$variables['id']."") or die(mysql_error());
					echo '
					<h2 style="text-shadow: 1px 1px white;">'.$txt['news_is_deleted'].'</h2>';
					?>
                    <head>
                    	<meta http-equiv="refresh" content="1; url=index.php?action=news">
                    </head>
                    <?
					return;
				}
				if($dn_no) header('location: index.php?action=news');
				echo '
				<h2 style="text-shadow: 1px 1px 0 white;">'.$txt['delete_news?'].'</h2>
				<form action="index.php?action=deletenews&id='.$variables['id'].'" method="post">
				<input type="submit" name="dn_yes" value="'.$txt['Yes'].'" style="margin-right: 15px;"><input type="submit" name="dn_no" value="'.$txt['No'].'">';
			}
			else header('location: index.php?action=news');
		}
		if($_GET['action'] == 'editnews')
		{
			if(IsUserLogged())
			{
				$query = mysql_query("SELECT * FROM `news` WHERE `ID` = '".$variables['id']."'") or die(mysql_error());
				if(mysql_num_rows($query) == 0)
				{
					echo '
					<h2 style="text-shadow: 1px 1px white;">'.$txt['news_does_not_exist'].'</h2>';
					return;
				}
				while($row = mysql_fetch_assoc($query))
				{
					$news_title = $row['Title'];
					$news_text = $row['Post'];
				}
				if($en_submit)
				{
					if($_COOKIE['logged_username_cookie']) $author = $_COOKIE['logged_username_cookie'];
					else if($_SESSION['logged_username_session']) $author = $_COOKIE['logged_username_session'];
					$query_name = mysql_query("SELECT Fullname FROM `users` WHERE Username = '$author'") or die(mysql_error());
					while($row_name = mysql_fetch_assoc($query_name))
					{
						$fullname = $row_name['Fullname'];
					}
					$time = date("H:i");
					$date = $variables['date'].' • '.$time.' | '.$fullname;
					mysql_query("UPDATE `news` SET `Title` = '$variables[en_title]', `Post` = '$variables[en_text]', `Update` = '$date' WHERE `ID` = '".$variables['id']."'") or die(mysql_error());
					echo '
					<h2 style="text-shadow: 1px 1px white;">'.$txt['news_is_updated'].'</h2>';
					?>
                    <head>
                    	<meta http-equiv="refresh" content="1; url=index.php?action=news">
                    </head>
                    <?php
					return;
				}
				echo'
				<h2 style="text-shadow: 1px 1px 0 white;">'.$txt['editing_news'].'</h2>
				<form action="index.php?action=editnews&id='.$variables['id'].'" method="post">';
				?>
				<h2 style="font-size: 16px; text-shadow: 1px 1px 0 white;"><?php echo $txt['Title']; ?></h2>
				<input type="text" name="en_title" maxlength="25" spellcheck="false" value="<?php echo $news_title ?>">
				<h2 style="font-size: 16px; text-shadow: 1px 1px 0 white;"><?php echo $txt['Text']; ?></h2>
				<textarea cols="50" rows="5" name="en_text" spellcheck="false"><?php echo $news_text ?></textarea>
				<br><br><br>
				<input type="submit" name="en_submit" value="<?php echo $txt['Edit']; ?>">
                <?php
			}
			else header('location: index.php?action=news');	
		}
		if($_GET['action'] == 'contact')
		{
			if($c_submit)
			{
				if($variables['c_title'] && $variables['c_email'] && $variables['c_text'] && $_REQUEST['c_captcha'])
				{
					if(filter_var($variables['c_email'], FILTER_VALIDATE_EMAIL) == true)
					{
						if($_REQUEST['c_captcha'] == $_SESSION['captcha'])
						{
							$id = GenerateRandomString(10);
							$day = date("d");
							$month = date("m");
							mysql_query("INSERT INTO `tickets` VALUES('$variables[c_text]', '$variables[c_title]', '$variables[c_email]', '$day', '$month', '$id')") or die(mysql_error());
							echo '
							<h2 style="text-shadow: 1px 1px white;">'.$txt['query_is_sent'].'</h2>';
							?>
							<head>
								<meta http-equiv="refresh" content="2; url=index.php">
							</head>
							<?php
							return;
						}
						else echo '<div id="error">'.$txt['visual_validation_is_not_correct'].'</div>';
					}
					else echo '<div id="error">'.$txt['mail_is_not_correct'].'</div>';
				}
				else echo '<div id="error">'.$txt['please_fill_all_fields'].'</div>';
			}
			echo '
				<h2 style="text-shadow: 1px 1px white;">'.$txt['Contact'].'</h2>
				<h2 style="text-shadow: 1px 1px white; font-size: 15px;">
				MOB: 091 588 7191 • Ante Nakić
				<p>E-mail: info@zarapromet.hr</p>
				<p>TEL: +385 023 327 751</p>
				<p>FAX: +385 023 340 129</p></h2>
				<div id="news_separator"></div>';
			echo '
				<h2 style="text-shadow: 1px 1px white;">'.$txt['send_query'].'</h2>
				<form action="index.php?action=contact" method="post">
				<h2 style="font-size: 16px; text-shadow: 1px 1px 0 white;">'.$txt['Title'].'</h2>
				<input type="text" name="c_title" spellcheck="false" maxlength="25">
				<h2 style="font-size: 16px; text-shadow: 1px 1px 0 white;">'.$txt['Email'].'</h2>
				<input type="text" name="c_email" spellcheck="false" maxlength="50">
				<br><br>
				<h2 style="font-size: 16px; text-shadow: 1px 1px 0 white;">'.$txt['Text'].'</h2>
				<textarea cols="50" rows="5" spellcheck="false" name="c_text"></textarea>
				<h2 style="font-size: 16px; text-shadow: 1px 1px 0 white;">'.$txt['visual_validation'].'</h2>
				<img style="border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);" src="captcha.php">
				<br><br>
				<input type="text" name="c_captcha">';
				echo '
				<br><br><br>
				<input type="submit" name="c_submit" value="'.$txt['send'].'">
			</form>';
		}
		if($_GET['action'] == 'admin')
		{
			if(IsUserLogged())
			{
				$query = mysql_query("SELECT * FROM `tickets`") or die(mysql_error());
				if(mysql_num_rows($query) == 0)
				{
					echo '<h2 style="font-size: 25px; text-shadow: 1px 1px 0 white;">'.$txt['no_questions'].'</h2>';
				}
				while($row = mysql_fetch_assoc($query))
				{
					$id = $row['ID'];
					$title = $row['Title'];
					$post = $row['Post'];
					$email = $row['E-mail'];
					$day = $row['Day'];
					$month = $row['Month'];
					
					if($month == 1) $cur_month = "JAN";
					else if($month == 2) $cur_month = "FEB";
					else if($month == 3) $cur_month = "MAR";
					else if($month == 4) $cur_month = "APR";
					else if($month == 5) $cur_month = "MAY";
					else if($month == 6) $cur_month = "JUN";
					else if($month == 7) $cur_month = "JUL";
					else if($month == 8) $cur_month = "AUG";
					else if($month == 9) $cur_month = "SEP";
					else if($month == 10) $cur_month = "OCT";
					else if($month == 11) $cur_month = "NOV";
					else if($month == 12) $cur_month = "DEC";
					
					if($day == 1) $day = "01";
					else if($day == 2) $day = "02";
					else if($day == 3) $day = "03";
					else if($day == 4) $day = "04";
					else if($day == 5) $day = "05";
					else if($day == 6) $day = "06";
					else if($day == 7) $day = "07";
					else if($day == 8) $day = "08";
					else if($day == 9) $day = "09";
					
					echo'
					<br>
					<div style="margin-left: 1%;">
						<div id="news_title">'.$title.'</div>
						<div id="news_poster">'.$email.'</div>
						<div id="news_month">'.$cur_month.'</div>
						<div id="news_day">'.$day.'</div>
					</div>
					<div id="news_content">'.nl2br($post).'</div>
					<br>
					<a href="index.php?action=answer&id='.$id.'">'.$txt['answer'].'</a>
					<br>
					<div style="margin-left: 1%;" id="news_separator"></div>';
				}
			}
			else header('location: index.php');
		}
		if($_GET['action'] == 'answer')
		{
			if(IsUserLogged())
			{
				if($ticket_submit)
				{
					$query = mysql_query("SELECT * FROM `tickets` WHERE `ID` = '$variables[id]'") or die(mysql_error());
					while($row = mysql_fetch_assoc($query))
					{
						$title = $row['Title'];
						$to = $row['E-mail'];
					}
					$message = "Pozdrav,\nOdgovor na Vaš upit #".$variables['id']."\n".$variables['ticket_text']."";
					ini_set("SMTP", "mail.zarapromet.hr");
					mail($to, $title, $message, "From: info@zarapromet.hr");	
					mysql_query("DELETE FROM `tickets` WHERE `ID` = '".$variables['id']."'") or die(mysql_error());
					echo '
					<h2 style="text-shadow: 1px 1px white;">'.$txt['answer_is_sent'].'</h2>';
					?>
					<head>
						<meta http-equiv="refresh" content="2; url=index.php?action=admin">
					</head>
					<?php
					return;
				}
				echo '
				<form action="index.php?action=answer&id='.$variables['id'].'" method="post">
				<h2 style="font-size: 20px; text-shadow: 1px 1px 0 white;">'.$txt['message'].'</h2>
				<textarea cols="50" rows="6" spellcheck="false" name="ticket_text"></textarea>
				<br><br>
				<input type="submit" name="ticket_submit" value="'.$txt['send'].'"">
				</form>';
			}
			else header('location: index.php');
		}
		if($_GET['action'] == 'search')
		{
			if(!isset($variables['keywords']))
			{
				echo '
				<div id="error">'.$txt['search_enter_query'].'</div>';
				return;
			}
			if(empty($variables['errors']))
			{
				$num = 0;
				$results = SearchResults($variables['keywords']);
				$results_num = count($results);
				$suffix = ($results_num != 1) ? ''.$txt['suffix'].'' : '';
				
				echo '
				<h2 style="font-size: 16px; text-shadow: 1px 1px 0 white;">'.$txt['search_total'].' <strong>'.$results_num.'</strong> '.$txt['search_results'].''.$suffix.' '.$txt['search_for_word'].' <strong>\''.$variables['keywords'].'\'</strong></h2>';
				foreach($results as $result)
				{
					$num ++;
					$string = $result['post'];
					$words = array($variables['keywords']);
					$string = HighlightWords($string, $words);
					
					$string1 = $result['title'];
					$words = array($variables['keywords']);
					$string1 = HighlightWords($string1, $words);
					echo '
					<br>
					<div style="font-size: 13px; text-shadow: 1px 1px 0 white;">
					<div style="text-align: left;">
						<table cellpadding="0" cellspacing="10" border="0">
							<tbody>
								<tr>
									<td>
										<div class="search_counter">'.$num.'</div>
									</td>
									<td>
										<h5 style="margin: 0; padding: 0; font-size: 15px;">'.$string1.'</h5>
										<em style="font-size: 13px;">'.$result['author'].'</em>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<br>
					<p style="text-align: left; margin-left: 2%;">'.nl2br($string).'</p>
					</div>
					<div id="news_separator" style="margin-left: 0; width: 100%;"></div>';
				}
			}
			else
			{
				foreach($variables['errors'] as $error)
				{
					echo '
					<div id="error">'.$error.'</div>';
				}
			}
		}
		if($_GET['action'] == 'language')
		{
			if($variables['id'] == 'english') setcookie("language", "english", time() + (60 * 60 * 24 * 365 * 5));
			else if($variables['id'] == 'croatian') setcookie("language", "croatian", time() + (60 * 60 * 24 * 365 * 5));
			header('location: index.php');
		}
	}
	else
	{
		echo '
		<h2 style="padding-top: 15px; font-size: 35px; text-shadow: 1px 1px 0 white;">'.$txt['about_us'].'</h2>
		<div style="text-shadow: 1px 1px 0 white; font-size: 16px; padding-bottom: 15px;">'.$txt['main_description'].'</div>
		<div id="container">
			<div id="example">
				<div id="slides">
					<div class="slides_container">
						<a href="images/slides/slide-1.jpg"><img src="images/slides/slide-1.jpg"></a>
						<a href="images/slides/slide-2.jpg"><img src="images/slides/slide-2.jpg"></a>
						<a href="images/slides/slide-3.jpg"><img src="images/slides/slide-3.jpg"></a>
					</div>
					<a class="prev"><img src="images/slides/arrow-prev.png"></a>
					<a class="next"><img src="images/slides/arrow-next.png"></a>
				</div>
				<img id="frame" src="images/slides/frame.png">
			</div>
		</div>';
	}
}

function footer_template()
{
	global $variables, $txt;
	$year_now = date("Y");
	echo '
	Zara Promet © 2009 - '.$year_now.''.$txt['copyright_and_load'].' '.$variables['load_time_end'].' '.$txt['seconds'].'';
}

echo '
	<div id="top_border">
		<div id="wrapper" style="margin: 0 auto;">
			<div id="time">
				<span id="date">'.$variables['date'].' •</span>
				<span id="clock"></span>
                <script type="text/javascript">
                    function refrClock()
                    {
                        var d=new Date();
                        var s=d.getSeconds();
                        var m=d.getMinutes();
                        var h=d.getHours();
                        if (s<10) {s="0" + s}
                        if (m<10) {m="0" + m}
                        if (h<10) {h="0" + h}
                        document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
                        setTimeout("refrClock()", 1000);
                    }
                    refrClock(); 
                </script>
			</div>
		</div>
	</div>
	<div id="wrapper">
		<div id="search">
			<form action="index.php?action=search" method="post">
				<input class="search_input" type="text" spellcheck="false" name="keywords">
			</form>
		</div>
		<div id="main">
			<div id="toolbar">' ,toolbar_template(), '</div>
			<a id="logo" href="'.$scripturl.'"><img src="images/logo.png"></a>
			<div id="content">' ,content_template(), '</div>
			<div id="languages">
				<img src="images/english.png"><a href="index.php?action=language&id=english" title="English" style="color: gray; padding-left: 10px;">English</a>
				<img src="images/croatian.png" style="padding-left: 20px;"><a href="index.php?action=language&id=croatian" title="Hrvatski" style="color: gray; padding-left: 10px;">Hrvatski</a>
			</div>
		</div>
		<div id="footer">' ,footer_template(), '</div>
	</div>
	<a id="top" href="#top" title="TOP" style="bottom: 0; position: fixed; width: 100%;"><img src="images/top.png"></a>';

mysql_close($connect);

?>
</body>
</html>
<?php ob_flush(); ?>
