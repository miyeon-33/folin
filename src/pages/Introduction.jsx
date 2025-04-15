import Live from '@/components/Introduction/Live';
import Best from '@/components/Introduction/Best';
import Contents from '@/components/Introduction/Contents';
import Free from '@/components/Introduction/Free';
import Viewproducts from '@/components/Introduction/Viewproducts';
import Linker from '@/components/Introduction/Linker';
import Comments from '@/components/Introduction/Comments';

export default function Introduction() {
  return (
    <div className="pt-[56px] max-sm:pt-[60px] bg-[#ebedec] h-[6000px]">
      <Viewproducts />
      <Contents />
      <Free />
      <Best />
      <Live />
      <Linker />
      <Comments />
    </div>
  );
}
