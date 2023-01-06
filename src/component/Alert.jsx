import { useEffect } from 'react';
import { FaInfoCircle, FaWindowClose } from 'react-icons/fa';
import './Alert.css';
const Alert = ({ alertContent, alertClass, onCloseAlert }) => {
    useEffect(() => {
        const int = setTimeout(() => onCloseAlert(), 3000);

        return () => {
            clearTimeout(int);
        };
    });
    return (
        <section>
            <div className={`alert ${alertClass}`}>
                <FaInfoCircle size={16} className="ml-3" />
                <span className="px-3 text-lg msg">{alertContent}</span>
                <div className="h-[30px] flex  items-center hover:bg-red-900" onClick={onCloseAlert}>
                    <FaWindowClose size={16} className="mr-3 cursor-pointer justify-center" />
                </div>
            </div>
        </section>
    );
};

export default Alert;
