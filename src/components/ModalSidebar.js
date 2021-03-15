import "./ModalSidebar.css";

function ModalSidebar({ isOpen, close, titleSidebar, children }) {
  return (
    <div className={`ModalSidebar ${isOpen ? `is-open` : ""}`}>
      <div className="ModalSidebar__overlay" onClick={close}></div>
      <div className="ModalSidebar__body">
        <header className="ModalSidebar__header">
          <button className="ModalSidebar__close" onClick={close}>
            X
          </button>
          <h2 className="ModalSidebar__title">{titleSidebar}</h2>
        </header>
        {children}
      </div>
    </div>
  );
}

export default ModalSidebar;
