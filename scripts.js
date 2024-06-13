function runAnimations() {
  document.querySelector("#id-107").addEventListener("click", func_107_17);

  function func_107_17(e) {
    document.querySelector(".parent-div").classList.add("parent-animation-12");
    document.querySelector("#id-12").classList.add("animationClass-12");
    document.querySelector("#id-13").classList.add("animationClass-13");
    document.querySelector("#id-96").classList.add("animationClass-null96");
    document
      .querySelector("#id-96 > div:first-child")
      .classList.add("bgClass-96");
    document.querySelector("#id-14").classList.add("animationClass-14");
    document.querySelector("#id-85").classList.add("animationClass-85");
    document.querySelector("#id-107").classList.add("animationClass-107");
    document.querySelector("#id-107").removeEventListener("click", func_107_17);

    setTimeout(() => {
      document.querySelector("#id-13").addEventListener("click", func_13_12);
    }, 100);
  }

  function func_13_12(e) {
    document.querySelector(".parent-div").classList.add("parent-animation-17");
    document.querySelector("#id-12").classList.add("animationClass-17");
    document.querySelector("#id-13").classList.add("animationClass-18");
    document.querySelector("#id-96").classList.add("animationClass-96");
    document.querySelector("#id-14").classList.add("animationClass-19");
    document.querySelector("#id-85").classList.add("animationClass-null85");
    document
      .querySelector("#id-85 > div:first-child")
      .classList.add("bgClass-85");
    document.querySelector("#id-107").classList.add("animationClass-null107");
    document
      .querySelector("#id-107 > div:first-child")
      .classList.add("bgClass-107");
    document.querySelector("#id-13").removeEventListener("click", func_13_12);

    setTimeout(() => {
      //loop login
      document
        .querySelector(".parent-div")
        .classList.remove("parent-animation-12");
      document.querySelector("#id-12").classList.remove("animationClass-12");
      document.querySelector("#id-13").classList.remove("animationClass-13");
      document
        .querySelector("#id-96")
        .classList.remove("animationClass-null96");
      document
        .querySelector("#id-96 > div:first-child")
        .classList.remove("bgClass-96");
      document.querySelector("#id-14").classList.remove("animationClass-14");
      document.querySelector("#id-85").classList.remove("animationClass-85");
      document.querySelector("#id-107").classList.remove("animationClass-107");
      document
        .querySelector(".parent-div")
        .classList.remove("parent-animation-17");
      document.querySelector("#id-12").classList.remove("animationClass-17");
      document.querySelector("#id-13").classList.remove("animationClass-18");
      document.querySelector("#id-96").classList.remove("animationClass-96");
      document.querySelector("#id-14").classList.remove("animationClass-19");
      document
        .querySelector("#id-85")
        .classList.remove("animationClass-null85");
      document
        .querySelector("#id-85 > div:first-child")
        .classList.remove("bgClass-85");
      document
        .querySelector("#id-107")
        .classList.remove("animationClass-null107");
      document
        .querySelector("#id-107 > div:first-child")
        .classList.remove("bgClass-107");
      runAnimations();
    }, 300);
  }
}
export default runAnimations;
// links object
export const allLinks = {};

// function object
export const allFunctions = {};
