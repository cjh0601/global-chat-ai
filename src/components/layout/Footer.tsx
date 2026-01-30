import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        

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
    </footer>;
};
export default Footer;