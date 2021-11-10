<?php get_header(); ?>
<main>
    <p>あああ</p>
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <p>いいい</p>
        <?php endwhile; ?>
    <?php endif;
    ?>
</main>
<?php get_footer(); ?>
