'use client';

import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      setMessages([...newMessages, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'Error: Could not connect to AI agent' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '800px', width: '100%', background: 'white', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', padding: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#667eea' }}>Cypher0x9 AI Agent</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>Web3 & AI Expert Assistant</p>
        
        <div style={{ height: '400px', overflowY: 'auto', marginBottom: '20px', padding: '20px', background: '#f7f7f7', borderRadius: '10px' }}>
          {messages.length === 0 && (
            <p style={{ color: '#999', textAlign: 'center' }}>Start a conversation with the AI agent...</p>
          )}
          {messages.map((msg, idx) => (
            <div key={idx} style={{ marginBottom: '15px', padding: '15px', background: msg.role === 'user' ? '#667eea' : '#f0f0f0', color: msg.role === 'user' ? 'white' : 'black', borderRadius: '10px' }}>
              <strong>{msg.role === 'user' ? 'You' : 'AI Agent'}:</strong> {msg.content}
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about Web3, blockchain, AI..."
            style={{ flex: 1, padding: '15px', fontSize: '16px', border: '2px solid #667eea', borderRadius: '10px', outline: 'none' }}
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            style={{ padding: '15px 30px', background: '#667eea', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}
