export const Person = (person) => {
  const { name, age, image } = person;
  return (
    <article className='person'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
