<?php // ==== FUNCTIONS ==== //

// Specify custom configuration values in this file; these will override values in `functions-config-defaults.php`
// The general idea here is to allow for themes to be customized for specific installations
defined( 'VOIDX_SCRIPTS_PAGELOAD' ) || define( 'VOIDX_SCRIPTS_PAGELOAD', false );

// remove default jquery script wordpress adds into footer
if (!is_admin()) add_action('wp_enqueue_scripts', 'my_jquery_enqueue', 11);
function my_jquery_enqueue() {
  wp_deregister_script('jquery');
  wp_register_script('jquery', '', '', '', true);
}

// An example of how to manage loading front-end assets (scripts, styles, and fonts)
require_once( trailingslashit( get_stylesheet_directory() ) . 'inc/assets.php' );

// Only the bare minimum to get the theme up and running
function voidx_setup() {

  // Language loading
  load_theme_textdomain( 'voidx', trailingslashit( get_template_directory() ) . 'languages' );

  // HTML5 support; mainly here to get rid of some nasty default styling that WordPress used to inject
  add_theme_support( 'html5', array( 'search-form', 'gallery' ) );

  // $content_width limits the size of the largest image size available via the media uploader
  // It should be set once and left alone apart from that; don't do anything fancy with it; it is part of WordPress core
  global $content_width;
  if ( !isset( $content_width ) || !is_int( $content_width ) )
    $content_width = (int) 960;

  // Register header and footer menus
  register_nav_menu( 'header', __( 'Header menu', 'voidx' ) );
  register_nav_menu( 'footer', __( 'Footer menu', 'voidx' ) );

}
add_action( 'after_setup_theme', 'voidx_setup', 11 );

// Sidebar declaration
function voidx_widgets_init() {
  register_sidebar( array(
    'name'          => __( 'Main sidebar', 'voidx' ),
    'id'            => 'sidebar-main',
    'description'   => __( 'Appears to the right side of most posts and pages.', 'voidx' ),
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget'  => '</aside>',
    'before_title'  => '<h2>',
    'after_title'   => '</h2>'
  ) );
}
add_action( 'widgets_init', 'voidx_widgets_init' );

// toggle admin bar
show_admin_bar(false);

// allows for featured image.
add_theme_support('post-thumbnails');

// remove default page editor
function remove_editor() {
  remove_post_type_support('page', 'editor');
}
add_action('admin_init', 'remove_editor');

// use for includes
define('GET_DIR', get_template_directory());

// use for images
define('GET_URI', get_template_directory_uri());

// allow svg upload to media library
function cc_mime_types($mimes) {
 $mimes['svg'] = 'image/svg+xml';
 return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

// insert a template part
function kni_import_part($part_name, $data = null, $class_name = null) {
  set_query_var('component_data', $data);
  set_query_var('component_class', $class_name);
  get_template_part('templates/' . $part_name);
  set_query_var('component_data', null);
  set_query_var('component_class', null);
}

// global option pages for nav and footer custom fields
if (function_exists('acf_add_options_page')) {
  $parent = acf_add_options_page(array(
    'page_title' => 'Theme General Settings',
    'menu_title' => 'Theme Settings',
    'menu_slug' => 'theme-general-settings',
    'redirect' => false
  ));

  acf_add_options_sub_page(array(
    'page_title' => 'Header Settings',
    'menu_title' => 'Header',
    'menu_slug' => 'header',
    'parent_slug' =>  $parent['menu_slug']
  ));

  acf_add_options_sub_page(array(
    'page_title' => 'Footer Settings',
    'menu_title' => 'Footer',
    'menu_slug' => 'footer',
    'parent_slug' =>  $parent['menu_slug']
  ));

  acf_add_options_sub_page(array(
    'page_title' => 'Cookie Banner',
    'menu_title' => 'Cookie Banner',
    'menu_slug' => 'cookie-banner',
    'post_id' => 'cookie-banner',
    'parent_slug' =>  $parent['menu_slug']
  ));
}
