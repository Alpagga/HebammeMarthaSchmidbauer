<?php

/**
 * 1) Block korrekt registrieren (INIT!)
 */
add_action('init', function() {

    register_block_type('mytheme/horizontal-scroll', array(
        'render_callback' => 'mytheme_render_horizontal_scroll_block',
        'style'           => array(
            'variables-css',
            'horizontal-scroll',
            'navbar',
            'footer',
            'forminator',
            'timeline',
            'landingpage',
            'impressum',
            'junction'
        ),
        'script'          => array(
            'horizontal-scroll-js',
            'navbar-js'
        )
    ));
});


/**
 * 2) CSS & JS registrieren + laden (WP_ENQUEUE_SCRIPTS!)
 */
add_action('wp_enqueue_scripts', function() {

    wp_enqueue_script('jquery');

    // ----------------------------
    // JS Dateien
    // ----------------------------
    $js_files = array(
        'horizontal-scroll-js' => '/js/horizontal-scroll.js',
        'navbar-js'            => '/js/navbar.js'
    );

    foreach ($js_files as $handle => $path) {

        $filepath = get_stylesheet_directory() . $path; // korrekt für Child/Parent
        $version  = (file_exists($filepath) && is_readable($filepath)) 
            ? filemtime($filepath) 
            : null;

        wp_register_script(
            $handle,
            get_stylesheet_directory_uri() . $path,
            array('jquery'),
            $version,
            true
        );

        wp_enqueue_script($handle);
    }


    // ----------------------------
    // CSS Dateien
    // ----------------------------
    $css_files = array(
        'variables-css'     => '/css/variables.css',
        'horizontal-scroll' => '/css/horizontal-scroll.css',
        'navbar'            => '/css/navbar.css',
        'footer'            => '/css/footer.css',
        'forminator'        => '/css/forminator.css',
        'timeline'          => '/css/timeline.css',
        'landingpage'       => '/css/landingpage.css',
        'impressum'         => '/css/impressum.css',
        'junction'          => '/assets/fonts/junction/junction.css'
    );

    foreach ($css_files as $handle => $path) {

        $filepath = get_stylesheet_directory() . $path;
        $version  = (file_exists($filepath) && is_readable($filepath)) 
            ? filemtime($filepath) 
            : null;

        wp_register_style(
            $handle,
            get_stylesheet_directory_uri() . $path,
            array(),
            $version
        );

        wp_enqueue_style($handle);
    }
});
