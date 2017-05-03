(($) => {
    wp.customize( 'blogname', function( value ) {
        value.bind( function( to ) {
            $( '#site-title' ).find('a').text( to );
        } );
    } );
})(jQuery);