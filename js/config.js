// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};
// API站点配置
const API_SITES = {
'葡萄资源': {
      name: '葡萄资源',
      
      api: 'https://caiji.putaozy.net/inc/api.php',
      
    },
    '探探资源': {
      name: '探探资源',
      
      api: 'https://apittzy.com/api.php/provide/vod/at/xml',
      
    },
    'KK资源网': {
      name: 'KK资源网',
      
      api: 'https://kkzy.me/api.php/provide/vod/at/xmlsea',
      
    },
    '色猫资源': {
      name: '色猫资源',
      
      api: 'https://api.maozyapi.com/inc/api.php',
      
    },
    '乐播': {
      name: '乐播',
      
      api: 'https://lbapi9.com/api.php/provide/vod/at/xml',
      
    },
    '哥哥妹妹': {
      name: '哥哥妹妹',
      
      api: 'http://www.ggmmzy.com:9999/inc/xml',
      
    },
    'shayu': {
      name: 'shayu',
      
      api: 'https://shayuapi.com/api.php/Seacms/vod/',
      
    },
    '色屌丝': {
      name: '色屌丝',
      
      api: 'http://sdszyapi.com/home/cjapi/asbb/mc10/vod/xml',
      
    },
    '番号资源': {
      name: '番号资源',
      
      api: 'http://fhapi9.com/api.php/provide/vod/at/xml',
      
    },
    '点点娱乐': {
      name: '点点娱乐',
      
      api: 'https://xx55zyapi.com/home/cjapi/ascf/mc10/vod/xml',
      
    },
    '52AVAV': {
      name: '52AVAV',
      
      api: 'https://52zyapi.com/home/cjapi/asda/mc10/vod/xml',
      
    },
    '小姐姐资源': {
      name: '小姐姐资源',
      
      api: 'https://xjjzyapi.com/home/cjapi/askl/mc10/vod/xml',
      
    },
    '色窝资源': {
      name: '色窝资源',
      
      api: 'https://sewozyapi.com/api.php/provide/vod/at/xml',
      
    },
    '大地': {
      name: '大地',
      
      api: 'https://dadiapi.com/api.php',
      
    },
    '老鸭': {
      name: '老鸭',
      
      api: 'https://api.apilyzy.com/api.php/provide/vod/at/xml',
      
    },
    '花魁': {
      name: '花魁',
      
      api: 'https://caiji.huakuiapi.com/inc/apijson_vod.php',
      
    },
    '大MM资源': {
      name: '大MM资源',
      
      api: 'https://www.dmmapi.com/home/cjapi/asd2c7/mc10/vod/xml',
      
    },
    '精工厂资源': {
      name: '精工厂资源',
      
      api: 'https://jgczyapi.com/home/cjapi/kld2/mc10/vod/xml',
      
    },
    '656b916e-94fe-5b57-b300-80ccc1be1cea': {
      name: '辣椒',
      
      api: 'https://apilj.com/api.php/provide/vod/at/json/',
      
    },
    'cee0fca9-1808-5017-9a69-0d9013f95b47': {
      name: '芒果',
      
      api: 'https://mgzyz1.com/api.php/provide/vod/?ac=list',
      
    },
    'b0684274-ce9e-5d4f-bf54-f61afbdaf49d': {
      name: '玉兔',
      
      api: 'https://apiyutu.com/api.php/provide/vod/?ac=list',
      
    },
    '70f4c18c-3276-50f1-adaa-85614f5441eb': {
      name: '森林',
      
      api: 'https://slapibf.com/api.php/provide/vod/?ac=list',
      
    },
    '9d8974ba-ddfc-5e53-b008-29f37e5fc88b': {
      name: '155',
      
      api: 'https://155api.com/api.php/provide/vod/?ac=list',
      
    },
    'a93050f8-e282-521d-9c92-cdbbf5add205': {
      name: '色猫',
      
      api: 'https://caiji.semaozy.net/inc/apijson_vod.php',
      
    },
    '447fa6df-7552-5830-ab64-d45afbf39b42': {
      name: '草榴',
      
      api: 'https://www.caoliuzy.com/api.php/provide/vod/at/json/',
      
    },
    '8a885bf6-666b-5bbf-8669-4c7f1ffb7a71': {
      name: '开云',
      
      api: 'https://kaiyunzy5.com/inc/apijson_vod.php',
      
    },
    'a4d8e39c-5981-5c07-84f8-19ab9839e160': {
      name: '黄瓜',
      
      api: 'https://www.avre00.com/api.php/Prodao/vod/?ac=list',
      
    },
    'ffc08730-71ad-56b8-a153-e2e563e6d64c': {
      name: '奶香',
      
      api: 'https://Naixxzy.com/api.php/provide/vod/?ac=list',
      
    },
    'f81ab05d-3269-5fb9-97bb-1597b00e0e02': {
      name: '伊人',
      
      api: 'https://api.yrzyapi.com/api.php/provide/vod/?ac=list',
      
    },
    'b8b48f6e-9e96-5619-96ba-d884ef9cb442': {
      name: '奥斯卡',
      
      api: 'https://aosikazy.com/api.php/provide/vod/?ac=list',
      
    },
    'f951be46-17fa-5f4f-9f41-ff25d21e8d74': {
      name: '美少女',
      
      api: 'https://www.msnii.com/api/xml.php',
      
    },
    '54658e47-58bb-5221-bec2-82b8a3be2ec4': {
      name: '淫水机',
      
      api: 'https://www.xrbsp.com/api/xml.php',
      
    },
    'f951be46-17fa-5f4f-9f41-ff25d21e8d74': {
      name: '花椒',
      
      api: 'https://apihjzy.com/api.php/provide/vod/at/xml/',
      
    },
    'cfa8e308-0120-5e43-a937-eebb76f99626': {
      name: '丝袜',
      
      api: 'https://www.siwazyw.cc/api.php/provide/vod/at/xml/',
      
    },
    '34cd623c-0b62-5426-a653-9c1db4a850e8': {
      name: '黄AV',
      
      api: 'https://www.pgxdy.com/api/xml.php',
      
    },
    'Osu3dV': {
      name: '香奶儿',
      
      api: 'https://www.gdlsp.com/api/xml.php',
      
    },
    '0e3d48dd-9a80-57d5-800d-148b13983386': {
      name: '菜云',
      
      api: 'https://www.caiyunjidi.com/api/vod.php',
      
    },
    '37f548f0-4a9d-5da4-b3de-87552f2eb8d0': {
      name: '壹壹资源',
      
      api: 'https://www.221zyz.vip/inc/api.php',
      
    },
    '07b96ce7-0791-5f19-9321-ba6085145eef': {
      name: '91麻豆',
      
      api: 'https://91md.me/api.php/provide/vod/at/xml/',
    
    },
    '4eef8bc4-71f8-54fa-bffd-d1d3d9e77dce': {
      name: '白嫖',
      
      api: 'https://www.kxgav.com/api/xml.php',
    
    },
    'f881d19e-9433-56d4-9c06-4a842b280877': {
      name: '爱播',
      
      api: 'https://cj.apiabzy.com/api.php/provide/vod/at/xml/',
    
    },
    '54658e47-58bb-5221-bec2-82b8a3be2ec4': {
      name: '草莓',
      
      api: 'https://caiji.caomeiapi.com/inc/api.php',
    
    },
    'b6b384a4-43d1-5937-babe-c7af2ea5e21b': {
      name: '小湿妹',
      
      api: 'https://www.afasu.com/api/xml.php',
    
    },
    '20a58291-0246-5461-97b6-b080245200dd': {
      name: '久久',
      
      api: 'http://99zy.pw/api.php/provide/vod/at/xml/',
    
    },
    '34cd623c-0b62-5426-a653-9c1db4a850e8': {
      name: '秀色',
      
      api: 'https://api.xiuseapi.com/api.php/provide/vod/at/xml',
    
    },
    'cee0fca9-1808-5017-9a69-0d9013f95b47': {
      name: '芒果',
      
      api: 'https://www.mgav1.cc/api.php/provide/vod/at/xml/',
    
    },
    'f951be46-17fa-5f4f-9f41-ff25d21e8d74': {
      name: '花椒',
      
      api: 'https://cj.apihjzy.com/inc/api.php',
    
    },
    '2286c2fd-8e65-52d2-9a7a-f21ec0cae006': {
      name: '辣椒2',
      
      api: 'http://api.11bat.com/api.php/provide/vod/at/xml/',
    
    },
    'b0619031-953f-5e05-9d68-a621e8bc6514': {
      name: '天堂',
      
      api: 'http://bttcj.com/inc/sapi.php',
    
    },
    '免費AV線上看': {
      name: '免費AV線上看',
      
      api: 'https://legallet.org/api.php/provide/vod/?ac=list',
     
    },
    '美少女资源站': {
      name: '美少女资源站',
      
      api: 'https://www.msnii.com/api/xml.php',
     
    },
    '淫水机资源站': {
      name: '淫水机资源站',
      
      api: 'https://www.xrbsp.com/api/xml.php',
     
    },
    '香奶儿资源站': {
      name: '香奶儿资源站',
      
      api: 'https://www.gdlsp.com/api/xml.php',
     
    },
    '白嫖资源站': {
      name: '白嫖资源站',
      
      api: 'https://www.kxgav.com/api/xml.php',
     
    },
    '小湿妹资源站': {
      name: '小湿妹资源站',
      
      api: 'https://www.afasu.com/api/xml.php',
     
    },
    '黄AV资源站': {
      name: '黄AV资源站',
      
      api: 'https://www.pgxdy.com/api/xml.php',
     
    },
    '7000影视': {
      name: '7000影视',
      
      api: 'https://hd7000.com/api.php/provide/vod/?ac=list',
     
    },
    '色鸭资源': {
      name: '色鸭资源',
      
      api: 'https://api.seyavod.com/api.php/provide/vod/?ac=list',
      
    },
    '玉兔资源': {
      name: '玉兔资源',
      
      api: 'https://yutuzy3.com/api.php/provide/vod/?ac=list',
     
    },
    '老色逼资源站': {
      name: '老色逼资源站',
      
      api: 'https://apilsbzy1.com/api.php/provide/vod/?ac=list',
      
    },
    '羞涩高清': {
      name: '羞涩高清',
      
      api: 'https://xxhd.online//api.php/provide/vod/?ac=list',
     
    },
    '天美AV': {
      name: '天美AV',
      
      api: 'https://tmav.art/api.php/provide/vod/',
     
    },
    '青楼资源': {
      name: '青楼资源',
      
      api: 'https://qlzy.tv/api.php/provide/vod/?ac=list',
      
    },
    '色南国资源': {
      name: '色南国资源',
      
      api: 'https://api.sexnguon.com/api.php/provide/vod/?ac=list',
     
    },
    '极致资源': {
      name: '极致资源',
      
      api: 'https://jizhiapi.com/api.php/provide/vod/?ac=list  ',
     
    },
    '花魁资源': {
      name: '花魁资源',
      
      api: 'https://caiji.huakuiapi.com/inc/apijson_vod.php',
      
    },
    '博天堂': {
      name: '博天堂',
      
      api: 'http://bttcj.com/inc/sapi.php',
     
    },
    '好片资源': {
      name: '好片资源',
      
      api: 'https://haopianapi.com/api.php/provide/vod/?ac=list',
      
    },
    '黄色资源': {
      name: '黄色资源',
      
      api: 'http://hszy.vip/api.php/provide/vod/?ac=detail',
     
    },
    '开云资源': {
      name: '开云资源',
      
      api: 'https://kaiyunzy1.com/inc/apijson_vod.php',
     
    },
    '奥斯卡资源': {
      name: '奥斯卡资源',
      
      api: 'https://aosikazy.com/api.php/provide/vod/?ac=list',
      
    },
    '青楼资源': {
      name: '青楼资源',
      
      api: 'https://qlzy.tv/api.php/provide/vod/?ac=list',
      
    },
    '蛋蛋视频': {
      name: '蛋蛋视频',
      
      api: 'https://156.249.29.8/inc/apijson_vod.php',
     
    },
    '伊人资源': {
      name: '伊人资源',
      
      api: 'https://api.yirenziyuan.com/api.php/provide/vod/?ac=list',
      
    },
    '155资源': {
      name: '155资源',
      
      api: 'https://155api.com/api.php/provide/vod/',
     
    },
    '滴滴资源': {
      name: '滴滴资源',
      
      api: 'https://api.ddapi.cc/api.php/provide/vod/?ac=list',
     
    },
    '橘猫资源': {
      name: '橘猫资源',
      
      api: 'https://to.to-long.com/api.php/provide/vod/?ac=list',
      
    },
    '花色资源': {
      name: '花色资源',
      
      api: 'https://api.huasezy.xyz/api.php/provide/vod/?ac=list',
      
    },
    '蛋蛋视频': {
      name: '蛋蛋视频',
      
      api: 'http://156.249.29.8/inc/apijson_vod.php',
      
    },
    '雪豹资源': {
      name: '雪豹资源',
      
      api: 'https://api.xbapi.cc/api.php/provide/vod/?ac=list',
      
    },
    '好片资源': {
      name: '好片资源',
      
      api: 'https://haopianapi.com/api.php/provide/vod/?ac=list',
      
    },
    '奥斯卡资源': {
      name: '奥斯卡资源',
      
      api: 'https://aosikazy.com/api.php/provide/vod/?ac=list',
      
    },
    '花魁资源': {
      name: '花魁资源',
      
      api: 'https://caiji.huakuiapi.com/inc/apijson_vod.php',
      
    },
    '色色吧': {
      name: '色色吧',
      
      api: 'http://secj8.com/inc/sapi.php?ac=videolist',
     
    },
    '宝塔资源': {
      name: '宝塔资源',
      
      api: 'https://baotazy.com/api.php/provide/vod/',
     
    },
    '滴滴资源': {
      name: '滴滴资源',
      
      api: 'https://api.ddapi.cc/api.php/provide/vod/at/xml',
     
    },
    '蛋蛋视频': {
      name: '蛋蛋视频',
      
      api: 'https://156.249.29.8/inc/apijson_vod.php',
     
    },
    '草榴资源': {
      name: '草榴资源',
      
      api: 'https://www.caoliuzyw.com/api.php/provide/vod/at/json/',
     
    },
    '番号资源': {
      name: '番号资源',
      
      api: 'http://fhapi9.com/api.php/provide/vod/',
     
    },
    '葡萄资源': {
      name: '葡萄资源',
      
      api: 'https://putaozy19.com/inc/api.php',
     
    },
    '老鸭资源': {
      name: '老鸭资源',
      
      api: 'https://api.apilyzy.com/api.php/provide/vod/',
     
    },
    '咪咪资源': {
      name: '咪咪资源',
      
      api: 'http://www.caiji25.com/home/cjapi/p0as/mc10/vod/json',
     
    },
    '色色资源': {
      name: '色色资源',
      
      api: 'http://secj8.com/inc/sapi.php',
     
    },
    '色鸭资源': {
      name: '色鸭资源',
      
      api: 'https://api.seyavod.com/api.php/provide/vod/',
     
    },
    '天美AV': {
      name: '天美AV',
      
      api: 'https://tmav.art/api.php/provide/vod/',
     
    },
    'KOK资源': {
      name: 'KOK资源',
      
      api: 'https://api.vodkok2.com/api.php/provide/vod/',
     
    },
    'QQ传媒': {
      name: 'QQ传媒',
      api: 'https://qqcm.sbs/api.php/provide/vod/',
      
    },
   
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
 //ARCHIVE https://telegra.ph/APIs-08-12
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
