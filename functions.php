<?php
add_theme_support( 'title-tag' );

// Alle CSS-Dateien laden
add_action('wp_enqueue_scripts', function() {
    $css_files = [
        'variables-css'     => '/css/variables.css',
        'horizontal-scroll' => '/css/horizontal-scroll.css',
        'navbar'            => '/css/navbar.css',
        'footer'            => '/css/footer.css',
        'forminator'        => '/css/forminator.css',
        'timeline'          => '/css/timeline.css',
        'landingpage'       => '/css/landingpage.css',
        'impressum'         => '/css/impressum.css',
        'junction'          => '/assets/fonts/junction/junction.css'
    ];

    foreach ($css_files as $handle => $path) {
        $filepath = get_stylesheet_directory() . $path;
        $version  = (file_exists($filepath) && is_readable($filepath)) ? filemtime($filepath) : null;

        wp_enqueue_style(
            $handle,
            get_stylesheet_directory_uri() . $path,
            [],
            $version
        );
    }

    // ---------------------------
    // JS-Dateien laden
    // ---------------------------
    $js_files = [
        'horizontal-scroll-js' => '/js/horizontal-scroll.js',
        'horizontal-scroll-js' => '/js/horizontal-scroll-funfacts.js',
        'navbar-js'            => '/js/navbar.js'
    ];

    foreach ($js_files as $handle => $path) {
        $filepath = get_stylesheet_directory() . $path;
        $version  = (file_exists($filepath) && is_readable($filepath)) ? filemtime($filepath) : null;

        wp_enqueue_script(
            $handle,
            get_stylesheet_directory_uri() . $path,
            ['jquery'], // jQuery als Abhängigkeit
            $version,
            true        // im Footer laden
        );
    }
});
