"use client";

import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/content/faqs";
import { track } from "@/lib/analytics";

export function FAQ() {
  const handleValueChange = (value: string) => {
    if (value) track("faq_open", { question_id: value });
  };

  return (
    <Section id="faq" surface="cream" spacing="default">
      <Container size="narrow">
        <h2 className="font-serif text-display-md font-normal text-ink-900 text-balance">
          Questions, answered plainly.
        </h2>

        <Accordion.Root
          type="single"
          collapsible
          className="mt-10 border-t border-ink-100"
          onValueChange={handleValueChange}
        >
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="border-b border-ink-100"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-primary-700 focus-visible:text-primary-700">
                  <span className="text-heading-md font-semibold text-ink-900 group-hover:text-primary-700">
                    {faq.question}
                  </span>
                  <span className="shrink-0 mt-1 text-primary-700" aria-hidden="true">
                    <Plus
                      className="h-5 w-5 group-data-[state=open]:hidden"
                      strokeWidth={1.5}
                    />
                    <Minus
                      className="h-5 w-5 hidden group-data-[state=open]:block"
                      strokeWidth={1.5}
                    />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <p className="pb-6 pr-10 text-body text-ink-700 text-pretty max-w-[68ch]">
                  {faq.answer}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </Section>
  );
}
