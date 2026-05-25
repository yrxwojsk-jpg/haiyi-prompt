// 海一云商集团 - 图片提示词大师（产品细化版）
// ===== 产品细化数据库 =====
var PRODUCT_CATEGORIES = [
  { id:'fridge', name:'冰箱', icon:'🧊', desc:'冰箱类产品' },
  { id:'ac', name:'空调', icon:'❄️', desc:'空调类产品' },
  { id:'washer', name:'洗衣机', icon:'🫧', desc:'洗衣类产品' },
  { id:'hood', name:'油烟机', icon:'💨', desc:'厨房电器' },
  { id:'tv', name:'电视', icon:'📺', desc:'影音电器' },
  { id:'water', name:'热水器', icon:'🔥', desc:'热水设备' },
  { id:'dish', name:'洗碗机', icon:'🍽️', desc:'清洁电器' },
  { id:'custom', name:'✏️ 自定义', icon:'✏️', desc:'自己输入任意产品' },
];

// 冰箱细化
var FRIDGE_TYPES = [
  { id:'side-by-side', name:'对开门冰箱', desc:'左右对开双门，大容量，适合大户型', size:'600L-800L', dims:'宽90-100cm × 高175-180cm × 深65-75cm' },
  { id:'french-4', name:'法式四门冰箱', desc:'上对开+下抽屉，分区精细，高端定位', size:'500L-700L', dims:'宽80-90cm × 高175-180cm × 深65-75cm' },
  { id:'french-5', name:'法式五门冰箱', desc:'上对开+双抽屉+变温室，极致分区', size:'550L-750L', dims:'宽85-95cm × 高175-180cm × 深70-78cm' },
  { id:'cross-4', name:'十字对开门', desc:'上冷藏下冷冻十字分割，中式厨房首选', size:'450L-650L', dims:'宽75-85cm × 高175-180cm × 深65-72cm' },
  { id:'twin', name:'双门冰箱', desc:'传统上下双门，经济实惠', size:'180L-350L', dims:'宽55-65cm × 高140-170cm × 深55-65cm' },
  { id:'triple', name:'三门冰箱', desc:'冷藏+冷冻+变温，家庭实用之选', size:'250L-400L', dims:'宽60-70cm × 高170-180cm × 深60-70cm' },
  { id:'mini', name:'迷你冰箱', desc:'单门小容量，宿舍办公室适用', size:'50L-120L', dims:'宽45-55cm × 高50-85cm × 深45-55cm' },
  { id:'wine', name:'酒柜/雪茄柜', desc:'恒温恒湿，专业储酒', size:'50-200瓶', dims:'宽60cm × 高80-180cm × 深55-65cm' },
  { id:'built-in', name:'嵌入式冰箱', desc:'隐藏式安装，与橱柜一体', size:'250L-600L', dims:'宽60/90cm标准柜体 × 高177cm × 深55cm' },
];

// 空调细化
var AC_TYPES = [
  { id:'split-wall', name:'壁挂式空调', desc:'挂机，卧室书房首选，不占地面', power:'1匹-2匹', dims:'内机宽80-100cm × 高30cm × 深20cm' },
  { id:'split-floor', name:'立柜式空调', desc:'柜机，客厅大空间，出风量大', power:'2匹-5匹', dims:'宽35-50cm × 高180cm × 深35-45cm' },
  { id:'central-duct', name:'风管机/一拖一', desc:'隐藏安装，美观大方', power:'1.5匹-5匹', dims:'吊顶隐藏，出风口60×15cm' },
  { id:'central-multi', name:'中央空调多联机', desc:'一拖多，全屋恒温', power:'4匹-20匹', dims:'外机大，内机隐藏于吊顶' },
  { id:'portable', name:'移动空调', desc:'免安装，可移动，租房适用', power:'1匹-2匹', dims:'宽35-45cm × 高70-80cm × 深35-45cm' },
  { id:'window', name:'窗式空调', desc:'一体机，老旧机型，安装简单', power:'1匹-2匹', dims:'宽60-80cm × 高40-50cm × 深60-70cm' },
];

