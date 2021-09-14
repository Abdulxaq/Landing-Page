//***** **********   ********* ****   ************ **********   *** ****   ******* ***   ***** ************   ***********************************************************
//***** **********   ********* ****   ************ **********   *** ****   ***** ***   ******* ************   **********************************************************
//******** ****   ************ ****   *************** ****   ****** ****   *** ***   ********* ****   *****************************************************************
//******** ****   ************ ****   *************** ****   ****** ****   * ***   *********** ****   ******************************************************************
//******** ****   ************ ****   *************** ****   ****** ****   ***   ************* ************   ************************************************************
//******** ****   ************ ****   *************** ****   ****** **** *** ***   *********** ************   **************************************************************
//******** ****   ************ ****   *************** ****   ****** **** *  ** ***   ********* ****   **********************************************************************
//******** ****   ************ ****   *************** ****   ****** ****   ***** ***   ******* ****   *********************************************************************
//***** **********   ********* *************   *** **********   *** ****   ******* ***   ***** ************   ************************************************************
//***** **********   ********* *************   *** **********   *** ****   ********* ***   *** ************   ***********************************************************

//***** ****    * ****   *** ********  ***************** *   **************** ****   ****** **********   *** ****************   *** ****   ************** ****   ************
//***** ****    * ****   *** **********   ************* ***   ************* ********   **** **********   *** ****************   ***** ****   ********** ****   *************
//***** ****    * ****   *** ****    ****   ********** *****   ********** ****    ***   ****** ****   ************ ****   ************* ****   ****** ****   **************
//***** ****    * ****   *** ****    ****   ********* *** ***   ********* **** *************** ****   ************ ****   *************** ****   ** ****   ***************
//***** ****    * ****   *** ****    ****   ******** ***   ***   ******** **** *************** ****   ************ ****   ***************** ****  ****   ******************
//***** ****    * ****   *** ****    ****   ******* ***   * ***   ******* **** *************** ****   ************ ****   ****************** *******  **********************
//***** ****    * ****   *** ****    ****   ****** *** ***** ***   ****** **** *************** ****   ************ ****   ***************** *****   **********************
//***** ****    * ****   *** ****    ****   ***** *** ******* ***   ***** ****    ***   ****** ****   ************ ****   **************** ****   **********************
//******* **** * ***   ***** **********   ****** ***   ******* ***   ****** ********   ***** *********   ********* ****   *************** *****  *********************
//********* ******   ******* ********   ******* ***   ********* ***   ******* ****   ******* *********   ********* ****   ************ *********   *****************
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

    const navList = document.getElementById("navbar__list");
    const navMenu = document.getElementById("nav__menu");
    const navLinks = document.getElementsByClassName("menu__link");
    const body = document.getElementById("body");
    const main = document.getElementById("main");
    const topp = document.getElementById("top");
    const sectionNum = document.querySelectorAll('section').length;
    let show = true;




/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//  function to toggle nav bar when document is scrolled

    function activeSectionLink(n) {
    for (let d = 0; d < sectionNum; d++) {
        let el = document.getElementById(`sectionLink${d + 1}`);
        el.classList.remove("activeSectionLink");
    }
    let el = document.getElementById(`sectionLink${n}`);
    el.classList.add("activeSectionLink");
    }

    function toggleNavbar() {
    setTimeout(() => {
        navMenu.classList.add("active__navbar__menu");
    }, 500);
    setTimeout(() => {
        navMenu.classList.remove("active__navbar__menu");
    }, 4000);
    if (body.scrollTop >= 300) {
        topp.classList.add("fa__active");
    } else {
        topp.classList.remove("fa__active");
    }

    if (body.scrollTop >= 471) {
        activeSectionLink(1);
    }
    if (body.scrollTop >= 1042) {
        activeSectionLink(2);
    }
    if (body.scrollTop >= 1612) {
        activeSectionLink(3);
    }
    if (body.scrollTop >= 2183) {
        activeSectionLink(4);
    }
    }

// 471
// 1042
// 1612
// 2183

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

function createNavLinks() {
  for (let i = 0; i < sectionNum; i++) {
    // creating new elements to append

    let li = document.createElement("li");
    let a = document.createElement("a");
    let content = document.createTextNode(`Section ${i + 1}`);

    // adding classes to created elements

    li.classList.add("menu__link");

    // Scroll to anchor ID using scrollTO event

    li.setAttribute("id", `sectionLink${i + 1}`);

    // appending elements   UL > A > LI

    a.appendChild(content);
    li.appendChild(a);
    navList.appendChild(li);
  }
}
createNavLinks();

/**
 * End Main Functions
 * Begin Events
 *
 */
// event to scroll top for 100
main.addEventListener("click", () => {
  body.scrollTop += 100;
});

// adding event to navLinks to show active sections with circle Bubbles

    for (let j = 0; j < sectionNum; j++) {
    navLinks[j].addEventListener("click", () => {
        const el = document.getElementById(`section${j + 1}`);
        for (let n = 0; n < sectionNum; n++) {
        document
            .getElementById(`section${n + 1}`)
            .classList.remove("active__section");
        }
        el.classList.add("active__section");
    });
    }


    // Toogles navbar ven scrolled vertically

    document.addEventListener("scroll", toggleNavbar);

    // scroll to clicked section conten 

    function scrollToSec(n){
            let el = document.getElementById(`section${n}`);
            el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
    }

    for (let l = 0; l < sectionNum; l++) {
        document.getElementById(`sectionLink${l+1}`).addEventListener('click', ()=>(scrollToSec(l+1)))
        
    }




    // event to scroll to top when arrow-up clicked

    topp.addEventListener("click", () => {
        let el = document.getElementById("body");
        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
        
    // topp.addEventListener("click", () => {
    //     // let el = document.getElementById(`section${n}`);
    //     toTop.scrollIntoView({
    //         behavior: "smooth",
    //         block: "center"
    //     })
    //     console.log("working");
    // // body.scrollTop = 0;
    // });
        