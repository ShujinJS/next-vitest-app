import Button from "@/components/Button/component";
import { redirect } from "next/navigation";

export default function Home() {
  const customLog = async () => {
    "use server";
    redirect("/feed");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button
        params={{
          text: "test button",
          fn: customLog,
        }}
      />
    </div>
  );
}
