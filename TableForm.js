import React, { useState, useEffect } from "react"
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"

export default function TableForm({
    description, 
    setDescription, 
    quantity, 
    setQuantity, 
    price, 
    setPrice, 
    amount, 
    setAmount,
    list,
    setList,
    total,
    setTotal
}){

    const [isEditing, setIsEditing] = useState (false)
// submit form function
    const handleSubmit = (e) => {
        e.preventDefault()

    if (!description || !quantity || !price) {
        alert ("Please Fill in all feilds")
    } else {
        const newItems = {
            id: uuidv4(),
            description,
            quantity,
            price,
            amount,
           
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list, newItems])
        setIsEditing(false)
        }
    
    }

  
    // calculate amount function
    useEffect (() => {  const calculateAmount = (amount) => {
        setAmount (quantity*price)
    }
    calculateAmount(amount)
    }, [amount, price, quantity, setAmount])
  
    // calculate total amount of items in table

    useEffect (() => {
    	let rows = document.querySelectorAll(".amount")
        let sum = 0

    for (let i=0; i < rows.length; i++){
        if (rows [i].className === "amount"){
            sum += isNaN(rows [i].innerHTML) ? 0 : parseInt (rows[i].innerHTML)
            setTotal(sum)
        }
    }
    })
    // Edit function
    const editRow =(id) => {
        const editingRow = list.find((row) => row.id === id)
        setList(list.filter((row) => row.id !== id))
        setIsEditing(true)
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
    }

    // delete function

    const deleteRow = (id) => setList(list.filter((row) => row.id !== id)) 
   
    return (
        <>       
           <form onSubmit={handleSubmit}>
           <div className="flex flex-col md:mt-16">
           <label htmlFor="description">Item description</label>
            <input 
            type="text"
            name="description" 
            id="description" 
            placeholder="item description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            />
           </div>

           <div className="md:grid grid-cols-3 gap-10 ">
           <div className="flex flex-col">
           <label htmlFor="quantity">Quantity</label>
            <input 
            type="text"
            name="quantity" 
            id="quantity" 
            placeholder="quantity" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            />
           </div>

           <div className="flex flex-col">
           <label htmlFor="price">Price</label>
            <input 
            type="text"
            name="price" 
            id="price" 
            placeholder="price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            />
           </div>

           <div className="flex flex-col">
           <label htmlFor="amount">Amount</label>
           <p>{amount}</p>
           </div>
           </div>
            <button 
            type="submit"
            className="mb-5 bg-blue-900 text-white font-bold py-2 px-8 rouned shadow 
            border-2 border-blue-900 hover:bg-transparent hover:text-blue-900 transition-all duration-300">
         
            {isEditing ? "Editing Row Item" : "Add Table Item"}
          </button>
           </form>
           {/* Table items */}
           
        <table width="100%" className="mb-5">
            <thead>
                <tr className="bg-gray-100 p-1">
                <td className="font-bold">Item description</td>
                <td className="font-bold">Quantity</td>
                <td className="font-bold">Price</td>
                <td className="font-bold">Amount</td>
                </tr>     
            </thead>
            {list.map (({ id, description, quantity, price, amount}) => (
                <React.Fragment key={id}>
                <tbody>
                <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
                <td><button onClick={() => deleteRow(id)}><AiFillDelete className="text-red-500 font-bold text-xl" /></button></td>
                <td><button onClick={() => editRow(id)}><AiFillEdit className="text-green-500 font-bold text-xl" /></button></td>
                
                </tr>
            </tbody>
                </React.Fragment>
            ))}          
        </table>

        <div>
            <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">LR. {total.toLocaleString()}</h2>
        </div>
        </>
    )
}