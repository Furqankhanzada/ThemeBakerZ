(($) => {
    wp.customize( 'blogdescription', function( value ) {
        value.bind( function( to ) {
            $( '#site-description' ).text( to );
        } );
    } );
})(jQuery);