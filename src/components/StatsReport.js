function StatsReport() {

    return (
        <section className="psh-game psh-game-report">
            <div className="table-responsive mt-3 mx-1">
                <table className="table psh-game-report-table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Player</th>
                            <th scope="col">Score</th>
                            <th scope="col">Creation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>85</td>
                            <td>01/16/2022</td>
                        </tr>
                        <tr>
                            <td>Lucas</td>
                            <td>45</td>
                            <td>01/16/2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default StatsReport;