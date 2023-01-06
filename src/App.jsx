import "./App.css";
import TaskWithReducer from "./component/TaskWithReducer";
function App() {
    return (
        <div className="container">
            <h1 className="text-4xl font-bold text-center">Tasks Manager</h1>
            <TaskWithReducer />
        </div>
    );
}

export default App;
