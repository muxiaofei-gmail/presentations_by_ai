/**
 * 产品数据配置
 * 电视产品展示
 */
import type { Product } from '@/shared/product-card'

export const products: Product[] = [
  {
    id: 'vidda-x-mini',
    brand: 'Vidda',
    model: 'X Mini',
    imageUrl: 'https://s41.ax1x.com/2026/03/04/pe9YFJA.md.png',
    price: {
      regularPrice: 6719,
      salePrice: 4974
    },
    specs: [
      { name: '峰值亮度', value: '1300尼特' },
      { name: '背光分区数量', value: '352个' },
      { name: '色域范围', value: '96%DCI-P3' },
      { name: '刷新率', value: '最高300Hz(原生4K150Hz)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '120W峰值功率, 2.1多声道+独立低音炮+帝瓦雷调音' },
      { name: '接口规格', value: 'HDMI2.1满血口2个' },
      { name: '是否有开机广告', value: '有' }
    ],
    pros: [
      { text: 'QD-MiniLED色彩鲜艳通透' },
      { text: '帝瓦雷120W音响低音震撼' },
      { text: '300Hz超高刷新率游戏丝滑' }
    ],
    cons: [
      { text: '352个背光分区控光能力入门' },
      { text: 'HDMI接口仅两路满血非全系' },
      { text: '塑料边框质感不如全金属旗舰' }
    ],
    targetAudience: '特别推荐给**预算吃紧但又想在大屏上玩游戏的网游玩家**，独有的300Hz高刷模式配合FreeSync认证，玩游戏的流畅度简直是物理外挂',
    source: '四正讲家电'
  },
  {
    id: 'skyworth-85a4f-pro',
    brand: '创维电视',
    model: '85A4F Pro',
    imageUrl: 'https://s41.ax1x.com/2026/03/04/pe9Yiid.md.png',
    price: {
      regularPrice: 6248,
      salePrice: 4979
    },
    specs: [
      { name: '峰值亮度', value: '400-600尼特' },
      { name: '背光分区数量', value: '100-200级' },
      { name: '色域范围', value: '130% sRGB(96%DCI-P3)' },
      { name: '刷新率', value: '144Hz(原生)/240Hz(HSR倍频)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '10个声学单元, 峰值功率150W' },
      { name: '接口规格', value: 'HDMI2.1×2(满血)' },
      { name: '是否有开机广告', value: '有' }
    ],
    pros: [
      { text: '同级唯一低反屏白天不反光' },
      { text: '支持144Hz高刷适配PS5主机' },
      { text: '送原厂超薄挂架贴墙更美观' }
    ],
    cons: [
      { text: '百级背光分区控光能力一般' },
      { text: '峰值亮度仅600尼特不够亮' },
      { text: '硬屏原生对比度不如VA软屏' }
    ],
    targetAudience: '特别推荐给**家里客厅采光极好、拥有大落地窗的家庭**，它的极黑低反屏能有效抑制环境光反射，让你白天看电视不再像照镜子。同时也非常适合**追求家居美感但不希望墙面太厚的用户**，美观度远超同价位竞品',
    source: '四正讲家电'
  },
  {
    id: 'leiniao-he6-26',
    brand: '雷鸟电视',
    model: '鹤6 26款',
    imageUrl: 'https://s41.ax1x.com/2026/03/04/pe9YCIH.md.png',
    price: {
      regularPrice: 6498,
      salePrice: 5173
    },
    specs: [
      { name: '峰值亮度', value: '1300尼特(XDR)' },
      { name: '背光分区数量', value: '420个' },
      { name: '色域范围', value: '96% DCI-P3(量子点广色域)' },
      { name: '刷新率', value: '原生4K144Hz(DLG可达288Hz)' },
      { name: '内存组合', value: '3GB+64GB' },
      { name: '音响', value: '2.1声道(2×10W + 20W低音炮), 总功率50W' },
      { name: '接口规格', value: 'HDMI2.1×4(2个满血)' },
      { name: '是否有开机广告', value: '无' }
    ],
    pros: [
      { text: 'VA屏加分区，黑位深邃不发灰' },
      { text: '开机无广告，系统清爽像手机' },
      { text: '原生支持NAS影音海报墙直读' }
    ],
    cons: [
      { text: '仅3G运存多任务切换略显吃力' },
      { text: '侧看会偏色多人观影体验一般' }
    ],
    targetAudience: '特别推荐给**追求高性价比影院级画质的影音爱好者**，420万象分区+7000:1高对比屏，搭配无开机广告的灵控系统和安桥音响，低成本享受沉浸观影',
    source: '四正讲家电'
  },
  {
    id: 'huawei-vision-5-se',
    brand: '华为Vision智慧屏',
    model: '5 SE',
    imageUrl: 'https://s41.ax1x.com/2026/03/04/pe9YpZD.md.png',
    price: {
      regularPrice: 7199,
      salePrice: 5263
    },
    specs: [
      { name: '峰值亮度', value: '1000尼特' },
      { name: '背光分区数量', value: '/' },
      { name: '色域范围', value: '130%BT.709(93%DCI-P3)' },
      { name: '刷新率', value: '240Hz(需开启高刷模式/倍频)' },
      { name: '内存组合', value: '3GB(可拓展至4GB)+64GB' },
      { name: '音响', value: '2.1声道(带低音单元)' },
      { name: '接口规格', value: 'HDMI2.1×2(支持ALLM/VRR)' },
      { name: '是否有开机广告', value: '有' }
    ],
    pros: [
      { text: '4K超级投屏' },
      { text: '标配AI摄像头支持畅连通话' },
      { text: '德国莱茵双重护眼更适合孩子' }
    ],
    cons: [
      { text: '物理运存3G并非原生4G' },
      { text: '色域标准BT.709略显过时' }
    ],
    targetAudience: '特别推荐给**华为手机全家桶用户**，一碰投屏和4K超级投屏功能能让你轻松看4K，手机生态无缝上墙。同时也适合**家里有老人小孩、需要远程看护的家庭**，AI摄像头带来的畅连通话和坐姿提醒功能',
    source: '四正讲家电'
  },
  {
    id: 'xiaomi-tv-s85',
    brand: '小米电视',
    model: 'S85',
    imageUrl: 'https://s41.ax1x.com/2026/03/04/pe9Y9de.md.png',
    price: {
      regularPrice: 6599,
      salePrice: 5278
    },
    specs: [
      { name: '峰值亮度', value: '1200尼特' },
      { name: '背光分区数量', value: '640个' },
      { name: '色域范围', value: '95%DCI-P3' },
      { name: '刷新率', value: '144Hz(原生)/240Hz(竞技模式)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '4单元立体声系统' },
      { name: '接口规格', value: 'HDMI2.1×2(满血)' },
      { name: '是否有开机广告', value: '有' }
    ],
    pros: [
      { text: '640分区背光黑位表现出色' },
      { text: '1200尼特峰值亮度画面通透' },
      { text: '澎湃OS系统智能家居联动强' }
    ],
    cons: [
      { text: '四单元音响低音效果比较单薄' },
      { text: '色准DeltaE约等于2表现平平' }
    ],
    targetAudience: '特别推荐给**米粉们**，澎湃OS的互联体验能让你把电视当作全屋智能的控制中心。也适合**预算有限但想体验Mini LED画质的主机玩家**，144Hz高刷配合Wi-Fi 6，无论是打游戏还是看流媒体都能获得流畅不卡顿的越级体验。',
    source: '四正讲家电'
  },
  {
    id: 'tcl-85t6l-pro',
    brand: 'TCL电视',
    model: '85T6L Pro',
    imageUrl: 'https://s41.ax1x.com/2026/03/04/pe9YAzt.md.png',
    price: {
      regularPrice: 6749,
      salePrice: 5377
    },
    specs: [
      { name: '峰值亮度', value: '1300尼特(XDR)' },
      { name: '背光分区数量', value: '420个' },
      { name: '色域范围', value: '96% DCI-P3' },
      { name: '刷新率', value: '4K144Hz(原生)/288Hz(T-HRR倍频)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '安桥2.1声道Hi-Fi(带独立低音炮)' },
      { name: '接口规格', value: 'HDMI2.1×2(满血)' },
      { name: '是否有开机广告', value: '无' }
    ],
    pros: [
      { text: '无开机广告秒开机体验极佳' },
      { text: '华星HVA屏原生对比度极高' },
      { text: '安桥2.1音响自带独立低音炮' }
    ],
    cons: [
      { text: '420个背光分区数量仅属入门' },
      { text: 'VA软屏侧面观看色彩有衰减' }
    ],
    targetAudience: '特别推荐给**极度讨厌开机广告、追求纯净体验的保守派用户**，灵控桌面像手机一样秒开即用，没有任何废话干扰。同时也适合**喜欢关灯沉浸式看电影的影迷**，华星HVA屏带来的7000:1高原生对比度，能让暗场画面黑得下去，配合安桥音响，氛围感直接拉满。',
    source: '四正讲家电'
  },
  {
    id: 'skyworth-a5f-pro',
    brand: '创维电视',
    model: '黑骑士A5F Pro',
    imageUrl: 'https://s41.ax1x.com/2026/03/04/pe9YZsf.md.png',
    price: {
      regularPrice: 7873,
      salePrice: 6273
    },
    specs: [
      { name: '峰值亮度', value: '1800尼特(XDR)' },
      { name: '背光分区数量', value: '1056分区' },
      { name: '色域范围', value: '99%DCI-P3(六元蓝光量子点)' },
      { name: '刷新率', value: '300Hz(需开启高刷模式)/芯片支持330Hz解码' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '内置4.2声道回音壁, 12单元, 峰值功率200W(哈曼联合调音)' },
      { name: '接口规格', value: 'HDMI 2.1×3(满血)' },
      { name: '是否有开机广告', value: '无' }
    ],
    pros: [
      { text: '雾面类纸屏白天观看无反光' },
      { text: '千级分区加高亮度画质通透' },
      { text: '内置4.2声道回音壁音效震撼' }
    ],
    cons: [
      { text: '机身厚度近8厘米侧看显厚重' },
      { text: '雾面屏暗室通透感略逊镜面屏' }
    ],
    targetAudience: '特别推荐给**深受反光困扰、且不想折腾外接音响的懒人用户**，哑光类纸屏能彻底解决白天反光痛点，内置的4.2声道回音壁则省去了布线的烦恼。同时也适合**长时间观看电视的护眼需求人群**，无频闪和防蓝光认证配合柔和的雾面屏能最大程度降低视觉疲劳。',
    source: '四正讲家电'
  },
  {
    id: 'leiniao-he6-ultra-25',
    brand: '雷鸟电视',
    model: '鹤6 Ultra 25款',
    imageUrl: 'https://s41.ax1x.com/2026/03/04/pe9YkRI.md.png',
    price: {
      regularPrice: 7874,
      salePrice: 6274
    },
    specs: [
      { name: '峰值亮度', value: '2000尼特(XDR)' },
      { name: '背光分区数量', value: '1040个' },
      { name: '色域范围', value: '96%DCI-P3' },
      { name: '刷新率', value: '4K144Hz(原生)/288Hz(动态加速)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '2.1.2声道(5单元, 独立天空声道+20W低音炮)' },
      { name: '接口规格', value: 'HDMI2.1×4(四路满血)' },
      { name: '是否有开机广告', value: '无开机广告(灵控桌面)' }
    ],
    pros: [
      { text: '四路满血HDMI2.1接口' },
      { text: '7000比1高对比度黑位深邃' },
      { text: '0.5%低反膜白天观影不泛白' }
    ],
    cons: [
      { text: 'VA软屏侧看可视角度相对较窄' },
      { text: '底座间距过宽对电视柜要求高' }
    ],
    targetAudience: '特别推荐给**拥有PS5、Xbox和PC等多台设备的重度游戏玩家**，同价位极为罕见的4路满血HDMI 2.1接口，让你从此告别频繁拔插换线的噩梦。同时也适合**精打细算的参数党**，在6000元价位段就能给到你2000尼特亮度和千级分区，每一分钱都花在了刀刃上，性价比极高。',
    source: '四正讲家电'
  },
  {
    id: 'vidda-faxian-x-2026',
    brand: 'Vidda',
    model: '发现X 2026款',
    imageUrl: 'https://s41.ax1x.com/2026/03/04/pe9YVQP.md.png',
    price: {
      regularPrice: 7874,
      salePrice: 6274
    },
    specs: [
      { name: '峰值亮度', value: '2000尼特(XDR)' },
      { name: '背光分区数量', value: '1280个' },
      { name: '色域范围', value: '98% DCI-P3(蓝光量子点)' },
      { name: '刷新率', value: '4K150Hz (原生) / 300Hz (倍频/高刷模式)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '2.1.2声道(帝瓦雷联合调校, 独立低音炮)峰值功率180W' },
      { name: '接口规格', value: 'HDMI2.1×4(四路满血)' },
      { name: '是否有开机广告', value: '含开机广告' }
    ],
    pros: [
      { text: '墨晶屏双层抗反光白天更清晰' },
      { text: '四路满血HDMI2.1接口' },
      { text: '原生150Hz高刷适配高帧游戏' }
    ],
    cons: [
      { text: '系统含开机广告体验不够清爽' },
      { text: '底座间距过宽对电视柜有要求' }
    ],
    targetAudience: '特别推荐给**追求极致游戏体验的年轻租房党或学生党**，原生150Hz高刷配合4路满血接口，能把电竞显示器的体验搬到85寸大屏上。同时也适合**对音质有较高要求的低音爱好者**，帝瓦雷联合调校的独立低音炮，让你在打枪战游戏或看动作片时，能切身感受到"拳拳到肉"的轰鸣感。',
    source: '四正讲家电'
  },
  {
    id: 'huawei-vision-5',
    brand: '华为',
    model: 'Vision智慧屏 5',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCyFC6.md.png',
    price: {
      regularPrice: 8499,
      salePrice: 6799
    },
    specs: [
      { name: '峰值亮度', value: '800-1100尼特' },
      { name: '背光分区数量', value: '百级分区' },
      { name: '色域范围', value: '94%DCI-P3' },
      { name: '刷新率', value: '288Hz(倍频实现)' },
      { name: '内存组合', value: '4GB(6GB体验)+64GB' },
      { name: '音响', value: '2.1声道, 峰值功率90W(含独立低音单元)' },
      { name: '接口规格', value: 'HDMI2.1×3(满血)' },
      { name: '是否有开机广告', value: '含开机广告' }
    ],
    pros: [
      { text: '灵犀遥控指哪点哪交互革命' },
      { text: '超薄机身零贴墙设计颜值高' },
      { text: '三路满血HDMI2.1接口配置' }
    ],
    cons: [
      { text: '默认含开机广告体验不纯净' },
      { text: '85寸背光分区数量含糊未标' }
    ],
    targetAudience: '特别推荐给**习惯像刷手机一样刷电视的新潮用户和华为粉**，灵犀指向遥控器带来的"指哪点哪"交互方式，刷短视频和玩休闲游戏的体验在电视圈是独一份的。同时也适合**对客厅装修品味有极高要求的颜值党**，4.9cm的超薄机身配合零贴墙设计，能瞬间提升你家客厅的科技感和档次感。',
    source: '四正讲家电'
  },
  {
    id: 'leiniao-85he7-pro',
    brand: '雷鸟电视',
    model: '85鹤7 PRO',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCyP4x.png',
    price: {
      regularPrice: 8999,
      salePrice: 7170
    },
    specs: [
      { name: '峰值亮度', value: '4200尼特(XDR)' },
      { name: '背光分区数量', value: '2448个' },
      { name: '色域范围', value: '98%DCI-P3(量子点广色域)' },
      { name: '刷新率', value: '4K144Hz(原生)/288Hz(动态加速)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '2.1.2声道(5单元), 峰值功率80W(20W低音炮+独立天空声道)' },
      { name: '接口规格', value: 'HDMI2.1×4(四路满血)' },
      { name: '是否有开机广告', value: '无开机广告(灵控桌面)' }
    ],
    pros: [
      { text: '四路满血HDMI2.1接口' },
      { text: '4200尼特高亮度HDR效果炸裂' },
      { text: '2448分区控光精细黑位深邃' }
    ],
    cons: [
      { text: 'VA软屏侧面观看可视角度受限' },
      { text: '机身厚度5.8厘米不算极致薄' }
    ],
    targetAudience: '特别推荐给**追求极致HDR爆发力、喜欢看特效大片的硬核影迷**，4200尼特的峰值亮度能真实还原爆炸、阳光等高光场景，带来刺眼般的真实感。同时也适合**NAS玩家和高清资源收藏家**，系统自带的极速播放器和海报墙功能，能完美解码你硬盘里的各种高码率蓝光原盘。',
    source: '四正讲家电'
  },
  {
    id: 'skyworth-a6f-pro-plus',
    brand: '创维电视',
    model: 'A6F Pro+',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCyk8K.md.png',
    price: {
      regularPrice: 9123,
      salePrice: 7269
    },
    specs: [
      { name: '峰值亮度', value: '4000尼特(XDR)' },
      { name: '背光分区数量', value: '3600分区' },
      { name: '色域范围', value: '99%DCI-P3(六元蓝光量子点)' },
      { name: '刷新率', value: '300Hz(动态刷新率)/芯片支持330Hz解码' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '7.1.2声道(哈曼联合调校), 12单元, 峰值功率200W' },
      { name: '接口规格', value: 'HDMI2.1×3(满血)' },
      { name: '是否有开机广告', value: '无开机广告' }
    ],
    pros: [
      { text: '3600分区控光精细度极高' },
      { text: '4000尼特亮度HDR爆发力强' },
      { text: '类纸屏白天观看完全不反光' }
    ],
    cons: [
      { text: '雾面屏暗室通透感略逊镜面' },
      { text: 'ADS硬屏原生对比度不如VA' }
    ],
    targetAudience: '特别推荐给**想要家庭影院效果但不想破坏装修布线的用户**，内置的7.1.2声道哈曼回音壁拥有200瓦超大功率，无需外接设备就能获得震撼的天空音效。同时也适合**家里采光极其复杂的开放式客厅**，极黑广角类纸屏能保证在任何光线条件下，画面都清晰无反光，多人围坐观看也不偏色。',
    source: '四正讲家电'
  },
  {
    id: 'hisense-xiaomo-e5q-pro',
    brand: '海信',
    model: '小墨E5Q Pro',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCyCU1.png',
    price: {
      regularPrice: 9124,
      salePrice: 7270
    },
    specs: [
      { name: '峰值亮度', value: '2200尼特(XDR Pro)' },
      { name: '背光分区数量', value: '1248分区' },
      { name: '色域范围', value: '98%DCI-P3(10.7亿色)' },
      { name: '刷新率', value: '4K150Hz(原生)/300Hz(系统级高刷)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '2.1.2声道(帝瓦雷联合调校), 77W功率, 独立低音炮' },
      { name: '接口规格', value: 'HDMI 2.1×2(满血48Gbps)' },
      { name: '是否有开机广告', value: '含开机广告' }
    ],
    pros: [
      { text: '墨晶屏抗反光白天观看清晰' },
      { text: 'ADSPro广视角侧看不偏色' },
      { text: '帝瓦雷2.1.2音响低音震撼' }
    ],
    cons: [
      { text: '含开机广告体验不够纯净' },
      { text: '硬屏暗室对比度不如VA软屏' }
    ],
    targetAudience: '特别推荐给**家庭成员较多、经常一家人围坐看电视的大家庭**，ADS Pro硬屏的广视角特性，能确保坐在沙发边缘的家人也能看到色彩不泛白的清晰画面。同时也适合**对语音交互有高频需求的用户**，接入DeepSeek大模型后的语音助手更加聪明，老人小孩随便说两句它都能听懂并精准执行。',
    source: '四正讲家电'
  },
  {
    id: 'tcl-85t7l-ultra',
    brand: 'TCL电视',
    model: '85T7L Ultra',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCyEvD.md.png',
    price: {
      regularPrice: 9374,
      salePrice: 7499
    },
    specs: [
      { name: '峰值亮度', value: '3000尼特(XDR)' },
      { name: '背光分区数量', value: '1568个' },
      { name: '色域范围', value: '98%DCI-P3(量子点Pro 2025)' },
      { name: '刷新率', value: '4K144Hz(原生)/288Hz(倍频技术)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '安桥2.1.2声道Hi-Fi(5单元, 独立天空声道+低音炮)' },
      { name: '接口规格', value: 'HDMI2.1×4(四路满血)' },
      { name: '是否有开机广告', value: '无开机广告(灵控系统3.0)' }
    ],
    pros: [
      { text: '1568分区加3000尼特亮度高' },
      { text: '四路满血HDMI2.1接口' },
      { text: '安桥2.1.2音响自带天空声道' }
    ],
    cons: [
      { text: 'VA软屏侧面观看可视角度受限' },
      { text: '仍保留USB2.0接口传输速度慢' }
    ],
    targetAudience: '特别推荐给**想要"一步到位"却不想花万元预算的实用主义者**，3000尼特亮度加4路满血接口，无论是看电影还是打游戏都完全没有短板。同时也适合**对系统流畅度有洁癖的用户**，无开机广告的灵控桌面配合旗舰芯片，操作丝滑得像在用高端手机，彻底告别电视卡顿。',
    source: '四正讲家电'
  },
  {
    id: 'vidda-faxian-x-pro-2026',
    brand: 'Vidda',
    model: '发现X Pro 2026款',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCyAgO.png',
    price: {
      regularPrice: 9499,
      salePrice: 7561
    },
    specs: [
      { name: '峰值亮度', value: '4200尼特(XDR Pro)' },
      { name: '背光分区数量', value: '2940分区' },
      { name: '色域范围', value: '98%DCI-P3(量子点)' },
      { name: '刷新率', value: '4K165Hz(原生)/300Hz(HSR疾速模式)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '2.1.2声道(帝瓦雷联合调校), 5单元, 峰值功率180W' },
      { name: '接口规格', value: 'HDMI2.1×4(四路满血)' },
      { name: '是否有开机广告', value: '有开机广告' }
    ],
    pros: [
      { text: '四路满血HDMI2.1接口' },
      { text: '2940分区4200尼特亮度炸裂' },
      { text: '极黑低反屏抗光好黑位深邃' }
    ],
    cons: [
      { text: 'VA软屏侧面观看可视角度受限' },
      { text: '仍保留USB2.0接口传输速度慢' }
    ],
    targetAudience: '特别推荐给**追求旗舰画质但预算卡在7000元的理性玩家**，4200尼特峰值亮度和2940个分区在同价位几乎没有对手，能让你用中端价格买到旗舰体验。同时也适合**喜欢打游戏又对音质有要求的全能型用户**，帝瓦雷调校的音响配合4路满血接口，无论是影音还是游戏都能获得顶级享受。',
    source: '四正讲家电'
  },
  {
    id: 'hisense-e7n-pro',
    brand: '海信电视',
    model: 'E7N Pro',
    imageUrl: 'https://s41.ax1x.com/2026/03/04/pe9Yudg.md.png',
    price: {
      regularPrice: 9999,
      salePrice: 7967
    },
    specs: [
      { name: '峰值亮度', value: '3800尼特(XDR Pro)' },
      { name: '背光分区数量', value: '2940分区' },
      { name: '色域范围', value: '96%DCI-P3' },
      { name: '刷新率', value: '4K150Hz(原生)/300Hz(系统级高刷Pro)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '2.1.2声道(帝瓦雷联合调校), 峰值功率165W(额定63W), 独立低音炮' },
      { name: '接口规格', value: 'HDMI2.1×4(四路满血)' },
      { name: '是否有开机广告', value: '有开机广告' }
    ],
    pros: [
      { text: '四路满血HDMI2.1接口' },
      { text: 'DeepSeek大模型语音超智能' },
      { text: '2940分区信芯H6画质调校强' }
    ],
    cons: [
      { text: '系统含开机广告体验不够纯净' },
      { text: 'ADS硬屏暗室对比度不如VA屏' }
    ],
    targetAudience: '特别推荐给不想自己折腾画质参数的**"懒人"玩家**，信芯AI画质芯片和游戏妙控台能自动识别你的设备和内容，自动优化出最佳效果，插上就能玩得爽。同时也适合**对画面通透感有要求的用户**，黑曜屏带来的抗反光效果配合高亮度，能让你在白天也能看清暗部细节，不再受倒影干扰。',
    source: '四正讲家电'
  },
  {
    id: 'tcl-85q9l-pro',
    brand: 'TCL电视',
    model: '85Q9LPro',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCyZKe.md.png',
    price: {
      regularPrice: 10299,
      salePrice: 7992
    },
    specs: [
      { name: '峰值亮度', value: '4500尼特(XDR)' },
      { name: '背光分区数量', value: '2448分区' },
      { name: '色域范围', value: '98%DCI-P3(量子点Pro2025)' },
      { name: '刷新率', value: '4K144Hz(原生)/288Hz(T-HRR倍频)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '安桥2.1.2声道Hi-Fi音响(5单元, 带独立天空声道和重低音炮)' },
      { name: '接口规格', value: 'HDMI2.1×4(四路满血)' },
      { name: '是否有开机广告', value: '无开机广告' }
    ],
    pros: [
      { text: '四路满血HDMI2.1接口' },
      { text: '2448分区4500尼特亮度炸裂' },
      { text: '安桥2.1.2音响自带天空声道' }
    ],
    cons: [
      { text: 'VA软屏侧面观看可视角度窄' },
      { text: '机身厚度约5.8厘米不算薄' }
    ],
    targetAudience: '特别推荐给**受够了电视反光、甚至因此看不清画面的落地窗户型用户**，双重低反技术能把反射率压到极低，让你不再被屏幕上的倒影干扰视线。同时也适合**全能型的高端玩家**，既有4500尼特的暴力亮度，又有4路满血接口，无论是看HDR电影还是打游戏，都能获得顶级的享受。',
    source: '四正讲家电'
  },
  {
    id: 'hisense-e7q',
    brand: '海信电视',
    model: 'E7Q',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCyeDH.md.png',
    price: {
      regularPrice: 10999,
      salePrice: 8955
    },
    specs: [
      { name: '峰值亮度', value: '5200尼特(XDR Pro)' },
      { name: '背光分区数量', value: '3500分区' },
      { name: '色域范围', value: '98%DCI-P3(10.7亿色, 量子点)' },
      { name: '刷新率', value: '4K170Hz(原生)/300Hz(动态刷新率)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '2.1.2声道(帝瓦雷联合调校), 峰值功率165W, 3.1L大音腔独立低音炮' },
      { name: '接口规格', value: 'HDMI2.1×4(四路满血)' },
      { name: '是否有开机广告', value: '含开机广告' }
    ],
    pros: [
      { text: '四路满血HDMI2.1接口' },
      { text: '3500分区加5200尼特亮度高' },
      { text: '黑曜屏Pro抗反光且广视角' }
    ],
    cons: [
      { text: '系统含开机广告体验不够纯净' },
      { text: '硬屏原生对比度不如VA软屏' }
    ],
    targetAudience: '特别推荐给**拥有豪华大平层、且客厅光线极强的高端用户**，5200尼特的超高亮度配合黑曜屏Pro能轻松压制住正午的强烈阳光，画质丝毫不受影响。同时也适合**对低音效果有执念的影音发烧友**，自带的3.1L大容积独立低音炮，能带来电影院般的震撼感，无需再额外购买低音箱。',
    source: '四正讲家电'
  },
  {
    id: 'tcl-85q10l',
    brand: 'TCL电视',
    model: '85Q10L',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCymbd.md.png',
    price: {
      regularPrice: 10999,
      salePrice: 8669
    },
    specs: [
      { name: '峰值亮度', value: '5000尼特(XDR)' },
      { name: '背光分区数量', value: '2880分区' },
      { name: '色域范围', value: '98%DCI-P3(量子点Pro2025)' },
      { name: '刷新率', value: '4K144Hz(原生)/288Hz(T-HRR倍频)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '安桥2.2.2Hi-Fi音响(带2个独立低音炮和2个天空声道)' },
      { name: '接口规格', value: 'HDMI2.1×4(四路满血)' },
      { name: '是否有开机广告', value: '无开机广告' }
    ],
    pros: [
      { text: '2880分区5000尼特亮度炸裂' },
      { text: '四路满血HDMI2.1接口' },
      { text: '安桥2.2.2音响自带双低音炮' }
    ],
    cons: [
      { text: 'VA软屏侧面观看可视角度窄' },
      { text: '机身较重挂墙安装墙体有要求' }
    ],
    targetAudience: '特别推荐给**预算在万元以内、但想要顶级旗舰画质的买家**，5000尼特亮度和2880个分区在这个价位属于降维打击，能让你花更少的钱享受到跨级画质体验。同时也适合**追求极致天空音效的用户**，自带的2个独立天空声道能真实还原飞机从头顶飞过的声音，沉浸感极强。',
    source: '四正讲家电'
  },
  {
    id: 'tcl-85q9m',
    brand: 'TCL电视',
    model: '85Q9M',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCyuVA.md.png',
    price: {
      regularPrice: 11499,
      salePrice: 9453
    },
    specs: [
      { name: '峰值亮度', value: '2000尼特(XDR)' },
      { name: '背光分区数量', value: '2160分区' },
      { name: '色域范围', value: '100%BT.2020(约133%DCI-P3)' },
      { name: '刷新率', value: '4K144Hz(原生)/288Hz(T-HRR倍频)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '安桥2.1.2声道Hi-Fi音响(带2个天空声道和独立低音炮)' },
      { name: '接口规格', value: 'HDMI2.1×4(满血)' },
      { name: '是否有开机广告', value: '无开机广告' }
    ],
    pros: [
      { text: 'RGB背光色彩纯净度天花板级' },
      { text: '2160分区2000尼特亮度炸裂' },
      { text: '安桥2.1.2音响自带天空声道' }
    ],
    cons: [
      { text: '保留USB2.0接口传输速度受限' },
      { text: 'VA软屏侧面观看可视角度窄' }
    ],
    targetAudience: '特别推荐给**对色彩准确度有变态要求的摄影师或设计师**，RGB-Mini LED技术带来的100%BT.2020色域，能还原出普通电视无法显示的纯净红色和绿色。同时也适合**看腻了普通液晶电视色彩的发烧友**，它呈现出的色彩纯净度和鲜活感，会让你有一种重新认识电视色彩的惊艳感。',
    source: '四正讲家电'
  },
  {
    id: 'hisense-e8q',
    brand: '海信电视',
    model: 'E8Q',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCc6E9.md.png',
    price: {
      regularPrice: 11499,
      salePrice: 9453
    },
    specs: [
      { name: '峰值亮度', value: '5800尼特(XDR Pro)' },
      { name: '背光分区数量', value: '5000+分区' },
      { name: '色域范围', value: '98%DCI-P3(量子点)' },
      { name: '刷新率', value: '4K144Hz(原生)/240Hz(疾速模式)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '2.1.2声道, 峰值功率97W(侧环绕+低音炮)' },
      { name: '接口规格', value: 'HDMI2.1×2(满血)' },
      { name: '是否有开机广告', value: '含开机广告' }
    ],
    pros: [
      { text: '5000级分区5800尼特亮度高' },
      { text: '信芯AI画质芯片Pro独立调校' },
      { text: '黑曜屏Pro抗反光且广视角' }
    ],
    cons: [
      { text: '配备两个HDMI2.1满血接口' },
      { text: '系统含开机广告体验不够纯净' }
    ],
    targetAudience: '特别推荐给**追求参数登顶、信奉大力出奇迹的画质狂人**，5800尼特亮度和5000级分区能带来如同核爆般的视觉冲击力，亮瞎眼的HDR效果绝对震撼。同时也适合**对国产品牌自研芯片有信心的技术流**，信芯AI画质芯片Pro的独立调校，证明了国产电视在画质算法上已经站到了世界第一梯队。',
    source: '四正讲家电'
  },
  {
    id: 'sony-k-85xr50',
    brand: '索尼',
    model: 'K-85XR50',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCcsHJ.md.png',
    price: {
      regularPrice: 13379,
      salePrice: 11325
    },
    specs: [
      { name: '峰值亮度', value: '22bit灰阶控制' },
      { name: '背光分区数量', value: 'XR动态背光系统大师版' },
      { name: '色域范围', value: 'DCI-P3广色域(XR特丽魅彩Pro)' },
      { name: '刷新率', value: '120Hz(支持VRR/ALLM)' },
      { name: '内存组合', value: '6GB+32GB' },
      { name: '音响', value: '4个发声单元, 多声道屏幕声场(支持杜比全景声)' },
      { name: '接口规格', value: 'HDMI2.1×2' },
      { name: '是否有开机广告', value: '无开机广告' }
    ],
    pros: [
      { text: 'XR芯片算法调校画质有保证' },
      { text: '22bit灰阶控制暗部细节丰富' },
      { text: '开机无广告系统纯净速度快' }
    ],
    cons: [
      { text: '仅32G存储空间安装应用受限' },
      { text: '只有两个HDMI2.1接口不够用' },
      { text: '刷新率仅120Hz同级参数保守' }
    ],
    targetAudience: '特别推荐给**拥有PS5主机且对索尼品牌有信仰的入门玩家**，虽然参数不是最顶的，但XR芯片带来的色彩舒适度和PS5的自动HDR优化，依然是独一无二的体验。同时也适合**买给父母长辈使用的家庭**，开机无广告的纯净系统和索尼一贯的耐用品质，能让长辈用得更省心、更长久。',
    source: '四正讲家电'
  },
  {
    id: 'skyworth-85a7f-pro',
    brand: '创维壁纸电视',
    model: '85A7FPro',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCcDuF.md.png',
    price: {
      regularPrice: 13999,
      salePrice: 11943
    },
    specs: [
      { name: '峰值亮度', value: '5000尼特' },
      { name: '背光分区数量', value: '3840分区' },
      { name: '色域范围', value: '99%DCI-P3(六元蓝光量子点)' },
      { name: '刷新率', value: '300Hz(超高刷模式)/芯片支持330Hz解码' },
      { name: '内存组合', value: '4GB+128GB' },
      { name: '音响', value: '7.1.2声道哈曼全景声双回音壁, 11个单元, 峰值功率243W' },
      { name: '接口规格', value: 'HDMI2.1×3(满血)' },
      { name: '是否有开机广告', value: '无开机广告' }
    ],
    pros: [
      { text: '3.9厘米超薄机身零缝贴墙' },
      { text: '类纸屏零反光白天观看舒适' },
      { text: '3840分区5000尼特画质炸裂' }
    ],
    cons: [
      { text: '哑光屏暗室通透感略逊镜面屏' },
      { text: '零缝安装对墙面平整度要求高' }
    ],
    targetAudience: '特别推荐给**对家居美学有极致追求的装修党**，3.9cm的纯平超薄机身能像画框一样完全贴合墙面，彻底消灭电视背后的小书包缝隙。同时也适合**喜欢在家搞艺术氛围的用户**，待机时的艺术画廊模式配合哑光屏的质感，能瞬间把你家客厅变成高雅的艺术展厅。',
    source: '四正讲家电'
  },
  {
    id: 'sony-k-85xr70',
    brand: '索尼',
    model: 'K-85XR70',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCcrB4.md.png',
    price: {
      regularPrice: 17499,
      salePrice: 15429
    },
    specs: [
      { name: '峰值亮度', value: 'XR动态背光系统大师版' },
      { name: '背光分区数量', value: 'XR动态背光系统大师版' },
      { name: '色域范围', value: '95%DCI-P3(XR特丽魅彩Pro)' },
      { name: '刷新率', value: '4K120Hz(支持VRR/ALLM)' },
      { name: '内存组合', value: '6GB+32GB' },
      { name: '音响', value: '多声道屏幕声场(含高频定位扬声器), 支持3D环绕声场转换(5.1.2声道效果)' },
      { name: '接口规格', value: 'HDMI2.1×2' },
      { name: '是否有开机广告', value: '开机无广告' }
    ],
    pros: [
      { text: 'XR动态背光大师版控光精准' },
      { text: '22bit灰阶控制暗部细节丰富' },
      { text: '6GB大运存系统运行丝滑流畅' }
    ],
    cons: [
      { text: '仅32G存储空间安装应用受限' },
      { text: '只有两个HDMI2.1接口不够用' },
      { text: '价格相比同级国产依然有溢价' }
    ],
    targetAudience: '特别推荐给**追求电影感而非数码味的资深影迷**，索尼独家的22bit灰阶控制能呈现出极其细腻的光影过渡，还原导演原本想表达的画面质感。同时也适合**因家具限制需要灵活摆放的用户**，四种底座摆放模式能完美适应窄电视柜或配合回音壁使用，设计非常人性化。',
    source: '四正讲家电'
  },
  {
    id: 'tcl-85q10l-pro',
    brand: 'TCL电视',
    model: '85Q10L Pro',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCc0jU.png',
    price: {
      regularPrice: 17999,
      salePrice: 15927
    },
    specs: [
      { name: '峰值亮度', value: '7000尼特(绚彩XDR)' },
      { name: '背光分区数量', value: '5184分区' },
      { name: '色域范围', value: '98%DCI-P3(量子点Pro2025)' },
      { name: '刷新率', value: '4K144Hz(原生)/288Hz(T-HRR倍频)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '2.1.2声道(B&O联合调校), 带2个独立低音炮和2个天空声道' },
      { name: '接口规格', value: 'HDMI2.1×4(满血)' },
      { name: '是否有开机广告', value: '无开机广告' }
    ],
    pros: [
      { text: '5184分区7000尼特亮度炸裂' },
      { text: 'B&O定制2.1.2音响音质奢华' },
      { text: '蝶翼华曜屏原生对比度极高' }
    ],
    cons: [
      { text: '机身重达40公斤对墙体有要求' },
      { text: 'VA软屏侧面观看可视角度相对窄' }
    ],
    targetAudience: '特别推荐给**预算充足、想要一步到位的不缺钱用户**，7000尼特亮度和5000多分区是目前电视画质的珠穆朗玛峰，能让你体验到地表最强的光影爆发力。同时也适合**对音响品牌有极高要求的品味人士**，B&O联合调校的奢华音响系统，能让你在听觉上也享受到贵族般的待遇。',
    source: '四正讲家电'
  },
  {
    id: 'hisense-e8q-pro',
    brand: '海信电视',
    model: 'E8Q Pro',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCccNR.png',
    price: {
      regularPrice: 17999,
      salePrice: 15927
    },
    specs: [
      { name: '峰值亮度', value: '8500尼特(XDR Pro)' },
      { name: '背光分区数量', value: '6120分区' },
      { name: '色域范围', value: '90%BT.2020(量子点)' },
      { name: '刷新率', value: '4K170Hz(原生)/330Hz(系统级高刷Pro)' },
      { name: '内存组合', value: '4GB+128GB' },
      { name: '音响', value: '2.1.2声道(帝瓦雷联合调校), 10个单元, 峰值功率210W' },
      { name: '接口规格', value: 'HDMI2.1×4(四路满血)' },
      { name: '是否有开机广告', value: '含开机广告' }
    ],
    pros: [
      { text: '6120分区加8500尼特亮度高' },
      { text: '黑曜屏Ultra抗反光率低至1%' },
      { text: '帝瓦雷210W音响自带侧环绕' }
    ],
    cons: [
      { text: '系统含开机广告体验不够纯净' },
      { text: '价格昂贵门槛较高非大众首选' }
    ],
    targetAudience: '特别推荐给**拥有全套次世代游戏主机的终极玩家**，4路满血HDMI2.1接口配合170Hz的原生高刷，能彻底榨干你PS5和RTX4090显卡的全部性能。同时也适合**居住在超大平层或别墅的用户**，8500尼特的恐怖亮度配合黑曜屏Ultra，能保证在任何光照环境下，画面都清晰锐利如刀锋。',
    source: '四正讲家电'
  },
  {
    id: 'hisense-e8s-pro',
    brand: '海信电视',
    model: 'E8SPro',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCcg41.png',
    price: {
      regularPrice: 20999,
      salePrice: 18915
    },
    specs: [
      { name: '峰值亮度', value: '5200尼特(XDR Pro)' },
      { name: '背光分区数量', value: '7020分区(RGB三色独立控制)' },
      { name: '色域范围', value: '100%BT.2020(RGB三原色直出)' },
      { name: '刷新率', value: '4K170Hz(原生)/330Hz(疾速刷新模式)' },
      { name: '内存组合', value: '4GB+128GB' },
      { name: '音响', value: '4.1.2声道(帝瓦雷联合调校), 峰值功率210W(巨浪全屏声场)' },
      { name: '接口规格', value: 'HDMI2.1×4(全路满血)' },
      { name: '是否有开机广告', value: '含开机广告' }
    ],
    pros: [
      { text: 'RGB色域达100%BT2020' },
      { text: '7020分区5200尼特亮度炸裂' },
      { text: '黑曜屏U抗反光率低至1.28%' }
    ],
    cons: [
      { text: '系统含开机广告体验不够纯净' },
      { text: '整机重超百斤对墙体要求极高' }
    ],
    targetAudience: '特别推荐给**站在显示技术金字塔尖的极客玩家**，RGB三色芯片直出带来的色域表现是目前人类视觉的极限，你能看到普通电视根本显示不出来的颜色。同时也适合**不差钱、只买最贵最好的土豪用户**，这台电视代表了目前量产Mini LED技术的最高水准，是身份和品味的象征。',
    source: '四正讲家电'
  },
  {
    id: 'sony-k-77xr80',
    brand: '索尼',
    model: 'K-77XR80',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCcR9x.md.png',
    price: {
      regularPrice: 24119,
      salePrice: 24022
    },
    specs: [
      { name: '峰值亮度', value: '1500-2000尼特' },
      { name: '背光分区数量', value: '像素级控光(829万像素独立控光)' },
      { name: '色域范围', value: '95%-97%DCI-P3(XR特丽魅彩Pro)' },
      { name: '刷新率', value: '120Hz(支持4K120Hz/VRR/ALLM)' },
      { name: '内存组合', value: '6GB+32GB' },
      { name: '音响', value: '银幕声场旗舰版(屏幕发声), 6个发声单元' },
      { name: '接口规格', value: 'HDMI2.1×2' },
      { name: '是否有开机广告', value: '无开机广告' }
    ],
    pros: [
      { text: 'OLED像素级控光黑位深邃' },
      { text: '银幕声场屏幕发声音画合一' },
      { text: 'XR芯片AI重塑还原电影原彩' }
    ],
    cons: [
      { text: '价格昂贵同尺寸溢价较高' },
      { text: '只有两个HDMI2.1接口不够用' },
      { text: '峰值亮度爆发力不如Mini LED' }
    ],
    targetAudience: '特别推荐给**拥有独立影音室、追求纯粹黑位的电影发烧友**，OLED的像素级控光能带来深邃无垠的黑色，看太空片或惊悚片的沉浸感是Mini LED无法比拟的。同时也适合**对音画合一有执念的用户**，屏幕发声技术让声音直接从画面人物嘴里发出，这种临场感只有索尼OLED能给你。',
    source: '四正讲家电'
  },
  {
    id: 'lg-g5',
    brand: 'LG',
    model: 'G5',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCcW36.md.png',
    price: {
      regularPrice: 34899,
      salePrice: 33014
    },
    specs: [
      { name: '峰值亮度', value: '亮度增强器Ultimate' },
      { name: '背光分区数量', value: '像素级控光(829万像素独立自发光)' },
      { name: '色域范围', value: '100%色域&100%色准(Intertek认证)' },
      { name: '刷新率', value: '120Hz(原生)/支持VRR165Hz' },
      { name: '内存组合', value: '/' },
      { name: '音响', value: '4.2声道, 60W功率(低音20W), 虚拟11.1.2环绕声' },
      { name: '接口规格', value: 'HDMI2.1×4(四路满血)' },
      { name: '是否有开机广告', value: '无开机广告' }
    ],
    pros: [
      { text: '2.4厘米纯平机身壁纸级贴墙' },
      { text: 'OLED像素级控光黑位深邃' },
      { text: '亮度提升300%画面通透感强' }
    ],
    cons: [
      { text: '全系USB2.0接口传输速度慢' },
      { text: 'WebOS系统应用生态不如安卓' }
    ],
    targetAudience: '特别推荐给**既想要OLED画质、又担心烧屏的谨慎型高端用户**，LG官方提供的5年面板质保能彻底消除你的后顾之忧，让你放心大胆地用。同时也适合**追求极致轻薄挂墙效果的极简主义者**，2.4cm的纯平机身配合专用挂架，挂在墙上就是一幅会动的油画，美得令人窒息。',
    source: '四正讲家电'
  },
  {
    id: 'samsung-83s95f',
    brand: '三星',
    model: '83S95F',
    imageUrl: 'https://s41.ax1x.com/2026/03/06/peCcfgK.md.png',
    price: {
      regularPrice: 44999,
      salePrice: 44999
    },
    specs: [
      { name: '峰值亮度', value: '2000尼特(OLED HDR Pro)' },
      { name: '背光分区数量', value: '像素级控光(830万像素独立控光)' },
      { name: '色域范围', value: '99%DCI-P3(彩通色彩认证)' },
      { name: '刷新率', value: '165Hz(动态加速)' },
      { name: '内存组合', value: '4GB+64GB' },
      { name: '音响', value: '4.2.2声道, 70W功率(音画追踪OTS+)' },
      { name: '接口规格', value: 'HDMI2.1×4(满血)' },
      { name: '是否有开机广告', value: '无开机广告' }
    ],
    pros: [
      { text: '1.1厘米极致超薄机身设计' },
      { text: 'OLED自发光像素级精准控光' },
      { text: '防眩光技术白天观看无倒影' }
    ],
    cons: [
      { text: '价格高达四万五门槛极高' },
      { text: 'Tizen系统应用生态不如安卓' },
      { text: '70W音响对于巨幕略显保守' }
    ],
    targetAudience: '特别推荐给**对厚度有洁癖、追求极致工业设计的科技新贵**，1.1cm的惊人薄度挂在墙上简直就是科幻片里的产物，能极大地提升家居格调。同时也适合**喜欢色彩艳丽、高饱和度画面的用户**，三星独家的色彩调校配合防眩光屏幕，能给你带来极具冲击力的视觉盛宴。',
    source: '四正讲家电'
  }
]