export default {
  build_name: 'public',
  resource_directory: 'src',
  server_settings: {
    // php を xampp, mamp 等を使用せずに nplate のみで動かす場合は、host, port を設定する
    // php を使用する場合、port が php サーバーになり、host には localhost + port を合うように入力する
    host: 'localhost', // wordpress の場合、localhost のみ
    port: 80,
    browsersync_port: 4000,
    proxy_port: 3003, // next.js の設定
    use: {
      proxy: false,
      htaccess: false
    }
  },
  ecmascript_settings: {
    ecmascript_directory: 'scripts',
    use: {
      ejs: false,
      vue: false,
      nuxt: false,
      react: false,
      next: false,
      ts: false,
      tsx: false
    }
  },
  style_settings: {
    style_directory: 'styles',
    use: {
      entry: true
    }
  },
  php_settings: {
    use: {
      php: false,
      laravel: false,
      blade_template: false
    },
    php_bin:
      'C:/UserApps/Apps/laragon/bin/php/php-7.4.9-Win32-vc15-x64/php.exe',
    php_ini: 'C:/UserApps/Apps/laragon/bin/php/php-7.4.9-Win32-vc15-x64/php.ini'
  },
  vendor_settings: {
    use: {
      vendors_directory: true
    }
  },
  wordpress_settings: {
    use: {
      as_wordpress_theme: false
    }
  }
}
