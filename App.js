import { useState, useRef, useEffect } from "react"
import Footer from "./components/Footer"
import Notes from "./components/Notes"
import Table from "./components/Table"
import Header from "./components/Header"
import MainDetails from "./components/MainDetails"
import ClientDetails from "./components/ClientDetails"
import Dates from "./components/Dates"
import Tableform from "./components/TableForm"
import ReactToPrint from "react-to-print"
import Navbar from "./components/Navbar"


function App() {
  {/*const [showInvoice, setShowInvoice] = useState(false)*/}

  const [logo, setLogo] = useState ("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState ("")
  const [list, setList] = useState ([])
  const [total, setTotal] = useState(0)
  // newly added
  const [width] = useState(641)

  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }
// newly added
  useEffect(() => {
    if (window.innerWidth < width) {
      alert("Place your phone in landscape mode for the best experience")
    }
  }, [width])

  return (
   <> 
   
  <Navbar /> 
  <main className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start">  
   {/*  <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
    */} <section>
  <div className="bg-white p-5 rounded shadow">
     
     {/* { showInvoice ? (  */}
      <>  
     
      

     {/*   
      <ReactToPrint 
      trigger={() => ( <button className="mt-5 bg-red-500 ml-5 text-white font-bold py-2 px-8 rouned shadow 
                border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300">
                Print / Download
                </button> 
                )}     
      content= {() => componentRef.current}
      />
       
      <div ref={componentRef} className="p-5">

      <Header handlePrint={handlePrint} />

      <MainDetails 
      name={name}
      phone = {phone} 
      address={address} 
      website = {website}
      logo={logo} />

      <ClientDetails 
      clientName={clientName} 
      clientAddress={clientAddress} 
      />

      <Dates 
      invoiceNumber={invoiceNumber} 
      invoiceDate={invoiceDate} 
      dueDate={dueDate} 
      />

      <Table 
      description={description} 
      quantity={quantity} 
      price={price} 
      amount={amount} 
      list={list} 
      setList={setList} 
      total={total}
      setTotal={setTotal}
      />

      <Notes notes={notes} />

      <Footer 
      name={name} 
      address={address} 
      email={email} 
      website={website}
      phone={phone}
      bankAccount={bankAccount}
      bankName={bankName}
      />

     </div> 
     <button 
      onClick={() => setShowInvoice(false)} 
       className="mt-5 bg-blue-900 text-white font-bold py-2 px-8 rouned shadow 
      border-2 border-blue-900 hover:bg-transparent hover:text-blue-900 transition-all duration-300">
      Edit Information</button> */}
</>
    {/*  ) : (
      <>
      name, address, email, phone, bank name, bank account, website, client name, client address, invoice number, invoice date, 
      due date, notes */}

      <div className="flex flex-col justify-center">
      <article className="md:grid grid-cols-3 gap-10"> 
    <div className="flex flex-col">
       <label htmlFor="name">Logo</label>
        <input 
          type="file" 
          name="logo" 
          id="logo" 
         // placeholder="Enter your name" 
         accept="image/*"
          autoComplete="off"
          value={logo}
          onChange={(e)=> setLogo(e.target.value)} 
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="name">Full Name</label>
        <input 
          type="text" 
          name="text" 
          id="name" 
          placeholder="Enter your name" 
          autoComplete="off"
          value={name}
          onChange={(e)=> setName(e.target.value)} 
        />
      </div>
      <div className="flex flex-col">
          <label htmlFor="name">Enter your Address</label>
          <input 
          type="text" 
          name="address" 
          id="address" 
          placeholder="Enter your address" 
          autoComplete="off"
          value={address}
          onChange={(e)=> setAddress(e.target.value)} 
          />
      </div>
    
      </article>

      <article className="md:grid grid-cols-3 gap-10">
      <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Enter your email" 
          autoComplete="off"
          value={email}
          onChange={(e)=> setEmail(e.target.value)} 
          />
      </div>

      <div className="flex flex-col">
          <label htmlFor="website">Website</label>
          <input 
          type="url" 
          name="website" 
          id="website" 
          placeholder="Enter your website" 
          autoComplete="off"
          value={website}
          onChange={(e)=> setWebsite(e.target.value)} 
          />
      </div>

      <div className="flex flex-col">
          <label htmlFor="phone">Phone</label>
          <input 
          type="text" 
          name="phone" 
          id="phone" 
          placeholder="Enter your phone" 
          autoComplete="off"
          value={phone}
          onChange={(e)=> setPhone(e.target.value)} 
          />
      </div>
      </article>

      <article className="md:grid grid-cols-2 gap-10">
      <div className="flex flex-col">
      <label htmlFor="bankName">Bank Name</label>
         <input 
          type="text" 
          name="bankName" 
          id="bankName" 
          placeholder="Enter your bank name" 
          autoComplete="off"
          value={bankName}
          onChange={(e)=> setBankName(e.target.value)} 
          />
      </div> 
      <div className="flex flex-col">
          <label htmlFor="bankAccount">Bank Account Number</label>
          <input 
          type="text" 
          name="bankAccount" 
          id="bankAccount" 
          placeholder="Enter your bank account number" 
          autoComplete="off"
          value={bankAccount}
          onChange={(e)=> setBankAccount(e.target.value)} 
          />
      </div>        
      </article>

      <article className="md:grid grid-cols-2 gap-10 md:mt-16">
      <div className="flex flex-col">
          <label htmlFor="clientName">Client's Name</label>
          <input 
          type="text" 
          name="clientName" 
          id="clientName" 
          placeholder="Enter your client name" 
          autoComplete="off"
          value={clientName}
          onChange={(e)=> setClientName(e.target.value)} 
          />
      </div>

      <div className="flex flex-col">
          <label htmlFor="clientAddress">Client's Address</label>
          <input 
          type="text" 
          name="clientAddress" 
          id="clientAddress" 
          placeholder="Enter your client's address" 
          autoComplete="off"
          value={clientAddress}
          onChange={(e)=> setClientAddress(e.target.value)} 
          />
      </div>    
      </article>

      <article className="md:grid grid-cols-3 gap-10">
      <div className="flex flex-col">
          <label htmlFor="invoiceNumber">Invoice Number</label>
          <input 
          type="text" 
          name="invoiceNumber" 
          id="invoiceNumber" 
          placeholder="invoiceNumber" 
          autoComplete="off"
          value={invoiceNumber}
          onChange={(e)=> setInvoiceNumber(e.target.value)} 
          />

      </div>
      <div className="flex flex-col">
          <label htmlFor="invoiceDate">Invoice Date</label>
          <input 
          type="date" 
          name="invoiceDate" 
          id="invoiceDate" 
          placeholder="invoice date" 
          autoComplete="off"
          value={invoiceDate}
          onChange={(e)=> setInvoiceDate(e.target.value)} 
          />
      </div>
      <div className="flex flex-col">
          <label htmlFor="dueDate">Due Date</label>
          <input 
          type="date" 
          name="dueDate" 
          id="dueDate" 
          placeholder="due date" 
          autoComplete="off"
          value={dueDate}
          onChange={(e)=> setDueDate(e.target.value)} 
          />
      </div>
      </article>

      {/* This is our table form */}
      <article>
        <Tableform
         description={description}
         setDescription={setDescription}
         quantity={quantity}
         setQuantity={setQuantity}
         price={price}
         setPrice={setPrice}
         amount={amount}
         setAmount={setAmount}
         list={list}
         setList={setList}
         total={total}
         setTotal={setTotal}

        />
      </article>
     

      <label htmlFor="notes">Additional Notes</label>
      <textarea
      name="notes"
      id="notes"
      cols="30"
      rows="10"
      placeholder="additional notes to the clients"
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
      >
        
      </textarea>
          

     {/* <button onClick={() => setShowInvoice (true)} className="bg-green-500 text-white font-bold py-2 px-8 rouned shadow 
      border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">
       Preview Invoice
       </button> */}
      </div>
  </div>
  
</section>
      {/* Invoice Preview */}
      <div className="invoice__preview bg-white p-5 rounded"> 
      <ReactToPrint 
      trigger={() => ( <button className="mt-5 bg-red-500 ml-5 text-white font-bold py-2 px-8 rouned shadow 
                border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300">
                Print / Download
                </button> 
                )}     
      content= {() => componentRef.current}
      />
       
      <div ref={componentRef} className="p-5">

      <Header handlePrint={handlePrint} />

      <MainDetails 
      name={name}
      phone = {phone} 
      address={address} 
      website = {website}
      logo={logo} />

      <ClientDetails 
      clientName={clientName} 
      clientAddress={clientAddress} 
      />

      <Dates 
      invoiceNumber={invoiceNumber} 
      invoiceDate={invoiceDate} 
      dueDate={dueDate} 
      />

      <Table 
      description={description} 
      quantity={quantity} 
      price={price} 
      amount={amount} 
      list={list} 
      setList={setList} 
      total={total}
      setTotal={setTotal}
      />

      <Notes notes={notes} />

      <Footer 
      name={name} 
      address={address} 
      email={email} 
      website={website}
      phone={phone}
      bankAccount={bankAccount}
      bankName={bankName}
      />

     </div> 
     {/*<button 
      onClick={() => setShowInvoice(false)} 
       className="mt-5 bg-blue-900 text-white font-bold py-2 px-8 rouned shadow 
      border-2 border-blue-900 hover:bg-transparent hover:text-blue-900 transition-all duration-300">
      Edit Information</button> */}
      </div>
     {/*} </>
     )}   */}    
     </main>
    </>
  
  );
}

export default App;
