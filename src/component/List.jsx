import { SlNote, SlTrash } from 'react-icons/sl';
import { TiTick } from 'react-icons/ti';
const List = ({ id, name, date, isComplete, editTask, deleteTask, completeTask }) => {
    return (
        <>
            <div
                className={
                    isComplete
                        ? 'relative w-9/12 py-2 mx-auto mt-5 bg-slate-300 complete'
                        : 'relative w-9/12 py-2 mx-auto mt-5 bg-slate-300'
                }
            >
                <p className="pl-4 font-bold text-slate-800">Task : {name}</p>
                <p className="pl-4 font-bold text-slate-800">Date : {date}</p>
                <div className="absolute right-0 flex justify-end top-1">
                    <button
                        className="p-1 mr-2 bg-white border-2 border-black  cursor-pointer"
                        onClick={() => editTask(id)}
                    >
                        <SlNote color="green" />
                    </button>
                    <button className="p-1 mr-2 bg-white border-2 border-black  cursor-pointer">
                        <SlTrash color="red" onClick={() => deleteTask(id)} />
                    </button>
                    <button className="p-1 mr-2 bg-white border-2 border-black  cursor-pointer">
                        <TiTick color="purpil" onClick={() => completeTask(id)} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default List;
