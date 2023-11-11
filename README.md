# Local build setup

Before you start:
- Make sure you're at node 9.11.2 or higher (`nvm install 9.11.2` `nvm use 9.11.2`)
- Make sure gulp is installed globally (`npm install gulp -g`)

Setup for Local
-------------
- make a new local site and point to that project folder
- `cd app/public`
- `Rm -rf *`
- Make sure there isn’t a hidden `.htaccess` file, if so, manually delete
- `git init`
- `git remote add origin git@github.com:chaohuachen1212/lantern-foundation.git`
- `git pull origin main`
- Copy contents of `wp-config-local.php` to a new `wp-config.php`
- If you are using Local, copy contents of `.env.example` to a new `.env`
- If you are using MAMP, copy contents of `.env.mamp.example` to a new `.env`
- Navigate to `wp-content/themes/project-name/dev`
- `npm install`
- `gulp build`
- Open Wordpress admin and select new theme
- Go to Pages > Home/Index
  - Set Page Template to Home & Publish
- Go to Settings > Reading
  - Homepage display: Static
  - Homepage: Styleguide
- Activate plugins
  - activate advanced custom fields pro
  - wp migrate db + all addons
    - Enter License key: `5bedcb5e-3637-447c-a969-02908831a111`

To sync with a live site database
-------------
- Pull down site + media using WP Migrate plugin
  - Select migrate tab,
  - Select pull
  - paste connection info url from server
  - Open tables tab
  - Click pull

Local Wordpress Login:
-------------
- username: Set in Local setup
- password: Set in Local setup
