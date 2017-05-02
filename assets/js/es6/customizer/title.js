(($) => {
    wp.customize( 'blogname', function( value ) {
        value.bind( function( to ) {
            $( '#site-title a' ).text( to );
        } );
    } );
})(jQuery);