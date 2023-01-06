const taskReducer = (state, action) => {
    switch (action.type) {
        case "EMPTY":
            return {
                ...state,
                isAleartOpen: true,
                alertContent: "Task or Date is empty",
                alertClass: "error",
            };

        case "CLOSE_ALERT":
            return { ...state, isAleartOpen: false };

        case "ADD_TASK":
            const allTask = [...state.tasks, action.payload];
            return {
                ...state,
                tasks: allTask,
                isAleartOpen: true,
                alertContent: "Task is added",
                alertClass: "success",
            };

        case "OPEN_EDIT_MODAL":
            return {
                ...state,
                isModalEditOpen: true,
                taskId: action.payload,
                modalHeader: "Edit Task",
                modalContent: `Are you want to edit this task`,
                modalBtnText: "Edit",
            };

        case "OPEN_DELETE_MODAL":
            return {
                ...state,
                isModalDeleteOpen: true,
                taskId: action.payload,
                modalHeader: "Delete Task",
                modalContent: "Are you sure wana delete this task ?",
                modalBtnText: "Delete",
            };

        case "EDIT_TASK":
            return { ...state, isEditing: true };

        case "CLOSE_MODAL":
            return { ...state, isModalEditOpen: false, isModalDeleteOpen: false };

        case "DELETE_TASK":
            const removeTask = state.tasks.filter((task) => task.id !== action.payload);
            return {
                ...state,
                tasks: removeTask,
                isAleartOpen: true,
                alertContent: "Task is deleted",
                alertClass: "success",
            };

        case "UDPATE_TASK":
            const updatedTask = action.payload;
            const id = action.payload.id;
            // find task index in tasks local storage
            const taskIndex = state.tasks.findIndex((task) => {
                return task.id === id;
            });
            // replace old task with update task
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = updatedTask;
            }
            return {
                ...state,
                isEditing: false,
                isAleartOpen: true,
                alertContent: "Task is updated",
                alertClass: "success",
            };

        case "COMPLETE_TASK":
            const findTaskIndex = state.tasks.findIndex((task) => {
                return task.id === action.payload;
            });
            const updateTask = {
                id: action.payload,
                name: state.tasks[findTaskIndex].name,
                date: state.tasks[findTaskIndex].date,
                isComplete: true,
            };
            if (findTaskIndex !== -1) {
                state.tasks[findTaskIndex] = updateTask;
            }
            return {
                ...state,
                isAleartOpen: true,
                alertClass: "success",
                alertContent: "Task is Completed",
            };

        default:
            return { ...state };
    }
};

export default taskReducer;