// 洗衣机细化
var WASHER_TYPES = [
  { id:'front-10', name:'滚筒洗衣机10kg', desc:'主流大容量，省水护衣', capacity:'10kg', dims:'宽60cm × 高85cm × 深55-65cm' },
  { id:'front-12', name:'滚筒洗衣机12kg+', desc:'超大容量，床单窗帘轻松洗', capacity:'12-15kg', dims:'宽60cm × 高85cm × 深65-75cm' },
  { id:'front-mini', name:'迷你滚筒', desc:'小型滚筒，单身公寓适用', capacity:'3-6kg', dims:'宽40-50cm × 高70-85cm × 深45-55cm' },
  { id:'top-8', name:'波轮洗衣机8-10kg', desc:'上开门，取放方便，老人友好', capacity:'8-10kg', dims:'宽55-60cm × 高90-100cm × 深55-60cm' },
  { id:'top-mini', name:'波轮迷你洗衣机', desc:'小容量，内衣婴儿衣物专用', capacity:'1-3kg', dims:'宽35-45cm × 高50-70cm × 深35-45cm' },
  { id:'washer-dryer', name:'洗烘一体机', desc:'洗衣+烘干，节省空间', capacity:'8-12kg洗/5-8kg烘', dims:'宽60cm × 高85cm × 深60-70cm' },
  { id:'dryer-heat', name:'热泵烘干机', desc:'独立烘干，热泵节能，护理衣物', capacity:'8-12kg', dims:'宽60cm × 高85cm × 深60-70cm' },
  { id:'twin-tub', name:'双缸洗衣机', desc:'传统双桶，一边洗一边甩干', capacity:'8-12kg', dims:'宽70-80cm × 高90-100cm × 深45-50cm' },
  { id:'stacked', name:'洗烘叠放套装', desc:'洗衣机+烘干机上下叠放', capacity:'各10kg', dims:'宽60cm × 高170-180cm × 深65cm' },
];

// 油烟机细化
var HOOD_TYPES = [
  { id:'side-suction', name:'侧吸式油烟机', desc:'近吸不碰头，油烟不过脸', power:'20-25m³/min', dims:'宽70-90cm × 高50-70cm × 深35-45cm' },
  { id:'top-suction', name:'顶吸式/T型', desc:'传统欧式，拢烟范围广', power:'18-24m³/min', dims:'宽70-90cm × 高50-70cm × 深50-55cm' },
  { id:'slim-integrated', name:'集成灶', desc:'烟灶蒸烤一体，省空间', power:'17-22m³/min', dims:'宽90cm × 高80cm × 深60cm' },
  { id:'lift', name:'升降式油烟机', desc:'自动升降，隐藏美观', power:'19-23m³/min', dims:'宽70-90cm × 升降高度可调' },
];

// 电视细化
var TV_TYPES = [
  { id:'oled-55', name:'55英寸OLED电视', desc:'自发光，无限对比度', screen:'55英寸', dims:'宽122cm × 高71cm × 深5cm(不含底座)' },
  { id:'oled-65', name:'65英寸OLED电视', desc:'大屏OLED，影院级体验', screen:'65英寸', dims:'宽144cm × 高83cm × 深5cm' },
  { id:'oled-77', name:'77英寸OLED电视', desc:'巨幕OLED，极致沉浸', screen:'77英寸', dims:'宽172cm × 高99cm × 深5cm' },
  { id:'mini-65', name:'65英寸MiniLED', desc:'千级分区背光，高亮度', screen:'65英寸', dims:'宽144cm × 高83cm × 深8cm' },
  { id:'mini-75', name:'75英寸MiniLED', desc:'大屏高分区，旗舰之选', screen:'75英寸', dims:'宽167cm × 高96cm × 深8cm' },
  { id:'mini-85', name:'85英寸MiniLED', desc:'巨幕旗舰，影院级', screen:'85英寸', dims:'宽189cm × 高109cm × 深8cm' },
  { id:'lcd-55', name:'55英寸液晶电视', desc:'入门级大屏，性价比', screen:'55英寸', dims:'宽123cm × 高72cm × 深8cm' },
  { id:'projector', name:'4K激光投影仪', desc:'短焦投影，120英寸巨幕', screen:'100-150英寸可调', dims:'主机宽40-50cm × 高10-15cm × 深30-40cm' },
];

// 热水器细化
var WATER_TYPES = [
  { id:'gas-13', name:'燃气热水器13L', desc:'即开即热，适合一厨一卫', capacity:'13L/min', dims:'宽35cm × 高55cm × 深16cm' },
  { id:'gas-16', name:'燃气热水器16L', desc:'大水量，一厨两卫', capacity:'16L/min', dims:'宽37cm × 高57cm × 深16cm' },
  { id:'elec-60', name:'电热水器60L', desc:'储水式，2-3人使用', capacity:'60L', dims:'圆桶直径40cm × 长70-80cm / 扁桶宽80cm×高50cm' },
  { id:'elec-80', name:'电热水器80L', desc:'大容量，3-4人使用', capacity:'80L', dims:'圆桶直径45cm × 长80-90cm / 扁桶宽90cm×高55cm' },
  { id:'elec-100', name:'电热水器100L', desc:'超大容量，4-5人使用', capacity:'100L', dims:'圆桶直径48cm × 长100cm' },
  { id:'tankless', name:'即热式电热水器', desc:'无限热水，小巧省空间', capacity:'即热不限量', dims:'宽30-40cm × 高25-35cm × 深10-15cm' },
  { id:'air-200', name:'空气能热水器200L', desc:'热泵节能，适合别墅', capacity:'200-300L', dims:'水箱直径50cm×高150cm + 外机80×60×30cm' },
  { id:'solar', name:'太阳能热水器', desc:'屋顶安装，节能环保', capacity:'150-300L', dims:'集热板2-4㎡ + 水箱圆桶直径50cm×高150cm' },
];

