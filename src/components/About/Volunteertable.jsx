import "../../styles/about/tables.css";
import data from "./data.json";

export const Volunteertable = () => {
  return (
    <>
      <h2 className="table-header-bold">{data.section4.title}</h2>
      <table>
        <tr>
          <th colspan="4">{data.section4.tableTitle}</th>
        </tr>
        <tr style={{ fontWeight: 700 }}>
          {data.section4.tableColumn.map((name, index) => (
            <td key={"column " + index}>{name}</td>
          ))}
        </tr>
        {data.section4.data.map((num, idx) => (
          <tr>
            <td>{idx + 1}</td>
            <td>{num.year}</td>
            <td>{num.volunteers}</td>
            <td>{num.benefited}</td>
          </tr>
        ))}
        <tr style={{ fontWeight: 700 }}>
          {data.section4.footer.map((foot) => (
            <td>{foot}</td>
          ))}
        </tr>
      </table>
    </>
  );
};
