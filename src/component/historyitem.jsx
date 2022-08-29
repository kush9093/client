
function HistoryItem({data}) {
    return (<tr keys={data._id}>
        <td><input type="checkbox" name="" id="" value={data._id} /></td>
        <th scope="row">{data.itemDate.slice(0,10)}</th>
        <td>{data.useDesc}</td>
        <td>{data.cashAmt}</td>
        <td>{data.cardAmt}</td>
        <td>{data.category}</td>
        <td>{data.tag}</td>
    </tr>  );
}

export default HistoryItem;