/**
 * 洗地机产品数据配置
 * 数据来源：胡侃洗地机选购视频（第二期）
 */
import type { XidijiProduct } from '@/shared/product-card/types'

// 产品图片（待替换）
const PRODUCT_IMAGES = {
  xiwu: 'https://via.placeholder.com/400x300/1a1a2e/10b981?text=西屋H40+Ultra',
  dreame: 'https://via.placeholder.com/400x300/1a1a2e/ec4899?text=追觅T40',
  mijia: 'https://via.placeholder.com/400x300/1a1a2e/f97316?text=米家4Pro',
  midea: 'https://via.placeholder.com/400x300/1a1a2e/3b82f6?text=美的S60Pro',
  haier: 'https://via.placeholder.com/400x300/1a1a2e/8b5cf6?text=海尔A3mix'
}

export const products: XidijiProduct[] = [
  {
    id: 'xiwu-h40-ultra',
    type: 'xidiji',
    brand: '西屋',
    model: 'H40 Ultra',
    imageUrl: PRODUCT_IMAGES.xiwu,
    price: {
      regularPrice: 1677,
      salePrice: 1360
    },
    specs: [
      { name: '吸力', value: '日常够用' },
      { name: '防缠绕', value: '标配' },
      { name: '续航时间', value: '30分钟' },
      { name: '烘干', value: '有' },
      { name: '重量', value: '3.9kg', important: true },
      { name: '噪音', value: '常规' },
      { name: '水箱容量', value: '标准' },
      { name: '特殊功能', value: '一机五用，送5个吸头', important: true }
    ],
    pros: [
      { text: '仅3.9kg，比平均轻30%' },
      { text: '一机五用，性价比高' },
      { text: '清水箱配去味棒，不怕发臭' }
    ],
    cons: [
      { text: '续航30分钟，大户型中途需充电' }
    ],
    targetAudience: '适合**租房党、小户型用户**，或对重量敏感的朋友。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 4
  },
  {
    id: 'dreame-t40',
    type: 'xidiji',
    brand: '追觅',
    model: 'T40',
    imageUrl: PRODUCT_IMAGES.dreame,
    price: {
      regularPrice: 1449,
      salePrice: 1189
    },
    specs: [
      { name: '吸力', value: '22000Pa', important: true },
      { name: '防缠绕', value: '标配' },
      { name: '续航时间', value: '40分钟' },
      { name: '烘干', value: '100℃高温浸泡+75℃热风烘干', important: true },
      { name: '重量', value: '5.5kg' },
      { name: '噪音', value: '常规' },
      { name: '水箱容量', value: '标准' },
      { name: '特殊功能', value: 'AI全向助力', important: true }
    ],
    pros: [
      { text: '22000Pa超大吸力' },
      { text: '100℃高温洗+热风烘干' },
      { text: 'AI全向助力，推拉顺滑' }
    ],
    cons: [
      { text: '净重5.5kg，提起来吃力' }
    ],
    targetAudience: '适合对重量不敏感、家里**灰尘多或厨房有重油污**的家庭。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'mijia-4pro',
    type: 'xidiji',
    brand: '米家',
    model: '4Pro',
    imageUrl: PRODUCT_IMAGES.mijia,
    price: {
      regularPrice: 1899,
      salePrice: 1262
    },
    specs: [
      { name: '吸力', value: '日常够用' },
      { name: '防缠绕', value: 'TUV认证防缠绕', important: true },
      { name: '续航时间', value: '35分钟' },
      { name: '烘干', value: '120℃高温熨烫', important: true },
      { name: '重量', value: '4.5kg' },
      { name: '噪音', value: '常规' },
      { name: '水箱容量', value: '标准' },
      { name: '特殊功能', value: '米家智能联动', important: true }
    ],
    pros: [
      { text: 'TUV认证防缠绕，不缠毛发' },
      { text: '120℃高温熨烫，不怕发霉' },
      { text: '米家智能联动方便' }
    ],
    cons: [
      { text: '大面积湿头发传感器偶敏感' },
      { text: '充电需4.5小时，偏慢' }
    ],
    targetAudience: '适合**米家全家桶用户**；家里脱发严重或养宠的家庭。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 4
  },
  {
    id: 'midea-s60pro',
    type: 'xidiji',
    brand: '美的',
    model: 'S60Pro',
    imageUrl: PRODUCT_IMAGES.midea,
    price: {
      regularPrice: 1799,
      salePrice: 1369
    },
    specs: [
      { name: '吸力', value: '日常够用' },
      { name: '防缠绕', value: '标配' },
      { name: '续航时间', value: '40分钟' },
      { name: '烘干', value: '热风烘干' },
      { name: '重量', value: '5.2kg' },
      { name: '噪音', value: '58分贝', important: true },
      { name: '水箱容量', value: '标准' },
      { name: '特殊功能', value: '双向助力', important: true }
    ],
    pros: [
      { text: '58分贝超静音，安静十几分贝' },
      { text: '双向助力调教成熟稳重' },
      { text: '售后网点遍布全国' }
    ],
    cons: [
      { text: '自清洁力度温和，可能需二次' },
      { text: '拖地后水渍相对明显' }
    ],
    targetAudience: '适合**有睡眠浅的老人或需要午睡的小婴儿**的家庭。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 4
  },
  {
    id: 'haier-a3mix',
    type: 'xidiji',
    brand: '海尔',
    model: 'A3mix',
    imageUrl: PRODUCT_IMAGES.haier,
    price: {
      regularPrice: 1999,
      salePrice: 1324
    },
    specs: [
      { name: '吸力', value: '日常够用' },
      { name: '防缠绕', value: '标配' },
      { name: '续航时间', value: '35分钟' },
      { name: '烘干', value: '85℃热水直喷搓洗', important: true },
      { name: '重量', value: '4.2kg' },
      { name: '噪音', value: '常规' },
      { name: '水箱容量', value: '偏小', important: true },
      { name: '特殊功能', value: '洗地+吸尘+除螨三合一', important: true }
    ],
    pros: [
      { text: '洗地+吸尘+除螨三合一' },
      { text: '85℃热水搓洗，不发臭' },
      { text: '配件齐全，覆盖全屋' }
    ],
    cons: [
      { text: '水箱偏小，中大户型中途需换水' }
    ],
    targetAudience: '适合**套内面积120平以内**的家庭。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 4
  }
]