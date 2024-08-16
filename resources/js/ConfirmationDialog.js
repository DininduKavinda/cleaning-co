class ConfirmationDialog {
    static confirm(action, message = "You won't be able to revert this!", title = 'Are you sure?') {
        Swal.fire({
            title: title,
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.isConfirmed) {
                action();
            }
        });
    }
}

export default ConfirmationDialog;
