<template>
  <div class="home">

    <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero" />

      <h1>{{ title }}</h1>

      <p class="description">
        数字化转型的最佳平台，协助中小企业快速平台化、中台化、数字化
      </p>

      <p v-if="data.actionText && data.actionLink" class="action">
        <NavLink class="action-button" :item="actionLink" />
      </p>
    </div>

    <section class="row td-box td-box--primary position-relative td-box--gradient td-box--height-auto">
      <div class="container text-center td-arrow-down">
        <span class="h4 mb-0">
          <h3>中台服务 ACP产品优势</h3>
          <p>
            针对于大中小型团队合适的开发平台，支持微服务化、中台化、统一权限和基础能力管理， 统一企业研发业务规范，集成DevOps自动化流程，为业务上层研发提供基础的研发环境，规范化的开发，为后期业务的沉淀 形成基础
          </p>
        </span>
      </div>
    </section>

    <div class="features-box" style="background-color:rgb(244, 244, 244)">
      <div v-if="functionAll.length" class="features" style="background-color:rgb(244, 244, 244)">
        <div
          v-for="(feature, index) in functionAll"
          :key="index"
          class="feature"
        >
          <div class="title-icon">
            <img :src="$withBase('/svg/' + feature.icon)" />
          </div>
          <h3>{{ feature.title }}</h3>
          <p style="text-align:left">{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <section class="row td-box td-box--primary position-relative td-box--gradient td-box--height-auto" style="background-color:#fff">
      <div class="container text-center td-arrow-down">
        <span class="h4 mb-0">
          <h3 style="color:#555">ACP 可以帮助我做什么</h3>
          <p style="color:#555">为业务上层研发提供基础的研发环境，规范化的开发，为后期业务的沉淀 形成基础</p>
        </span>
      </div>
    </section>

    <div class="features-box" style="background-color:#fff">
      <div v-if="helpAll.length" class="features" style="background-color:#fff">
        <div
          v-for="(feature, index) in helpAll"
          :key="index"
          class="feature"
        >
          <div class="title-icon">
            <img :src="$withBase('/svg/' + feature.icon)" />
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.details }}</p>
        </div>
      </div>

      <div data-v-1277a197="" style="position: relative;width: 1024px;margin: auto;">
        <img data-v-1277a197="" src="https://img.alicdn.com/tfs/TB14Ay4oggP7K4jSZFqXXamhVXa-2360-1324.png" style="width: 100%;margin: auto;">
      </div>

    </div>

    <section class="row td-box td-box--primary position-relative td-box--gradient td-box--height-auto" style="background-color:rgb(255 124 0)">
      <div class="container text-center td-arrow-down">
        <span class="h4 mb-0">
          <h3>产品功能</h3>
          <p>为业务上层研发提供基础的研发环境，规范化的开发，为后期业务的沉淀 形成基础，更好的沉淀企业资产,业务架构师的规划， 进行核心业务的改造和各个业务线的整合，形成行业的业务标准和 一套解决方案，形成自己的核心竞争力
            </p>
        </span>
      </div>
    </section>

    <div class="features-box" style="padding:6rem 0">
      <div v-if="featuresAll.length" class="features">
        <div
          v-for="(feature, index) in featuresAll"
          :key="index"
          class="feature"
        >
          <div class="title-icon">
            <img :src="$withBase('/svg/' + feature.icon)" />
          </div>
          <h3>{{ feature.title }}</h3>
          <p style="text-align:left">{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <home-service />

    <!-- 案例说明_start -->
    <case-temp />
    <!-- 案例说明_end -->

    <div class="hero-section">
      <p class="title">加入讨论</p>
      <p class="description" style="width:80%;max-width:700px;margin:auto;">
        通过以下方式加入讨论，或为数字化建设添砖加瓦
      </p>
    </div>

    <div class="footer-section">
      <ul>
        <li>
          <p class="icon">
            <img :src="$withBase('/weixin.jpg')" />
          </p>
          <p class="label">社区交流群</p>
          <p class="tip">数字化平台微信社区交流群,参与社区的讨论</p>
        </li>
        <li>
          <p class="icon">
            <img :src="$withBase('/svg/GitHub.svg')" />
          </p>
          <p class="label">欢迎参与贡献！</p>
          <p class="tip">在 <a href="https://github.com/alinesno-cloud/alinesno-platform-press" target="_blank" >GitHub</a> 上协作。我们期待您的加入！</p>
        </li>
        <li>
          <p class="icon">
            <img :src="$withBase('/luoxiaodong.jpg')" />
          </p>
          <p class="label">请关注我们的公众号！</p>
          <p class="tip">我们会在第一时间分享新发布的特性和使用心得</p>
        </li>
      </ul>
    </div>

    <Content custom />

    <!-- footer_start -->
    <footer-temp />
    <!-- footer_end -->

    <!-- <div v-if="data.footer" class="footer">{{ data.footer }}</div> -->

  </div>
</template>

<script>
import NavLink from '@default-theme/NavLink.vue'
import CaseTemp from './Case.vue'
import HomeService from './HomeService.vue'
import FooterTemp from './Footer.vue'

import { isGitee } from './utils'

export default {
  components: {
    NavLink,
    HomeService,
    CaseTemp,
    FooterTemp
  },
  data() {
    return {
      title: '全新一代企业级数字化PaaS平台',
      saasTitle: '企业级数字化平台',
      saasUrl: 'http://v212.ui.saas.dev.lbxinhu.linesno.com:23456/',
      helpAll: [
        {
          title: '开箱即用的研发中台体系',
          details:
            '数字企业的研发效能引擎，功能覆盖了项目应用管理、代码仓库管理、有效提高企业的管理、研发、过程自动化流水。',
          icon: '7.png'
        },
        {
          title: '快速实现研发中台和业务集成',
          details:
            '数字企业的研发效能引擎，功能覆盖了项目应用管理、代码仓库管理、有效提高企业的管理、研发、过程自动化流水。',
          icon: '8.png'
        },
        {
          title: '研发中台和团队组快速结合',
          details:
            '数字企业的研发效能引擎，功能覆盖了项目应用管理、代码仓库管理、有效提高企业的管理、研发、过程自动化流水。',
          icon: '9.png'
        }
      ],
      functionAll: [
        {
          title: '完善的微服务体系',
          details:
            '数字企业的研发效能引擎，功能覆盖了项目应用管理、代码仓库管理、敏捷项目协作管理、CI/CD、高效地响应需求变化，过程自动化流水。',
          icon: '1.png'
        },
        {
          title: '可视化多团队研发平台',
          details:
            '数字企业的研发效能引擎，功能覆盖了项目应用管理、代码仓库管理、敏捷项目协作管理、CI/CD、高效地响应需求变化，过程自动化流水。',
          icon: '2.png'
        },
        {
          title: '通用的业务开发组件',
          details:
            '数字企业的研发效能引擎，功能覆盖了项目应用管理、代码仓库管理、敏捷项目协作管理、CI/CD、高效地响应需求变化，过程自动化流水。',
          icon: '3.png'
        },
        {
          title: '技术研发监控体系',
          details:
            '数字企业的研发效能引擎，功能覆盖了项目应用管理、代码仓库管理、敏捷项目协作管理、CI/CD、高效地响应需求变化，过程自动化流水。',
          icon: '4.png'
        },
        {
          title: '云原生容器化持续集成',
          details:
            '数字企业的研发效能引擎，功能覆盖了项目应用管理、代码仓库管理、敏捷项目协作管理、CI/CD、高效地响应需求变化，过程自动化流水。',
          icon: '5.png'
        },
        {
          title: '完善的项目实践文档',
          details:
            '数字企业的研发效能引擎，功能覆盖了项目应用管理、代码仓库管理、敏捷项目协作管理、CI/CD、高效地响应需求变化，过程自动化流水。',
          icon: '6.png'
        }
      ],
      featuresAll: [
        {
          title: '一套技术DevOps研发体系',
          details:
            '治理提供服务鉴权、服务测试、无损下线、离群实例摘除、金丝雀灰度发布、临近路由等微服务核心功能 , 支持所有注册中心，可继续使用原注册中心，完整提供所有治理能力',
          icon: '9.png'
        },
        {
          title: '统一的前端框架和微服务研发引擎',
          details:
            '治理提供服务鉴权、服务测试、无损下线、离群实例摘除、金丝雀灰度发布、临近路由等微服务核心功能 , 支持所有注册中心，可继续使用原注册中心，完整提供所有治理能力',
          icon: '8.png'
        },
        {
          title: '成熟的研发组件跨团队多部门',
          details:
            '治理提供服务鉴权、服务测试、无损下线、离群实例摘除、金丝雀灰度发布、临近路由等微服务核心功能 , 支持所有注册中心，可继续使用原注册中心，完整提供所有治理能力',
          icon: '2.png'
        },
        {
          title: '集成权限多个管理基础组件',
          details:
            '治理提供服务鉴权、服务测试、无损下线、离群实例摘除、金丝雀灰度发布、临近路由等微服务核心功能 , 支持所有注册中心，可继续使用原注册中心，完整提供所有治理能力',
          icon: '4.png'
        },
        {
          title: '日志异常监控通知和运维部署实践',
          details:
            '治理提供服务鉴权、服务测试、无损下线、离群实例摘除、金丝雀灰度发布、临近路由等微服务核心功能 , 支持所有注册中心，可继续使用原注册中心，完整提供所有治理能力',
          icon: '6.png'
        },
        {
          title: '技术研发中台和数据中台底座',
          details:
            '治理提供服务鉴权、服务测试、无损下线、离群实例摘除、金丝雀灰度发布、临近路由等微服务核心功能 , 支持所有注册中心，可继续使用原注册中心，完整提供所有治理能力',
          icon: '5.png'
        }
      ]
    }
  },
  computed: {
    isCN() {
      // return this.$lang === 'zh-CN'
      return true
    },
    isGitee() {
      if (this.$isServer) return
      return isGitee()
    },
    data() {
      return this.$page.frontmatter
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods: {
    clickCoding(tag) {
      ga('send', 'click', 'e.coding', 'Action', tag)
    }
  }
}
</script>

<style lang="stylus">
@import '~@default-theme/styles/config.styl';

$accentColor = #005bd4;

.home {
  padding: $navbarHeight 0rem 0;
  max-width: 100%;
  margin: 0px auto;

  .hero {
    text-align: center;
    padding: 4rem 0px;
    background: url('/banner_bg.svg') center bottom / 1600px no-repeat;
    background-repeat: no-repeat;
    background-position: center;

    >img {
      max-height: 330px;
      display: block;
      margin: 2rem auto 1.5rem;
    }

    h1 {
      font-size: 2rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 65rem;
      font-size: 1.25rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
      font-weight: bold;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features-box {
    background-color: #f7fbfd;
    padding: 2rem 0px;
  }

  .features {
    padding: 1rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
    text-align: center;
    background-color: #f7fbfd;
    max-width: 1200px;
    margin: auto;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    margin-bottom: 30px;

    &:hover {
      cursor: pointer;
    }

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2rem;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

.footer-section {
  text-align: center;
  padding: 4rem 0px;
  background-color: rgb(37, 37, 37) ; 
  float: left;
  width: 100%;
  margin-bottom: 0px;

  p {
    color: #fff;
    line-height: 0.9rem;
  }

  ul {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 0px;
  }

  li {
    float: left;
    width: 33%;
  }

  .icon {
    font-size: 1.8rem;
    line-height: 0.5rem;
    padding: 0px;
    margin: 10px;

    img {
      width: 80px;
      border-radius: 2px;
    }
  }
}

.hero-section {
  text-align: center;
  padding: 3rem 0px;

  .title {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .description {
    font-size: 1.25rem;
    line-height: 1.3;
    color: #015bd4;
    font-weight: bold;
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .footer-section li{
      width: 100% ;
      list-style: none;
    }

    .footer-page .container .col-md-3 {
      width: 100% ;
      margin-bottom: 20px;
    }

    .hero {
      background: none ;
      img {
        width: 100%;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
        color: #015bd4;
        font-weight: bold;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}

.title-icon {
  font-size: 2.2rem;
  color: $accentColor;

  img {
    width: 45px;
  }
}

.td-box--primary {
    color: #fff;
    background-color: #015bd4 ; 
    padding-top: 4rem;
    padding-bottom: 4rem;
    text-align: center!important;
    font-size: 1rem;
    font-weight: 400;

    .td-arrow-down{
      max-width: 1140px;
      margin: auto;
      font-size: 18px;
    }

    .td-box--primary:before {
        left: 50%;
        margin-left: -30px;
        bottom: -40px;
        border-style: solid;
        border-width: 25px 30px 0;
        border-color: #2ba3de transparent transparent transparent;
        z-index: 3;
        position: absolute;
        content: "";
    }

}

</style>
