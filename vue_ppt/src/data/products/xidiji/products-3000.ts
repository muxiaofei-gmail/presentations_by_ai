/**
 * 洗地机产品数据配置
 * 价位：3000元以上
 * 数据来源：胡侃洗地机选购视频
 */
import type { XidijiProduct } from '@/shared/product-card/types'

const PRODUCT_IMAGES = {
  dreame: 'https://via.placeholder.com/400x300/1a1a2e/ec4899?text=追觅H60+Ultra',
  tikome: 'https://via.placeholder.com/400x300/1a1a2e/10b981?text=添可科学家M7',
  roborock: 'https://via.placeholder.com/400x300/1a1a2e/f97316?text=石头A30Pro+Ultra'
}

export const products: XidijiProduct[] = [
  {
    id: 'dreame-h60-ultra',
    type: 'xidiji',
    brand: '追觅',
    model: 'H60 Ultra',
    imageUrl: PRODUCT_IMAGES.dreame,
    price: {
      regularPrice: 4600,
      salePrice: 3798
    },
    specs: [
      { name: '吸力', value: '26000Pa', important: true },
      { name: '防缠绕', value: '标配' },
      { name: '平躺', value: '180°躺平吸力不衰减', important: true },
      { name: '烘干', value: '有' },
      { name: '重量', value: '偏重', important: true },
      { name: '噪音', value: '常规' },
      { name: '水箱容量', value: '标准' },
      { name: '特殊功能', value: '旗舰级清洁力', important: true }
    ],
    pros: [
      { text: '26000Pa吸力，比旗舰高30%' },
      { text: '180°躺平吸力不衰减' },
      { text: '地板缝隙顽固灰尘一遍净' }
    ],
    cons: [
      { text: '整机重量偏大，女生提拿吃力' }
    ],
    targetAudience: '追求**绝对清洁力天花板**的用户，选它没错。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'tikome-kejiama7',
    type: 'xidiji',
    brand: '添可',
    model: '科学家 M7',
    imageUrl: PRODUCT_IMAGES.tikome,
    price: {
      regularPrice: 4210,
      salePrice: 3096
    },
    specs: [
      { name: '吸力', value: '强劲' },
      { name: '防缠绕', value: '标配' },
      { name: '速干技术', value: '磁敏动态速干', important: true },
      { name: '蒸汽', value: '160℃蒸汽', important: true },
      { name: '重量', value: '标准' },
      { name: '噪音', value: '常规' },
      { name: '续航', value: '全场最长', important: true },
      { name: '特殊功能', value: '木地板守护', important: true }
    ],
    pros: [
      { text: '磁敏速干，拖完几乎无水渍' },
      { text: '全场最长续航，大别墅一次拖完' },
      { text: '160℃蒸汽，重污清洁力在线' }
    ],
    cons: [
      { text: '定价偏高，后期耗材成本不低' }
    ],
    targetAudience: '适合**全屋铺设木地板且预算充足**的家庭；全屋瓷砖不太划算。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 4
  },
  {
    id: 'roborock-a30pro-ultra',
    type: 'xidiji',
    brand: '石头',
    model: 'A30Pro Ultra',
    imageUrl: PRODUCT_IMAGES.roborock,
    price: {
      regularPrice: 2699,
      salePrice: 1898
    },
    specs: [
      { name: '吸力', value: '强劲' },
      { name: '防缠绕', value: '双刮条+内外喷水', important: true },
      { name: '基站功能', value: '全能烘干+除菌+自动投放', important: true },
      { name: '烘干', value: '有' },
      { name: '重量', value: '轻盈', important: true },
      { name: '噪音', value: '常规' },
      { name: '水箱容量', value: '标准' },
      { name: '特殊功能', value: '旗舰平替', important: true }
    ],
    pros: [
      { text: '双刮条+内外喷水，去污效率高' },
      { text: '全能基站，自动化体验拉满' },
      { text: '机身轻盈，比其他旗舰款轻' }
    ],
    cons: [
      { text: '砍掉AI助力，推拉省力感略逊' }
    ],
    targetAudience: '想要**旗舰级全能配置又不想机器笨重**的用户，性价比最高的旗舰平替。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  }
]