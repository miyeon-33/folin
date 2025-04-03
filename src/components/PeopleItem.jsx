import { useRef, useState } from 'react';

export default function PeopleItem({ item, setPeopleData }) {
  const [isEdit, setIsEdit] = useState(false);
  const nameRef = useRef(null);
  const countryRef = useRef(null);
  const langRef = useRef(null);

  // 개발자 데이터 수정
  function handleEdit(id) {
    setIsEdit(!isEdit);

    async function editData() {
      try {
        const response = await fetch(`/people/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            id: item.id,
            name: nameRef.current?.value,
            country: countryRef.current?.value,
            lang: langRef.current?.value,
          }),
        });
        const data = await response.json();
        setPeopleData(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (isEdit) {
      editData();
    }
  }

  function handleDelete(id) {
    async function deleteData() {
      try {
        const response = await fetch(`/people/${id}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        setPeopleData(data);
      } catch (error) {
        console.log(error);
      }
    }
    deleteData();
  }

  return (
    <div className="mb-[20px]">
      {isEdit ? (
        <div className="flex flex-col items-start gap-y-2 *:h-7">
          <input type="text" ref={nameRef} defaultValue={item.name} />
          <input type="text" ref={countryRef} defaultValue={item.country} />
          <input type="text" ref={langRef} defaultValue={item.lang} />
        </div>
      ) : (
        <div>
          <p>
            이름: {item.name} {item.id}
          </p>
          <p>나라: {item.country}</p>
          <p>언어: {item.lang}</p>
        </div>
      )}
      <button type="button" onClick={() => handleEdit(item.id)}>
        {isEdit ? '완료' : '수정'}
      </button>
      <button type="button" onClick={() => handleDelete(item.id)}>
        삭제
      </button>
    </div>
  );
}