// 洗碗机细化
var DISH_TYPES = [
  { id:'dish-8', name:'台式洗碗机6-8套', desc:'台式免安装，小家庭适用', capacity:'6-8套', dims:'宽55cm × 高45-50cm × 深50cm' },
  { id:'dish-13', name:'嵌入式洗碗机13套', desc:'标准尺寸，3-5口之家', capacity:'13套', dims:'宽60cm × 高77.5cm × 深55-60cm' },
  { id:'dish-15', name:'嵌入式洗碗机15套+', desc:'超大容量，锅具可洗', capacity:'15-17套', dims:'宽60cm × 高77.5cm × 深65-70cm' },
  { id:'dish-drawer', name:'抽屉式洗碗机', desc:'下拉开门，不弯腰', capacity:'6-8套', dims:'宽60cm × 高40-45cm × 深55cm' },
  { id:'dish-sink', name:'水槽洗碗机', desc:'水槽一体，果蔬海鲜清洗', capacity:'6-7套', dims:'替换水槽，长80-90cm×宽45cm' },
];

// 场景数据
var SCENES = [
  { id:'livingroom', icon:'🛋️', name:'客厅', desc:'现代简约客厅，浅色木地板，落地窗自然光，灰色布艺沙发旁' },
  { id:'bedroom', icon:'🛏️', name:'卧室', desc:'温馨卧室，暖色调墙面，实木床头柜，柔和的晨光从窗帘透入' },
  { id:'kitchen', icon:'🍳', name:'厨房', desc:'开放式现代厨房，白色大理石台面，深灰色橱柜，暖色射灯照明' },
  { id:'balcony', icon:'🌿', name:'阳台', desc:'半封闭阳台，白色瓷砖地面，绿植点缀，午后自然光线充足' },
  { id:'bathroom', icon:'🛁', name:'卫生间', desc:'现代简约卫生间，浅灰防滑地砖，白色洁具，柔和的镜前灯光' },
  { id:'studio', icon:'📸', name:'摄影棚白底', desc:'专业产品摄影棚，纯白无缝背景，柔光箱左右打光，产品悬浮展示' },
  { id:'office', icon:'💼', name:'办公室', desc:'现代办公空间，落地玻璃窗，简约办公家具，自然光+顶灯混合照明' },
  { id:'park', icon:'🌳', name:'城市公园', desc:'城市公园草坪，绿树成荫，远处现代建筑，晴好天气自然光束洒落' },
  { id:'rooftop', icon:'🏙️', name:'天台露台', desc:'高层屋顶露台，木质甲板地面，城市天际线背景，黄昏金色暖光' },
  { id:'garden', icon:'🌺', name:'私家花园', desc:'私家花园庭院，石板小径蜿蜒，花草环绕，斑驳阳光洒落藤架下' },
  { id:'cafe', icon:'☕', name:'文艺咖啡厅', desc:'复古工业风咖啡厅，裸露砖墙与铁艺灯具，暖黄钨丝灯光，吧台木质纹理' },
  { id:'hotel', icon:'🏨', name:'酒店大堂', desc:'五星级酒店大堂，大理石地面倒映水晶吊灯，金属质感前台，奢华氛围' },
  { id:'pool', icon:'🏊', name:'泳池边', desc:'室外无边泳池，水面波光粼粼，白色躺椅与遮阳伞，远处海天一色' },
  { id:'beach', icon:'🏖️', name:'海滩', desc:'热带白沙滩，碧蓝海水拍岸，棕榈树摇曳，金色夕阳余晖洒满沙滩' },
  { id:'snow', icon:'❄️', name:'雪景庭院', desc:'冬日庭院，白雪覆盖松枝，木屋暖黄灯光从窗户透出，静谧暖意' },
  { id:'space', icon:'🚀', name:'太空舱', desc:'未来感太空舱内部，全息投影控制面板，冷蓝色氛围灯带，窗外是浩瀚星云' },
  { id:'cyberpunk', icon:'🌃', name:'赛博朋克都市', desc:'霓虹灯闪烁的未来都市，湿漉漉的街道倒映全息广告，高耸摩天大楼，蓝紫色调' },
  { id:'library', icon:'📚', name:'古典书房', desc:'英式古典书房，深色橡木书柜满墙，皮革沙发，壁炉火光摇曳，暖色台灯' },
  { id:'greenhouse', icon:'🌿', name:'玻璃花房', desc:'维多利亚风格玻璃温室，藤蔓植物攀爬铁艺框架，斑驳阳光透过玻璃穹顶洒落' },
  { id:'mountain', icon:'⛰️', name:'雪山木屋', desc:'阿尔卑斯山间木屋，窗外白雪皑皑的雪山，壁炉里松木燃烧，温暖舒适的氛围' },
  { id:'museum', icon:'🏛️', name:'艺术展馆', desc:'现代艺术展馆，白色极简空间，射灯精准打光，大理石地板反射柔光' },
  { id:'subway', icon:'🚇', name:'未来地铁站', desc:'超现实未来地铁站，弧形金属穹顶，冷白LED灯带，全息广告屏幕闪烁' },
  { id:'desert', icon:'🏜️', name:'沙漠黄昏', desc:'金色沙漠沙丘起伏，夕阳巨大如盘悬挂地平线，长影子拉出戏剧性光影' },
  { id:'forest', icon:'🌲', name:'迷雾森林', desc:'晨雾缭绕的红杉森林，阳光穿透雾气形成丁达尔光束，苔藓覆盖的巨石旁' },
  { id:'underwater', icon:'🌊', name:'海底世界', desc:'深蓝海底，珊瑚礁五彩斑斓，阳光从水面折射成光柱，热带鱼群游过' },
  { id:'vintage', icon:'📻', name:'复古公寓', desc:'1920年代Art Deco风格公寓，几何图案壁纸，黄铜灯具与装饰，留声机旁温暖色调' },
  { id:'rain', icon:'🌧️', name:'雨夜街道', desc:'雨夜城市街角，霓虹灯在湿滑路面上映出倒影，玻璃窗上雨滴滑落，朦胧光晕' },
  { id:'factory', icon:'🏭', name:'工业厂房', desc:'Loft工业风空间，裸露红砖墙与钢结构，高挑空大窗自然光，混凝土地面' },
  { id:'japan', icon:'🏯', name:'日式庭院', desc:'枯山水禅意庭院，白沙耙纹环绕青苔石组，竹篱与枫树，静谧与侘寂之美' },
  { id:'custom', icon:'✏️', name:'自定义输入', desc:'自己输入任意场景描述' },
];

