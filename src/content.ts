import type { PlasmoCSConfig } from 'plasmo';

import { listen } from '@plasmohq/messaging/message';

import { evaluate } from '~core/evaluator';
import { extract } from '~core/extractor';

import location = chrome.contentSettings.location;

export const config: PlasmoCSConfig = {
  matches: ['https://docs.plasmo.com/*', 'https://github.com/*'],
};

listen(async (req, res) => {
  const { document, location } = window;
  switch (req.name) {
    case 'evaluate': {
      const extracted = await extract(location.href, document);
      const result = await evaluate(extracted);
      res.send(result);
      return;
    }
  }
});
