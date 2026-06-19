<template>
  <div class="main-container">
    <div class="function-container">
      <!-- 小米手机 -->
      <div class="card top">
        <h2>小米手机</h2>
        <p>探索最新小米手机，旗舰性能，徕卡影像，骁龙8至尊版，为发烧而生。</p>
        <div class="card-button">
          <el-button type="primary" plain @click="goToMall('phone')">立即查看</el-button>
        </div>
      </div>
      <!-- 电视 -->
      <div class="card top">
        <h2>电视</h2>
        <p>大屏智慧生活，小米电视全家桶，AI画质引擎，沉浸式影音体验。</p>
        <div class="card-button">
          <el-button type="primary" plain @click="goToMall('tv')">立即查看</el-button>
        </div>
      </div>
      <!-- 笔记本 -->
      <div class="card top">
        <h2>笔记本</h2>
        <p>轻薄高效，Redmi/小米笔记本系列，办公娱乐两不误，续航持久。</p>
        <div class="card-button">
          <el-button type="primary" plain @click="goToMall('laptop')">立即查看</el-button>
        </div>
      </div>
      <!-- 智能穿戴 -->
      <div class="card">
        <h2>智能穿戴</h2>
        <p>手环、手表，运动健康新体验，心率监测、睡眠分析，全天候守护。</p>
        <div class="card-button">
          <el-button type="primary" plain @click="goToMall('wearable')">立即查看</el-button>
        </div>
      </div>
      <!-- 家电 -->
      <div class="card">
        <h2>家电</h2>
        <p>空调、冰箱、洗衣机，品质生活必备，智能互联，节能环保。</p>
        <div class="card-button">
          <el-button type="primary" plain @click="goToMall('appliance')">立即查看</el-button>
        </div>
      </div>
      <!-- 路由器 -->
      <div class="card">
        <h2>路由器</h2>
        <p>全屋Wi-Fi，智能网络中枢，高速稳定，Mesh组网，信号无死角。</p>
        <div class="card-button">
          <el-button type="primary" plain @click="goToMall('router')">立即查看</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

// 跳转到商城页面，并可携带分类参数（便于后续扩展）
const goToMall = (category: string) => {
  // 可以传递query参数，商城组件可以通过route.query.category获取
  router.push({ path: '/mall', query: { category } });
  // 如果暂时不需要分类参数，可以直接 router.push('/mall')
};
</script>

<style scoped>
.main-container {
  width: 1110px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
}

.function-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  height: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: all 0.3s ease;
  margin: 0;
}


.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.top {
  margin-top: 50px;
}

h2 {
  margin-top: 0;
  color: #333;
}

p {
  color: #666;
  text-align: center;
  padding: 0 10px;
}

.card-button {
  margin-top: 30px;
}

/* 为了保持原有布局，可以不需要额外的左右边距，因为grid已经自动居中 */
/* 如果有需要，可以微调卡片位置 */
</style>