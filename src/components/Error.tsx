export default function Error({
  message = "",
}: {
  message: string | null | undefined;
}) {
  return (
    <div
      role='alert'
      className='alert alert-soft text-center justify-center flex py-8'
    >
      <div>
        <h2 className='font-semibold text-2xl'>มีข้อผิดพลาดเกิดขึ้น</h2>
        <p>แย่จัง! เราไม่สามารถดำเนินการตามคำร้องขอได้ 🥲</p>
        <p>{message || ""}</p>
      </div>
    </div>
  );
}
