/*For sliding elements as they scroll into view*/
const observerSlide = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show-slide");
        } else {
            entry.target.classList.remove("show-slide");
        }
    });
});

const hiddenElementsSlide = document.querySelectorAll(".hidden-slide");
hiddenElementsSlide.forEach((el) => observerSlide.observe(el));

/*For fading elements as they scroll into view*/
const observerFade = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show-fade");
        } else {
            entry.target.classList.remove("show-fade");
        }
    });
});

const hiddenElementsFade = document.querySelectorAll(".hidden-fade");
hiddenElementsFade.forEach((el) => observerFade.observe(el));

/*For smooth scrolling to section on webpage*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
