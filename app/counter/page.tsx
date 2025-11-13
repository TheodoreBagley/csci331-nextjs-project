import Counter from '../component/counter';

export default function CounterPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Counter Demo</h1>
      <p>Two counter components with different increment values and button colors.</p>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Counter increment={1} buttonColor="blue" />
        <Counter increment={2} buttonColor="green" />
      </div>
    </div>
  );
}