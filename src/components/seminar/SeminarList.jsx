import SeminarItem from '@/components/seminar/SeminarItem';

export default function SeminarList({ data }) {
  return (
    <ul className="flex justify-center flex-wrap m-[0_117_0] gap-[24px] mt-[40px] max-sm:gap-[20px]">
      {data.map((seminar) => (
        <SeminarItem key={seminar.id} seminar={seminar} />
      ))}
    </ul>
  );
}
