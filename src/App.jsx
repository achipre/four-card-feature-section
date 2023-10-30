import Calculador from './assets/icon-calculator.svg'
import Supervisar from './assets/icon-supervisor.svg'
import Builder from './assets/icon-team-builder.svg'
import Karma from './assets/icon-karma.svg'
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
      <div className="articles">
        <div className="card card_cyan">
          <h2>Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img className="imagen" src={Supervisar} alt="Icono de Supervisar" />
        </div>
        <div className='article_medium'>
          <div className="card card_red">
            <h2>Team Builder</h2>
            <p>Scans our talent network to create the optimal team for your project</p>
            <img className="imagen" src={Builder} alt="Icono de Builder" />
          </div>
          <div className="card card_orange">
            <h2>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img className="imagen" src={Karma} alt="Icono de Karma" />
          </div>
        </div>
        <div>
          <div className="card card_blue">
            <h2>Calculator</h2>
            <p>Uses data from past projects to provide better delivery estimates</p>
            <img className="imagen" src={Calculador} alt="imagend de calculadora" />
          </div>
        </div>
      </div>
    </main>
  )
}
