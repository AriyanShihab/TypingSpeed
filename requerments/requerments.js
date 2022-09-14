/*

submission dedline for 60 marks: ( all the times are standerd BD time)
15-09-2022 11:59PM
submission dedline for 50 marks
17-09-2022 11:59PM
    



compeulsory:

    1: fix the start button; done
    2: display count down ( just use bactice in template string); done
    3: remove the overlay after the countdown   hasbeen zero; done
    4: place the summary modal middle of screen; done
    5: in result section: done
        in lerger divice the resul will be in the 3 column and in mobile divice it will be in single column
    6: time has to in intiger. ( nothing after  the decimal, not even the decimal) done


for bonus:

    1: count the errors and display in the result popup; done
    2: make at-least 10 github commit; done
    3: create a  blog.html file and answer the given questions bellow in that file;
     questions:
        a: difarence between localStorage and Session Storage
        b: dif between global scope and local scope
        3: tell me some ways of getting undifined value
        4: event loop


what to submit:
a: private repo link;
b: live website deployed on netlify




*/
// localStorage
localStorage.setItem("timeLimit", "Bangladesh");
localStorage.getItem("timeLimit");

// sessionStorage
sessionStorage.setItem("timeLimit", "Until Browser window closed");
sessionStorage.getItem("timeLimit");
