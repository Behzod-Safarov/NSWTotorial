window.modalHelper = {
    showModal: function (modalId) {
        var modalElement = document.getElementById(modalId);
        var modal = new bootstrap.Modal(modalElement);
        modal.show();
    },
    hideModal: function (modalId) {
        var modalElement = document.getElementById(modalId);
        var modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
    }
};