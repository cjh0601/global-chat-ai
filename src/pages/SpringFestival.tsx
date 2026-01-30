import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeatureCard from "@/components/shared/FeatureCard";
import PricingCard from "@/components/shared/PricingCard";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import {
  Gift,
  Clock,
  Globe,
  ShoppingBag,
  MessageSquare,
  Shield,
  Sparkles,
  ArrowRight,
  Check,
  Calendar,
  Users,
  Bot,
} from "lucide-react";

const SpringFestival = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="festival" />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-festival-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-festival-gold/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-20 h-20 bg-festival-gold/30 rounded-full blur-2xl animate-float" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Festival badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-festival-red/10 border border-festival-red/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-festival-gold" />
              <span className="text-sm font-medium text-festival-red">
                2025新春限时活动 · 限时免费
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              春节安心回家
              <br />
              <span className="text-gradient-festival">跨境聚聊替你全球接单</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              节假日无人值守？多语言沟通障碍？让AI客服帮你7×24小时全自动接待，
              <strong className="text-foreground">春节期间完全免费</strong>，回家过年也能稳稳赚钱。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="festival" size="xl" className="group">
                <Gift className="w-5 h-5" />
                立即领取免费额度
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="festivalOutline" size="xl">
                了解活动详情
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gradient-festival">2000</div>
                <div className="text-sm text-muted-foreground">免费回复条数</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gradient-festival">3000</div>
                <div className="text-sm text-muted-foreground">SPU商品支持</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gradient-festival">不限</div>
                <div className="text-sm text-muted-foreground">店铺数量</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              春节回家，店铺怎么办？
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              跨境卖家的春节烦恼，我们都懂
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon={Clock}
              title="跨时区无人响应"
              description="客户在凌晨3点咨询，你在睡觉。等你醒来，订单已经跑到竞争对手那里了。"
              variant="festival"
            />
            <FeatureCard
              icon={Globe}
              title="多语言沟通障碍"
              description="德国客户用德语问问题，你只能回复蹩脚的英语，客户体验大打折扣。"
              variant="festival"
            />
            <FeatureCard
              icon={ShoppingBag}
              title="多渠道消息分散"
              description="亚马逊、eBay、速卖通、Shopify…每个平台都要切换，消息根本看不过来。"
              variant="festival"
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              跨境聚聊，<span className="text-gradient-festival">春节也在线</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI智能客服7×24小时值守，让你安心享受假期
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-festival flex items-center justify-center group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">AI智能值守</h3>
              <p className="text-sm text-muted-foreground">7×24小时自动回复，秒级响应客户咨询</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-festival flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">多语言支持</h3>
              <p className="text-sm text-muted-foreground">支持30+语言自动翻译，无障碍全球沟通</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-festival flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">多店铺聚合</h3>
              <p className="text-sm text-muted-foreground">一个后台管理所有平台，消息不再遗漏</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-festival flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">安全可靠</h3>
              <p className="text-sm text-muted-foreground">企业级数据加密，店铺信息安全无忧</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-festival-red/5 to-festival-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-festival-red/10 border border-festival-red/20 mb-4">
              <Calendar className="w-4 h-4 text-festival-red" />
              <span className="text-sm font-medium text-festival-red">
                活动时间：1月15日 - 2月15日
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              新春<span className="text-gradient-festival">限时免费</span>大礼包
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              活动期间完全免费，活动结束后恢复正常价格 ¥498/月
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              name="新春免费包"
              price="0"
              originalPrice="498"
              description="活动期间限时免费"
              features={[
                "2000条AI智能回复",
                "3000个SPU商品支持",
                "店铺数量不限",
                "30+语言自动翻译",
                "多平台消息聚合",
                "7×24小时AI值守",
              ]}
              ctaText="立即免费领取"
              highlighted
              badge="新春特惠"
              variant="festival"
            />
            <PricingCard
              name="标准版"
              price="498"
              description="活动结束后恢复价格"
              features={[
                "5000条AI智能回复",
                "10000个SPU商品支持",
                "店铺数量不限",
                "30+语言自动翻译",
                "多平台消息聚合",
                "专属客户经理",
              ]}
              ctaText="了解更多"
              variant="festival"
            />
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span>无需绑定信用卡</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span>活动结束自动提醒</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span>随时取消订阅</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              他们都在用跨境聚聊过春节
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Sparkles key={i} className="w-4 h-4 text-festival-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "去年春节回家7天，店铺一单没丢。AI客服比我回复得还专业，客户都不知道是机器人在聊。"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-festival flex items-center justify-center text-sm font-bold text-primary-foreground">
                  王
                </div>
                <div>
                  <p className="font-medium text-foreground">王老板</p>
                  <p className="text-sm text-muted-foreground">亚马逊卖家 · 深圳</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Sparkles key={i} className="w-4 h-4 text-festival-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "以前雇两个客服都忙不过来，现在一个AI就搞定了。成本降了80%，转化率还提高了30%。"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-festival flex items-center justify-center text-sm font-bold text-primary-foreground">
                  李
                </div>
                <div>
                  <p className="font-medium text-foreground">李总</p>
                  <p className="text-sm text-muted-foreground">Shopify卖家 · 杭州</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Sparkles key={i} className="w-4 h-4 text-festival-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "德国、法国、意大利的客户都能直接用母语沟通，再也不用担心语言问题了。"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-festival flex items-center justify-center text-sm font-bold text-primary-foreground">
                  张
                </div>
                <div>
                  <p className="font-medium text-foreground">张经理</p>
                  <p className="text-sm text-muted-foreground">eBay卖家 · 广州</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="今年春节，让AI替你值班"
        description="立即领取新春免费大礼包，安心回家过年"
        primaryCta="立即免费领取"
        secondaryCta="咨询活动详情"
        variant="festival"
        showContact
      />

      <Footer />
    </div>
  );
};

export default SpringFestival;
