// Portfolio sinh viên CNTT - JavaScript thuần
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const themeToggle = document.getElementById("themeToggle");
  const backToTop = document.getElementById("backToTop");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  // 1. Menu điều hướng trên điện thoại
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
  });

  // Đóng menu sau khi chọn một mục điều hướng
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Mở menu");
    });
  });

  // 2. Chuyển đổi Dark Mode / Light Mode
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☾";
  }

  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    themeToggle.textContent = isLight ? "☾" : "☼";
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
  });

  // 3. Lọc dự án theo danh mục
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));

      projectCards.forEach((card) => {
        const shouldShow = selectedFilter === "all" || card.dataset.category === selectedFilter;
        card.hidden = !shouldShow;
      });
    });
  });

  // 4. Nút cuộn lên đầu trang
  const updateBackToTop = () => {
    backToTop.classList.toggle("visible", window.scrollY > 450);
  };
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 5. Hiệu ứng xuất hiện khi cuộn tới nội dung
  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  // Hiển thị năm hiện tại ở chân trang
  document.getElementById("year").textContent = new Date().getFullYear();

  // 6. Kiểm tra dữ liệu form liên hệ bằng JavaScript
  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    message: document.getElementById("message")
  };

  function showFieldError(field, errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    fields[field].classList.toggle("invalid", Boolean(message));
    fields[field].setAttribute("aria-invalid", String(Boolean(message)));
  }

  function validateForm() {
    let isValid = true;
    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const message = fields.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (name.length < 2) {
      showFieldError("name", "nameError", "Vui lòng nhập họ tên từ 2 ký tự trở lên.");
      isValid = false;
    } else {
      showFieldError("name", "nameError", "");
    }

    if (!emailPattern.test(email)) {
      showFieldError("email", "emailError", "Vui lòng nhập địa chỉ email hợp lệ.");
      isValid = false;
    } else {
      showFieldError("email", "emailError", "");
    }

    if (message.length < 10) {
      showFieldError("message", "messageError", "Nội dung cần có ít nhất 10 ký tự.");
      isValid = false;
    } else {
      showFieldError("message", "messageError", "");
    }

    return isValid;
  }

  // Xóa thông báo lỗi khi người dùng sửa trường tương ứng
  Object.entries(fields).forEach(([fieldName, input]) => {
    input.addEventListener("input", () => {
      const errorMap = { name: "nameError", email: "emailError", message: "messageError" };
      if (input.classList.contains("invalid")) {
        validateForm();
      }
      document.getElementById(errorMap[fieldName]).textContent =
        document.getElementById(errorMap[fieldName]).textContent;
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "";
    formStatus.className = "form-status";

    if (!validateForm()) {
      formStatus.textContent = "Vui lòng kiểm tra lại các trường được đánh dấu.";
      formStatus.classList.add("error");
      const firstInvalid = contactForm.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Đây là form demo phía trình duyệt, chưa kết nối máy chủ gửi email.
    formStatus.textContent = "Dữ liệu hợp lệ! Form demo đã kiểm tra thành công. Để gửi email thật, cần kết nối dịch vụ hoặc backend.";
    formStatus.classList.add("success");
    contactForm.reset();
    Object.entries(fields).forEach(([fieldName, input]) => {
      const errorMap = { name: "nameError", email: "emailError", message: "messageError" };
      input.classList.remove("invalid");
      input.removeAttribute("aria-invalid");
      document.getElementById(errorMap[fieldName]).textContent = "";
    });
  });
});
