export function MoreInfo({ image }: { image: string }) {
  return (
    <section className='flex justify-evenly items-center my-7'>
      <div className='w-80'>
        <h3 className='text-xl font-bold mb-2'>Sobre :</h3>
        <p className='text-gray-700 text-base'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, odit
          asperiores, sed ab eveniet rerum sit quos deserunt dolore aliquid
          ipsam natus labore, culpa quia nisi molestias rem laudantium ipsum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          fugiat praesentium veniam quas odio? Fugiat id numquam non magnam
          tempore, ipsa voluptate porro hic. Voluptatem sint deleniti aspernatur
          esse veritatis?
        </p>
      </div>
      <div>
        <img
          src={image}
          alt='Icaro Vieira'
          width={150}
          height={150}
          className='rounded-full'
        />
      </div>
    </section>
  );
}
