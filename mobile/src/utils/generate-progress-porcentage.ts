export function generateProgressPercentage(total: number, completed: number) {
  if (completed === 0 || total === 0) return 0;
  return Math.round((completed / total) * 100);
}
