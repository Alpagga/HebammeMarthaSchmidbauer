<?php
// Block registrieren
function cbn_register_navbar_block() {
    // JS für den Editor
    wp_register_script(
        'cbn-navbar-block',
        get_template_directory_uri() . '/block/index.js',
        array('wp-blocks','wp-element','wp-editor'),
        filemtime(get_template_directory() . '/block/index.js'),
        true
    );

    // Block registrieren mit PHP Render Callback
    register_block_type('cbn/navbar', array(
        'editor_script' => 'cbn-navbar-block',
        'render_callback' => 'cbn_render_navbar'
    ));
}
add_action('init', 'cbn_register_navbar_block');

// Render Callback
function cbn_render_navbar() {
    ob_start();
    include get_template_directory() . '/block/render.php';
    return ob_get_clean();
}