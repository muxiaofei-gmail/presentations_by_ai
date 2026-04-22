/**
 * 洗地机产品数据配置
 * 价位：2000-3000元
 * 数据来源：胡侃洗地机选购视频
 */
import type { XidijiProduct } from '@/shared/product-card/types'

const PRODUCT_IMAGES = {
  dreame: 'https://via.placeholder.com/400x300/1a1a2e/ec4899?text=追觅T60+Ultra',
  tikome: 'https://via.placeholder.com/400x300/1a1a2e/10b981?text=添可芙万极客',
  roborock: 'https://via.placeholder.com/400x300/1a1a2e/f97316?text=石头A30Pro',
  narwal: 'https://via.placeholder.com/400x300/1a1a2e/3b82f6?text=云鲸S3max',
  youwang: 'https://via.placeholder.com/400x300/1a1a2e/8b5cf6?text=友望大头Pro'
}

export const products: XidijiProduct[] = [
  {
    id: 'dreame-t60-ultra',
    type: 'xidiji',
    brand: '追觅',
    model: 'T60 Ultra',
    imageUrl: PRODUCT_IMAGES.dreame,
    price: {
      regularPrice: 2776,
      salePrice: 1918
    },
    specs: [
      { name: '吸力', value: '强劲' },
      { name: '防缠绕', value: '双刮条设计', important: true },
      { name: '机身厚度', value: '9.85cm', important: true },
      { name: '贴边距离', value: '3.5mm', important: true },
      { name: '重量', value: '标准' },
      { name: '噪音', value: '常规' },
      { name: '水箱容量', value: '标准' },
      { name: '特殊功能', value: '泡沫洗地模式', important: true }
    ],
    pros: [
      { text: '机身仅9.85cm，极致轻薄' },
      { text: '贴边3.5mm，死角残留极小' },
      { text: '泡沫洗地+双刮条防缠绕' }
    ],
    cons: [
      { text: '机械臂回拉时有轻微阻力' }
    ],
    targetAudience: '追求**极致贴边和轻薄机身**的用户，这款目前没有对手。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'tikome-fuwankgeek',
    type: 'xidiji',
    brand: '添可',
    model: '芙万极客',
    imageUrl: PRODUCT_IMAGES.tikome,
    price: {
      regularPrice: 2221,
      salePrice: 1668
    },
    specs: [
      { name: '吸力', value: '日常够用' },
      { name: '防缠绕', value: '标配' },
      { name: '续航时间', value: '标准' },
      { name: '除菌', value: '电解水除菌99.99%', important: true },
      { name: '重量', value: '标准' },
      { name: '噪音', value: '常规' },
      { name: '水箱容量', value: '标准' },
      { name: '特殊功能', value: 'AI双向助力', important: true }
    ],
    pros: [
      { text: 'AI双向助力，推拉随心' },
      { text: '电解水除菌，不加清洁液' },
      { text: '品类开创者，操控感极致' }
    ],
    cons: [
      { text: '贴边能力一般，墙角可能需手动补擦' }
    ],
    targetAudience: '适合**力气小的女生或长辈**；有宝宝的家庭首选。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 4
  },
  {
    id: 'roborock-a30pro-steam',
    type: 'xidiji',
    brand: '石头',
    model: 'A30Pro Steam',
    imageUrl: PRODUCT_IMAGES.roborock,
    price: {
      regularPrice: 2799,
      salePrice: 1826
    },
    specs: [
      { name: '吸力', value: '强劲' },
      { name: '防缠绕', value: '标配' },
      { name: '蒸汽模式', value: '160℃蒸汽+热水', important: true },
      { name: '烘干', value: '有' },
      { name: '重量', value: '4.5kg', important: true },
      { name: '噪音', value: '常规' },
      { name: '水箱容量', value: '标准' },
      { name: '特殊功能', value: '双模清洁', important: true }
    ],
    pros: [
      { text: '160℃蒸汽软化老油垢，一遍过' },
      { text: '整机仅4.5kg，最轻蒸汽款之一' },
      { text: '快速软化风干顽固污渍' }
    ],
    cons: [
      { text: '开启蒸汽会缩短续航，大户型需中途充电' }
    ],
    targetAudience: '适合**厨房重油污家庭**；极少做饭建议选普通款省钱。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'narwal-s3max',
    type: 'xidiji',
    brand: '云鲸',
    model: 'S3max',
    imageUrl: PRODUCT_IMAGES.narwal,
    price: {
      regularPrice: 2999,
      salePrice: 2069
    },
    specs: [
      { name: '吸力', value: '强劲' },
      { name: '防缠绕', value: '基站自动剪毛', important: true },
      { name: '续航时间', value: '标准' },
      { name: '烘干', value: '基站热水洗地', important: true },
      { name: '重量', value: '标准' },
      { name: '噪音', value: '常规' },
      { name: '水箱容量', value: '标准' },
      { name: '特殊功能', value: '自动剪毛功能', important: true }
    ],
    pros: [
      { text: '基站自带剪刀，自动剪断缠绕毛发' },
      { text: '基站注入热水，溶解油污快' },
      { text: '告别手动抠脏毛球' }
    ],
    cons: [
      { text: '提起机身时管道偶有残水滴漏' }
    ],
    targetAudience: '适合**养宠家庭**，自动剪毛功能值回票价。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'youwang-datou-pro',
    type: 'xidiji',
    brand: '友望',
    model: '大头Pro',
    imageUrl: PRODUCT_IMAGES.youwang,
    price: {
      regularPrice: 2832,
      salePrice: 2387
    },
    specs: [
      { name: '吸力', value: '日常够用' },
      { name: '防缠绕', value: '标配' },
      { name: '滚刷设计', value: 'D形方形滚刷', important: true },
      { name: '烘干', value: '有' },
      { name: '重量', value: '标准' },
      { name: '噪音', value: '常规' },
      { name: '水箱容量', value: '标准' },
      { name: '特殊功能', value: '推入式基站', important: true }
    ],
    pros: [
      { text: 'D形方形滚刷，解决死角痛点' },
      { text: '推入式基站，不用费力提机器' },
      { text: '云感绒滚布，水渍极少秒干' }
    ],
    cons: [
      { text: '对付重油污不如蒸汽款，可能多拖两遍' }
    ],
    targetAudience: '追求**无死角清洁**的用户，方形滚刷+推入式基站同价位独一份。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 4
  }
]