import { useState } from "react";

function Modal({ aberto, fechar, children }) {
    if (!aberto) return null;

    return (
        <>
            {/* Fundo escuro */}
            <div
                className="modal-backdrop show"
                style={{ zIndex: 1040, backgroundColor: "rgba(0,0,0,0.5)" }}
                onClick={fechar}
            ></div>

            {/* Caixa do modal */}
            <div
                className="modal show d-block"
                tabIndex="-1"
                role="dialog"
                style={{ zIndex: 1050 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={fechar}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal