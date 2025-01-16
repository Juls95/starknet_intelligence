import { useState } from 'react';
import { useConnect, useAccount } from '@starknet-react/core';

export function AnalysisDisplay() {
    const { connect } = useConnect();
    const { address } = useAccount();
    const [analysis, setAnalysis] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleConnect = async () => {
        try {
            await connect();
        } catch (error) {
            console.error('Connection error:', error);
        }
    };

    const fetchAnalysis = async () => {
        if (!address) {
            alert('Please connect your wallet first');
            return;
        }
        
        setLoading(true);
        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fromBlock: 0,
                    toBlock: 100
                })
            });
            const data = await response.json();
            setAnalysis(data.analysis);
        } catch (error) {
            console.error('Failed to fetch analysis:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-slate-900 text-white rounded-lg">
            <div className="flex gap-4 mb-6">
                <button 
                    onClick={() => connect()}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                >
                    {address ? 'Wallet Connected' : 'Connect Starknet Wallet'}
                </button>

                <button 
                    onClick={fetchAnalysis}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg"
                    disabled={loading || !address}
                >
                    {loading ? 'Analyzing AI Decisions...' : 'Analyze AI Agent Decisions'}
                </button>
            </div>

            {analysis && (
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-4">AI Agent Decision Analysis</h2>
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <pre className="text-emerald-400 whitespace-pre-wrap">
                            {JSON.stringify(analysis, null, 2)}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
} 