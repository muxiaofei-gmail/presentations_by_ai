/**
 * 扫地机器人产品数据配置
 * 数据来源：胡侃扫地机器人选购视频
 * 价位：3000-4500元全能档
 */
import type { SaodijiProduct } from '@/shared/product-card/types'

// 产品图片（待替换）
const PRODUCT_IMAGES = {
  dreameS50Pro: 'https://via.placeholder.com/400x300/1a1a2e/10b981?text=追觅S50Pro',
  yunjingJ6: 'https://via.placeholder.com/400x300/1a1a2e/ec4899?text=云鲸J6',
  yunjingXiaoyao002: 'https://via.placeholder.com/400x300/1a1a2e/f97316?text=云鲸逍遥002',
  kevosT80S: 'https://via.placeholder.com/400x300/1a1a2e/3b82f6?text=科沃斯T80S',
  roborockP20Ultra: 'https://via.placeholder.com/400x300/1a1a2e/8b5cf6?text=石头P20Ultra'
}

export const products: SaodijiProduct[] = [
  {
    id: 'dreame-s50-pro',
    type: 'saodiji',
    brand: '追觅',
    model: 'S50 Pro',
    imageUrl: PRODUCT_IMAGES.dreameS50Pro,
    price: {
      regularPrice: 4001,
      salePrice: 2655
    },
    specs: [
      { name: '导航方式', value: '升降激光雷达', important: true },
      { name: '吸力', value: '24000Pa', important: true },
      { name: '越障能力', value: '6cm仿生机械足', important: true },
      { name: '边角覆盖', value: '双机械臂+双滚刷', important: true },
      { name: '基站', value: '100℃高温煮洗+全链路除菌' },
      { name: '机身高度', value: '最薄8.9cm' }
    ],
    pros: [
      { text: '6cm越障，跨门槛不搬机器' },
      { text: '升降雷达，精准+钻矮处' },
      { text: '双机械臂，墙角无死角' }
    ],
    cons: [
      { text: '机械结构精密，故障风险和维护成本比普通机器高，品控很关键' },
      { text: '高温煮洗更费电，洗拖布时间也稍长' }
    ],
    targetAudience: '适合**家里有高门槛、老式滑轨**的用户，再也不用手动搬机器。也适合**环境复杂、有洁癖，想一步到位**的朋友，升降雷达遇到矮家具就缩回去，家里啥角落都能钻，双机械臂让墙角死角也能扫到。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'yunjing-j6',
    type: 'saodiji',
    brand: '云鲸',
    model: 'J6',
    imageUrl: PRODUCT_IMAGES.yunjingJ6,
    price: {
      regularPrice: 3998,
      salePrice: 2759
    },
    specs: [
      { name: '导航方式', value: 'LDS激光导航', important: true },
      { name: '吸力', value: '20000Pa' },
      { name: '拖布设计', value: '履带式活水清洁', important: true },
      { name: '边角覆盖', value: '双外扩结构', important: true },
      { name: '基站', value: '动态热水洗+电解水抑菌' },
      { name: '免维护', value: '90天' }
    ],
    pros: [
      { text: '履带拖布，边拖边刮' },
      { text: '摩擦力大，油污走一遍净' },
      { text: '双外扩，不用手动补扫死角' }
    ],
    cons: [
      { text: '履带结构复杂，卷进异物不好清理，维修成本高' },
      { text: '20mm越障，家里有高门槛的要注意；少了高端AI功能' }
    ],
    targetAudience: '适合**厨房、餐厅通铺、油污重**的家庭，履带式活水清洁跟手持洗地机一样，对付顽固污渍特别管用，厨房油污走一遍就干净。也适合**总觉得以前机器拖不干净、有洁癖**的朋友。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 4
  },
  {
    id: 'yunjing-xiaoyao-002',
    type: 'saodiji',
    brand: '云鲸',
    model: '逍遥002',
    imageUrl: PRODUCT_IMAGES.yunjingXiaoyao002,
    price: {
      regularPrice: 4116,
      salePrice: 2849
    },
    specs: [
      { name: '导航方式', value: '双目摄像头+自动驾驶芯片', important: true },
      { name: '吸力', value: '22000Pa', important: true },
      { name: '拖布设计', value: '履带式活水洗地', important: true },
      { name: '防缠绕', value: '零缠绕滚刷', important: true },
      { name: '越障能力', value: '双关节40mm', important: true },
      { name: '交互', value: '语音交互（说人话就懂）' }
    ],
    pros: [
      { text: '4cm越障，门槛滑轨轻松过' },
      { text: '履带清洁，拖地更干净' },
      { text: '语音交互，使用门槛低' }
    ],
    cons: [
      { text: '履带维护麻烦，成本高' },
      { text: '机身重，搬着费劲' },
      { text: '没标配自动上下水' }
    ],
    targetAudience: '适合**地面杂物多、不爱收拾**的朋友，自动驾驶级芯片+双目摄像头，建图、扫地走位特别准，不会乱撞漏扫。也适合**家里有门槛、喜欢黑科技、追求便捷**的用户，说人话它就懂，特别顺手。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'kevos-t80s',
    type: 'saodiji',
    brand: '科沃斯',
    model: 'T80S',
    imageUrl: PRODUCT_IMAGES.kevosT80S,
    price: {
      regularPrice: 4299,
      salePrice: 2264
    },
    specs: [
      { name: '导航方式', value: '嵌入式激光雷达', important: true },
      { name: '吸力', value: '24800Pa（顶尖）', important: true },
      { name: '拖布设计', value: '洗地机滚筒', important: true },
      { name: '边角覆盖', value: '双贴边，滚筒边刷外扩', important: true },
      { name: '机身高度', value: '98mm', important: true },
      { name: '地毯保护', value: '三重抬升（拖布+主刷+边刷）' }
    ],
    pros: [
      { text: '滚筒真刷地，清洁力翻倍' },
      { text: '边刷防缠绕，养宠福音' },
      { text: '三重抬升，保护地毯' }
    ],
    cons: [
      { text: '滚筒结构复杂，维护麻烦' },
      { text: '机身稍厚，极端矮处扫不到' },
      { text: '三四千价格，有点肉疼' }
    ],
    targetAudience: '适合**全屋铺地毯的大户型**，三重抬升功能遇到地毯拖布、主刷、边刷全抬起，不会蹭脏地毯、打飞垃圾。也适合**有洁癖、家里软装贵**的朋友，24800Pa顶尖吸力啥垃圾都能吸走，滚筒对付厨房污渍比旋转拖布高效。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  },
  {
    id: 'roborock-p20-ultra',
    type: 'saodiji',
    brand: '石头',
    model: 'P20 Ultra',
    imageUrl: PRODUCT_IMAGES.roborockP20Ultra,
    price: {
      regularPrice: 4399,
      salePrice: 2649
    },
    specs: [
      { name: '导航方式', value: 'LDS激光导航', important: true },
      { name: '吸力', value: '22000Pa', important: true },
      { name: '越障能力', value: '底盘升降4cm', important: true },
      { name: '边角覆盖', value: '双机械臂', important: true },
      { name: '基站', value: '80℃高温煮洗', important: true },
      { name: '防缠绕', value: '对向零缠绕滚刷' }
    ],
    pros: [
      { text: '升降越障，卡门槛轻松过' },
      { text: '零缠绕滚刷，清理省心' },
      { text: '80度热水，化厨房油污' }
    ],
    cons: [
      { text: '机械复杂，故障风险高' },
      { text: '强力模式噪音较大' },
      { text: '拖布回洗勤，费水' }
    ],
    targetAudience: '特别推荐两类朋友：一是**家里装修复杂、有高门槛、低矮家具**的，底盘能升降4cm，阳台滑轨、厚地毯都能过；二是**养长毛猫狗，不想频繁清理滚刷**的，零缠绕滚刷不缠头发，清理省心。',
    source: '胡侃-进抖音粉丝群，有家电好价线报',
    recommendLevel: 5
  }
]