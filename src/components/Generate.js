import React, { useState } from 'react'
import Password from './password';


//length
//chek boxs 
//1 uppercase
//2 numbers
//3 specials

const Generate = () => {


    const passwordchars = {
        defaultLowerCase: 'abcdefghijklmnopqrstuvwxyz',
        upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '123456789',
        specials: '!@#$%^&*?/'
    }
    //checked:true,passwordchars:passwordchars.defaultLowerCase
    var passwordArray = '';

    const [passwordLength, setpasswordLength] = useState(10);

    const [myPassword, setpassword] = useState('')

    var [typeofchars, settypeofchars] = useState(
        [
            { checked: true, charcters: passwordchars.defaultLowerCase, name: 'lowercase' },
            { checked: false, charcters: passwordchars.upperCase, name: 'uppercase' },
            { checked: false, charcters: passwordchars.numbers, name: 'numbers' },
            { checked: false, charcters: passwordchars.specials, name: 'specials' },
        ]
    )
    const [toggle, setToggle] = useState(false);

    //get the length of passwoed
    const GetLength = (e) => {
        setpasswordLength(e.target.value)
        console.log(passwordLength)
    }
    //generatpassword
    const HandleSubmit = (event) => {

        event.preventDefault();
        let obj = extendArray()
        setToggle(prevStaet => !prevStaet)
        console.log(toggle)
        setpassword(obj)
        console.log(obj)
    }



    //get password chars
    const GetSpacials = (e) => {
        let obj = typeofchars;

        for (var i = 0; i < typeofchars.length; i++) {
            if (typeofchars[i].charcters === e.target.value) {
                obj[i].checked = !obj[i].checked;
                break;
            }

        }


        settypeofchars([...obj])
        console.log(typeofchars)
    }




    //extend array 
    const extendArray = () => {
        var thepassword = '';


        typeofchars.forEach((elem) => {
            if (elem.checked) {
                passwordArray += elem.charcters;
            }
        })


        for (var i = 0; i < passwordLength;) {
            var rnd = Math.floor(Math.random() * passwordArray.length);

            if (thepassword.indexOf(thepassword[rnd]) < 0) {

                thepassword += passwordArray[rnd];
                i++;
            } else {
                rnd = Math.floor(Math.random() * passwordArray.length);
            }
        }
        console.log(thepassword)
        let obj = thepassword
        // obj.password=thepassword;
        // obj.ifSubmited=!obj.ifSubmited;
        return obj;


    }




    {/* {(toggle==true)?():?()} */ }
    return (
        <div className="container my-4">
            {(toggle == false) ? (<div className="row"> <div className="col p-3" style={{ backgroundColor: 'cyan' }}>
                <form action="" onSubmit={HandleSubmit}>
                    <select onChange={GetLength} name="length" id="length" value={passwordLength}>

                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <br />
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox" id="lowercase"
                            name="uppercase"
                            value={passwordchars.defaultLowerCase}
                            onChange={GetSpacials}
                            checked={typeofchars[0].checked}
                        />
                        <label className="form-check-label"> Lower case Case</label>
                        <br />
                        <input
                            className="form-check-input"
                            type="checkbox" id="uppercase"
                            name="uppercase"
                            value={passwordchars.upperCase}
                            onChange={GetSpacials}

                        />
                        <label className="form-check-label"> Upper Case</label>
                        <br />
                        <input className="form-check-input" type="checkbox" id="numbers" name="numbers" value={passwordchars.numbers} onChange={GetSpacials} />
                        <label className="form-check-label"> numbers</label>
                        <br />
                        <input className="form-check-input" type="checkbox" id="specials" name="specials" value={passwordchars.specials} onChange={GetSpacials} />
                        <label className="form-check-label"> specials</label>
                        <br />
                        <input type="submit" value="Generate password" className="btn btn-primary" />
                    </div>

                </form>
            </div> </div>) : (


                    <Password password={myPassword} toggle={setToggle} />
                )}


            <div class="row d-flex justify-content-center ">
                <div class="row">
                    &nbsp;
            </div>
            </div>
        </div>

    )
}

export default Generate
