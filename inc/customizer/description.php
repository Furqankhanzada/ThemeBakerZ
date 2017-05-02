<?php

function themebakerz_customize_description_register( $wp_customize ) {
    $wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';

    if ( isset( $wp_customize->selective_refresh ) ) {
        $wp_customize->selective_refresh->add_partial( 'blogdescription', array(
            'selector' => '#site-description',
            'container_inclusive' => false,
            'render_callback' => 'themebakerz_customize_partial_blogdescription',
        ) );
    }
}

add_action( 'customize_register', 'themebakerz_customize_description_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @since Twenty Eleven 2.4
 * @see themebakerz_customize_register()
 *
 * @return void
 */

function themebakerz_customize_partial_blogdescription() {
    bloginfo( 'description' );
}

