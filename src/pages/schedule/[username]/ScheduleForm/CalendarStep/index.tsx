import { Calendar } from '../../../../../components/Calendar'
import { Container, TimePicker } from './styles'

export function CalendarStep() {
  const isDateSelected = false

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />
      {isDateSelected && <TimePicker />}
    </Container>
  )
}
