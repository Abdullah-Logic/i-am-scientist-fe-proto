import Image from "next/image";
import logo from "../../../public/navbar/logo.png";
export default function Home() {
  const registeredStudents = [
    { id: 1, name: "Fatima", fatherName: "Nadeem", class: "6" },
    { id: 2, name: "Minahil", fatherName: "Farooq", class: "7" },
  ];

  return (
    <div className="min-h-screen bg-[#200D40] text-white relative">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="mx-auto flex max-w-2xl justify-left gap-8 text-center font-popins">
          <Image
            width={200}
            height={90}
            src={logo}
            alt="Logo"
            className="w-40 h-20"
          />
          <div className="space-y-2 text-[13px] font-semibold uppercase text-white/90">
            <p>University of Sahiwal - (81040)</p>
            <p>Sahiwal</p>
            <p>Tehsil: Sahiwal , District: Sahiwal</p>
            <p>Phone No: 03406268384</p>
            <p>
              Email:{" "}
              <a
                href="mailto:minahilofficial2@gmail.com"
                className="text-[#1f3cff] underline"
              >
                MINAHILOFFICIAL2@GMAIL.COM
              </a>
            </p>
            <p>Bank A/C Title: Meezan Bank</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-10 text-[13px] font-semibold uppercase text-white/90">
          <div>
            <p className="mb-4 text-[14px] font-bold text-white">
              Principal Information
            </p>
            <div className="grid grid-cols-1 gap-y-3 md:grid-cols-[220px_1fr_1fr]">
              <p>Principal&apos;s Name:</p>
              <p>DR.ALI</p>
              <p />
              <p>Phone:</p>
              <p>03406268384</p>
              <p>Cell: 03406268384</p>
              <p>Email:</p>
              <p className="md:col-span-2">
                <a
                  href="mailto:minahilofficial2@gmail.com"
                  className="text-[#1f3cff] underline"
                >
                  MINAHILOFFICIAL2@GMAIL.COM
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[14px] font-bold text-white">
              Coordinator Information
            </p>
            <div className="grid grid-cols-1 gap-y-3 md:grid-cols-[220px_1fr_1fr]">
              <p>Coordinator&apos;s Name:</p>
              <p>ALI</p>
              <p />
              <p>Phone:</p>
              <p>03406268384</p>
              <p>Cell: 03406268384</p>
              <p>Email:</p>
              <p className="md:col-span-2">
                <a
                  href="mailto:minahilofficial2@gmail.com"
                  className="text-[#1f3cff] underline"
                >
                  MINAHILOFFICIAL2@GMAIL.COM
                </a>
              </p>
              <p>Account Title:</p>
              <p> </p>
              <p />
              <p>Contest Option:</p>
              <p>Online</p>
              <p />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="overflow-hidden rounded-md border border-white/30">
            <table className="w-full text-center text-[12px] font-semibold uppercase">
              <thead className="bg-[#C543BA] text-white">
                <tr>
                  <th className="border border-white/40 px-4 py-2">Level</th>
                  <th className="border border-white/40 px-4 py-2">Class</th>
                  <th className="border border-white/40 px-4 py-2">Students</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: "Level One", class: "3", students: "2" },
                  { level: "", class: "4", students: "0" },
                  { level: "Level Two", class: "5", students: "0" },
                  { level: "", class: "6", students: "0" },
                  { level: "Level Three", class: "7", students: "0" },
                  { level: "", class: "8", students: "0" },
                  { level: "Level Four", class: "9", students: "0" },
                  { level: "", class: "10", students: "0" },
                  { level: "Level Five", class: "11", students: "0" },
                  { level: "", class: "12", students: "0" },
                ].map((row, index) => (
                  <tr
                    key={`${row.level}-${index}`}
                    className={
                      index % 2 === 0 ? "bg-[#984DF7]" : "bg-[#402380]"
                    }
                  >
                    <td className="border border-white/30 px-4 py-2">
                      {row.level}
                    </td>
                    <td className="border border-white/30 px-4 py-2">
                      {row.class}
                    </td>
                    <td className="border border-white/30 px-4 py-2">
                      {row.students}
                    </td>
                  </tr>
                ))}
                <tr className="bg-[#7f3fe0]">
                  <td className="border border-white/30 px-4 py-2" colSpan={2}>
                    Total
                  </td>
                  <td className="border border-white/30 px-4 py-2">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-semibold">
            List of Registered Students
          </h2>
          <div className="overflow-hidden rounded-md border border-white/30">
            <table className="w-full text-center text-[12px] font-semibold uppercase">
              <thead className="bg-[#C543BA] text-white">
                <tr>
                  <th className="border border-white/40 px-4 py-2">SR#</th>
                  <th className="border border-white/40 px-4 py-2">
                    Student Name
                  </th>
                  <th className="border border-white/40 px-4 py-2">
                    Father Name
                  </th>
                  <th className="border border-white/40 px-4 py-2">Class</th>
                </tr>
              </thead>
              <tbody className="bg-white text-black">
                {registeredStudents.map((student, index) => (
                  <tr
                    key={student.id}
                    className={
                      index % 2 === 0
                        ? "bg-[#ffffff]"
                        : "bg-[#47278F] text-white"
                    }
                  >
                    <td className="border border-white/30 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-white/30 px-4 py-2">
                      {student.name.toUpperCase()}
                    </td>
                    <td className="border border-white/30 px-4 py-2">
                      {student.fatherName.toUpperCase()}
                    </td>
                    <td className="border border-white/30 px-4 py-2">1</td>
                  </tr>
                ))}
                <tr className="bg-white">
                  <td
                    className="border border-white/30 px-4 py-2 font-bold"
                    colSpan={3}
                  >
                    Total
                  </td>
                  <td className="border border-white/30 px-4 py-2 font-bold">
                    {registeredStudents.length}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-14 justify-self-center">
          <button className="rounded-md bg-[#c10bb0] px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] shadow-lg hover:bg-[#d247c8]">
            Download PDF
          </button>
        </div>
        <p className="mt-16 text-center text-[11px] text-white/80">
          - This is a software generated report, which does not require any
          signature. Errors and omissions are accepted.
        </p>
      </div>
    </div>
  );
}
