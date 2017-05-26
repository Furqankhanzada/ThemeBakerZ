<?php

function get_term_by_page_id($id = '', $texonomy = 'category'){
    $term_list = wp_get_post_terms($id, $texonomy, array(
        'fields' => 'names',
        'parent' => 0,
    ));
    return $term_list[0];
}
