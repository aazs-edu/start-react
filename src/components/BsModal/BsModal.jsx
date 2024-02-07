import './BsModal.css';

function BsModal() {
  return (
    <div
      className="modal fade"
      id="workModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="workModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="" data-bs-dismiss="modal">
            <i className="fa-solid fa-xmark fa-lg"></i>
          </button>
          
          <div className="modal-body">
            <img src="" className="img-fluid" id="lightboxImage" alt="Work Image" />
          </div>
          
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
  );
}

export default BsModal;
