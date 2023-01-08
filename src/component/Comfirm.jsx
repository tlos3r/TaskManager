const Comfirm = ({ modalHeader, modalContent, modalBtnText, modalBtnAction, onCloseBtn }) => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-[#00000099] justify-center p-4 flex items-center z-[999] text-white modal">
                <div className="min-w-[42rem] bg-gray-500 modal-box">
                    <div className="flex items-center justify-between p-4 text-xl cursor-default bg-slate-800 modal-header">
                        <span>{modalHeader}</span>
                        <button
                            className="px-3 text-2xl bg-neutral-400 hover:bg-neutral-600 btn-close"
                            onClick={onCloseBtn}
                        >
                            &#215;
                        </button>
                    </div>
                    <div className="modal-content">
                        <p className="p-2 text-2xl">{modalContent}</p>
                    </div>
                    <div className="flex justify-end pb-3 modal-buttons">
                        <button
                            className="px-4 py-2 mx-3 rounded-md cursor-pointer bg-stone-400 hover:bg-stone-600 "
                            onClick={modalBtnAction}
                        >
                            {modalBtnText}
                        </button>
                        <button
                            onClick={onCloseBtn}
                            className="px-4 py-2 mx-3 rounded-md cursor-pointer bg-stone-400 hover:bg-stone-600"
                        >
                            Exit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Comfirm;
