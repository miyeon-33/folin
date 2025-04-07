import SeminarItem from '@/components/SeminarItem';

export default function SeminarList({ data }) {
  return (
    <ul>
      {data.map((seminar) => (
        <SeminarItem key={seminar.id} seminar={seminar} />
      ))}
    </ul>
  );
}
