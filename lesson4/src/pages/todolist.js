import {Btn} from './button'
import {useContext, useEffect, useState} from "react";
import '../assets/styles/styles.scss'
import {Chekbox} from "../component/chekbox";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, getTodo} from "../store/todo/todo.action";
import axios from "axios";
// const list = [
//     {title: 'learn Html', id: 1},
//     {title: 'learn Css', id: 2},
//     {title: 'learn Js', id: 3},
//     {title: 'learn React', id: 4},
//     {title: 'learn Redus', id: 5},
// ]

export const Todo = ({}) => {
    const [setvalue,setnewvalue] = useState( '');
    const {list, setList } = useContext()
    const [todoArray, todoapp] = useState([]);
    const dispatch = useDispatch()
    const { todo } = useSelector( store => ({
        todo: store.todoReducer.todo
    }))




    const [loader, setLoader] = useState(true)

    // function //
    // useEffect(() => {
    //     setTimeout(() => {
    //         todoapp([
    //             {title: 'learn Html', id: 1},
    //             {title: 'learn Css', id: 2},
    //             {title: 'learn Js', id: 3},
    //             {title: 'learn React', id: 4},
    //             {title: 'learn Redus', id: 5},
    //         ])
    //     }, 200)
    //     return () => {}
    // }, [])

    //redax //
    // useEffect(() => {
    //     dispatch(getTodo([
    //         {title: 'learn Html', id: 1},
    //         {title: 'learn Css', id: 2},
    //         {title: 'learn Js', id: 3},
    //         {title: 'learn React', id: 4},
    //         {title: 'learn Redus', id: 5},
    //     ]))
    // }, [])

    useEffect(() => {
        if(todo?.length){
            setLoader(false)
        }
    }, [todo])

    const handlechange = (e) => {
        setnewvalue(e.target.value);
    }

    // redax example //

    const handleCreate = () => {
        setnewvalue('')
        setList([...todo, {title:setvalue, id: todo?.length + 1}])
        dispatch(addTodo(([...todo, {title: setvalue, id: todo?.length + 1}])))
    }

    useEffect(() => {
        axios.get('https://gorest.co.in/public/v2/users').then((res) => {
            dispatch(getTodo(res.data))
            setLoader(false)
        })
    }, []);

    // function examle //
    // const handleCreate = () => {
    //     todoapp( [...todoArray, { title: setvalue, id: todoArray?.length +1}])
    //     setnewvalue('');
    // }
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
            {loader ?
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
                        {todo.map((item) => (
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