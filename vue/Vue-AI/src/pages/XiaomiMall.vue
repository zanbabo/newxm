<template>
  <div class="mall-wrapper">
    <!-- 黑色导航 -->
    <div class="black-nav">
      <div class="w">
        <div class="bla-left">
          <ul>
            <li><a href="#">小米官网</a><span>|</span></li>
            <li><a href="#">小米商城</a><span>|</span></li>
            <li><a href="#">小米澎湃OS</a><span>|</span></li>
            <li><a href="#">小米汽车</a><span>|</span></li>
            <li><a href="#">云服务</a><span>|</span></li>
            <li><a href="#">loT</a><span>|</span></li>
            <li><a href="#">有品</a><span>|</span></li>
            <li><a href="#">小爱开放平台</a><span>|</span></li>
            <li><a href="#">资质证照</a><span>|</span></li>
            <li><a href="#">协议规则</a><span>|</span></li>
            <li>
              <a href="#" class="load">下载app</a>
              <span>|</span>
              <div class="download w">
                <img src="/imges/download.png" alt="" />
                <p>小米商城APP</p>
              </div>
              <div class="stri"></div>
            </li>
            <li><a href="#">Select Location</a><span>|</span></li>
          </ul>
        </div>
        <div class="bla-right">
          <ul>
            <li><a href="#">登录<span>|</span></a></li>
            <li><a href="#">注册<span>|</span></a></li>
            <li><a href="#">消息通知<span>|</span></a></li>
            <li class="car">
              <a href="#">
                <img src="/imges/购物车空.png" alt="" />
                <i>购物车（0）</i>
              </a>
              <div class="car-list">
                <p>购物车中还没有商品，赶紧选购吧</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 白色导航 -->
    <div class="white-nav">
      <div class="w">
        <div class="logo w">
          <a href="https://www.mi.com/">
            <img src="/imges/mlogo.ico" alt="" />
          </a>
        </div>
        <div class="nav-bar w">
          <div class="null"></div>
          <ul>
            <li>
              <a href="#">Xiaomi手机</a>
              <div class="nav-bar-list">
                <ul>
                  <li v-for="i in 3" :key="i">
                    <a href="#">
                      <div class="img-box">
                        <img src="/imges/phone.png" alt="" />
                        <p class="name">Xiaomi 15</p>
                        <p class="price">4499元起</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">REDMI手机</a>
              <div class="nav-bar-list">
                <ul>
                  <li v-for="i in 3" :key="i">
                    <a href="#">
                      <div class="img-box">
                        <img src="/imges/phone.png" alt="" />
                        <p class="name">Xiaomi 15</p>
                        <p class="price">4499元起</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">电视</a>
              <div class="nav-bar-list">
                <ul>
                  <li v-for="i in 3" :key="i">
                    <a href="#">
                      <div class="img-box">
                        <img src="/imges/phone.png" alt="" />
                        <p class="name">Xiaomi 15</p>
                        <p class="price">4499元起</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">笔记本</a>
              <div class="nav-bar-list">
                <ul>
                  <li v-for="i in 3" :key="i">
                    <a href="#">
                      <div class="img-box">
                        <img src="/imges/phone.png" alt="" />
                        <p class="name">Xiaomi 15</p>
                        <p class="price">4499元起</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">平板</a>
              <div class="nav-bar-list">
                <ul>
                  <li v-for="i in 3" :key="i">
                    <a href="#">
                      <div class="img-box">
                        <img src="/imges/phone.png" alt="" />
                        <p class="name">Xiaomi 15</p>
                        <p class="price">4499元起</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">家电</a>
              <div class="nav-bar-list">
                <ul>
                  <li v-for="i in 3" :key="i">
                    <a href="#">
                      <div class="img-box">
                        <img src="/imges/phone.png" alt="" />
                        <p class="name">Xiaomi 15</p>
                        <p class="price">4499元起</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">路由器</a>
              <div class="nav-bar-list">
                <ul>
                  <li v-for="i in 3" :key="i">
                    <a href="#">
                      <div class="img-box">
                        <img src="/imges/phone.png" alt="" />
                        <p class="name">Xiaomi 15</p>
                        <p class="price">4499元起</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">服务中心</a>
              <div class="nav-bar-list">
                <ul>
                  <li v-for="i in 3" :key="i">
                    <a href="#">
                      <div class="img-box">
                        <img src="/imges/phone.png" alt="" />
                        <p class="name">Xiaomi 15</p>
                        <p class="price">4499元起</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">社区</a>
              <div class="nav-bar-list">
                <ul>
                  <li v-for="i in 3" :key="i">
                    <a href="#">
                      <div class="img-box">
                        <img src="/imges/phone.png" alt="" />
                        <p class="name">Xiaomi 15</p>
                        <p class="price">4499元起</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="search">
          <input ref="searchInput" type="text" placeholder="路由器" />
          <ul ref="searchList" class="search-list">
            <li><a href="#">手机换新</a></li>
            <li><a href="#">小米手环9</a></li>
            <li><a href="#">笔记本</a></li>
            <li><a href="#">门锁</a></li>
            <li><a href="#">热水器</a></li>
            <li><a href="#">充电宝</a></li>
            <li><a href="#">小米手机</a></li>
          </ul>
          <button class="iconfont">
            <img src="/imges/搜索.png" alt="" />
          </button>
        </div>
      </div>
    </div>

    <!-- banner部分 -->
    <div class="banner">
      <div class="w">
        <div class="box">
          <div ref="imgList" class="imglist">
            <a href="#" class="show"><img src="/imges/1.jpg" alt="" /></a>
            <a href="#"><img src="/imges/2.webp" alt="" /></a>
            <a href="#"><img src="/imges/3.webp" alt="" /></a>
          </div>
          <div ref="leftBtn" class="leftbtn">&lt;</div>
          <div ref="rightBtn" class="rightbtn">&gt;</div>
          <div ref="btnList" class="btnlist">
            <span class="che"></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <!-- slide侧边栏 -->
        <div class="slide">
          <ul>
            <li v-for="(category, idx) in slideCategories" :key="idx">
              <a href="#">{{ category.name }}<img src="/imges/箭头-right.png" alt="" /></a>
              <div class="slide-list">
                <ul>
                  <li v-for="(sub, subIdx) in category.subs" :key="subIdx">
                    <a href="#">
                      <img src="/imges/phone.png" alt="" />
                      <span>{{ sub }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 广告 -->
    <div class="ad">
      <div class="w">
        <div class="ad-left">
          <ul>
            <li v-for="(item, idx) in adItems" :key="idx">
              <a href="#">
                <img :src="item.img" alt="" />
                <p>{{ item.text }}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="ad-img" v-for="i in 3" :key="i">
          <img src="/imges/ad.png" alt="" />
        </div>
      </div>
    </div>
<!--    内容区域-->
    <div class="content">
      <div class="w">
        <!-- 手机 -->
        <div class="phone">
          <div class="photo">
            <a href="#"><img src="/imges/phone-ad.webp" alt="" /></a>
          </div>
          <h3 class="title">手机</h3>
          <div class="phone-box">
            <div class="phone-box-left">
              <a href="#"><img src="/imges/phone-le.webp" alt="" /></a>
            </div>
            <div class="phone-box-right">
              <div class="item" v-for="i in 8" :key="i">
                <a href="#">
                  <img src="/imges/phone-ri.webp" alt="" class="item-img" />
                  <p class="item-name">小米</p>
                  <p class="item-s">首发</p>
                  <p class="item-price">299元起</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 智能穿戴（带tab切换） -->
        <div class="ai">
          <div class="tab-nav ai-tab-nav">
            <h3 class="title">智能穿戴</h3>
            <ul ref="tabNavUl">
              <li><a class="active" href="javascript:;" data-id="0">耳机</a></li>
              <li><a href="javascript:;" data-id="1">穿戴</a></li>
              <li><a href="javascript:;" data-id="2">热门</a></li>
            </ul>
          </div>
          <div class="tab-content ai-tab-content">
            <div class="ai-box itembig active" v-for="(tab, idx) in tabContents" :key="idx" :class="{ active: idx === currentTab }">
              <div class="phone-box-left">
                <a href="#"><img :src="tab.leftImg" alt="" /></a>
              </div>
              <div class="item" v-for="item in tab.items" :key="item.id">
                <a href="#">
                  <img :src="item.img" alt="" class="item-img" />
                  <p class="item-name">{{ item.name }}</p>
                  <p class="item-s">{{ item.desc }}</p>
                  <p class="item-price">{{ item.price }}<del>{{ item.oldPrice }}</del></p>
                </a>
              </div>
              <div class="item-last">
                <div><img src="/imges/耳机.webp" alt="" /></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 家电 -->
        <div class="elc">
          <div class="elc-box">
            <p class="title">家电</p>
            <div class="item elc-item">
              <a href="#"><img src="/imges/电视.webp" alt="" /></a>
            </div>
            <div class="item" v-for="i in 3" :key="i">
              <a href="#">
                <img src="/imges/phone-ri.webp" alt="" class="item-img" />
                <p class="item-name">小米</p>
                <p class="item-s">首发</p>
                <p class="item-price">299元起</p>
              </a>
            </div>
            <div class="item elc-item">
              <a href="#"><img src="/imges/洗.webp" alt="" /></a>
            </div>
            <div class="item" v-for="i in 3" :key="i">
              <a href="#">
                <img src="/imges/phone-ri.webp" alt="" class="item-img" />
                <p class="item-name">小米</p>
                <p class="item-s">首发</p>
                <p class="item-price">299元起</p>
              </a>
            </div>
            <div class="item-last">
              <div><img src="/imges/耳机.webp" alt="" /></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="footer">
      <div class="w">
        <div class="footer-service">
          <ul>
            <li v-for="(srv, idx) in services" :key="idx">
              <a href="#">
                <img :src="srv.img" alt="" />
                <span>{{ srv.text }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-link">
          <div class="col-link"></div>
          <ul v-for="(col, idx) in footerLinks" :key="idx">
            <li>{{ col.title }}</li>
            <li v-for="link in col.links" :key="link"><a href="#">{{ link }}</a></li>
          </ul>
          <div class="side">
            <p class="number">400-100-5678</p>
            <p class="time">8:00-18:00（仅收市话费）</p>
            <a href="#" class="kefu">客服</a>
            <p class="number">400-100-5678</p>
            <p class="time">8:00-18:00（仅收市话费）<br />适用于</p>
            <a href="#" class="kefu">客服</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 侧边栏 -->
    <div class="elevator-list">
      <ul>
        <li>
          <a href="#">
            <img src="/imges/手机%20(5).png" alt="" class="eleimg" />
            <p>手机APP</p>
            <div class="scan">
              <img src="/imges/scan.png" alt="" />
              <p>扫码领取<br />新人百元红包</p>
            </div>
          </a>
        </li>
        <li><a href="#"><img src="/imges/用户%20(1).png" alt="" class="eleimg" /><p>个人中心</p></a></li>
        <li><a href="#"><img src="/imges/维修服务%20(5).png" alt="" class="eleimg" /><p>售后服务</p></a></li>
        <li><a href="#"><img src="/imges/客服.png" alt="" class="eleimg" /><p>人工客服</p></a></li>
        <li><a href="#"><img src="/imges/购物车空%20(1).png" alt="" class="eleimg" /><p>购物车</p></a></li>
        <li ref="backtop" class="backtop">
          <a href="javascript:;">
            <img src="/imges/回顶部%20(1).png" alt="" class="eleimg" />
            <p>回顶部</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from 'vue';


const slideCategories = [
  {
    name: '手机',
    subs: ['Xiaomi手机', 'Redmi手机', '小米MIX', '小米CC', '手机保护壳', '手机贴膜', '手机充电器', '手机耳机']
  },
  {
    name: '电视',
    subs: ['小米电视', 'Redmi电视', '电视配件', '电视盒子', '投影仪', '电视支架', '电视音响', '电视遥控器']
  },
  {
    name: '家电',
    subs: ['空调', '冰箱', '洗衣机', '热水器', '净水器', '空气净化器', '扫地机器人', '电饭煲']
  },
  {
    name: '笔记本',
    subs: ['小米笔记本', 'Redmi笔记本', '笔记本配件', '笔记本包', '笔记本鼠标', '笔记本电源', '笔记本散热', '笔记本支架']
  },
  {
    name: '平板',
    subs: ['小米平板', 'Redmi平板', '平板配件', '平板保护壳', '平板贴膜', '平板支架', '平板键盘', '平板笔']
  },
  {
    name: '出行 穿戴',
    subs: ['小米手环', 'Redmi手环', '智能手表', '运动手表', '儿童手表', '出行配件', '穿戴配件', '运动配件']
  },
  {
    name: '耳机 音箱',
    subs: ['小米耳机', 'Redmi耳机', '蓝牙耳机', '有线耳机', '智能音箱', '蓝牙音箱', '耳机配件', '音箱配件']
  },
  {
    name: '健康 儿童',
    subs: ['健康监测', '儿童手表', '儿童故事机', '儿童玩具', '健康秤', '血压计', '体温计', '健康配件']
  },
  {
    name: '生活 箱包',
    subs: ['背包', '手提包', '旅行箱', '钱包', '生活用品', '家居用品', '办公用品', '户外用品']
  },
  {
    name: '智能 路由器',
    subs: ['小米路由器', 'Redmi路由器', '智能网关', '智能插座', '智能灯泡', '智能摄像头', '智能门锁', '智能配件']
  },
  {
    name: '电源 配件',
    subs: ['充电宝', '充电器', '数据线', '电源适配器', '车载充电器', '无线充电器', '电源配件', '电池']
  }
];

const adItems = [
  { img: '/imges/保障.png', text: '保障服务' },
  { img: '/imges/企业.png', text: '企业团购' },
  { img: '/imges/F.png', text: 'F码通道' },
  { img: '/imges/米粉.png', text: '米粉卡' },
  { img: '/imges/以旧.png', text: '以旧换新' },
  { img: '/imges/话费.png', text: '话费充值' }
];

const services = [
  { img: '/imges/预约维修.png', text: '预约维修' },
  { img: '/imges/7天无理由退货%20(32).png', text: '7天无理由退货' },
  { img: '/imges/15天（2）.png', text: '15天免费换货' },
  { img: '/imges/礼物盒.png', text: '满69包邮' },
  { img: '/imges/地点.png', text: '1100余家售后网点' }
];

const footerLinks = [
  { title: '选购指南', links: ['耳机', '耳机', '耳机', '耳机', '耳机', '耳机'] },
  { title: '服务中心', links: ['了解小米', '了解小米', '了解小米'] },
  { title: '服务中心', links: ['了解小米', '了解小米', '了解小米'] },
  { title: '服务中心', links: ['了解小米', '了解小米', '了解小米'] },
  { title: '服务中心', links: ['申请售后', '申请售后', '申请售后'] }
];

const tabContents = reactive([
  {
    leftImg: '/imges/ai.webp',
    items: [
      { id: 1, img: '/imges/aiimg.webp', name: '活力版', desc: '三单元', price: '399元起', oldPrice: '599元' },
      { id: 2, img: '/imges/aiimg.webp', name: '活力版', desc: '三单元', price: '399元起', oldPrice: '599元' },
      { id: 3, img: '/imges/aiimg.webp', name: '活力版', desc: '三单元', price: '399元起', oldPrice: '599元' },
      { id: 4, img: '/imges/aiimg.webp', name: '活力版', desc: '三单元', price: '399元起', oldPrice: '599元' },
      { id: 5, img: '/imges/phone-ri.webp', name: '小米', desc: '首发', price: '299元起', oldPrice: '' },
      { id: 6, img: '/imges/phone-ri.webp', name: '小米', desc: '首发', price: '299元起', oldPrice: '' },
      { id: 7, img: '/imges/phone-ri.webp', name: '小米', desc: '首发', price: '299元起', oldPrice: '' }
    ]
  },
  {
    leftImg: '/imges/ai.webp',
    items: [
      { id: 8, img: '/imges/穿戴.webp', name: 'REDMI Buds 6 Pro', desc: '2.07英寸高刷高亮大屏 | 24天超长续航', price: '399元起', oldPrice: '599元' },
      { id: 9, img: '/imges/aiimg.webp', name: '活力版', desc: '三单元', price: '399元起', oldPrice: '599元' },
      { id: 10, img: '/imges/穿戴.webp', name: 'REDMI Buds 6 Pro', desc: '2.07英寸高刷高亮大屏 | 24天超长续航', price: '399元起', oldPrice: '599元' },
      { id: 11, img: '/imges/aiimg.webp', name: '活力版', desc: '三单元', price: '399元起', oldPrice: '599元' },
      { id: 12, img: '/imges/穿戴.webp', name: 'REDMI Buds 6 Pro', desc: '2.07英寸高刷高亮大屏 | 24天超长续航', price: '399元起', oldPrice: '599元' },
      { id: 13, img: '/imges/phone-ri.webp', name: '小米', desc: '首发', price: '299元起', oldPrice: '' },
      { id: 14, img: '/imges/phone-ri.webp', name: '小米', desc: '首发', price: '299元起', oldPrice: '' }
    ]
  },
  {
    leftImg: '/imges/phone_left.jpg',
    items: [
      { id: 15, img: '/imges/活力版.webp', name: '活力版', desc: '三单元', price: '399元起', oldPrice: '599元' },
      { id: 16, img: '/imges/aiimg.webp', name: '活力版', desc: '三单元', price: '399元起', oldPrice: '599元' },
      { id: 17, img: '/imges/活力版.webp', name: '活力版', desc: '三单元', price: '399元起', oldPrice: '599元' },
      { id: 18, img: '/imges/aiimg.webp', name: '活力版', desc: '三单元', price: '399元起', oldPrice: '599元' },
      { id: 19, img: '/imges/phone-ri.webp', name: '小米', desc: '首发', price: '299元起', oldPrice: '' },
      { id: 20, img: '/imges/phone-ri.webp', name: '小米', desc: '首发', price: '299元起', oldPrice: '' },
      { id: 21, img: '/imges/phone-ri.webp', name: '小米', desc: '首发', price: '299元起', oldPrice: '' }
    ]
  }
]);


const searchInput = ref<HTMLInputElement | null>(null);
const searchList = ref<HTMLElement | null>(null);
const imgList = ref<HTMLElement | null>(null);
const leftBtn = ref<HTMLElement | null>(null);
const rightBtn = ref<HTMLElement | null>(null);
const btnList = ref<HTMLElement | null>(null);
const tabNavUl = ref<HTMLElement | null>(null);
const backtop = ref<HTMLElement | null>(null);


const currentIndex = ref(0);
let timer: number | null = null;


const currentTab = ref(0);

// ---------- 方法 ----------
// 搜索框焦点
const initSearch = () => {
  const input = searchInput.value;
  const ul = searchList.value;
  if (!input || !ul) return;
  input.addEventListener('focus', () => {
    ul.style.display = 'block';
    input.classList.add('text');
  });
  input.addEventListener('blur', () => {
    ul.style.display = 'none';
    input.classList.remove('text');
  });
};

// 轮播图公共方法
const updateCarousel = () => {
  const items = imgList.value?.querySelectorAll('a');
  const dots = btnList.value?.querySelectorAll('span');
  if (!items || !dots) return;
  items.forEach((el, i) => {
    el.classList.toggle('show', i === currentIndex.value);
  });
  dots.forEach((el, i) => {
    el.classList.toggle('che', i === currentIndex.value);
  });
};

// 自动播放
const startAutoPlay = () => {
  if (timer) clearInterval(timer);
  timer = window.setInterval(() => {
    const items = imgList.value?.querySelectorAll('a');
    if (!items) return;
    currentIndex.value = (currentIndex.value + 1) % items.length;
    updateCarousel();
  }, 3000);
};

const stopAutoPlay = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

// 左右按钮点击
const initCarouselControls = () => {
  const left = leftBtn.value;
  const right = rightBtn.value;
  if (!left || !right) return;
  left.addEventListener('click', () => {
    stopAutoPlay();
    const items = imgList.value?.querySelectorAll('a');
    if (!items) return;
    currentIndex.value = (currentIndex.value - 1 + items.length) % items.length;
    updateCarousel();
    startAutoPlay();
  });
  right.addEventListener('click', () => {
    stopAutoPlay();
    const items = imgList.value?.querySelectorAll('a');
    if (!items) return;
    currentIndex.value = (currentIndex.value + 1) % items.length;
    updateCarousel();
    startAutoPlay();
  });
};

// 指示器点击
const initDots = () => {
  const dots = btnList.value?.querySelectorAll('span');
  if (!dots) return;
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      stopAutoPlay();
      currentIndex.value = idx;
      updateCarousel();
      startAutoPlay();
    });
  });
};

