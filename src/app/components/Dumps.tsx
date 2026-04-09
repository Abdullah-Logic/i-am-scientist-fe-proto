


export default function OutlinesPage() {
    const outlines = [
        { id: 1, heading: "Contest Syllabus", pdfUrl: "/Dumps/Contest Syllabus  .pdf" },
        { id: 2, heading: "Dumps Outline", pdfUrl: "/Dumps/Dumps Outline.pdf" },
        { id: 3, heading: "Grade 1-2", pdfUrl: "/Dumps/Grade 1-2.pdf" },
        { id: 4, heading: "Grade 3-4", pdfUrl: "/Dumps/Grade 3-4.pdf" },
        { id: 5, heading: "Grade 5-6", pdfUrl: "/Dumps/Grade 5-6.pdf" },
        { id: 6, heading: "Grade 7-8", pdfUrl: "/Dumps/Grade 7-8.pdf" },
        { id: 7, heading: "Grade 9-10", pdfUrl: "/Dumps/Grade 9-10.pdf" },
        { id: 8, heading: "Grade 11-12", pdfUrl: "/Dumps/Grade 11-12.pdf" },

      ];
      
  return (
    <div className="min-h-screen bg-[#280253] py-8 px-4">
      <div className="text-center py-10">
        <h1 className="text-white text-4xl font-bold">Download Outlines</h1>
        <div className="bg-white w-36  h-1 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {outlines.map((outline) => (
          <div
            key={outline.id}
            className="bg-[#5D3794] rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <h2 className="text-xl text-white font-semibold mb-4">{outline.heading}</h2>
            <a
              href={outline.pdfUrl}
              download
              className="bg-[#B10AB2] text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
