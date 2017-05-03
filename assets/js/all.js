"use strict";
'use strict';

(function ($) {
    wp.customize('blogdescription', function (value) {
        value.bind(function (to) {
            $('#site-description').text(to);
        });
    });
})(jQuery);
'use strict';

(function ($) {
    wp.customize('blogname', function (value) {
        value.bind(function (to) {
            $('#site-title').find('a').text(to);
        });
    });
})(jQuery);
//# sourceMappingURL=all.js.map
