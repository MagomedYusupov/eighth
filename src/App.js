import React, { useState } from 'react';

function App() {

    const [students, setStudents] = useState([
        {
            surname: 'Юсупов',
            firstname: 'Мохмад',
            fathername: 'Вахаевич',
            paid: true
        },
        {
            surname: 'Катаев',
            firstname: 'Хамзат',
            fathername: 'Хаважевич',
            paid: false
        },
    ]);

    const [fullname, setFullname] = useState("");

    const handleChange = (e) => {
        setFullname(e.target.value);
    }

    const [didCheck, setDidCheck] = useState(true);
    const handleChecked = () => {
        setDidCheck(!didCheck)
    }


    const handleInsert = () => {
        const fio = fullname.split(' ');
        if (didCheck === true) {

        setStudents([...students, {
            surname: fio[0],
            firstname: fio[1],
            fathername: fio[2],
            paid: true
        }])
    }
else
    setStudents([...students, {
        surname: fio[0],
        firstname: fio[1],
        fathername: fio[2],
        paid: false
    }])
}







    const deleteStudent = (i) =>{
        const filtered = students.filter((student, index)=>{
            if (index===i){
                return false;
            }return true;
        });
        setStudents(filtered);
    }
    return (
        <div className="container w-50 mt-2">
            <div className="d-flex justify-content-between mb-2">
                <div>
                    <input
                        type="text"
                        className="form-control"
                        value={fullname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input type="checkbox" className="form-check-input" checked={didCheck}  onChange={handleChecked}/>
                </div>
                <div>
                    <button className="btn btn-success" onClick={handleInsert}>
                        добавить
                    </button>
                </div>
            </div>
            <ul className="list-group">
                {students.map((student,index) => {
                    return(
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                {student.surname}
                                {' '}
                                {student.firstname[0]}.
                                {' '}
                                {student.fathername[0]}.
                            </div>
                            <div>
                                {student.paid ? 'оплатил' : 'не оплатил'}
                            </div>
                            <div>
                                <button className="btn btn-outline-danger" onClick={()=>deleteStudent(index)}>
                                    ❌
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;

