export default function ClientDetails({clientName, clientAddress}){
    return (
        <>
      <section className="mb-10">
          <h2 className="uppercase font-bold mb-1"> {clientName}</h2>
          <p className="lg:w-1/2 text-justify">{clientAddress}</p>
      </section>
        </>
    )
}