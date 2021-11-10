<?php get_header(); ?>
<main>
    <?php

    // Start the Loop.
    while (have_posts()) :
        the_post(); ?>
        <p><?php the_content(); ?></p>
    <?php
    endwhile; // End the loop.
    ?>
</main>
<?php get_footer(); ?>
