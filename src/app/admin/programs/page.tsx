import { db } from "@/lib/db";
import { ProgramsClient } from "./ProgramsClient";

export const dynamic = "force-dynamic";

export default async function ProgramsPage() {
  const rawPrograms = await db.program.findMany({
    orderBy: { startDate: "desc" },
  });

  // Serialize Date fields → ISO strings to satisfy the client component's string types
  const programs = rawPrograms.map((p) => ({
    ...p,
    startDate: p.startDate.toISOString().split("T")[0],
    endDate: p.endDate ? p.endDate.toISOString().split("T")[0] : null,
  }));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Programs & Initiatives</h1>
        <p className="text-gray-600 mt-2">
          Manage events, trainings, and incubation programs
        </p>
      </div>
      <ProgramsClient programs={programs} />
    </div>
  );
}
