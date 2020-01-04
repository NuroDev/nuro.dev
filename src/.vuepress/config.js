module.exports = {
    base: '/',
    description: 'Games Programmer | Web Developer',
    dest: 'public',
    postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ]
    },
    plugins: [
        'vuepress-plugin-reading-time'
    ],
    serviceWorker: true,
    title: 'N U R O ™',
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Blog', link: '/blog' },
            { text: 'Portfolio', link: '/portfolio' },
            { text: 'Contact', link: '/contact' }
        ],
        serviceWorker: {
            updatePopup: true
        }
    }
};
