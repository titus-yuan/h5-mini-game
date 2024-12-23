import { Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">关于 2048 游戏</h3>
            <p className="text-sm text-muted-foreground">
              2048 是一款引人入胜的数字益智游戏，由 Gabriele Cirulli 于 2014 年开发。游戏简单易上手，但要达到高分需要策略思维。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">用户评分</h3>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="h-5 w-5 fill-yellow-400/50 text-yellow-400" />
              <span className="ml-2 text-sm">4.5/5</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">联系我们</h3>
            <p className="text-sm text-muted-foreground">
              有任何问题或建议？请随时联系我们。
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 2048 游戏。保留所有权利。
        </div>
      </div>
    </footer>
  );
}