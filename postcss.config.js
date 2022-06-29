module.exports = {
    plugins: [

        // 前缀追加
        require('autoprefixer')({
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'last 5 Firefox versions',
                'Safari >= 6',
                'ff > 31',
                'ie >= 8',
                '> 1%',
            ],
            grid: true,
        }),
        require('postcss-flexbugs-fixes'),
        // flexible配置

    ],
}

