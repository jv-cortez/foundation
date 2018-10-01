function successForm() {
  swal("Good job!", "Form submitted", "success");
 }

function jobFinish() {
    swal("Job Finished!", "Mr Clean's Cleaners are finished with the job", "success");
    $("#review").html("<button type='button' class='btn btn-danger flex-fill'><i class='fas fa-star'></i> Review Me!</button>")
}

function notif() {
  swal("Someone Replied!", "Email Notification", "info")
}

function paid(){
  swal("Thank you!", "Payment received", "success")
}
