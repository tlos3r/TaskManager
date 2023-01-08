import { useState, useRef, useEffect, useReducer } from "react";
import useLocalStorage from "use-local-storage";
import Alert from "./Alert";
import Comfirm from "./Comfirm";
import List from "./List";
import taskReducer from "./TaskReducer";
const TaskWithReducer = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [tasks, setTasks] = useLocalStorage("tasks", []);
    const initialState = {
        tasks,
        taskId: null,
        isEditing: false,
        isAleartOpen: false,
        alertContent: "This is Content",
        alertClass: "success",
        isModalEditOpen: false,
        isModalDeleteOpen: false,
        modalHeader: "This is header",
        modalContent: "this is modal content",
        modalBtnText: "Ok",
    };

    const [state, dispatch] = useReducer(taskReducer, initialState);
    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    const closeAlert = () => {
        dispatch({
            type: "CLOSE_ALERT",
        });
    };
    const closeModal = () => {
        dispatch({
            type: "CLOSE_MODAL",
        });
    };
    const openEditTask = (id) => {
        dispatch({
            type: "OPEN_EDIT_MODAL",
            payload: id,
        });
    };
    const editTask = () => {
        const id = state.taskId;
        dispatch({
            type: "EDIT_TASK",
            payload: id,
        });
        const thisTask = state.tasks.find((task) => task.id === id);
        console.log(thisTask);
        setName(thisTask.name);
        setDate(thisTask.date);
        closeModal();
    };

    const openDeleteModal = (id) => {
        dispatch({
            type: "OPEN_DELETE_MODAL",
            payload: id,
        });
    };
    const deleteTask = () => {
        dispatch({
            type: "DELETE_TASK",
            payload: state.taskId,
        });
        const newTask = tasks.filter((task) => task.id !== state.taskId);
        setTasks(newTask);
        closeModal();
    };

    const completeTask = (id) => {
        dispatch({
            type: "COMPLETE_TASK",
            payload: id,
        });
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isComplete: true };
                }
                return task;
            })
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !date) {
            dispatch({
                type: "EMPTY",
            });
        }
        if (name && date && state.isEditing) {
            const updateTask = {
                id: state.taskId,
                name,
                date,
                isComplete: false,
            };
            dispatch({
                type: "UDPATE_TASK",
                payload: updateTask,
            });
            setName("");
            setDate("");
            // update state to locals
            setTasks(
                tasks.map((task) => {
                    if (task.id === updateTask.id) {
                        return { ...task, name, date, isComplete: false };
                    }
                    return task;
                })
            );
            return;
        }
        if (name && date) {
            const newTask = {
                id: Date.now(),
                name,
                date,
                isComplete: false,
            };
            dispatch({
                type: "ADD_TASK",
                payload: newTask,
            });
            setName("");
            setDate("");
            setTasks([...tasks, newTask]);
        }
    };

    return (
        <>
            {state.isAleartOpen && (
                <Alert alertContent={state.alertContent} alertClass={state.alertClass} onCloseAlert={closeAlert} />
            )}
            {state.isModalEditOpen && (
                <Comfirm
                    modalHeader={state.modalHeader}
                    modalContent={state.modalContent}
                    modalBtnText={state.modalBtnText}
                    modalBtnAction={editTask}
                    onCloseBtn={closeModal}
                />
            )}
            {state.isModalDeleteOpen && (
                <Comfirm
                    modalHeader={state.modalHeader}
                    modalContent={state.modalContent}
                    modalBtnText={state.modalBtnText}
                    modalBtnAction={deleteTask}
                    onCloseBtn={closeModal}
                />
            )}
            <form
                className="flex items-center justify-center mt-3 pb-7 mx-60 bg-slate-500 rounded-xl"
                onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-1">
                    <div className="mt-3">
                        <label htmlFor="task" className="text-white">
                            Task :
                        </label>
                        <input
                            ref={nameInputRef}
                            type="text"
                            name="task"
                            value={name}
                            className="w-2/3 ml-5 border-2 border-gray-500 rounded-md h-11 border-spacing-1 focus:outline-none"
                            placeholder="Task name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="date" className="text-white">
                            Date :
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={date}
                            className="w-2/3 ml-5 border-2 border-gray-500 rounded-md h-11 border-spacing-1 focus:outline-none"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <button className="w-full py-3 mt-4 text-white bg-green-600 rounded-lg">
                        {state.isEditing ? "Edit Task" : "Save Task"}
                    </button>
                </div>
            </form>
            <main className=" mt-7 mx-60">
                <div className="grid grid-cols-1 mr-5">
                    <h1 className="text-4xl font-bold ">Task List</h1>
                    <hr style={{ borderTop: "2px solid black" }} />
                </div>
                {state.tasks.length === 0 ? (
                    <p className="text-xl">No task list added!</p>
                ) : (
                    <>
                        {state.tasks.map((task) => {
                            return (
                                <List
                                    key={task.id}
                                    {...task}
                                    editTask={openEditTask}
                                    deleteTask={openDeleteModal}
                                    completeTask={completeTask}
                                />
                            );
                        })}
                    </>
                )}
            </main>
        </>
    );
};

export default TaskWithReducer;
