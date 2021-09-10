 const name = document.getElementById("name")
        const email = document.getElementById("email")
        const pass = document.getElementById("pass")
        const vpass = document.getElementById("vpass")
        const btn = document.getElementById("b1")

        let n = undefined;
        let em = undefined;
        let p = undefined;
        let vp = undefined;

        btn.addEventListener("click", e => {
            checkdata()
            console.log("hi")

            if (n !== true || em !== true || p !== true || vp !== true) {
                e.preventDefault();
                console.log("if")
            }
            

        });

        function checkdata() {
            const nval = name.value.trim();
            const eval = email.value.trim();
            const pval = pass.value.trim();
            const vpval = vpass.value.trim();

            if (nval === "") {
                seterror(name, "Enter ur Name*")
                n = false;
            } else {
                setnoerror(name)
                n = true;
            }

            if (eval === "") {
                seterror(email, "Enter ur Email*")
                em = false;
            } else if (!remail(eval)) {
                seterror(email, "Enter a valid email")
                em = false;
            }
            else {
                setnoerror(email)
                em = true;
            }

            if (pval === "") {
                seterror(pass, "Enter Password*")
                p = false;
            } else {
                setnoerror(pass)
                p = true;
            }

            if (vpval === "") {
                seterror(vpass, "Wrong Password*")
                vp = false;
            } else if (pval !== vpval) {
                seterror(vpass, "Wrong Password")
                vp = false;
            }
            else {
                setnoerror(vpass)
                vp = true;
            }
        }

        function seterror(input, message) {
            const formparts = input.parentElement;
            formparts.className = 'form-parts error';
            const small = formparts.querySelector('small')
            small.innerText = message;
            console.log("this is ur mssg")
        }

        function setnoerror(input) {
            const formparts = input.parentElement;
            formparts.className = 'form-parts noerror';
        }





        function remail(eval) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(eval)
        }
