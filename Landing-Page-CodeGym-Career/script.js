document.addEventListener("DOMContentLoaded", function () {
  // Đóng menu sau khi chọn một liên kết trên màn hình nhỏ.
  document.querySelectorAll("#mainNav .nav-link, #mainNav .btn").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && window.jQuery) {
        $("#mainNav").collapse("hide");
      }
    });
  });

  // Form minh họa: không gửi dữ liệu đến máy chủ.
  var form = document.getElementById("consultForm");
  var message = document.getElementById("formMessage");
  if (form && message) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var name = document.getElementById("fullName").value.trim();
      message.textContent = "Cảm ơn " + name + "! Đây là form minh họa, dữ liệu chưa được gửi đến CodeGym.";
      form.reset();
      if (window.jQuery && window.M) {
        $("#consultForm .md-form input").trigger("blur");
      }
    });
  }
});