// 氛围数据
var MOODS = [
  { id:'warm', icon:'☀️', name:'温馨暖调', desc:'温暖的金色光线，柔和舒适的家居氛围' },
  { id:'clean', icon:'✨', name:'清爽干净', desc:'明亮的白色调，干净利落，一尘不染的清新感' },
  { id:'luxury', icon:'💎', name:'高端奢华', desc:'深色调背景，戏剧性金属灯光，高级质感' },
  { id:'natural', icon:'🌿', name:'自然清新', desc:'自然光线，绿色植物点缀，生机勃勃的户外感' },
  { id:'tech', icon:'🔮', name:'科技未来', desc:'冷色调灯光，蓝色氛围，未来科技感十足' },
  { id:'minimal', icon:'⬜', name:'极简主义', desc:'大量留白，极简构图，纯粹干净的高级感' },
  { id:'romantic', icon:'🌅', name:'浪漫黄昏', desc:'金色暮光穿透窗纱，温暖剪影，柔和浪漫' },
  { id:'morning', icon:'🌄', name:'清新早晨', desc:'清晨第一缕阳光，露珠微光，雾气朦胧，万物初醒' },
  { id:'storm', icon:'⛈️', name:'暴风雨前', desc:'乌云压顶，远处闪电微光，空气中有电的张力，戏剧性光影' },
  { id:'neon', icon:'💜', name:'霓虹迷幻', desc:'霓虹灯管发出的粉紫蓝光，赛博朋克氛围，朦胧而迷离' },
  { id:'cozy', icon:'🕯️', name:'温馨烛光', desc:'烛光摇曳，暗调温馨，柔和的橙色暖光，舒适亲密' },
  { id:'retro', icon:'📽️', name:'复古胶片', desc:'胶片颗粒质感，褪色暖调，略带过曝，怀旧电影感' },
  { id:'ethereal', icon:'🌌', name:'梦幻仙境', desc:'柔焦光晕，星尘粒子漂浮，蓝紫与粉色渐变，空灵飘渺' },
  { id:'cinematic', icon:'🎬', name:'电影史诗', desc:'宽银幕史诗感，戏剧性光影对比，大气磅礴的视觉张力' },
  { id:'custom', icon:'✏️', name:'自定义输入', desc:'自己输入任意氛围描述' },
];

