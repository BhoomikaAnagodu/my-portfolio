import { useEffect, useRef } from "react";
import Close from "../assets/close.svg";

interface ModalProps {
  children: React.ReactNode;
  onClose: (() => Promise<void>) | (() => void);
}

const Modal = ({ children, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 grid h-screen w-screen place-items-center bg-black/30 z-130">
      <div
        ref={modalRef}
        className="relative m-4 p-4 rounded-lg bg-white shadow-sm"
      >
        <img
          src={Close}
          className="w-5 absolute right-5 top-5 cursor-pointer"
          onClick={onClose}
          alt="Close modal"
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
