import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { UsersRound } from "lucide-react";

export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "meeting" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <button
      className="inline-block px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-black font-semibold text-base sm:text-lg md:text-xl rounded-lg sm:rounded-xl transition-colors duration-200 hover:bg-gray-200 min-w-[200px] sm:min-w-[240px] text-center flex items-center justify-center gap-2"
      data-cal-namespace="meeting"
      data-cal-link="mohammadali-dhanga-neqrco/meeting"
      data-cal-config='{"layout":"month_view"}'
    >
      <UsersRound size={20} color="#38bdf8" className="inline mr-2" />
      Book Meeting
    </button>
  );
}
