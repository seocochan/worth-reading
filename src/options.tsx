import { useStorage } from '@plasmohq/storage/hook';

function OptionsIndex() {
  const [apiKey, setApiKey] = useStorage<string>('api-key');

  return (
    <div>
      <h2>OpenAI API Key</h2>
      <input onChange={e => setApiKey(e.target.value)} value={apiKey} />
    </div>
  );
}

export default OptionsIndex;