// 模板数据
var TPL = [
  { id:1, name:'万能通用模板', short:'万能通用', icon:'✨', desc:'最常用，适配所有场景',
    boosters:['杰作级作品','最佳画质','超精细细节','极致逼真效果','8K超高清分辨率','锐利焦点','精妙细节呈现','电影级光影效果','景深表现','立体雾效','光线追踪技术','极度精细的高分辨率画面','照片级真实感'] },
  { id:2, name:'产品特写模板', short:'产品特写', icon:'📷', desc:'突出产品细节和质感',
    boosters:['超写实产品摄影','8K分辨率','微距镜头','逼真材质纹理','精细表面细节','清晰对焦','复杂细节处理','电影级光影','8K超高清画质','商业产品摄影风格'] },
  { id:3, name:'场景融入模板', short:'场景融入', icon:'🏠', desc:'产品融入家居环境',
    boosters:['真实家居环境','自然光线照明','温馨居家氛围','8K分辨率','极致精细画质','生活化场景构图','柔和散射光','浅景深虚化背景','专业室内摄影'] },
  { id:4, name:'商业广告模板', short:'商业广告', icon:'💎', desc:'广告大片风格，突出品牌感',
    boosters:['商业广告摄影','极具视觉冲击力','戏剧性灯光效果','8K超高清分辨率','专业影棚拍摄','锐利对焦','极致细节呈现','杂志级画质','高端品牌调性'] },
  { id:5, name:'悬浮展示模板', short:'悬浮展示', icon:'🪄', desc:'产品悬浮空中，极简背景',
    boosters:['产品悬浮漂浮','纯白无缝背景','360度展示','8K分辨率','8K HDR画质','焦点锐利','产品细节清晰可见','极简构图','商业白底图'] },
  { id:6, name:'电商主图模板', short:'电商主图', icon:'🛒', desc:'电商平台主图风格',
    boosters:['电商产品主图','白色背景','产品居中构图','8K产品级摄影','工作室级画质','清晰对焦','色彩还原准确','8K超高清画质','适合电商平台展示'] },
  { id:7, name:'8K分辨率词', short:'分辨率词', icon:'🔍', desc:'必加高权重分辨率词',
    boosters:['8K超高清','8K分辨率','细节极其丰富','超精细画质'] },
  { id:8, name:'画质增强词', short:'画质增强', icon:'🎨', desc:'极致提升效果',
    boosters:['杰作级作品','品质卓越','画面焦点清晰锐利','细节处理精妙细腻','高分辨率','电影级照明效果','景深表现力强','立体光照技术','光线追踪技术','真实感十足','超写实'] }
];

var STYLES = [
  { id:'realistic', name:'写实', icon:'📷' },
  { id:'product', name:'产品渲染', icon:'💎' },
  { id:'minimal', name:'极简白底', icon:'⬜' },
  { id:'luxury', name:'高端奢华', icon:'👑' },
  { id:'natural', name:'自然家居', icon:'🌿' },
  { id:'cinematic', name:'电影级', icon:'🎬' },
  { id:'cyberpunk', name:'赛博朋克', icon:'🌃' },
  { id:'fantasy', name:'奇幻风格', icon:'🧙' },
  { id:'retro', name:'复古胶片', icon:'📽️' },
  { id:'japan', name:'日式侘寂', icon:'🏯' },
  { id:'vintage', name:'Art Deco', icon:'📻' },
  { id:'industrial', name:'工业风', icon:'🏭' },
];

var RATIOS = [
  { v:'1:1', l:'1:1 (电商主图)' },
  { v:'3:4', l:'3:4 (详情页)' },
  { v:'16:9', l:'16:9 (宽屏)' },
  { v:'9:16', l:'9:16 (手机)' },
  { v:'4:3', l:'4:3 (经典)' },
  { v:'2:3', l:'2:3 (海报)' },
];

var OPT_BOOSTERS = ['8K超高清分辨率','8K UHD画质','电影级HDR色调映射','照片级真实感渲染','光线追踪全局光照','物理精确材质','超精细纹理细节','专业级色彩分级','极致清晰度与锐度'];

// ===== 状态 =====
var state = {
  selected: [1,6,7,8],
  style: 'product',
  ratio: '1:1',
  category: '',
  productType: '',
  scene: '',
  mood: '',
  customProduct: '',
  customScene: '',
  customMood: '',
  prompt: '',
  optimized: false,
  history: JSON.parse(localStorage.getItem('haiyi_prompt_hist') || '[]')
};

// ===== 导航 =====
function showPage(p) {
  document.querySelectorAll('.page').forEach(function(el){ el.classList.remove('active'); });
  document.querySelectorAll('.nav-link').forEach(function(el){ el.classList.remove('active'); });
  var pageEl = document.getElementById('page-'+p);
  var navEl = document.getElementById('nav-'+p);
  if(pageEl) pageEl.classList.add('active');
  if(navEl) navEl.classList.add('active');
  window.scrollTo(0,0);
  if(p==='gallery') renderGallery();
  if(p==='create') renderCreate();
}

// ===== 渲染 =====
function renderCreate() {
  renderCategoryOptions();
  renderTemplates();
  renderStyleTags();
  renderRatioTags();
  renderSceneOptions();
  renderMoodOptions();
}

