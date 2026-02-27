import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/presentation/utils/cn';
import { tableVariants, thVariants, tdVariants } from './table.variants';
import { Loader2 } from 'lucide-react';

export interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T> extends VariantProps<typeof tableVariants> {
  data: T[];
  columns: Column<T>[];
  isLoading?: boolean;
  className?: string;
  emptyMessage?: string;
}

const Table = <T extends { id?: string | number }>({
  data,
  columns,
  density,
  striped,
  hoverable,
  isLoading = false,
  className,
  emptyMessage = 'No data available',
}: TableProps<T>) => {
  return (
    <div
      className={cn(
        'relative w-full overflow-auto rounded-xl border border-slate-200 bg-white shadow-sm',
        className
      )}
    >
      <table className={cn(tableVariants({ density, striped, hoverable }))}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className={cn(thVariants({ density }), col.className)}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {isLoading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="h-32 text-center align-middle"
              >
                <div className="flex flex-col items-center justify-center gap-2 text-slate-500">
                  <Loader2 className="h-6 w-6 animate-spin text-primary-500" />
                  <span className="text-xs">Loading data...</span>
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="h-32 text-center align-middle text-slate-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={row.id || rowIndex}>
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className={cn(tdVariants({ density }), col.className)}
                  >
                    {col.render
                      ? col.render(row)
                      : typeof col.accessor === 'function'
                        ? col.accessor(row)
                        : (row[col.accessor] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
