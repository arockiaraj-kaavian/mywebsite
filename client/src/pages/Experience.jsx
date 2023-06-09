export function Experience() {
    return (
      <div className="bg-blue-300">
        <h2 className="text-2xl font-bold text-amber-600 p-2">Skills</h2>
        <table style={{ border: '1px solid black' }}>
          <tr style={{ border: '1px solid black' }}>
            <th>Category</th>
            <th>level</th>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <td>Frontend Design</td>
            <td>80%</td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <td>API developing</td>
            <td>60%</td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <td>Database Manage</td>
            <td>80%</td>
          </tr>
        </table>
      </div>
    );
  }
  