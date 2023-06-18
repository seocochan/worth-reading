import { useState } from 'react';

import { sendToContentScript } from '@plasmohq/messaging';

import type { EvaluationResult } from '~typings';

function IndexPopup() {
  const [result, setResult] = useState<EvaluationResult | null>(null);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
      }}>
      <button
        onClick={async () => {
          const res = await sendToContentScript<{}, EvaluationResult>({
            name: 'evaluate',
          });
          setResult(res);
        }}>
        Evaluate
      </button>
      {result?.success && (
        <div>
          <p>Score: {result.score}</p>
          <p>Description: {result.description}</p>
        </div>
      )}
      {result && !result.success && <p>Evaluation failed</p>}
    </div>
  );
}

export default IndexPopup;
