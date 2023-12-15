import Hero from './components/Hero.jsx';
import TimerChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Hero/>
      <div id="challenges">
        <TimerChallange title="Easy" targetTime={1}/>
        <TimerChallange title="Not easy" targetTime={5}/>
        <TimerChallange title="Hard" targetTime={10}/>
        <TimerChallange title="Pros only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
