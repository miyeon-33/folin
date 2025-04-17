import Live from '@/components/Introduction/Live';
import Best from '@/components/Introduction/Best';
import Contents from '@/components/Introduction/Contents';
import Free from '@/components/Introduction/Free';
import Viewproducts from '@/components/Introduction/Viewproducts';
import Linker from '@/components/Introduction/Linker';
import Comments from '@/components/Introduction/Comments';
import Payment from '@/components/Introduction/Payment';
import Download from '@/components/Introduction/Download';
import B2b from '@/components/Introduction/B2b';

export default function Introduction() {
  return (
    <div className="pt-[56px] max-sm:pt-[60px] bg-[#ebedec]">
      <Viewproducts />
      <Contents />
      <Free />
      <Best />
      <Live />
      <Linker />
      <Comments />
      <Payment />
      <Download />
      <B2b />
    </div>
  );
}
