import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeatureCard from "@/components/shared/FeatureCard";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { Gift, Clock, Globe, ShoppingBag, MessageSquare, Shield, Sparkles, ArrowRight, Check, Calendar, Bot } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header variant="festival" />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* 喜庆装饰元素 */}
        <div className="absolute inset-0 bg-gradient-to-b from-festival-red/5 to-festival-gold/5" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-festival-red/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-festival-gold/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-20 h-20 bg-festival-gold/40 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-festival-red/30 rounded-full blur-2xl animate-float" style={{
        animationDelay: "2s"
      }} />

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Festival badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-festival-red text-white mb-6 animate-fade-in shadow-lg">
              <Sparkles className="w-5 h-5 text-festival-gold" />
              <span className="font-bold">🧧 2026新春限时活动 · 免费领取 🧧</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up lg:text-5xl">
              春节安心回家
              <br />
              <span className="text-gradient-festival">跨境聚聊替你全球接单</span>
            </h1>

            <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto animate-slide-up text-primary bg-destructive-foreground" style={{
            animationDelay: "0.1s"
          }}>节假日无人值守？多语言沟通障碍？让AI客服帮你7×24小时全自动接待，
春节期间免费使用，回家过年也能稳稳赚钱。​​
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{
            animationDelay: "0.2s"
          }}>
              <Button variant="festival" size="xl" className="group text-lg">
                <Gift className="w-5 h-5" />
                立即领取免费额度
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="festivalOutline" size="xl">
                了解活动详情
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <div className="text-center p-4 rounded-2xl bg-festival-red/10 border border-festival-red/20">
                <div className="text-2xl lg:text-3xl font-bold text-festival-red">2000</div>
                <div className="text-sm text-muted-foreground">免费回复条数</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-festival-gold/10 border border-festival-gold/20">
                <div className="text-2xl lg:text-3xl font-bold text-festival-gold">3000</div>
                <div className="text-sm text-muted-foreground">SPU商品支持</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-festival-red/10 border border-festival-red/20">
                <div className="text-2xl lg:text-3xl font-bold text-festival-red">不限</div>
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
            <FeatureCard icon={Clock} title="跨时区无人响应" description="客户在凌晨3点咨询，你在睡觉。等你醒来，订单已经跑到竞争对手那里了。" variant="festival" />
            <FeatureCard icon={Globe} title="多语言沟通障碍" description="德国客户用德语问问题，你只能回复蹩脚的英语，客户体验大打折扣。" variant="festival" />
            <FeatureCard icon={ShoppingBag} title="多渠道消息分散" description="亚马逊、eBay、速卖通、Shopify…每个平台都要切换，消息根本看不过来。" variant="festival" />
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

      {/* Pricing Section - 突出展示免费包 */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* 喜庆背景 */}
        <div className="absolute inset-0 bg-gradient-to-b from-festival-red/10 via-festival-gold/5 to-festival-red/10" />
        <div className="absolute top-10 left-10 w-40 h-40 bg-festival-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-festival-red/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-festival-gold/30 rounded-full blur-2xl animate-float" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-festival-red text-white mb-6 shadow-lg">
              <Calendar className="w-5 h-5" />
              <span className="font-bold">🧧 活动时间：2月1日 - 2月28日 🧧</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              新春<span className="text-gradient-festival">限时免费</span>大礼包
            </h2>
          </div>

          {/* 突出显示的免费包卡片 */}
          <div className="max-w-2xl mx-auto">
            <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-festival-red to-festival-gold text-white shadow-2xl overflow-hidden">
              {/* 装饰图案 */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              {/* 标签 */}
              <div className="absolute -top-1 -right-1 px-6 py-2 bg-festival-gold text-festival-gold-foreground font-bold text-sm rounded-bl-2xl rounded-tr-3xl shadow-lg">
                🎁 新春特惠
              </div>

              <div className="relative">
                {/* 价格区域 */}
                <div className="text-center mb-8">
                  <p className="text-white/80 text-lg mb-2">限时免费价值</p>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl line-through text-white/50">¥498</span>
                    <span className="text-6xl lg:text-7xl font-black">¥0</span>
                  </div>
                  <p className="text-white/70 text-sm">活动结束后恢复正常价格 ¥498/月</p>
                </div>

                {/* 功能列表 */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[{
                  icon: "💬",
                  label: "2000条",
                  desc: "AI智能回复"
                }, {
                  icon: "📦",
                  label: "3000个",
                  desc: "SPU商品支持"
                }, {
                  icon: "🏪",
                  label: "不限",
                  desc: "店铺数量"
                }, {
                  icon: "🌍",
                  label: "30+",
                  desc: "语言翻译"
                }, {
                  icon: "🔗",
                  label: "全平台",
                  desc: "消息聚合"
                }, {
                  icon: "🤖",
                  label: "7×24h",
                  desc: "AI值守"
                }].map((item, index) => <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-bold text-lg leading-tight">{item.label}</p>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                    </div>)}
                </div>

                {/* CTA按钮 */}
                <Button size="xl" className="w-full h-16 text-xl font-bold bg-white text-festival-red hover:bg-white/90 hover:scale-105 transition-all shadow-lg">
                  <Gift className="w-6 h-6" />
                  立即免费领取
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
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
            <div className="p-6 rounded-2xl bg-card border border-festival-red/20 hover:shadow-lg transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} className="w-4 h-4 text-festival-gold" />)}
              </div>
              <p className="text-foreground mb-4">
                "去年春节回家7天，店铺一单没丢。AI客服比我回复得还专业，客户都不知道是机器人在聊。"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-festival flex items-center justify-center text-sm font-bold text-white">
                  王
                </div>
                <div>
                  <p className="font-medium text-foreground">王老板</p>
                  <p className="text-sm text-muted-foreground">亚马逊卖家 · 深圳</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-festival-gold/20 hover:shadow-lg transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} className="w-4 h-4 text-festival-gold" />)}
              </div>
              <p className="text-foreground mb-4">
                "以前雇两个客服都忙不过来，现在一个AI就搞定了。成本降了80%，转化率还提高了30%。"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-festival flex items-center justify-center text-sm font-bold text-white">
                  李
                </div>
                <div>
                  <p className="font-medium text-foreground">李总</p>
                  <p className="text-sm text-muted-foreground">Shopify卖家 · 杭州</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-festival-red/20 hover:shadow-lg transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} className="w-4 h-4 text-festival-gold" />)}
              </div>
              <p className="text-foreground mb-4">
                "德国、法国、意大利的客户都能直接用母语沟通，再也不用担心语言问题了。"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-festival flex items-center justify-center text-sm font-bold text-white">
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
      <CTASection title="今年春节，让AI替你值班" description="立即领取新春免费大礼包，安心回家过年" primaryCta="立即免费领取" secondaryCta="咨询活动详情" variant="festival" showContact />

      <Footer />
    </div>;
};
export default Index;