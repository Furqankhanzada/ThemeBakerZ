<?php

function themebakerz_scripts() {
    wp_enqueue_style( 'style-themebakerz', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0' );
    wp_enqueue_script( 'script-themebakerz', get_template_directory_uri() . '/assets/js/all.js', array('jquery', 'customize-preview'), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'themebakerz_scripts' );

/**
 *
 */
require get_parent_theme_file_path( '/inc/customizer/title.php' );

require get_parent_theme_file_path( '/inc/customizer/description.php' );