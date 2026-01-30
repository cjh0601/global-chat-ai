import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StepCard from "@/components/shared/StepCard";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Users,
  Phone,
  MessageCircle,
  ArrowRight,
  Check,
  Clock,
  Zap,
  Headphones,
  FileText,
  Video,
  Shield,
  Star,
  ChevronRight,
  Mail,
  Building,
} from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
              <Settings className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                极速配置 · 专业支持
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              15分钟极速配置
              <br />
              <span className="text-gradient-accent">专业团队全程支持</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              可视化后台操作，小白也能轻松上手。
              还有<strong className="text-foreground">免费1对1人工接入指导</strong>，让你的AI客服快速上线。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" className="group">
                <Headphones className="w-5 h-5" />
                领取配置支持
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                查看配置教程
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>平均15分钟完成配置</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>1对1专属指导</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                <span>7×24小时技术支持</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Steps Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              简单<span className="text-gradient-accent">3步</span>，AI客服上线
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              可视化操作后台，无需技术背景，跟着步骤做就能完成配置
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Steps */}
            <div className="space-y-2">
              <StepCard
                step={1}
                icon={Settings}
                title="绑定店铺"
                description="登录后台，选择您的电商平台（亚马逊、eBay、Shopify等），按提示授权绑定店铺，1分钟搞定。"
              />
              <StepCard
                step={2}
                icon={FileText}
                title="导入商品"
                description="一键同步商品信息，AI会自动学习您的产品详情、常见问题，生成智能回复知识库。"
              />
              <StepCard
                step={3}
                icon={Zap}
                title="启动AI客服"
                description="设置自动回复规则、工作时间、转接条件，点击启动，您的AI客服就上线了！"
                isLast
              />
            </div>

            {/* Visual Demo */}
            <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
              <div className="bg-muted px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-festival-gold/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <span className="text-sm text-muted-foreground ml-2">跨境聚聊 · 配置中心</span>
              </div>
              <div className="p-6">
                {/* Store binding UI mockup */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-accent" />
                    步骤1：绑定店铺
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Amazon", "eBay", "Shopify", "速卖通"].map((platform) => (
                      <div
                        key={platform}
                        className="p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/5 cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <span className="font-medium text-foreground">{platform}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/3 gradient-accent rounded-full" />
                  </div>
                  <span className="text-sm text-muted-foreground">33%</span>
                </div>

                {/* Connected store */}
                <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-success" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Amazon US - My Store</p>
                        <p className="text-sm text-muted-foreground">已连接 · 同步中</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-success/20 text-success text-xs font-medium rounded">
                      在线
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              <span className="text-gradient-accent">专业团队</span>，全程护航
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              从配置到上线，从日常使用到优化调整，我们的团队随时为您服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">1对1接入指导</h3>
              <p className="text-muted-foreground text-sm mb-4">
                专属客户经理远程协助，手把手教您完成店铺绑定、商品导入和AI配置，确保顺利上线。
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-medium">
                <Check className="w-4 h-4" />
                <span>免费服务</span>
              </div>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5">
                <Headphones className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">7×24小时技术支持</h3>
              <p className="text-muted-foreground text-sm mb-4">
                无论何时遇到问题，都可以联系我们的技术团队。工单响应时间不超过2小时。
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-medium">
                <Clock className="w-4 h-4" />
                <span>平均响应 &lt; 30分钟</span>
              </div>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5">
                <Video className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">视频教程库</h3>
              <p className="text-muted-foreground text-sm mb-4">
                完整的视频教程和操作文档，覆盖所有功能模块，随时学习，自主解决问题。
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-medium">
                <FileText className="w-4 h-4" />
                <span>50+ 教程视频</span>
              </div>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5">
                <Star className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">定期优化回访</h3>
              <p className="text-muted-foreground text-sm mb-4">
                客户成功团队定期回访，分析AI客服数据，提供优化建议，持续提升效果。
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-medium">
                <Check className="w-4 h-4" />
                <span>每月1次</span>
              </div>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5">
                <Shield className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">数据安全保障</h3>
              <p className="text-muted-foreground text-sm mb-4">
                企业级数据加密，通过ISO27001认证，您的店铺数据和客户信息安全无忧。
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-medium">
                <Shield className="w-4 h-4" />
                <span>ISO27001认证</span>
              </div>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5">
                <Zap className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">快速迭代更新</h3>
              <p className="text-muted-foreground text-sm mb-4">
                产品团队每周发布新功能，持续优化AI能力，让您的客服系统越用越智能。
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-medium">
                <Zap className="w-4 h-4" />
                <span>每周更新</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              联系我们，<span className="text-gradient-accent">立即开始</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              多种联系方式，选择最方便的一种，我们随时待命
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">客服热线</h3>
              <p className="text-xl font-semibold text-accent mb-1">400-888-8888</p>
              <p className="text-sm text-muted-foreground">工作日 9:00-21:00</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">企业微信</h3>
              <p className="text-sm text-muted-foreground mb-2">扫码添加专属客服</p>
              <div className="w-24 h-24 mx-auto bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">二维码</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">邮件咨询</h3>
              <p className="text-sm text-accent mb-1">support@kuajingjuliao.com</p>
              <p className="text-sm text-muted-foreground">24小时内回复</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Building className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">公司地址</h3>
              <p className="text-sm text-muted-foreground">深圳市南山区</p>
              <p className="text-sm text-muted-foreground">科技园南区</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              常见问题
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "配置真的只需要15分钟吗？",
                a: "是的！我们的可视化配置后台非常简单，平均配置时间在15分钟左右。如果您遇到任何问题，可以预约1对1指导，专属客户经理会远程协助您完成配置。"
              },
              {
                q: "需要技术背景才能使用吗？",
                a: "完全不需要！我们的产品专为非技术人员设计，所有操作都是可视化的，点击拖拽就能完成。同时我们提供完整的视频教程和文档。"
              },
              {
                q: "AI客服会影响我的店铺评分吗？",
                a: "不会。我们的AI经过大量真实场景训练，回复准确率超过98%。同时支持设置人工转接规则，复杂问题会自动转给您的客服团队处理。"
              },
              {
                q: "支持哪些电商平台？",
                a: "目前支持Amazon、eBay、Shopify、速卖通、Wish、Lazada等主流跨境电商平台，更多平台持续接入中。"
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="15分钟，让AI客服上线"
        description="立即领取免费配置支持，专属客户经理1对1服务"
        primaryCta="领取配置支持"
        secondaryCta="查看配置教程"
        showContact
      />

      <Footer />
    </div>
  );
};

export default Support;
