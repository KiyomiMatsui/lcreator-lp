<?php
/*// TODO:サイトドメイン
$domain = "xxxx.jp";  //https://lcreator.net/

// mailTrap
function mailtrap($phpmailer)
{
    $phpmailer->isSMTP();
    $phpmailer->Host = 'smtp.mailtrap.io';
    $phpmailer->SMTPAuth = true;
    $phpmailer->Port = 2525;
    $phpmailer->Username = 'dae0aedbbef371';
    $phpmailer->Password = '612588addf424d';
}
$uri = esc_url(home_url('/'));

// 本番以外はmailtrap
if (!preg_match("/" . $domain . "/", $uri)) {
    add_action('phpmailer_init', 'mailtrap');
}*/

// 送信メールの差出人名を変更
function custom_mail_from_name($email_from)
{
    return 'エルクリエイター';
}

add_filter('wp_mail_from_name', 'custom_mail_from_name');

// 差出人のメールアドレスを変更
function custom_mail_from($email)
{
    return 'noreply@lcreator.co.jp';
}
add_filter('wp_mail_from', 'custom_mail_from');


// コンタクトフォーム7
function add_thanks_page()
{
    echo <<< EOD
    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
    location = '/thanks/';
    }, false );
    </script>
    EOD;
}
add_action('wp_footer', 'add_thanks_page');
