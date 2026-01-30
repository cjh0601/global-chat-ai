import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Globe,
  Clock,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Check,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden gradient-hero">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/3 w-20 h-20 bg-cyan/20 rounded-full blur-2xl animate-float" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                跨境电商智能客服解决方案
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              多店铺聚合 · 多语言支持
              <br />
              <span className="text-gradient-primary">7×24小时AI智能客服</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              解决跨时区无人响应、多语言沟通障碍、多渠道消息分散等核心痛点，
              降低订单流失，<strong className="text-foreground">提升转化率与客服效率</strong>。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" className="group">
                免费试用
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                预约演示
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-success" />
                <span>10,000+ 卖家信赖</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-success" />
                <span>30+ 语言支持</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-success" />
                <span>98% 客户满意度</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              跨境卖家的<span className="text-gradient-accent">客服难题</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              这些问题是不是正在困扰着你？
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <Clock className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">跨时区无人响应</h3>
              <p className="text-muted-foreground text-sm">
                欧美客户在你睡觉时咨询，等你醒来订单早就跑到竞争对手那了。
              </p>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <Globe className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">多语言沟通障碍</h3>
              <p className="text-muted-foreground text-sm">
                面对德语、法语、西班牙语…只能用蹩脚英语回复，客户体验大打折扣。
              </p>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <ShoppingBag className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">多渠道消息分散</h3>
              <p className="text-muted-foreground text-sm">
                Amazon、eBay、Shopify…每个平台来回切换，消息遗漏、回复延迟。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              一个平台，<span className="text-gradient-primary">全部搞定</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              跨境聚聊为你提供一站式智能客服解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">多店铺聚合</h3>
              <p className="text-sm text-muted-foreground">一个后台管理所有平台消息，不再切换</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">多语言翻译</h3>
              <p className="text-sm text-muted-foreground">支持30+语言自动翻译，无障碍沟通</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">7×24小时值守</h3>
              <p className="text-sm text-muted-foreground">AI全天候自动回复，秒级响应客户</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">安全可靠</h3>
              <p className="text-sm text-muted-foreground">企业级加密，店铺数据安全无忧</p>
            </div>
          </div>
        </div>
      </section>

      {/* Landing Pages */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              了解更多
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              选择你感兴趣的内容，深入了解跨境聚聊
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Spring Festival */}
            <Link to="/spring-festival" className="group">
              <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-festival-red/10 to-festival-gold/10 border border-festival-red/20 hover:shadow-festival hover:-translate-y-2 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-festival-gold" />
                  <span className="text-sm font-medium text-festival-red">限时活动</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">新春促销版</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  春节安心回家，跨境聚聊替你全球接单。限时免费活动进行中！
                </p>
                <div className="flex items-center text-festival-red font-medium text-sm group-hover:gap-2 transition-all">
                  <span>了解活动详情</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Case Studies */}
            <Link to="/case-studies" className="group">
              <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-cyan/10 border border-primary/20 hover:shadow-lg hover:-translate-y-2 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-cyan" />
                  <span className="text-sm font-medium text-primary">案例展示</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">案例展示版</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  看AI如何全流程搞定客服，售前售中售后全覆盖。
                </p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  <span>查看真实案例</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Support */}
            <Link to="/support" className="group">
              <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:shadow-glow hover:-translate-y-2 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent">配置支持</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">配置与支持版</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  15分钟极速配置，专业团队全程支持，无忧上手。
                </p>
                <div className="flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                  <span>获取配置支持</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-primary-foreground mb-4">
            准备好提升你的跨境客服了吗？
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            立即开始免费试用，体验AI智能客服的强大能力
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" size="xl" className="group">
              免费试用
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              联系我们
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
