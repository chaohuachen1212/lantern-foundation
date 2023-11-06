<?php

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', 'utf8_unicode_ci' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'UdHRQt69yBnWX0kCDY/gHpS/CWMOEJhBIHEQnKSXQuMEdQcxkV5HLA7aJ/XYETskuSZ3xHiPygU/NKPsiH8oOA==');
define('SECURE_AUTH_KEY',  'uYOsfgF7OzesGwdzfkr4y9gB3QLFhGzwkwWYwWlWooMAYHgski0t+sZxcHYtLzBOTTDcCVQ95/UZVSyuSMShdA==');
define('LOGGED_IN_KEY',    'v3nR3BpSbEu43VIExCey4FZuC5VGXUdvau8JbXTWb06WUKGLtvR0ZYu8V3AFE64AEB50h8ddtsy5cB2Xhc/98Q==');
define('NONCE_KEY',        '8w0LMEU7hfaFGWxcekxL/21Mvn40BQnPEVtyse/3yntyeGFOAx38u09TqE6xSt4w1AKwkuAIk55AkyGrxxY7qg==');
define('AUTH_SALT',        '8aNN76XZK+Ic8BFbi7XE1QlpxwfVqykvi/coJCR3bg1RKJANU5IiaSbxzF/loVYGtO45LcF6KnZ/SiobOGqLKg==');
define('SECURE_AUTH_SALT', 'rnwFbzVXOM6KHnhvMSqzjDBsMEu7BBi4ScaBv89G4nOYCAT/4ayWziAh2lPUVCnalVuZe1C2dHaWkny9L74bcg==');
define('LOGGED_IN_SALT',   'qsJmjjzjyNNxoK6/s+X4DyGQ0ZEEIURfrj0WTv9n2DUVfmWi6wpGacgFJHq6HjyNXAxtwJk9S2DLBrc3/LCD5Q==');
define('NONCE_SALT',       'hAcE5DFxjE5i+DQN/kTL1w/uHTgLORTUQvKf/JvxRmZJ9dAYCovQjMGmVcOhghPRC+zwnjgDOBjmnBLoTI3KkA==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

