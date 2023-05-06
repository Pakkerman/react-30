function DayWrapper(props: { day: number; title: string }) {
  const { day, title } = props;
  return (
    <div>
      <ul>
        <li>
          <h1>Day {day}</h1>
          <p>{title}</p>
        </li>
      </ul>
    </div>
  );
}

export default DayWrapper;
