import React from 'react';
import Link from 'next/link';
import { glossaryItems } from '@/lib/glossary';
import { kbArticles } from '@/lib/knowledgebase';

interface GlossaryLinkerProps {
  text: string;
}

export default function GlossaryLinker({ text }: GlossaryLinkerProps) {
  // Sort by length descending to match longer terms first
  const glossaryTerms = glossaryItems.flatMap(item => 
    (item.searchTerms || [item.term]).map(term => ({
      term,
      href: '/glossary',
      key: `glossary-${item.slug}`
    }))
  );

  const articleTerms = kbArticles.map(article => ({
    term: article.title,
    href: `/knowledgebase/${article.slug}`,
    key: `article-${article.slug}`
  }));

  const allTerms = [...glossaryTerms, ...articleTerms].sort((a, b) => b.term.length - a.term.length);

  // Escape special characters for regex
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  let parts: (string | React.ReactNode)[] = [text];

  allTerms.forEach(({ term, href, key }) => {
    const newParts: (string | React.ReactNode)[] = [];
    const regex = new RegExp(`\\b(${escapeRegExp(term)})\\b`, 'gi');

    parts.forEach(part => {
      if (typeof part !== 'string') {
        newParts.push(part);
        return;
      }

      const matches = part.split(regex);
      matches.forEach((subpart, i) => {
        if (i % 2 === 1) {
          newParts.push(
            <Link 
              key={`${key}-${i}`} 
              href={href} 
              className="text-blue-500 hover:underline decoration-blue-500/30 underline-offset-4"
            >
              {subpart}
            </Link>
          );
        } else if (subpart) {
          newParts.push(subpart);
        }
      });
    });
    parts = newParts;
  });

  return <>{parts}</>;
}
