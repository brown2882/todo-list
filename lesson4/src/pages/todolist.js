import {Btn} from './button'
import {useEffect, useState} from "react";
import '../assets/styles/styles.scss'
import {Chekbox} from "../component/chekbox";
// const list = [
//     {title: 'learn Html', id: 1},
//     {title: 'learn Css', id: 2},
//     {title: 'learn Js', id: 3},
//     {title: 'learn React', id: 4},
//     {title: 'learn Redus', id: 5},
// ]

export const Todo = ({}) => {
    const [setvalue,setnewvalue] = useState( '');

    const [todoArray, todoapp] = useState([]);


    const [loader, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            todoapp([
                {title: 'learn Html', id: 1},
                {title: 'learn Css', id: 2},
                {title: 'learn Js', id: 3},
                {title: 'learn React', id: 4},
                {title: 'learn Redus', id: 5},
            ])
        }, 200)
        return () => {}
    }, [])

    useEffect(() => {
        if(todoArray?.length){
            setLoading(false)
        }
    }, [todoArray])

    const handlechange = (e) => {
        setnewvalue(e.target.value);
    }
    const handleCreate = () => {
        todoapp( [...todoArray, { title: setvalue, id: todoArray?.length +1}])
        setnewvalue('');
    }
    // ------------------delate button

    // const [delatetodo, removetodo] = useState(todoArray)
    const remove = (title) => {
        // title = e.target.getAttribute(todoArray)
        todoapp(todoArray.filter(items=>items.title !== title));
    };
    const delateAllTask = (title) => {
        const delateTask = todoArray.filter((task) => !task.title);
        todoapp(delateTask);
    }
    return(
        <div className='mainDiv'>
            {setLoading ?
                <h1>Loading...</h1>
                :
                <div>
                    <h1>TODO LIST</h1>

                    <input type="text"
                           placeholder={'add item...'}
                           onChange={(e) => handlechange(e)}
                           value={setvalue}
                    />


                    {/*????*/}
                    {/*????*/}

                    {/*<Btn text={"Add"} onClick={handleCreate}/>*/}


                    <button onClick={handleCreate}>add</button>
                    <div>
                        {todoArray.map((item) => (
                            <div key={item.id} className='array'>
                                <Chekbox/>
                                <button className='del' onClick={() =>remove(item.title)}>Delate</button>
                                <p>{item.title}</p>
                            </div>
                        ))}
                        <div>
                            <button className='btn'>Dekete done tasks</button>
                            <button className='btn'  onClick={delateAllTask}>Delete all tasks</button>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};