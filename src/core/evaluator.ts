import type { ArticleData } from '@extractus/article-extractor';

import type { EvaluationResult } from '~typings';

export async function evaluate(extracted: ArticleData | null): Promise<EvaluationResult> {
  if (extracted == null) {
    return { success: false };
  }

  // TODO: evaluate extracted data using LLMs
  return Promise.resolve({ success: true, score: 100, description: `Read it! (title: ${extracted.title}` });
}
