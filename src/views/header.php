<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package lcreator
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>LCREATOR | 集客システムまるっと構築・管理エルクリエイター</title>

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script defer src="<?php echo get_template_directory_uri(); ?>/src/scripts/main.js?date=<?php echo date('YmdGis', filemtime(get_template_directory() . '/src/scripts/main.js')); ?>"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/src/vendors/jquery.inview-master/jquery.inview.min.js"></script>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/src/styles/main.css?date=<?php echo date('YmdGis', filemtime(get_template_directory() . '/src/styles/main.css')); ?>" />
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/src/images/favicon.ico">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <header class="l-header">
        <div class="l-header__head">
            <div class="l-header__head__left">
                <a href="<?php echo esc_url(home_url('/')); ?>"><img class="l-header__brand-logo-image" src="<?php echo get_template_directory_uri(); ?>/src/images/logo.png" alt="LCREATOR"></a>
                <p class="l-header__catchcopy">集客システムまるっと構築・管理<br class="u-lg-display--none">
                    エルクリエイター</p>
            </div>
            <div class="l-header__head__right">
                <button class="l-header__hamburger js-hamburger-menu">
                    <span></span>
                </button>
            </div>
        </div>
        <div class="l-header__global-navigation">
            <div class="l-header__global-navigation__inner">
                <ul class="c-global-navigation__list">
                    <li class="c-global-navigation__item"><a href="#seminar" class="c-global-navigation__link js-scroll-link">セミナー予約<i class="c-icon--arrow --simple-right"></i></a></li>
                    <li class="c-global-navigation__item"><a href="#" class="c-global-navigation__link js-scroll-link">LINE登録<i class="c-icon--arrow --simple-right"></i></a></li>
                    <li class="c-global-navigation__item"><a href="#contact" class="c-global-navigation__link js-scroll-link">お問い合わせ<i class="c-icon--arrow --simple-right"></i></a></li>
                </ul>
            </div>
        </div>
    </header>
