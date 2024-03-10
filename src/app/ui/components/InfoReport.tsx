export interface InfoReportProps {
  title: string;
  data?: number | 0;
  className?: string;
}
function InfoReport(props: InfoReportProps) {
  // InfoReport CSS Classes

  const infoReportWrapperClass = `flex flex-col items-center justify-center capitalize text-center ${props.className}`;
  const infoReportTitleClass = `uppercase text-xs truncate w-full`;
  const infoReportDataClass = `uppercase text-xs`;

  return (
    <div className={infoReportWrapperClass}>
      <p className={infoReportDataClass}>{props.data}</p>
      <p className={infoReportTitleClass}>{props.title}</p>
    </div>
  );
}
export default InfoReport;
