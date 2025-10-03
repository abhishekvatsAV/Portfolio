import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface TipMessage {
  id: string;
  message: string;
  created_at: string;
}

const Tips: React.FC = () => {
  const [tips, setTips] = useState<TipMessage[]>([]);
  const [newTip, setNewTip] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem('user_id') || "");
  const theme = useSelector((state: RootState) => state.theme.value);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchTips() {
      setLoading(true);
      try {
        const res = await fetch(`${apiUrl}/tips/${userId}`);
        const data = await res.json();
  setTips(data.messages || []);
      } catch (err) {
        setTips([]);
      } finally {
        setLoading(false);
      }
    }
    if (userId) fetchTips();
  }, []);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleAddTip = async () => {
    if (!newTip.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/tip`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId, message: newTip }),
      });
      const data = await res.json();
      setTips(data.messages || []);
      setUserId(data.messages[0].id || "");
      localStorage.setItem('user_id', userId);
      setNewTip('');
    } catch (err) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  // Refocus input after tip is submitted (newTip reset)
  React.useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [newTip === '']);

  const tipsWindowRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when tips change
  React.useEffect(() => {
    if (tipsWindowRef.current) {
      tipsWindowRef.current.scrollTop = tipsWindowRef.current.scrollHeight;
    }
  }, [tips]);

  return (
    <div className={`flex flex-col flex-grow px-6 pt-1 ${theme === 'dark' ? 'bg-dark !text-white' : 'bg-gray-50'}`}>
      <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-green' : 'text-gray-800'}`}>Anonymous Tips</h2>
      <div className={`flex flex-col flex-grow shadow p-6 mb-8 ${theme === 'dark' ? 'bg-dark-100' : 'bg-white'}`} style={{marginLeft: '-1.5rem', marginRight: '-1.5rem', minHeight: '350px', maxHeight: '500px'}}>
        <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-green' : 'text-gray-700'}`}>Previous Tips</h3>
        <div className="flex-1 overflow-y-auto mb-4" style={{maxHeight: '350px'}} ref={tipsWindowRef}>
          {loading ? (
            <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}>Loading...</div>
          ) : tips.length === 0 ? (
            <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}>No tips yet.</div>
          ) : (
            <ul className="space-y-2">
              {tips.map((tip) => (
                <li key={tip.id + tip.created_at} className={`px-3 py-2 ${theme === 'dark' ? 'bg-dark-200 text-white' : 'bg-gray-100 text-gray-700'}`}>{tip.message}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-2 mt-auto">
          <input
            ref={inputRef}
            type="text"
            className={`flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400 ${theme === 'dark' ? 'bg-dark-200 text-white border-gray-600 placeholder-gray-400' : 'bg-white text-gray-900 border-gray-300 placeholder-gray-400'}`}
            placeholder="Enter your tip..."
            value={newTip}
            onChange={e => setNewTip(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && newTip.trim() && !loading) {
                handleAddTip();
              }
            }}
            disabled={loading}
          />
          <button
            className={`px-4 py-2 rounded disabled:opacity-50 ${theme === 'dark' ? 'bg-green text-white hover:bg-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            onClick={handleAddTip}
            disabled={loading || !newTip.trim()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tips;
