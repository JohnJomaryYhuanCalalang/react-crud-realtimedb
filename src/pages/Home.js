import React, {useState, useEffect} from 'react';
import fireDb from "../firebase";
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";

const Home = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fireDb.child("Items").on("value", (snapshot) => {
            if (snapshot.val()!== null){
                setData({...snapshot.val()})
            } else {
                setData({});
            }
        });

        return () => {
            setData ({});
        };
    }, []);

    const onDelete = (id) => {
        if(window.confirm("Are you sure you want to remove this item?")) {
            fireDb.child(`Items/${id}`).remove((err) => {
                if(err) {
                    toast.error(err)
                } else {
                    toast.success("Item Removed Successfully!")
                }
            })
        }
    }

    return (
        <div class="body">
        <div class="bad" style={{marginTop: "100`npmpx"}}>
        <div class="">
                <p class="badd">Items</p>
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>No.</th>
                        <th style={{textAlign:"center"}}>Items</th>
                        <th style={{textAlign:"center"}}>Price</th>
                        <th style={{textAlign:"center"}}>Quantity</th>
                        <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index) => {
                        return (
                            <tr key={id}>
                                <th scope="row">{index+1}</th>
                                <td>{data[id].item}</td>
                                <td>{data[id].price}</td>
                                <td>{data[id].qty}</td>
                                <td>
                                    <Link to={`/update/${id}`}>
                                        <p className="normis btn btn-edit">Edit</p>
                                    </Link>
                                        <p
                                        className="normis btn btn-delete"
                                        onClick={() => onDelete(id)}>Delete</p>
                                    <Link to={`/view/${id}`}>
                                        <p className="normiss btn btn-view">View</p>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Home