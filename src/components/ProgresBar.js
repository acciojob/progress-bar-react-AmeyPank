import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        runAsyncOperation();
    }, []);

    const runAsyncOperation = async () => {
        // Simulating an asynchronous operation that takes 5 seconds to complete
        const totalTime = 5;
        const interval = 1000; // 1 second
        const steps = totalTime / (interval / 1000);

        for (let i = 1; i <= steps; i++) {
            const progressValue = (i / steps) * 100;
            setProgress(progressValue);
            await new Promise(resolve => setTimeout(resolve, interval));
        }

        // When the operation is complete, display the result
        setProgress(100, () => {
            // You can do something with the result here if needed
            console.log('Operation completed!');
        });
    };

    return (
        <div>
            <div
                id="barOuter"
                style={{
                    width: '100%',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    height: '30px'
                }}
            >
                <div
                    id="barInner"
                    style={{
                        width: `${progress}%`,
                        backgroundColor: 'green',
                        borderRadius: '4px',
                        height: '100%'
                    }}
                />
            </div>
            <div style={{ marginTop: '10px' }}>{`${progress}%`}</div>
        </div>
    );
};

export default ProgressBar;
