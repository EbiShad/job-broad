import JobRow from "./JobRow";

function Jobs() {
  return (
    <div className="bg-gray-200 py-4 rounded-md mx-5">
      <div className="container">
        <h2 className="mb-4 font-bold">Resent jobs</h2>
        <div className="space-y-4">
          <JobRow text="job one" />
          <JobRow text="job tow" />
          <JobRow text="job three" />
          <JobRow text="job four" />
        </div>
      </div>
    </div>
  );
}

export default Jobs;
