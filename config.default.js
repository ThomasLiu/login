/**
 * Created by user on 11/6/15.
 */

var path = require('path');

var config = {
    // debug 为 true 时，用于本地调试
    debug: true,

    get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

    name: '登陆网站', // 网站名名字
    description: '各种登陆用到的方式', // 网站的描述
    keywords: '',

    // 添加到 html head 中的信息
    site_headers: [
        '<meta name="author" content="EDP@TAOBAO" />'
    ],
    site_logo: '/public/images/cnodejs_light.svg', // default is `name`
    site_icon: '/public/images/cnode_icon_32.png', // 默认没有 favicon, 这里填写网址

    // cdn host，如 http://cnodejs.qiniudn.com
    site_static_host: '', // 静态文件存储域名
    // 社区的域名
    host: 'localhost',
    // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
    google_tracker_id: '',
    // 默认的cnzz tracker ID，自有站点请修改
    cnzz_tracker_id: '',

    // mongodb 配置
    db: 'mongodb://' + (process.env.MONGOLAB_URI || '127.0.0.1') + '/node_login',

    // redis 配置，默认是本地
    redis_host: process.env.REDIS_HOST || 'localhost',
    redis_port: process.env.REDIS_PORT || 6379,
    redis_db: process.env.REDIS_DB || 0,

    session_secret: 'node_login_secret', // 务必修改
    auth_cookie_name: 'node_login',

    // 程序运行的端口
    port: 3000,

    // 话题列表显示的话题数量
    list_topic_count: 20,

    // RSS配置
    rss: {
        title: 'CNode：Node.js专业中文社区',
        link: 'http://cnodejs.org',
        language: 'zh-cn',
        description: 'CNode：Node.js专业中文社区',
        //最多获取的RSS Item数量
        max_rss_items: 50
    },

    // 邮箱配置
    mail_opts: {
        host: 'smtp.126.com',
        port: 25,
        auth: {
            user: 'thomas_test@126.com',
            pass: 'thomas123'
        }
    },

    //weibo app key
    weibo_key: 10000000,
    weibo_id: 'your_weibo_id',

    // admin 可删除话题，编辑标签，设某人为达人
    admins: { user_login_name: true },

    // github 登陆的配置
    GITHUB_OAUTH: {
        clientID: 'your GITHUB_CLIENT_ID',
        clientSecret: 'your GITHUB_CLIENT_SECRET',
        callbackURL: 'http://cnodejs.org/auth/github/callback'
    },
    // 是否允许直接注册（否则只能走 github 的方式）
    allow_sign_up: true,

    // newrelic 是个用来监控网站性能的服务
    newrelic_key: 'thomas_0836@qq.com',

    // 下面两个配置都是文件上传的配置

    // 7牛的access信息，用于文件上传
    qn_access: {
        accessKey: 'your access key',
        secretKey: 'your secret key',
        bucket: 'your bucket name',
        domain: 'http://{bucket}.qiniudn.com'
    },

    // 文件上传配置
    // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
    upload: {
        path: path.join(__dirname, 'public/upload/'),
        url: '/public/upload/'
    },

    // 版块
    tabs: [
        ['share', '分享'],
        ['ask', '问答'],
        ['job', '招聘'],
    ],

    // 极光推送
    jpush: {
        appKey: 'YourAccessKeyyyyyyyyyyyy',
        masterSecret: 'YourSecretKeyyyyyyyyyyyyy',
        isDebug: false,
    },

    create_post_per_day: 1000, // 每个用户一天可以发的主题数
    create_reply_per_day: 1000, // 每个用户一天可以发的评论数
    visit_per_day: 1000, // 每个 ip 每天能访问的次数
}

if (process.env.NODE_ENV === 'test') {
    config.db = 'mongodb://127.0.0.1/node_login_test';
}

if (process.env.NODE_ENV === 'production') {
    config.debug = false;
};


module.exports = config;