<?php

// Enable Featured Image Support
add_theme_support( 'post-thumbnails' );
// Enable Title Support (that shows on browser tab)
add_theme_support( 'title-tag' );
// Enable Title Support (that shows on browser tab)
add_theme_support( 'custom-logo' );

// Add Theme Main Css and Js
function themebakerz_scripts() {
    wp_enqueue_style( 'style-themebakerz', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0' );
    wp_enqueue_script( 'script-themebakerz', get_template_directory_uri() . '/assets/js/all.js', array('jquery', 'customize-preview'), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'themebakerz_scripts' );
