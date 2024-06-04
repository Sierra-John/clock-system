export default function LogIn({
  firstName,
  VID,
}: {
  firstName: string;
  VID: string;
}) {
  return (
    <div>
      <h1 className="text-[48px]">Welcome!</h1>
      <p className="text-[24px]">{firstName},</p>
      <p className="text-[24px]">
        you are <span className="text-val-red font-bold">signed out</span>
      </p>
    </div>
  );
}
