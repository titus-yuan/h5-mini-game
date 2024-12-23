"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "2048是什么？",
      answer: "2048 是一个单人滑块拼图游戏。游戏的目标是在网格上滑动带数字的方块，将相同数字的方块合并，最终创建一个数字为 2048 的方块。"
    },
    {
      question: "我该如何获胜？",
      answer: "通过合并相同数字的方块来创建一个数字为 2048 的方块即可获胜。这需要策略性地移动和合并方块。"
    },
    {
      question: "当棋盘填满时会发生什么？",
      answer: "当没有更多可能的移动时（即没有空格且没有相邻的相同数字方块），游戏结束。"
    },
    {
      question: "最佳策略是什么？",
      answer: "将最大数字保持在角落，并尝试维持一个递减数字链。这样可以更容易地有效合并方块。建议从一个角落开始，保持大数字固定在那里。"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">
      <h2 className="text-2xl font-bold mb-6">经常问的问题</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}