// Tab切换
const initTabs = () => {
  const ul = tabNavUl.value;
  if (!ul) return;
  ul.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A') {
      // 移除所有active
      ul.querySelectorAll('a').forEach(a => a.classList.remove('active'));
      target.classList.add('active');
      // 获取data-id
      const id = parseInt(target.dataset.id || '0');
      currentTab.value = id;
    }
  });
};

// 返回顶部
const initBacktop = () => {
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (backtop.value) {
      backtop.value.style.opacity = scrollTop >= 300 ? '1' : '0';
    }
  };
  window.addEventListener('scroll', handleScroll);
  // 点击返回顶部
  if (backtop.value) {
    backtop.value.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  // 保存清理函数
  return handleScroll;
};

let scrollHandler: ((this: Window, ev: Event) => any) | null = null;

// ---------- 生命周期 ----------
onMounted(() => {
  initSearch();
  // 轮播图初始化
  updateCarousel();
  startAutoPlay();
  initCarouselControls();
  initDots();
  // Tab
  initTabs();
  // 返回顶部
  const handler = initBacktop();
  scrollHandler = handler as any;
});

onUnmounted(() => {
  stopAutoPlay();
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler);
  }
});
</script>

<!-- 必须写在 style 标签内部，不能写在标签的 src 属性上 -->
<style scoped>
/* 引入外部长css文件 */
@import "../assets/xm.css";


</style>