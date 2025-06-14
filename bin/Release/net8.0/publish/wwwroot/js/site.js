window.recaptcha = {
    getToken: function () {
        return grecaptcha.getResponse();
    }
};
window.showConfirmationDialog = function(message) {
    return new Promise((resolve, reject) => {
        if (confirm(message)) {
            resolve(true); // Foydalanuvchi tasdiqladi
        } else {
            resolve(false); // Foydalanuvchi rad etdi
        }
    });
}
