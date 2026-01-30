import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { Globe, MessageSquare, Shield, Sparkles, Check, Calendar, Bot, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const Index = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50/50 to-amber-50/30 relative overflow-hidden">
      {/* 全局装饰元素 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-festival-red/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-festival-gold/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-festival-red/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-48 h-48 bg-festival-gold/12 rounded-full blur-3xl" />
      </div>

      <Header variant="festival" />

      {/* Hero Section */}
      <section className="relative pt-28 lg:pt-36 pb-12 lg:pb-16">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            {/* Festival badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-festival-red text-white mb-8 animate-fade-in shadow-lg">
              <Sparkles className="w-5 h-5 text-festival-gold" />
              <span className="font-bold">🧧 2026新春限时活动 🧧</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 animate-slide-up leading-tight">
              别人过年你赚钱
              <br />
              <span className="text-gradient-festival mt-2 inline-block">跨境聚聊AI替你全球接单</span>
            </h1>

            <div className="space-y-4 mb-10 animate-slide-up" style={{
            animationDelay: "0.1s"
          }}>
              <p className="text-xl lg:text-2xl text-foreground/90 font-medium">
                部署跨境聚聊AI客服
              </p>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                自动承接全球询盘、精准推荐、智能催付
                <br />
                将节假日流量转化为实实在在的订单与收入
              </p>
              <p className="text-lg text-festival-red font-semibold">立即电话咨询，抢占春节商机
让跨境聚聊AI为你创造"春节利润"<br />
                让跨境聚聊AI为你创造"春节利润"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - 限时免费包（最醒目位置） */}
      <section className="py-8 lg:py-12 relative">
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-festival-gold/20 rounded-full blur-2xl animate-float" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div className="text-center mb-8" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-festival-red text-white mb-4 shadow-lg">
              <Calendar className="w-5 h-5" />
              <span className="font-bold">🧧 活动时间：2月1日 - 2月28日 🧧</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              新春<span className="text-gradient-festival">限时免费</span>大礼包
            </h2>
          </motion.div>

          {/* 突出显示的免费包卡片 */}
          <motion.div className="max-w-2xl mx-auto" initial={{
          opacity: 0,
          scale: 0.9,
          y: 40
        }} whileInView={{
          opacity: 1,
          scale: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2,
          type: "spring",
          stiffness: 100
        }}>
            <motion.div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-festival-red to-festival-gold text-white shadow-2xl overflow-hidden" whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }} transition={{
            type: "spring",
            stiffness: 300
          }}>
              {/* 装饰图案 */}
              <motion.div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }} />
              <motion.div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.15, 0.1]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1
            }} />
              
              {/* 标签 */}
              <motion.div className="absolute -top-1 -right-1 px-6 py-2 bg-festival-gold text-festival-gold-foreground font-bold text-sm rounded-bl-2xl rounded-tr-3xl shadow-lg" initial={{
              x: 20,
              opacity: 0
            }} whileInView={{
              x: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5,
              duration: 0.4
            }}>
                🎁 新春特惠
              </motion.div>

              <div className="relative">
                {/* 价格区域 */}
                <div className="text-center mb-8">
                  <p className="text-white/80 text-lg mb-2">限时免费价值</p>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-2xl line-through text-white/50">¥498</span>
                    <span className="text-6xl lg:text-7xl font-black">¥0</span>
                  </div>
                  {/* 醒目的恢复价格提示 */}
                  <div className="inline-block px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/40">
                    <p className="text-white font-bold text-lg">
                      ⚠️ 活动结束后恢复正常价格 <span className="text-2xl">¥498/月</span>
                    </p>
                  </div>
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
                  label: "129+",
                  desc: "语言翻译"
                }, {
                  icon: "🔗",
                  label: "5大平台",
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

                {/* CTA按钮 - 电话咨询 */}
                <a href="tel:17359196071">
                  <Button size="xl" className="w-full h-16 text-xl font-bold bg-white text-festival-red hover:bg-white/90 hover:scale-105 transition-all shadow-lg">
                    <Phone className="w-6 h-6" />
                    立即电话咨询
                  </Button>
                </a>
                <p className="text-center text-white/80 mt-3 text-sm">咨询热线：17359196071</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
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

      {/* 功能介绍区 - 合并后的板块 */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              跨境聚聊AI，<span className="text-gradient-festival">你的全球智能客服</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              支持 DHgate、Shopee、Lazada、Ozon、Daraz 五大平台 · 129+语言实时翻译
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-festival-red/10 text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-festival flex items-center justify-center group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">AI智能值守</h3>
              <p className="text-sm text-muted-foreground">7×24小时自动回复，秒级响应客户咨询，节假日也不掉线</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-festival-gold/10 text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-festival flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">129+语言支持</h3>
              <p className="text-sm text-muted-foreground">支持129+语言自动翻译，与全球客户无障碍沟通</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-festival-red/10 text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-festival flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">5大平台聚合</h3>
              <p className="text-sm text-muted-foreground">DHgate、Shopee、Lazada、Ozon、Daraz 消息统一管理</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-festival-gold/10 text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-festival flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">安全可靠</h3>
              <p className="text-sm text-muted-foreground">企业级数据加密，店铺信息安全无忧</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              他们都在用跨境聚聊过春节
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-festival-red/20 hover:shadow-lg transition-all">
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
                  <p className="text-sm text-muted-foreground">Shopee卖家 · 深圳</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-festival-gold/20 hover:shadow-lg transition-all">
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
                  <p className="text-sm text-muted-foreground">DHgate卖家 · 杭州</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-festival-red/20 hover:shadow-lg transition-all">
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
                  <p className="text-sm text-muted-foreground">Lazada卖家 · 广州</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection title="今年春节，让AI替你值班" description="立即电话咨询，抢占春节商机" primaryCta="立即电话咨询" secondaryCta="企业微信咨询" variant="festival" showContact />

      <Footer />

      {/* 悬浮电话咨询按钮 */}
      <AnimatePresence>
        {showFloatingCTA && <motion.div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50" initial={{
        y: 100,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} exit={{
        y: 100,
        opacity: 0
      }} transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}>
            <a href="tel:17359196071">
              <Button variant="festival" size="lg" className="shadow-2xl group px-8 py-6 text-lg">
                <Phone className="w-5 h-5" />
                立即电话咨询
              </Button>
            </a>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export default Index;