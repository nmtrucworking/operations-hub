export function DataTable<T extends Record<string, unknown>>({
  rows,
  columns
}: {
  rows: T[];
  columns: { key: keyof T; label: string; render?: (row: T) => React.ReactNode }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {columns.map((column) => (
              <th key={String(column.key)} className="px-4 py-3 font-medium text-slate-600">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={String(row.id ?? index)} className="border-b border-slate-100">
              {columns.map((column) => (
                <td key={String(column.key)} className="px-4 py-3">
                  {column.render ? column.render(row) : String(row[column.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
