"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function GameRules() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="rules">
          <AccordionTrigger className="text-xl font-semibold">
            如何玩 2048？
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">基本规则</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>使用方向键或滑动来移动方块</li>
                    <li>相同数字的方块相撞时会合并</li>
                    <li>每次移动后会出现一个新的 2 或 4</li>
                    <li>达到 2048 即获胜</li>
                  </ul>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1642483160501-a15f11cd5f68?auto=format&fit=crop&w=400"
                    alt="2048 Game Example"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm">
                  提示：保持最大数字在角落，并尽量保持数字递减的排列方式，这样更容易获得高分！
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}