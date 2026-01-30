import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">跨境聚聊</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              为跨境电商卖家提供智能客服解决方案，
              聚合多店铺、支持多语言、7×24小时自动接待。
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">产品服务</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/spring-festival" className="hover:text-primary-foreground transition-colors">
                  新春限时活动
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-primary-foreground transition-colors">
                  AI客服案例
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-primary-foreground transition-colors">
                  配置与支持
                </Link>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary-foreground transition-colors">
                  价格方案
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">资源中心</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  帮助文档
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  API接入指南
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  常见问题
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  更新日志
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@kuajingjuliao.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>深圳市南山区科技园</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-primary-foreground/10 rounded-lg">
              <p className="text-xs text-primary-foreground/70 mb-1">企业微信</p>
              <p className="text-sm font-medium">扫码添加专属客服</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} 跨境聚聊. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                隐私政策
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                服务条款
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                备案信息
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
