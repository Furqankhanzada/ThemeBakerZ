<?php

// hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_taxonomy_name_singular_small_taxonomies', 0 );

// create two taxonomies, taxonomy_name_plural_large and writers for the post type "book"
function create_taxonomy_name_singular_small_taxonomies() {
    // Add new taxonomy, make it hierarchical (like categories)
    $labels = array(
        'name'              => _x( 'taxonomy_name_plural_large', 'taxonomy general name', 'textdomain' ),
        'singular_name'     => _x( 'taxonomy_name_singular_large', 'taxonomy singular name', 'textdomain' ),
        'search_items'      => __( 'Search taxonomy_name_plural_large', 'textdomain' ),
        'all_items'         => __( 'All taxonomy_name_plural_large', 'textdomain' ),
        'parent_item'       => __( 'Parent taxonomy_name_singular_large', 'textdomain' ),
        'parent_item_colon' => __( 'Parent taxonomy_name_singular_large:', 'textdomain' ),
        'edit_item'         => __( 'Edit taxonomy_name_singular_large', 'textdomain' ),
        'update_item'       => __( 'Update taxonomy_name_singular_large', 'textdomain' ),
        'add_new_item'      => __( 'Add New taxonomy_name_singular_large', 'textdomain' ),
        'new_item_name'     => __( 'New taxonomy_name_singular_large Name', 'textdomain' ),
        'taxonomy_name_singular_small_name'         => __( 'taxonomy_name_singular_large', 'textdomain' ),
    );

    $args = array(
        'hierarchical'      => false,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'taxonomy_name_singular_small' ),
    );

    //register_taxonomy( 'taxonomy_name_singular_small', array( 'page' ), $args );
}