// 品类选择
function renderCategoryOptions() {
  var el = document.getElementById('category-options');
  el.innerHTML = PRODUCT_CATEGORIES.map(function(c){
    var sel = state.category === c.id;
    return '<span class="tag'+(sel?' active':'')+'" onclick="selectCategory(\''+c.id+'\')">'+c.icon+' '+c.name+'</span>';
  }).join('');
  
  // 显示具体型号选择
  var typesEl = document.getElementById('type-options-row');
  var detailEl = document.getElementById('type-detail');
  
  if(state.category === 'custom') {
    typesEl.innerHTML = '';
    typesEl.style.display = 'none';
    document.getElementById('custom-product-row').style.display = 'block';
    detailEl.innerHTML = '<div style="padding:8px;background:rgba(124,58,237,0.06);border-radius:8px;font-size:12px;color:var(--text2)">✏️ 自定义产品 — 在下方输入产品描述</div>';
  } else if(state.category) {
    renderTypeOptions();
    typesEl.style.display = 'block';
    document.getElementById('custom-product-row').style.display = 'none';
  } else {
    typesEl.innerHTML = '<div style="padding:12px;color:var(--text3);font-size:13px">👆 请先选择产品品类</div>';
    typesEl.style.display = 'block';
    document.getElementById('custom-product-row').style.display = 'none';
    detailEl.innerHTML = '';
  }
}

// 具体型号选择
function renderTypeOptions() {
  var typesEl = document.getElementById('type-options-row');
  var types = [];
  switch(state.category) {
    case 'fridge': types = FRIDGE_TYPES; break;
    case 'ac': types = AC_TYPES; break;
    case 'washer': types = WASHER_TYPES; break;
    case 'hood': types = HOOD_TYPES; break;
    case 'tv': types = TV_TYPES; break;
    case 'water': types = WATER_TYPES; break;
    case 'dish': types = DISH_TYPES; break;
    default: types = [];
  }
  
  if(types.length === 0) {
    typesEl.innerHTML = '<div style="padding:12px;color:var(--text3);font-size:13px">该品类暂无细化选项，请使用自定义输入</div>';
    return;
  }
  
  typesEl.innerHTML = '<div style="display:flex;flex-wrap:wrap;gap:6px">'+types.map(function(t){
    var sel = state.productType === t.id;
    return '<span class="tag'+(sel?' active':'')+'" onclick="selectType(\''+t.id+'\')" style="font-size:12px;padding:8px 12px">'+t.name+'</span>';
  }).join('')+'</div>';
  
  // 显示选中详情
  if(state.productType) {
    var selected = types.find(function(t){ return t.id === state.productType; });
    if(selected) {
      document.getElementById('type-detail').innerHTML = 
        '<div style="padding:12px;background:rgba(124,58,237,0.06);border-radius:8px;font-size:12px;color:var(--text2);line-height:1.8">'+
        '<b>'+selected.name+'</b><br>'+
        selected.desc+'<br>'+
        '<span style="color:var(--violet2)">规格：'+selected.size+' / '+selected.capacity+' / '+selected.power+'</span><br>'+
        '<span style="color:var(--text3)">尺寸：'+selected.dims+'</span>'+
        '</div>';
    }
  } else {
    document.getElementById('type-detail').innerHTML = '';
  }
}

function selectCategory(id) {
  state.category = id;
  state.productType = '';
  renderCategoryOptions();
  generatePrompt(false);
}

function selectType(id) {
  state.productType = id;
  renderTypeOptions();
  generatePrompt(false);
}

function updateCustomProduct() {
  state.customProduct = document.getElementById('inp-custom-product').value;
  generatePrompt(false);
}

// 场景选择
function renderSceneOptions() {
  document.getElementById('scene-options').innerHTML = SCENES.map(function(s){
    var sel = state.scene === s.id;
    return '<span class="tag'+(sel?' active':'')+'" onclick="selectScene(\''+s.id+'\')">'+s.icon+' '+s.name+'</span>';
  }).join('');
  
  if(state.scene === 'custom') {
    document.getElementById('custom-scene-row').style.display = 'block';
  } else {
    document.getElementById('custom-scene-row').style.display = 'none';
  }
}

function selectScene(id) {
  state.scene = id;
  if(id !== 'custom') state.customScene = '';
  renderSceneOptions();
  generatePrompt(false);
}

function updateCustomScene() {
  state.customScene = document.getElementById('inp-custom-scene').value;
  generatePrompt(false);
}

// 氛围选择
function renderMoodOptions() {
  document.getElementById('mood-options').innerHTML = MOODS.map(function(m){
    var sel = state.mood === m.id;
    return '<span class="tag'+(sel?' active':'')+'" onclick="selectMood(\''+m.id+'\')">'+m.icon+' '+m.name+'</span>';
  }).join('');
  
  if(state.mood === 'custom') {
    document.getElementById('custom-mood-row').style.display = 'block';
  } else {
    document.getElementById('custom-mood-row').style.display = 'none';
  }
}

