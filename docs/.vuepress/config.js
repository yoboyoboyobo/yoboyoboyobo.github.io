module.exports = {
	dest: 'public',
  title: "Welcome to Yobo's blog～*･゜ﾟ･*:.｡..｡.:*･'(*ﾟ▽ﾟ*)'･*:.｡. .｡.:*･゜ﾟ･*", 
  description: "Yobo's Blog",
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  "pages": [
    {
      "lastUpdated": 1524027677000,
      "path": "/",
      "title": "VuePress",
      "frontmatter": {}
    },
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '随笔', link: '/diary/' },
      { text: '笔记', link: '/web-note/' },
      // 下拉列表的配置
      {
        text: 'hahaha',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/English' }
        ]
      }
    ],
    sidebar: {
    	"/diary/": [
		    {
		      title: 'diary',
		      collapsable: false,
		      children: [
		        '',
		      ]
		    }
		  ],
      "/web-note/": [
		    {
		      title: 'web-note',
		      collapsable: false,
		      children: [
		        '',
		        'markdown',
		      ]
		    }
		  ],
		},
  	sidebarDepth: 1,
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-US', // 将会被设置为 <html> 的 lang 属性
      title: 'haahhaha',
      description: '🍭Yobo糖果屋🍬'
    },
    '/zh/': {
      lang: 'en-CN',
      title: 'jajjasjdfkew',
      description: "Yobo's Blog"
    }
  }
}
