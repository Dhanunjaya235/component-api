import './App.css';
import Apis from './components/apis/apis.tsx';
import Lifecycle from './components/lifecycle/lifecycle.tsx';
import UncontrolledForm from './components/uncontrolled-form/uncontrolled-form.tsx';
import ControlledForm from './components/controlled-form/controlled-form.tsx';

function App() {
  return (
    <div className="App">
      
      
      <Apis></Apis>
      <Lifecycle name="Dhanunjay" id={235}></Lifecycle>
      <UncontrolledForm></UncontrolledForm>
      <ControlledForm></ControlledForm>
    </div>
  );
}

export default App;