function selectMood(id) {
  state.mood = state.mood === id ? '' : id;
  if(id !== 'custom') state.customMood = '';
  renderMoodOptions();
  generatePrompt(false);
}

function updateCustomMood() {
  state.customMood = document.getElementById('inp-custom-mood').value;
  generatePrompt(false);
}

// 模板/风格/比例渲染
function renderTemplates() {
  document.getElementById('tpl-list').innerHTML = TPL.map(function(t){
    var sel = state.selected.indexOf(t.id) >= 0;
    var isQ = t.id===7 || t.id===8;
    return '<div class="tpl-item'+(sel?' selected':'')+'" onclick="toggleTpl('+t.id+')" style="'+(isQ?'opacity:0.85':'')+'">'+
      '<div style="display:flex;align-items:flex-start;gap:8px">'+
      '<span style="font-size:18px">'+t.icon+'</span>'+
      '<div><div class="name">#'+t.id+' '+t.short+(isQ?' <span style="font-size:10px;padding:2px 6px;border-radius:4px;background:rgba(6,214,160,0.1);color:#06D6A0">推荐</span>':'')+'</div>'+
      '<div class="desc">'+t.desc+'</div>'+
      (sel?'<div style="margin-top:6px;font-size:10px;color:rgba(124,58,237,0.7)">'+t.boosters.length+'个增强词</div>':'')+
      '</div></div></div>';
  }).join('');
}

function renderStyleTags() {
  document.getElementById('style-tags').innerHTML = STYLES.map(function(s){
    return '<span class="tag'+(state.style===s.id?' active':'')+'" onclick="setStyle(\''+s.id+'\')">'+s.icon+' '+s.name+'</span>';
  }).join('');
}

function renderRatioTags() {
  document.getElementById('ratio-tags').innerHTML = RATIOS.map(function(r){
    return '<span class="tag'+(state.ratio===r.v?' active':'')+'" onclick="setRatio(\''+r.v+'\')">'+r.l+'</span>';
  }).join('');
}

function toggleTpl(id) { var idx=state.selected.indexOf(id); idx>=0?state.selected.splice(idx,1):state.selected.push(id); renderTemplates(); generatePrompt(false); }
function selectAllTpl() { state.selected=[1,2,3,4,5,6,7,8]; renderTemplates(); generatePrompt(false); }
function deselectAllTpl() { state.selected=[]; renderTemplates(); generatePrompt(false); }
function setStyle(id) { state.style=id; renderStyleTags(); generatePrompt(false); }
function setRatio(v) { state.ratio=v; renderRatioTags(); generatePrompt(false); }

// ===== 生成提示词 =====
function generatePrompt(opt) {
  var selected = TPL.filter(function(t){ return state.selected.indexOf(t.id)>=0; });
  if(!selected.length){ state.prompt=''; state.optimized=false; renderPrompt(); return; }
  
  var boosters = [];
  selected.forEach(function(t){ boosters = boosters.concat(t.boosters); });
  var seen = {};
  boosters = boosters.filter(function(b){ return seen[b] ? false : (seen[b]=true); });
  
  var parts = [];
  
  // 主体描述
  if(state.category === 'custom') {
    if(state.customProduct) parts.push(state.customProduct);
  } else if(state.category) {
    var cat = PRODUCT_CATEGORIES.find(function(c){ return c.id===state.category; });
    if(cat) {
      // 查找具体型号
      var types = [];
      switch(state.category) {
        case 'fridge': types = FRIDGE_TYPES; break;
        case 'ac': types = AC_TYPES; break;
        case 'washer': types = WASHER_TYPES; break;
        case 'hood': types = HOOD_TYPES; break;
        case 'tv': types = TV_TYPES; break;
        case 'water': types = WATER_TYPES; break;
        case 'dish': types = DISH_TYPES; break;
      }
      var type = types.find(function(t){ return t.id===state.productType; });
      if(type) {
        parts.push(cat.icon+' '+type.name+'：'+type.desc+'，'+type.size+type.capacity+type.power+'，尺寸'+type.dims);
      } else {
        parts.push(cat.icon+' '+cat.name+'：'+cat.desc);
      }
    }
  }
  
  // 场景
  if(state.scene === 'custom') {
    if(state.customScene) parts.push('场景：'+state.customScene);
  } else if(state.scene) {
    var s = SCENES.find(function(x){ return x.id===state.scene; });
    if(s) parts.push('场景：'+s.desc);
  }
  
  // 氛围
  if(state.mood === 'custom') {
    if(state.customMood) parts.push('氛围：'+state.customMood);
  } else if(state.mood) {
    var m = MOODS.find(function(x){ return x.id===state.mood; });
    if(m) parts.push('氛围：'+m.desc);
  }
  
  // 增强词
  if(boosters.length) parts.push(boosters.join('，'));
  if(opt) parts.push(OPT_BOOSTERS.join('，'));
  parts.push('宽高比 '+state.ratio);
  
  state.prompt = parts.join('\n\n');
  state.optimized = opt;
  renderPrompt();
}

