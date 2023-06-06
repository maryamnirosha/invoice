export default function MainDetails({name, phone, address, website}){
    return (
        <>
      <section className="flex flex-col items-end justify-end">
          <h2 className="font-bold text-xl mb-1 uppercase md:text-2xl">{name}</h2>
          <p>{phone}</p>
          <p>{address}</p>
          <a href={website} target="_blank" rel="nooopenner noreferrrer" className="text-blue">{website}</a>

      </section>
        </>
    )
}