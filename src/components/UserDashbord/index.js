import React, { useState, useEffect } from "react";
import Spiner from "../Spiner";
import { getUsers } from "../../api";
import UsersList from "../UsersList";


const UserDashboard = () => {
    const [users, setusers] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setIsFtching] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getData({page});
    }, [page]);

    const getData = () => {
        getUsers({page})
            .then(data => {
                setusers(data.results)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsFtching(false)
            })
    }

    const next = () => {
        setPage(page + 1)
    }

    const prev = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    return (
        <section>
            <button onClick={prev}>{'<'}</button>
            <span>{page}</span>
            <button onClick={next}>{'>'}</button>
            {error && <div>Oops! Sorry</div>}
            {users && <UsersList users={users} setusers={setusers} />}
            {isFetching && <Spiner />}
        </section>
    )
}


// class UserDashboard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             users: [],
//             error: null,
//             isFetching: true,
//             page: 1
//         }
//     }

//     componentDidMount (){
//         this.getData();
//     }

//     componentDidUpdate (prevProps, prevState){
//         if(prevState.page !== this.state.page){
//             this.getData();
//         }
//     }

//     getData = () => {
//         const {page} = this.state;
//         getUsers({page})
//         .then(data=>{
//             this.setState({
//                 users: data.results
//             })
//         })
//         .catch((error)=>{
//             this.setState({
//                 error
//             })
//         })
//         .finally(()=>{
//             this.setState({
//                 isFetching: false
//             })
//         })
//     }

//     next = () => {
//         const {page} = this.state;
//             this.setState({
//                 page: page+1
//         })
//     }

//     prev = () => {
//         const {page} = this.state;
//         if (page > 1) {
//             this.setState({
//                 page: page-1
//         })
//         }
//     }

//     render() {
//         const {users, error, isFetching, page} = this.state;
// return (
//     <section>
//         <button onClick={this.prev}>{'<'}</button>
//             <span>{page}</span>
//         <button onClick={this.next}>{'>'}</button>
//         {error && <div>Oops! Sorry</div>}
//         {users && <UsersList users={users}/>}
//         {isFetching && <Spiner />}
//     </section>
//         );
//     }
// }

export default UserDashboard;