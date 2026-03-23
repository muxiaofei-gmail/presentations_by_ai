/**
 * 洗地机产品数据配置
 * 数据来源：胡侃洗地机选购视频
 */
import type { XidijiProduct } from '@/shared/product-card/types'

// 产品图片
const PRODUCT_IMAGES = {
  dreame: 'https://s41.ax1x.com/2026/03/23/peKEBs1.png',
  tineco: 'https://s41.ax1x.com/2026/03/23/peKEsZ6.png',
  roborock: 'https://s41.ax1x.com/2026/03/23/peKEDqx.png',
  dyson: 'https://s41.ax1x.com/2026/03/23/peKE0MR.png'
}

export const products: XidijiProduct[] = [
  {
    id: 'dreame-t60-ultra',
    type: 'xidiji',
    brand: '追觅',
    model: 'T60 Ultra',
    imageUrl: PRODUCT_IMAGES.dreame,
    price: {
      regularPrice: 2816,
      salePrice: 1918
    },
    specs: [
      { name: '吸力', value: '23000Pa', important: true },
      { name: '防缠绕', value: '梳齿刮条+割毛齿刃+正反转', important: true },
      { name: '续航时间', value: '48分钟' },
      { name: '烘干', value: '90℃热水洗+热风烘干', important: true },
      { name: '平躺', value: '180°' },
      { name: '机身厚度', value: '9.85cm' },
      { name: '贴边设计', value: '三侧0mm贴边' },
      { name: '特殊功能', value: '基站自清洁' }
    ],
    pros: [
      { text: '23000Pa大吸力，重油污一遍干净' },
      { text: '三侧0mm贴边，墙角无死角' },
      { text: '90℃热水洗+热风烘干，不发臭' }
    ],
    cons: [
      { text: '价格相对较高' }
    ],
    targetAudience: '适合对**清理死角、防缠毛和热风烘干**有较高要求的家庭，综合体验不错。',
    source: '胡侃',
    recommendLevel: 5
  },
  {
    id: 'tineco-artist40',
    type: 'xidiji',
    brand: '添可',
    model: '芙万Artist40',
    imageUrl: PRODUCT_IMAGES.tineco,
    price: {
      regularPrice: 2977,
      salePrice: 1499
    },
    specs: [
      { name: '吸力', value: '18000Pa', important: true },
      { name: '防缠绕', value: 'V型滚刷+双刃切割', important: true },
      { name: '续航时间', value: '75分钟' },
      { name: '烘干', value: '效果一般', important: true },
      { name: '平躺', value: '180°' },
      { name: '机身厚度', value: '12.85cm' },
      { name: '贴边设计', value: '有缝隙' },
      { name: '特殊功能', value: '超长续航' }
    ],
    pros: [
      { text: '75分钟超长续航，大户型友好' },
      { text: 'V型滚刷+双刃切割，毛发不缠绕' },
      { text: '180°躺平，沙发底能进' }
    ],
    cons: [
      { text: '贴边清洁差，边缘留缝隙' },
      { text: '烘干效果一般，南方易发霉' }
    ],
    targetAudience: '适合**北方内陆地区的大户型**、家里毛发多的朋友。',
    source: '胡侃',
    recommendLevel: 4
  },
  {
    id: 'roborock-a30pro',
    type: 'xidiji',
    brand: '石头',
    model: 'A30Pro',
    imageUrl: PRODUCT_IMAGES.roborock,
    price: {
      regularPrice: 1990,
      salePrice: 1388
    },
    specs: [
      { name: '吸力', value: '22000Pa', important: true },
      { name: '防缠绕', value: '梳齿刮条', important: true },
      { name: '续航时间', value: '30分钟' },
      { name: '烘干', value: '有' },
      { name: '平躺', value: '180°' },
      { name: '机身厚度', value: '11cm' },
      { name: '贴边设计', value: '有盲区' },
      { name: '特殊功能', value: '性价比' }
    ],
    pros: [
      { text: '22000Pa吸力，基础清洁在线' },
      { text: '性价比不错，价格亲民' }
    ],
    cons: [
      { text: '长头发会有残留，需手动清理' },
      { text: '贴边清洁存在盲区' }
    ],
    targetAudience: '适合**预算有限、只看重基础清洁能力**的中小户型，表现中规中矩。',
    source: '胡侃',
    recommendLevel: 4
  },
  {
    id: 'dyson-wash-g1',
    type: 'xidiji',
    brand: '戴森',
    model: 'Wash G1',
    imageUrl: PRODUCT_IMAGES.dyson,
    price: {
      regularPrice: 2985,
      salePrice: 2437
    },
    specs: [
      { name: '吸力', value: '双滚筒设计（无大吸力）', important: true },
      { name: '防缠绕', value: '非常好，毛发单独收集', important: true },
      { name: '续航时间', value: '35分钟' },
      { name: '烘干', value: '无热风烘干', important: true },
      { name: '平躺', value: '180°' },
      { name: '机身厚度', value: '10.5cm' },
      { name: '贴边设计', value: '双侧贴边' },
      { name: '特殊功能', value: '双滚筒对转' }
    ],
    pros: [
      { text: '防缠绕非常好，毛发完全不缠刷' },
      { text: '双滚筒设计，操作灵活' }
    ],
    cons: [
      { text: '续航仅35分钟，中小户型够用' },
      { text: '无热风烘干，放久易发臭' },
      { text: '价格偏高，性价比一般' }
    ],
    targetAudience: '适合**预算充足、重视防缠绕和操作灵活性**的朋友，对长发和宠物家庭友好。',
    source: '胡侃',
    recommendLevel: 3
  }
]