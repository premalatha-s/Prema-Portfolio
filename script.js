document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skills-icons div");

    skills.forEach(skill => {
        skill.addEventListener("click", () => {
            skills.forEach(item => item.classList.remove("active"));
            skill.classList.add("active");
        });
    });
});
