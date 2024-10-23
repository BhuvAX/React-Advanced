# Type Safety

# Instructions

1. Create a `Calendar` component that renders the current month by default.
   - This calendar should have buttons for going back/forward a month as well as for jumping to the current month.
2. Add a `+` button that allows you to create a new event for the specific day.
   - This should open a modal form for adding a new event.
   - The form should include a `name`, `allDay`, `startTime`, `endTime`, and `color` field.
   - The `name` field is required.
   - The `allDay` field should be a checkbox that when checked will disable the `startTime` and `endTime` fields.
   - The `startTime` must be before the `endTime` and are required if `allDay` is not checked.
   - The `color` field should have the options `red`, `blue`, and `green`.
3. Render events in the calendar view.
   - Events should be sorted with all day events first and then by start date.
4. Clicking on an event should open an edit modal.
   - This modal should have the same fields as the add event modal but should be pre-populated with the event data.
   - This modal should also have a delete button for removing an event.
