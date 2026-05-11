// import { useEffect, useState } from "react"
// import axios from 'axios';
// import { FaEdit } from 'react-icons/fa';
// import { FaTrashAlt } from 'react-icons/fa';
// function Home() {
//     const [list, setList] = useState([]);
//     useEffect(() => {
//         axios.get("http://localhost:8080/todo/task")
//             .then((res) => {
//                 setList(res.data);
//             })
//             .catch((err) => {
//                 console.error(err);
//             })
//     }, [list])

//     const deleteHandler = async (id) => {
//         if (window.confirm("Are you sure want to delete?")) {
//             try {
//                 const res = await axios.delete(`http://localhost:8080/todo/task/${id}`);
//             }
//             catch (err) {
//                 console.error(err);
//             }
//         }
//     }
//     return (
//         <div className="listapp">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Task ID</th>
//                         <th>Title</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         list.map(task => (
//                             <tr key={task.id}>
//                                 <td>{task.id}</td>
//                                 <td>{task.title}</td>
//                                 <td>{task.status}</td>
//                                 <td><button className="icon-btn"><FaEdit size={20} color="#646cff" /></button>
//                                     <button className="delete-btn" onClick={() => deleteHandler(task.id)}><FaTrashAlt size={18} color="#ff4d4d" /></button>
//                                 </td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// export default Home;

// .listapp1{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #ffffff;
//   border: 1px solid #ccb2b2;
//   display: grid;
//   width: 800px;
//   gap: 10px;
//   margin: 20px auto; 
//   padding: 20px;
//   border-radius: 8px;
//   margin-top: 100px;
// }