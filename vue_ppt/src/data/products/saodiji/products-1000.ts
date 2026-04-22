/**
 * 扫地机器人产品数据配置
 * 价位：1000-3000元入门档
 * 数据来源：胡侃扫地机器人选购视频
 */
import type { SaodijiProduct } from '@/shared/product-card/types'

const PRODUCT_IMAGES = {
  mijiaH40: 'https://via.placeholder.com/400x300/1a1a2e/10b981?text=米家H40',
  yunjingJ5: 'https://via.placeholder.com/400x300/1a1a2e/ec4899?text=云鲸J5',
  kevosT50: 'https://via.placeholder.com/400x300/1a1a2e/f97316?text=科沃斯T50MAX',
  kevosT80: 'https://via.placeholder.com/400x300/1a1a2e/3b82f6?text=科沃斯T80',
  mijia5Pro: 'https://via.placeholder.com/400x300/1a1a2e/8b5cf6?text=米家5Pro'
}

export const products: SaodijiProduct[] = [
  {
    id: 'mijia-h40',
    type: 'saodiji',
    brand: '米家',
    model: 'H40',
    imageUrl: PRODUCT_IMAGES.mijiaH40,
    price: {
      regularPrice: 1699,
      salePrice: 1080
    },
    specs: [
      { name: '导航方式', value: 'LDS激光导航', important: true },
      { name: '吸力', value: '6000Pa' },
      { name: '防缠绕', value: '割毛发主刷（自带隐藏刀片）', important: true },
      { name: '基站', value: 'A3纸大小，支持尘袋/尘盒', important: true },
      { name: '烘干', value: '仅风干' }
    ],
    pros: [
      { text: '基站A3纸大小，不占地' },
      { text: '割毛发主刷，自动断发' },
      { text: '尘袋尘盒双选择，灵活' }
    ],
    cons: [
      { text: '只有风干没有热风烘干，南方回南天拖布易有异味' },
      { text: '6000Pa吸力面对长毛地毯比较吃力' }
    ],
    targetAudience: '适合**预算有限、空间局促的租房党和小户型**，家里没有太多复杂地形，主要追求性价比和省空间。尤其适合**深受毛发缠绕困扰的用户**，家里有宠物或长发女生，再也不用手动拿剪刀去清理滚刷了。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 4
  },
  {
    id: 'yunjing-j5',
    type: 'saodiji',
    brand: '云鲸',
    model: 'J5',
    imageUrl: PRODUCT_IMAGES.yunjingJ5,
    price: {
      regularPrice: 2234,
      salePrice: 1770
    },
    specs: [
      { name: '导航方式', value: 'LDS激光导航', important: true },
      { name: '吸力', value: '15000Pa', important: true },
      { name: '避障', value: '双向3D结构光避障', important: true },
      { name: '防缠绕', value: '气旋导流零缠绕滚刷', important: true },
      { name: '基站', value: '机身集尘，无基站集尘噪音' },
      { name: '拖布清洗', value: '45-75℃智能变温洗' }
    ],
    pros: [
      { text: '机身集尘，极其安静' },
      { text: '气旋滚刷，防缠绕T0' },
      { text: '变温洗拖布，洗得干净' }
    ],
    cons: [
      { text: '机身集尘需要经常花钱买尘袋' },
      { text: '没有RGB摄像头，识别不出具体障碍物类型' },
      { text: '大平层用户可能需要勤倒垃圾' }
    ],
    targetAudience: '适合**神经衰弱怕吵的朋友**，因为它把集尘袋放进机身肚子里，取消了基站集尘，工作起来极其安静，没有那种像飞机起飞一样的集尘噪音。也适合**家里掉毛严重的养宠家庭**，气旋滚刷加上主动解缠绕边刷，对付长发绝对是T0级别。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'kevos-t50-max',
    type: 'saodiji',
    brand: '科沃斯',
    model: 'T50 MAX',
    imageUrl: PRODUCT_IMAGES.kevosT50,
    price: {
      regularPrice: 2704,
      salePrice: 2169
    },
    specs: [
      { name: '导航方式', value: '嵌入式激光雷达', important: true },
      { name: '吸力', value: '18500Pa', important: true },
      { name: '机身高度', value: '81mm（超薄）', important: true },
      { name: '拖布抬升', value: '18mm（同级最高）', important: true },
      { name: '边角覆盖', value: '双机械臂' }
    ],
    pros: [
      { text: '81mm超薄，钻矮脚沙发' },
      { text: '拖布抬升18mm，跨地毯' },
      { text: '双机械臂，墙角无盲区' }
    ],
    cons: [
      { text: '嵌入式雷达在复杂弱光环境建图速度不如头顶带雷达的机器快' }
    ],
    targetAudience: '适合**家里有很多欧式矮脚家具**的用户，那些带塔楼的机器进不去的矮脚沙发底，它能轻松钻进去。也适合**铺了较厚地毯**的家庭，拖布能抬升18mm是同级最高，跨过去也不会弄湿地毯。双机械臂设计也能填平墙角的清洁盲区。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'kevos-t80',
    type: 'saodiji',
    brand: '科沃斯',
    model: 'T80',
    imageUrl: PRODUCT_IMAGES.kevosT80,
    price: {
      regularPrice: 3503,
      salePrice: 2680
    },
    specs: [
      { name: '导航方式', value: 'LDS激光导航', important: true },
      { name: '吸力', value: '18000Pa', important: true },
      { name: '机身高度', value: '98mm（无塔楼）' },
      { name: '拖布设计', value: '洗地机同款滚筒', important: true },
      { name: '烘干', value: '45℃' }
    ],
    pros: [
      { text: '滚筒设计，摩擦力强' },
      { text: '边洗边拖，不留水印' },
      { text: '无塔楼，98mm薄机身' }
    ],
    cons: [
      { text: '滚筒机械结构复杂，长期故障率理论上比圆盘拖布高' },
      { text: '45℃烘干温度在竞品中略显单薄' }
    ],
    targetAudience: '适合**家里以瓷砖为主**，或者**厨房重油污较多**的家庭，它把洗地机的活水洗地滚筒移植了过来，物理摩擦力比旋转拖布强太多，对付厨房的咖啡渍、老油污非常轻松。也适合**极其讨厌拖地留水印的强迫症患者**，边洗边拖，拖布时刻干净。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 4
  },
  {
    id: 'mijia-5pro',
    type: 'saodiji',
    brand: '米家',
    model: '5 Pro',
    imageUrl: PRODUCT_IMAGES.mijia5Pro,
    price: {
      regularPrice: 3199,
      salePrice: 2473
    },
    specs: [
      { name: '导航方式', value: '智能升降雷达', important: true },
      { name: '吸力', value: '23000Pa', important: true },
      { name: '机身高度', value: '9.5cm（雷达缩回时）', important: true },
      { name: '边角覆盖', value: '扫拖双机械臂', important: true },
      { name: '基站', value: '80℃高温煮洗', important: true },
      { name: '越障', value: '2cm' }
    ],
    pros: [
      { text: '升降雷达，导航+薄机身' },
      { text: '双机械臂+23000Pa吸力' },
      { text: '80℃热水洗，去油污强' }
    ],
    cons: [
      { text: '越障能力只有2cm，过高门槛吃力' },
      { text: '全开高能模式下，噪音和耗电量都不小' }
    ],
    targetAudience: '适合**追求极致堆料的纠结党**，想要精准导航又想钻床底，智能升降雷达建图时升起、钻床底时缩回。也适合**米家智能家居重度用户**，可以和其他米家设备联动。80℃热水洗对厨房油污简直是降维打击。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  }
]