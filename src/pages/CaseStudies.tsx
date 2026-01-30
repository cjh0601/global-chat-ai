import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StepCard from "@/components/shared/StepCard";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Globe,
  Package,
  CreditCard,
  RefreshCw,
  Heart,
  ArrowRight,
  Bot,
  Zap,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  Users,
  ShoppingCart,
  Headphones,
} from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="tech" />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI全流程智能客服
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              看AI如何
              <br />
              <span className="text-gradient-primary">全流程搞定客服</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              从售前咨询到售后服务，AI客服覆盖购物全流程，
              让每一个客户都能获得专业、及时的服务体验。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="tech" size="xl" className="group">
                <Zap className="w-5 h-5" />
                免费体验AI客服
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl">
                预约产品演示
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6">
              <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">客户满意度</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">3秒</div>
              <div className="text-sm text-muted-foreground">平均响应时间</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">问题自动解决率</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">支持语言数量</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-sale Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan text-sm font-medium mb-4">
                <ShoppingCart className="w-4 h-4" />
                售前服务
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-6">
                智能引导，<span className="text-gradient-primary">促进下单</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                AI客服能够智能识别客户意图，主动推荐商品、解答疑问，
                大幅提升询盘到下单的转化率。
              </p>

              <div className="space-y-4">
                <StepCard
                  step={1}
                  icon={MessageSquare}
                  title="自动回复商品咨询"
                  description="客户询问商品详情、尺码、材质等问题，AI秒级响应并给出专业解答。"
                  variant="tech"
                />
                <StepCard
                  step={2}
                  icon={Globe}
                  title="多语言智能翻译"
                  description="自动识别客户语言，用客户的母语进行沟通，消除语言障碍。"
                  variant="tech"
                />
                <StepCard
                  step={3}
                  icon={TrendingUp}
                  title="智能商品推荐"
                  description="根据客户浏览和咨询记录，精准推荐相关商品，提升客单价。"
                  variant="tech"
                  isLast
                />
              </div>
            </div>

            {/* Chat Demo */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-xl">
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <div className="w-10 h-10 rounded-full gradient-tech flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">跨境聚聊 AI</p>
                  <p className="text-xs text-muted-foreground">在线 · 通常在几秒内回复</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-br-md max-w-[80%]">
                    Hi, does this jacket come in size L?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-2 rounded-2xl rounded-bl-md max-w-[80%]">
                    <p className="mb-2">Hello! Yes, this jacket is available in size L. 🎉</p>
                    <p className="mb-2">Here are the detailed measurements for size L:</p>
                    <ul className="text-sm space-y-1 mb-2">
                      <li>• Chest: 112cm</li>
                      <li>• Shoulder: 48cm</li>
                      <li>• Length: 70cm</li>
                    </ul>
                    <p>Would you like me to help you place an order?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-br-md max-w-[80%]">
                    Yes please! Also, is there any discount?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-2 rounded-2xl rounded-bl-md max-w-[80%]">
                    <p>Great choice! 🛍️ I've applied a 10% first-order discount for you. Your order total is now $89.10 (was $99).</p>
                    <p className="mt-2 text-sm text-muted-foreground">Click below to complete your purchase:</p>
                    <button className="mt-2 w-full py-2 gradient-accent text-accent-foreground rounded-lg text-sm font-medium">
                      Complete Purchase →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* During-sale Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Order Tracking Demo */}
            <div className="order-2 lg:order-1 bg-card rounded-2xl border border-border p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                <h3 className="font-semibold text-foreground">订单跟踪</h3>
                <span className="px-3 py-1 bg-cyan/10 text-cyan text-xs font-medium rounded-full">
                  自动更新
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-success-foreground" />
                    </div>
                    <div className="w-0.5 h-12 bg-success" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">订单已确认</p>
                    <p className="text-sm text-muted-foreground">2025-01-28 14:30</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-success-foreground" />
                    </div>
                    <div className="w-0.5 h-12 bg-success" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">已发货 - 顺丰快递</p>
                    <p className="text-sm text-muted-foreground">2025-01-29 09:15</p>
                    <p className="text-sm text-cyan mt-1">SF1234567890</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan flex items-center justify-center animate-pulse">
                      <Package className="w-5 h-5 text-cyan-foreground" />
                    </div>
                    <div className="w-0.5 h-12 bg-border" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">运输中</p>
                    <p className="text-sm text-muted-foreground">预计1月31日送达</p>
                    <p className="text-sm text-muted-foreground mt-1">包裹已到达洛杉矶转运中心</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">待签收</p>
                    <p className="text-sm text-muted-foreground">--</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-cyan/5 rounded-xl border border-cyan/20">
                <div className="flex items-start gap-3">
                  <Bot className="w-5 h-5 text-cyan mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground">已自动发送物流更新通知给客户</p>
                    <p className="text-xs text-muted-foreground mt-1">下次更新时间：2小时后</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan text-sm font-medium mb-4">
                <Package className="w-4 h-4" />
                售中服务
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-6">
                智能跟单，<span className="text-gradient-primary">提升体验</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                从发货到签收，AI客服全程自动跟踪物流状态，
                主动推送更新，减少客户"我的包裹在哪？"的咨询。
              </p>

              <div className="space-y-4">
                <StepCard
                  step={1}
                  icon={Package}
                  title="物流自动跟单"
                  description="实时同步物流信息，主动通知客户包裹状态，减少客户焦虑。"
                  variant="tech"
                />
                <StepCard
                  step={2}
                  icon={CreditCard}
                  title="智能催付提醒"
                  description="对未付款订单自动发送温馨提醒，提升付款转化率。"
                  variant="tech"
                />
                <StepCard
                  step={3}
                  icon={AlertCircle}
                  title="异常预警处理"
                  description="物流异常自动识别并预警，提前介入处理，避免投诉。"
                  variant="tech"
                  isLast
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* After-sale Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan text-sm font-medium mb-4">
                <Headphones className="w-4 h-4" />
                售后服务
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-6">
                智能售后，<span className="text-gradient-primary">化解危机</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                退换货、投诉处理、情绪安抚…AI客服能够智能识别问题类型，
                自动处理常规售后，复杂问题无缝转接人工。
              </p>

              <div className="space-y-4">
                <StepCard
                  step={1}
                  icon={RefreshCw}
                  title="自动处理退换货"
                  description="识别退换货诉求，自动指引客户填写信息，简化处理流程。"
                  variant="tech"
                />
                <StepCard
                  step={2}
                  icon={Heart}
                  title="情绪识别与安抚"
                  description="智能识别客户情绪，负面情绪自动触发安抚话术或转人工。"
                  variant="tech"
                />
                <StepCard
                  step={3}
                  icon={Users}
                  title="无缝人工转接"
                  description="复杂问题一键转接人工，完整对话记录同步，无缝衔接。"
                  variant="tech"
                  isLast
                />
              </div>
            </div>

            {/* After-sale Demo */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-xl">
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <div className="w-10 h-10 rounded-full gradient-tech flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">跨境聚聊 AI</p>
                  <p className="text-xs text-muted-foreground">售后服务中心</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-br-md max-w-[80%]">
                    The jacket I received is damaged! I want a refund!!
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-2 rounded-2xl rounded-bl-md max-w-[80%]">
                    <p className="mb-2">I'm so sorry to hear about the damaged jacket. 😔 I completely understand your frustration.</p>
                    <p>Let me help you resolve this right away. Could you please share a photo of the damage so I can process your refund immediately?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-muted rounded-2xl rounded-br-md max-w-[80%] p-2">
                    <div className="bg-border/50 rounded-lg p-8 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">📷 damage_photo.jpg</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-2 rounded-2xl rounded-bl-md max-w-[80%]">
                    <p className="mb-2">Thank you for the photo. I've verified the damage and approved a full refund of $99.</p>
                    <div className="p-3 bg-success/10 rounded-lg border border-success/20 my-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="font-medium text-success">Refund Approved</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">$99.00 will be credited within 3-5 business days</p>
                    </div>
                    <p className="text-sm">No need to return the damaged item. We apologize again for the inconvenience! 🙏</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-cyan/5 rounded-xl border border-cyan/20">
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-cyan" />
                  <span className="text-foreground">情绪分析：</span>
                  <span className="text-muted-foreground">负面 → 已安抚 → 满意</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              一站式AI客服，<span className="text-gradient-primary">全流程覆盖</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              从第一次咨询到最后一次售后，每一个环节都有AI智能守护
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan/10 flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">售前</h3>
              <p className="text-muted-foreground text-sm">商品咨询 · 多语言翻译 · 智能推荐</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan/10 flex items-center justify-center">
                <Package className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">售中</h3>
              <p className="text-muted-foreground text-sm">物流跟踪 · 催付提醒 · 异常预警</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan/10 flex items-center justify-center">
                <Headphones className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">售后</h3>
              <p className="text-muted-foreground text-sm">退换处理 · 情绪安抚 · 人工转接</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="让AI帮你搞定客服"
        description="立即体验全流程智能客服，提升转化率，降低成本"
        primaryCta="免费试用"
        secondaryCta="预约演示"
        variant="tech"
        showContact
      />

      <Footer />
    </div>
  );
};

export default CaseStudies;
