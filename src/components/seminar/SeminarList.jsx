import SeminarItem from '@/components/seminar/SeminarItem';

export default function SeminarList({ data }) {
  return (
    <ul className="flex justify-center flex-wrap gap-[20px] mt-[40px] max-sm:gap-[10px]">
      {data.map((seminar) => (
        <SeminarItem key={seminar.id} seminar={seminar} />
      ))}
    </ul>
  );
}
