export default function SeminarItem({ seminar }) {
  return (
    <li className="w-[360px] h-[646px]">
      <img
        src={seminar.image}
        alt={seminar.title}
        className="rounded-[10px] "
      />
      <div>
        <h2 className="text-[18px]">{seminar.title}</h2>
        <p className="">
          {seminar.name}
          {seminar.subtitle}
        </p>
        <button type="button" className="btn">
          {seminar.buttonLabel}
        </button>
      </div>
    </li>
  );
}
