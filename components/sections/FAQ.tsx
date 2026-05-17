"use client";

import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/content/faqs";
import { track } from "@/lib/analytics";

export function FAQ() {
  const handleValueChange = (value: string) => {
    if (value) track("faq_open", { question_id: value });
  };

  return (
    <Section id="faq" surface="cream" spacing="default">
      <Container size="narrow">
        <Reveal>
          <h2 className="font-serif text-display-md font-normal text-ink-900 text-balance">
            Questions, answered plainly.
          </h2>
        </Reveal>

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
                <Accordion.Trigger className="group flex w-full items-start justify-between gap-6 py-6 text-left">
                  <span className="text-heading-md font-semibold text-ink-900 transition-colors duration-160 ease-warm group-hover:text-primary-700 group-data-[state=open]:text-ink-900">
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 mt-1 text-primary-700 transition-transform duration-220 ease-warm group-data-[state=open]:rotate-180 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
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
