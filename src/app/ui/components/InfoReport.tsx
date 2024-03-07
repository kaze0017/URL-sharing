export interface InfoReportProps {
  title: string;
  data?: number | 0;
}
function InfoReport(props: InfoReportProps) {
  // InfoReport CSS Classes

  const infoReportWrapperClass = `flex flex-col items-center justify-center capitalize `;
  const infoReportTitleClass = `uppercase text-xs`;
  const infoReportDataClass = `uppercase text-xs`;

  return (
    <div className={infoReportWrapperClass}>
      <p className={infoReportDataClass}>{props.data}</p>
      <h2 className={infoReportTitleClass}>{props.title}</h2>
    </div>
  );
}
export default InfoReport;
