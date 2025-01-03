export interface Week {
  idMeal: number;
  name: string;
  imageUrl: string;
  position: number;
}

export interface ScheduleType {
  week: number;
  meals: Week[];
}

export interface ScheduleState {
  clickAddSchedule: () => void;
  schedule: ScheduleType;
}
