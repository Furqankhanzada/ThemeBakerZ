<?php

/**
 * Theme Support and Scripts/styles
 */

require get_parent_theme_file_path( '/inc/theme.php' );

/**
 * Include Customizer Files Here
 */

require get_parent_theme_file_path( '/inc/customizer/title.php' );
require get_parent_theme_file_path( '/inc/customizer/description.php' );

/**
 * Helpers
 */

require get_parent_theme_file_path( '/inc/helpers.php' );

/**
 * Include Taxonomies
 */

require get_parent_theme_file_path( '/inc/taxonomies/taxonomy_name.php' );
