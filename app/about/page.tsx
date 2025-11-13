export default function About() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About This Project</h1>
      <p>
        This project demonstrates React fundamentals using NextJS. 
        For my final project, my partner and I will be improving a music translator app with features like YouTube link reading and subscription services. 
        I would like to showcase this by making these features as well as possible.
      </p>
      <p>
        <strong>GitHub Repository:</strong>{' '}
        <a 
          href="https://github.com/TheodoreBagley/csci331-nextjs-project" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          View Code on GitHub
        </a>
      </p>
    </div>
  );
}