import { checkEmployeeStatus } from "@/actions/actions";
import AuthCard from "@/ui/auth/AuthCard";
import LogIn from "@/ui/auth/LogIn";
import SignOut from "@/ui/auth/SignOut";

export default async function Page({ params }: { params: { VID: string } }) {
  const data = await checkEmployeeStatus(params.VID);
  return (
    <AuthCard>
      {data.signIn ? (
        <LogIn firstName={data.firstName} VID={data.VID} />
      ) : (
        <SignOut firstName={data.firstName} VID={data.VID} />
      )}
    </AuthCard>
  );
}
