// Task 1

const task1Hours = document.querySelector(".task-1__hours");
const task1Minutes = document.querySelector(".task-1__minutes");
const task1Seconds = document.querySelector(".task-1__seconds");
const task1StartTimer = document.querySelector(".task1__start-timer");
const task1Text = document.querySelector(".task-1__text");

task1StartTimer.addEventListener("click", () => {
  task1StartTimer.setAttribute("disabled", "");

  let commonSeconds = 3600;

  const timer = setInterval(() => {
    commonSeconds--;

    const hours = Math.floor(commonSeconds / 3600);
    const minutes = Math.floor((commonSeconds - hours * 3600) / 60);
    const seconds = commonSeconds % 60;

    task1Hours.textContent = hours.toString().padStart(2, "0");
    task1Minutes.textContent = minutes.toString().padStart(2, "0");
    task1Seconds.textContent = seconds.toString().padStart(2, "0");

    if (commonSeconds === 30 * 60) {
      task1Text.style.opacity = "1";

      setTimeout(() => (task1Text.style.opacity = "0"), 5000);
    }

    if (commonSeconds === 0) {
      task1StartTimer.removeAttribute("disabled");
      clearInterval(timer);
      task1Hours.textContent = "01";
    }
  }, 1);
});

// Task 2

const task2Seconds = document.querySelector(".task-2__seconds");
const task2Miliseconds = document.querySelector(".task-2__miliseconds");
const task2StartTimer = document.querySelector(".task2__start-timer");
const task2Animation = document.querySelector(".task-2__animation");

task2StartTimer.addEventListener("click", () => {
  task2StartTimer.setAttribute("disabled", "");
  task2Animation.style.opacity = "0";

  let commonMiliseconds = 30000;

  const timer = setInterval(() => {
    commonMiliseconds -= 10;

    if (commonMiliseconds === 0) {
      clearInterval(timer);
      task2StartTimer.removeAttribute("disabled");
      task2Animation.style.opacity = "0";
    } else if (commonMiliseconds === 10000) task2Animation.style.opacity = "1";

    const seconds = Math.floor(commonMiliseconds / 1000);
    const miliseconds = commonMiliseconds % 1000;

    task2Seconds.textContent = seconds.toString().padStart(2, "0");
    task2Miliseconds.textContent = miliseconds.toString().padStart(3, "0");
  }, 10);
});
