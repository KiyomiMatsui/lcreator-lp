export default {
  build_name: 'public',
  resource_directory: 'src',
  server_settings: {
    // php を xampp, mamp 等を使用せずに nplate のみで動かす場合は、host, port を設定する
    // php を使用する場合、port が php サーバーになり、host には localhost + port を合うように入力する
    host: 'localhost:80', // wordpress の場合、localhost のみ
    port: 80,
    browsersync_port: 4000,
    proxy_port: 3003, // next.js の設定
    use: {
      proxy: true,
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
      tsx: false,
      minify: true,
      compiler: true,
      esbuild: true // webpack の代わりとして実行される、react 系であれば瀑速で build される
      // vue 非対応
    }
  },
  style_settings: {
    style_directory: 'styles',
    use: {
      entry: true,
      minify: false
    }
  },
  php_settings: {
    use: {
      php: true,
      laravel: false,
      blade_template: false
    },
    php_bin: '/Applications/MAMP/bin/php/php7.4.12/bin/php',
    php_ini: '/Applications/MAMP/bin/php/php7.4.12/conf/php.ini'
  },
  vendor_settings: {
    use: {
      vendors_directory: true
    }
  },
  audio_settings: {
    use: {
      audios_directory: false
    }
  },
  wordpress_settings: {
    use: {
      as_wordpress_theme: false
    }
  }
}
