import { TbSettingsCode } from "react-icons/tb";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

type ModalContent = {
    header: string,
    content: string[]
};

type ModalProps = {
    modalContent: ModalContent,
    setModalContent: React.Dispatch<React.SetStateAction<ModalContent | null>>
};

const Modal = ({ modalContent, setModalContent }: ModalProps) => {
    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-70"
            onClick={() => {
                setModalContent(null);
            }}
        >
            <div className="w-11/12 p-4 bg-white opacity-100 rounded-xl md:w-2/5">
                <div className="flex justify-between mb-2 text-xl">
                    <TbSettingsCode />
                    <button
                        onClick={() => {
                            setModalContent(null);
                        }}
                    >
                        <AiOutlineCloseCircle />
                    </button>
                </div>
                <div className="mb-6 text-2xl font-semibold">{modalContent.header}</div>
                <ul>
                    {modalContent.content.map(point => <li className="flex mb-2 text-sm md:text-base"><AiOutlineCheckCircle className="mt-1 mr-1 text-green-600" /> {point}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Modal;
