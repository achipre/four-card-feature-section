import './App.css'
export const App = () => {
  return (
  <main>
    <h1 className="title">Reliable, efficient delivery</h1>
    <h2 className="subtitle">Powered by Technology</h2>
    <p className="paragraph">
      Our Artificial Intelligence powered tools use millions of project data points to ensure that
      your project is successful
    </p>
    <div>
      <div className="card">
        <h2>Supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
      </div>
    </div>
    <div>
      <div className="card">
        <h2>Team Builder</h2>
        <p>Scans our talent network to create the optimal team for your project</p>
      </div>
      <div className="card">
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
      </div>
    </div>
    <div>
      <div className="card">
        <h2>Calculator</h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
      </div>
    </div>
  </main>
  )
}
