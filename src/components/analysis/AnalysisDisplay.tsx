'use client';

import { useState } from 'react';
import { useAccount } from '@starknet-react/core';
import { useStarknetContract } from '@/hooks/useStarknet';

export function AnalysisDisplay() {
    const { address } = useAccount();
    const { fetchAnalysis } = useStarknetContract();
    const [analysis, setAnalysis] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleAnalysis = async () => {
        if (!address) {
            alert('Please connect your wallet first');
            return;
        }
        
        setLoading(true);
        try {
            const result = await fetchAnalysis(0, 100);
            setAnalysis(result);
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
                    onClick={handleAnalysis}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg"
                    disabled={loading || !address}
                >
                    {loading ? 'Analyzing...' : 'Analyze AI Decisions'}
                </button>
            </div>

            {analysis && (
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-4">Analysis Results</h2>
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