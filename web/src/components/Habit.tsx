interface HabitProps {
  completed: number;
}

export function Habit({ completed }: HabitProps) {
  return (
    <div>
      <h1 className="bg-green-500">Habit - {completed}</h1>
    </div>
  );
}
