<?php

function themebakerz_title_customize_register( $wp_customize ) {
    $wp_customize->get_setting( 'blogname' )->transport = 'postMessage';

    if ( isset( $wp_customize->selective_refresh ) ) {
        $wp_customize->selective_refresh->add_partial( 'blogname', array(
            'selector' => '#site-title a',
            'container_inclusive' => false,
            'render_callback' => 'themebakerz_customize_partial_blogname',
        ) );
    }
}

add_action( 'customize_register', 'themebakerz_title_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @since Twenty Eleven 2.4
 * @see themebakerz_customize_register()
 *
 * @return void
 */

function themebakerz_customize_partial_blogname() {
    bloginfo( 'name' );
}

