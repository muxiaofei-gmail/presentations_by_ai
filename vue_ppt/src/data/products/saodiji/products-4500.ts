/**
 * 扫地机器人产品数据配置
 * 价位：4500元以上顶配档
 * 数据来源：胡侃扫地机器人选购视频
 */
import type { SaodijiProduct } from '@/shared/product-card/types'

const PRODUCT_IMAGES = {
  kevosX11Pro: 'https://via.placeholder.com/400x300/1a1a2e/10b981?text=科沃斯X11Pro',
  djiRomo: 'https://via.placeholder.com/400x300/1a1a2e/ec4899?text=大疆ROMO',
  dreameS60Pro: 'https://via.placeholder.com/400x300/1a1a2e/f97316?text=追觅S60Pro',
  dreameX50Pro: 'https://via.placeholder.com/400x300/1a1a2e/3b82f6?text=追觅X50Pro'
}

export const products: SaodijiProduct[] = [
  {
    id: 'kevos-x11-pro',
    type: 'saodiji',
    brand: '科沃斯',
    model: 'X11 Pro',
    imageUrl: PRODUCT_IMAGES.kevosX11Pro,
    price: {
      regularPrice: 5359,
      salePrice: 3968
    },
    specs: [
      { name: '导航方式', value: '嵌入式激光雷达', important: true },
      { name: '吸力', value: '19500Pa' },
      { name: '拖布设计', value: '活水滚筒', important: true },
      { name: '越障能力', value: '自适应四驱系统', important: true },
      { name: '机身高度', value: '98mm', important: true },
      { name: '基站', value: '活水洗地+污水回收' }
    ],
    pros: [
      { text: '活水滚筒，油污降维打击' },
      { text: '四驱系统，滑轨轻松过' },
      { text: '无塔楼，98mm钻床底' }
    ],
    cons: [
      { text: '滚筒结构复杂，维护麻烦' },
      { text: '19500Pa吸力，参数党可能不太痛快' }
    ],
    targetAudience: '极其挑人。如果你家**面积超过140平，或者是复式楼**，极其看重越障能力；再或者你是**养宠家庭、长发用户**，那它很适合你。但如果你家**不到90平，千万别买**，纯属性能过剩，没必要多花这大几千块钱。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 4
  },
  {
    id: 'dji-romo',
    type: 'saodiji',
    brand: '大疆',
    model: 'ROMO',
    imageUrl: PRODUCT_IMAGES.djiRomo,
    price: {
      regularPrice: 6799,
      salePrice: 3875
    },
    specs: [
      { name: '导航方式', value: '三颗固态激光雷达+双目鱼眼相机', important: true },
      { name: '吸力', value: '25000Pa', important: true },
      { name: '避障视角', value: '290°超广角', important: true },
      { name: '基站', value: '四路高压水枪直喷清洗', important: true },
      { name: '免维护', value: '200天不用管底座', important: true },
      { name: '越障能力', value: '2.5cm' }
    ],
    pros: [
      { text: '无人机避障方案，丝滑绕开' },
      { text: '高压水枪清洗，200天不管' },
      { text: '25000Pa吸力，力大砖飞' }
    ],
    cons: [
      { text: '越障2.5cm，高门槛需爬坡垫' },
      { text: '透明设计，脏了看着有点膈应' }
    ],
    targetAudience: '如果你是**颜值党、大疆粉**，或者**懒得收拾地上的杂物**，选它绝对爽。大疆第一次做扫地机，感知系统极其奢华，地上哪怕是一根2毫米细的充电线头，它都能丝滑绕开，根本不需要头顶那个导航塔。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'dreame-s60-pro',
    type: 'saodiji',
    brand: '追觅',
    model: 'S60 Pro',
    imageUrl: PRODUCT_IMAGES.dreameS60Pro,
    price: {
      regularPrice: 4599,
      salePrice: 3651
    },
    specs: [
      { name: '导航方式', value: 'LDS激光雷达', important: true },
      { name: '吸力', value: '33000Pa（行业天花板）', important: true },
      { name: '拖布设计', value: '滚筒活水洗地', important: true },
      { name: '边角覆盖', value: '双机械臂（边刷+滚筒外扩）', important: true },
      { name: '基站', value: '140℃热水洗拖布', important: true }
    ],
    pros: [
      { text: '33000Pa吸力，行业天花板' },
      { text: '滚筒活水+双机械臂，死角终结' },
      { text: '140度热水，化老油污' }
    ],
    cons: [
      { text: '滚筒结构复杂，维护成本高' },
      { text: '强力模式噪音不小' }
    ],
    targetAudience: '特别适合三类人：一是**家里有高门槛滑轨**的；二是**重度养宠家庭**，它不仅防缠绕还能识别宠物粑粑；三是对**厨房油污极度敏感的洁癖党**，它的140度热水洗拖布，化解老油污的能力普通冷水根本没法比。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'dreame-x50-pro',
    type: 'saodiji',
    brand: '追觅',
    model: 'X50 Pro 滚筒版',
    imageUrl: PRODUCT_IMAGES.dreameX50Pro,
    price: {
      regularPrice: 5699,
      salePrice: 4373
    },
    specs: [
      { name: '导航方式', value: '升降激光雷达', important: true },
      { name: '吸力', value: '30000Pa', important: true },
      { name: '拖布设计', value: '27cm活水滚筒', important: true },
      { name: '越障能力', value: '全地形五轮，4cm', important: true },
      { name: '机身高度', value: '最薄9.75cm（雷达缩回）', important: true },
      { name: '基站', value: '100℃高温煮洗' }
    ],
    pros: [
      { text: '升降雷达，导航+钻床底' },
      { text: '五轮越障，4cm门槛直接翻' },
      { text: '全能顶配，一步到位' }
    ],
    cons: [
      { text: '首发价直奔6000，太伤人' },
      { text: '机械结构复杂，维护成本高' }
    ],
    targetAudience: '如果你**预算极其充足**，住着**大别墅或者大平层**，既要强悍的越障，又要极致的干净，完全不想做任何妥协，那选它一步到位就对了。市面上有的顶配功能，它是一次性全给你塞进去了。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  }
]