function renderPrompt() {
  var el = document.getElementById('prompt-area');
  if(!state.prompt) {
    el.innerHTML = '<div class="prompt-placeholder">请先选择产品品类和型号 ⬆️<br><br>选择品类 → 型号 → 场景 → 点击「生成」</div>';
    document.getElementById('prompt-chars').textContent = '';
    return;
  }
  el.innerHTML = '<textarea class="prompt-edit" id="prompt-editor" oninput="updatePromptFromEditor()">'+escapeHtml(state.prompt)+'</textarea>';
  document.getElementById('prompt-chars').textContent = state.prompt.length+' 字符';
}

function updatePromptFromEditor() {
  var editor = document.getElementById('prompt-editor');
  if(editor) {
    state.prompt = editor.value;
    document.getElementById('prompt-chars').textContent = state.prompt.length+' 字符';
  }
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function copyPrompt() {
  if(!state.prompt) return;
  navigator.clipboard.writeText(state.prompt).then(function(){
    showToast('✅ 已复制提示词！');
  }).catch(function(){
    showToast('复制失败，请手动选择文本后复制');
  });
}

function clearPrompt() {
  state.prompt = '';
  state.optimized = false;
  renderPrompt();
}

function savePrompt() {
  if(!state.prompt) return;
  var entry = {
    id: Date.now().toString(36),
    prompt: state.prompt,
    ratio: state.ratio,
    createdAt: Date.now()
  };
  state.history.unshift(entry);
  if(state.history.length > 50) state.history = state.history.slice(0,50);
  localStorage.setItem('haiyi_prompt_hist', JSON.stringify(state.history));
  showToast('✅ 已保存到画廊！');
}

// ===== 画廊 =====
function renderGallery() {
  var el = document.getElementById('gallery-grid');
  var h = state.history;
  if(!h.length) {
    el.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:80px 20px"><div style="font-size:64px;margin-bottom:16px">📝</div><h3>还没有保存的提示词</h3><p style="color:var(--text3);margin:12px 0 20px">前往创作页面生成提示词并保存</p><button class="btn btn-primary" onclick="showPage(\'create\')">✨ 开始创作</button></div>';
    return;
  }
  el.innerHTML = h.map(function(e){
    return '<div class="gallery-card" onclick="viewDetail(\''+e.id+'\')"><div class="prompt" style="padding:16px;min-height:80px">'+e.prompt.slice(0,120)+'...</div><div style="font-size:10px;color:var(--text3);padding:0 16px 12px">'+new Date(e.createdAt).toLocaleString('zh-CN')+' · '+e.ratio+'</div></div>';
  }).join('');
}

function viewDetail(id) {
  var e = state.history.find(function(x){ return x.id===id; });
  if(!e) return;
  var div = document.createElement('div');
  div.style.cssText = 'position:fixed;inset:0;z-index:200;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;padding:20px';
  div.innerHTML = '<div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;max-width:700px;width:100%;max-height:80vh;overflow-y:auto;padding:20px"><div style="display:flex;gap:12px;font-size:11px;color:var(--text3);margin-bottom:12px"><span>'+e.ratio+'</span><span>'+new Date(e.createdAt).toLocaleString('zh-CN')+'</span></div><textarea style="width:100%;background:rgba(0,0,0,0.3);border:1px solid var(--border);border-radius:10px;padding:14px;min-height:160px;font-size:13px;line-height:1.8;color:var(--text);font-family:inherit;resize:vertical;outline:none;margin-bottom:12px" readonly>'+e.prompt+'</textarea><div style="display:flex;gap:8px"><button class="btn" style="padding:6px 12px;font-size:12px" onclick="copyText(\''+escapeJs(e.prompt)+'\')">📋 复制</button><button class="btn" style="padding:6px 12px;font-size:12px;color:#EF4444" onclick="deleteHist(\''+e.id+'\')">🗑️ 删除</button></div></div>';
  document.body.appendChild(div);
  div.addEventListener('click',function(ev){ if(ev.target===div) div.remove(); });
}

function escapeJs(str) {
  return str.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,'\\n');
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(function(){
    showToast('✅ 已复制！');
  }).catch(function(){
    showToast('复制失败');
  });
}

function deleteHist(id) { state.history=state.history.filter(function(e){ return e.id!==id; }); localStorage.setItem('haiyi_prompt_hist',JSON.stringify(state.history)); renderGallery(); }

// ===== TOAST =====
function showToast(msg) {
  var t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--surface);border:1px solid var(--border);padding:10px 20px;border-radius:10px;font-size:13px;z-index:999;animation:toastIn 0.3s ease';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function(){ t.remove(); }, 2000);
}

// ===== 初始化 =====
(function(){
  showPage('home');
  renderCreate();
  renderGallery();
})();
