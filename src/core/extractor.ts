import type { ArticleData, ParserOptions } from '@extractus/article-extractor';
import { extractFromHtml, setSanitizeHtmlOptions } from '@extractus/article-extractor';

export async function extract(url: string, document: Document): Promise<ArticleData | null> {
  setSanitizeHtmlOptions({
    allowedTags: [],
    disallowedTagsMode: 'discard',
    allowVulnerableTags: false,
    parseStyleAttributes: false,
    enforceHtmlBoundary: false,
  });
  const options: ParserOptions = {
    wordsPerMinute: 300,
    descriptionTruncateLen: 210,
    descriptionLengthThreshold: 150,
    contentLengthThreshold: 300,
  };

  // TODO: preprocess document by url, if needed

  const html = document.documentElement.innerHTML;
  return extractFromHtml(html, '', options); // method type mismatches x_x
}
