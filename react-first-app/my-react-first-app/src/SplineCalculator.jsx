// src/SplineCalculator.jsx
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineCalculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const buttonMap = {
    'btn-0': '0',
    'btn-1': '1',
    'btn-2': '2',
    'btn-3': '3',
    'btn-4': '4',
    'btn-5': '5',
    'btn-6': '6',
    'btn-7': '7',
    'btn-8': '8',
    'btn-9': '9',
    'btn-add': '+',
    'btn-sub': '-',
    'btn-mul': '*',
    'btn-div': '/',
    'btn-C': 'C',
    'btn-enter': '='
  };

  const onSplineMouseDown = (e) => {
    const char = buttonMap[e.target.name];
    if (!char) return;

    console.log('🟢 Clicked:', e.target.name, '→', char);

    if (char === 'C') {
      setExpression('');
      setResult('');
    } else if (char === '=') {
      try {
        const evalResult = eval(expression);
        console.log('✅ Result:', evalResult);
        setResult(evalResult);
      } catch {
        console.log('❌ Invalid expression:', expression);
        setResult('Error');
      }
    } else {
      setExpression((prev) => prev + char);
      setResult('');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Spline
        scene="https://prod.spline.design/q0vjAv7vic6b4tCN/scene.splinecode"
        onMouseDown={onSplineMouseDown}
      />

      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        background: 'black',
        color: 'lime',
        padding: '16px 24px',
        fontSize: '32px',
        borderRadius: '10px',
        fontFamily: 'monospace',
        zIndex: 10
      }}>
        {expression || '0'}
        <div style={{ fontSize: '20px', marginTop: '8px' }}>
          {result !== '' ? `= ${result}` : ''}
        </div>
      </div>
    </div>
  );
};

export default SplineCalculator;
