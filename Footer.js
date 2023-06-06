export default function Footer({name, email, address, website, phone, bankAccount, bankName}){
    return (
        <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
      
      <h3 className="font-bold">** Bank Account Details</h3>
      <ul>
        <li>{name}</li>
        <li>{bankName}</li>
        <li>{bankAccount}</li>
      </ul>

      <p className="font-bold text-blue-800">** Online payment available</p>
      <p className="text-gray-400 flex flex items-end justify-end">DailyOfferDeals</p>
     {/* <tr>
      <article className="md:grid grid-rows-3 gap-10">
      <div className="flex flex-col">
          <td>
          <span className="font-bold">Your name:</span>{name}
          </td>
          <td>
          <span className="font-bold">Your Email:</span> {email}
          </td>
          <td>
          <span className="font-bold">Phone number:</span> {phone}
          </td>
          <td>
          <span className="font-bold">Website:</span> <a href={website} target="_blank" rel="nooopenner noreferrrer">{website}</a>
          </td>
          </div>
          </article>

          <article className="md:grid grid-rows-3 gap-10">
          <div className="flex flex-col">
          <td>
          <span className="font-bold">Bank: </span> {bankName}
          </td>
          <td>
          <span className="font-bold">Account holder:</span> {name}
          </td>
          <td>
          <span className="font-bold">Account number: </span>  {bankAccount}
          </td>
          
        </div>
        </article>
        </tr>
        */}
        
        
      
        
      </footer>

        </>

    )
}